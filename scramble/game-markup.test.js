import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("every statically referenced game element exists in the page markup", () => {
  const controller = readFileSync(new URL("./app.js", import.meta.url), "utf8");
  const markup = readFileSync(new URL("./app/game.jsx", import.meta.url), "utf8");
  const references = [...controller.matchAll(/\$\("([^"]+)"\)/g)].map((match) => match[1]);
  references.push("game-error");
  for (const id of new Set(references)) {
    assert.ok(markup.includes(`id="${id}"`), `Missing game element: ${id}`);
  }
});
