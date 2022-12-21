// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const { cookies } = request;

  const jwt = cookies.get("smartToken");

  if (
    request.nextUrl.pathname.includes("/signin") ||
    request.nextUrl.pathname.includes("/register")
  ) {
    if (jwt) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    if (!jwt) {
      return NextResponse.redirect(new URL("/auth/signin", request.url));
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard/:path*", "/auth/signin", "/auth/register"],
};
