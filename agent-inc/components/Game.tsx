"use client";

import { useEffect, useRef, useState } from "react";
import {
  applyOffline, CAPACITY_COST, CONTEXT_COST, initialProgress, MAX_CAPACITY,
  MAX_WORKFLOW, parseProgress, SAVE_KEY, Simulation, workflowCost,
} from "../game/simulation";
import type { OfflineReport, Request } from "../game/simulation";
import { createWorld } from "../game/world";
import { sampleDaylight } from "../game/lighting";

function requestSymbol(request: Request) {
  if (request.status === "complete") return "✓";
  if (request.status === "working") return "◉";
  if (request.status === "assigned") return "↗";
  return "◌";
}

export default function Game() {
  const [simulation, setSimulation] = useState<Simulation | null>(null);
  const [revision, setRevision] = useState(0);
  const [offline, setOffline] = useState<OfflineReport | null>(null);
  const [message, setMessage] = useState("A little intelligence is waking up.");
  const [storageError, setStorageError] = useState("");
  const [debug, setDebug] = useState(false);
  const [systemOpen, setSystemOpen] = useState(false);
  const [feedOpen, setFeedOpen] = useState(false);
  const [fps, setFps] = useState(0);
  const [previewOffset, setPreviewOffset] = useState(0);
  const previewRef = useRef(0);
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(SAVE_KEY);
    } catch {
      setStorageError("Local storage is unavailable; progress cannot be saved in this browser.");
    }
    const loaded = parseProgress(saved);
    if (saved && !loaded) setStorageError("Saved progress could not be read. A new system has been started.");
    const progress = loaded ?? initialProgress();
    if (loaded) {
      const report = applyOffline(progress, Date.now());
      if (report.completed > 0) setOffline(report);
    }
    setSimulation(new Simulation(progress));
  }, []);

  useEffect(() => {
    if (!simulation || !host.current) return;
    let world: ReturnType<typeof createWorld> | null = null;
    try {
      world = createWorld(host.current, simulation);
    } catch (error) {
      host.current.classList.add("static-fallback");
      setStorageError(`The 3D office could not start; requests and upgrades still run. ${error instanceof Error ? error.message : String(error)}`);
    }
    let raf = 0;
    let last = performance.now();
    let accumulator = 0;
    let lastUI = 0;
    let lastSave = last;
    let lastCompleted = simulation.progress.completed;
    let frames = 0;
    let fpsStart = last;

    const save = () => {
      try {
        localStorage.setItem(SAVE_KEY, JSON.stringify(simulation.save()));
      } catch {
        setStorageError("Progress could not be saved. Check browser storage permissions or available space.");
      }
    };
    const onVisibility = () => {
      if (document.hidden) {
        save();
        last = performance.now();
      } else {
        if (!simulation.paused) {
          const report = applyOffline(simulation.progress, Date.now());
          if (report.completed > 0) setOffline(report);
        } else simulation.progress.savedAt = Date.now();
        save();
        last = performance.now();
        accumulator = 0;
        setRevision((value) => value + 1);
      }
    };
    const frame = (now: number) => {
      const elapsed = Math.min((now - last) / 1000, 0.2);
      last = now;
      if (!document.hidden) {
        accumulator += elapsed;
        while (accumulator >= 1 / 30) {
          simulation.update(1 / 30);
          accumulator -= 1 / 30;
        }
        world?.render(now / 1000, previewRef.current);
        frames++;
        if (now - fpsStart > 1000) {
          setFps(Math.round(frames * 1000 / (now - fpsStart)));
          frames = 0;
          fpsStart = now;
        }
        if (simulation.progress.completed > lastCompleted) {
          const gained = simulation.progress.completed - lastCompleted;
          lastCompleted = simulation.progress.completed;
          setMessage(`${gained === 1 ? "A request" : `${gained} requests`} answered. Your little system is learning to hum.`);
          save();
        }
        if (now - lastUI > 180) {
          setRevision((value) => value + 1);
          lastUI = now;
        }
        if (now - lastSave > 5000) {
          save();
          lastSave = now;
        }
      }
      raf = requestAnimationFrame(frame);
    };
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pagehide", save);
    raf = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(raf);
      save();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pagehide", save);
      world?.dispose();
      host.current?.classList.remove("static-fallback");
    };
  }, [simulation]);

  const buyCapacity = () => {
    if (!simulation?.buyCapacity()) return;
    setMessage("A new desk comes online. More signals are finding their way to the team.");
    setRevision((value) => value + 1);
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(simulation.save())); }
    catch { setStorageError("Progress could not be saved. Check browser storage permissions or available space."); }
  };
  const buyContext = () => {
    if (!simulation?.unlockContext()) return;
    setMessage("The context chamber materializes. Agents can now carry longer thoughts through it.");
    setRevision((value) => value + 1);
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(simulation.save())); }
    catch { setStorageError("Progress could not be saved. Check browser storage permissions or available space."); }
  };
  const buyWorkflow = () => {
    if (!simulation?.buyWorkflow()) return;
    setMessage("New tools on every desk. Agents finish richer work a little faster.");
    setRevision((value) => value + 1);
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(simulation.save())); }
    catch { setStorageError("Progress could not be saved. Check browser storage permissions or available space."); }
  };
  const togglePause = () => {
    if (!simulation) return;
    simulation.paused = !simulation.paused;
    setRevision((value) => value + 1);
  };
  const toggleSpeed = () => {
    if (!simulation) return;
    simulation.speed = simulation.speed === 1 ? 2 : 1;
    setRevision((value) => value + 1);
  };
  const previewNextLight = () => {
    previewRef.current = (previewRef.current + 0.25) % 1;
    setPreviewOffset(previewRef.current);
  };

  // React receives coarse snapshots; agent positions are read directly by Three.js.
  void revision;
  const progress = simulation?.progress;
  const queued = simulation?.requests.filter((request) => request.status === "queued").length ?? 0;
  const active = simulation?.requests.filter((request) => request.status === "working" || request.status === "assigned").length ?? 0;
  const tending = simulation?.agents.filter((agent) => agent.state === "upkeep" || agent.state === "inspecting").length ?? 0;
  const feed = simulation
    ? [
        ...simulation.requests.filter((request) => request.status !== "complete").reverse(),
        ...simulation.requests.filter((request) => request.status === "complete"),
      ].slice(0, 7)
    : [];
  const contextAvailable = (progress?.capacity ?? 0) >= 2;
  const daylight = sampleDaylight(simulation?.time ?? 0, previewOffset);

  return (
    <main className="shell">
      <header className="topbar">
        <div className="identity" aria-label="Agent Inc.">
          <span className="brand-icon" aria-hidden="true">✦</span>
          <div>
            <div className="brand">agent<span>inc.</span></div>
          </div>
        </div>
        <div className="top-stats">
          <div className="stat"><span className="stat-label">✧ &nbsp;TOKENS</span><strong>{progress?.tokens.toLocaleString() ?? "—"}</strong></div>
          <div className="stat"><span className="stat-label">◈ &nbsp;CAPACITY</span><strong>{progress?.capacity ?? 1} <small>/ {MAX_CAPACITY}</small></strong></div>
          <div className="stat desktop-stat"><span className="stat-label">◌ &nbsp;RESOLVED</span><strong>{progress?.completed ?? 0}</strong></div>
          <button type="button" className="system-toggle" aria-expanded={systemOpen} aria-controls="system-panel"
            onClick={() => setSystemOpen((open) => !open)}>{systemOpen ? "CLOSE" : "UPGRADES"} <span aria-hidden="true">✳</span></button>
        </div>
      </header>

      <div className="layout">
        <section className="world-panel" aria-label="Office simulation">
          <div className="scene-header">
            <div><span className="online-dot" /> ONLINE</div>
            <div className="scene-tools">
              <button type="button" className="time-preview" onClick={previewNextLight}
                title="Preview the next six hours of office lighting" aria-label={`Office time ${daylight.label}; preview next six hours`}>
                <span aria-hidden="true">{daylight.sun > 1 ? "☼" : daylight.moon > 0.2 ? "☾" : "◑"}</span> {daylight.label} <span className="time-arrow">↻</span>
              </button>
            </div>
          </div>
          <div ref={host} className="world-host">
            {!simulation && <div className="boot-message">WAKING UP THE OFFICE…</div>}
            <div className="world-callout">
              <span className="callout-star">✦</span>
              <span>{message}</span>
            </div>
          </div>
          <div className="scene-footer">
            <div className="scene-live"><span className="tiny-pulse" /> <span className="live-label">{simulation?.paused ? "SIMULATION PAUSED" : "SIMULATING"}</span><span className="live-count"> <span className="footer-sep">·</span> {active} processing {tending > 0 && <> <span className="footer-sep">·</span> {tending} tending</>} <span className="footer-sep">·</span> {queued} in queue</span></div>
            <div className="scene-controls">
              <button type="button" onClick={togglePause} title={simulation?.paused ? "Resume simulation" : "Pause simulation"}
                aria-label={simulation?.paused ? "Resume simulation" : "Pause simulation"}>{simulation?.paused ? "▶" : "Ⅱ"}</button>
              <button type="button" onClick={toggleSpeed} title="Toggle simulation speed"
                aria-label={`Set simulation to ${simulation?.speed === 1 ? "double" : "normal"} speed`}>{simulation?.speed ?? 1}×</button>
              <button type="button" onClick={() => setDebug(!debug)} title="Toggle debug metrics"
                aria-label={debug ? "Hide debug metrics" : "Show debug metrics"} aria-expanded={debug}>⋯</button>
            </div>
          </div>
        </section>

        <aside id="system-panel" className={`sidebar ${systemOpen ? "sidebar-open" : ""}`}>
          <div className="sidebar-heading"><span>YOUR SYSTEM</span><button type="button" className="sidebar-close" onClick={() => setSystemOpen(false)} aria-label="Close upgrades">×</button></div>
          <div className="system-card">
            <div className="system-emblem">✦</div>
            <div><div className="system-name">{progress?.context ? "The Thoughtful One" : "The Little Chatbot"}</div><div className="system-desc">You are the intelligence. Give your little processes room to grow.</div></div>
          </div>
          <div className="mini-metrics">
            <div><span>ACTIVE AGENTS</span><strong>{simulation?.agents.length ?? 1}</strong></div>
            <div><span>TOTAL EARNED</span><strong>{progress?.earned.toLocaleString() ?? 0}</strong></div>
          </div>

          <div className="section-title"><span>✦ &nbsp;GROW YOUR MIND</span><span>01 / 03</span></div>
          <div className="upgrade-list">
            <div className="upgrade">
              <div className="upgrade-symbol">✳</div>
              <div className="upgrade-info">
                <div className="upgrade-name">Expand capacity <span>LVL {progress?.capacity ?? 1}</span></div>
                <p>Activate another agent and desk. More incoming signals keep the growing team busy.</p>
                <button type="button" className="buy-button" onClick={buyCapacity}
                  disabled={!progress || progress.tokens < CAPACITY_COST || progress.capacity >= MAX_CAPACITY}>
                  {progress?.capacity === MAX_CAPACITY ? "CAPACITY MAXED" : <>ACTIVATE <span>✧ {CAPACITY_COST}</span></>}
                </button>
              </div>
            </div>
            <div className={`upgrade ${contextAvailable ? "" : "upgrade-locked"}`}>
              <div className="upgrade-symbol context-symbol">▣</div>
              <div className="upgrade-info">
                <div className="upgrade-name">Context chamber <span>{progress?.context ? "ONLINE" : "LOCKED"}</span></div>
                <p>A whole new room for longer thoughts. Agents visit it to solve richer requests.</p>
                <button type="button" className="buy-button context-button" onClick={buyContext}
                  disabled={!progress || progress.context || !contextAvailable || progress.tokens < CONTEXT_COST}>
                  {progress?.context ? "CHAMBER ONLINE" : contextAvailable ? <>UNLOCK <span>✧ {CONTEXT_COST}</span></> : "REQUIRES CAPACITY 2"}
                </button>
              </div>
            </div>
            <div className={`upgrade ${contextAvailable ? "" : "upgrade-locked"}`}>
              <div className="upgrade-symbol">▤</div>
              <div className="upgrade-info">
                <div className="upgrade-name">Workstation kits <span>LVL {progress?.workflow ?? 0} / {MAX_WORKFLOW}</span></div>
                <p>Equip every active desk. Each kit tier speeds up desk work by 10%, adds a token per request, and invites more signals.</p>
                <button type="button" className="buy-button" onClick={buyWorkflow}
                  disabled={!progress || !contextAvailable || progress.workflow >= MAX_WORKFLOW || progress.tokens < workflowCost(progress.workflow)}>
                  {progress?.workflow === MAX_WORKFLOW ? "KITS MAXED" : contextAvailable ? <>EQUIP <span>✧ {workflowCost(progress?.workflow ?? 0)}</span></> : "REQUIRES CAPACITY 2"}
                </button>
              </div>
            </div>
          </div>
          <div className="side-hint">✧ &nbsp;More desks bring more work. Free agents tend the office until the next signal arrives.</div>
        </aside>
      </div>

      <section className={`feed-panel ${feedOpen ? "feed-open" : ""}`} aria-label="Request feed">
        <button type="button" className="feed-top" onClick={() => setFeedOpen((open) => !open)}
          aria-expanded={feedOpen} aria-controls="signal-list">
          <span><span className="feed-glyph">◈</span> SIGNALS <span className="feed-count">{queued + active} LIVE</span></span>
          <span className="feed-chevron" aria-hidden="true">{feedOpen ? "⌄" : "⌃"}</span>
        </button>
        <div id="signal-list" className="feed-list" aria-live="off">
          {feed.length === 0 && <div className="feed-empty"><span>◌</span> Listening for the first hello…</div>}
          {feed.map((request) => (
            <div className={`feed-item feed-${request.status}`} key={request.id}>
              <span className="feed-icon">{requestSymbol(request)}</span>
              <span className="feed-task">{request.title}</span>
              {request.kind === "context" && <span className="request-kind">CONTEXT</span>}
              <span className="feed-status">{request.status === "complete" ? `+${request.reward} ✧` :
                request.status === "working" ? `${Math.round(request.progress * 100)}%` :
                request.status === "assigned" ? `AGENT ${request.agentId! + 1} MOVING` : "WAITING"}</span>
              {request.status === "working" && <span className="progress-track"><span style={{ width: `${request.progress * 100}%` }} /></span>}
            </div>
          ))}
        </div>
      </section>

      {offline && offline.completed > 0 && (
        <div className="welcome-back" role="dialog" aria-label="Offline progress">
          <div className="welcome-card">
            <span className="welcome-spark">✧</span>
            <span className="eyebrow">WELCOME BACK, INTELLIGENCE</span>
            <h2>The office kept humming.</h2>
            <p>While you were away, your system answered <strong>{offline.completed} requests</strong> and gathered <strong>+{offline.tokens} tokens</strong>.</p>
            <button type="button" onClick={() => setOffline(null)}>LOVELY, LET&apos;S SEE →</button>
          </div>
        </div>
      )}
      {storageError && <div className="storage-error" role="alert">{storageError}<button type="button" onClick={() => setStorageError("")} aria-label="Dismiss warning">×</button></div>}
      {debug && <div className="debug-panel">
        <span>SIM {simulation?.time.toFixed(1) ?? 0}s</span><span>FPS {fps}</span>
        <span>AGENTS {simulation?.agents.length ?? 0}</span><span>QUEUE {queued}</span>
        <span>ACTIVE {active}</span><span>DONE {progress?.completed ?? 0}</span>
        <span>TOKENS {progress?.tokens ?? 0}</span><span>SPEED {simulation?.speed ?? 1}×</span>
      </div>}
    </main>
  );
}
