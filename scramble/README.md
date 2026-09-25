# Scramb

This is a Next.js App Router application. From this directory, run `npm ci` and
`npm run dev`, then open `http://127.0.0.1:3000`. If a registry proxy cannot
fetch a package, use `npm ci --registry=https://registry.npmjs.org/`.

The page markup lives in `app/game.jsx`; the existing game
controller is initialized on the client from `app.js`. Images and the word list
are served from `public/`.
The start screen offers an animated tutorial demonstrating three legal words on the
current grid without starting the clock; the
header help button reopens it during play. Reduced-motion users can step
through it manually. The last step closes with Got It; the tutorial also
links to the full written recipe. Copy Result shares the score, run stats, and
up to three highest-scoring words without including a tile diagram.
The footer includes Terms of Use and Privacy Policy links that open
scrollable dialogs alongside the existing game rules dialog.

## Google sign-in

The account row in the menu starts Google sign-in for guests and opens the
profile for signed-in players. Sign-out is at the bottom of the profile. Guest
play remains available, and a missing server configuration is shown as an error
rather than offering a nonfunctional sign-in button.

1. Create a Google OAuth web client. Add
   `http://127.0.0.1:3000/api/auth/callback/google` as an authorized redirect
   URI for local development, and your deployed hostname's equivalent for
   production. If you use `localhost` rather than `127.0.0.1`, configure that
   hostname and matching callback URL as well.
2. Copy `.env.example` to `.env.local`. Set `GOOGLE_CLIENT_ID`,
   `GOOGLE_CLIENT_SECRET`, and a random `NEXTAUTH_SECRET`. Keep the client
   secret and auth secret private; never put them in `NEXT_PUBLIC_` variables.
   Set `NEXTAUTH_URL` to the origin used for local development. In Google Auth
   Platform's Audience settings, add test users if the app is in testing mode.
3. Restart the dev server. On Vercel, set the project's root directory to
   `scramble`, select Next.js, set the same credentials and secret in the
   project's environment settings, and configure the deployed callback URI.
   Set `NEXTAUTH_URL` to the production origin when required by your hosting
   configuration.

NextAuth.js handles Google sign-in and sessions. The profile displays the
Google name, email, and picture when signed in, plus today's score and word
count. Signing out switches back to the guest run. The development footer
controls are shown only to the designated Google admin account; other players
cannot see or activate them.

## Run storage

Use separate Neon projects for development and production. Copy each project's
**pooled** connection string into `DATABASE_URL` in the appropriate environment:
the gitignored `scramble/.env.local` for development and the Vercel project's
environment settings for production. The build script runs the idempotent
`db/schema.sql` migration against that environment's database automatically.
`vercel.json` ensures Vercel uses `npm run build` rather than bypassing the
migration with `next build`. Never expose the connection string to the browser or commit it.
Restart the local server or redeploy Vercel after changing variables.
Production builds fail when `DATABASE_URL` is missing; local and preview builds
warn and allow guest play, but signed-in run sync requires a database there too.

Signed-in runs (in progress and completed) are stored by Google account and
board in Neon and loaded on another device. Guest runs remain in browser
storage; when signing in for the first time, an existing guest run is imported
if the account has no saved run for that board. The most recent successful
server write wins if two devices edit the same board. Failed saves remain
cached locally and are retried on the next save or sign-in. Saved snapshots
are user-provided and **not validated as authoritative scores**; do not use
them for public leaderboards without server-side move and scoring validation.

## Isolated ranked runs

Ranked play is a separate, server-authoritative API, independent of untrusted
saved snapshots. Guests and practice/seed boards cannot enter ranked results. A signed-in
account gets exactly one attempt per UTC date, including attempts abandoned
without pressing Finish. `ranked_runs` stores the first server start timestamp,
server-verified moves and score, and one row per account and daily board. The
four-minute clock starts on the server; only words arriving before its deadline
can score. Results for a UTC board freeze four minutes after that day ends.

`POST /api/ranked` accepts JSON:

- `{ "action": "start", "boardId": "YYYY-MM-DD" }` starts today's UTC board
  or returns the existing attempt. Response includes top-level `boardId`,
  `startedAt`, `deadline`, `endedAt`, `score`, `sequence`, `moves`, `played`,
  and `finished` for recovery on another device. Each move includes `path`,
  `letters` (newly typed letters), `word`, `points`, and a deterministic
  cosmetic `color`.
- `{ "action": "word", "boardId": "YYYY-MM-DD", "sequence": 0,
  "path": [0, 1, 2, 3], "letters": "ABC" }` submits the uppercase letters for
  *only the empty tiles* in path order. `sequence` is the current run's
  sequence, not the next value. Response includes `score`, `sequence`,
  `finished`, `endedAt`, and the verified `move`.
- `{ "action": "finish", "boardId": "YYYY-MM-DD" }`
  ends the attempt early (or returns the already-completed score).
  Response includes `score`, `finished: true`, `sequence`, and `endedAt`.

The start response and GET `run` also include `completed` and `endedReason`.
Each successful word increments `sequence`; retrying a stale word gets HTTP
409 rather than scoring twice. Finish is atomic and idempotent without a
sequence. Invalid words return 422; words after timeout return 410. All
other failures have non-2xx status and an `error`, never a success-shaped
fallback. The server independently regenerates the daily board, validates
adjacent unclaimed tiles and dictionary membership against
`public/lexicon.txt`, then computes tile values, effects, bonuses, and a
full-board award. Client-supplied scores, timers, and snapshots are ignored.

`GET /api/ranked?boardId=YYYY-MM-DD&cursor=YYYY-MM-DD` returns
`{ "today": ..., "attempt": ..., "run": ..., "history": [...], "nextCursor": ... }`.
Both query parameters are optional: `boardId` defaults to today's UTC board;
history contains only completed results strictly before `boardId` (past grids).
`cursor` is an additional exclusive date for paging, newest first, 20
per page. `today` has `score` (null without an attempt), `rank` (null until
completed), `tied`, `total`, `percentile`, `final` (the comparison is frozen),
`eligible`, and `distribution`; `attempt` has the authoritative `boardId`,
`startedAt`, `deadline`, `score`, `sequence`, `moves`, `played`, `spentEffects`,
`fullBoardBonusAwarded`, `endedAt`, `finished`, and `endedReason`, or is null
if no ranked attempt exists. `run` is an alias of `attempt` for clients using
the initial API. Signed-in ranked clients must hydrate from `attempt`, never
overwrite it with a `game_runs` client snapshot. Timestamps are ISO strings.
`distribution` always contains ten `{score, count}` buckets for completed
attempts: score boundaries 0, 50, …, 400 represent 50-point ranges, and
450 represents all scores of 450 or higher. History entries have `boardId`,
`score`, `rank`, `tied`, `total`, `percentile`, and `final`. Rank is
competition-style (ties share a rank); percentile is the empirical midpoint
of tied scores (percentage of lower scores plus half of tied scores).
Percentile is null until at least 30 completed/expired attempts exist for the
board. Before freeze, comparison values may change as more attempts complete;
the verified raw score does not. Responses never contain other players' IDs.
These checks validate game rules, not the human origin of requests; deployment
should also apply abuse/rate limits appropriate to its traffic.
The Scores menu widens on that page and shows a live daily comparison and
paginated past results. One ranked row per signed-in player and UTC board is
kept rather than a new row for every score update. Saved results from before
ranked verification began are not retrospectively ranked. If move histories
eventually outgrow the database budget, an archival policy can remove old move
details after a review window while retaining dates and final scores.

## Analytics

Google Analytics tag `G-VKX4FBTEML` loads on production pages only, so local
development visits do not appear in analytics.
