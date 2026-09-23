const SIZE = 8;
const LIMIT = 16;
const BITS = Array.from({ length: SIZE * SIZE }, (_, index) => 1n << BigInt(index));
const NEIGHBORS = BITS.map((_, index) => {
  const row = Math.floor(index / SIZE);
  const col = index % SIZE;
  return [index - SIZE, index + SIZE, index - 1, index + 1].filter((next) =>
    next >= 0 && next < BITS.length &&
    Math.abs(Math.floor(next / SIZE) - row) + Math.abs(next % SIZE - col) === 1);
});

export function createMoveFinder(words) {
  words.sort();

  function lowerBound(target, start, end) {
    while (start < end) {
      const middle = (start + end) >>> 1;
      if (words[middle] < target) start = middle + 1;
      else end = middle;
    }
    return start;
  }

  return function hasScoringMove(board, usedWords, claimedTiles) {
    const claimed = new Set(claimedTiles);
    if (!board.some((letter, index) => letter === null && !claimed.has(index))
      || !board.some((letter, index) => letter !== null && !claimed.has(index))) return false;
    const letters = board.map((letter) => letter?.toLowerCase() || null);
    const used = new Set(usedWords.map((word) => word.toLowerCase()));

    function search(index, visited, prefix, low, high, hasFilled, hasNew) {
      if (prefix.length >= 4 && hasFilled && hasNew && words[low] === prefix && !used.has(prefix)) return true;
      if (prefix.length === LIMIT) return false;

      for (const next of NEIGHBORS[index]) {
        if (claimed.has(next) || visited & BITS[next]) continue;
        const nextVisited = visited | BITS[next];
        const letter = letters[next];
        if (letter) {
          const candidate = prefix + letter;
          const first = lowerBound(candidate, low, high);
          const end = lowerBound(candidate + "{", first, high);
          if (first < end && search(next, nextVisited, candidate, first, end, true, hasNew)) return true;
        } else {
          let first = low;
          while (first < high) {
            const candidateLetter = words[first][prefix.length];
            if (!candidateLetter) { first++; continue; }
            const candidate = prefix + candidateLetter;
            const end = lowerBound(candidate + "{", first, high);
            if (search(next, nextVisited, candidate, first, end, hasFilled, true)) return true;
            first = end;
          }
        }
      }
      return false;
    }

    const starts = BITS.map((_, index) => index);
    starts.sort((a, b) => Number(Boolean(letters[b])) - Number(Boolean(letters[a])));
    for (const start of starts) {
      if (claimed.has(start)) continue;
      const letter = letters[start];
      if (letter) {
        const first = lowerBound(letter, 0, words.length);
        const end = lowerBound(letter + "{", first, words.length);
        if (first < end && search(start, BITS[start], letter, first, end, true, false)) return true;
      } else {
        let first = 0;
        while (first < words.length) {
          const candidate = words[first][0];
          const end = lowerBound(candidate + "{", first, words.length);
          if (search(start, BITS[start], candidate, first, end, false, true)) return true;
          first = end;
        }
      }
    }
    return false;
  };
}
