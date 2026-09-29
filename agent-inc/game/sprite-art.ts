import * as THREE from "three";

type Pose = "idle" | "stepA" | "stepB" | "working" | "carrying";
export type Facing = "left" | "right";
export type AgentArt = Record<Pose, Record<Facing, THREE.CanvasTexture>>;

const workers = [
  { coat: "#79bda5", shade: "#568b8d", deep: "#426a7e", hair: "#49445e", hairLight: "#756480", skin: "#e7af8f", skinLight: "#ffd2a6", accent: "#f5e2a2" },
  { coat: "#b29acb", shade: "#80759f", deep: "#60577f", hair: "#65516a", hairLight: "#9e7887", skin: "#c99074", skinLight: "#eab997", accent: "#f5c39b" },
  { coat: "#d99683", shade: "#ab727d", deep: "#755d78", hair: "#34374f", hairLight: "#65647b", skin: "#aa745b", skinLight: "#d4a27d", accent: "#d5efbc" },
  { coat: "#d9bc78", shade: "#a78673", deep: "#786b78", hair: "#a87962", hairLight: "#d2a477", skin: "#ddab85", skinLight: "#f7caa3", accent: "#a7ddd1" },
];
const outline = "#2d3049";

function pixel(ctx: CanvasRenderingContext2D, color: string, x: number, y: number, width: number, height: number) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

function oval(ctx: CanvasRenderingContext2D, color: string, cx: number, cy: number, rx: number, ry: number) {
  for (let dy = -ry; dy <= ry; dy++) {
    const span = Math.floor(rx * Math.sqrt(1 - (dy * dy) / ((ry + 0.5) * (ry + 0.5))));
    pixel(ctx, color, cx - span, cy + dy, span * 2 + 1, 1);
  }
}

function speckle(ctx: CanvasRenderingContext2D, color: string, points: readonly [number, number][]) {
  for (const [x, y] of points) pixel(ctx, color, x, y, 1, 1);
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
  const { coat, shade, deep, hair, hairLight, skin, skinLight, accent } = workers[id % workers.length];
  const step = pose === "stepA" ? -3 : pose === "stepB" ? 3 : 0;
  const working = pose === "working";
  const left = facing === "left";
  const nearEye = left ? 24 : 36;
  const farEye = left ? 36 : 24;
  const nose = left ? 25 : 38;
  const armY = working ? 44 : 50;

  for (const [legX, footX] of [[23 + step, 17 + step], [38 - step, 35 - step]]) {
    pixel(ctx, outline, legX, 59, 9, 13);
    pixel(ctx, deep, legX + 2, 61, 5, 9);
    pixel(ctx, outline, footX, 70, 16, 6);
    pixel(ctx, shade, footX + 2, 71, 11, 3);
  }
  for (const x of [14, 47]) {
    pixel(ctx, outline, x, armY, 7, 13);
    pixel(ctx, shade, x + 1, armY + 1, 5, 9);
    pixel(ctx, coat, x + 1, armY + 1, 3, 5);
    oval(ctx, outline, x + 3, armY + 13, 5, 4);
    oval(ctx, skin, x + 2, armY + 12, 3, 2);
    pixel(ctx, skinLight, x + 1, armY + 11, 2, 1);
  }
  oval(ctx, outline, 32, 50, 18, 15);
  oval(ctx, deep, 35, 51, 14, 12);
  oval(ctx, shade, 30, 48, 13, 11);
  oval(ctx, coat, 27, 45, 10, 7);
  pixel(ctx, accent, 25, 40, 13, 3);
  pixel(ctx, outline, 30, 44, 2, 16);
  pixel(ctx, skinLight, 32, 44, 4, 3);
  pixel(ctx, deep, 21, 53, 8, 5);
  pixel(ctx, accent, 23, 54, 4, 1);
  pixel(ctx, "#f9e9c9", 38, 55, 2, 2);

  oval(ctx, outline, 32, 26, 20, 19);
  oval(ctx, hair, 32, 23, 18, 17);
  oval(ctx, skin, 32, 30, 15, 13);
  oval(ctx, skinLight, left ? 27 : 29, 26, 10, 8);
  oval(ctx, skin, left ? 48 : 16, 31, 4, 6);
  pixel(ctx, skinLight, left ? 46 : 15, 29, 3, 2);

  switch (id % 4) {
    case 0:
      oval(ctx, hair, 28, 14, 18, 8);
      oval(ctx, hairLight, 24, 11, 10, 4);
      pixel(ctx, hair, left ? 14 : 36, 18, 14, 11);
      pixel(ctx, hairLight, left ? 16 : 39, 17, 6, 2);
      pixel(ctx, accent, 19, 45, 4, 2);
      break;
    case 1:
      oval(ctx, hair, 32, 16, 18, 11);
      oval(ctx, hairLight, 27, 13, 11, 6);
      pixel(ctx, hair, 15, 19, 6, 15);
      pixel(ctx, hair, 44, 18, 5, 15);
      pixel(ctx, accent, 22, 42, 18, 4);
      pixel(ctx, "#fff2d4", 26, 43, 6, 1);
      break;
    case 2:
      oval(ctx, hair, 32, 18, 19, 14);
      oval(ctx, hairLight, 27, 11, 11, 5);
      pixel(ctx, hair, left ? 14 : 41, 20, 9, 14);
      pixel(ctx, accent, 16, 18, 7, 2);
      pixel(ctx, outline, nearEye - 3, 27, 10, 8);
      pixel(ctx, outline, farEye - 3, 27, 9, 7);
      pixel(ctx, skinLight, nearEye - 2, 28, 8, 5);
      pixel(ctx, skinLight, farEye - 2, 28, 7, 4);
      pixel(ctx, outline, Math.min(nearEye, farEye) + 6, 29, 5, 1);
      break;
    default:
      oval(ctx, hair, 31, 15, 18, 10);
      oval(ctx, hairLight, 28, 10, 10, 5);
      pixel(ctx, hair, 17, 19, 7, 8);
      pixel(ctx, outline, 14, 17, 36, 5);
      pixel(ctx, accent, 17, 17, 29, 3);
      pixel(ctx, hair, 23, 21, 10, 5);
      pixel(ctx, accent, 41, 44, 5, 2);
      break;
  }

  pixel(ctx, outline, nearEye, 30, 3, working ? 1 : 3);
  pixel(ctx, outline, farEye, 30, 2, working ? 1 : 2);
  pixel(ctx, "#fff9e4", nearEye, 30, 1, 1);
  pixel(ctx, shade, nose, 35, 2, 2);
  pixel(ctx, "#bd7979", left ? 28 : 33, 38, 5, 1);
  pixel(ctx, "#df8b91", left ? 19 : 40, 35, 3, 2);
  speckle(ctx, skinLight, [[21, 24], [22, 24], [41, 25]]);

  if (id % 4 === 2) {
    pixel(ctx, outline, nearEye, 30, 3, 2);
    pixel(ctx, outline, farEye, 30, 2, 2);
  }
  if (pose === "carrying") {
    pixel(ctx, outline, left ? 4 : 50, 43, 11, 16);
    pixel(ctx, "#fff2d3", left ? 6 : 52, 45, 7, 12);
    pixel(ctx, shade, left ? 7 : 53, 49, 5, 1);
    pixel(ctx, shade, left ? 7 : 53, 53, 4, 1);
  }
  if (working) {
    pixel(ctx, outline, 23, 60, 18, 3);
    pixel(ctx, accent, 26, 60, 12, 1);
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
    pixel(ctx, outline, 7, 3, 25, 28);
    pixel(ctx, outline, 5, 6, 30, 21);
    pixel(ctx, "#806d91", 8, 5, 24, 23);
    pixel(ctx, "#c0a6bb", 9, 5, 18, 2);
    pixel(ctx, "#39394e", 11, 8, 20, 17);
    pixel(ctx, "#30485c", 12, 9, 17, 14);
    pixel(ctx, "#568f9c", 13, 10, 11, 1);
    pixel(ctx, glow, 14, 12, 10, 2);
    pixel(ctx, "#ffdfaa", 14, 16, 7, 1);
    pixel(ctx, glow, 14, 19, 12, 2);
    pixel(ctx, "#6f9eaa", 14, 22, 5, 1);
    pixel(ctx, "#f6d7aa", 14, 27, 11, 2);
    pixel(ctx, outline, 18, 31, 5, 5);
    pixel(ctx, "#aa8da5", 19, 31, 2, 4);
    pixel(ctx, outline, 12, 36, 17, 3);
    pixel(ctx, "#ffedcc", 14, 36, 12, 1);
    speckle(ctx, "#e9e1db", [[10, 8], [10, 9], [31, 26], [30, 27]]);
  });
}

export function terminalArt(): THREE.CanvasTexture {
  return texture(42, 50, (ctx) => {
    pixel(ctx, outline, 6, 5, 30, 35);
    pixel(ctx, outline, 8, 3, 26, 39);
    pixel(ctx, "#855f84", 9, 6, 25, 34);
    pixel(ctx, "#c39aaf", 9, 6, 20, 5);
    pixel(ctx, "#fae7cd", 11, 9, 21, 27);
    pixel(ctx, "#fff4db", 12, 10, 18, 3);
    pixel(ctx, "#2d4455", 13, 13, 17, 20);
    pixel(ctx, "#466f77", 14, 14, 13, 3);
    pixel(ctx, "#b1f0d6", 16, 19, 12, 2);
    pixel(ctx, "#81b3aa", 16, 24, 9, 2);
    pixel(ctx, "#f4c898", 16, 28, 11, 1);
    pixel(ctx, "#edf7d9", 20, 31, 3, 2);
    pixel(ctx, outline, 16, 40, 11, 6);
    pixel(ctx, "#9f8296", 18, 41, 7, 3);
    pixel(ctx, outline, 9, 46, 25, 3);
    pixel(ctx, "#f8e8c9", 12, 46, 18, 1);
    speckle(ctx, "#fff9e5", [[12, 7], [13, 7], [11, 13], [12, 13]]);
  });
}

export function plantArt(): THREE.CanvasTexture {
  return texture(42, 50, (ctx) => {
    pixel(ctx, "#364f55", 19, 18, 3, 23);
    pixel(ctx, "#4e897d", 21, 21, 2, 12);
    oval(ctx, "#365866", 12, 17, 9, 13);
    oval(ctx, "#568e7d", 11, 15, 7, 11);
    oval(ctx, "#8fc8a0", 9, 12, 4, 7);
    oval(ctx, "#375963", 30, 18, 8, 14);
    oval(ctx, "#4a9b89", 28, 15, 7, 11);
    oval(ctx, "#a8d4a1", 27, 11, 4, 7);
    oval(ctx, "#3d6a6b", 20, 23, 6, 9);
    oval(ctx, "#91c7a1", 18, 20, 4, 5);
    pixel(ctx, outline, 13, 35, 17, 4);
    pixel(ctx, "#e8bb96", 15, 38, 14, 8);
    pixel(ctx, "#c78980", 20, 40, 9, 6);
    pixel(ctx, "#f6d7aa", 16, 39, 6, 2);
    pixel(ctx, outline, 15, 46, 15, 2);
    speckle(ctx, "#d8e6b1", [[7, 10], [11, 7], [14, 18], [28, 7], [32, 14]]);
  });
}

export function deskArt(index: number): THREE.CanvasTexture {
  return texture(80, 70, (ctx) => {
    const top = index % 2 ? "#ead4bb" : "#f3ddba";
    pixel(ctx, outline, 13, 21, 57, 20);
    pixel(ctx, outline, 9, 25, 58, 17);
    pixel(ctx, "#785e78", 11, 30, 57, 16);
    pixel(ctx, "#a97e7f", 10, 26, 56, 15);
    pixel(ctx, "#f8e8c7", 17, 19, 49, 8);
    pixel(ctx, top, 13, 24, 52, 10);
    pixel(ctx, "#fff4d6", 20, 19, 39, 2);
    pixel(ctx, "#d4af9b", 13, 32, 52, 3);
    pixel(ctx, "#9a6d79", 14, 37, 52, 4);
    pixel(ctx, "#efbda2", 19, 32, 26, 2);
    pixel(ctx, "#564664", 14, 42, 10, 22);
    pixel(ctx, "#8c687e", 15, 43, 6, 18);
    pixel(ctx, "#d8a69c", 16, 45, 2, 5);
    pixel(ctx, "#564664", 58, 41, 10, 22);
    pixel(ctx, "#8c687e", 60, 42, 6, 17);
    pixel(ctx, "#d8a69c", 60, 45, 2, 5);
    pixel(ctx, outline, 12, 62, 13, 5);
    pixel(ctx, outline, 56, 61, 14, 5);
    pixel(ctx, "#382d4b", 28, 37, 4, 2);
    pixel(ctx, "#382d4b", 46, 37, 4, 2);
    speckle(ctx, "#fff7de", [[21, 22], [23, 22], [59, 23], [61, 23]]);
  });
}

export function chairArt(): THREE.CanvasTexture {
  return texture(40, 54, (ctx) => {
    pixel(ctx, outline, 8, 6, 26, 30);
    pixel(ctx, outline, 6, 9, 30, 24);
    pixel(ctx, "#6c608a", 9, 8, 24, 25);
    pixel(ctx, "#9b83ab", 11, 8, 20, 19);
    pixel(ctx, "#c9aecc", 14, 10, 14, 13);
    pixel(ctx, "#f1d9d0", 15, 10, 9, 2);
    pixel(ctx, outline, 7, 33, 28, 8);
    pixel(ctx, "#8b77a1", 10, 33, 23, 5);
    pixel(ctx, "#c7acc3", 12, 33, 14, 2);
    pixel(ctx, outline, 19, 41, 5, 8);
    pixel(ctx, "#6a5f80", 20, 41, 2, 6);
    pixel(ctx, outline, 10, 48, 24, 4);
    pixel(ctx, "#b2a2b8", 14, 48, 14, 1);
    speckle(ctx, "#f8e4d7", [[14, 15], [17, 14], [28, 23]]);
  });
}

export function coreBodyArt(): THREE.CanvasTexture {
  return texture(68, 88, (ctx) => {
    pixel(ctx, outline, 15, 54, 48, 27);
    pixel(ctx, outline, 11, 60, 54, 22);
    pixel(ctx, "#6d5f84", 15, 60, 43, 18);
    pixel(ctx, "#a78cad", 17, 56, 39, 18);
    pixel(ctx, "#e7c8cf", 18, 57, 33, 3);
    pixel(ctx, "#855c86", 53, 62, 5, 12);
    pixel(ctx, outline, 16, 10, 40, 48);
    pixel(ctx, "#387e88", 18, 9, 35, 45);
    pixel(ctx, "#66bba9", 19, 13, 30, 38);
    pixel(ctx, "#acebc9", 22, 17, 23, 29);
    pixel(ctx, "#e8f9d2", 24, 19, 17, 22);
    pixel(ctx, "#fff8dc", 25, 19, 12, 3);
    pixel(ctx, "#75d4bd", 44, 20, 3, 21);
    pixel(ctx, "#f5f4cf", 31, 24, 6, 19);
    pixel(ctx, "#f5f4cf", 26, 30, 16, 6);
    pixel(ctx, "#32939a", 32, 31, 4, 4);
    pixel(ctx, outline, 13, 5, 46, 9);
    pixel(ctx, "#c2a6b2", 15, 5, 42, 4);
    pixel(ctx, "#f9e8ce", 17, 5, 34, 2);
    pixel(ctx, "#5b8b92", 16, 44, 37, 4);
    pixel(ctx, "#d7afa9", 19, 62, 5, 4);
    pixel(ctx, "#d7afa9", 45, 62, 5, 4);
    pixel(ctx, outline, 9, 79, 55, 5);
    speckle(ctx, "#f5e7d7", [[18, 11], [22, 15], [54, 8], [55, 8]]);
  });
}

export function contextConsoleArt(): THREE.CanvasTexture {
  return texture(64, 63, (ctx) => {
    pixel(ctx, outline, 13, 8, 41, 36);
    pixel(ctx, "#706493", 16, 6, 34, 35);
    pixel(ctx, "#ad9cc6", 18, 7, 26, 30);
    pixel(ctx, "#eddaee", 20, 9, 23, 25);
    pixel(ctx, "#34485c", 22, 13, 20, 19);
    pixel(ctx, "#517883", 23, 14, 15, 3);
    pixel(ctx, "#a5f0cc", 25, 19, 13, 2);
    pixel(ctx, "#b9d5e2", 25, 24, 8, 2);
    pixel(ctx, "#f8e4aa", 25, 29, 12, 1);
    pixel(ctx, outline, 7, 39, 50, 17);
    pixel(ctx, "#866f9c", 9, 40, 46, 13);
    pixel(ctx, "#c6b3d0", 12, 40, 38, 8);
    pixel(ctx, "#f9ebd8", 14, 41, 31, 2);
    pixel(ctx, outline, 10, 51, 10, 11);
    pixel(ctx, "#706184", 12, 52, 7, 8);
    pixel(ctx, outline, 44, 51, 10, 11);
    pixel(ctx, "#706184", 46, 52, 6, 8);
    speckle(ctx, "#fff9e5", [[19, 11], [20, 11], [50, 43], [51, 43]]);
  });
}

export function stackArt(index: number): THREE.CanvasTexture {
  return texture(40, 52, (ctx) => {
    pixel(ctx, outline, 6, 36, 29, 11);
    pixel(ctx, "#ab829e", 9, 36, 23, 8);
    pixel(ctx, "#f7e7c7", 11, 36, 17, 2);
    pixel(ctx, outline, 9, 25, 25, 10);
    pixel(ctx, index % 2 ? "#91ceb0" : "#e3b695", 12, 26, 19, 5);
    pixel(ctx, "#fff0d1", 13, 26, 10, 1);
    pixel(ctx, outline, 4, 15, 25, 9);
    pixel(ctx, "#9d90bb", 7, 16, 19, 5);
    pixel(ctx, "#e6d5ef", 8, 16, 9, 1);
    pixel(ctx, outline, 14, 6, 22, 9);
    pixel(ctx, "#e5bd91", 17, 7, 16, 6);
    pixel(ctx, "#f9e8b7", 18, 7, 11, 1);
    pixel(ctx, outline, 12, 47, 22, 3);
    speckle(ctx, "#ebdcce", [[8, 19], [10, 20], [20, 29], [14, 40]]);
  });
}

export function posterArt(index: number): THREE.CanvasTexture {
  return texture(36, 44, (ctx) => {
    pixel(ctx, outline, 2, 3, 32, 38);
    pixel(ctx, "#ab8ea7", 4, 4, 28, 35);
    pixel(ctx, "#eedadd", 6, 6, 24, 32);
    pixel(ctx, index % 2 ? "#d99b97" : "#83b9ae", 8, 8, 20, 27);
    oval(ctx, "#fff2d4", index % 2 ? 20 : 16, 19, 5, 7);
    pixel(ctx, "#474964", 15, 22, 11, 3);
    pixel(ctx, "#f4ddac", 10, 29, 12, 2);
    speckle(ctx, "#fff9e5", [[8, 7], [9, 7], [27, 34]]);
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
