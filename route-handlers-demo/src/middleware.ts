import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  //   return NextResponse.redirect(new URL("/", request.url));

  if (request.nextUrl.pathname === "/profile") {
    // return NextResponse.redirect(new URL("/hello", request.nextUrl));
    return NextResponse.rewrite(new URL("/hello", request.nextUrl));
  }

  //   Set cookies
  const response = NextResponse.next();
  const themePreference = request.cookies.get("theme");

  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }

  //   set header
  response.headers.set("custom-header", "custom-value");
}

// export const config = {
//   matcher: "/profile",
// };
