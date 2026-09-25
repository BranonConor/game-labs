import { readFileSync } from "node:fs";
import nextEnv from "@next/env";
import { neon } from "@neondatabase/serverless";

const { loadEnvConfig } = nextEnv;
loadEnvConfig(process.cwd());

if (!process.env.DATABASE_URL) {
  if (process.env.VERCEL_ENV === "production") {
    console.error("DATABASE_URL is required for production run storage.");
    process.exitCode = 1;
  } else {
    console.warn("DATABASE_URL is not set; run sync will be unavailable in this build.");
  }
} else {
  try {
    const sql = neon(process.env.DATABASE_URL);
    await sql.query(readFileSync(new URL("./schema.sql", import.meta.url), "utf8"));
    console.log("Scramb run storage schema is ready.");
  } catch (error) {
    console.error("Could not prepare Scramb run storage:", error.message.replace(/postgres(?:ql)?:\/\/\S+/g, "[redacted connection URL]"));
    process.exitCode = 1;
  }
}
