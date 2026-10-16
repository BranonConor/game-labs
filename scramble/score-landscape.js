import { scoreModel } from './score-model.js';
import { scoreDistribution } from './ranked-run.js';

// Public aggregates only: the same landscape backs the menu and ranked results.
export async function scoreLandscape(sql, boardId) {
  const rows = await sql`
    WITH completed AS (
      SELECT board_id, score FROM ranked_runs
      WHERE board_id <= ${boardId}::date
        AND (finished_at IS NOT NULL OR (paused_at IS NULL AND deadline_at <= clock_timestamp())
          OR clock_timestamp() >= ((board_id + 1)::timestamp AT TIME ZONE 'UTC') + interval '4 minutes')
    ), buckets AS (
      SELECT least(score / 50, 9) * 50 AS score, count(*)::integer AS count
      FROM completed WHERE board_id = ${boardId}::date GROUP BY 1
    )
    SELECT count(*) FILTER (WHERE board_id = ${boardId}::date)::integer AS total,
      avg(score) FILTER (WHERE board_id = ${boardId}::date) AS mean,
      stddev_pop(score) FILTER (WHERE board_id = ${boardId}::date) AS deviation,
      count(*) FILTER (WHERE board_id < ${boardId}::date)::integer AS prior_count,
      avg(score) FILTER (WHERE board_id < ${boardId}::date) AS prior_mean,
      stddev_pop(score) FILTER (WHERE board_id < ${boardId}::date) AS prior_deviation,
      (SELECT coalesce(jsonb_agg(buckets ORDER BY score), '[]'::jsonb) FROM buckets) AS buckets
    FROM completed
  `;
  const stats = rows[0];
  const distribution = scoreDistribution(stats.buckets);
  const total = Number(stats.total);
  const model = scoreModel(boardId, total, distribution,
    {count: stats.prior_count, mean: stats.prior_mean, deviation: stats.prior_deviation}, stats);
  return {total, distribution, model};
}
