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

The small clock in the scene header previews lighting six hours ahead without
changing simulation time, rewards, or the save file. A full office day takes
four simulated minutes; pause and speed affect the clock as they affect work.

## Renderer and fallback

The office uses one Three.js WebGL scene and an orthographic camera. Its sky
and subtle grain are a shader on a sky dome **in the same scene**, visible
through actual openings in the back wall. A moving directional sun and shadow
map cast geometry-aware shadows through the window frames; hemisphere bounce,
desk/core lights, soft contact shadows, and translucent shafts/pools convey
morning, afternoon, dusk, and night. Shafts and pools approximate illuminated
air and floor highlights; they are not physically accurate volumetric
occlusion or indirect lighting. Agents, desk monitors, the inbox, core emblem,
and plants use original canvas-drawn pixel art on lit, alpha-cutout planes,
while desks, plinths, and room architecture retain real 3D depth. Agents have
shallow backing layers, ground contact shadows, sun-cast silhouettes, and
distinct idle, step, work, and carry poses. Nearest-neighbor textures preserve
their illustrated edges; a little emissive fill keeps faces readable when
backlit. This cutout system lives in `game/sprite-art.ts` and does not drive
simulation state. No external texture assets or network-fetched fonts are
required.

Use a browser with WebGL 2 and working GPU drivers for the 3D office; WebGPU
is **not** required. vGPU was evaluated, but it would add another GPU context
for a backdrop that Three.js can render inside the existing scene, so the app
intentionally does not use it. If WebGL context is lost, the canvas shows a
restoration message while the request loop keeps running; Three.js restores
its resources when the context returns. If WebGL cannot initialize, requests
and upgrades remain playable through the feed/UI with a static backdrop and
an explicit warning. Narrow/mobile displays render at a lower internal
resolution, and reduced-motion users get still decorative animations.

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
