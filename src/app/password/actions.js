"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AUTH_COOKIE, getAuthToken, isCorrectPassword, safeNextPath } from "@/lib/siteAuth";

export async function unlock(prevState, formData) {
  if (!isCorrectPassword(formData.get("password"))) {
    return { error: "That password isn't quite right. Please try again." };
  }

  const cookieStore = await cookies();
  // Session cookie (no maxAge): it only unlocks in-site navigation, and is gone when the browser closes.
  // Reloads still ask for the password, see src/proxy.js.
  cookieStore.set(AUTH_COOKIE, await getAuthToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });

  redirect(safeNextPath(formData.get("next")));
}
