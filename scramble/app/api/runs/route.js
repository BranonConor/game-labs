import { runContext, runResponse } from "../../../run-db";

export const runtime = "nodejs";

export async function GET() {
  const context = await runContext();
  if (context.error) return context.error;
  const { sql, userId } = context;
  try {
    const runs = await sql`
      SELECT board_id, (state->>'score')::integer AS score,
        jsonb_array_length(state->'words') AS words
      FROM game_runs
      WHERE user_id = ${userId}
        AND board_id ~ '^[0-9]{4}-[0-9]{2}-[0-9]{2}$'
        AND state->>'finished' = 'true'
      ORDER BY board_id DESC
      LIMIT 8
    `;
    return runResponse({ runs });
  } catch (error) {
    console.error("Could not load recent runs:", error);
    return runResponse({ error: "Could not load recent results." }, 500);
  }
}
