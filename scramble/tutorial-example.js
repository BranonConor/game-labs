import { SIZE, VALUES } from "./ranked-board.js";

const EXAMPLE_WORDS = {
  A: "ABLE", B: "BAKE", C: "CATS", D: "DOVE", E: "EAST", F: "FARM",
  G: "GAME", H: "HATS", I: "IRON", J: "JUMP", K: "KITE", L: "LAMP",
  M: "MINT", N: "NAME", O: "OVEN", P: "PARK", Q: "QUIT", R: "RICE",
  S: "SAND", T: "TONE", U: "UNIT", V: "VINE", W: "WARM", X: "XRAY",
  Y: "YARD", Z: "ZEST",
};

export function tutorialExample(fixed, effectTiles) {
  const neighbors = (index) => [index - SIZE, index + SIZE, index - 1, index + 1]
    .filter((next) => next >= 0 && next < SIZE * SIZE
      && Math.abs(Math.floor(index / SIZE) - Math.floor(next / SIZE))
        + Math.abs(index % SIZE - next % SIZE) === 1);
  function extend(path) {
    if (path.length === 4) return path;
    for (const next of neighbors(path.at(-1))) {
      if (fixed[next] || path.includes(next)) continue;
      const result = extend([...path, next]);
      if (result) return result;
    }
    return null;
  }
  for (const avoidEffects of [true, false]) {
    for (let index = 0; index < fixed.length; index++) {
      if (!fixed[index] || !EXAMPLE_WORDS[fixed[index]]) continue;
      const path = extend([index]);
      if (!path || (avoidEffects && path.some((tile) => effectTiles.has(tile)))) continue;
      const word = EXAMPLE_WORDS[fixed[index]];
      const letters = word.slice(1);
      const boost = path.filter((tile) => effectTiles.get(tile) === "boost").length * 5;
      const multiplier = path.some((tile) => effectTiles.get(tile) === "double") ? 2 : 1;
      const points = ([...letters].reduce((sum, letter) => sum + VALUES[letter], 0) + 6 + boost) * multiplier;
      return { path, word, letters, points };
    }
  }
  throw new Error("Could not generate a tutorial move for this board.");
}
