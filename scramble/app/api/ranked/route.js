import { scoreLandscape } from "../../../score-landscape";
import { scoreModel, modelPercentile } from "../../../score-model";
import { runContext, runResponse } from "../../../run-db";
import { utcDailyBoardId, validRankedBoardId } from "../../../ranked-board";
import { comparison, isExpired, historyBefore, isFrozen, publicRankedRun, verifyWord } from "../../../ranked-run";

export const runtime = "nodejs";

const daily = utcDailyBoardId;

function logUnexpected(operation, error) {
  const code = ["42P01", "42703", "23505", "ECONNREFUSED", "ETIMEDOUT"].includes(error?.code)
    ? error.code : "unknown";
  console.error(`Ranked ${operation} failed (${code}); exception details withheld.`);
}

async function findRun(sql, userId, boardId) {
  const [run] = await sql`
    SELECT board_id::text AS board_id, started_at, deadline_at, paused_at, sequence, played, moves, score,
           finished_at, ended_reason
    FROM ranked_runs WHERE user_id = ${userId} AND board_id = ${boardId}::date
  `;
  return run ?? null;
}

async function countsFor(sql, boardId, score) {
  const [counts] = await sql`
    SELECT avg(score) AS mean, stddev_pop(score) AS deviation, count(*)::integer AS total,
           count(*) FILTER (WHERE score < ${score ?? -1})::integer AS lower,
           count(*) FILTER (WHERE score > ${score ?? -1})::integer AS higher
    FROM ranked_runs
    WHERE board_id = ${boardId}::date
      AND (finished_at IS NOT NULL OR ((paused_at IS NULL AND deadline_at <= clock_timestamp()) OR clock_timestamp() >= ((board_id + 1)::timestamp AT TIME ZONE 'UTC') + interval '4 minutes'))
  `;
  return counts;
}

function completed(run, now) {
  return Boolean(run?.finished_at) || Boolean(run && isExpired(run, now));
}

function rejectConflict(run, now) {
  if (!run) return runResponse({ error: "Ranked run not started.", code: "NOT_STARTED" }, 404);
  if (run.finished_at) return runResponse({ error: "Ranked run already finished.", code: "FINISHED" }, 409);
  if (isExpired(run, now)) {
    return runResponse({ error: "Ranked run has timed out.", code: "EXPIRED" }, 410);
  }
  return runResponse({ error: "Outdated ranked sequence. Reload the run.", code: "STALE_SEQUENCE" }, 409);
}

export async function POST(request) {
  const arrivedAt = new Date();
  const context = await runContext();
  if (context.error) return context.error;
  let input;
  try {
    const text = await request.text();
    if (text.length > 2048) return runResponse({ error: "Ranked request is too large." }, 413);
    input = JSON.parse(text);
  } catch {
    return runResponse({ error: "Invalid ranked request." }, 400);
  }
  if (!input || typeof input !== "object" || Array.isArray(input)
      || !["start", "word", "finish", "pause", "resume"].includes(input.action)
      || !validRankedBoardId(input.boardId)) {
    return runResponse({ error: "Invalid ranked action or daily board ID." }, 400);
  }
  const { sql, userId } = context;
  const { boardId } = input;
  try {
    if (input.action === "start") {
      if (boardId !== daily()) return runResponse({ error: "Only today's UTC daily board can be started." }, 409);
      await sql`
        INSERT INTO ranked_runs (user_id, board_id)
        SELECT ${userId}, ${boardId}::date
        WHERE ${boardId}::date = (clock_timestamp() AT TIME ZONE 'UTC')::date
        ON CONFLICT (user_id, board_id) DO NOTHING
      `;
      const run = await findRun(sql, userId, boardId);
      if (!run) return runResponse({ error: "The UTC daily board has changed. Refresh and try again." }, 409);
      return runResponse(publicRankedRun(run));
    }
    if (input.action === "word" && (!Number.isSafeInteger(input.sequence) || input.sequence < 0 || input.sequence > 64)) {
      return runResponse({ error: "Invalid ranked sequence." }, 400);
    }
    const run = await findRun(sql, userId, boardId);
    if (!run) return rejectConflict(null, Date.now());
    if (["pause", "resume"].includes(input.action)) {
      // Conditional updates are idempotent. Server time is the only clock authority.
      await sql`UPDATE ranked_runs SET
        deadline_at = CASE WHEN ${input.action} = 'resume' AND paused_at IS NOT NULL
          THEN least(deadline_at + (clock_timestamp() - paused_at), ((board_id + 1)::timestamp AT TIME ZONE 'UTC') + interval '4 minutes') ELSE deadline_at END,
        paused_at = CASE WHEN ${input.action} = 'pause' THEN coalesce(paused_at, clock_timestamp()) ELSE NULL END
        WHERE user_id = ${userId} AND board_id = ${boardId}::date AND finished_at IS NULL
          AND (paused_at IS NOT NULL OR deadline_at > clock_timestamp())
          AND clock_timestamp() < ((board_id + 1)::timestamp AT TIME ZONE 'UTC') + interval '4 minutes'`;
      return runResponse(publicRankedRun(await findRun(sql, userId, boardId)));
    }
    if (input.action === "finish") {
      if (completed(run, arrivedAt.getTime())) {
        return runResponse({ score: run.score, finished: true, sequence: run.sequence, endedAt: publicRankedRun(run).endedAt });
      }
      const [updated] = await sql`
        UPDATE ranked_runs SET sequence = sequence + 1, finished_at = clock_timestamp(),
          ended_reason = 'finish'
        WHERE user_id = ${userId} AND board_id = ${boardId}::date
          AND finished_at IS NULL
          AND ${arrivedAt.toISOString()}::timestamptz < deadline_at
          AND clock_timestamp() < ((board_id + 1)::timestamp AT TIME ZONE 'UTC') + interval '4 minutes'
        RETURNING board_id::text AS board_id, started_at, deadline_at, paused_at, sequence, played, moves, score,
                  finished_at, ended_reason
      `;
      if (!updated) {
        const latest = await findRun(sql, userId, boardId);
        if (completed(latest, Date.now())) {
          return runResponse({ score: latest.score, finished: true, sequence: latest.sequence, endedAt: publicRankedRun(latest).endedAt });
        }
        return rejectConflict(latest, Date.now());
      }
      return runResponse({ score: updated.score, finished: true, sequence: updated.sequence, endedAt: updated.finished_at });
    }
    if (run.paused_at) return runResponse({ error: "Resume your run before submitting a word.", code: "PAUSED" }, 409);
    if (run.finished_at || input.sequence !== run.sequence || isExpired(run, arrivedAt.getTime())) {
      return rejectConflict(run, Date.now());
    }
    let verified;
    try {
      verified = verifyWord(boardId, run, input.path, input.letters);
    } catch (error) {
      if (error.message === "Ranked dictionary is incomplete." || error.code === "ENOENT") throw error;
      return runResponse({ error: error.message, code: "INVALID_WORD" }, 422);
    }
    const [updated] = await sql`
      UPDATE ranked_runs SET sequence = sequence + 1,
        played = ${JSON.stringify(verified.played)}::jsonb,
        moves = ${JSON.stringify(verified.moves)}::jsonb,
        score = ${verified.score},
        finished_at = CASE WHEN ${verified.full} THEN clock_timestamp() ELSE NULL END,
        ended_reason = CASE WHEN ${verified.full} THEN 'full' ELSE NULL END
      WHERE user_id = ${userId} AND board_id = ${boardId}::date
        AND sequence = ${input.sequence} AND finished_at IS NULL AND paused_at IS NULL
        AND ${arrivedAt.toISOString()}::timestamptz < deadline_at
        AND clock_timestamp() < ((board_id + 1)::timestamp AT TIME ZONE 'UTC') + interval '4 minutes'
      RETURNING board_id::text AS board_id, started_at, deadline_at, paused_at, sequence, played, moves, score,
                finished_at, ended_reason
    `;
    if (!updated) return rejectConflict(await findRun(sql, userId, boardId), Date.now());
    return runResponse({
      score: updated.score, sequence: updated.sequence, finished: Boolean(updated.finished_at),
      move: verified.move, endedAt: updated.finished_at,
    });
  } catch (error) {
    logUnexpected("POST", error);
    return runResponse({ error: "Ranked service is unavailable." }, 500);
  }
}

export async function GET(request) {
  const context = await runContext();
  if (context.error) return context.error;
  const params = new URL(request.url).searchParams;
  const boardId = params.get("boardId") ?? daily();
  const cursor = params.get("cursor");
  if (!validRankedBoardId(boardId) || (cursor !== null && !validRankedBoardId(cursor))
      || boardId > daily() || (cursor !== null && cursor > daily())) {
    return runResponse({ error: "Invalid UTC daily board or history cursor." }, 400);
  }
  const { sql, userId } = context;
  try {
    const now = Date.now();
    const run = await findRun(sql, userId, boardId);
    const counts = await countsFor(sql, boardId, completed(run, now) ? run.score : null);
    const ranked = completed(run, now)
      ? comparison(run.score, counts.total, counts.lower, counts.higher, isFrozen(boardId, now))
      : null;
    const { distribution, model } = await scoreLandscape(sql, boardId);
    const before = historyBefore(boardId, cursor);
    const rows = await sql`
      WITH page AS (
        SELECT board_id, score FROM ranked_runs
        WHERE user_id = ${userId} AND board_id < ${before}::date
          AND (finished_at IS NOT NULL OR ((paused_at IS NULL AND deadline_at <= clock_timestamp()) OR clock_timestamp() >= ((board_id + 1)::timestamp AT TIME ZONE 'UTC') + interval '4 minutes'))
        ORDER BY board_id DESC LIMIT 21
      )
      SELECT page.board_id::text AS board_id, page.score,
             tally.total, tally.lower, tally.higher, tally.mean, tally.deviation,
             prior.count AS prior_count, prior.mean AS prior_mean, prior.deviation AS prior_deviation
      FROM page CROSS JOIN LATERAL (
        SELECT avg(r.score) AS mean, stddev_pop(r.score) AS deviation, count(*)::integer AS total,
               count(*) FILTER (WHERE r.score < page.score)::integer AS lower,
               count(*) FILTER (WHERE r.score > page.score)::integer AS higher
        FROM ranked_runs r
        WHERE r.board_id = page.board_id
          AND (r.finished_at IS NOT NULL OR ((r.paused_at IS NULL AND r.deadline_at <= clock_timestamp()) OR clock_timestamp() >= ((r.board_id + 1)::timestamp AT TIME ZONE 'UTC') + interval '4 minutes'))
      ) tally CROSS JOIN LATERAL (
        SELECT count(*)::integer AS count, avg(r.score) AS mean, stddev_pop(r.score) AS deviation
        FROM ranked_runs r WHERE r.board_id < page.board_id
          AND (r.finished_at IS NOT NULL OR (r.paused_at IS NULL AND r.deadline_at <= clock_timestamp())
            OR clock_timestamp() >= ((r.board_id + 1)::timestamp AT TIME ZONE 'UTC') + interval '4 minutes')
      ) prior
      ORDER BY page.board_id DESC
    `;
    const history = rows.slice(0, 20).map((row) => {
      const rank = comparison(row.score, row.total, row.lower, row.higher, isFrozen(row.board_id, now));
      return {
        boardId: row.board_id, score: row.score, rank: rank.rank, tied: rank.tied,
        total: rank.total, percentile: modelPercentile(row.score, scoreModel(row.board_id, row.total, [], {count: row.prior_count, mean: row.prior_mean, deviation: row.prior_deviation}, row)), comparisonSource: row.total < 30 ? "projected" : "adjusted", final: rank.frozen,
      };
    });
    const attempt = publicRankedRun(run, now);
    return runResponse({
      boardId,
      attempt,
      run: attempt,
      today: {
        score: run?.score ?? null,
        rank: ranked?.rank ?? null,
        tied: ranked?.tied ?? false,
        total: counts.total,
        percentile: ranked ? modelPercentile(run.score, model) : null,
        comparisonSource: model.source,
        model,
        final: isFrozen(boardId, now),
        eligible: Boolean(run) || boardId === daily(),
        distribution,
      },
      history,
      nextCursor: rows.length > 20 ? rows[19].board_id : null,
    });
  } catch (error) {
    logUnexpected("GET", error);
    return runResponse({ error: "Could not load ranked results." }, 500);
  }
}
