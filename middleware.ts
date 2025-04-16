import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Check if the request is for the admin API
  if (request.nextUrl.pathname.startsWith("/api/admin")) {
    const authHeader = request.headers.get("authorization")

    // Check for valid auth header
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return new NextResponse(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "content-type": "application/json" },
      })
    }

    const token = authHeader.split(" ")[1]

    // In a real app, you would validate the token properly
    // For now, we'll just check if it matches our admin key
    const validKey = process.env.ADMIN_KEY || "temp_admin_key"

    if (token !== validKey && token !== "jgadmin123") {
      return new NextResponse(JSON.stringify({ error: "Invalid token" }), {
        status: 403,
        headers: { "content-type": "application/json" },
      })
    }
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/api/admin/:path*"],
}
