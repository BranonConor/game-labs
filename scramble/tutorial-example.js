import { SIZE, VALUES } from "./ranked-board.js";

const EXAMPLE_WORDS = {
  A: "CATS", B: "ABLE", C: "RICE", D: "RIDE", E: "WEST", F: "LEFT",
  G: "CAGE", H: "SHIP", I: "MINT", J: "AJAR", K: "BAKE", L: "SALT",
  M: "GAME", N: "SAND", O: "DOVE", P: "OPEN", Q: "QUIT", R: "FARM",
  S: "EAST", T: "CATS", U: "JUMP", V: "DOVE", W: "SWIM", X: "AXLE",
  Y: "EYES", Z: "SIZE",
};

export function tutorialExamples(fixed, effectTiles) {
  const claimed = new Set();
  const usedWords = new Set();
  const examples = [];
  const neighbors = (index) => [index - SIZE, index + SIZE, index - 1, index + 1]
    .filter((next) => next >= 0 && next < SIZE * SIZE
      && Math.abs(Math.floor(index / SIZE) - Math.floor(next / SIZE))
        + Math.abs(index % SIZE - next % SIZE) === 1);
  function anchoredPath(anchor, position, length) {
    function suffix(path, occupied) {
      if (path.length === length - position) return path;
      for (const next of neighbors(path.at(-1))) {
        if (fixed[next] || claimed.has(next) || occupied.has(next) || path.includes(next)) continue;
        const result = suffix([...path, next], occupied);
        if (result) return result;
      }
      return null;
    }
    function prefix(path) {
      if (path.length === position + 1) {
        const tail = suffix([anchor], new Set(path));
        return tail ? [...path].reverse().concat(tail.slice(1)) : null;
      }
      for (const next of neighbors(path.at(-1))) {
        if (fixed[next] || claimed.has(next) || path.includes(next)) continue;
        const result = prefix([...path, next]);
        if (result) return result;
      }
      return null;
    }
    return prefix([anchor]);
  }
  for (let move = 0; move < 3; move++) {
    let example = null;
    for (const avoidEffects of [true, false]) {
      for (let index = 0; index < fixed.length; index++) {
        const word = EXAMPLE_WORDS[fixed[index]];
        if (!word || claimed.has(index) || usedWords.has(word)) continue;
        const anchorPosition = word.indexOf(fixed[index]);
        const path = anchoredPath(index, anchorPosition, word.length);
        if (!path || (avoidEffects && path.some((tile) => effectTiles.has(tile)))) continue;
        const letters = [...word].filter((_, position) => !fixed[path[position]]).join("");
        const boost = path.filter((tile) => effectTiles.get(tile) === "boost").length * 5;
        const multiplier = path.some((tile) => effectTiles.get(tile) === "double") ? 2 : 1;
        const points = ([...letters].reduce((sum, letter) => sum + VALUES[letter], 0) + 6 + boost) * multiplier;
        example = { path, word, letters, points, anchorPosition };
        break;
      }
      if (example) break;
    }
    if (!example) throw new Error("Could not generate tutorial moves for this board.");
    examples.push(example);
    example.path.forEach((tile) => claimed.add(tile));
    usedWords.add(example.word);
  }
  return examples;
}
