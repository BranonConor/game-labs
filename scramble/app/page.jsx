import Game from "./game";

export const dynamic = "force-dynamic";

export default function Page() {
  const authConfigured = Boolean(
    process.env.GOOGLE_CLIENT_ID &&
    process.env.GOOGLE_CLIENT_SECRET &&
    process.env.NEXTAUTH_SECRET
  );
  return <Game authConfigured={authConfigured} />;
}
