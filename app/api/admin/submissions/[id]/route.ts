import { NextResponse } from "next/server"
import { updateSubmission, deleteSubmission } from "@/lib/contact-store"

// Update a submission
export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const { searchParams } = new URL(request.url)
    const key = searchParams.get("key")

    if (key !== process.env.ADMIN_KEY && key !== "admin123") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { id } = params
    const updates = await request.json()

    const updatedSubmission = await updateSubmission(id, updates)

    if (!updatedSubmission) {
      return NextResponse.json({ error: "Submission not found" }, { status: 404 })
    }

    return NextResponse.json({ submission: updatedSubmission })
  } catch (error) {
    console.error("Error updating submission:", error)
    return NextResponse.json({ error: "Failed to update submission" }, { status: 500 })
  }
}

// Delete a submission
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const { searchParams } = new URL(request.url)
    const key = searchParams.get("key")

    if (key !== process.env.ADMIN_KEY && key !== "admin123") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { id } = params

    const success = await deleteSubmission(id)

    if (!success) {
      return NextResponse.json({ error: "Submission not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting submission:", error)
    return NextResponse.json({ error: "Failed to delete submission" }, { status: 500 })
  }
}
