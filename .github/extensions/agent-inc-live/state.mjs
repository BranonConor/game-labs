const STATUSES = new Set(["idle", "thinking", "tool", "blocked", "offline"]);

export function toolKind(name = "") {
  if (/bash|terminal|shell|command/i.test(name)) return "Terminal";
  if (/test|build|lint|typecheck/i.test(name)) return "Checks";
  if (/read|view|search|rg|glob|fetch/i.test(name)) return "Research";
  if (/edit|patch|write|create_file/i.test(name)) return "Editing";
  if (/task|agent|factory/i.test(name)) return "Delegating";
  return "Working";
}

export function createState(sessionId) {
  return { sessionId, status: "idle", activity: "At the coffee counter", tools: [], subagents: [], updatedAt: Date.now() };
}

export function applyEvent(state, event, now = Date.now()) {
  const { type, data = {}, agentId } = event;
  let changed = true;
  switch (type) {
    case "assistant.turn_start":
      state.status = "thinking";
      state.activity = "Planning the next step";
      break;
    case "tool.execution_start": {
      const kind = toolKind(data.toolName);
      if (agentId) {
        const worker = state.subagents.find((agent) => agent.id === agentId);
        if (worker) {
          worker.status = "tool";
          worker.activity = kind;
        }
      } else if (data.toolCallId && !state.tools.some((tool) => tool.id === data.toolCallId)) {
        state.tools.push({ id: data.toolCallId, kind });
        state.tools = state.tools.slice(-12);
        state.status = "tool";
        state.activity = kind;
      }
      break;
    }
    case "tool.execution_complete":
      if (agentId) {
        const worker = state.subagents.find((agent) => agent.id === agentId);
        if (worker) {
          worker.status = data.success === false ? "blocked" : "thinking";
          worker.activity = data.success === false ? "Tool needs attention" : "Thinking";
        }
      } else {
        state.tools = state.tools.filter((tool) => tool.id !== data.toolCallId);
        state.status = data.success === false ? "blocked" : state.tools.length ? "tool" : "thinking";
        state.activity = data.success === false ? "Tool needs attention" :
          state.tools.length ? state.tools.at(-1).kind : "Reviewing the result";
      }
      break;
    case "subagent.started": {
      const id = agentId || data.toolCallId;
      if (!id) break;
      if (!state.subagents.some((agent) => agent.id === id)) {
        state.subagents.push({
          id, status: "thinking", activity: "Thinking", finishedAt: null,
        });
        state.subagents = state.subagents.slice(-12);
      }
      break;
    }
    case "subagent.completed":
    case "subagent.failed": {
      const worker = state.subagents.find((agent) => agent.id === (agentId || data.toolCallId));
      if (worker) {
        worker.status = type === "subagent.failed" ? "blocked" : "idle";
        worker.activity = type === "subagent.failed" ? "Needs attention" : "Finished";
        worker.finishedAt = now;
      }
      break;
    }
    case "assistant.turn_end":
    case "session.idle":
      state.tools = [];
      state.status = "idle";
      state.activity = "At the coffee counter";
      break;
    case "session.error":
      state.status = "blocked";
      state.activity = "Needs attention";
      break;
    case "session.shutdown":
      state.status = "offline";
      state.activity = "Away from the office";
      break;
    default:
      changed = false;
  }
  if (changed) state.updatedAt = now;
  return changed;
}

export function publicSnapshot(state, now = Date.now()) {
  return {
    sessionId: state.sessionId,
    status: state.status,
    activity: state.activity,
    tools: state.tools.map(({ kind }) => kind),
    subagents: state.subagents
      .filter((agent) => !agent.finishedAt || now - agent.finishedAt < 15_000)
      .map(({ status, activity }) => ({ status, activity })),
    updatedAt: state.updatedAt,
    seenAt: now,
  };
}

export function isPublicSnapshot(value) {
  return value && typeof value.sessionId === "string" && value.sessionId.length <= 128 &&
    STATUSES.has(value.status) && typeof value.activity === "string" &&
    value.activity.length <= 80 && Number.isFinite(value.seenAt) &&
    Number.isFinite(value.updatedAt) &&
    Object.keys(value).every((key) =>
      ["sessionId", "status", "activity", "tools", "subagents", "updatedAt", "seenAt"].includes(key)) &&
    Array.isArray(value.tools) && value.tools.length <= 12 &&
    value.tools.every((tool) => typeof tool === "string" && tool.length <= 80) &&
    Array.isArray(value.subagents) && value.subagents.length <= 12 &&
    value.subagents.every((agent) => STATUSES.has(agent.status) &&
      typeof agent.activity === "string" && agent.activity.length <= 80 &&
      Object.keys(agent).every((key) => ["status", "activity"].includes(key)));
}

export function selectRoom(snapshots, currentSessionId, now = Date.now()) {
  return {
    currentSessionId,
    sessions: snapshots.filter((item) => item && now >= item.seenAt && now - item.seenAt < 35_000)
      .sort((a, b) => Number(b.sessionId === currentSessionId) -
        Number(a.sessionId === currentSessionId) || b.updatedAt - a.updatedAt)
      .slice(0, 12),
  };
}
