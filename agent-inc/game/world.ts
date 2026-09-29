import * as THREE from "three";
import { DESKS } from "./simulation";
import type { Agent, Simulation } from "./simulation";
import { sampleDaylight } from "./lighting";
import {
  agentArt, chairArt, contextConsoleArt, coreBodyArt, deskArt,
  monitorArt, plantArt, posterArt, stackArt, statusLightArt, terminalArt,
} from "./sprite-art";
import type { AgentArt, Facing } from "./sprite-art";

const palette = {
  edge: 0x5e5263,
  wall: 0x917880,
  wallTop: 0xf2c595,
  cream: 0xffe2ad,
  lavender: 0xbba6eb,
};
const room = { halfWidth: 7.7, back: -5.2, front: 5.8, windowY: 1.72 };
const windowXs = [-4.8, 0, 4.8];
const cutoutYaw = 0;
const cameraBase = new THREE.Vector3(0, 15, 20);
const coreDisplay = { x: -3.8, z: -2.2 };
const moonColor = new THREE.Color(0xa9c9ff);
const moonAmbient = new THREE.Color(0xb8cbea);
const moonBounce = new THREE.Color(0xb4ccf4);
const warmAmbient = new THREE.Color(0xffdac1);
const nightFoliage = new THREE.Color(0x728baa);

function material(color: number, emissive = 0, intensity = 0) {
  return new THREE.MeshStandardMaterial({
    color, roughness: 0.88, flatShading: true, emissive, emissiveIntensity: intensity,
  });
}

function woodFloorTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 768;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas 2D is required for the office floor.");
  ctx.fillStyle = "#785a51";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  const colors = ["#d8af83", "#cba076", "#dfb78c", "#d2a77b", "#c59a72", "#dbb287"];
  const hash = (x: number, y: number) => (Math.imul(x, 73856093) ^ Math.imul(y, 19349663)) >>> 0;
  for (let row = 0; row < 12; row++) {
    const y = row * 64;
    let x = row % 2 ? -116 : -20;
    let board = 0;
    while (x < canvas.width) {
      const seed = hash(board, row);
      const width = 188 + (seed % 53);
      ctx.fillStyle = colors[seed % colors.length];
      ctx.fillRect(x + 2, y + 2, width - 3, 61);
      ctx.fillStyle = "#fff0cb20";
      ctx.fillRect(x + 5, y + 4, width - 9, 2);
      ctx.fillStyle = "#573e4a18";
      ctx.fillRect(x + 3, y + 58, width - 5, 3);
      for (let grain = 0; grain < 7; grain++) {
        const grainY = y + 9 + (hash(board * 7 + grain, row) % 46);
        ctx.fillStyle = grain % 2 ? "#633f3920" : "#ffe2ac32";
        ctx.fillRect(x + 12 + (grain % 3) * 8, grainY, width - 36 - (grain % 3) * 15, 1);
      }
      x += width;
      board++;
    }
  }
  const map = new THREE.CanvasTexture(canvas);
  map.colorSpace = THREE.SRGBColorSpace;
  map.minFilter = THREE.LinearMipmapLinearFilter;
  map.magFilter = THREE.LinearFilter;
  return map;
}

function windowFoliageTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 96;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas 2D is required for the window garden.");
  for (const [color, y, radius] of [
    ["#426e6b", 83, 23], ["#5c8971", 89, 21], ["#83a77a", 96, 17],
  ] as const) {
    ctx.fillStyle = color;
    for (let x = -15; x < 150; x += 21) {
      ctx.beginPath();
      ctx.ellipse(x + (x % 3) * 3, y - (x % 4) * 4, radius, 18, 0, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  for (let i = 0; i < 42; i++) {
    const x = (Math.imul(i + 11, 47) % 128 + 128) % 128;
    const y = 67 + (Math.imul(i + 3, 31) % 29);
    ctx.fillStyle = i % 3 ? "#b6c490" : "#365e63";
    ctx.fillRect(x, y, 2 + (i % 3), 1);
  }
  const map = new THREE.CanvasTexture(canvas);
  map.colorSpace = THREE.SRGBColorSpace;
  map.minFilter = THREE.LinearMipmapLinearFilter;
  map.magFilter = THREE.LinearFilter;
  return map;
}

function block(
  parent: THREE.Object3D, x: number, y: number, z: number,
  width: number, height: number, depth: number, color: number,
  emissive = 0, intensity = 0,
) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), material(color, emissive, intensity));
  mesh.position.set(x, y, z);
  mesh.castShadow = height > 0.17;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

function cutout(
  parent: THREE.Object3D, map: THREE.Texture, x: number, y: number, z: number,
  width: number, height: number,
) {
  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(width, height),
    new THREE.MeshStandardMaterial({
      map, alphaTest: 0.38, side: THREE.DoubleSide, roughness: 1,
      emissiveMap: map, emissive: 0xffffff, emissiveIntensity: 0.24,
    }),
  );
  mesh.position.set(x, y, z);
  mesh.rotation.y = cutoutYaw;
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

function label(text: string, color = "#4e4762") {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas 2D context is required for office signs.");
  ctx.fillStyle = "#574c5a";
  ctx.fillRect(4, 4, 248, 56);
  ctx.strokeStyle = "#d4a986";
  ctx.lineWidth = 5;
  ctx.strokeRect(4, 4, 248, 56);
  ctx.fillStyle = color === "#4e4762" ? "#f9e5bb" : color;
  ctx.font = "bold 25px monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, 128, 34);
  const texture = new THREE.CanvasTexture(canvas);
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestFilter;
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false }));
  sprite.scale.set(1.65, 0.42, 1);
  return sprite;
}

function terminal(scene: THREE.Scene, art: THREE.Texture) {
  cutout(scene, art, 3.45, 0.99, 1.75, 1.05, 1.75);
  const sign = label("INCOMING");
  sign.position.set(3.45, 2.5, 1.75);
  scene.add(sign);
}

function desk(scene: THREE.Object3D, x: number, z: number, index: number, track: (art: THREE.CanvasTexture) => THREE.CanvasTexture) {
  cutout(scene, track(deskArt(index)), x, 0.58, z - 0.56, 1.55, 1.23);
  cutout(scene, track(monitorArt(index)), x - 0.1, 1.08, z - 0.67, 0.77, 0.77);
  cutout(scene, track(chairArt()), x + 0.35, 0.49, z + 0.37, 0.66, 0.94);
}

function createAgent(id: number, shadowTexture: THREE.Texture, frames: AgentArt) {
  const group = new THREE.Group();
  const backing = cutout(group, frames.idle.away, 0.035, 0.68, -0.065, 0.99, 1.35);
  (backing.material as THREE.MeshStandardMaterial).color.setHex(0x766577);
  (backing.material as THREE.MeshStandardMaterial).emissiveIntensity = 0;
  backing.castShadow = false;
  backing.receiveShadow = false;
  const figure = cutout(group, frames.idle.away, 0, 0.67, 0, 0.95, 1.32);
  (figure.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.44;
  backing.rotation.y = 0;
  figure.rotation.y = 0;
  group.rotation.y = cutoutYaw;
  const shadow = new THREE.Mesh(
    new THREE.PlaneGeometry(0.68, 0.52),
    new THREE.MeshBasicMaterial({ map: shadowTexture, transparent: true, depthWrite: false, opacity: 0.66, toneMapped: false }),
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.renderOrder = 3;
  return { group, backing, figure, frames, facing: "away" as Facing, shadow };
}

export type World = {
  render: (elapsed: number, previewOffset: number) => void;
  dispose: () => void;
};

export function createWorld(host: HTMLElement, simulation: Simulation): World {
  const scene = new THREE.Scene();
  const artTextures: THREE.Texture[] = [];
  const track = <T extends THREE.Texture>(art: T): T => {
    artTextures.push(art);
    return art;
  };
  const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 100);
  camera.position.copy(cameraBase);
  camera.lookAt(0, 0.4, 0);
  const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: "low-power" });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.35;
  renderer.setClearColor(0x000000, 0);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.domElement.className = "world-canvas";
  renderer.domElement.setAttribute("aria-label", "Perspective view of the little AI office");
  renderer.domElement.setAttribute("role", "img");
  host.appendChild(renderer.domElement);
  let contextLost = false;
  const onContextLost = (event: Event) => {
    event.preventDefault();
    contextLost = true;
    host.classList.add("context-lost");
  };
  const onContextRestored = () => {
    contextLost = false;
    host.classList.remove("context-lost");
  };
  renderer.domElement.addEventListener("webglcontextlost", onContextLost);
  renderer.domElement.addEventListener("webglcontextrestored", onContextRestored);
  const skyMaterial = new THREE.ShaderMaterial({
    depthWrite: false,
    side: THREE.BackSide,
    toneMapped: false,
    uniforms: {
      uDay: { value: 0.7 },
      uWarm: { value: 0.8 },
      uTime: { value: 0 },
      uSun: { value: new THREE.Vector3(1, 1, -1) },
    },
    vertexShader: `
      varying vec3 vDirection;
      void main() {
        vDirection = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec3 vDirection;
      uniform float uDay;
      uniform float uWarm;
      uniform float uTime;
      uniform vec3 uSun;
      float hash(vec3 p) {
        return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453);
      }
      void main() {
        vec3 direction = normalize(vDirection);
        float horizon = smoothstep(-0.48, 0.65, direction.y);
        vec3 upper = mix(vec3(0.12, 0.08, 0.24), vec3(0.18, 0.55, 0.59), uDay);
        vec3 lower = mix(vec3(0.35, 0.16, 0.33), vec3(0.79, 0.49, 0.43), uDay);
        vec3 color = mix(lower, upper, horizon);
        float corona = pow(max(dot(direction, normalize(uSun)), 0.0), 16.0);
        color += corona * mix(vec3(0.12, 0.15, 0.22), vec3(0.65, 0.41, 0.24), uDay) * (0.5 + uWarm * 0.5);
        vec3 cell = floor(direction * 180.0);
        float star = step(0.999, hash(cell)) * pow(1.0 - uDay, 3.0) * 0.2;
        color += vec3(star);
        float dust = (hash(floor(direction * 380.0 + uTime * 0.14)) - 0.5) * 0.018;
        gl_FragColor = vec4(clamp(color + dust, 0.0, 1.0), 1.0);
      }
    `,
  });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(45, 24, 14), skyMaterial);
  sky.renderOrder = -1;
  scene.add(sky);
  const ambient = new THREE.AmbientLight(0xe7d5dc, 0.75);
  const skyBounce = new THREE.HemisphereLight(0xb6c9ce, 0x966c80, 0.9);
  scene.add(ambient, skyBounce);
  const sunlight = new THREE.DirectionalLight(0xffd9a2, 2.4);
  sunlight.position.set(2, 9, -9);
  sunlight.castShadow = true;
  const shadowSize = host.clientWidth < 980 || matchMedia("(pointer: coarse)").matches ? 768 : 1536;
  sunlight.shadow.mapSize.set(shadowSize, shadowSize);
  sunlight.shadow.camera.left = -11;
  sunlight.shadow.camera.right = 11;
  sunlight.shadow.camera.top = 11;
  sunlight.shadow.camera.bottom = -11;
  sunlight.shadow.bias = -0.0005;
  sunlight.shadow.normalBias = 0.012;
  scene.add(sunlight);
  const coreGlow = new THREE.PointLight(0x8af6d8, 1.5, 5, 2);
  coreGlow.position.set(coreDisplay.x, 1.55, coreDisplay.z);
  const terminalGlow = new THREE.PointLight(0xffae7b, 0.9, 4, 2);
  terminalGlow.position.set(3.45, 1.5, 1.75);
  const deskGlow = new THREE.PointLight(0xffb577, 1.1, 8, 2);
  deskGlow.position.set(0.3, 2.4, 0.55);
  scene.add(coreGlow, terminalGlow, deskGlow);

  block(scene, 0, -0.3, 0, room.halfWidth * 2, 0.55, room.front - room.back, palette.edge);
  const floorMap = track(woodFloorTexture());
  floorMap.anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy());
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(room.halfWidth * 2 - 0.18, room.front - room.back - 0.18),
    new THREE.MeshStandardMaterial({ map: floorMap, roughness: 0.86 }),
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = 0.028;
  floor.receiveShadow = true;
  scene.add(floor);
  // Real openings let the sky dome show through. Three's sun and
  // shadow map alone decide which parts of the interior receive direct light.
  block(scene, 0, 0.575, room.back, room.halfWidth * 2, 1.15, 0.2, palette.wall);
  block(scene, 0, 2.52, room.back, room.halfWidth * 2, 0.46, 0.2, palette.wall);
  let wallStart = -room.halfWidth;
  for (const x of windowXs) {
    const openingStart = x - 0.9;
    block(scene, (wallStart + openingStart) / 2, room.windowY, room.back,
      openingStart - wallStart, 1.14, 0.2, palette.wall);
    wallStart = x + 0.9;
  }
  block(scene, (wallStart + room.halfWidth) / 2, room.windowY, room.back,
    room.halfWidth - wallStart, 1.14, 0.2, palette.wall);
  block(scene, 0, 2.75, room.back, room.halfWidth * 2, 0.17, 0.3, palette.wallTop);
  block(scene, 0, 0.38, room.back + 0.12, room.halfWidth * 2 - 0.2, 0.55, 0.06, 0x775d66);
  block(scene, 0, 0.74, room.back + 0.16, room.halfWidth * 2 - 0.1, 0.08, 0.1, 0xd2a07c);
  const foliageMaterial = new THREE.MeshBasicMaterial({
    map: track(windowFoliageTexture()), transparent: true, alphaTest: 0.03,
    side: THREE.DoubleSide, depthWrite: false,
  });
  for (const x of windowXs) {
    const foliage = new THREE.Mesh(new THREE.PlaneGeometry(1.72, 1.08), foliageMaterial);
    foliage.position.set(x, room.windowY, room.back - 0.14);
    scene.add(foliage);
    const glass = new THREE.Mesh(
      new THREE.PlaneGeometry(1.65, 1.08),
      new THREE.MeshBasicMaterial({ color: 0xf6c99b, transparent: true, opacity: 0.1, side: THREE.DoubleSide, depthWrite: false }),
    );
    glass.position.set(x, room.windowY, room.back + 0.02);
    scene.add(glass);
    block(scene, x, 1.14, room.back + 0.2, 1.98, 0.11, 0.36, palette.cream);
    block(scene, x, 2.3, room.back + 0.12, 1.92, 0.11, 0.22, palette.cream);
    for (const offset of [-0.88, 0, 0.88]) {
      block(scene, x + offset, room.windowY, room.back + 0.12, 0.09, 1.13, 0.15, palette.cream);
    }
  }
  for (const [i, x] of [-6.4, -2.5, 2.5].entries()) {
    cutout(scene, track(posterArt(i)), x, 1.65, room.back + 0.17, 0.66, 0.81);
  }
  const sconces = [-2.4, 2.4].map((x) => {
    block(scene, x, 2.22, room.back + 0.3, 0.31, 0.15, 0.2, 0x6e5360);
    const bulb = block(scene, x, 2.13, room.back + 0.42, 0.15, 0.12, 0.14, 0xffd5a0, 0xffc58a, 0.5);
    const glow = new THREE.PointLight(0xffb77b, 0, 4.5, 2);
    glow.position.set(x, 2.08, room.back + 0.6);
    scene.add(glow);
    return { bulb, glow };
  });

  // A soft circular floor marker gives the core and inbox distinct destinations.
  const rug = new THREE.Mesh(
    new THREE.CylinderGeometry(0.92, 0.92, 0.04, 12), material(0xae8e86),
  );
  rug.position.set(coreDisplay.x, 0.05, coreDisplay.z);
  rug.receiveShadow = true;
  scene.add(rug);
  const coreArt = track(coreBodyArt());
  const coreBack = cutout(scene, coreArt, coreDisplay.x + 0.1, 0.96, coreDisplay.z - 0.14, 1.39, 1.9);
  (coreBack.material as THREE.MeshStandardMaterial).color.setHex(0x79788e);
  (coreBack.material as THREE.MeshStandardMaterial).emissiveIntensity = 0;
  coreBack.castShadow = false;
  const core = cutout(scene, coreArt, coreDisplay.x, 0.95, coreDisplay.z, 1.35, 1.86);
  const coreLabel = label("AI CORE");
  coreLabel.position.set(coreDisplay.x, 2.38, coreDisplay.z);
  scene.add(coreLabel);

  terminal(scene, track(terminalArt()));
  const shadowCanvas = document.createElement("canvas");
  shadowCanvas.width = 64;
  shadowCanvas.height = 64;
  const shadowContext = shadowCanvas.getContext("2d");
  if (!shadowContext) throw new Error("Canvas 2D is required for contact shadows.");
  const shadowGradient = shadowContext.createRadialGradient(32, 32, 3, 32, 32, 31);
  shadowGradient.addColorStop(0, "#241f38e8");
  shadowGradient.addColorStop(0.3, "#292335a8");
  shadowGradient.addColorStop(0.7, "#29233540");
  shadowGradient.addColorStop(1, "#29233500");
  shadowContext.fillStyle = shadowGradient;
  shadowContext.fillRect(0, 0, 64, 64);
  const shadowTexture = new THREE.CanvasTexture(shadowCanvas);
  shadowTexture.magFilter = THREE.LinearFilter;
  const contacts: { mesh: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>; opacity: number }[] = [];
  const contact = (parent: THREE.Object3D, x: number, z: number, width: number, depth: number, y = 0.065, opacity = 0.68) => {
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(width, depth),
      new THREE.MeshBasicMaterial({ map: shadowTexture, transparent: true, depthWrite: false, opacity, toneMapped: false }),
    );
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.set(x, y, z);
    mesh.renderOrder = 3;
    parent.add(mesh);
    contacts.push({ mesh, opacity });
  };
  contact(scene, coreDisplay.x, coreDisplay.z, 1.05, 0.85, 0.076);
  contact(scene, 3.45, 1.75, 0.95, 0.65);
  const makeAgentModel = (id: number) => {
    const frames = agentArt(id);
    Object.values(frames).flatMap((directions) => Object.values(directions)).forEach(track);
    const model = createAgent(id, shadowTexture, frames);
    scene.add(model.group, model.shadow);
    return model;
  };
  const agentMeshes = simulation.agents.map((agent) => makeAgentModel(agent.id));
  const contextRoom = new THREE.Group();
  contextRoom.visible = simulation.progress.context;
  block(contextRoom, 3, 0.08, -1.8, 3.05, 0.12, 2.85, palette.lavender);
  cutout(contextRoom, track(contextConsoleArt()), 3, 0.76, -2.5, 1.45, 1.42);
  contact(contextRoom, 3, -2.5, 1.25, 0.65, 0.153);
  for (let i = 0; i < 3; i++) {
    cutout(contextRoom, track(stackArt(i)), 2.1 + i * 0.78, 0.48, -1.18, 0.66, 0.87);
    contact(contextRoom, 2.1 + i * 0.78, -1.18, 0.54, 0.42, 0.153, 0.55);
  }
  const contextLabel = label("CONTEXT");
  contextLabel.position.set(3, 2.28, -2.1);
  contextRoom.add(contextLabel);
  scene.add(contextRoom);
  const lockedContext = new THREE.Group();
  const ghostLabel = label("CONTEXT  ?");
  ghostLabel.position.set(3, 1.34, -1.8);
  lockedContext.add(ghostLabel);
  scene.add(lockedContext);
  const desks = new THREE.Group();
  scene.add(desks);
  DESKS.forEach(({ x, z }, index) => {
    desk(desks, x, z, index, track);
    contact(desks, x, z - 0.56, 1.3, 0.65);
    contact(desks, x + 0.35, z + 0.37, 0.55, 0.45, 0.065, 0.5);
  });
  // Unused stations are built but unlit, making added capacity legible at a glance.
  const stationLights = DESKS.map(({ x, z }) => {
    const mesh = cutout(desks, track(statusLightArt()), x + 0.43, 0.82, z - 0.55, 0.18, 0.27);
    return mesh;
  });
  for (let i = 0; i < 2; i++) {
    cutout(scene, track(stackArt(i)), -4.6 + i * 0.35, 0.43, 2.2, 0.65, 0.81);
    contact(scene, -4.6 + i * 0.35, 2.2, 0.55, 0.4, 0.065, 0.52);
  }
  const leaves = track(plantArt());
  const plantBack = cutout(scene, leaves, -4.42, 0.84, 2.83, 0.94, 1.14);
  (plantBack.material as THREE.MeshStandardMaterial).color.setHex(0x8a9c94);
  cutout(scene, leaves, -4.37, 0.84, 2.99, 0.98, 1.16);
  contact(scene, -4.37, 2.99, 0.63, 0.55);
  cutout(scene, leaves, 5.8, 0.67, 3.35, 0.78, 0.94);
  contact(scene, 5.8, 3.35, 0.55, 0.42);
  const specks: THREE.Mesh[] = [];
  for (let i = 0; i < 9; i++) {
    const speck = block(scene, coreDisplay.x - 0.32 + (i % 3) * 0.32, 2.2 + (i % 2) * 0.2,
      coreDisplay.z - 0.33 + Math.floor(i / 3) * 0.31,
      0.08, 0.08, 0.08, palette.cream, palette.cream, 0.8);
    specks.push(speck);
  }
  const beamTextureCanvas = document.createElement("canvas");
  beamTextureCanvas.width = 64;
  beamTextureCanvas.height = 64;
  const context = beamTextureCanvas.getContext("2d");
  if (!context) throw new Error("Canvas 2D is required for sunlight pools.");
  const gradient = context.createRadialGradient(32, 32, 4, 32, 32, 32);
  gradient.addColorStop(0, "#ffffffbb");
  gradient.addColorStop(0.7, "#ffffff77");
  gradient.addColorStop(1, "#ffffff00");
  context.fillStyle = gradient;
  context.fillRect(0, 0, 64, 64);
  const beamTexture = new THREE.CanvasTexture(beamTextureCanvas);
  beamTexture.minFilter = THREE.LinearFilter;
  const beams = windowXs.map((x) => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(12), 3));
    geometry.setIndex([0, 1, 2, 1, 3, 2]);
    const material = new THREE.MeshBasicMaterial({
      color: 0xffc990, transparent: true, opacity: 0, depthWrite: false,
      side: THREE.DoubleSide, blending: THREE.AdditiveBlending,
    });
    const shaft = new THREE.Mesh(geometry, material);
    shaft.renderOrder = 2;
    scene.add(shaft);
    const pool = new THREE.Mesh(
      new THREE.PlaneGeometry(2.05, 2.2),
      new THREE.MeshBasicMaterial({
        map: beamTexture, transparent: true, opacity: 0, depthWrite: false,
        color: 0xffd6ad, blending: THREE.AdditiveBlending,
      }),
    );
    pool.rotation.x = -Math.PI / 2;
    pool.renderOrder = 2;
    scene.add(pool);
    return { x, shaft, pool };
  });

  let zoom = 1;
  let panX = 0;
  let panZ = 0;
  let dragging = false;
  let previousX = 0;
  let previousY = 0;
  const onDown = (event: PointerEvent) => {
    dragging = true;
    previousX = event.clientX;
    previousY = event.clientY;
    renderer.domElement.setPointerCapture(event.pointerId);
  };
  const onMove = (event: PointerEvent) => {
    if (!dragging) return;
    const dx = event.clientX - previousX;
    const dy = event.clientY - previousY;
    panX = THREE.MathUtils.clamp(panX - dx * 0.012 / zoom, -2.5, 2.5);
    panZ = THREE.MathUtils.clamp(panZ - dy * 0.014 / zoom, -2, 2);
    previousX = event.clientX;
    previousY = event.clientY;
  };
  const onUp = () => { dragging = false; };
  const onWheel = (event: WheelEvent) => {
    event.preventDefault();
    zoom = THREE.MathUtils.clamp(zoom * (event.deltaY > 0 ? 0.9 : 1.1), 0.74, 1.65);
  };
  const canvas = renderer.domElement;
  canvas.addEventListener("pointerdown", onDown);
  canvas.addEventListener("pointermove", onMove);
  canvas.addEventListener("pointerup", onUp);
  canvas.addEventListener("pointercancel", onUp);
  canvas.addEventListener("wheel", onWheel, { passive: false });

  const resize = () => {
    const width = Math.max(1, host.clientWidth);
    const height = Math.max(1, host.clientHeight);
    const resolutionScale = width < 700 ? 0.75 : 0.9;
    renderer.setSize(Math.ceil(width * resolutionScale), Math.ceil(height * resolutionScale), false);
    const aspect = width / height;
    const minimumHalfWidth = 4.7;
    const cameraDistance = cameraBase.distanceTo(new THREE.Vector3(0, 0.4, 0));
    camera.aspect = aspect;
    camera.fov = THREE.MathUtils.radToDeg(
      2 * Math.atan(Math.max(Math.tan(THREE.MathUtils.degToRad(28 / 2)), minimumHalfWidth / (cameraDistance * aspect))),
    );
    camera.updateProjectionMatrix();
  };
  const observer = new ResizeObserver(resize);
  observer.observe(host);
  resize();
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  return {
    render(elapsed: number, previewOffset: number) {
      const light = sampleDaylight(simulation.time, previewOffset);
      const direct = light.sun + light.moon;
      const moonShare = direct > 0 ? light.moon / direct : 0;
      const moonStrength = light.moon / 0.62;
      foliageMaterial.color.setHex(0xffffff).lerp(nightFoliage, moonStrength * 0.7);
      sunlight.color.setHex(light.sunColor).lerp(moonColor, moonShare);
      sunlight.intensity = direct;
      sunlight.position.set(
        THREE.MathUtils.lerp(light.sunX, -3.4, moonShare),
        THREE.MathUtils.lerp(light.sunY, 6.6, moonShare), -9,
      );
      ambient.color.setHex(light.skyColor)
        .lerp(moonAmbient, moonStrength * 0.32)
        .lerp(warmAmbient, light.lamp * (0.28 - moonStrength * 0.1));
      ambient.intensity = light.ambient;
      skyBounce.color.setHex(light.bounceColor).lerp(moonBounce, moonStrength * 0.32);
      skyBounce.groundColor.setHex(0xb47976);
      skyBounce.intensity = light.ambient * 0.95;
      const daylightShadow = Math.min(1, light.sun / 3.2);
      contacts.forEach(({ mesh, opacity }) => {
        mesh.material.opacity = opacity * (0.72 + daylightShadow * 0.28);
      });
      coreGlow.intensity = 0.85 + light.lamp * 0.7;
      terminalGlow.intensity = light.lamp * 0.5;
      deskGlow.intensity = 0.4 + light.lamp * 2.3;
      sconces.forEach(({ bulb, glow }) => {
        (bulb.material as THREE.MeshStandardMaterial).emissiveIntensity = light.lamp * 0.75;
        glow.intensity = light.lamp * 1.25;
      });
      renderer.toneMappingExposure = 1.32 + light.lamp * 0.12;
      skyMaterial.uniforms.uDay.value = Math.min(1, light.sun / 3.2);
      skyMaterial.uniforms.uWarm.value = light.warmth;
      skyMaterial.uniforms.uTime.value = reducedMotion ? 0 : simulation.time;
      (skyMaterial.uniforms.uSun.value as THREE.Vector3).copy(sunlight.position).normalize();
      for (const { x, shaft, pool } of beams) {
        const fall = (room.windowY - 0.08) / (sunlight.position.y - room.windowY);
        const endX = x + (x - sunlight.position.x) * fall;
        const endZ = room.back + (room.back + 9) * fall;
        const insideRoom = THREE.MathUtils.clamp((room.halfWidth - 0.9 - Math.abs(endX)) / 0.7, 0, 1);
        const vertices = (shaft.geometry.attributes.position as THREE.BufferAttribute).array as Float32Array;
        vertices.set([
          x - 0.7, room.windowY + 0.06, room.back + 0.2, x + 0.7, room.windowY + 0.06, room.back + 0.2,
          endX - 0.9, 0.08, endZ, endX + 0.9, 0.08, endZ,
        ]);
        shaft.geometry.attributes.position.needsUpdate = true;
        shaft.geometry.computeBoundingSphere();
        (shaft.material as THREE.MeshBasicMaterial).color.copy(sunlight.color);
        (shaft.material as THREE.MeshBasicMaterial).opacity = (light.sun / 3.2 * 0.13 + moonStrength * 0.035) * insideRoom;
        (pool.material as THREE.MeshBasicMaterial).color.copy(sunlight.color);
        (pool.material as THREE.MeshBasicMaterial).opacity = (light.sun / 3.2 * 0.22 + moonStrength * 0.12) * insideRoom;
        pool.position.set(endX, 0.067, endZ);
      }
      while (agentMeshes.length < simulation.agents.length) {
        agentMeshes.push(makeAgentModel(agentMeshes.length));
      }
      const busy = simulation.agents.some((a) => a.state !== "idle");
      (core.material as THREE.MeshStandardMaterial).emissiveIntensity = (busy ? 0.65 : 0.37) + (reducedMotion ? 0 : Math.sin(elapsed * 3) * 0.15);
      core.position.y = 0.95 + (reducedMotion ? 0 : Math.sin(elapsed * 2.5) * 0.025);
      contextRoom.visible = simulation.progress.context;
      lockedContext.visible = !simulation.progress.context;
      stationLights.forEach((light, i) => {
        (light.material as THREE.MeshStandardMaterial).emissiveIntensity = i < simulation.progress.capacity ? 0.8 : 0;
        (light.material as THREE.MeshStandardMaterial).color.setHex(i < simulation.progress.capacity ? 0xffffff : palette.edge);
      });
      agentMeshes.forEach((model, index) => {
        const agent: Agent = simulation.agents[index];
        model.group.position.set(agent.x, 0, agent.z);
        model.shadow.position.set(agent.x, 0.095, agent.z);
        (model.shadow.material as THREE.MeshBasicMaterial).opacity = 0.62 + daylightShadow * 0.18;
        if (agent.state === "idle" || agent.state === "working") {
          model.facing = "away";
        } else {
          const dx = agent.target.x - agent.x;
          const dz = agent.target.z - agent.z;
          if (dz < -Math.abs(dx) * 0.85 && Math.abs(dz) > 0.2) model.facing = "away";
          else if (Math.abs(dx) > 0.2) model.facing = dx < 0 ? "left" : "right";
          else if (dz > 0.2) model.facing = "left";
        }
        const pose: keyof AgentArt = agent.state === "working" ? "working" :
          agent.carrying ? "carrying" :
          agent.state === "walking" || agent.state === "returning"
            ? !reducedMotion && Math.sin(elapsed * 11 + index) > 0 ? "stepA" : "stepB" : "idle";
        const frame = model.frames[pose][model.facing];
        if (frame !== (model.figure.material as THREE.MeshStandardMaterial).map) {
          (model.figure.material as THREE.MeshStandardMaterial).map = frame;
          (model.figure.material as THREE.MeshStandardMaterial).emissiveMap = frame;
          (model.backing.material as THREE.MeshStandardMaterial).map = frame;
          (model.backing.material as THREE.MeshStandardMaterial).emissiveMap = frame;
        }
      });
      specks.forEach((speck, i) => {
        speck.position.y = 2.2 + (reducedMotion ? 0 : Math.sin(elapsed * 1.7 + i * 2.1) * 0.26);
        speck.visible = busy || i % 3 === 0;
      });
      camera.zoom = zoom;
      camera.position.set(cameraBase.x + panX, cameraBase.y, cameraBase.z + panZ);
      camera.lookAt(panX, 0.4, panZ);
      camera.updateProjectionMatrix();
      sky.position.copy(camera.position);
      if (!contextLost) renderer.render(scene, camera);
    },
    dispose() {
      observer.disconnect();
      canvas.removeEventListener("pointerdown", onDown);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerup", onUp);
      canvas.removeEventListener("pointercancel", onUp);
      canvas.removeEventListener("wheel", onWheel);
      canvas.removeEventListener("webglcontextlost", onContextLost);
      canvas.removeEventListener("webglcontextrestored", onContextRestored);
      host.classList.remove("context-lost");
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (object.material instanceof THREE.MeshBasicMaterial && object.material.map === beamTexture) {
            object.material.map = null;
          }
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          materials.forEach((item) => item.dispose());
        }
        if (object instanceof THREE.Sprite) {
          object.material.map?.dispose();
          object.material.dispose();
        }
      });
      beamTexture.dispose();
      shadowTexture.dispose();
      artTextures.forEach((art) => art.dispose());
      renderer.dispose();
      canvas.remove();
    },
  };
}
