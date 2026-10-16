import assert from "node:assert/strict";
import test from "node:test";
import { leaderboardFor, leaderboardRequest, publicLeaderboardRow, publicPlayerName } from "./leaderboard.js";

test("only structured Google given/family names become public names", () => {
  assert.equal(publicPlayerName({ given_name: "Amelia", family_name: "Nguyen" }), "A.N.");
  assert.equal(publicPlayerName({ given_name: "Jean Pierre", family_name: "Évrard" }), "J.É.");
  assert.equal(publicPlayerName({ given_name: "Maya", family_name: "Smith Jones" }), "M.S.");
  for (const profile of [
    { name: "Amelia Nguyen", email: "amelia@example.com" },
    { given_name: "amelia@example.com", family_name: "Nguyen" },
    { given_name: "Amelia", family_name: "" },
    { given_name: "Amelia" }, null,
  ]) assert.equal(publicPlayerName(profile), "Player");
});

test("page and kind validation caps offsets before database access", () => {
  assert.deepEqual(leaderboardRequest(new URLSearchParams()), { kind: "daily", page: 1, offset: 0 });
  assert.deepEqual(leaderboardRequest(new URLSearchParams("kind=allTime&page=2")),
    { kind: "allTime", page: 2, offset: 20 });
  for (const value of ["0", "-1", "1.5", "01", "1000000", "1e2"]) {
    assert.equal(leaderboardRequest(new URLSearchParams(`page=${value}`)), null);
  }
  assert.equal(leaderboardRequest(new URLSearchParams("kind=history")), null);
});

test("public row shape contains only safe name and metrics", () => {
  const row = { rank: "3", points: "123", played: 2, display_name: "M.S.",
    user_id: "private", email: "private@example.com", name: "Maya Smith" };
  assert.deepEqual(publicLeaderboardRow(row, "daily"), { rank: 3, name: "M.S.", points: 123 });
  assert.deepEqual(publicLeaderboardRow(row, "allTime"),
    { rank: 3, name: "M.S.", points: 123, played: 2, average: 61.5 });
  assert.equal(publicLeaderboardRow({ ...row, display_name: null }, "daily").name, "Player");
});

function sqlFixture({ total = 0, mine = 0, entries = [], own = null } = {}) {
  const queries = [];
  const sql = async (parts, ...values) => {
    const query = parts.join("?");
    queries.push({ query, values });
    if (query.includes("LIMIT ? OFFSET ?")) return entries;
    if (query.includes("count(*)::integer AS total") || query.includes("count(DISTINCT user_id)::integer AS total")) {
      return [{ total, mine }];
    }
    return own ? [own] : [];
  };
  return { sql, queries };
}

test("empty new day returns no yesterday rows and no current player", async () => {
  const { sql, queries } = sqlFixture();
  const result = await leaderboardFor(sql, "me", "daily", 1, 0, "2026-10-05");
  assert.deepEqual(result, {
    kind: "daily", boardId: "2026-10-05", page: 1, pageSize: 20,
    total: 0, entries: [], current: null,
  });
  assert.equal(queries.length, 2);
  assert.ok(queries.every(({ query, values }) => query.includes("board_id = ?::date")
    && values.includes("2026-10-05")));
});

test("daily ranks tie by score while pagination orders ties by internal stable key", async () => {
  const { sql, queries } = sqlFixture({
    total: 22, mine: 1, entries: [
      { rank: "2", points: 90, display_name: "Ada L.", mine: false },
      { rank: "2", points: 90, display_name: "Ben K.", mine: true },
    ],
  });
  const result = await leaderboardFor(sql, "me", "daily", 2, 20, "2026-10-04");
  assert.equal(result.entries[0].rank, 2);
  assert.equal(result.entries[1].rank, 2);
  assert.equal(result.current.rank, 2);
  assert.equal(result.total, 22);
  assert.ok(queries[0].query.includes("rank() OVER (ORDER BY r.score DESC)"));
  assert.ok(queries[0].query.includes("ORDER BY s.points DESC, s.user_id ASC"));
  assert.deepEqual(queries[0].values.slice(-2), [20, 20]);
});

test("all-time sums only completed ranked days and returns off-page current context", async () => {
  const { sql, queries } = sqlFixture({
    total: 41, mine: 3, entries: [{ rank: "21", points: "240", played: 3, display_name: null, mine: false }],
    own: { rank: "35", points: "101", played: 2, display_name: "N.R.", user_id: "secret" },
  });
  const result = await leaderboardFor(sql, "me", "allTime", 2, 20, "2026-10-04");
  assert.deepEqual(result.entries, [{ rank: 21, name: "Player", points: 240, played: 3, average: 80, mine: false }]);
  assert.deepEqual(result.current, { rank: 35, name: "N.R.", points: 101, played: 2, average: 50.5 });
  assert.equal(result.total, 41);
  assert.equal(result.boardId, null);
  assert.ok(queries[0].query.includes("GROUP BY r.user_id"));
  assert.ok(queries[0].query.includes("count(*)::integer AS played"));
  assert.ok(queries[0].query.includes("rank() OVER (ORDER BY t.points DESC)"));
  assert.ok(queries[2].query.includes("WHERE t.user_id = ?"));
  assert.ok(!JSON.stringify(result).includes("secret"));
});

test("out-of-range page keeps count without returning rows", async () => {
  const { sql } = sqlFixture({ total: 3 });
  const result = await leaderboardFor(sql, null, "daily", 9, 160, "2026-10-04");
  assert.equal(result.total, 3);
  assert.deepEqual(result.entries, []);
  assert.equal(result.current, null);
});
