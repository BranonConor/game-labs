import assert from "node:assert/strict";
import test from "node:test";
import { tierForScore } from "./score-tiers.js";
import { formatShareResult } from "./share-result.js";

test("shares stats and only the three best words, without the tile diagram", () => {
  const result = formatShareResult({
    day: "2026-09-25",
    practice: false,
    score: 103,
    tilesFilled: 22,
    words: [
      { word: "BIRD", points: 12 },
      { word: "HOUSE", points: 33 },
      { word: "PLANT", points: 28 },
      { word: "CATS", points: 33 },
    ],
  });
  assert.equal(result, [
    "SCRAMB · 2026-09-25",
    `103 points · ${tierForScore(103).name} egg`,
    "4 words · 22/64 tiles filled",
    "Top words:",
    "1. HOUSE +33",
    "2. CATS +33",
    "3. PLANT +28",
  ].join("\n"));
});

test("an empty practice run does not invent top words", () => {
  const result = formatShareResult({
    day: "2026-09-25", practice: true, score: 0, tilesFilled: 14, words: [],
  });
  assert.equal(result.split("\n").length, 3);
  assert.match(result, /^SCRAMB · 2026-09-25 · practice\n/);
});
