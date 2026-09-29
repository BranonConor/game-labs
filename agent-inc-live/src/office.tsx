import { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  COFFEE_SPOTS, DESKS, initialProgress, Simulation,
} from "../../agent-inc/game/simulation";
import type { Agent, Request } from "../../agent-inc/game/simulation";
import { sampleDaylight } from "../../agent-inc/game/lighting";
import { createWorld, LIVE_COFFEE_Z } from "../../agent-inc/game/world";
import { roomActors, sessionName } from "./room";
import type { Actor, Room } from "./room";

const MAX_DESKS = DESKS.length;
const LIVE_COFFEE_SPOTS = COFFEE_SPOTS.map(({ x }) => ({ x, z: LIVE_COFFEE_Z + 0.75 }));
const STEP = 1 / 30;
const emptyRoom: Room = { currentSessionId: "", sessions: [] };

function makeAgent(id: number): Agent {
  return {
    id, state: "idle", x: 100, z: 100, target: { x: 100, z: 100 },
    route: [], workLeft: 0, workTotal: 0, visitedContext: false,
  };
}

function makeScene() {
  const scene = new Simulation(initialProgress());
  scene.agents = Array.from({ length: MAX_DESKS }, (_, id) => makeAgent(id));
  scene.requests = [];
  scene.progress.capacity = 0;
  scene.progress.context = false;
  scene.progress.workflow = 1;
  return scene;
}

function applyRoom(scene: Simulation, actors: Actor[], occupied: boolean[]) {
  const shown = actors.slice(0, MAX_DESKS);
  scene.progress.capacity = shown.length;
  scene.requests = [];
  shown.forEach((actor, id) => {
    const agent = scene.agents[id];
    const busy = actor.status !== "idle" && actor.status !== "offline";
    const destination = busy ? DESKS[id] : LIVE_COFFEE_SPOTS[id];
    if (!occupied[id]) {
      agent.x = destination.x;
      agent.z = destination.z;
    }
    occupied[id] = true;
    agent.target = { ...destination };
    if (busy) {
      agent.taskId = id + 1;
      const status: Request["status"] = actor.status === "blocked" ? "failed" :
        actor.status === "thinking" ? "assigned" : "working";
      scene.requests.push({
        id: id + 1, stationId: id, title: actor.activity, kind: "chat",
        status, progress: 0, reward: 0,
        ...(status === "failed" ? { resolvedAt: scene.time } : {}),
      });
    } else {
      agent.taskId = undefined;
    }
  });
  for (let id = shown.length; id < MAX_DESKS; id++) {
    occupied[id] = false;
    const agent = scene.agents[id];
    agent.x = agent.z = 100;
    agent.target = { x: 100, z: 100 };
    agent.taskId = undefined;
    agent.state = "idle";
  }
}

function moveAgents(scene: Simulation, delta: number) {
  for (let id = 0; id < scene.progress.capacity; id++) {
    const agent = scene.agents[id];
    const dx = agent.target.x - agent.x;
    const dz = agent.target.z - agent.z;
    const distance = Math.hypot(dx, dz);
    const busy = agent.taskId !== undefined;
    if (distance > 0.02) {
      const step = Math.min(distance, 2.05 * delta);
      agent.x += dx / distance * step;
      agent.z += dz / distance * step;
      agent.state = busy ? "walking" : "returning";
    } else {
      agent.x = agent.target.x;
      agent.z = agent.target.z;
      agent.state = busy ? "working" : "idle";
    }
  }
}

function LiveOffice() {
  const [room, setRoom] = useState<Room>(emptyRoom);
  const [connection, setConnection] = useState("Connecting to local Copilot sessions…");
  const [panelOpen, setPanelOpen] = useState(false);
  const [tab, setTab] = useState<"office" | "stations" | "agents">("office");
  const [feedOpen, setFeedOpen] = useState(false);
  const [debug, setDebug] = useState(false);
  const [fps, setFps] = useState(0);
  const [previewOffset, setPreviewOffset] = useState(0);
  const [ambiencePaused, setAmbiencePaused] = useState(false);
  const [ambientSpeed, setAmbientSpeed] = useState(1);
  const [selected, setSelected] = useState("");
  const [hover, setHover] = useState<{ name: string; x: number; y: number } | null>(null);
  const host = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<Simulation | null>(null);
  const worldRef = useRef<ReturnType<typeof createWorld> | null>(null);
  const actorsRef = useRef<Actor[]>([]);
  const selectedCard = useRef<HTMLDivElement>(null);
  const focusedKey = useRef("");
  const previewRef = useRef(0);
  const pauseRef = useRef(false);
  const speedRef = useRef(1);

  const selectActor = (key: string, showAgents = true) => {
    const index = actorsRef.current.findIndex((actor) => actor.key === key);
    worldRef.current?.focusAgent(index >= 0 && index < MAX_DESKS ? index : null);
    focusedKey.current = `${key}:${index}`;
    setSelected(key);
    setPanelOpen(true);
    if (showAgents) setTab("agents");
  };

  useEffect(() => {
    if (panelOpen && tab === "agents") {
      selectedCard.current?.scrollIntoView({
        block: "nearest", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      });
    }
  }, [selected, panelOpen, tab]);

  useEffect(() => {
    if (!host.current) return;
    const scene = makeScene();
    sceneRef.current = scene;
    const occupied = Array(MAX_DESKS).fill(false) as boolean[];
    let world: ReturnType<typeof createWorld> | undefined;
    try {
      world = createWorld(host.current, scene, "live", {
        onAgentHover(index, clientX, clientY) {
          const actor = index === null ? undefined : actorsRef.current[index];
          const rect = host.current?.getBoundingClientRect();
          setHover(actor && rect ? { name: actor.name, x: clientX - rect.left, y: clientY - rect.top } : null);
        },
        onAgentSelect(index) {
          const actor = actorsRef.current[index];
          if (actor) selectActor(actor.key);
        },
      });
      worldRef.current = world;
    } catch (error) {
      host.current.classList.add("static-fallback");
      setConnection(`3D office unavailable; live status remains visible. ${error instanceof Error ? error.message : String(error)}`);
    }
    const feed = new EventSource("/events");
    feed.onmessage = (event) => {
      try {
        const update = JSON.parse(event.data) as Room;
        if (!Array.isArray(update.sessions) || typeof update.currentSessionId !== "string") {
          throw new Error("Invalid office status");
        }
        const nextActors = roomActors(update);
        actorsRef.current = nextActors;
        world?.capturePositions();
        applyRoom(scene, nextActors, occupied);
        setRoom(update);
        setConnection("Live read-only view · local sessions running Agent Inc Live");
      } catch (error) {
        setConnection(`Office update failed: ${error instanceof Error ? error.message : String(error)}`);
      }
    };
    feed.addEventListener("error", () => {
      setConnection("Connection interrupted; reconnecting to the local office…");
    });
    let raf = 0;
    let last = performance.now();
    let accumulator = 0;
    let animationTime = last / 1000;
    let frames = 0;
    let fpsStart = last;
    const onVisibility = () => {
      last = performance.now();
      accumulator = 0;
      world?.capturePositions();
    };
    const frame = (now: number) => {
      const elapsed = Math.min((now - last) / 1000, 0.2);
      last = now;
      if (!document.hidden) {
        accumulator += elapsed;
        let advanced = false;
        while (accumulator >= STEP) {
          world?.capturePositions();
          moveAgents(scene, STEP);
          if (!pauseRef.current) scene.time += STEP * speedRef.current;
          accumulator -= STEP;
          advanced = true;
        }
        if (!pauseRef.current) animationTime += elapsed * speedRef.current;
        world?.render(animationTime, previewRef.current, accumulator / STEP, advanced);
        frames++;
        if (now - fpsStart >= 1000) {
          setFps(Math.round(frames * 1000 / (now - fpsStart)));
          frames = 0;
          fpsStart = now;
        }
      }
      raf = requestAnimationFrame(frame);
    };
    document.addEventListener("visibilitychange", onVisibility);
    raf = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVisibility);
      feed.close();
      world?.dispose();
      worldRef.current = null;
      sceneRef.current = null;
    };
  }, []);

  const actors = roomActors(room);
  const visible = actors.slice(0, MAX_DESKS);
  const working = actors.filter((actor) => actor.status === "thinking" || actor.status === "tool").length;
  const idle = actors.filter((actor) => actor.status === "idle").length;
  const blocked = actors.filter((actor) => actor.status === "blocked").length;
  const helpers = room.sessions.reduce((sum, session) => sum + session.subagents.length, 0);
  const messages = room.sessions.reduce((sum, session) => sum + (session.messages ?? 0), 0);
  const signals = room.sessions.flatMap((session) => (session.events ?? []).map((event, index) => ({
    ...event, owner: sessionName(session, room.currentSessionId),
    key: `${session.sessionId}:${event.at}:${index}`,
  }))).sort((a, b) => b.at - a.at).slice(0, 8);
  useEffect(() => {
    const index = actors.findIndex((actor) => actor.key === selected);
    const key = `${selected}:${index}`;
    if (focusedKey.current !== key) {
      worldRef.current?.focusAgent(index >= 0 && index < MAX_DESKS ? index : null);
      focusedKey.current = key;
    }
    if (selected && index < 0) {
      setSelected("");
      setHover(null);
    }
  }, [room, selected]);
  const daylight = sampleDaylight(sceneRef.current?.time ?? 0, previewOffset);
  const previewLight = () => {
    previewRef.current = (previewRef.current + 0.25) % 1;
    setPreviewOffset(previewRef.current);
  };
  const togglePause = () => {
    pauseRef.current = !pauseRef.current;
    setAmbiencePaused(pauseRef.current);
  };
  const toggleSpeed = () => {
    speedRef.current = speedRef.current === 1 ? 2 : 1;
    setAmbientSpeed(speedRef.current);
  };

  return (
    <main className="shell">
      <header className="topbar">
        <div className="identity" aria-label="Agent Inc Live Office">
          <span className="brand-icon" aria-hidden="true">✦</span>
          <div className="brand">agent<span>inc.</span></div>
        </div>
        <div className="top-stats">
          <div className="stat"><span className="stat-label">✧ &nbsp;SESSIONS</span><strong>{room.sessions.length}</strong></div>
          <div className="stat"><span className="stat-label">◈ &nbsp;WORKING</span><strong>{working}</strong></div>
          <div className="stat desktop-stat"><span className="stat-label">◌ &nbsp;MESSAGES</span><strong>{messages}</strong></div>
          <button type="button" className="system-toggle" aria-expanded={panelOpen} aria-controls="system-panel"
            onClick={() => setPanelOpen((open) => !open)}>{panelOpen ? "CLOSE" : "ACTIVITY"} <span aria-hidden="true">✳</span></button>
        </div>
      </header>
      <div className="layout">
        <section className="world-panel" aria-label="Live Copilot office">
          <div className="scene-header">
            <div><span className="online-dot" /> LIVE OFFICE</div>
            <div className="scene-tools">
              <button type="button" className="time-preview" onClick={previewLight}
                title="Preview the next six hours of decorative office lighting"
                aria-label={`Office lighting ${daylight.label}; preview next six hours`}>
                <span aria-hidden="true">{daylight.sun > 1 ? "☼" : daylight.moon > 0.2 ? "☾" : "◑"}</span> {daylight.label} <span className="time-arrow">↻</span>
              </button>
            </div>
          </div>
          <div ref={host} className="world-host">
            {hover && <div className="agent-hover" style={{ left: hover.x, top: hover.y }}>{hover.name}</div>}
            <div className="world-callout live-callout"><span className="callout-star">✦</span>
              <span>{blocked ? `${blocked} worker${blocked === 1 ? "" : "s"} need attention.` :
                working ? `${working} worker${working === 1 ? " is" : "s are"} active.` :
                  "The office is listening for Copilot activity."}</span>
            </div>
          </div>
          <div className="scene-footer">
            <div className="scene-live"><span className="tiny-pulse" />
              <span className="live-label">OBSERVING</span>
              <span className="live-count"> <span className="footer-sep">·</span> {working} working
                <span className="footer-sep">·</span> {idle} on break
                <span className="footer-sep">·</span> {blocked} needing attention</span>
            </div>
            <div className="scene-controls">
              <button type="button" onClick={togglePause}
                title="Pause only decorative light and idle motion, not live sessions"
                aria-label={ambiencePaused ? "Resume office ambience" : "Pause office ambience"}>{ambiencePaused ? "▶" : "Ⅱ"}</button>
              <button type="button" onClick={toggleSpeed} title="Change cosmetic lighting speed only"
                aria-label={`Set office ambience to ${ambientSpeed === 1 ? "double" : "normal"} speed`}>{ambientSpeed}×</button>
              <button type="button" onClick={() => setDebug(!debug)} title="Toggle view diagnostics"
                aria-label={debug ? "Hide diagnostics" : "Show diagnostics"} aria-expanded={debug}>⋯</button>
            </div>
          </div>
        </section>
        <aside id="system-panel" className={`sidebar ${panelOpen ? "sidebar-open" : ""}`}>
          <div className="sidebar-heading"><span>LIVE OFFICE / ACTIVITY</span>
            <button type="button" className="sidebar-close" onClick={() => setPanelOpen(false)} aria-label="Close activity">×</button>
          </div>
          <div className="sidebar-tabs" role="tablist" aria-label="Activity categories">
            {(["office", "stations", "agents"] as const).map((item) => (
              <button key={item} type="button" id={`tab-${item}`} role="tab"
                aria-selected={tab === item} aria-controls={`panel-${item}`} onClick={() => setTab(item)}>{item}</button>
            ))}
          </div>
          {tab === "office" && (
            <div id="panel-office" role="tabpanel" aria-labelledby="tab-office" className="upgrade-pane">
              <div className="system-card">
                <div className="system-emblem">✦</div>
                <div><div className="system-name">The Living Office</div>
                  <div className="system-desc">Real sessions, displayed without prompts, code or tool output.</div></div>
              </div>
              <div className="mini-metrics">
                <div><span>LOCAL SESSIONS</span><strong>{room.sessions.length}</strong></div>
                <div><span>MESSAGES SEEN</span><strong>{messages}</strong></div>
              </div>
              <div className="live-detail"><span>{helpers} subagents</span><span>{signals.length} recent events</span></div>
              <div className="section-title"><span>✦ &nbsp;OFFICE SYSTEMS</span><span>READ ONLY</span></div>
              <div className="upgrade-list">
                <div className="upgrade"><div className="upgrade-symbol">◈</div>
                  <div className="upgrade-info"><div className="upgrade-name">Live status <span>CONNECTED</span></div>
                    <p>{connection}</p>
                    <div className="live-detail"><span>{working} active</span><span>{idle} idle</span><span className={blocked ? "attention" : ""}>{blocked} need attention</span></div>
                  </div>
                </div>
                <div className="upgrade"><div className="upgrade-symbol context-symbol">▣</div>
                  <div className="upgrade-info"><div className="upgrade-name">Project room <span>{visible.length} / {MAX_DESKS} DESKS</span></div>
                    <p>Additional sessions and helpers stay visible in the lists below. Only sessions running this extension can join.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {tab === "stations" && (
            <div id="panel-stations" role="tabpanel" aria-labelledby="tab-stations" className="upgrade-pane">
              <div className="pane-intro"><strong>Session desks</strong>
                <span>Each desk represents actual local Copilot activity. Selection highlights its status here; the canvas cannot navigate App sessions.</span>
              </div>
              {visible.map((actor, id) => (
                <div className="upgrade station-card live-card" key={actor.key}>
                  <div className="station-number">{String(id + 1).padStart(2, "0")}</div>
                  <div className="upgrade-info">
                    <div className="upgrade-name">{actor.name} <span>{actor.status.toUpperCase()}</span></div>
                    <p>{actor.sessionTitle}</p>
                    <p>{actor.activity}</p>
                    <button type="button" className="buy-button" aria-pressed={selected === actor.key}
                      onClick={() => selectActor(actor.key, false)}>{selected === actor.key ? "SELECTED" : "FIND AGENT"} <span>◈ {id + 1}</span></button>
                  </div>
                </div>
              ))}
              {!visible.length && <div className="pane-intro">Waiting for the first participating session.</div>}
            </div>
          )}
          {tab === "agents" && (
            <div id="panel-agents" role="tabpanel" aria-labelledby="tab-agents" className="upgrade-pane">
              <div className="pane-intro"><strong>The workers</strong><span>Subagents appear as additional workers when a desk is free. No training or upgrades alter real Copilot sessions.</span></div>
              {actors.map((actor, index) => (
                <div className={`persona-card ${selected === actor.key ? "persona-selected" : ""}`}
                  key={actor.key} ref={selected === actor.key ? selectedCard : undefined}>
                  <div className="persona-heading"><span className="persona-avatar" style={{ backgroundColor: actor.helper ? "#b49ccc" : "#78bea6" }}>
                    {actor.helper ? "✳" : "✦"}</span>
                    <span><button type="button" className="agent-name" onClick={() => selectActor(actor.key)}
                      aria-label={`Find ${actor.name} in the office`}>{actor.name}</button>
                      <small>{actor.helper ? "Subagent" : "Agent"} · {actor.status}
                        {index >= MAX_DESKS ? " · waiting for a desk" : ""}</small></span>
                  </div>
                  <div className="agent-assignment">SESSION <strong title={actor.sessionTitle}>{actor.sessionTitle}</strong></div>
                  <div className="live-descriptor">{actor.activity}</div>
                </div>
              ))}
              {!actors.length && <div className="pane-intro">No workers are connected yet.</div>}
            </div>
          )}
          <div className="side-hint">✧ &nbsp;Only sanitized local activity is shown. All controls here affect this view, not the underlying agents.</div>
        </aside>
      </div>
      <section className={`feed-panel ${feedOpen ? "feed-open" : ""}`} aria-label="Live activity feed">
        <button type="button" className="feed-top" onClick={() => setFeedOpen((open) => !open)}
          aria-expanded={feedOpen} aria-controls="signal-list">
          <span><span className="feed-glyph">◈</span> SIGNALS <span className="feed-count">{working} LIVE</span></span>
          <span className="feed-chevron" aria-hidden="true">{feedOpen ? "⌄" : "⌃"}</span>
        </button>
        <div id="signal-list" className="feed-list" aria-live="off">
          {!signals.length && <div className="feed-empty"><span>◌</span> Listening for the first activity…</div>}
          {signals.map((signal) => (
            <div className={`feed-item feed-${signal.kind === "error" ? "failed" : signal.kind === "message" ? "complete" : "working"}`} key={signal.key}>
              <span className="feed-icon">{signal.kind === "error" ? "!" : signal.kind === "message" ? "✓" : "◉"}</span>
              <span className="feed-task">{signal.owner} · {signal.label}</span>
              <span className="feed-status">{signal.kind.toUpperCase()}</span>
            </div>
          ))}
        </div>
      </section>
      {connection !== "Live read-only view · local sessions running Agent Inc Live" && (
        <div className="storage-error" role="status">{connection}</div>
      )}
      {debug && <div className="debug-panel">
        <span>LIGHT {sceneRef.current?.time.toFixed(1) ?? 0}s</span><span>FPS {fps}</span>
        <span>DESKS {visible.length}/{MAX_DESKS}</span><span>WORKERS {actors.length}</span>
        <span>SESSIONS {room.sessions.length}</span><span>HELPERS {helpers}</span>
        <span>VISUAL SPEED {ambientSpeed}×</span>
      </div>}
    </main>
  );
}

const root = document.getElementById("root");
if (!root) throw new Error("Agent Inc Live office root is missing");
createRoot(root).render(<LiveOffice />);
