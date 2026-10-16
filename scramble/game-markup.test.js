import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("every statically referenced game element exists in the page markup", () => {
  const controller = readFileSync(new URL("./app.js", import.meta.url), "utf8");
  const markup = readFileSync(new URL("./app/game.jsx", import.meta.url), "utf8")
    + readFileSync(new URL("./app/scores-ui.jsx", import.meta.url), "utf8");
  const references = [...controller.matchAll(/\$\("([^"]+)"\)/g)].map((match) => match[1]);
  references.push("game-error");
  for (const id of new Set(references)) {
    assert.ok(markup.includes(`id="${id}"`), `Missing game element: ${id}`);
  }
});

test("result actions keep copy within the score card and offer guest sign-in and seed exit", () => {
  const controller = readFileSync(new URL("./app.js", import.meta.url), "utf8");
  const markup = readFileSync(new URL("./app/game.jsx", import.meta.url), "utf8");
  assert.match(markup, /id="tier-result"[\s\S]*?id="share"[\s\S]*?id="result-spread"[\s\S]*?<p id="final-summary"/);
  assert.match(markup, /id="share"[^>]*aria-label="Copy result"/);
  assert.match(markup, /id="result-signin"[^>]*hidden>SIGN IN TO SAVE THIS RESULT/);
  assert.match(markup, /id="result-daily"[^>]*href="\/"[^>]*hidden>/);
  assert.match(markup, /id="seed-daily"[^>]*href="\/"[^>]*hidden>/);
  assert.match(controller, /\$\("result-signin"\)\.addEventListener\("click", signInAccount\)/);
  assert.doesNotMatch(controller, /No valid scoring words remain\./);
});
