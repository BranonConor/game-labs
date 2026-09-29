# Agent Inc · Live Office experiment

This is a separate, read-only Copilot canvas extension. It does not alter the
playable game in `agent-inc/` or require its Next.js server. The small office
view is a new lightweight study, not yet a port of the game's Three.js scene.

The project extension loads in **game-labs sessions that contain this branch**.
It listens to SDK events from each attached session: turn start/end, generic
tool categories, idle/error, and subagent start/finish. Each participating
extension process writes a sanitized heartbeat into
`$COPILOT_HOME/extensions/agent-inc-live/artifacts/game-labs/` (or
`~/.copilot/extensions/...`). The canvas serves an SSE feed over an ephemeral
`127.0.0.1` port and shows recent participants in one office. Heartbeats
older than 35 seconds disappear. Prompts, tool arguments/results, filenames,
repository contents, and raw event payloads are not written or sent to the
page. This local experiment does not establish the App's parent/child session
relationships or expose navigation and controls.

## Local test

1. From the repo root, run `node --test .github/extensions/agent-inc-live/state.test.mjs`
   and `node --check .github/extensions/agent-inc-live/extension.mjs`.
2. In the App, reload extensions, inspect `agent-inc-live` if it fails to load,
   then open the **Agent Inc · Live Office** canvas. The agent can call
   `get_status` to inspect the same sanitized snapshot shown in the panel.
3. Run a tool and a subagent in this session; the session's desk and helper
   should update, then return to idle. For a second desk, open another
   game-labs session containing this extension, reload extensions there,
   and run a tool. Both sessions must share the same local `COPILOT_HOME`.

If a browser has no EventSource support or the loopback server disconnects,
the panel reports the interruption rather than inventing activity. Reloading
the extension reopens the canvas on a fresh loopback URL. The original
`agent-inc/` game and its port 3100 preview remain independent.

The SDK's canvas API is experimental. A full daily-chat office spanning
unrelated repos or remote hosts needs an opt-in user-wide installation and a
supported cross-session/host feed; installing this project-scoped extension
alone cannot provide that.
