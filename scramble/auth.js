import { getSession, signIn, signOut } from "next-auth/react";

export function googleAuthError(error, action = "sign-in") {
  console.error(`Google ${action} failed:`, error);
  return `Google ${action} failed. Check the browser console and try again.`;
}

export function createGoogleAuth(onChange, onError, configured) {
  if (!configured) return null;

  getSession().then((session) => onChange(session?.user ?? null), onError);

  function returnUrl() {
    const url = new URL(window.location.href);
    url.searchParams.delete("error");
    return url.toString();
  }

  return {
    signIn() {
      return signIn("google", { callbackUrl: returnUrl() });
    },
    async signOut() {
      const result = await signOut({ callbackUrl: returnUrl(), redirect: false });
      if (!result?.url) throw new Error("The sign-out request did not complete.");
      const session = await getSession();
      if (session?.user) throw new Error("The Google session is still active.");
      onChange(null);
    },
  };
}
