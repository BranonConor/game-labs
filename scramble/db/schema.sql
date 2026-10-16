CREATE TABLE IF NOT EXISTS game_runs (
  user_id text NOT NULL,
  board_id text NOT NULL,
  state jsonb NOT NULL,
  updated_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, board_id)
);

-- Ranked attempts are independent of untrusted, syncable game_runs snapshots.
CREATE TABLE IF NOT EXISTS ranked_runs (
  user_id text NOT NULL,
  board_id date NOT NULL,
  started_at timestamptz NOT NULL DEFAULT clock_timestamp(),
  sequence integer NOT NULL DEFAULT 0 CHECK (sequence >= 0),
  played jsonb NOT NULL DEFAULT '{}'::jsonb,
  moves jsonb NOT NULL DEFAULT '[]'::jsonb,
  score integer NOT NULL DEFAULT 0 CHECK (score >= 0),
  finished_at timestamptz,
  ended_reason text,
  PRIMARY KEY (user_id, board_id)
);

CREATE INDEX IF NOT EXISTS ranked_runs_board_score_idx ON ranked_runs (board_id, score);

CREATE TABLE IF NOT EXISTS leaderboard_profiles (
  user_id text PRIMARY KEY,
  display_name text NOT NULL
);

-- Persist server-authoritative active time across navigation and device changes.
ALTER TABLE ranked_runs ADD COLUMN IF NOT EXISTS deadline_at timestamptz;
ALTER TABLE ranked_runs ADD COLUMN IF NOT EXISTS paused_at timestamptz;
UPDATE ranked_runs SET deadline_at = started_at + interval '4 minutes' WHERE deadline_at IS NULL;
ALTER TABLE ranked_runs ALTER COLUMN deadline_at SET DEFAULT (clock_timestamp() + interval '4 minutes');
ALTER TABLE ranked_runs ALTER COLUMN deadline_at SET NOT NULL;
