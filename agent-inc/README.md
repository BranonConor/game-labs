# Agent Inc.

A self-contained, local-first playable prototype of a cozy AI office. You are
the intelligence: simulated requests arrive, tiny agents carry them from the
inbox to processing desks and back to the core, and completed work earns tokens.

## Run locally

Requires Node.js 22 or newer. From `agent-inc/`:

```sh
npm ci
npm run dev -- -p 3100
```

Open <http://127.0.0.1:3100>. Use a different free port if 3100 is occupied.
Run `npm test`, `npm run typecheck`, and `npm run build` to validate.

## Play

Requests arrive roughly every ten simulated seconds. Wait for tokens, then
activate a second capacity node (28 tokens) to see a second agent work in
parallel. At capacity 2, save 64 tokens to unlock the Context chamber: the
room appears, longer requests enter the queue, and their agents physically
visit it before processing. Drag the scene to pan, scroll to zoom, pause, or
switch to 2× speed. The debug toggle reveals simulation metrics.

Progress (tokens, capacity, context unlock and totals) is saved locally in this
browser. On return, up to two hours of approximate, bounded offline progress
is awarded without replaying thousands of request animations. No account,
database, server-side economy, real model inference, audio, or later specialist
rooms exist in this slice. Local saves are not authoritative and can be edited
by the browser user. The scene is built from lightweight geometry rather than
external assets.

The deterministic fixed-step simulation in `game/simulation.ts` owns agents,
requests and the economy. `game/world.ts` only renders that state; React displays
coarse UI snapshots. Reloading restores progression, not in-flight requests
or agent positions.
