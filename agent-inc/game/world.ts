import * as THREE from "three";
import type { Agent, Simulation } from "./simulation";

const palette = {
  floor: 0xe7d9ba,
  floorAlt: 0xe1d1b2,
  edge: 0x8a7280,
  wall: 0xb7a9b6,
  wallTop: 0xe8d9ce,
  wood: 0x907a80,
  cream: 0xffebcc,
  ink: 0x302d49,
  mint: 0x77dfc6,
  lavender: 0xbba6eb,
  peach: 0xffab92,
};

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

function terminal(scene: THREE.Scene) {
  block(scene, 3.45, 0.38, 1.75, 0.95, 0.75, 0.75, palette.wood);
  block(scene, 3.45, 0.86, 1.75, 0.79, 0.13, 0.64, palette.cream);
  block(scene, 3.45, 1.35, 1.66, 0.79, 0.82, 0.18, palette.ink);
  block(scene, 3.45, 1.35, 1.77, 0.57, 0.57, 0.035, palette.mint, palette.mint, 0.55);
  block(scene, 3.45, 1.28, 1.8, 0.31, 0.05, 0.04, palette.ink);
  const sign = label("INCOMING");
  sign.position.set(3.45, 2.5, 1.75);
  scene.add(sign);
}

function desk(scene: THREE.Object3D, x: number, z: number, index: number) {
  block(scene, x, 0.53, z - 0.62, 1.35, 0.13, 0.7, palette.wood);
  for (const offset of [-0.53, 0.53]) {
    block(scene, x + offset, 0.27, z - 0.62, 0.12, 0.47, 0.56, palette.edge);
  }
  block(scene, x, 0.9, z - 0.8, 0.68, 0.61, 0.15, palette.ink);
  block(scene, x, 0.9, z - 0.71, 0.52, 0.42, 0.035, index % 2 ? palette.lavender : palette.mint,
    index % 2 ? palette.lavender : palette.mint, 0.3);
  block(scene, x, 0.62, z - 0.34, 0.62, 0.04, 0.19, palette.cream);
  block(scene, x + 0.5, 0.65, z - 0.55, 0.16, 0.13, 0.16, palette.peach);
  block(scene, x, 0.13, z + 0.49, 0.7, 0.17, 0.65, palette.edge);
}

function createAgent(id: number) {
  const group = new THREE.Group();
  const colors = [palette.mint, palette.lavender, palette.peach, 0xf0d17b];
  const coat = colors[id % colors.length];
  block(group, 0, 0.55, 0, 0.44, 0.59, 0.38, coat);
  block(group, 0, 1.04, 0, 0.56, 0.51, 0.48, palette.cream);
  block(group, 0, 1.34, 0, 0.68, 0.18, 0.56, coat);
  block(group, -0.17, 1.06, 0.256, 0.09, 0.1, 0.02, palette.ink);
  block(group, 0.17, 1.06, 0.256, 0.09, 0.1, 0.02, palette.ink);
  block(group, 0, 1.56, 0, 0.09, 0.3, 0.09, palette.ink);
  block(group, 0, 1.74, 0, 0.2, 0.18, 0.2, coat, coat, 0.4);
  block(group, -0.32, 0.56, 0, 0.18, 0.4, 0.23, coat);
  block(group, 0.32, 0.56, 0, 0.18, 0.4, 0.23, coat);
  const legs = [
    block(group, -0.14, 0.17, 0, 0.16, 0.31, 0.2, palette.ink),
    block(group, 0.14, 0.17, 0, 0.16, 0.31, 0.2, palette.ink),
  ];
  const packet = block(group, 0.4, 0.66, 0.32, 0.24, 0.3, 0.09, palette.cream);
  packet.visible = false;
  return { group, legs, packet };
}

export type World = { render: (elapsed: number) => void; dispose: () => void };

export function createWorld(host: HTMLElement, simulation: Simulation): World {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x2e2d48);
  const camera = new THREE.OrthographicCamera(-7.3, 7.3, 5.5, -5.5, 0.1, 100);
  camera.position.set(12, 15, 20);
  camera.lookAt(0, 0.3, 0);
  const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: "low-power" });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.domElement.className = "world-canvas";
  renderer.domElement.setAttribute("aria-label", "Isometric view of the little AI office");
  renderer.domElement.setAttribute("role", "img");
  host.appendChild(renderer.domElement);
  scene.add(new THREE.AmbientLight(0xf6e8d9, 2.2));
  const sunlight = new THREE.DirectionalLight(0xffebce, 3.2);
  sunlight.position.set(1, 11, 7);
  sunlight.castShadow = true;
  sunlight.shadow.mapSize.set(1024, 1024);
  sunlight.shadow.camera.left = -9;
  sunlight.shadow.camera.right = 9;
  sunlight.shadow.camera.top = 9;
  sunlight.shadow.camera.bottom = -9;
  sunlight.shadow.bias = -0.001;
  scene.add(sunlight);

  block(scene, 0, -0.3, 0, 10.5, 0.55, 7.9, palette.edge);
  for (let x = -5; x < 5; x++) {
    for (let z = -4; z < 4; z++) {
      block(scene, x + 0.5, 0.005, z + 0.5, 0.99, 0.04, 0.99,
        (x + z) % 2 ? palette.floor : palette.floorAlt);
    }
  }
  block(scene, 0, 1.04, -3.9, 10.5, 2, 0.2, palette.wall);
  block(scene, -5.15, 1.04, 0, 0.2, 2, 7.9, palette.wall);
  block(scene, 0, 2.13, -3.9, 10.5, 0.19, 0.3, palette.wallTop);
  block(scene, -5.15, 2.13, 0, 0.3, 0.19, 7.9, palette.wallTop);
  for (const x of [-3.4, 0, 3.4]) {
    block(scene, x, 1.39, -3.74, 1.43, 0.97, 0.04, palette.cream);
    block(scene, x, 1.39, -3.7, 1.18, 0.73, 0.05, 0x83babb, 0x83babb, 0.12);
    block(scene, x, 1.39, -3.64, 0.07, 0.8, 0.06, palette.wallTop);
    block(scene, x, 1.39, -3.64, 1.25, 0.07, 0.06, palette.wallTop);
  }
  for (let z = -2; z <= 2; z += 2) {
    block(scene, -4.98, 0.93, z, 0.07, 0.73, 0.84, palette.ink);
    block(scene, -4.93, 0.93, z, 0.06, 0.51, 0.6, palette.lavender, palette.lavender, 0.12);
  }

  // A soft circular floor marker gives the core and inbox distinct destinations.
  const rug = new THREE.Mesh(
    new THREE.CylinderGeometry(1.13, 1.13, 0.04, 12), material(0xb6a6af),
  );
  rug.position.set(-2.9, 0.05, -1.25);
  rug.receiveShadow = true;
  scene.add(rug);
  block(scene, -2.9, 0.56, -1.25, 1.4, 0.95, 1.35, palette.ink);
  block(scene, -2.9, 1.15, -1.25, 1.15, 0.26, 1.09, palette.edge);
  const core = block(scene, -2.9, 1.77, -1.25, 0.88, 0.88, 0.88,
    palette.mint, palette.mint, 0.65);
  const coreCap = block(scene, -2.9, 2.24, -1.25, 1.07, 0.11, 1.07, palette.cream);
  for (let i = 0; i < 4; i++) {
    block(scene, -3.37 + (i % 2) * 0.94, 0.77, -1.73 + Math.floor(i / 2) * 0.94,
      0.13, 1.44, 0.13, palette.cream);
  }
  const coreLabel = label("AI CORE");
  coreLabel.position.set(-2.9, 3.08, -1.25);
  scene.add(coreLabel);

  terminal(scene);
  const agentMeshes = simulation.agents.map((agent) => {
    const model = createAgent(agent.id);
    scene.add(model.group);
    return model;
  });
  const contextRoom = new THREE.Group();
  contextRoom.visible = simulation.progress.context;
  block(contextRoom, 3, 0.08, -1.8, 3.05, 0.12, 2.85, palette.lavender);
  for (const x of [1.65, 4.35]) {
    for (const z of [-3.05, -0.55]) {
      block(contextRoom, x, 0.68, z, 0.14, 1.2, 0.14, palette.cream);
    }
  }
  block(contextRoom, 3, 0.7, -2.5, 1.5, 0.68, 0.4, palette.ink);
  block(contextRoom, 3, 1.12, -2.5, 1.15, 0.14, 0.27, palette.mint, palette.mint, 0.4);
  for (let i = 0; i < 3; i++) block(contextRoom, 2.45 + i * 0.53, 0.38, -1.42, 0.39, 0.6, 0.25, palette.cream);
  const contextLabel = label("CONTEXT");
  contextLabel.position.set(3, 2.28, -2.1);
  contextRoom.add(contextLabel);
  scene.add(contextRoom);
  const lockedContext = new THREE.Group();
  for (let i = 0; i < 4; i++) {
    block(lockedContext, 1.75 + (i % 2) * 2.35, 0.11, -2.95 + Math.floor(i / 2) * 2.26,
      0.6, 0.15, 0.6, palette.edge);
  }
  const ghostLabel = label("CONTEXT  ?");
  ghostLabel.position.set(3, 1.34, -1.8);
  lockedContext.add(ghostLabel);
  scene.add(lockedContext);
  const desks = new THREE.Group();
  scene.add(desks);
  const deskPoints = [
    [-0.75, 0.15], [1.2, 0.15], [-0.75, 1.75], [1.2, 1.75],
  ];
  deskPoints.forEach(([x, z], index) => desk(desks, x, z, index));
  // Unused stations are built but unlit, making added capacity legible at a glance.
  const stationLights = deskPoints.map(([x, z]) => {
    const mesh = block(desks, x, 1.27, z - 0.65, 0.25, 0.1, 0.1, palette.mint, palette.mint, 0.6);
    return mesh;
  });
  for (let i = 0; i < 5; i++) {
    block(scene, -4.55, 0.1 + i * 0.21, 2.25, 0.55, 0.18, 0.52,
      i % 2 ? palette.peach : palette.cream);
  }
  block(scene, -4.37, 0.3, 2.9, 0.44, 0.6, 0.44, palette.wood);
  const plant = new THREE.Mesh(new THREE.IcosahedronGeometry(0.38, 0), material(0x81bca0));
  plant.position.set(-4.37, 0.86, 2.9);
  plant.castShadow = true;
  scene.add(plant);
  const specks: THREE.Mesh[] = [];
  for (let i = 0; i < 9; i++) {
    const speck = block(scene, -3.22 + (i % 3) * 0.32, 2.65 + (i % 2) * 0.2,
      -1.58 + Math.floor(i / 3) * 0.31, 0.08, 0.08, 0.08, palette.cream, palette.cream, 0.8);
    specks.push(speck);
  }

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
    renderer.setSize(Math.ceil(width * 0.72), Math.ceil(height * 0.72), false);
    const aspect = width / height;
    const span = 6.1;
    camera.left = -span * aspect;
    camera.right = span * aspect;
    camera.top = span;
    camera.bottom = -span;
    camera.updateProjectionMatrix();
  };
  const observer = new ResizeObserver(resize);
  observer.observe(host);
  resize();

  return {
    render(elapsed: number) {
      while (agentMeshes.length < simulation.agents.length) {
        const model = createAgent(agentMeshes.length);
        scene.add(model.group);
        agentMeshes.push(model);
      }
      const busy = simulation.agents.some((a) => a.state !== "idle");
      (core.material as THREE.MeshStandardMaterial).emissiveIntensity = (busy ? 0.65 : 0.37) + Math.sin(elapsed * 3) * 0.15;
      core.rotation.y = elapsed * 0.25;
      coreCap.position.y = 2.24 + Math.sin(elapsed * 2.5) * 0.035;
      contextRoom.visible = simulation.progress.context;
      lockedContext.visible = !simulation.progress.context;
      stationLights.forEach((light, i) => {
        (light.material as THREE.MeshStandardMaterial).emissiveIntensity = i < simulation.progress.capacity ? 0.8 : 0;
        (light.material as THREE.MeshStandardMaterial).color.setHex(i < simulation.progress.capacity ? palette.mint : palette.edge);
      });
      agentMeshes.forEach((model, index) => {
        const agent: Agent = simulation.agents[index];
        model.group.position.set(agent.x, agent.state === "walking" || agent.state === "returning"
          ? Math.abs(Math.sin(elapsed * 12 + index)) * 0.09 : Math.sin(elapsed * 2 + index) * 0.025, agent.z);
        if (agent.state === "walking" || agent.state === "returning") {
          model.group.rotation.y = Math.atan2(agent.target.x - agent.x, agent.target.z - agent.z);
        } else {
          model.group.rotation.y = 0;
        }
        model.legs[0].position.z = Math.sin(elapsed * 11 + index) * (agent.state === "walking" || agent.state === "returning" ? 0.11 : 0);
        model.legs[1].position.z = -model.legs[0].position.z;
        model.packet.visible = agent.carrying;
        if (agent.state === "working") model.group.rotation.z = Math.sin(elapsed * 16 + index) * 0.038;
        else model.group.rotation.z = 0;
      });
      specks.forEach((speck, i) => {
        speck.position.y = 2.5 + Math.sin(elapsed * 1.7 + i * 2.1) * 0.34;
        speck.visible = busy || i % 3 === 0;
      });
      camera.zoom = zoom;
      camera.position.set(12 + panX, 15, 20 + panZ);
      camera.lookAt(panX, 0.3, panZ);
      camera.updateProjectionMatrix();
      renderer.render(scene, camera);
    },
    dispose() {
      observer.disconnect();
      canvas.removeEventListener("pointerdown", onDown);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerup", onUp);
      canvas.removeEventListener("pointercancel", onUp);
      canvas.removeEventListener("wheel", onWheel);
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          materials.forEach((item) => item.dispose());
        }
        if (object instanceof THREE.Sprite) {
          object.material.map?.dispose();
          object.material.dispose();
        }
      });
      renderer.dispose();
      canvas.remove();
    },
  };
}
