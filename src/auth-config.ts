import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  providers: [],
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isPublicRoute = nextUrl.pathname === "/auth/login";

      if (isPublicRoute) return true;

      return isLoggedIn;
    },
  },
} satisfies NextAuthConfig;
