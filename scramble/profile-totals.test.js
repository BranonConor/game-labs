import assert from "node:assert/strict";
import test from "node:test";
import { profileTotals } from "./profile-totals.js";

test("profile totals include completed days beyond recent results without counting ranked mirrors twice", async () => {
  const ranked = [
    { boardId: "2026-09-24", score: 70, words: 3, completed: true },
    { boardId: "2026-09-23", score: 20, words: 1, completed: false },
  ];
  const saved = [
    { boardId: "2026-09-24", score: 65, words: 3, finished: true },
    ...Array.from({ length: 9 }, (_, index) => ({
      boardId: `2026-09-${String(14 + index).padStart(2, "0")}`,
      score: 10, words: 2, finished: true,
    })),
    { boardId: "2026-09-13", score: 40, words: 4, finished: false },
    { boardId: "2026-09-12:practice", score: 50, words: 5, finished: true },
  ];
  const sql = (strings, userId) => {
    const query = strings.join("?");
    assert.equal(userId, "player-1");
    assert.match(query, /FROM ranked_runs r/);
    assert.match(query, /r\.finished_at IS NOT NULL OR r\.started_at \+ interval '4 minutes'/);
    assert.match(query, /g\.state->>'finished' = 'true'/);
    assert.match(query, /g\.board_id ~ '\^\[0-9\]\{4\}/);
    assert.match(query, /NOT EXISTS \([\s\S]*r\.board_id::text = g\.board_id/);
    assert.doesNotMatch(query, /LIMIT/);
    const completed = ranked.filter((run) => run.completed);
    const older = saved.filter((run) => run.finished && /^\d{4}-\d{2}-\d{2}$/.test(run.boardId)
      && !completed.some((rankedRun) => rankedRun.boardId === run.boardId));
    const rows = [...completed, ...older];
    return [{ points: String(rows.reduce((total, run) => total + run.score, 0)),
      words: String(rows.reduce((total, run) => total + run.words, 0)) }];
  };
  assert.deepEqual(await profileTotals(sql, "player-1"), { points: 160, words: 21 });
});

test("profile totals are zero for an account with no completed games", async () => {
  const sql = (strings, userId) => {
    assert.equal(userId, "new-player");
    assert.match(strings.join("?"), /coalesce\(sum\(score\), 0\)/);
    assert.match(strings.join("?"), /coalesce\(sum\(words\), 0\)/);
    return [{ points: "0", words: "0" }];
  };
  assert.deepEqual(await profileTotals(sql, "new-player"), { points: 0, words: 0 });
});
