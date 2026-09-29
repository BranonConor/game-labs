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
  floor: 0xe9d6ae,
  floorAlt: 0xdfc9a3,
  edge: 0x75677f,
  wall: 0x9989a6,
  wallTop: 0xf2caaa,
  cream: 0xffebcc,
  lavender: 0xbba6eb,
};
const cutoutYaw = 0;
const cameraBase = new THREE.Vector3(0, 17, 24);
const coreDisplay = { x: -3.8, z: -2.2 };
const moonColor = new THREE.Color(0xa9c9ff);
const moonAmbient = new THREE.Color(0xb8cbea);
const moonBounce = new THREE.Color(0xb4ccf4);
const warmAmbient = new THREE.Color(0xffdac1);

function material(color: number, emissive = 0, intensity = 0) {
  return new THREE.MeshStandardMaterial({
    color, roughness: 0.88, flatShading: true, emissive, emissiveIntensity: intensity,
  });
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
  ctx.fillStyle = "#f9ecd4";
  ctx.fillRect(4, 4, 248, 56);
  ctx.strokeStyle = "#9b8299";
  ctx.lineWidth = 5;
  ctx.strokeRect(4, 4, 248, 56);
  ctx.fillStyle = color;
  ctx.font = "bold 25px monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, 128, 34);
  const texture = new THREE.CanvasTexture(canvas);
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestFilter;
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false }));
  sprite.scale.set(2.25, 0.56, 1);
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
  const backing = cutout(group, frames.idle.left, 0.045, 0.88, -0.085, 1.26, 1.76);
  (backing.material as THREE.MeshStandardMaterial).color.setHex(0x766577);
  (backing.material as THREE.MeshStandardMaterial).emissiveIntensity = 0;
  backing.castShadow = false;
  backing.receiveShadow = false;
  const figure = cutout(group, frames.idle.left, 0, 0.87, 0, 1.22, 1.73);
  (figure.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.6;
  backing.rotation.y = 0;
  figure.rotation.y = 0;
  group.rotation.y = cutoutYaw;
  const shadow = new THREE.Mesh(
    new THREE.PlaneGeometry(0.9, 0.67),
    new THREE.MeshBasicMaterial({ map: shadowTexture, transparent: true, depthWrite: false, opacity: 0.66, toneMapped: false }),
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.renderOrder = 3;
  return { group, backing, figure, frames, facing: "left" as Facing, shadow };
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
  const camera = new THREE.OrthographicCamera(-7.3, 7.3, 5.5, -5.5, 0.1, 100);
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
  renderer.domElement.setAttribute("aria-label", "Front-facing orthographic view of the little AI office");
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
        vec3 upper = mix(vec3(0.075, 0.07, 0.19), vec3(0.22, 0.49, 0.57), uDay);
        vec3 lower = mix(vec3(0.22, 0.14, 0.28), vec3(0.71, 0.53, 0.52), uDay);
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
  sunlight.shadow.camera.left = -9;
  sunlight.shadow.camera.right = 9;
  sunlight.shadow.camera.top = 9;
  sunlight.shadow.camera.bottom = -9;
  sunlight.shadow.bias = -0.0005;
  sunlight.shadow.normalBias = 0.012;
  scene.add(sunlight);
  const coreGlow = new THREE.PointLight(0x8af6d8, 1.5, 5, 2);
  coreGlow.position.set(coreDisplay.x, 1.9, coreDisplay.z);
  const terminalGlow = new THREE.PointLight(0xffb8a7, 0.65, 3, 2);
  terminalGlow.position.set(3.45, 1.5, 1.75);
  const deskGlow = new THREE.PointLight(0xffb488, 1.1, 7, 2);
  deskGlow.position.set(0.3, 2.4, 0.55);
  scene.add(coreGlow, terminalGlow, deskGlow);

  block(scene, 0, -0.3, 0, 10.5, 0.55, 7.9, palette.edge);
  for (let x = -5; x < 5; x++) {
    for (let z = -4; z < 4; z++) {
      block(scene, x + 0.5, 0.005, z + 0.5, 0.99, 0.04, 0.99,
        (x + z) % 2 ? palette.floor : palette.floorAlt);
    }
  }
  // Real openings let the sky dome show through. Three's sun and
  // shadow map alone decide which parts of the interior receive direct light.
  block(scene, 0, 0.47, -3.9, 10.5, 0.94, 0.2, palette.wall);
  block(scene, 0, 2.01, -3.9, 10.5, 0.31, 0.2, palette.wall);
  for (const [from, to] of [[-5.25, -4.12], [-2.68, -0.72], [0.72, 2.68], [4.12, 5.25]]) {
    block(scene, (from + to) / 2, 1.4, -3.9, to - from, 0.94, 0.2, palette.wall);
  }
  block(scene, -5.15, 1.04, 0, 0.2, 2, 7.9, palette.wall);
  block(scene, 0, 2.13, -3.9, 10.5, 0.19, 0.3, palette.wallTop);
  block(scene, -5.15, 2.13, 0, 0.3, 0.19, 7.9, palette.wallTop);
  for (const x of [-3.4, 0, 3.4]) {
    const glass = new THREE.Mesh(
      new THREE.PlaneGeometry(1.33, 0.82),
      new THREE.MeshBasicMaterial({ color: 0xaadfe2, transparent: true, opacity: 0.12, side: THREE.DoubleSide, depthWrite: false }),
    );
    glass.position.set(x, 1.4, -3.88);
    scene.add(glass);
    block(scene, x, 0.94, -3.69, 1.55, 0.11, 0.36, palette.cream);
    block(scene, x, 1.87, -3.77, 1.52, 0.11, 0.22, palette.cream).castShadow = true;
    for (const offset of [-0.72, 0, 0.72]) {
      block(scene, x + offset, 1.4, -3.77, 0.08, 0.93, 0.15, palette.cream);
    }
  }
  for (let i = 0; i < 3; i++) {
    cutout(scene, track(posterArt(i)), -4.77, 1.05, -2 + i * 2, 0.78, 0.88);
  }

  // A soft circular floor marker gives the core and inbox distinct destinations.
  const rug = new THREE.Mesh(
    new THREE.CylinderGeometry(1.13, 1.13, 0.04, 12), material(0xb6a6af),
  );
  rug.position.set(coreDisplay.x, 0.05, coreDisplay.z);
  rug.receiveShadow = true;
  scene.add(rug);
  const coreArt = track(coreBodyArt());
  const coreBack = cutout(scene, coreArt, coreDisplay.x + 0.14, 1.15, coreDisplay.z - 0.18, 1.61, 2.29);
  (coreBack.material as THREE.MeshStandardMaterial).color.setHex(0x79788e);
  (coreBack.material as THREE.MeshStandardMaterial).emissiveIntensity = 0;
  coreBack.castShadow = false;
  const core = cutout(scene, coreArt, coreDisplay.x, 1.15, coreDisplay.z, 1.55, 2.26);
  const coreLabel = label("AI CORE");
  coreLabel.position.set(coreDisplay.x, 3.08, coreDisplay.z);
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
  contact(scene, coreDisplay.x, coreDisplay.z, 1.4, 1.05, 0.076);
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
  const specks: THREE.Mesh[] = [];
  for (let i = 0; i < 9; i++) {
    const speck = block(scene, coreDisplay.x - 0.32 + (i % 3) * 0.32, 2.65 + (i % 2) * 0.2,
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
  const beams = [-3.4, 0, 3.4].map((x) => {
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
      new THREE.PlaneGeometry(1.8, 1.9),
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
    renderer.setSize(Math.ceil(width * (width < 700 ? 0.68 : 0.8)), Math.ceil(height * (width < 700 ? 0.68 : 0.8)), false);
    const aspect = width / height;
    const span = 5;
    camera.left = -span * aspect;
    camera.right = span * aspect;
    camera.top = span;
    camera.bottom = -span;
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
      sunlight.color.setHex(light.sunColor).lerp(moonColor, moonShare);
      sunlight.intensity = direct;
      sunlight.position.set(
        THREE.MathUtils.lerp(light.sunX, -3.4, moonShare),
        THREE.MathUtils.lerp(light.sunY, 6.6, moonShare), -9,
      );
      ambient.color.setHex(light.skyColor)
        .lerp(moonAmbient, moonStrength * 0.45)
        .lerp(warmAmbient, light.lamp * (0.26 - moonStrength * 0.16));
      ambient.intensity = light.ambient;
      skyBounce.color.setHex(light.bounceColor).lerp(moonBounce, moonStrength * 0.55);
      skyBounce.groundColor.setHex(0xb47976);
      skyBounce.intensity = light.ambient * 0.95;
      const daylightShadow = Math.min(1, light.sun / 3.2);
      contacts.forEach(({ mesh, opacity }) => {
        mesh.material.opacity = opacity * (0.72 + daylightShadow * 0.28);
      });
      coreGlow.intensity = 0.85 + light.lamp * 0.7;
      terminalGlow.intensity = light.lamp * 0.5;
      deskGlow.intensity = 0.3 + light.lamp * 1.8;
      renderer.toneMappingExposure = 1.32 + light.lamp * 0.12;
      skyMaterial.uniforms.uDay.value = Math.min(1, light.sun / 3.2);
      skyMaterial.uniforms.uWarm.value = light.warmth;
      skyMaterial.uniforms.uTime.value = reducedMotion ? 0 : simulation.time;
      (skyMaterial.uniforms.uSun.value as THREE.Vector3).copy(sunlight.position).normalize();
      for (const { x, shaft, pool } of beams) {
        const fall = 1.58 / (sunlight.position.y - 1.4);
        const endX = x + (x - sunlight.position.x) * fall;
        const endZ = -3.77 + 5.23 * fall;
        const insideRoom = THREE.MathUtils.clamp((4.5 - Math.abs(endX)) / 0.55, 0, 1);
        const vertices = (shaft.geometry.attributes.position as THREE.BufferAttribute).array as Float32Array;
        vertices.set([
          x - 0.62, 1.78, -3.7, x + 0.62, 1.78, -3.7,
          endX - 0.75, 0.08, endZ, endX + 0.75, 0.08, endZ,
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
      core.position.y = 1.15 + (reducedMotion ? 0 : Math.sin(elapsed * 2.5) * 0.025);
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
        (model.shadow.material as THREE.MeshBasicMaterial).opacity = 0.72 + daylightShadow * 0.18;
        if (agent.state === "walking" || agent.state === "returning") {
          const dx = agent.target.x - agent.x;
          if (Math.abs(dx) > 0.2) model.facing = dx < 0 ? "left" : "right";
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
        speck.position.y = 2.5 + (reducedMotion ? 0 : Math.sin(elapsed * 1.7 + i * 2.1) * 0.34);
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
