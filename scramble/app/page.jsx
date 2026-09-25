import Game from "./game";
import { authConfigured } from "../auth-options";

export const dynamic = "force-dynamic";

export default function Page() {
  return <Game authConfigured={authConfigured} />;
}
