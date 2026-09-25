# Scramb

This is a Next.js App Router application. From this directory, run `npm ci` and
`npm run dev`, then open `http://127.0.0.1:3000`. If a registry proxy cannot
fetch a package, use `npm ci --registry=https://registry.npmjs.org/`.

The board, keyboard/touch controls, dialogs, and animations retain their
original behavior. The page markup lives in `app/game.jsx`; the existing game
controller is initialized on the client from `app.js`. Images and the word list
are served from `public/`.

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
count. Signing out switches back to the guest run.

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

## Analytics

Google Analytics tag `G-VKX4FBTEML` loads on production pages only, so local
development visits do not appear in analytics.
