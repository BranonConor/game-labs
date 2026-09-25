import assert from "node:assert/strict";
import test from "node:test";
import { validBoardId, validRunState } from "./run-state.js";

const freshRun = () => ({
  startedAt: null,
  endedAt: null,
  finished: false,
  played: {},
  words: [],
  spentEffects: [],
  score: 0,
  fullBoardBonusAwarded: false,
});

test("accepts daily and practice boards with valid dates", () => {
  assert.equal(validBoardId("2026-09-24"), true);
  assert.equal(validBoardId("2026-09-24:practice-1"), true);
  for (const id of ["2026-02-30", "invalid", "2026-09-24/other", "2026-09-24:"]) {
    assert.equal(validBoardId(id), false);
  }
});

test("accepts fresh, in-progress, and finished run snapshots", () => {
  assert.equal(validRunState(freshRun()), true);
  const inProgress = {
    ...freshRun(),
    startedAt: Date.now(),
    played: { 0: "A", 1: "B", 2: "C", 3: "D" },
    words: [{ word: "ABCD", points: 12, path: [0, 1, 2, 3], color: 2 }],
    score: 12,
  };
  assert.equal(validRunState(inProgress), true);
  assert.equal(validRunState({ ...inProgress, finished: true, endedAt: Date.now(), endedReason: "time" }), true);
});

test("rejects malformed states and out-of-range values", () => {
  const run = freshRun();
  for (const invalid of [
    { ...run, score: -1 },
    { ...run, finished: true },
    { ...run, played: { 64: "A" } },
    { ...run, played: { 1: "<script>" } },
    { ...run, spentEffects: [64] },
    { ...run, words: [{ word: "WORD", points: 4, path: [1, 1, 2, 3], color: 1 }] },
  ]) {
    assert.equal(validRunState(invalid), false);
  }
});
