import fs from "fs/promises"
import path from "path"

// Define the contact submission type
export type ContactCategory = "job" | "consulting" | "freelance" | "general" | "other"

export interface ContactSubmission {
  id: string
  name: string
  email: string
  subject: string
  message: string
  category: ContactCategory
  priority: number
  status: "new" | "read" | "replied" | "archived"
  createdAt: string
  updatedAt: string
  notes?: string
  tags?: string[]
}

// Path to our JSON "database"
const DB_PATH = path.join(process.cwd(), "data", "contact-submissions.json")

// Ensure the data directory exists
export async function ensureDataDir() {
  try {
    await fs.mkdir(path.join(process.cwd(), "data"), { recursive: true })
  } catch (error) {
    console.error("Error creating data directory:", error)
  }
}

// Get all contact submissions
export async function getAllSubmissions(): Promise<ContactSubmission[]> {
  try {
    await ensureDataDir()

    try {
      const data = await fs.readFile(DB_PATH, "utf8")
      return JSON.parse(data)
    } catch (error) {
      // If file doesn't exist or is invalid, return empty array
      return []
    }
  } catch (error) {
    console.error("Error reading submissions:", error)
    return []
  }
}

// Add a new submission
export async function addSubmission(
  submission: Omit<ContactSubmission, "id" | "createdAt" | "updatedAt" | "status">,
): Promise<ContactSubmission> {
  const submissions = await getAllSubmissions()

  const newSubmission: ContactSubmission = {
    ...submission,
    id: `submission_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
    status: "new",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }

  submissions.push(newSubmission)

  await fs.writeFile(DB_PATH, JSON.stringify(submissions, null, 2), "utf8")

  return newSubmission
}

// Update a submission
export async function updateSubmission(
  id: string,
  updates: Partial<ContactSubmission>,
): Promise<ContactSubmission | null> {
  const submissions = await getAllSubmissions()

  const index = submissions.findIndex((sub) => sub.id === id)
  if (index === -1) return null

  const updatedSubmission = {
    ...submissions[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  }

  submissions[index] = updatedSubmission

  await fs.writeFile(DB_PATH, JSON.stringify(submissions, null, 2), "utf8")

  return updatedSubmission
}

// Delete a submission
export async function deleteSubmission(id: string): Promise<boolean> {
  const submissions = await getAllSubmissions()

  const filteredSubmissions = submissions.filter((sub) => sub.id !== id)

  if (filteredSubmissions.length === submissions.length) {
    return false // Nothing was deleted
  }

  await fs.writeFile(DB_PATH, JSON.stringify(filteredSubmissions, null, 2), "utf8")

  return true
}

// Get submission statistics
export async function getSubmissionStats() {
  const submissions = await getAllSubmissions()

  const totalCount = submissions.length
  const newCount = submissions.filter((sub) => sub.status === "new").length
  const repliedCount = submissions.filter((sub) => sub.status === "replied").length
  const archivedCount = submissions.filter((sub) => sub.status === "archived").length

  const categoryBreakdown = submissions.reduce(
    (acc, sub) => {
      acc[sub.category] = (acc[sub.category] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  // Get submissions from the last 30 days
  const thirtyDaysAgo = new Date()
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
  const recentSubmissions = submissions.filter((sub) => new Date(sub.createdAt) >= thirtyDaysAgo)

  // Group by day for trend analysis
  const submissionsByDay = recentSubmissions.reduce(
    (acc, sub) => {
      const date = new Date(sub.createdAt).toISOString().split("T")[0]
      acc[date] = (acc[date] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  return {
    totalCount,
    newCount,
    repliedCount,
    archivedCount,
    categoryBreakdown,
    submissionsByDay,
  }
}
