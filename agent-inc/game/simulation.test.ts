import assert from "node:assert/strict";
import test from "node:test";
import {
  applyOffline, CAPACITY_COST, CONTEXT_COST, initialProgress, MAX_CAPACITY,
  MAX_WORKFLOW, OFFLINE_LIMIT_SECONDS, parseProgress, Simulation, workflowCost, DESKS,
} from "./simulation.ts";
import { DAY_LENGTH_SECONDS, sampleDaylight } from "./lighting.ts";

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

test("extra desks bring proportionate demand; free agents tend stations and can be dispatched mid-errand", () => {
  const solo = new Simulation();
  const progress = initialProgress();
  progress.capacity = MAX_CAPACITY;
  const team = new Simulation(progress);
  team.agents.forEach((agent, index) => {
    assert.deepEqual({ x: agent.x, z: agent.z }, DESKS[index]);
  });
  run(team, 5);
  const tending = team.agents.find((agent) => agent.state === "upkeep");
  assert.ok(tending);
  assert.equal(tending.taskId, undefined);
  const requestId = team.progress.nextId++;
  team.requests.push({ id: requestId, title: "An urgent signal", kind: "chat", status: "queued", progress: 0, reward: 9 });
  team.update(1 / 30);
  assert.equal(team.requests.find((request) => request.id === requestId)?.status, "assigned");
  assert.equal(team.agents.find((agent) => agent.id === tending.id)?.state, "walking");

  const usedDesks = new Set<number>();
  for (let i = 0; i < 150 * 30; i++) {
    team.update(1 / 30);
    team.agents.filter((agent) => agent.state === "working").forEach((agent) => usedDesks.add(agent.id));
  }
  run(solo, 155);
  assert.equal(usedDesks.size, MAX_CAPACITY);
  assert.ok(team.progress.nextId - 1 > (solo.progress.nextId - 1) * 2);
  assert.ok(team.progress.completed > solo.progress.completed * 2);
  assert.ok(team.requests.filter((request) => request.status === "queued").length <= 12);
});

test("workstation kits save, speed desk work, and increase earned reward", () => {
  const progress = initialProgress(1000);
  progress.capacity = 2;
  progress.tokens = 500;
  const upgraded = new Simulation(progress);
  assert.equal(upgraded.buyWorkflow(), true);
  assert.equal(upgraded.progress.tokens, 500 - workflowCost(0));
  assert.equal(upgraded.buyWorkflow(), true);
  assert.equal(upgraded.buyWorkflow(), true);
  assert.equal(upgraded.buyWorkflow(), false);
  assert.equal(upgraded.progress.workflow, MAX_WORKFLOW);
  assert.deepEqual(parseProgress(JSON.stringify(upgraded.save(2000))), upgraded.save(2000));

  const basic = new Simulation(progress);
  run(basic, 2);
  run(upgraded, 2);
  assert.ok(upgraded.agents[0].workTotal < basic.agents[0].workTotal);
  assert.equal(upgraded.requests[0].reward, basic.requests[0].reward + MAX_WORKFLOW);
  const legacy = { ...initialProgress(1000) } as Partial<typeof progress>;
  delete legacy.workflow;
  assert.equal(parseProgress(JSON.stringify(legacy))?.workflow, 0);
  assert.equal(parseProgress(JSON.stringify({ ...legacy, workflow: -1 })), null);
  assert.equal(parseProgress(JSON.stringify({ ...legacy, workflow: MAX_WORKFLOW + 1 })), null);
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
  assert.equal(report.completed, Math.floor(OFFLINE_LIMIT_SECONDS * Math.min(1 / 4, MAX_CAPACITY / 17)));
  assert.equal(report.tokens, report.completed * 12);
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

test("cosmetic daylight is deterministic, cyclical, and independent of the simulation state", () => {
  const morning = sampleDaylight(0);
  assert.deepEqual(morning, sampleDaylight(DAY_LENGTH_SECONDS));
  assert.deepEqual(morning, sampleDaylight(0));
  const night = sampleDaylight(0, 0.5);
  assert.ok(morning.sun > night.sun);
  assert.ok(night.lamp > morning.lamp);
  assert.ok(night.moon > 0 && night.moon < morning.sun);
  assert.equal(sampleDaylight(DAY_LENGTH_SECONDS * 0.15).moon, 0);
  assert.equal(sampleDaylight(0, 0.25).label, "14:24");
  const sim = new Simulation();
  const before = sim.save(1000);
  sampleDaylight(sim.time, 0.75);
  assert.deepEqual(sim.save(1000), before);
});
