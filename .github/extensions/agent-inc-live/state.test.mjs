import assert from "node:assert/strict";
import { test } from "node:test";
import { applyEvent, createState, isPublicSnapshot, normalizeTitle, publicSnapshot, selectRoom } from "./state.mjs";

test("current session and subagent activity follow live SDK events", () => {
  const state = createState("daily-chat");
  applyEvent(state, { type: "assistant.turn_start" }, 1);
  assert.equal(state.status, "thinking");
  applyEvent(state, {
    type: "tool.execution_start", data: {
      toolCallId: "tool-1", toolName: "functions.bash", arguments: { command: "PRIVATE CODE" },
    },
  }, 2);
  assert.equal(state.activity, "Terminal");
  applyEvent(state, { type: "subagent.started", agentId: "worker-1", data: { agentDescription: "PRIVATE PROMPT" } }, 3);
  applyEvent(state, {
    type: "tool.execution_start", agentId: "worker-1",
    data: { toolCallId: "tool-2", toolName: "functions.rg" },
  }, 4);
  assert.equal(state.tools.length, 1);
  assert.equal(state.subagents[0].activity, "Research");
  applyEvent(state, { type: "assistant.message", data: { content: "PRIVATE RESPONSE" } }, 5);
  const snapshot = publicSnapshot(state, 5);
  assert.equal(isPublicSnapshot(snapshot), true);
  assert.equal(JSON.stringify(snapshot).includes("PRIVATE"), false);
  assert.equal(snapshot.subagents[0].id, "worker-1");
  assert.deepEqual(snapshot.tools, ["Terminal"]);
  assert.equal(snapshot.messages, 1);
  assert.equal(snapshot.events[0].label, "Assistant replied");
  applyEvent(state, { type: "assistant.turn_end" }, 5);
  assert.equal(state.status, "tool");
  applyEvent(state, { type: "tool.execution_complete", data: { toolCallId: "tool-1", success: false } }, 6);
  assert.equal(state.status, "blocked");
  applyEvent(state, { type: "subagent.completed", agentId: "worker-1" }, 7);
  assert.equal(publicSnapshot(state, 15_008).subagents.length, 0);
  applyEvent(state, { type: "assistant.turn_end" }, 7);
  assert.equal(state.status, "idle");
  applyEvent(state, { type: "session.idle" }, 8);
  assert.equal(state.status, "idle");
  applyEvent(state, { type: "session.title_changed", data: { title: "Daily work chat" } }, 9);
  assert.equal(publicSnapshot(state).title, "Daily work chat");
});

test("unrecognized events and malformed shared snapshots do not become office activity", () => {
  const state = createState("daily-chat");
  assert.equal(applyEvent(state, { type: "user.message", data: { content: "PRIVATE" } }), false);
  assert.equal(isPublicSnapshot({ status: "working", sessionId: "s", seenAt: 10, subagents: [] }), false);
  const valid = publicSnapshot(state);
  assert.equal(isPublicSnapshot({ ...valid, content: "PRIVATE" }), false);
  assert.equal(isPublicSnapshot({ ...valid, title: "x".repeat(101) }), false);
  assert.equal(isPublicSnapshot({ ...valid,
    subagents: [{ status: "idle", activity: "x", content: "PRIVATE" }] }), false);
  assert.equal(isPublicSnapshot({ ...valid,
    subagents: [{ id: "x".repeat(129), status: "idle", activity: "x" }] }), false);
  assert.equal(JSON.stringify(publicSnapshot(state)).includes("PRIVATE"), false);
  assert.equal(normalizeTitle("x".repeat(200)), undefined);
  state.title = normalizeTitle("PRIVATE PROMPT ".repeat(40));
  assert.equal(JSON.stringify(publicSnapshot(state)).includes("PRIVATE"), false);
});

test("one local room groups active sessions and their subagents, not stale heartbeats", () => {
  const first = createState("daily-chat");
  applyEvent(first, { type: "subagent.started", agentId: "worker-1" }, 50_000);
  const child = createState("child-session");
  applyEvent(child, { type: "assistant.turn_start" }, 50_000);
  const old = createState("old-session");
  const room = selectRoom([publicSnapshot(child, 60_000), publicSnapshot(old, 20_000),
    publicSnapshot(first, 60_000)], "daily-chat", 60_001);
  assert.deepEqual(room.sessions.map(({ sessionId }) => sessionId), ["daily-chat", "child-session"]);
  assert.equal(room.sessions[0].subagents.length, 1);
});
