import assert from "node:assert/strict";
import test from "node:test";
import { dailyPuzzleNumber, generateBoard, utcDailyBoardId, validRankedBoardId } from "./ranked-board.js";
import { comparison, historyBefore, isExpired, isFrozen, publicRankedRun, scoreDistribution, verifyWord } from "./ranked-run.js";

const boardId = "2026-09-24";
const board = generateBoard(boardId);
const fresh = () => ({ played: {}, moves: [], score: 0 });

test("daily puzzle numbers follow the UTC board key across rollover boundaries", () => {
  assert.equal(dailyPuzzleNumber("2026-09-25"), 1);
  assert.equal(dailyPuzzleNumber("2026-09-26"), 2);
  assert.equal(dailyPuzzleNumber("2026-12-31"), 98);
  assert.equal(dailyPuzzleNumber("2027-01-01"), 99);
  assert.equal(utcDailyBoardId(new Date("2026-09-25T00:59:59+01:00")), "2026-09-24");
  assert.equal(utcDailyBoardId(new Date("2026-09-25T01:00:00+01:00")), "2026-09-25");
  assert.equal(dailyPuzzleNumber(utcDailyBoardId(new Date("2026-09-26T01:00:00+01:00"))), 2);
});

test("earlier daily boards remain valid but have no launch-era puzzle number", () => {
  assert.equal(validRankedBoardId("2026-09-24"), true);
  assert.equal(dailyPuzzleNumber("2026-09-24"), null);
  assert.equal(dailyPuzzleNumber("2026-01-01"), null);
  assert.throws(() => dailyPuzzleNumber("2026-09-25:practice"), /Invalid daily board ID/);
  assert.throws(() => dailyPuzzleNumber("2026-02-30"), /Invalid daily board ID/);
});

test("ranked board exactly matches the browser's deterministic daily generation", () => {
  assert.deepEqual(board.fixed.flatMap((letter, index) => letter ? [`${index}:${letter}`] : []),
    ["1:P", "5:W", "7:L", "8:R", "17:E", "26:N", "30:S", "31:O",
      "42:M", "43:M", "52:L", "54:G", "56:E", "57:N"]);
  assert.deepEqual([...board.effectTiles], [[26, "double"], [54, "boost"], [7, "boost"]]);
  assert.equal(board.initialFilled, 14);
  for (const invalid of ["0000-01-01", "2026-02-30", "2026-09-24:practice", "2026-09-24:seed", "nope"]) {
    assert.equal(validRankedBoardId(invalid), false);
  }
  assert.throws(() => generateBoard("2026-02-30"));
  assert.throws(() => generateBoard("nope"));
  assert.notDeepEqual(generateBoard("2026-09-24:practice").fixed, board.fixed);
});

test("scores only typed letters, newly claimed tiles and one-time effects", () => {
  const first = verifyWord(boardId, fresh(), [26, 27, 28, 29], "AAA", new Set(["NAAA"]));
  assert.deepEqual(first.move, { word: "NAAA", path: [26, 27, 28, 29], letters: "AAA", points: 18, color: 0 });
  assert.equal(first.score, 18);
  assert.deepEqual(first.played, { 27: "A", 28: "A", 29: "A" });
  const second = verifyWord(boardId, first, [54, 55, 47, 39], "AAA", new Set(["GAAA"]));
  assert.equal(second.move.points, 14);
  assert.equal(second.move.color, 1);
  assert.equal(second.score, 32);
  assert.throws(() => verifyWord(boardId, second, [26, 27, 28, 29], "AAA", new Set(["NAAA"])), /claimed/);
  assert.throws(() => verifyWord(boardId, first, [57, 58, 59, 60], "AAA", new Set(["NAAA"])), /already been played/);
});

test("authoritative attempt can reconstruct tiles and cosmetic move colors", () => {
  const first = verifyWord(boardId, fresh(), [26, 27, 28, 29], "AME");
  const attempt = publicRankedRun({
    board_id: boardId, started_at: "2026-09-24T12:00:00.000Z", sequence: 1,
    played: first.played, moves: first.moves, score: first.score,
    finished_at: null, ended_reason: null,
  }, Date.parse("2026-09-24T12:00:01.000Z"));
  assert.equal(attempt.score, 22);
  assert.equal(attempt.finished, false);
  assert.equal(attempt.endedAt, null);
  assert.deepEqual(attempt.moves[0], { word: "NAME", path: [26, 27, 28, 29], letters: "AME", points: 22, color: 0 });
  assert.deepEqual(attempt.played, { 27: "A", 28: "M", 29: "E" });
  assert.deepEqual(attempt.spentEffects, [26]);
});

test("accepts a real word from the public lexicon on the daily board", () => {
  const result = verifyWord(boardId, fresh(), [26, 27, 28, 29], "AME");
  assert.equal(result.move.word, "NAME");
  assert.equal(result.move.points, 22);
});

test("rejects forged, disconnected, non-dictionary and tile-replay moves", () => {
  const run = fresh();
  const words = new Set(["NAAA"]);
  for (const [path, letters] of [
    [[26, 28, 29, 30], "AAA"],  // gap
    [[26, 27, 27, 28], "AAA"],  // reused tile
    [[27, 28, 29, 37], "AAAA"], // no existing letter
    [[26, 27, 28, 29], "AA"],  // not enough letters
    [[26, 27, 28, 29], "aaa"], // non-uppercase
    [[26, 27, 28, 64], "AAA"], // out of bounds
  ]) {
    assert.throws(() => verifyWord(boardId, run, path, letters, words));
  }
  assert.throws(() => verifyWord(boardId, run, [26, 27, 28, 29], "AAA", new Set()), /dictionary/);
});

test("awards the board-completion bonus once and ends the final move", () => {
  const played = Object.fromEntries(board.fixed.flatMap((letter, index) =>
    letter || [27, 28, 29].includes(index) ? [] : [[index, "A"]]));
  const last = verifyWord(boardId, { ...fresh(), played, score: 100 }, [26, 27, 28, 29], "AAA", new Set(["NAAA"]));
  assert.equal(last.full, true);
  assert.equal(last.score, 168);
});

test("timer, UTC freeze and midpoint ties are explicit at boundaries", () => {
  const run = { started_at: "2026-09-24T23:59:59.000Z" };
  assert.equal(isExpired(run, Date.parse("2026-09-25T00:03:58.999Z")), false);
  assert.equal(isExpired(run, Date.parse("2026-09-25T00:03:59.000Z")), true);
  assert.equal(isFrozen(boardId, Date.parse("2026-09-25T00:03:59.999Z")), false);
  assert.equal(isFrozen(boardId, Date.parse("2026-09-25T00:04:00.000Z")), true);
  assert.deepEqual(comparison(80, 40, 10, 25, false),
    { rank: 26, total: 40, tied: true, percentile: 31.25, provisional: true, frozen: false });
  assert.equal(comparison(80, 29, 10, 14, true).percentile, null);
  assert.equal(comparison(80, 30, 0, 0, true).percentile, 50);
  assert.equal(comparison(80, 30, 10, 19, false).tied, false);
});

test("distribution has ten fixed ranges, including empty and overflow buckets", () => {
  const buckets = scoreDistribution([{ score: 0, count: "4" }, { score: 150, count: "7" }, { score: 450, count: "3" }]);
  assert.equal(buckets.length, 10);
  assert.deepEqual(buckets[0], { score: 0, count: 4 });
  assert.deepEqual(buckets[1], { score: 50, count: 0 });
  assert.deepEqual(buckets[3], { score: 150, count: 7 });
  assert.deepEqual(buckets[9], { score: 450, count: 3 });
});

test("history excludes the requested board, including when a cursor is supplied", () => {
  assert.equal(historyBefore("2026-09-24", null), "2026-09-24");
  assert.equal(historyBefore("2026-09-24", "2026-09-23"), "2026-09-23");
  assert.equal(historyBefore("2026-09-24", "2026-09-24"), "2026-09-24");
  assert.equal(historyBefore("2026-09-24", "2026-09-25"), "2026-09-24");
});
