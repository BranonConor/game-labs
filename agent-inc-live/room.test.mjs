import assert from "node:assert/strict";
import { test } from "node:test";
import { agentName, roomActors } from "./src/room.ts";
import { EXTRA_DESKS, MAX_LIVE_DESKS, MIN_LIVE_DESKS, extraCoffeeSpot, liveDeskCount } from "../agent-inc/game/live-layout.ts";

function session(sessionId, title) {
  return {
    sessionId, title, status: "idle", activity: "At the coffee counter",
    tools: [], subagents: [], updatedAt: 1, seenAt: 1,
  };
}

test("agent identities are human-readable and stable per session", () => {
  assert.match(agentName("session-1"), /^[A-Za-z]+ [A-Za-z]+$/);
  assert.equal(agentName("session-1"), agentName("session-1"));
  assert.notEqual(agentName("session-1"), agentName("session-2"));
});

test("the roster retains session titles and stable desks as activity order changes", () => {
  const parent = session("parent", "Daily work chat");
  parent.subagents = [{ id: "worker-a", status: "thinking", activity: "Research" }];
  const child = session("child", "Fixing shadows");
  const room = { currentSessionId: "parent", sessions: [child, parent] };
  const before = roomActors(room);
  const after = roomActors({ ...room, sessions: [parent, { ...child, updatedAt: 99 }] });
  assert.deepEqual(before.map(({ key }) => key), ["parent", "child", "parent:helper:worker-a"]);
  assert.deepEqual(after.map(({ key, name }) => ({ key, name })),
    before.map(({ key, name }) => ({ key, name })));
  assert.deepEqual(before.map(({ sessionTitle }) => sessionTitle),
    ["Daily work chat", "Fixing shadows", "Daily work chat"]);
  assert.equal(new Set(before.map(({ name }) => name)).size, before.length);
});

test("unavailable titles fall back to an identifiable session label", () => {
  const actor = roomActors({ currentSessionId: "12345678-abc", sessions: [session("12345678-abc")] })[0];
  assert.equal(actor.sessionTitle, "Your session · 12345678");
});

test("desks grow per worker and shrink back to four, with distinct floor and coffee slots", () => {
  assert.equal(MIN_LIVE_DESKS, 4);
  assert.equal(MAX_LIVE_DESKS, 16);
  assert.deepEqual([0, 1, 4, 5, 6, 16, 17, 2].map(liveDeskCount),
    [4, 4, 4, 5, 6, 16, 16, 4]);
  assert.equal(new Set(EXTRA_DESKS.map(({ x, z }) => `${x},${z}`)).size, 12);
  assert(EXTRA_DESKS.every(({ x, z }) => Math.abs(x) < 7 && z > -5 && z < 5));
  const coffee = EXTRA_DESKS.map((_, index) => extraCoffeeSpot(index, -3.55));
  assert.equal(new Set(coffee.map(({ x, z }) => `${x},${z}`)).size, 12);
});
