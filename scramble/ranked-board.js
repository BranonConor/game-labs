import { validBoardId } from "./run-state.js";

export const SIZE = 8;
export const DURATION_MS = 4 * 60 * 1000;
export const FULL_BOARD_BONUS = 50;
export const VALUES = { A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2, H: 4, I: 1, J: 8, K: 5, L: 1, M: 3, N: 1, O: 1, P: 3, Q: 10, R: 1, S: 1, T: 1, U: 1, V: 4, W: 4, X: 8, Y: 4, Z: 10 };
const FIRST_PUZZLE_DAY = "2026-09-25";
const DAY_MS = 24 * 60 * 60 * 1000;

export function utcDailyBoardId(at = new Date()) {
  return at.toISOString().slice(0, 10);
}

export function dailyPuzzleNumber(boardId) {
  if (!validRankedBoardId(boardId)) throw new Error("Invalid daily board ID.");
  if (boardId < FIRST_PUZZLE_DAY) return null;
  return (Date.parse(`${boardId}T00:00:00Z`) - Date.parse(`${FIRST_PUZZLE_DAY}T00:00:00Z`)) / DAY_MS + 1;
}

const SEED_WORDS = [
  "GARDEN", "MARKET", "WINTER", "SUMMER", "SHADOW", "FLOWER", "SILVER", "SPIRIT",
  "NATURE", "SCHOOL", "RABBIT", "PEPPER", "POCKET", "TRAVEL", "BRING", "STARE",
  "CRANE", "LIGHT", "SCORE", "CLOUD", "MOUSE", "WATER", "STONE", "SWEET",
  "GHOST", "GRAPE", "SMILE", "PLANT", "FRUIT", "GREEN", "BREAD", "QUICK", "ZEBRA"
];

export function validRankedBoardId(boardId) {
  return typeof boardId === "string" && /^\d{4}-\d{2}-\d{2}$/.test(boardId)
    && boardId.slice(0, 4) !== "0000"
    && !Number.isNaN(Date.parse(`${boardId}T00:00:00.000Z`))
    && new Date(`${boardId}T00:00:00.000Z`).toISOString().slice(0, 10) === boardId;
}

export function generateBoard(boardId) {
  if (!validBoardId(boardId)) throw new Error("Invalid board ID.");
  let seed = 2166136261;
  for (const char of boardId) seed = Math.imul(seed ^ char.charCodeAt(0), 16777619);
  const random = () => {
    seed ^= seed << 13;
    seed ^= seed >>> 17;
    seed ^= seed << 5;
    return (seed >>> 0) / 4294967296;
  };
  const shuffle = (items) => {
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
  };
  const adjacent = (from, to) =>
    Math.abs(Math.floor(from / SIZE) - Math.floor(to / SIZE)) + Math.abs(from % SIZE - to % SIZE) === 1;
  function hiddenWordPath(length, occupied) {
    function extend(path) {
      if (path.length === length) return [...path];
      const last = path.at(-1);
      const options = shuffle(Array.from({ length: SIZE * SIZE }, (_, index) => index)
        .filter((index) => !occupied.has(index) && !path.includes(index) && adjacent(last, index)));
      for (const option of options) {
        path.push(option);
        const found = extend(path);
        if (found) return found;
        path.pop();
      }
      return null;
    }
    for (const index of shuffle(Array.from({ length: SIZE * SIZE }, (_, position) => position))) {
      if (occupied.has(index)) continue;
      const found = extend([index]);
      if (found) return found;
    }
    return null;
  }
  const choices = shuffle([...SEED_WORDS]);
  const fixed = Array(SIZE * SIZE).fill(null);
  const occupied = new Set();
  for (const word of choices.slice(0, 7)) {
    const route = hiddenWordPath(word.length, occupied);
    if (!route) continue;
    route.forEach((index) => occupied.add(index));
    const positions = shuffle([...word].map((_, index) => index));
    for (const position of positions.slice(0, word.length >= 7 ? 3 : 2)) {
      fixed[route[position]] = word[position];
    }
  }
  const initialFilled = fixed.filter(Boolean).length;
  const effectTiles = new Map();
  const specialTiles = shuffle(fixed.flatMap((letter, index) => letter ? [index] : []));
  effectTiles.set(specialTiles[0], "double");
  specialTiles.slice(1, 3).forEach((index) => effectTiles.set(index, "boost"));
  return { fixed, initialFilled, effectTiles };
}
