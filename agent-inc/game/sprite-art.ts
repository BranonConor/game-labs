import * as THREE from "three";

type Pose = "idle" | "stepA" | "stepB" | "working" | "coffee";
export type Facing = "left" | "right" | "away";
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
  const step = pose === "stepA" ? -2 : pose === "stepB" ? 2 : 0;
  const working = pose === "working";
  const left = facing === "left";
  const armY = working ? 22 : 24;

  for (const [legX, footX] of [[11 + step, 8 + step], [19 - step, 18 - step]]) {
    pixel(ctx, outline, legX, 30, 4, 7);
    pixel(ctx, deep, legX + 1, 31, 2, 5);
    pixel(ctx, outline, footX, 36, 7, 3);
    pixel(ctx, shade, footX + 1, 36, 4, 1);
  }
  for (const x of [6, 23]) {
    pixel(ctx, outline, x, armY, 4, 7);
    pixel(ctx, shade, x + 1, armY + 1, 2, 5);
    pixel(ctx, coat, x + 1, armY + 1, 2, 3);
    pixel(ctx, skin, x + 1, armY + 6, 3, 2);
  }
  oval(ctx, outline, 16, 25, 9, 7);
  oval(ctx, deep, 18, 26, 6, 5);
  oval(ctx, coat, 14, 24, 6, 5);
  pixel(ctx, accent, 12, 20, 7, 2);
  pixel(ctx, skinLight, 15, 22, 2, 2);
  pixel(ctx, shade, 11, 28, 3, 2);
  pixel(ctx, outline, 16, 24, 1, 7);

  if (facing === "away") {
    oval(ctx, coat, 16, 25, 7, 6);
    pixel(ctx, shade, 10, 24, 3, 6);
    pixel(ctx, accent, 15, 24, 2, 5);
    oval(ctx, outline, 16, 13, 10, 10);
    oval(ctx, hair, 16, 12, 9, 8);
    oval(ctx, hairLight, 13, 9, 5, 3);
    pixel(ctx, skin, 6, 16, 2, 3);
    pixel(ctx, skin, 24, 16, 2, 3);
    if (id % 4 === 1) {
      pixel(ctx, hair, 7, 16, 4, 7);
      pixel(ctx, hair, 22, 16, 4, 7);
    } else if (id % 4 === 2) {
      pixel(ctx, hair, 7, 16, 5, 4);
      pixel(ctx, hairLight, 19, 8, 5, 2);
    } else if (id % 4 === 3) {
      pixel(ctx, accent, 10, 8, 14, 3);
      pixel(ctx, hair, 7, 11, 18, 3);
    } else {
      pixel(ctx, hairLight, 10, 5, 6, 2);
      pixel(ctx, hair, 8, 12, 5, 5);
    }
    if (pose === "coffee") {
      pixel(ctx, outline, 23, 24, 6, 7);
      pixel(ctx, "#fff2d3", 24, 25, 4, 5);
      pixel(ctx, shade, 25, 26, 2, 2);
    }
    if (working) pixel(ctx, accent, 12, 29, 8, 1);
    return;
  }

  oval(ctx, outline, 16, 13, 10, 10);
  oval(ctx, hair, 16, 11, 9, 8);
  oval(ctx, skin, 16, 16, 7, 6);
  oval(ctx, skinLight, left ? 13 : 15, 14, 4, 3);
  pixel(ctx, skin, left ? 25 : 6, 15, 2, 3);

  switch (id % 4) {
    case 0:
      oval(ctx, hair, 14, 7, 8, 4);
      pixel(ctx, hairLight, 10, 5, 6, 2);
      pixel(ctx, hair, left ? 6 : 19, 10, 7, 5);
      break;
    case 1:
      oval(ctx, hair, 16, 7, 9, 5);
      pixel(ctx, hairLight, 12, 5, 6, 2);
      pixel(ctx, hair, 6, 12, 4, 8);
      pixel(ctx, hair, 23, 11, 3, 8);
      pixel(ctx, accent, 12, 22, 8, 2);
      break;
    case 2:
      oval(ctx, hair, 16, 9, 10, 7);
      pixel(ctx, hairLight, 10, 5, 6, 2);
      pixel(ctx, hair, left ? 6 : 22, 12, 4, 6);
      pixel(ctx, outline, 10, 14, 5, 3);
      pixel(ctx, outline, 18, 14, 5, 3);
      pixel(ctx, outline, 15, 15, 3, 1);
      pixel(ctx, skinLight, 11, 15, 3, 1);
      pixel(ctx, skinLight, 19, 15, 3, 1);
      break;
    default:
      oval(ctx, hair, 16, 9, 9, 6);
      pixel(ctx, outline, 7, 9, 18, 3);
      pixel(ctx, accent, 9, 9, 14, 2);
      pixel(ctx, hair, 11, 12, 5, 2);
      pixel(ctx, accent, 20, 24, 3, 2);
      break;
  }

  pixel(ctx, outline, left ? 12 : 19, 16, 2, working ? 1 : 2);
  pixel(ctx, outline, left ? 19 : 12, 16, 1, working ? 1 : 2);
  pixel(ctx, shade, left ? 11 : 21, 18, 1, 1);
  pixel(ctx, "#bd7979", left ? 14 : 16, 20, 3, 1);
  if (pose === "coffee") {
    pixel(ctx, outline, left ? 1 : 25, 23, 6, 7);
    pixel(ctx, "#fff2d3", left ? 2 : 26, 24, 4, 5);
    pixel(ctx, shade, left ? 3 : 27, 26, 3, 1);
  }
  if (working) {
    pixel(ctx, accent, 12, 29, 8, 1);
  }
}

export function agentArt(id: number): AgentArt {
  const draw = (pose: Pose): Record<Facing, THREE.CanvasTexture> => ({
    left: texture(32, 40, (ctx) => drawAgent(ctx, id, pose, "left")),
    right: texture(32, 40, (ctx) => drawAgent(ctx, id, pose, "right")),
    away: texture(32, 40, (ctx) => drawAgent(ctx, id, pose, "away")),
  });
  return {
    idle: draw("idle"),
    stepA: draw("stepA"),
    stepB: draw("stepB"),
    working: draw("working"),
    coffee: draw("coffee"),
  };
}

export function coffeeCounterArt(): THREE.CanvasTexture {
  return texture(96, 56, (ctx) => {
    pixel(ctx, outline, 6, 22, 84, 31);
    pixel(ctx, "#775d70", 8, 27, 80, 23);
    pixel(ctx, "#a17b80", 10, 30, 75, 13);
    pixel(ctx, "#d9ac8e", 12, 30, 70, 3);
    pixel(ctx, "#3c384e", 30, 34, 36, 9);
    pixel(ctx, "#5aa59a", 33, 36, 30, 3);
    pixel(ctx, "#e4c391", 36, 39, 24, 2);
    pixel(ctx, "#f0d3ae", 9, 20, 79, 9);
    pixel(ctx, "#fff0d1", 13, 21, 69, 2);
    pixel(ctx, outline, 35, 3, 27, 18);
    pixel(ctx, "#777087", 38, 5, 21, 14);
    pixel(ctx, "#b9a2aa", 39, 5, 14, 3);
    pixel(ctx, "#3b5260", 42, 9, 13, 8);
    pixel(ctx, "#8be0bd", 44, 11, 9, 3);
    pixel(ctx, outline, 41, 18, 16, 3);
    for (const x of [17, 70]) {
      pixel(ctx, outline, x, 14, 9, 8);
      pixel(ctx, "#f8e6cd", x + 1, 15, 6, 5);
      pixel(ctx, "#82bbad", x + 2, 16, 3, 2);
      pixel(ctx, "#f4d5af", x + 2, 11, 2, 3);
    }
    pixel(ctx, outline, 10, 50, 14, 4);
    pixel(ctx, outline, 73, 50, 14, 4);
  });
}

export function chatRoomTitleArt(): THREE.CanvasTexture {
  return texture(256, 64, (ctx) => {
    pixel(ctx, "#3b344d", 5, 8, 246, 49);
    pixel(ctx, "#d5a989", 8, 11, 240, 43);
    pixel(ctx, "#51445c", 13, 15, 230, 35);
    pixel(ctx, "#bce7cd", 18, 20, 6, 25);
    pixel(ctx, "#bce7cd", 232, 20, 6, 25);
    ctx.fillStyle = "#fff0ce";
    ctx.font = "bold 31px monospace";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("CHAT ROOM", 128, 34);
  });
}

export function stationNoticeArt(status: "queued" | "assigned" | "working" | "complete" | "failed", progressStep = 0): THREE.CanvasTexture {
  return texture(48, 48, (ctx) => {
    pixel(ctx, "#31334c", 5, 5, 38, 38);
    pixel(ctx, "#f7e9cc", 8, 8, 32, 32);
    pixel(ctx, status === "failed" ? "#d2828c" : "#8bbda9", 10, 10, 28, 3);
    pixel(ctx, "#4a465d", 14, 18, 21, 13);
    pixel(ctx, "#fff2d7", 17, 20, 15, 8);
    pixel(ctx, status === "failed" ? "#d2828c" : "#72b4a5", 20, 22, 9, 2);
    pixel(ctx, "#4a465d", 18, 30, 5, 4);
    pixel(ctx, "#fff0d1", 25, 31, 5, 2);
    const filled = status === "working" ? progressStep : status === "complete" || status === "failed" ? 16 : 0;
    for (let i = 0; i < 16; i++) {
      const side = Math.floor(i / 4);
      const offset = i % 4;
      const x = side === 0 ? 6 + offset * 9 : side === 1 ? 41 : side === 2 ? 33 - offset * 9 : 4;
      const y = side === 0 ? 3 : side === 1 ? 6 + offset * 9 : side === 2 ? 41 : 33 - offset * 9;
      pixel(ctx, i < filled ? status === "failed" ? "#f2a3a3" : "#95f2cc" : "#74617d",
        x, y, side % 2 === 0 ? 8 : 3, side % 2 === 0 ? 3 : 8);
    }
    if (status === "queued" || status === "assigned") {
      pixel(ctx, "#f5b978", 22, 15, 4, 5);
      pixel(ctx, "#f5b978", 22, 33, 4, 3);
    }
  });
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
    pixel(ctx, "#293f50", 18, 15, 5, 23);
    pixel(ctx, "#456b65", 20, 18, 2, 16);
    pixel(ctx, "#293f50", 9, 13, 9, 19);
    pixel(ctx, "#293f50", 6, 18, 16, 11);
    pixel(ctx, "#293f50", 4, 15, 5, 8);
    pixel(ctx, "#293f50", 11, 7, 6, 9);
    pixel(ctx, "#293f50", 14, 4, 5, 6);
    pixel(ctx, "#4f897a", 8, 16, 12, 12);
    pixel(ctx, "#5a9a83", 10, 12, 7, 13);
    pixel(ctx, "#82bb91", 12, 9, 4, 9);
    pixel(ctx, "#91c8a0", 6, 20, 5, 4);
    pixel(ctx, "#74ad8e", 10, 23, 8, 3);
    pixel(ctx, "#b0d5a4", 12, 14, 2, 4);
    pixel(ctx, "#293f50", 25, 10, 7, 22);
    pixel(ctx, "#293f50", 22, 17, 15, 11);
    pixel(ctx, "#293f50", 31, 13, 6, 9);
    pixel(ctx, "#293f50", 27, 5, 5, 8);
    pixel(ctx, "#4f897a", 24, 15, 11, 13);
    pixel(ctx, "#5a9a83", 27, 11, 7, 13);
    pixel(ctx, "#82bb91", 28, 8, 4, 9);
    pixel(ctx, "#a9d6a2", 33, 17, 4, 4);
    pixel(ctx, "#74ad8e", 28, 23, 6, 3);
    pixel(ctx, "#b0d5a4", 28, 13, 2, 4);
    pixel(ctx, "#293f50", 17, 21, 8, 12);
    pixel(ctx, "#599784", 17, 20, 7, 11);
    pixel(ctx, "#9ac69a", 18, 19, 4, 7);
    speckle(ctx, "#b6d9a5", [[9, 15], [13, 12], [15, 7], [27, 13], [31, 9], [29, 21]]);
    speckle(ctx, "#294c58", [[8, 26], [17, 18], [34, 24], [23, 28]]);
    pixel(ctx, outline, 13, 35, 17, 4);
    pixel(ctx, "#e8bb96", 15, 38, 14, 8);
    pixel(ctx, "#c78980", 20, 40, 9, 6);
    pixel(ctx, "#f6d7aa", 16, 39, 6, 2);
    pixel(ctx, outline, 15, 46, 15, 2);
  });
}

export function workflowKitArt(): THREE.CanvasTexture {
  return texture(28, 24, (ctx) => {
    pixel(ctx, outline, 3, 10, 23, 11);
    pixel(ctx, "#72617c", 4, 11, 20, 8);
    pixel(ctx, "#9c83a1", 5, 11, 15, 3);
    pixel(ctx, "#d1a58c", 7, 6, 13, 6);
    pixel(ctx, "#f2d5a1", 8, 7, 10, 3);
    pixel(ctx, "#eff5d3", 11, 3, 11, 7);
    pixel(ctx, "#77b9a4", 12, 4, 7, 2);
    pixel(ctx, "#f7deaa", 13, 7, 6, 1);
    pixel(ctx, "#aad4b0", 6, 16, 14, 2);
    pixel(ctx, outline, 4, 21, 21, 2);
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
  return texture(48, 64, (ctx) => {
    pixel(ctx, outline, 7, 46, 36, 14);
    pixel(ctx, "#765b68", 9, 47, 31, 11);
    pixel(ctx, "#b18683", 10, 48, 24, 5);
    pixel(ctx, "#e2b698", 11, 48, 19, 2);
    pixel(ctx, "#533f53", 11, 55, 28, 2);
    pixel(ctx, "#e6c4a4", 13, 55, 6, 1);
    pixel(ctx, "#e6c4a4", 28, 55, 6, 1);
    pixel(ctx, outline, 10, 59, 8, 3);
    pixel(ctx, outline, 32, 59, 8, 3);

    pixel(ctx, outline, 9, 11, 32, 36);
    pixel(ctx, "#775c73", 11, 13, 27, 32);
    pixel(ctx, "#a8838d", 12, 14, 22, 3);
    pixel(ctx, "#d9b49f", 12, 18, 2, 23);
    pixel(ctx, "#4c465d", 15, 18, 20, 23);
    pixel(ctx, "#356a74", 17, 20, 16, 17);
    pixel(ctx, "#579e96", 18, 21, 13, 11);
    pixel(ctx, "#9bd4ae", 19, 22, 9, 6);
    pixel(ctx, "#e8e6af", 21, 24, 4, 4);
    pixel(ctx, "#fff1ba", 22, 24, 2, 2);
    pixel(ctx, "#377778", 20, 30, 10, 2);
    pixel(ctx, "#f7d9a5", 19, 39, 3, 2);
    pixel(ctx, "#8dd2aa", 24, 39, 3, 2);
    pixel(ctx, "#f7d9a5", 29, 39, 3, 2);

    pixel(ctx, outline, 7, 8, 36, 5);
    pixel(ctx, "#9c7882", 9, 8, 32, 3);
    pixel(ctx, "#f2c9a5", 11, 8, 24, 1);
    pixel(ctx, "#533f53", 6, 42, 36, 5);
    pixel(ctx, "#d4a48e", 9, 42, 27, 2);
    pixel(ctx, "#f8e3b9", 10, 43, 15, 1);
    speckle(ctx, "#fce6bd", [[12, 15], [36, 15], [12, 48], [39, 48]]);
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
