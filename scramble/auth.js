import { getSession, signIn, signOut } from "next-auth/react";

export function googleAuthError(error) {
  console.error("Google sign-in failed:", error);
  return "Google sign-in failed. Check the browser console and OAuth setup, then try again.";
}

export function createGoogleAuth(onChange, onError, configured) {
  if (!configured) return null;

  getSession().then((session) => onChange(session?.user ?? null), onError);

  return {
    signIn() {
      return signIn("google", { callbackUrl: window.location.href });
    },
    signOut() {
      return signOut({ callbackUrl: window.location.href });
    },
  };
}
