import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { generateBoard } from "./ranked-board.js";
import { verifyWord } from "./ranked-run.js";
import { tutorialExamples } from "./tutorial-example.js";

test("tutorial shows three legal successive moves on 2026-2030 daily boards", () => {
  const words = new Set(readFileSync(new URL("./public/lexicon.txt", import.meta.url), "utf8").toUpperCase().split(/\s+/));
  for (let year = 2026; year <= 2030; year++) {
    const days = (Date.UTC(year + 1, 0) - Date.UTC(year, 0)) / 86400000;
    for (let offset = 0; offset < days; offset++) {
      const day = new Date(Date.UTC(year, 0, offset + 1)).toISOString().slice(0, 10);
      const { fixed, effectTiles } = generateBoard(day);
      const examples = tutorialExamples(fixed, effectTiles);
      assert.equal(examples.length, 3, day);
      let run = { played: {}, moves: [], score: 0 };
      for (const example of examples) {
        const checked = verifyWord(day, run, example.path, example.letters, words);
        assert.equal(checked.move.word, example.word, day);
        assert.equal(checked.move.points, example.points, day);
        run = checked;
      }
    }
  }
});
