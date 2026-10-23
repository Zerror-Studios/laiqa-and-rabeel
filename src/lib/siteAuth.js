// Site-wide password gate. Override the password with the SITE_PASSWORD env var.
const SITE_PASSWORD = (process.env.SITE_PASSWORD || "Morocco").trim().toLowerCase();

export const AUTH_COOKIE = "site_auth";

// Case-insensitive so guests on phones aren't tripped up by auto-capitalisation.
export function isCorrectPassword(input) {
  return typeof input === "string" && input.trim().toLowerCase() === SITE_PASSWORD;
}

// Cookie value is a hash of the password, so changing the password logs everyone out.
export async function getAuthToken() {
  const data = new TextEncoder().encode(`laiqa-and-rabeel:${SITE_PASSWORD}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, "0")).join("");
}

// Only allow same-site relative paths, to avoid open redirects.
export function safeNextPath(next) {
  if (typeof next !== "string" || !next.startsWith("/") || next.startsWith("//") || next.startsWith("/\\")) {
    return "/";
  }
  return next;
}
