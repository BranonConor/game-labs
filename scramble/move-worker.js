import { createMoveFinder } from "./move-check.js";

let hasScoringMove = null;

self.onmessage = ({ data }) => {
  if (data.type === "init") {
    hasScoringMove = createMoveFinder(data.words.trim().split("\n"));
    self.postMessage({ type: "ready" });
  } else if (data.type === "check") {
    if (!hasScoringMove) throw new Error("Move checker is not initialized.");
    self.postMessage({
      type: "result",
      id: data.id,
      hasMove: hasScoringMove(data.board, data.usedWords, data.claimedTiles),
    });
  }
};
