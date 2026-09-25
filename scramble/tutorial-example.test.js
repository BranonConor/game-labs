import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { generateBoard } from "./ranked-board.js";
import { verifyWord } from "./ranked-run.js";
import { tutorialExample } from "./tutorial-example.js";

test("tutorial shows a legal move on every 2026 daily board", () => {
  const words = new Set(readFileSync(new URL("./public/lexicon.txt", import.meta.url), "utf8").toUpperCase().split(/\s+/));
  for (let offset = 0; offset < 365; offset++) {
    const day = new Date(Date.UTC(2026, 0, offset + 1)).toISOString().slice(0, 10);
    const { fixed, effectTiles } = generateBoard(day);
    const example = tutorialExample(fixed, effectTiles);
    const checked = verifyWord(day, { played: {}, moves: [], score: 0 }, example.path, example.letters, words);
    assert.equal(checked.move.word, example.word, day);
    assert.equal(checked.move.points, example.points, day);
  }
});
