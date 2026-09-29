import assert from "node:assert/strict";
import test from "node:test";
import {
  applyOffline, CAPACITY_COST, CONTEXT_COST, initialProgress, MAX_CAPACITY,
  OFFLINE_LIMIT_SECONDS, parseProgress, Simulation,
} from "./simulation.ts";

function run(simulation: Simulation, seconds: number) {
  for (let i = 0; i < seconds * 30; i++) simulation.update(1 / 30);
}

test("a request arrives, moves through the desk and core, and rewards tokens", () => {
  const sim = new Simulation(initialProgress(1000));
  run(sim, 2);
  assert.equal(sim.requests[0]?.status, "assigned");
  assert.equal(sim.agents[0].state, "walking");
  run(sim, 10);
  assert.ok(sim.requests.some((r) => r.status === "working" || r.status === "complete"));
  run(sim, 17);
  assert.ok(sim.progress.completed > 0);
  assert.ok(sim.progress.tokens >= 9);
  assert.ok(sim.requests.some((r) => r.status === "complete"));
});

test("identical initial state and ticks produce identical outcomes", () => {
  const a = new Simulation(initialProgress(1000));
  const b = new Simulation(initialProgress(1000));
  run(a, 80);
  run(b, 80);
  assert.deepEqual(a.progress, b.progress);
  assert.deepEqual(a.agents, b.agents);
  assert.deepEqual(a.requests, b.requests);
});

test("capacity adds a second agent and processes two requests concurrently", () => {
  const sim = new Simulation(initialProgress(1000));
  assert.equal(sim.buyCapacity(), false);
  sim.progress.tokens = CAPACITY_COST;
  assert.equal(sim.buyCapacity(), true);
  assert.equal(sim.progress.tokens, 0);
  assert.equal(sim.agents.length, 2);
  assert.equal(sim.buyCapacity(), false);
  run(sim, 12);
  assert.equal(sim.agents.filter((agent) => agent.taskId !== undefined).length, 2);
  run(sim, 40);
  assert.ok(sim.progress.completed >= 3);
});

test("the context unlock costs tokens and routes requests through its room", () => {
  const sim = new Simulation(initialProgress(1000));
  sim.progress.tokens = CONTEXT_COST + CAPACITY_COST;
  assert.equal(sim.unlockContext(), false);
  assert.equal(sim.buyCapacity(), true);
  assert.equal(sim.unlockContext(), true);
  assert.equal(sim.progress.tokens, 0);
  assert.equal(sim.unlockContext(), false);
  let visited = false;
  for (let i = 0; i < 200 * 30; i++) {
    sim.update(1 / 30);
    if (sim.agents.some((agent) => agent.visitedContext)) visited = true;
  }
  assert.ok(sim.requests.some((request) => request.kind === "context"));
  assert.equal(visited, true);
});

test("saves validate shape, offline progress is bounded and future timestamps do not grant rewards", () => {
  const progress = initialProgress(1000);
  progress.capacity = MAX_CAPACITY;
  progress.context = true;
  const loaded = parseProgress(JSON.stringify(progress));
  assert.deepEqual(loaded, progress);
  assert.equal(parseProgress("{broken"), null);
  assert.equal(parseProgress(JSON.stringify({ ...progress, capacity: 50 })), null);
  assert.equal(parseProgress(JSON.stringify({ ...progress, tokens: -1 })), null);
  const report = applyOffline(progress, 1000 + 24 * 60 * 60 * 1000);
  assert.equal(report.seconds, OFFLINE_LIMIT_SECONDS);
  assert.equal(report.completed, 720);
  assert.equal(report.tokens, 720 * 12);
  assert.equal(applyOffline(progress, progress.savedAt - 1000).tokens, 0);
});

test("queues stay bounded during long single-agent runs without losing in-flight tasks", () => {
  const sim = new Simulation();
  run(sim, 800);
  assert.ok(sim.requests.filter((request) => request.status === "queued").length <= 12);
  for (const agent of sim.agents) {
    if (agent.taskId !== undefined) assert.ok(sim.requests.some((request) => request.id === agent.taskId));
  }
});
