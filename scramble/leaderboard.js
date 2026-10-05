import { utcDailyBoardId } from "./ranked-board.js";

export const LEADERBOARD_PAGE_SIZE = 20;

export function publicPlayerName(profile) {
  const first = typeof profile?.given_name === "string" ? profile.given_name.trim().split(/\s+/)[0] : null;
  const last = typeof profile?.family_name === "string" ? profile.family_name.trim() : null;
  if (!first || !last || !/^[\p{L}\p{M}][\p{L}\p{M}' -]*$/u.test(first)
      || !/^[\p{L}\p{M}]/u.test(last) || first.length > 60) return "Player";
  return `${first} ${[...last][0].toLocaleUpperCase()}.`;
}

export function leaderboardRequest(params) {
  const kind = params.get("kind") ?? "daily";
  const page = params.get("page") ?? "1";
  if (!["daily", "allTime"].includes(kind) || !/^[1-9]\d{0,5}$/.test(page)) return null;
  return { kind, page: Number(page), offset: (Number(page) - 1) * LEADERBOARD_PAGE_SIZE };
}

export function publicLeaderboardRow(row, kind) {
  return {
    rank: Number(row.rank),
    name: row.display_name || "Player",
    points: Number(row.points),
    ...(kind === "allTime" ? {
      played: Number(row.played),
      average: Number(row.points) / Number(row.played),
    } : {}),
  };
}

export async function leaderboardFor(sql, userId, kind, page, offset, boardId = utcDailyBoardId()) {
  const rows = kind === "daily"
    ? await sql`
      WITH scores AS (
        SELECT r.user_id, r.score AS points,
               rank() OVER (ORDER BY r.score DESC) AS rank,
               count(*) OVER () AS total
        FROM ranked_runs r
        WHERE r.board_id = ${boardId}::date
          AND (r.finished_at IS NOT NULL OR r.started_at + interval '4 minutes' <= clock_timestamp())
      )
      SELECT s.rank, s.points, s.total, p.display_name,
             coalesce(s.user_id = ${userId}, false) AS mine
      FROM scores s LEFT JOIN leaderboard_profiles p ON p.user_id = s.user_id
      WHERE s.rank IS NOT NULL
      ORDER BY s.points DESC, s.user_id ASC
      LIMIT ${LEADERBOARD_PAGE_SIZE} OFFSET ${offset}
    `
    : await sql`
      WITH totals AS (
        SELECT r.user_id, sum(r.score)::bigint AS points, count(*)::integer AS played
        FROM ranked_runs r
        WHERE r.finished_at IS NOT NULL OR r.started_at + interval '4 minutes' <= clock_timestamp()
        GROUP BY r.user_id
      ), scores AS (
        SELECT t.*, rank() OVER (ORDER BY t.points DESC) AS rank,
               count(*) OVER () AS total FROM totals t
      )
      SELECT s.rank, s.points, s.played, s.total, p.display_name,
             coalesce(s.user_id = ${userId}, false) AS mine
      FROM scores s LEFT JOIN leaderboard_profiles p ON p.user_id = s.user_id
      ORDER BY s.points DESC, s.user_id ASC
      LIMIT ${LEADERBOARD_PAGE_SIZE} OFFSET ${offset}
    `;
  const [summary] = kind === "daily"
    ? await sql`
      SELECT count(*)::integer AS total,
             count(*) FILTER (WHERE user_id = ${userId})::integer AS mine
      FROM ranked_runs
      WHERE board_id = ${boardId}::date
        AND (finished_at IS NOT NULL OR started_at + interval '4 minutes' <= clock_timestamp())
    `
    : await sql`
      SELECT count(DISTINCT user_id)::integer AS total,
             count(*) FILTER (WHERE user_id = ${userId})::integer AS mine
      FROM ranked_runs
      WHERE finished_at IS NOT NULL OR started_at + interval '4 minutes' <= clock_timestamp()
    `;
  let current = rows.find((row) => row.mine);
  if (!current && Number(summary.mine)) {
    const [own] = kind === "daily"
      ? await sql`
        SELECT r.score AS points,
               (SELECT count(*) + 1 FROM ranked_runs higher
                WHERE higher.board_id = r.board_id AND higher.score > r.score
                  AND (higher.finished_at IS NOT NULL OR higher.started_at + interval '4 minutes' <= clock_timestamp())) AS rank,
               p.display_name
        FROM ranked_runs r LEFT JOIN leaderboard_profiles p ON p.user_id = r.user_id
        WHERE r.user_id = ${userId} AND r.board_id = ${boardId}::date
          AND (r.finished_at IS NOT NULL OR r.started_at + interval '4 minutes' <= clock_timestamp())
      `
      : await sql`
        WITH totals AS (
          SELECT user_id, sum(score)::bigint AS points, count(*)::integer AS played
          FROM ranked_runs
          WHERE finished_at IS NOT NULL OR started_at + interval '4 minutes' <= clock_timestamp()
          GROUP BY user_id
        )
        SELECT t.points, t.played, (SELECT count(*) + 1 FROM totals higher WHERE higher.points > t.points) AS rank,
               p.display_name
        FROM totals t LEFT JOIN leaderboard_profiles p ON p.user_id = t.user_id
        WHERE t.user_id = ${userId}
      `;
    current = own;
  }
  return {
    kind, boardId: kind === "daily" ? boardId : null, page,
    pageSize: LEADERBOARD_PAGE_SIZE, total: Number(summary.total),
    entries: rows.map((row) => ({ ...publicLeaderboardRow(row, kind), mine: row.mine })),
    current: current ? publicLeaderboardRow(current, kind) : null,
  };
}
