import assert from "node:assert/strict";
import { test } from "node:test";
import { agentName, roomActors } from "./src/room.ts";

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
