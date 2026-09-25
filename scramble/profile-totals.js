export async function profileTotals(sql, userId) {
  const [totals] = await sql`
    WITH completed AS (
      SELECT r.score, jsonb_array_length(r.moves) AS words
      FROM ranked_runs r
      WHERE r.user_id = ${userId}
        AND (r.finished_at IS NOT NULL OR r.started_at + interval '4 minutes' <= clock_timestamp())
      UNION ALL
      SELECT (g.state->>'score')::integer AS score,
             jsonb_array_length(g.state->'words') AS words
      FROM game_runs g
      WHERE g.user_id = ${userId}
        AND g.board_id ~ '^[0-9]{4}-[0-9]{2}-[0-9]{2}$'
        AND g.state->>'finished' = 'true'
        AND NOT EXISTS (
          SELECT 1 FROM ranked_runs r
          WHERE r.user_id = g.user_id AND r.board_id::text = g.board_id
            AND (r.finished_at IS NOT NULL OR r.started_at + interval '4 minutes' <= clock_timestamp())
        )
    )
    SELECT coalesce(sum(score), 0)::bigint AS points,
           coalesce(sum(words), 0)::bigint AS words
    FROM completed
  `;
  return { points: Number(totals.points), words: Number(totals.words) };
}
