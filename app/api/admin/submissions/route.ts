import { type NextRequest, NextResponse } from "next/server"
import { getSubmissions } from "@/lib/contact-store"
import { ADMIN_KEY } from "@/lib/admin-auth"

export async function GET(request: NextRequest) {
  // Check authorization
  const authHeader = request.headers.get("authorization")
  const token = authHeader?.split(" ")[1]

  if (!token || token !== ADMIN_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    // Get submissions from the store
    const submissions = await getSubmissions()

    return NextResponse.json({ submissions })
  } catch (error) {
    console.error("Error fetching submissions:", error)
    return NextResponse.json({ error: "Failed to fetch submissions" }, { status: 500 })
  }
}
