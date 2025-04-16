import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Only apply to /admin routes except for the login page
  if (request.nextUrl.pathname.startsWith("/admin") && !request.nextUrl.pathname.startsWith("/admin/login")) {
    // Check if the admin key is in the URL
    const adminKey = request.nextUrl.searchParams.get("key")

    // If no key is provided, redirect to login
    if (!adminKey) {
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }

    // In a real app, you would validate against a secure value
    // For now, we'll use a simple check
    if (adminKey !== process.env.ADMIN_KEY && adminKey !== "admin123") {
      return NextResponse.redirect(new URL("/admin/login?error=invalid", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/admin/:path*",
}
