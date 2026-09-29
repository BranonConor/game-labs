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
switch to 2× speed. The office fills the viewport, with the request feed and
system upgrades overlaid as a HUD. On narrow screens, open **UPGRADES** to
access the system panel; drag the office to explore its edges. The debug toggle
reveals simulation metrics.

The small clock in the HUD previews lighting six hours ahead without
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
occlusion or indirect lighting. The walls, floor, and windows remain 3D;
agents, desks, chairs, monitors, the inbox, core, and decor are original
canvas-drawn pixel art on lit, alpha-cutout planes. All cutout planes share
the camera-facing scene angle; changes in travel direction swap left/right
illustrated views instead of rotating or mirroring their meshes. Distinct
machine silhouettes, poses, shallow backing layers, ground contact shadows,
and sun-cast silhouettes give the characters depth without modeling them
as people. Nearest-neighbor textures preserve their edges; modest emissive
fill keeps faces readable when backlit. This cutout system lives in
`game/sprite-art.ts` and does not drive simulation state. No external texture
assets or network-fetched fonts are required.

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
