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

Requests start arriving roughly every ten simulated seconds. Wait for tokens,
then activate another capacity node (28 tokens) to add an agent at its own
desk; more agents attract more incoming signals (up to four agents and a
four-second arrival interval). When free, agents return to their desks, tend
plants/equipment, and can be interrupted to take a new request. At capacity
2, save 64 tokens to unlock the Context chamber: the room appears, longer
requests enter the queue, and agents visit it before processing. Alternatively,
buy up to three workstation kit tiers (46, 92, 138 tokens): every tier places
tools on each staffed desk, speeds desk work by 10%, adds one token per new
request, and slightly increases signal traffic. These are the first
reinvestment branches: capacity for parallel labor, kits for throughput, and
context for higher-value work. Drag the scene to pan, scroll to zoom, pause, or
switch to 2× speed. The office fills the viewport, with a small request feed
and token/capacity chips overlaid as a HUD. Click **UPGRADES** to open the
system panel on any screen, or **SIGNALS** to expand the request feed. The
compact controls at the bottom right pause, change speed, and show debug
metrics. Drag the office to explore its edges.

The small clock in the HUD previews lighting six hours ahead without
changing simulation time, rewards, or the save file. A full office day takes
four simulated minutes; pause and speed affect the clock as they affect work.

## Renderer and fallback

The office uses one Three.js WebGL scene and a fixed, center-facing perspective
camera elevated above an open-sided room. The back wall recedes and the floor
widens toward the viewer; the left wall is deliberately absent. Its sky
and subtle grain are a shader on a sky dome **in the same scene**, visible
through actual openings in the back wall, with original painted garden
silhouettes in the lower window panes. The expanded office has a procedurally
grained wood floor, raised window frames, wall trim, and practical sconces.
A moving directional sun and shadow
map cast geometry-aware shadows through the window frames; hemisphere bounce,
desk/core/sconce lights, soft contact shadows, and translucent shafts/pools convey
morning, afternoon, dusk, and night. Shafts and pools approximate illuminated
air and floor highlights: feathered beam edges and a few slow drifting motes
fade with the sunlight, while a floor-local shade deepens the near corners and
the side opposite the sun. These art-directed layers are not physically accurate
volumetric occlusion or indirect lighting; nearby geometry still receives actual
directional shadows through the window openings. At night a weaker cool directional moonlight
casts shadows through the same real window openings; warmer desk/core lights
remain visible. The walls, floor, and windows remain 3D;
agents, desks, chairs, monitors, the inbox, core, and decor are original
canvas-drawn pixel art on lit, alpha-cutout planes parallel to the back wall.
Changes in travel direction swap original left/right/back illustrated views
inside the unchanging planes instead of rotating or mirroring their meshes.
Agents face toward the desks while working. The two rows
of processing stations are staggered so agents remain visible while working.
Distinct human-like workers with unique hair/clothes, poses, shallow backing
layers, ground contact shadows, and directional silhouettes give the characters
depth without modeling them as 3D people. Their original 32×40 frames use
coarse stepped silhouettes and short color ramps; the matching 48×64 AI core
has a wood-and-metal cabinet instead of an oversized luminous screen. Desk
and other prop textures retain their finer hand-placed pixel clusters.
This takes inspiration from the *fidelity and technique* of handheld-era
pixel sprites, not any existing character designs or assets. Nearest-neighbor
filtering preserves sprite edges, while the floor uses smoother texture filtering.
Modest emissive fill keeps faces readable when
backlit. This cutout system lives in `game/sprite-art.ts` and does not drive
simulation state. No external texture assets or network-fetched fonts are
required.

Three.js's shadow depth pass honors the cutout materials' alpha test, so the
directional sun or moon casts the illustrated silhouettes rather than rectangular
planes. Small, translucent floor-contact textures ground agents and furniture
even at night; a blurred variance shadow map softens the longer moving
directional shadows. The map is smaller on narrow or coarse-pointer devices. These layers
are deliberately restrained: there is no screen-space ambient occlusion or
depth-of-field pass that would blur the pixel art or add an extra GPU context.

Use a browser with WebGL 2 and working GPU drivers for the 3D office; WebGPU
is **not** required. vGPU was evaluated, but it would add another GPU context
for a backdrop that Three.js can render inside the existing scene, so the app
intentionally does not use it. If WebGL context is lost, the canvas shows a
restoration message while the request loop keeps running; Three.js restores
its resources when the context returns. If WebGL cannot initialize, requests
and upgrades remain playable through the feed/UI with a static backdrop and
an explicit warning. Narrow/mobile displays render at a lower internal
resolution, and reduced-motion users get still decorative animations.

Progress (tokens, capacity, workstation kits, context unlock and totals) is saved locally in this
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
