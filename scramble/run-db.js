import { getServerSession } from "next-auth";
import { neon } from "@neondatabase/serverless";
import { authConfigured, authOptions } from "./auth-options";

export function runResponse(body, status = 200) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

export async function runContext() {
  if (!authConfigured) return { error: runResponse({ error: "Authentication is not configured." }, 503) };
  if (!process.env.DATABASE_URL) return { error: runResponse({ error: "Run storage is not configured." }, 503) };
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return { error: runResponse({ error: "Sign in to sync your run." }, 401) };
  return { sql: neon(process.env.DATABASE_URL), userId: session.user.id };
}
