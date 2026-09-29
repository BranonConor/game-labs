export type AgentState = "idle" | "walking" | "working" | "returning" | "resetting" | "upkeep" | "inspecting";
export type RequestStatus = "queued" | "assigned" | "working" | "complete";
export type RequestKind = "chat" | "context";
export type Point = { x: number; z: number };

export type Request = {
  id: number;
  title: string;
  kind: RequestKind;
  status: RequestStatus;
  agentId?: number;
  reward: number;
  progress: number;
};

export type Agent = {
  id: number;
  state: AgentState;
  x: number;
  z: number;
  target: Point;
  route: Point[];
  taskId?: number;
  workLeft: number;
  workTotal: number;
  carrying: boolean;
  visitedContext: boolean;
  idleFor: number;
};

export type Progress = {
  version: 1;
  tokens: number;
  capacity: number;
  context: boolean;
  workflow: number;
  completed: number;
  earned: number;
  seed: number;
  nextId: number;
  savedAt: number;
};

export type OfflineReport = { seconds: number; completed: number; tokens: number };

const INBOX: Point = { x: 3.45, z: 1.75 };
const CORE: Point = { x: -2.9, z: -1.25 };
const CONTEXT: Point = { x: 3.0, z: -1.8 };
export const DESKS: readonly Point[] = [
  { x: -1, z: 0.15 },
  { x: 0.85, z: 0.15 },
  { x: -2.35, z: 1.75 },
  { x: 2.25, z: 1.75 },
];
const CHAT_REQUESTS = [
  "Why does the moon glow?",
  "Tell me a little story",
  "What makes rain fall?",
  "Explain how bees dance",
  "How do seeds grow?",
  "Describe a perfect afternoon",
];
const CONTEXT_REQUESTS = [
  "Compare these two ideas",
  "Remember the earlier details",
  "Summarize a long conversation",
  "Connect the clues together",
];

export const CAPACITY_COST = 28;
export const CONTEXT_COST = 64;
export const MAX_CAPACITY = 4;
export const MAX_WORKFLOW = 3;
export const workflowCost = (level: number) => 46 * (level + 1);
export const SAVE_KEY = "agent-inc-progress-v1";
export const OFFLINE_LIMIT_SECONDS = 2 * 60 * 60;
const SPAWN_INTERVAL = 10;

function requestInterval(capacity: number, workflow: number): number {
  return SPAWN_INTERVAL / (1 + (capacity - 1) * 0.5 + workflow * 0.1);
}

export function initialProgress(now = Date.now()): Progress {
  return {
    version: 1, tokens: 0, capacity: 1, context: false, workflow: 0,
    completed: 0, earned: 0, seed: 41729, nextId: 1, savedAt: now,
  };
}

export function parseProgress(raw: string | null): Progress | null {
  if (!raw) return null;
  try {
    const value: unknown = JSON.parse(raw);
    if (!value || typeof value !== "object") return null;
    const p = value as Record<string, unknown>;
    const workflow = p.workflow === undefined ? 0 : p.workflow;
    if (
      p.version !== 1 ||
      !Number.isSafeInteger(p.tokens) || (p.tokens as number) < 0 ||
      !Number.isInteger(p.capacity) || (p.capacity as number) < 1 || (p.capacity as number) > MAX_CAPACITY ||
      typeof p.context !== "boolean" ||
      !Number.isInteger(workflow) || (workflow as number) < 0 || (workflow as number) > MAX_WORKFLOW ||
      !Number.isSafeInteger(p.completed) || (p.completed as number) < 0 ||
      !Number.isSafeInteger(p.earned) || (p.earned as number) < 0 ||
      !Number.isInteger(p.seed) || (p.seed as number) < 0 || (p.seed as number) > 0xffffffff ||
      !Number.isSafeInteger(p.nextId) || (p.nextId as number) < 1 ||
      !Number.isFinite(p.savedAt) || (p.savedAt as number) < 0
    ) return null;
    return { ...p, workflow } as Progress;
  } catch {
    return null;
  }
}

export function applyOffline(progress: Progress, now: number): OfflineReport {
  const seconds = Math.min(OFFLINE_LIMIT_SECONDS, Math.max(0, (now - progress.savedAt) / 1000));
  // A conservative estimate: arrivals are every ten seconds, but travel and work
  // impose a throughput limit. Offline work never creates an unbounded task queue.
  const throughput = Math.min(
    1 / requestInterval(progress.capacity, progress.workflow),
    progress.capacity / (17 - progress.workflow * 0.8),
  );
  const completed = Math.floor(seconds * throughput);
  const tokens = completed * (progress.context ? 12 : 9);
  progress.completed += completed;
  progress.earned += tokens;
  progress.tokens += tokens;
  progress.savedAt = now;
  return { seconds: Math.floor(seconds), completed, tokens };
}

export class Simulation {
  progress: Progress;
  agents: Agent[] = [];
  requests: Request[] = [];
  time = 0;
  paused = false;
  speed = 1;
  private untilNextRequest = 1.8;

  constructor(progress = initialProgress()) {
    this.progress = { ...progress };
    for (let i = 0; i < this.progress.capacity; i++) this.addAgent();
  }

  private addAgent() {
    const id = this.agents.length;
    const { x, z } = DESKS[id];
    this.agents.push({
      id, state: "idle", x, z, target: { x, z }, route: [],
      workLeft: 0, workTotal: 0, carrying: false, visitedContext: false, idleFor: -id * 0.8,
    });
  }

  private random() {
    this.progress.seed = (Math.imul(1664525, this.progress.seed) + 1013904223) >>> 0;
    return this.progress.seed / 0x100000000;
  }

  private spawnRequest() {
    if (this.requests.filter((request) => request.status === "queued").length >= 12) return;
    const kind: RequestKind = this.progress.context && this.random() < 0.38 ? "context" : "chat";
    const titles = kind === "context" ? CONTEXT_REQUESTS : CHAT_REQUESTS;
    const title = titles[Math.floor(this.random() * titles.length)];
    const reward = (kind === "context" ? 14 : 9) + Math.floor(this.random() * 4) + this.progress.workflow;
    this.requests.unshift({
      id: this.progress.nextId++, title, kind, status: "queued", reward, progress: 0,
    });
    const completed = this.requests.filter((request) => request.status === "complete").slice(0, 12);
    this.requests = [...this.requests.filter((request) => request.status !== "complete"), ...completed];
  }

  private assign() {
    for (const agent of this.agents) {
      if (agent.taskId !== undefined) continue;
      const request = [...this.requests].reverse().find((r) => r.status === "queued");
      if (!request) break;
      request.status = "assigned";
      request.agentId = agent.id;
      agent.taskId = request.id;
      agent.state = "walking";
      agent.carrying = false;
      agent.visitedContext = false;
      agent.idleFor = 0;
      agent.route = [{ ...INBOX }, ...(request.kind === "context" ? [{ ...CONTEXT }] : []), { ...DESKS[agent.id] }];
      agent.target = agent.route.shift()!;
      agent.workTotal = (request.kind === "context" ? 7.2 : 5.4 + this.random() * 1.4) * (1 - this.progress.workflow * 0.1);
      agent.workLeft = agent.workTotal;
    }
  }

  private move(agent: Agent, delta: number) {
    const dx = agent.target.x - agent.x;
    const dz = agent.target.z - agent.z;
    const distance = Math.hypot(dx, dz);
    const step = 2.05 * delta;
    if (distance > step) {
      agent.x += dx / distance * step;
      agent.z += dz / distance * step;
      return;
    }
    agent.x = agent.target.x;
    agent.z = agent.target.z;
    if (agent.state === "returning") {
      const request = this.requests.find((r) => r.id === agent.taskId);
      if (request) {
        request.status = "complete";
        request.progress = 1;
        this.progress.tokens += request.reward;
        this.progress.earned += request.reward;
        this.progress.completed++;
      }
      agent.taskId = undefined;
      agent.state = "resetting";
      agent.target = { ...DESKS[agent.id] };
      agent.carrying = false;
      return;
    }
    if (agent.state === "resetting") {
      agent.state = "idle";
      agent.idleFor = 0;
      return;
    }
    if (agent.state === "upkeep") {
      agent.state = agent.route.length ? "inspecting" : "idle";
      agent.workLeft = 1.4;
      if (agent.state === "idle") agent.idleFor = -4;
      return;
    }
    if (agent.target.x === INBOX.x && agent.target.z === INBOX.z) agent.carrying = true;
    if (agent.target.x === CONTEXT.x && agent.target.z === CONTEXT.z) agent.visitedContext = true;
    const next = agent.route.shift();
    if (next) {
      agent.target = next;
    } else {
      agent.state = "working";
      const request = this.requests.find((r) => r.id === agent.taskId);
      if (request) request.status = "working";
    }
  }

  update(delta: number) {
    if (this.paused || delta <= 0) return;
    // Callers use a fixed timestep. Subdivision also keeps direct large-delta calls safe.
    let remaining = Math.min(delta * this.speed, 5);
    while (remaining > 0) {
      const step = Math.min(remaining, 1 / 30);
      remaining -= step;
      this.time += step;
      this.untilNextRequest -= step;
      if (this.untilNextRequest <= 0) {
        this.spawnRequest();
        this.untilNextRequest += requestInterval(this.progress.capacity, this.progress.workflow);
      }
      this.assign();
      for (const agent of this.agents) {
        if (agent.state === "idle") {
          agent.idleFor += step;
          if (agent.idleFor >= 3 + agent.id * 0.8) {
            const stops: Point[] = [
              { x: -4.37, z: 2.8 }, { ...CORE },
              this.progress.context ? { ...CONTEXT } : { ...INBOX },
              { x: 5.8, z: 3.2 },
            ];
            agent.state = "upkeep";
            agent.target = stops[agent.id];
            agent.route = [{ ...DESKS[agent.id] }];
            agent.idleFor = 0;
          }
        }
        if (agent.state === "walking" || agent.state === "returning" || agent.state === "resetting" || agent.state === "upkeep") this.move(agent, step);
        else if (agent.state === "inspecting") {
          agent.workLeft = Math.max(0, agent.workLeft - step);
          if (agent.workLeft === 0) {
            agent.target = agent.route.shift()!;
            agent.state = "upkeep";
          }
        }
        else if (agent.state === "working") {
          agent.workLeft = Math.max(0, agent.workLeft - step);
          const request = this.requests.find((r) => r.id === agent.taskId);
          if (request) request.progress = 1 - agent.workLeft / agent.workTotal;
          if (agent.workLeft === 0) {
            agent.state = "returning";
            agent.target = { ...CORE };
          }
        }
      }
    }
  }

  buyCapacity() {
    if (this.progress.tokens < CAPACITY_COST || this.progress.capacity >= MAX_CAPACITY) return false;
    this.progress.tokens -= CAPACITY_COST;
    this.progress.capacity++;
    this.addAgent();
    this.untilNextRequest = Math.min(this.untilNextRequest, requestInterval(this.progress.capacity, this.progress.workflow));
    return true;
  }

  buyWorkflow() {
    if (this.progress.capacity < 2 || this.progress.workflow >= MAX_WORKFLOW ||
      this.progress.tokens < workflowCost(this.progress.workflow)) return false;
    this.progress.tokens -= workflowCost(this.progress.workflow);
    this.progress.workflow++;
    this.untilNextRequest = Math.min(this.untilNextRequest, requestInterval(this.progress.capacity, this.progress.workflow));
    return true;
  }

  unlockContext() {
    if (this.progress.tokens < CONTEXT_COST || this.progress.context || this.progress.capacity < 2) return false;
    this.progress.tokens -= CONTEXT_COST;
    this.progress.context = true;
    return true;
  }

  save(now = Date.now()): Progress {
    return { ...this.progress, savedAt: now };
  }
}
