# Scramb

This is a Next.js App Router application. From this directory, run `npm ci` and
`npm run dev`, then open `http://127.0.0.1:3000`. If a registry proxy cannot
fetch a package, use `npm ci --registry=https://registry.npmjs.org/`.

The board, local run storage, keyboard/touch controls, dialogs, and animations
retain their original behavior. The page markup lives in `app/game.jsx`; the
existing game controller is initialized on the client from `app.js`. Images and
the word list are served from `public/`. Runs are still local to this browser:
there is not yet a shared database, score API, or server-side score validation.

## Google sign-in

Guest play works without OAuth configuration; the menu disables Google
sign-in until the server is configured.

1. Create a Google OAuth web client. Add
   `http://127.0.0.1:3000/api/auth/callback/google` as an authorized redirect
   URI for local development, and your deployed hostname's equivalent for
   production. If you use `localhost` rather than `127.0.0.1`, configure that
   hostname and matching callback URL as well.
2. Copy `.env.example` to `.env.local`. Set `GOOGLE_CLIENT_ID`,
   `GOOGLE_CLIENT_SECRET`, and a random `NEXTAUTH_SECRET`. Keep the client
   secret and auth secret private; never put them in `NEXT_PUBLIC_` variables.
   Set `NEXTAUTH_URL` to the origin used for local development.
3. Restart the dev server. On Vercel, set the project's root directory to
   `scramble`, select Next.js, set the same credentials and secret in the
   project's environment settings, and configure the deployed callback URI.
   Set `NEXTAUTH_URL` to the production origin when required by your hosting
   configuration.

NextAuth.js handles Google sign-in and sessions. Signing in does **not** yet
sync scores between devices; future API routes must verify sessions and
validate game submissions before persisting them.
