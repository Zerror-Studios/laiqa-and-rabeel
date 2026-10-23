import { NextResponse } from "next/server";
import { AUTH_COOKIE, getAuthToken } from "@/lib/siteAuth";

export async function proxy(request) {
  const { pathname, search } = request.nextUrl;

  if (pathname === "/password") {
    return NextResponse.next();
  }

  // Every full page load (reload, typed URL, new tab) asks for the password again.
  // The unlock cookie only covers in-site navigation (Next's client-side fetches) and files
  // such as images and the PDF. Next strips its `rsc` header before the proxy runs, so page
  // loads are detected from the browser's Sec-Fetch-Mode (or Accept, for older browsers).
  const isFile = /\.[^/]+$/.test(pathname);
  const fetchMode = request.headers.get("sec-fetch-mode");
  const isPageLoad =
    !isFile && (fetchMode ? fetchMode === "navigate" : (request.headers.get("accept") || "").includes("text/html"));
  const isUnlocked = request.cookies.get(AUTH_COOKIE)?.value === (await getAuthToken());

  if (isUnlocked && !isPageLoad) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/password";
  url.search = "";
  if (pathname !== "/") {
    url.searchParams.set("next", pathname + search);
  }
  return NextResponse.redirect(url);
}

export const config = {
  // Everything is gated except Next's build assets and what the password page itself needs.
  matcher: ["/((?!_next/static|_next/image|favicon.ico|fonts/|icon/|svgs/).*)"],
};
