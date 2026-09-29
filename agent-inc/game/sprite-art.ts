import * as THREE from "three";

type Pose = "idle" | "stepA" | "stepB" | "working" | "carrying";
export type AgentArt = Record<Pose, THREE.CanvasTexture>;

const coats = [
  { main: "#67bda8", shade: "#407e82", trim: "#d7f3c9", cap: "#509b92" },
  { main: "#ae8ccc", shade: "#75669e", trim: "#ffe5b7", cap: "#826daf" },
  { main: "#e6a083", shade: "#aa687c", trim: "#fff0c6", cap: "#c77c83" },
  { main: "#d5b66d", shade: "#9b765f", trim: "#d5f1e7", cap: "#a89462" },
];

function pixel(ctx: CanvasRenderingContext2D, color: string, x: number, y: number, width: number, height: number) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

function texture(width: number, height: number, paint: (ctx: CanvasRenderingContext2D) => void): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas 2D is required to draw the office sprites.");
  paint(ctx);
  const map = new THREE.CanvasTexture(canvas);
  map.colorSpace = THREE.SRGBColorSpace;
  map.magFilter = THREE.NearestFilter;
  map.minFilter = THREE.NearestFilter;
  map.generateMipmaps = false;
  return map;
}

function drawAgent(ctx: CanvasRenderingContext2D, id: number, pose: Pose) {
  const { main, shade, trim, cap } = coats[id % coats.length];
  const ink = "#342e49";
  const face = "#f9e7c7";
  const movement = pose === "stepA" ? -3 : pose === "stepB" ? 3 : 0;

  // One-pixel dark contour and intentionally offset highlights give the
  // cutout some thickness without turning the character into a block model.
  pixel(ctx, ink, 14, 3, 20, 3);
  pixel(ctx, ink, 11, 6, 26, 5);
  pixel(ctx, ink, 8, 11, 32, 21);
  pixel(ctx, ink, 11, 32, 26, 5);
  pixel(ctx, ink, 16, 36, 16, 4);
  pixel(ctx, cap, 14, 5, 20, 4);
  pixel(ctx, cap, 10, 9, 28, 5);
  pixel(ctx, face, 11, 15, 26, 17);
  pixel(ctx, "#fff5da", 12, 15, 22, 4);
  pixel(ctx, "#efc7a7", 12, 29, 24, 4);
  pixel(ctx, main, 16, 34, 16, 4);
  pixel(ctx, ink, 12, 38, 24, 17);
  pixel(ctx, main, 14, 38, 20, 14);
  pixel(ctx, shade, 14, 48, 20, 5);
  pixel(ctx, trim, 19, 38, 10, 5);
  pixel(ctx, "#fff8dc", 21, 43, 6, 4);
  pixel(ctx, ink, 15 + movement, 53, 8, 8);
  pixel(ctx, ink, 25 - movement, 53, 8, 8);
  pixel(ctx, shade, 16 + movement, 53, 6, 5);
  pixel(ctx, shade, 26 - movement, 53, 6, 5);
  pixel(ctx, ink, 14 + movement, 60, 10, 3);
  pixel(ctx, ink, 24 - movement, 60, 10, 3);

  const handY = pose === "working" ? 41 : 43;
  pixel(ctx, ink, 6, handY - 1, 8, 9);
  pixel(ctx, main, 8, handY, 6, 6);
  pixel(ctx, face, 7, handY + 6, 6, 3);
  pixel(ctx, ink, 34, handY - 1, 8, 9);
  pixel(ctx, main, 34, handY, 6, 6);
  pixel(ctx, face, 35, handY + 6, 6, 3);

  pixel(ctx, ink, 16, 23, 4, pose === "working" ? 2 : 4);
  pixel(ctx, ink, 28, 23, 4, pose === "working" ? 2 : 4);
  if (pose !== "working") {
    pixel(ctx, "#fffefa", 16, 23, 1, 1);
    pixel(ctx, "#fffefa", 28, 23, 1, 1);
  }
  pixel(ctx, "#df9e9f", 11, 27, 4, 2);
  pixel(ctx, "#df9e9f", 33, 27, 4, 2);
  pixel(ctx, ink, 22, 29, 4, 2);
  pixel(ctx, "#f8b981", 23, 30, 2, 1);
  pixel(ctx, trim, 20, 7, 8, 3);
  pixel(ctx, ink, 22, 1, 4, 4);
  pixel(ctx, trim, 22, 0, 4, 2);

  if (pose === "carrying") {
    pixel(ctx, ink, 32, 37, 13, 16);
    pixel(ctx, "#f6e8cf", 34, 39, 9, 12);
    pixel(ctx, shade, 36, 42, 5, 1);
    pixel(ctx, shade, 36, 46, 4, 1);
    pixel(ctx, trim, 39, 36, 3, 4);
  }
  if (pose === "working") {
    pixel(ctx, ink, 15, 52, 18, 5);
    pixel(ctx, "#a2d9c8", 17, 53, 14, 2);
    pixel(ctx, trim, 12, 18, 3, 2);
  }
}

export function agentArt(id: number): AgentArt {
  const draw = (pose: Pose) => texture(48, 64, (ctx) => drawAgent(ctx, id, pose));
  return {
    idle: draw("idle"),
    stepA: draw("stepA"),
    stepB: draw("stepB"),
    working: draw("working"),
    carrying: draw("carrying"),
  };
}

export function monitorArt(index: number): THREE.CanvasTexture {
  return texture(40, 40, (ctx) => {
    const glow = index % 2 ? "#d4b5ee" : "#9ce4ce";
    pixel(ctx, "#322d4a", 5, 2, 30, 28);
    pixel(ctx, "#907b9a", 7, 4, 26, 24);
    pixel(ctx, "#25384a", 9, 6, 22, 20);
    pixel(ctx, glow, 12, 9, 12, 2);
    pixel(ctx, "#f5d4aa", 12, 14, 8, 2);
    pixel(ctx, glow, 12, 19, 15, 2);
    pixel(ctx, "#598d9b", 12, 23, 6, 1);
    pixel(ctx, "#faf0d7", 14, 28, 12, 3);
    pixel(ctx, "#322d4a", 18, 31, 4, 5);
    pixel(ctx, "#322d4a", 12, 36, 16, 3);
    pixel(ctx, "#fff0d2", 14, 36, 12, 1);
  });
}

export function terminalArt(): THREE.CanvasTexture {
  return texture(42, 50, (ctx) => {
    pixel(ctx, "#342c49", 6, 2, 30, 39);
    pixel(ctx, "#bd8ba0", 8, 4, 26, 34);
    pixel(ctx, "#fff0d2", 10, 6, 22, 29);
    pixel(ctx, "#2d4a55", 12, 9, 18, 21);
    pixel(ctx, "#a4e6cd", 15, 12, 13, 3);
    pixel(ctx, "#72aeab", 15, 18, 9, 2);
    pixel(ctx, "#f2caa2", 15, 23, 12, 2);
    pixel(ctx, "#f9edce", 18, 31, 6, 2);
    pixel(ctx, "#342c49", 16, 39, 10, 6);
    pixel(ctx, "#f7e7c7", 11, 44, 20, 3);
    pixel(ctx, "#342c49", 9, 47, 24, 2);
  });
}

export function plantArt(): THREE.CanvasTexture {
  return texture(42, 50, (ctx) => {
    const ink = "#3b4a57";
    pixel(ctx, ink, 19, 23, 4, 15);
    pixel(ctx, "#5e9f89", 12, 12, 8, 14);
    pixel(ctx, "#85c59c", 6, 9, 10, 12);
    pixel(ctx, "#afd6a4", 10, 6, 5, 6);
    pixel(ctx, "#417e7b", 22, 10, 10, 17);
    pixel(ctx, "#90cba2", 27, 6, 8, 13);
    pixel(ctx, "#b8d7a7", 28, 9, 4, 6);
    pixel(ctx, "#428579", 13, 19, 7, 9);
    pixel(ctx, "#e9b487", 15, 36, 13, 11);
    pixel(ctx, ink, 13, 36, 16, 3);
    pixel(ctx, "#c7847a", 17, 40, 8, 6);
    pixel(ctx, ink, 16, 47, 11, 2);
  });
}

export function coreSigilArt(): THREE.CanvasTexture {
  return texture(32, 32, (ctx) => {
    pixel(ctx, "#2b4754", 5, 5, 22, 22);
    pixel(ctx, "#96e5c6", 8, 8, 16, 16);
    pixel(ctx, "#ecf4d2", 13, 10, 6, 12);
    pixel(ctx, "#ecf4d2", 10, 13, 12, 6);
    pixel(ctx, "#3a8d89", 14, 14, 4, 4);
    pixel(ctx, "#eac796", 3, 3, 4, 4);
    pixel(ctx, "#eac796", 25, 25, 4, 4);
  });
}
