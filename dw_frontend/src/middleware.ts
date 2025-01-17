import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";

export const config = {
  matcher: [
    // Process all paths except for static assets and public routes
    "/((?!_next/static|_next/image|favicon.ico|images/).*)",
  ],
};

export async function middleware(request: NextRequest) {
  const session = await auth();

  const publicPaths = [
    "/login",
  ];

  // get the current pathname
  const currentPath = request.nextUrl.pathname;
  const basePath = `/${currentPath.split("/")[1]}`;

  // Allow public paths
  if (publicPaths.includes(basePath)) {
    return NextResponse.next();
  }

  const userSession = session?.account;
  const accessToken = session?.accessToken;

  // Check if user is authenticated
  if (!userSession || !accessToken) {
    return handleRedirectToLogin(request);
  }

  try {
    // check if accessToken is expired
    const decodedAccessToken = jwtDecode(accessToken);

    if (isTokenExpire(decodedAccessToken.exp)) {
      return handleRedirectToLogin(request);
    }

    // Allow access if all checks pass
    return NextResponse.next();
  } catch (error) {
    console.error(error);
    return handleRedirectToLogin(request);
  }
}

function isTokenExpire(jwtExp?: number) {
  const THREE_HOURS_IN_MS = 3 * 60 * 60 * 1000; // 3 hours in milliseconds
  // check expiredDate
  if (jwtExp) {
    // exp is in seconds, multiply it by 1000 to convert to milliseconds
    // for comparison with Date.now()
    const adjustedExp = jwtExp * 1000 - THREE_HOURS_IN_MS;
    return adjustedExp < Date.now();
  } else {
    // if no jwtExp
    // let it expired to true to redirect to login
    return true;
  }
}

function handleRedirectToLogin(request: NextRequest) {
  // Redirect unauthenticated users to login
  const response = NextResponse.redirect(new URL("/login", request.url));
  response.cookies.delete("authjs.callback-url");
  response.cookies.delete("authjs.csrf-token");
  response.cookies.delete("authjs.session-token");
  return response;
}
