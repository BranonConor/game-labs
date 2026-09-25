const validTimestamp = (value) => value === null || (Number.isSafeInteger(value) && value > 0);
const validTile = (value) => Number.isInteger(value) && value >= 0 && value < 64;
const validLetter = (value) => typeof value === "string" && /^[A-Z]$/.test(value);

export function validBoardId(boardId) {
  if (typeof boardId !== "string" || !/^\d{4}-\d{2}-\d{2}(?::[\w-]{1,64})?$/.test(boardId)) return false;
  const date = boardId.slice(0, 10);
  const parsed = new Date(`${date}T00:00:00Z`);
  return Number.isFinite(parsed.getTime()) && parsed.toISOString().slice(0, 10) === date;
}

export function validRunState(state) {
  if (!state || typeof state !== "object" || Array.isArray(state)) return false;
  if (!validTimestamp(state.startedAt) || !validTimestamp(state.endedAt)) return false;
  if (typeof state.finished !== "boolean" || typeof state.fullBoardBonusAwarded !== "boolean") return false;
  if (!Number.isSafeInteger(state.score) || state.score < 0 || state.score > 100000) return false;
  if (state.finished !== Boolean(state.endedAt)) return false;
  if (state.endedReason != null && !["time", "stuck", "full"].includes(state.endedReason)) return false;
  if (!state.played || typeof state.played !== "object" || Array.isArray(state.played)) return false;
  if (Object.entries(state.played).some(([tile, letter]) => !validTile(Number(tile)) || !validLetter(letter))) return false;
  if (!Array.isArray(state.spentEffects) || state.spentEffects.length > 64 || state.spentEffects.some((tile) => !validTile(tile))) return false;
  if (!Array.isArray(state.words) || state.words.length > 64) return false;
  return state.words.every((entry) =>
    entry && typeof entry === "object" &&
    typeof entry.word === "string" && /^[A-Z]{4,16}$/.test(entry.word) &&
    Number.isSafeInteger(entry.points) && entry.points > 0 && entry.points <= 1000 &&
    Number.isInteger(entry.color) && entry.color >= 0 && entry.color < 6 &&
    Array.isArray(entry.path) && entry.path.length === entry.word.length &&
    entry.path.every(validTile) && new Set(entry.path).size === entry.path.length
  );
}
