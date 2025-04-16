import { NextResponse } from "next/server"
import { addSubmission } from "@/lib/contact-store"
import type { ContactCategory } from "@/lib/contact-store"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, message, subject, category } = data

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email address" }, { status: 400 })
    }

    // Set priority based on category
    let priority = 1
    if (category === "job") priority = 3
    else if (category === "consulting" || category === "freelance") priority = 2

    // Add submission to storage
    const submission = await addSubmission({
      name,
      email,
      subject: subject || "No Subject",
      message,
      category: (category as ContactCategory) || "general",
      priority,
      tags: [],
    })

    return NextResponse.json({ success: true, submission })
  } catch (error) {
    console.error("Error processing contact form submission:", error)
    return NextResponse.json({ error: "Failed to process your request" }, { status: 500 })
  }
}
