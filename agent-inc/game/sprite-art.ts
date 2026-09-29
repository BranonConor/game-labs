import * as THREE from "three";

type Pose = "idle" | "stepA" | "stepB" | "working" | "carrying";
export type Facing = "left" | "right";
export type AgentArt = Record<Pose, Record<Facing, THREE.CanvasTexture>>;

const chassis = [
  { main: "#68cfb3", shade: "#388a91", trim: "#e9ffca", glow: "#c6ffed" },
  { main: "#be9be1", shade: "#726ab0", trim: "#ffe4a8", glow: "#e3d5ff" },
  { main: "#f4ab82", shade: "#af6684", trim: "#b9f5d4", glow: "#ffd6b7" },
  { main: "#e4ca78", shade: "#967f74", trim: "#a5e9dc", glow: "#fff0a9" },
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

function drawAgent(ctx: CanvasRenderingContext2D, id: number, pose: Pose, facing: Facing) {
  const { main, shade, trim, glow } = chassis[id % chassis.length];
  const ink = "#2c3049";
  const step = pose === "stepA" ? -4 : pose === "stepB" ? 4 : 0;
  const working = pose === "working";
  const kind = id % 4;
  const left = facing === "left";

  // Asymmetrical machine silhouettes: lantern, antenna, long-neck and cube.
  if (kind === 0) {
    pixel(ctx, ink, 12, 11, 40, 34);
    pixel(ctx, shade, 15, 8, 36, 34);
    pixel(ctx, main, 14, 11, 33, 28);
    pixel(ctx, ink, left ? 17 : 25, 16, 19, 17);
    pixel(ctx, glow, left ? 19 : 27, 18, 14, 12);
    pixel(ctx, ink, left ? 24 : 34, 21, working ? 2 : 5, 5);
    pixel(ctx, shade, left ? 38 : 18, 17, 6, 16);
    pixel(ctx, trim, 20, 34, 21, 3);
    pixel(ctx, ink, 9, 21, 4, 11);
    pixel(ctx, trim, 8, 18, 7, 5);
    pixel(ctx, ink, 44, 14, 5, 9);
    pixel(ctx, trim, 43, 13, 7, 4);
    pixel(ctx, ink, 29, 2, 4, 8);
    pixel(ctx, trim, 26, 0, 10, 4);
  } else if (kind === 1) {
    pixel(ctx, ink, 24, 1, 5, 13);
    pixel(ctx, trim, 21, 0, 11, 5);
    pixel(ctx, ink, 13, 17, 40, 28);
    pixel(ctx, shade, 17, 13, 32, 28);
    pixel(ctx, main, 20, 12, 23, 27);
    pixel(ctx, ink, left ? 19 : 28, 17, 17, 19);
    pixel(ctx, glow, left ? 22 : 31, 20, 11, 13);
    pixel(ctx, ink, left ? 25 : 34, 22, working ? 3 : 6, 7);
    pixel(ctx, shade, left ? 37 : 20, 19, 6, 17);
    pixel(ctx, trim, 18, 36, 22, 4);
    pixel(ctx, ink, 10, 22, 6, 11);
    pixel(ctx, main, 8, 25, 9, 6);
    pixel(ctx, ink, 46, 25, 10, 5);
    pixel(ctx, trim, 50, 20, 8, 6);
  } else if (kind === 2) {
    pixel(ctx, ink, 25, 0, 4, 20);
    pixel(ctx, trim, 27, 1, 8, 5);
    pixel(ctx, shade, 30, 4, 5, 16);
    pixel(ctx, ink, 14, 18, 38, 23);
    pixel(ctx, main, 18, 15, 30, 23);
    pixel(ctx, shade, 45, 20, 8, 21);
    pixel(ctx, ink, left ? 18 : 28, 21, 19, 13);
    pixel(ctx, glow, left ? 20 : 30, 23, 15, 9);
    for (const x of (left ? [22, 29] : [33, 40])) pixel(ctx, ink, x, 25, 3, working ? 2 : 5);
    pixel(ctx, shade, left ? 39 : 19, 21, 7, 13);
    pixel(ctx, trim, 11, 28, 8, 5);
    pixel(ctx, ink, 48, 17, 8, 5);
    pixel(ctx, trim, 52, 12, 4, 6);
  } else {
    pixel(ctx, ink, 15, 10, 39, 33);
    pixel(ctx, shade, 19, 7, 31, 34);
    pixel(ctx, main, 17, 11, 29, 27);
    pixel(ctx, ink, left ? 20 : 29, 16, 18, 16);
    pixel(ctx, glow, left ? 22 : 31, 18, 13, 11);
    pixel(ctx, ink, left ? 25 : 33, 21, working ? 3 : 7, 5);
    pixel(ctx, shade, left ? 41 : 20, 16, 5, 16);
    pixel(ctx, trim, 13, 7, 11, 5);
    pixel(ctx, ink, 47, 11, 9, 5);
    pixel(ctx, trim, 51, 4, 4, 9);
    pixel(ctx, ink, 8, 20, 9, 5);
    pixel(ctx, trim, 6, 23, 8, 5);
    pixel(ctx, ink, 47, 29, 12, 6);
  }

  pixel(ctx, ink, 17, 39, 34, 23);
  pixel(ctx, shade, 21, 40, 29, 18);
  pixel(ctx, main, 19, 41, 26, 16);
  pixel(ctx, trim, 28, 42, 10, 5);
  pixel(ctx, ink, 29, 48, 12, 5);
  pixel(ctx, glow, 31, 49, 8, 3);
  pixel(ctx, ink, 11, working ? 48 : 43, 8, 17);
  pixel(ctx, main, 12, working ? 50 : 45, 6, 9);
  pixel(ctx, trim, 9, working ? 57 : 53, 9, 6);
  pixel(ctx, ink, 47, working ? 47 : 42, 8, 17);
  pixel(ctx, shade, 48, working ? 49 : 44, 6, 9);
  pixel(ctx, trim, 47, working ? 56 : 52, 9, 6);
  pixel(ctx, ink, 22 + step, 59, 9, 15);
  pixel(ctx, ink, 39 - step, 59, 9, 15);
  pixel(ctx, shade, 24 + step, 60, 6, 10);
  pixel(ctx, main, 40 - step, 60, 6, 10);
  pixel(ctx, ink, 18 + step, 72, 14, 5);
  pixel(ctx, ink, 38 - step, 72, 14, 5);
  pixel(ctx, trim, 20 + step, 72, 8, 2);
  if (pose === "carrying") {
    pixel(ctx, ink, 47, 43, 14, 19);
    pixel(ctx, "#ffefd5", 49, 45, 10, 15);
    pixel(ctx, shade, 51, 49, 7, 2);
    pixel(ctx, shade, 51, 54, 5, 2);
    pixel(ctx, trim, 55, 41, 4, 5);
  }
  if (working) {
    pixel(ctx, ink, 24, 57, 20, 5);
    pixel(ctx, glow, 26, 58, 16, 2);
  }
}

export function agentArt(id: number): AgentArt {
  const draw = (pose: Pose): Record<Facing, THREE.CanvasTexture> => ({
    left: texture(64, 80, (ctx) => drawAgent(ctx, id, pose, "left")),
    right: texture(64, 80, (ctx) => drawAgent(ctx, id, pose, "right")),
  });
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

export function deskArt(index: number): THREE.CanvasTexture {
  return texture(80, 70, (ctx) => {
    const top = index % 2 ? "#eed3b3" : "#f4dcb8";
    pixel(ctx, "#322e4b", 10, 24, 61, 22);
    pixel(ctx, "#7d637f", 13, 28, 58, 20);
    pixel(ctx, "#b88b83", 8, 26, 58, 16);
    pixel(ctx, top, 12, 19, 55, 15);
    pixel(ctx, "#fff1cc", 19, 16, 44, 6);
    pixel(ctx, "#704f6b", 13, 40, 9, 25);
    pixel(ctx, "#342e49", 11, 63, 13, 5);
    pixel(ctx, "#704f6b", 59, 38, 8, 24);
    pixel(ctx, "#342e49", 57, 61, 13, 5);
    pixel(ctx, "#d8a694", 23, 30, 29, 3);
    pixel(ctx, "#4f405c", 27, 35, 5, 3);
    pixel(ctx, "#4f405c", 43, 35, 5, 3);
  });
}

export function chairArt(): THREE.CanvasTexture {
  return texture(40, 54, (ctx) => {
    pixel(ctx, "#332e4a", 6, 3, 30, 34);
    pixel(ctx, "#8d7698", 9, 5, 25, 28);
    pixel(ctx, "#b89ec0", 12, 6, 20, 17);
    pixel(ctx, "#4f4569", 6, 32, 29, 9);
    pixel(ctx, "#9882a1", 10, 31, 24, 5);
    pixel(ctx, "#342e49", 19, 40, 5, 9);
    pixel(ctx, "#342e49", 11, 48, 24, 4);
    pixel(ctx, "#f4dfc6", 15, 12, 13, 2);
  });
}

export function coreBodyArt(): THREE.CanvasTexture {
  return texture(68, 88, (ctx) => {
    pixel(ctx, "#302d4a", 10, 52, 53, 30);
    pixel(ctx, "#8f789a", 13, 54, 47, 21);
    pixel(ctx, "#d9bfd2", 16, 53, 38, 5);
    pixel(ctx, "#302d4a", 14, 13, 42, 48);
    pixel(ctx, "#529e9d", 18, 9, 35, 46);
    pixel(ctx, "#83ddbe", 19, 14, 29, 37);
    pixel(ctx, "#c4f5d1", 22, 18, 22, 28);
    pixel(ctx, "#f6f3c9", 30, 22, 7, 21);
    pixel(ctx, "#f6f3c9", 24, 29, 19, 7);
    pixel(ctx, "#41989a", 31, 30, 5, 5);
    pixel(ctx, "#302d4a", 12, 5, 45, 9);
    pixel(ctx, "#f6e7cb", 15, 4, 39, 7);
    pixel(ctx, "#d8a9a5", 18, 60, 6, 5);
    pixel(ctx, "#d8a9a5", 43, 60, 6, 5);
    pixel(ctx, "#302d4a", 9, 79, 55, 5);
  });
}

export function contextConsoleArt(): THREE.CanvasTexture {
  return texture(64, 63, (ctx) => {
    pixel(ctx, "#342e50", 12, 6, 43, 39);
    pixel(ctx, "#7e70a4", 16, 4, 35, 37);
    pixel(ctx, "#d7c6eb", 19, 9, 27, 26);
    pixel(ctx, "#3c5366", 22, 13, 22, 17);
    pixel(ctx, "#a2f2ce", 25, 16, 16, 3);
    pixel(ctx, "#a2f2ce", 25, 23, 10, 2);
    pixel(ctx, "#332d49", 7, 38, 49, 19);
    pixel(ctx, "#bda8c6", 11, 38, 45, 11);
    pixel(ctx, "#f7e9cb", 15, 39, 34, 3);
    pixel(ctx, "#705d80", 11, 51, 9, 11);
    pixel(ctx, "#705d80", 45, 51, 9, 11);
  });
}

export function stackArt(index: number): THREE.CanvasTexture {
  return texture(40, 52, (ctx) => {
    pixel(ctx, "#302d4a", 5, 34, 30, 14);
    pixel(ctx, "#c4a3b8", 8, 35, 24, 10);
    pixel(ctx, "#f7e7c7", 11, 36, 17, 3);
    pixel(ctx, "#302d4a", 8, 24, 27, 10);
    pixel(ctx, index % 2 ? "#91ceb0" : "#e3b695", 11, 25, 21, 6);
    pixel(ctx, "#302d4a", 4, 15, 25, 9);
    pixel(ctx, "#c1afe2", 7, 16, 19, 6);
    pixel(ctx, "#302d4a", 14, 6, 22, 9);
    pixel(ctx, "#f1d49f", 17, 7, 16, 6);
    pixel(ctx, "#302d4a", 12, 47, 22, 3);
  });
}

export function posterArt(index: number): THREE.CanvasTexture {
  return texture(36, 44, (ctx) => {
    pixel(ctx, "#332e4a", 2, 2, 32, 40);
    pixel(ctx, "#e4d5d9", 5, 5, 26, 34);
    pixel(ctx, index % 2 ? "#d99b97" : "#83b9ae", 7, 7, 22, 29);
    pixel(ctx, "#fff2d4", 11, 13, 13, 4);
    pixel(ctx, "#474964", 15, 20, 11, 4);
    pixel(ctx, "#f4ddac", 9, 28, 14, 3);
  });
}

export function statusLightArt(): THREE.CanvasTexture {
  return texture(20, 26, (ctx) => {
    pixel(ctx, "#302d4a", 3, 4, 14, 19);
    pixel(ctx, "#726b92", 5, 5, 10, 14);
    pixel(ctx, "#a0f3d2", 6, 7, 8, 8);
    pixel(ctx, "#fff4d4", 8, 8, 3, 3);
    pixel(ctx, "#302d4a", 6, 22, 9, 3);
  });
}
