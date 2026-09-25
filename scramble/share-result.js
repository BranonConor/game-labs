import { tierForScore } from "./score-tiers.js";

export function formatShareResult({ day, practice, score, words, tilesFilled }) {
  const topWords = words.map(({ word, points }, index) => ({ word, points, index }))
    .sort((a, b) => b.points - a.points || a.index - b.index).slice(0, 3);
  return [
    `SCRAMB · ${day}${practice ? " · practice" : ""}`,
    `${score} points · ${tierForScore(score).name} egg`,
    `${words.length} words · ${tilesFilled}/64 tiles filled`,
    ...(topWords.length ? ["Top words:", ...topWords.map((entry, index) => `${index + 1}. ${entry.word} +${entry.points}`)] : []),
  ].join("\n");
}
