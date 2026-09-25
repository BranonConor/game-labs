import GoogleProviderPackage from "next-auth/providers/google";

const GoogleProvider = GoogleProviderPackage.default ?? GoogleProviderPackage;

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
    session({ session, token }) {
      session.user.id = token.sub;
      return session;
    },
  },
};
