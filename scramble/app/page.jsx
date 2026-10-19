import { getServerSession } from "next-auth";
import Game from "./game";
import { authConfigured, authOptions } from "../auth-options";

export const dynamic = "force-dynamic";

export default async function Page({ searchParams }) {
  const practiceMode = (await searchParams)?.practice === "1";
  const session = authConfigured ? await getServerSession(authOptions) : null;
  return <Game practiceMode={practiceMode} authConfigured={authConfigured} adminTools={session?.user?.isAdmin === true} />;
}
