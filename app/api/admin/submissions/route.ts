import { NextResponse } from "next/server"
import { getAllSubmissions, getSubmissionStats } from "@/lib/contact-store"

export async function GET(request: Request) {
  try {
    // In a real app, you would validate the admin key against a secure value
    const { searchParams } = new URL(request.url)
    const key = searchParams.get("key")

    if (key !== process.env.ADMIN_KEY && key !== "admin123") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const submissions = await getAllSubmissions()
    const stats = await getSubmissionStats()

    return NextResponse.json({ submissions, stats })
  } catch (error) {
    console.error("Error fetching submissions:", error)
    return NextResponse.json({ error: "Failed to fetch submissions" }, { status: 500 })
  }
}
