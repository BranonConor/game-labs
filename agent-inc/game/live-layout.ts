import type { Point } from "./simulation";

export const EXTRA_DESKS: readonly Point[] = [
  { x: -4.2, z: -0.35 }, { x: 4.2, z: -0.35 },
  { x: -6, z: -0.35 }, { x: 6, z: -0.35 },
  { x: -4.2, z: 1.65 }, { x: 4.2, z: 1.65 },
  { x: -6, z: 1.65 }, { x: 6, z: 1.65 },
  { x: -4.2, z: 3.65 }, { x: 4.2, z: 3.65 },
  { x: -6, z: 3.65 }, { x: 6, z: 3.65 },
];

export const MIN_LIVE_DESKS = 4;
export const MAX_LIVE_DESKS = MIN_LIVE_DESKS + EXTRA_DESKS.length;

export function liveDeskCount(workers: number): number {
  return Math.max(MIN_LIVE_DESKS, Math.min(MAX_LIVE_DESKS, workers));
}

export function extraCoffeeSpot(index: number, counterZ: number): Point {
  const outer = [-2.55, 2.55, -3.5, 3.5];
  return index < outer.length ?
    { x: outer[index], z: counterZ + 0.75 } :
    { x: -3.15 + (index - outer.length) * 0.9, z: counterZ + 1.8 };
}
