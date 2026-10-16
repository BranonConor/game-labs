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
The header numbers canonical UTC daily puzzles starting with #1 on
September 25, 2026; older boards have no puzzle number. Practice and
unranked runs use the same day's board number without becoming ranked attempts.

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
Google name, email, and picture when signed in, plus all-time points and words
from completed daily boards. Ranked attempts take precedence over saved
snapshots for the same board; older completed snapshots still count. The recent
results list remains limited to eight saved daily runs. Signing out switches
back to the guest run. The development footer
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
four-minute active-play clock starts on the server; only words arriving before its deadline
can score. Leaving the tab, navigating away, or opening the menu pauses play and covers the grid.
A deliberate Resume restores the remaining time. `pause` and `resume` actions are idempotent;
only the server extends `deadline_at`, and paused runs cannot submit words.
Guest pause state is saved locally. Pause delivery requires connectivity; an abrupt crash
without a lifecycle event cannot notify the server. Results for a UTC board freeze four minutes after that day ends.

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
`{ "boardId": ..., "today": ..., "attempt": ..., "run": ..., "history": [...], "nextCursor": ... }`.
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
competition-style (ties share a rank). Percentiles are modeled from a normal distribution
truncated at zero, available from the first completed attempt. `comparisonSource` is
`projected` below 30 completions and `adjusted` thereafter. `model` includes the mean,
standard deviation, actual sample size, and observed weight. It creates no fake runs.
The bootstrap prior is 160 ± 70 points, adjusted (within ±20%) for the board's fixed
letters, rare-letter constraints, and access to bonuses. Once 30 earlier completed
runs exist, their mean and deviation replace those bootstrap constants. These are
heuristics, not a calibrated human solver or measured early player population.
Today's exact mean and variance contribute weight n/(n+30), continuously through
30 completions. Variance includes between-group mean differences. Historical pages
use only earlier-board data for their priors. The prior remains worth 30 observations;
with large samples the fitted normal curve is dominated by actual scores. The fit
is approximate when the real scores are skewed. Raw points and actual leaderboard
ranks always come from verified runs. Before freeze, comparison values may change as more attempts complete;
the verified raw score does not. Responses never contain other players' IDs.
These checks validate game rules, not the human origin of requests; deployment
should also apply abuse/rate limits appropriate to its traffic.
The Scores menu widens on that page and shows a live daily comparison and
paginated past results. One ranked row per signed-in player and UTC board is
kept rather than a new row for every score update. Saved results from before
ranked verification began are not retrospectively ranked. If move histories
eventually outgrow the database budget, an archival policy can remove old move
details after a review window while retaining dates and final scores.

The final result card links directly to Scores and, for a verified daily run,
shows today's live rank out of completed players, score curve, and the same
modeled percentile as Scores. The curve marks your score and the expected average;
small columns show only real completions. Loading regions reserve space with skeletons. Scores also includes
two 20-row, server-paginated leaderboards: today's UTC puzzle and all-time
verified points. Both use competition ranking (equal points share a rank),
with account ID as an internal deterministic ordering key within ties; that
ID is never returned. All-time `played` counts distinct daily boards (one
ranked row per account and board), and `average` is total verified points
divided by played boards. Expired runs count even when the player never pressed
Finish. The daily leaderboard always queries the current UTC date and resets
to page one at rollover. Guests can read leaderboards but have no current-user
context; personalized comparisons and past grids require sign-in.

`GET /api/leaderboards?kind=daily|allTime&page=1` responds with
`{ kind, boardId, page, pageSize, total, entries, current }`; daily `boardId`
is its UTC date and all-time `boardId` is null. Entries contain `rank`,
`name`, `points`, `mine`, and for all-time `played` and `average`.
`current` contains those metrics except `mine`, or null if the signed-in
player has no completed ranked attempt. No other player's account ID, full
name, email, words, or Google handle is returned. Google structured given
and family name fields are converted at sign-in to first and last initials (e.g. B.E.).
Legacy stored display names are reduced to initials at the API boundary. Existing
sessions with a usable Google name fill missing `Player` profiles with initials on
the next authenticated request. Accounts never seen again retain `Player`; no name
is guessed from an email, handle, or account ID.

A guest can sign in from the finished result card to sync that completed run
to their private profile (provided the account has no saved run for that
board). It does **not** become a ranked attempt: guest moves and timing were
not verified by the server, and an existing account run is not overwritten
by a guest result. Sign in before starting a daily board to earn a public
ranking. Practice/seed runs have a direct link back to the daily puzzle in
the footer and on the result card; they never enter rankings.

## Analytics

Google Analytics tag `G-VKX4FBTEML` loads on production pages only, so local
development visits do not appear in analytics.

## Local score design preview

In development, `/preview/scores` shows clearly labeled sample data with controls
for player count and score, using the same model and chart as Scores. It writes
nothing to the database and returns 404 in production. Run `node --test *.test.js`
from this directory for the scoring, timer, leaderboard, and game regression tests.
Run `node db/migrate.mjs` against your development database before using the new
pause API locally. Production builds apply the idempotent migration automatically.

The side menu and Score Kitchen share `app/scores-ui.jsx` for the score card and
leaderboard tables. The score spread appears only after the puzzle is complete. Guests can compare
a completed local daily score using public aggregate data without entering the
verified leaderboard. Points and percentile sit side by side above the same
Silkscreen curve and pixel egg marker in Scores and the game’s final plate.
Normalization labels and participant counts are omitted from the score display.
Copy confirms on the button with a green check for three seconds; the result
announcement remains available to screen readers without a visible banner.

## Development score fixtures

Run `npm run seed:dev` to populate the database from `.env.local` with 64 sample
players and 18 days of scores. The fixtures use only `scramb-dev-seed-v1:` account
IDs and never replace real accounts' records. They are synthetic display data,
not human attempts. Re-running updates those fixtures. `npm run seed:clear`
removes only that namespace. Both commands reject production process environments
and read `.env.local` directly rather than an inherited database URL. Keep that
file pointed at the development Neon branch.
