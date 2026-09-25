CREATE TABLE IF NOT EXISTS game_runs (
  user_id text NOT NULL,
  board_id text NOT NULL,
  state jsonb NOT NULL,
  updated_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, board_id)
);
