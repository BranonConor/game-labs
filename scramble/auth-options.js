import GoogleProviderPackage from "next-auth/providers/google";
import { neon } from "@neondatabase/serverless";
import { publicPlayerName } from "./leaderboard.js";

const GoogleProvider = GoogleProviderPackage.default ?? GoogleProviderPackage;
const ADMIN_EMAIL = "branoneusebio@gmail.com";

export const authConfigured = Boolean(
  process.env.GOOGLE_CLIENT_ID &&
  process.env.GOOGLE_CLIENT_SECRET &&
  process.env.NEXTAUTH_SECRET
);

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  pages: { error: "/" },
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account?.provider === "google" && token.sub) {
        if (!process.env.DATABASE_URL) throw new Error("Leaderboard profile storage is not configured.");
        const displayName = publicPlayerName(profile);
        const sql = neon(process.env.DATABASE_URL);
        await sql`
          INSERT INTO leaderboard_profiles (user_id, display_name) VALUES (${token.sub}, ${displayName})
          ON CONFLICT (user_id) DO UPDATE SET display_name = EXCLUDED.display_name
        `;
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.sub;
      session.user.isAdmin = Boolean(token.sub && token.email?.toLowerCase() === ADMIN_EMAIL);
      return session;
    },
  },
};
