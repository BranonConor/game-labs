import NextAuthPackage from "next-auth";
import { authConfigured, authOptions } from "../../../../auth-options";

const NextAuth = NextAuthPackage.default ?? NextAuthPackage;

const handler = authConfigured
  ? NextAuth(authOptions)
  : () => Response.json(
      { error: "Google sign-in is not configured on this server." },
      { status: 503 }
    );

export { handler as GET, handler as POST };
