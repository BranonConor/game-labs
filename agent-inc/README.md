# Agent Inc.

A self-contained, local-first playable prototype of a cozy AI office. You are
the intelligence: each chat station receives simulated requests, tiny agents
leave the coffee counter to answer at their own desks, and accurate replies
earn tokens.

## Run locally

Requires Node.js 22 or newer. From `agent-inc/`:

```sh
npm ci
npm run dev -- -p 3100
```

Open <http://127.0.0.1:3100>. Use a different free port if 3100 is occupied.
Run `npm test`, `npm run typecheck`, and `npm run build` to validate.

## Play

The first desk receives a question about every 16 simulated seconds when
available. Its pixel notification appears above the monitor; the border fills
as its agent responds. Agents wait at the coffee counter between requests.
**UPGRADES** opens a right-side panel with **Office**, **Stations**, and
**Agents** tabs:

- **Office:** spend 28 tokens to activate each additional agent/station (up to
  four). Unlock Context at capacity 2 for 64 tokens; context questions visit
  its room first and pay more. Existing workstation kits (46, 92, 138 tokens)
  speed all agents' desk work by 10% and add one token per successful reply
  per tier.
- **Stations:** invest 42, 78, then 114 tokens per station to shorten its
  arrival interval from 16 to about 7.8 seconds. One unresolved question per
  desk keeps requests bounded; a short cooldown leaves time for coffee.
- **Agents:** each named persona has independently trainable response speed
  and accuracy (three levels each). Starting accuracy is 82%; each accuracy
  level adds 5.5 percentage points. Inaccurate replies lose up to 3 tokens
  (5 for Context), never below zero.

The office fills the viewport, with a small request feed and token/capacity
chips overlaid as a HUD. **SIGNALS** expands the request feed; drag to pan,
scroll to zoom, pause, or switch to 2× speed. The compact controls at bottom
right can also show debug metrics.

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
directional shadows through the window openings. At night reduced ambient
and weaker cool moonlight deepen the room while local monitor, coffee, core,
and sconce lights illuminate nearby surfaces. The walls, floor, and windows
remain 3D; agents, desks, chairs, monitors, the coffee counter, core, and decor are original
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
resolution, and reduced-motion users get still decorative animations. The
simulation stays on a deterministic 30 Hz timestep while rendered agent
positions interpolate between ticks on each display frame. The canvas itself
uses normal browser scaling, not CSS pixelation of the whole 3D view: original
sprite textures retain nearest-neighbor filtering and sharp source pixels.
Moving shadow maps refresh on simulation ticks rather than every display
frame, leaving GPU time for the smoother scene motion. Cosmetic bobbing is
time-based and eases through occasional dropped frames; it never changes
rewards or agent decisions.
Sprite props and agents use shared soft floor contacts and short near-floor
shadow casters rather than casting long shadows from their upright cutout
planes. Walls and window frames still cast directional scene shadows.

Progress (tokens, capacity, station tiers, each agent's training, shared kits,
context unlock, and response totals) is saved locally in this browser. Earlier
prototype saves migrate without resetting earned progress. On return, up to
two hours of approximate, bounded net offline progress is awarded without
replaying thousands of request animations. No account,
database, server-side economy, real model inference, audio, or later specialist
rooms exist in this slice. Local saves are not authoritative and can be edited
by the browser user. The scene is built from lightweight geometry rather than
external assets.

The deterministic fixed-step simulation in `game/simulation.ts` owns agents,
requests and the economy. `game/world.ts` only renders that state; React displays
coarse UI snapshots. Reloading restores progression, not in-flight requests
or agent positions.
