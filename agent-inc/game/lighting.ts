export const DAY_LENGTH_SECONDS = 240;

export type Daylight = {
  time: number;
  hour: number;
  label: string;
  sun: number;
  ambient: number;
  lamp: number;
  warmth: number;
  sunColor: number;
  skyColor: number;
  bounceColor: number;
  sunX: number;
  sunY: number;
};

type Keyframe = { time: number; sun: number; ambient: number; lamp: number; warmth: number; sunColor: number; skyColor: number; bounceColor: number };

const keys: Keyframe[] = [
  { time: 0, sun: 0, ambient: 0.72, lamp: 1.4, warmth: 0.12, sunColor: 0x9ba5d4, skyColor: 0x302b57, bounceColor: 0x7474aa },
  { time: 0.19, sun: 0.08, ambient: 0.78, lamp: 1.1, warmth: 0.48, sunColor: 0xff9176, skyColor: 0xb96e82, bounceColor: 0xc97e9c },
  { time: 0.32, sun: 2.65, ambient: 1.05, lamp: 0.5, warmth: 0.85, sunColor: 0xffbe82, skyColor: 0x7eaabc, bounceColor: 0x90b9bb },
  { time: 0.5, sun: 3.2, ambient: 1.25, lamp: 0.25, warmth: 0.62, sunColor: 0xffebc0, skyColor: 0x8ec6cd, bounceColor: 0xa5c9b5 },
  { time: 0.67, sun: 2.5, ambient: 0.97, lamp: 0.65, warmth: 1, sunColor: 0xffa474, skyColor: 0xbe82a5, bounceColor: 0xb99db5 },
  { time: 0.79, sun: 0.09, ambient: 0.75, lamp: 1.35, warmth: 0.7, sunColor: 0xf47b83, skyColor: 0x564474, bounceColor: 0x867ea9 },
  { time: 1, sun: 0, ambient: 0.72, lamp: 1.4, warmth: 0.12, sunColor: 0x9ba5d4, skyColor: 0x302b57, bounceColor: 0x7474aa },
];

function blendColor(a: number, b: number, mix: number): number {
  const channel = (shift: number) => Math.round((((a >> shift) & 255) * (1 - mix)) + (((b >> shift) & 255) * mix));
  return (channel(16) << 16) | (channel(8) << 8) | channel(0);
}

export function sampleDaylight(simulationSeconds: number, previewOffset = 0): Daylight {
  const time = (((simulationSeconds / DAY_LENGTH_SECONDS + 0.35 + previewOffset) % 1) + 1) % 1;
  const index = Math.max(0, keys.findIndex((key) => key.time >= time));
  const end = keys[Math.max(index, 1)];
  const start = keys[Math.max(index - 1, 0)];
  const part = (time - start.time) / (end.time - start.time || 1);
  const smooth = part * part * (3 - 2 * part);
  const lerp = (key: "sun" | "ambient" | "lamp" | "warmth") => start[key] + (end[key] - start[key]) * smooth;
  const minutes = Math.floor(time * 1440 + 1e-7);
  const hour = Math.floor(minutes / 60);
  const minute = minutes % 60;
  return {
    time, hour,
    label: `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`,
    sun: lerp("sun"), ambient: lerp("ambient"), lamp: lerp("lamp"), warmth: lerp("warmth"),
    sunColor: blendColor(start.sunColor, end.sunColor, smooth),
    skyColor: blendColor(start.skyColor, end.skyColor, smooth),
    bounceColor: blendColor(start.bounceColor, end.bounceColor, smooth),
    sunX: Math.cos((time - 0.47) * Math.PI * 2) * 6,
    sunY: 4.2 + Math.max(0, Math.sin((time - 0.19) / 0.6 * Math.PI)) * 5.2,
  };
}
