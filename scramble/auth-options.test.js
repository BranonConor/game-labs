import assert from "node:assert/strict";
import test from "node:test";
import { authOptions } from "./auth-options.js";

test("only the designated Google account has admin footer access", () => {
  const sessionFor = (email, sub) =>
    authOptions.callbacks.session({ session: { user: {} }, token: { email, sub } }).user;

  assert.equal(sessionFor("branoneusebio@gmail.com", "google-account").isAdmin, true);
  assert.equal(sessionFor("Branoneusebio@Gmail.com", "google-account").isAdmin, true);
  assert.equal(sessionFor("other@gmail.com", "another-account").isAdmin, false);
  assert.equal(sessionFor("branoneusebio@gmail.com", undefined).isAdmin, false);
});
