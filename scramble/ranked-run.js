import { readFileSync } from "node:fs";
import { join } from "node:path";
import { DURATION_MS, FULL_BOARD_BONUS, generateBoard, SIZE, VALUES } from "./ranked-board.js";

let lexicon;
function dictionary() {
  if (!lexicon) {
    const words = readFileSync(join(process.cwd(), "public", "lexicon.txt"), "utf8");
    lexicon = new Set(words.trim().toUpperCase().split(/\s+/));
    if (lexicon.size < 100000) throw new Error("Ranked dictionary is incomplete.");
  }
  return lexicon;
}

export function isExpired(run, now = Date.now()) {
  return now >= new Date(run.started_at).getTime() + DURATION_MS;
}

export function isFrozen(boardId, now = Date.now()) {
  return now >= Date.parse(`${boardId}T00:00:00.000Z`) + 24 * 60 * 60 * 1000 + DURATION_MS;
}

export function historyBefore(boardId, cursor) {
  return cursor && cursor < boardId ? cursor : boardId;
}

export function comparison(score, total, lower, higher, frozen) {
  return {
    rank: higher + 1,
    total,
    tied: total - lower - higher > 1,
    percentile: total >= 30 ? Math.round(10000 * (lower + (total - lower - higher) / 2) / total) / 100 : null,
    provisional: !frozen,
    frozen,
  };
}

export function scoreDistribution(rows) {
  const byBoundary = new Map(rows.map((row) => [Number(row.score), Number(row.count)]));
  return Array.from({ length: 10 }, (_, index) => ({
    score: index * 50,
    count: byBoundary.get(index * 50) ?? 0,
  }));
}

export function publicRankedRun(run, now = Date.now()) {
  if (!run) return null;
  const boardId = typeof run.board_id === "string" ? run.board_id.slice(0, 10) : run.board_id.toISOString().slice(0, 10);
  const { fixed, effectTiles } = generateBoard(boardId);
  const used = { ...Object.fromEntries(fixed.flatMap((letter, index) => letter ? [[index, letter]] : [])) };
  const moves = run.moves.map((move, index) => {
    const letters = move.letters ?? move.path.flatMap((tile, position) =>
      used[tile] ? [] : [move.word[position]]).join("");
    move.path.forEach((tile, position) => { used[tile] = move.word[position]; });
    return { ...move, letters, color: move.color ?? index % 6 };
  });
  const deadline = new Date(new Date(run.started_at).getTime() + DURATION_MS).toISOString();
  const expired = isExpired(run, now);
  return {
    boardId,
    startedAt: run.started_at,
    deadline,
    endedAt: run.finished_at ?? (expired ? deadline : null),
    finished: Boolean(run.finished_at) || expired,
    completed: Boolean(run.finished_at) || expired,
    endedReason: run.ended_reason ?? (expired ? "time" : null),
    sequence: run.sequence,
    score: run.score,
    moves,
    played: run.played,
    spentEffects: [...new Set(moves.flatMap((move) => move.path).filter((tile) => effectTiles.has(tile)))],
    fullBoardBonusAwarded: run.ended_reason === "full",
  };
}

export function verifyWord(boardId, run, path, letters, words = dictionary()) {
  if (!Array.isArray(path) || path.length < 4 || path.length > 16
      || !path.every((index) => Number.isInteger(index) && index >= 0 && index < SIZE * SIZE)
      || new Set(path).size !== path.length
      || typeof letters !== "string" || !/^[A-Z]{1,16}$/.test(letters)) {
    throw new Error("Invalid word path or letters.");
  }
  const { fixed, initialFilled, effectTiles } = generateBoard(boardId);
  const played = run.played;
  const moves = run.moves;
  const claimed = new Set(moves.flatMap((move) => move.path));
  if (path.some((index) => claimed.has(index))) throw new Error("A tile has already been claimed.");
  for (let i = 1; i < path.length; i++) {
    const from = path[i - 1];
    const to = path[i];
    if (Math.abs(Math.floor(from / SIZE) - Math.floor(to / SIZE)) + Math.abs(from % SIZE - to % SIZE) !== 1) {
      throw new Error("Path must use neighboring tiles.");
    }
  }
  const existing = path.filter((index) => fixed[index] || played[index]).length;
  const newCount = path.length - existing;
  if (!existing || !newCount || letters.length !== newCount) {
    throw new Error("Word must connect to an existing tile and claim new tiles.");
  }
  let typed = 0;
  const word = path.map((index) => fixed[index] || played[index] || letters[typed++]).join("");
  if (!words.has(word)) throw new Error("Word is not in the dictionary.");
  if (moves.some((move) => move.word === word)) throw new Error("Word has already been played.");

  const spent = new Set(moves.flatMap((move) => move.path).filter((index) => effectTiles.has(index)));
  const triggered = path.filter((index) => effectTiles.has(index) && !spent.has(index));
  const boost = triggered.filter((index) => effectTiles.get(index) === "boost").length * 5;
  const multiplier = triggered.some((index) => effectTiles.get(index) === "double") ? 2 : 1;
  const letterPoints = [...letters].reduce((sum, letter) => sum + VALUES[letter], 0);
  const points = (letterPoints + newCount * 2 + boost) * multiplier;
  const nextPlayed = { ...played };
  typed = 0;
  for (const index of path) {
    if (!fixed[index] && !played[index]) nextPlayed[index] = letters[typed++];
  }
  const full = initialFilled + Object.keys(nextPlayed).length === SIZE * SIZE;
  const move = { word, path, letters, points, color: moves.length % 6 };
  return {
    move,
    played: nextPlayed,
    moves: [...moves, move],
    score: run.score + points + (full ? FULL_BOARD_BONUS : 0),
    full,
  };
}
