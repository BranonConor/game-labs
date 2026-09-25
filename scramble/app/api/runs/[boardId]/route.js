import { runContext, runResponse } from "../../../../run-db";
import { validBoardId, validRunState } from "../../../../run-state";

export const runtime = "nodejs";

export async function GET(request, { params }) {
  const context = await runContext();
  if (context.error) return context.error;
  const { boardId } = await params;
  if (!validBoardId(boardId)) return runResponse({ error: "Invalid board ID." }, 400);
  const { sql, userId } = context;
  try {
    const [run] = await sql`SELECT state FROM game_runs WHERE user_id = ${userId} AND board_id = ${boardId}`;
    return runResponse({ state: run?.state ?? null });
  } catch (error) {
    console.error("Could not load run:", error);
    return runResponse({ error: "Could not load your saved run." }, 500);
  }
}

export async function PUT(request, { params }) {
  const context = await runContext();
  if (context.error) return context.error;
  const { boardId } = await params;
  if (!validBoardId(boardId)) return runResponse({ error: "Invalid board ID." }, 400);
  const { sql, userId } = context;
  let input;
  try {
    const text = await request.text();
    if (text.length > 20000) return runResponse({ error: "Run is too large." }, 413);
    input = JSON.parse(text);
  } catch (error) {
    return runResponse({ error: "Invalid run data." }, 400);
  }
  if (!input || !validRunState(input.state)) {
    return runResponse({ error: "Invalid run data." }, 400);
  }
  try {
    await sql`
      INSERT INTO game_runs (user_id, board_id, state)
      VALUES (${userId}, ${boardId}, ${JSON.stringify(input.state)}::jsonb)
      ON CONFLICT (user_id, board_id) DO UPDATE
      SET state = EXCLUDED.state, updated_at = now()
    `;
    return runResponse({ saved: true });
  } catch (error) {
    console.error("Could not save run:", error);
    return runResponse({ error: "Could not save your run." }, 500);
  }
}
