import NextAuthPackage from "next-auth";
import GoogleProviderPackage from "next-auth/providers/google";

const NextAuth = NextAuthPackage.default ?? NextAuthPackage;
const GoogleProvider = GoogleProviderPackage.default ?? GoogleProviderPackage;

const configured = Boolean(
  process.env.GOOGLE_CLIENT_ID &&
  process.env.GOOGLE_CLIENT_SECRET &&
  process.env.NEXTAUTH_SECRET
);

const handler = configured
  ? NextAuth({
      providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
      ],
      secret: process.env.NEXTAUTH_SECRET,
      session: { strategy: "jwt" },
      pages: { error: "/" },
    })
  : () => Response.json(
      { error: "Google sign-in is not configured on this server." },
      { status: 503 }
    );

export { handler as GET, handler as POST };
