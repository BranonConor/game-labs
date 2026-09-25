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
