import { readFileSync } from 'node:fs';
import { parseEnv } from 'node:util';
import { neon } from '@neondatabase/serverless';
import { utcDailyBoardId } from '../ranked-board.js';

if (process.env.NODE_ENV === 'production' || process.env.VERCEL_ENV === 'production') throw new Error('Development seed only.');
// Read only the local development file, never an inherited production URL.
const env = parseEnv(readFileSync(new URL('../.env.local', import.meta.url), 'utf8'));
if (!env.DATABASE_URL) throw new Error('Set DATABASE_URL in .env.local.');
const sql = neon(env.DATABASE_URL);
const prefix = 'scramb-dev-seed-v1:';
if (process.argv.includes('--clear')) {
  await sql.transaction([
    sql`DELETE FROM ranked_runs WHERE left(user_id, ${prefix.length}) = ${prefix}`,
    sql`DELETE FROM game_runs WHERE left(user_id, ${prefix.length}) = ${prefix}`,
    sql`DELETE FROM leaderboard_profiles WHERE left(user_id, ${prefix.length}) = ${prefix}`,
  ]);
  console.log('Removed only Scramb development seed records.');
} else {
  let seed = 90217;
  const random = () => { seed = Math.imul(seed, 1664525) + 1013904223 | 0; return ((seed >>> 0) + 1) / 4294967297; };
  const normal = () => Math.sqrt(-2*Math.log(random()))*Math.cos(2*Math.PI*random());
  const today = utcDailyBoardId();
  const profiles = Array.from({length:64}, (_, i) => ({
    user_id: prefix + String(i+1).padStart(3,'0'),
    display_name: `${'ABCEFGHJKLMNPRSTW'[i%17]}.${'EKLNRSTW'[Math.floor(i/8)%8]}.`,
  }));
  const runs=[];
  profiles.forEach((profile,i) => {
    const ability=normal()*34;
    for(let ago=0;ago<18;ago++) {
      if (ago && random()<.2) continue;
      const date=new Date(`${today}T00:00:00Z`);date.setUTCDate(date.getUTCDate()-ago);
      const board_id=date.toISOString().slice(0,10);
      const score=Math.max(20,Math.min(405,Math.round((176+ability+normal()*48+Math.sin(ago)*15)/5)*5));
      runs.push({user_id:profile.user_id,board_id,score,started_at:`${board_id}T00:00:01Z`,finished_at:`${board_id}T00:04:01Z`});
    }
  });
  await sql.transaction([
    sql`INSERT INTO leaderboard_profiles (user_id, display_name)
      SELECT user_id,display_name FROM jsonb_to_recordset(${JSON.stringify(profiles)}::jsonb) AS p(user_id text,display_name text)
      ON CONFLICT(user_id) DO UPDATE SET display_name=EXCLUDED.display_name`,
    sql`INSERT INTO ranked_runs (user_id,board_id,score,started_at,deadline_at,finished_at,ended_reason)
      SELECT user_id,board_id,score,started_at,finished_at,finished_at,'time'
      FROM jsonb_to_recordset(${JSON.stringify(runs)}::jsonb)
        AS r(user_id text,board_id date,score integer,started_at timestamptz,finished_at timestamptz)
      ON CONFLICT(user_id,board_id) DO UPDATE SET score=EXCLUDED.score,finished_at=EXCLUDED.finished_at,paused_at=NULL`,
  ]);
  console.log(`Seeded ${profiles.length} sample players and ${runs.length} daily scores across 18 days, including ${today}.`);
  console.log('No existing player records were modified. Remove fixtures with npm run seed:clear.');
}
