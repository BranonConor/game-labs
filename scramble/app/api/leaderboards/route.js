import { scoreLandscape } from "../../../score-landscape";
import { leaderboardFor, leaderboardRequest } from "../../../leaderboard";
import { runResponse } from "../../../run-db";
import { getServerSession } from "next-auth";
import { neon } from "@neondatabase/serverless";
import { authConfigured, authOptions } from "../../../auth-options";

export const runtime = "nodejs";

export async function GET(request) {
  const options = leaderboardRequest(new URL(request.url).searchParams);
  if (!options) return runResponse({ error: "Invalid leaderboard or page." }, 400);
  if (!process.env.DATABASE_URL) return runResponse({ error: "Leaderboard storage is not configured." }, 503);
  try {
    const session = authConfigured ? await getServerSession(authOptions) : null;
    const sql = neon(process.env.DATABASE_URL);
    const result = await leaderboardFor(sql, session?.user?.id ?? null, options.kind, options.page, options.offset);
    if (options.kind === "daily") result.landscape = await scoreLandscape(sql, result.boardId);
    return runResponse(result);
  } catch (error) {
    const code = ["42P01", "42703", "ECONNREFUSED", "ETIMEDOUT"].includes(error?.code) ? error.code : "unknown";
    console.error(`Leaderboard GET failed (${code}); exception details withheld.`);
    return runResponse({ error: "Could not load leaderboard." }, 500);
  }
}
