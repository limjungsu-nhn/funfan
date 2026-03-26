import { auth } from "~/server/auth";

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const isLoggedIn = !!req.auth;

  // 공개 경로
  const publicPaths = ["/auth/login", "/auth/signup", "/auth/error"];
  if (publicPaths.some((p) => pathname.startsWith(p))) return;

  // 보호 경로 — 미로그인 시 로그인으로
  if (!isLoggedIn) {
    const loginUrl = new URL("/auth/login", req.nextUrl.origin);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return Response.redirect(loginUrl);
  }
});

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
  ],
};
