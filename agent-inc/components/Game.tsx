"use client";

import { useEffect, useRef, useState } from "react";
import {
  accuracyChance, agentCost, applyOffline, CAPACITY_COST, CONTEXT_COST, initialProgress,
  MAX_AGENT_LEVEL, MAX_CAPACITY, MAX_STATION_LEVEL, MAX_WORKFLOW, parseProgress,
  PERSONAS, SAVE_KEY, Simulation, stationCost, stationInterval, workflowCost,
} from "../game/simulation";
import type { AgentLevels, OfflineReport, Request } from "../game/simulation";
import { createWorld } from "../game/world";
import { sampleDaylight } from "../game/lighting";

function requestSymbol(request: Request) {
  if (request.status === "complete") return "✓";
  if (request.status === "failed") return "!";
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
  const [systemTab, setSystemTab] = useState<"office" | "stations" | "agents">("office");
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
          if (report.completed > 0) {
            lastCompleted = simulation.progress.completed;
            setOffline(report);
          }
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
          const result = simulation.lastResult;
          setMessage(gained === 1 && result
            ? result.success
              ? `${PERSONAS[result.agentId].name} landed a reply. +${result.amount} tokens.`
              : `${PERSONAS[result.agentId].name}'s reply missed the mark. -${result.amount} tokens.`
            : `${gained} replies handled. The chat room keeps humming.`);
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

  const saveUpgrade = () => {
    if (!simulation) return;
    setRevision((value) => value + 1);
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(simulation.save())); }
    catch { setStorageError("Progress could not be saved. Check browser storage permissions or available space."); }
  };
  const buyCapacity = () => {
    if (!simulation?.buyCapacity()) return;
    setMessage("A new chat station and a new voice join the room.");
    saveUpgrade();
  };
  const buyContext = () => {
    if (!simulation?.unlockContext()) return;
    setMessage("The context chamber materializes. Agents can now carry longer thoughts through it.");
    saveUpgrade();
  };
  const buyWorkflow = () => {
    if (!simulation?.buyWorkflow()) return;
    setMessage("New tools on every desk. Agents finish richer work a little faster.");
    saveUpgrade();
  };
  const buyStation = (id: number) => {
    if (!simulation?.buyStation(id)) return;
    setMessage(`Chat station ${id + 1} has a stronger signal.`);
    saveUpgrade();
  };
  const trainAgent = (id: number, stat: keyof AgentLevels) => {
    if (!simulation?.trainAgent(id, stat)) return;
    setMessage(`${PERSONAS[id].name} sharpened ${stat === "speed" ? "their response rhythm" : "their accuracy"}.`);
    saveUpgrade();
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
  const sipping = simulation?.agents.filter((agent) => agent.state === "idle").length ?? 0;
  const feed = simulation
    ? [
        ...simulation.requests.filter((request) => request.status !== "complete" && request.status !== "failed").reverse(),
        ...simulation.requests.filter((request) => request.status === "complete" || request.status === "failed"),
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
            <div className="scene-live"><span className="tiny-pulse" /> <span className="live-label">{simulation?.paused ? "SIMULATION PAUSED" : "SIMULATING"}</span><span className="live-count"> <span className="footer-sep">·</span> {active} answering {sipping > 0 && <> <span className="footer-sep">·</span> {sipping} on break</>} <span className="footer-sep">·</span> {queued} waiting</span></div>
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
          <div className="sidebar-heading"><span>CHAT ROOM / UPGRADES</span><button type="button" className="sidebar-close" onClick={() => setSystemOpen(false)} aria-label="Close upgrades">×</button></div>
          <div className="sidebar-tabs" role="tablist" aria-label="Upgrade categories">
            {(["office", "stations", "agents"] as const).map((tab) => (
              <button key={tab} id={`tab-${tab}`} type="button" role="tab"
                aria-selected={systemTab === tab} aria-controls={`panel-${tab}`}
                onClick={() => setSystemTab(tab)}>{tab}</button>
            ))}
          </div>
          {systemTab === "office" && (
            <div id="panel-office" role="tabpanel" aria-labelledby="tab-office" className="upgrade-pane">
              <div className="system-card">
                <div className="system-emblem">✦</div>
                <div><div className="system-name">{progress?.context ? "The Thoughtful One" : "The Little Chatbot"}</div><div className="system-desc">Build the room that helps your voices answer well.</div></div>
              </div>
              <div className="mini-metrics">
                <div><span>ACCURATE REPLIES</span><strong>{(progress?.completed ?? 0) - (progress?.errors ?? 0)}</strong></div>
                <div><span>MISSED REPLIES</span><strong>{progress?.errors ?? 0}</strong></div>
              </div>
              <div className="section-title"><span>✦ &nbsp;OFFICE SYSTEMS</span><span>01 / 03</span></div>
              <div className="upgrade-list">
                <div className="upgrade">
                  <div className="upgrade-symbol">✳</div>
                  <div className="upgrade-info">
                    <div className="upgrade-name">Expand capacity <span>{progress?.capacity ?? 1} / {MAX_CAPACITY}</span></div>
                    <p>Open another chat desk and bring a new personality into the room.</p>
                    <button type="button" className="buy-button" onClick={buyCapacity}
                      disabled={!progress || progress.tokens < CAPACITY_COST || progress.capacity >= MAX_CAPACITY}>
                      {progress?.capacity === MAX_CAPACITY ? "CAPACITY MAXED" : <>OPEN DESK <span>✧ {CAPACITY_COST}</span></>}
                    </button>
                  </div>
                </div>
                <div className={`upgrade ${contextAvailable ? "" : "upgrade-locked"}`}>
                  <div className="upgrade-symbol context-symbol">▣</div>
                  <div className="upgrade-info">
                    <div className="upgrade-name">Context chamber <span>{progress?.context ? "ONLINE" : "LOCKED"}</span></div>
                    <p>Longer questions visit this room before reaching their chat station.</p>
                    <button type="button" className="buy-button context-button" onClick={buyContext}
                      disabled={!progress || progress.context || !contextAvailable || progress.tokens < CONTEXT_COST}>
                      {progress?.context ? "CHAMBER ONLINE" : contextAvailable ? <>UNLOCK <span>✧ {CONTEXT_COST}</span></> : "REQUIRES 2 DESKS"}
                    </button>
                  </div>
                </div>
                <div className={`upgrade ${contextAvailable ? "" : "upgrade-locked"}`}>
                  <div className="upgrade-symbol">▤</div>
                  <div className="upgrade-info">
                    <div className="upgrade-name">Shared tools <span>LVL {progress?.workflow ?? 0} / {MAX_WORKFLOW}</span></div>
                    <p>Give every agent a workstation kit: 10% faster desk work and +1 token per successful reply per tier.</p>
                    <button type="button" className="buy-button" onClick={buyWorkflow}
                      disabled={!progress || !contextAvailable || progress.workflow >= MAX_WORKFLOW || progress.tokens < workflowCost(progress.workflow)}>
                      {progress?.workflow === MAX_WORKFLOW ? "TOOLS MAXED" : contextAvailable ? <>EQUIP <span>✧ {workflowCost(progress?.workflow ?? 0)}</span></> : "REQUIRES 2 DESKS"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {systemTab === "stations" && (
            <div id="panel-stations" role="tabpanel" aria-labelledby="tab-stations" className="upgrade-pane">
              <div className="pane-intro"><strong>Chat stations</strong><span>Each desk receives its own requests. Stronger signals bring questions more often; answers still depend on its agent.</span></div>
              {Array.from({ length: MAX_CAPACITY }, (_, id) => {
                const level = progress?.stationLevels[id] ?? 0;
                const staffed = id < (progress?.capacity ?? 1);
                const cost = stationCost(level);
                const request = simulation?.requests.find((r) => r.stationId === id &&
                  (r.status === "queued" || r.status === "assigned" || r.status === "working"));
                return (
                  <div className={`upgrade station-card ${staffed ? "" : "upgrade-locked"}`} key={id}>
                    <div className="station-number">{String(id + 1).padStart(2, "0")}</div>
                    <div className="upgrade-info">
                      <div className="upgrade-name">Desk {id + 1} <span>{staffed ? `SIGNAL ${level} / ${MAX_STATION_LEVEL}` : "UNSTAFFED"}</span></div>
                      <p>{staffed ? `A new question about every ${stationInterval(level).toFixed(1)}s when free. ${request ? request.status === "working" ? "Answer in progress." : "New question waiting." : "Waiting for a question."}` : "Open this desk in Office to begin receiving requests."}</p>
                      <button type="button" className="buy-button" onClick={() => buyStation(id)}
                        disabled={!progress || !staffed || level >= MAX_STATION_LEVEL || progress.tokens < cost}>
                        {!staffed ? "OPEN DESK FIRST" : level >= MAX_STATION_LEVEL ? "SIGNAL MAXED" : <>BOOST SIGNAL <span>✧ {cost}</span></>}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {systemTab === "agents" && (
            <div id="panel-agents" role="tabpanel" aria-labelledby="tab-agents" className="upgrade-pane">
              <div className="pane-intro"><strong>The voices</strong><span>Give each agent its own strengths. Accurate replies earn tokens; a missed reply costs up to 3 (5 for context).</span></div>
              {PERSONAS.map((persona, id) => {
                const levels = progress?.agentLevels[id] ?? { speed: 0, accuracy: 0 };
                const staffed = id < (progress?.capacity ?? 1);
                return (
                  <div className={`persona-card ${staffed ? "" : "persona-locked"}`} key={persona.name}>
                    <div className="persona-heading">
                      <span className="persona-avatar" style={{ backgroundColor: persona.accent }}>{persona.name.slice(0, 1)}</span>
                      <span><strong>{persona.name}</strong><small>{persona.role} · Desk {id + 1}</small></span>
                      {!staffed && <span className="persona-lock">LOCKED</span>}
                    </div>
                    <div className="persona-stats">
                      <div><span>RHYTHM</span><strong>{levels.speed * 12}% faster</strong></div>
                      <div><span>ACCURACY</span><strong>{Math.round(accuracyChance(levels.accuracy) * 100)}%</strong></div>
                    </div>
                    {(["speed", "accuracy"] as const).map((stat) => (
                      <button type="button" className="buy-button persona-buy" key={stat} onClick={() => trainAgent(id, stat)}
                        disabled={!progress || !staffed || levels[stat] >= MAX_AGENT_LEVEL || progress.tokens < agentCost(stat, levels[stat])}>
                        {stat === "speed" ? "TRAIN RHYTHM" : "TRAIN ACCURACY"}
                        <span>{!staffed ? "OPEN DESK FIRST" : levels[stat] >= MAX_AGENT_LEVEL ? "MAXED" : `✧ ${agentCost(stat, levels[stat])}`}</span>
                      </button>
                    ))}
                  </div>
                );
              })}
            </div>
          )}
          <div className="side-hint">✧ &nbsp;Signal brings questions. Training determines how fast and how reliably they are answered.</div>
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
              <span className="feed-task">#{request.stationId + 1} {request.title}</span>
              {request.kind === "context" && <span className="request-kind">CONTEXT</span>}
              <span className="feed-status">{request.status === "complete" ? `+${request.reward} ✧` :
                request.status === "failed" ? `MISSED -${request.loss ?? 0} ✧` :
                request.status === "working" ? `${Math.round(request.progress * 100)}%` :
                request.status === "assigned" ? `${PERSONAS[request.agentId!].name.toUpperCase()} EN ROUTE` : "WAITING"}</span>
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
            <p>While you were away, your system answered <strong>{offline.completed} requests</strong> and gathered <strong>+{offline.tokens} net tokens</strong>.</p>
            <button type="button" onClick={() => setOffline(null)}>LOVELY, LET&apos;S SEE →</button>
          </div>
        </div>
      )}
      {storageError && <div className="storage-error" role="alert">{storageError}<button type="button" onClick={() => setStorageError("")} aria-label="Dismiss warning">×</button></div>}
      {debug && <div className="debug-panel">
        <span>SIM {simulation?.time.toFixed(1) ?? 0}s</span><span>FPS {fps}</span>
        <span>AGENTS {simulation?.agents.length ?? 0}</span><span>QUEUE {queued}</span>
        <span>ACTIVE {active}</span><span>MISSED {progress?.errors ?? 0}</span>
        <span>TOKENS {progress?.tokens ?? 0}</span><span>SPEED {simulation?.speed ?? 1}×</span>
      </div>}
    </main>
  );
}
