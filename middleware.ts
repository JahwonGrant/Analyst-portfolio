import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Only apply to /admin routes except for login and reset pages
  if (
    request.nextUrl.pathname.startsWith("/admin") &&
    !request.nextUrl.pathname.startsWith("/admin/login") &&
    !request.nextUrl.pathname.startsWith("/admin/reset-password")
  ) {
    // Check for authentication cookie
    const authCookie = request.cookies.get("adminAuth")

    // In a real app, you would validate the JWT token
    // For now, we'll check if the cookie exists and has a valid format
    if (!authCookie || !authCookie.value) {
      // No auth cookie, redirect to login
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }

    try {
      // In a real app, you would verify the JWT token here
      // For now, we'll just check if it's a valid JSON
      const authData = JSON.parse(authCookie.value)

      if (!authData.username || !authData.authenticated) {
        throw new Error("Invalid auth data")
      }
    } catch (error) {
      // Invalid auth cookie, redirect to login
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/admin/:path*",
}
