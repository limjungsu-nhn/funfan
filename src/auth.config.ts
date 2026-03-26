import { type NextAuthConfig } from "next-auth";

// Edge runtime 호환 config (bcryptjs 등 Node.js 전용 모듈 없음)
export const authConfig = {
  providers: [],
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const publicPaths = ["/auth/login", "/auth/signup", "/auth/error"];
      if (publicPaths.some((p) => nextUrl.pathname.startsWith(p))) return true;
      if (!isLoggedIn) {
        return Response.redirect(
          new URL(
            `/auth/login?callbackUrl=${encodeURIComponent(nextUrl.pathname)}`,
            nextUrl,
          ),
        );
      }
      return true;
    },
  },
} satisfies NextAuthConfig;
