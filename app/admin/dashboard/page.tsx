"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ArchiveIcon, CheckCircleIcon, InboxIcon, LogOutIcon, MailIcon, UserIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ADMIN_KEY } from "@/lib/admin-auth"

// Mock data for testing
const mockSubmissions = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    message: "I'm interested in hiring you for a data analysis project. Can we schedule a call?",
    category: "job",
    status: "new",
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    message: "Your portfolio is impressive! I'd like to discuss a potential collaboration.",
    category: "consulting",
    status: "read",
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "3",
    name: "Michael Johnson",
    email: "michael@example.com",
    message: "I have a question about your experience with machine learning models.",
    category: "question",
    status: "replied",
    createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
  },
]

export default function AdminDashboard() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState("")
  const [submissions, setSubmissions] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [lastAction, setLastAction] = useState<{
    messageId: string
    previousStatus: string
    timestamp: number
    visible: boolean
  } | null>(null)
  const [fetchError, setFetchError] = useState<string | null>(null)

  // Auto-hide the notification after 5 seconds
  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null

    if (lastAction && lastAction.visible) {
      timeoutId = setTimeout(() => {
        setLastAction((prev) => (prev ? { ...prev, visible: false } : null))
      }, 5000) // Hide after 5 seconds
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [lastAction])

  useEffect(() => {
    // Check if user is logged in
    const adminLoggedIn = localStorage.getItem("adminLoggedIn")
    const adminUsername = localStorage.getItem("adminUsername")

    if (adminLoggedIn === "true" && adminUsername) {
      setIsAuthenticated(true)
      setUsername(adminUsername)
    } else {
      router.push("/admin/login")
    }

    setLoading(false)
  }, [router])

  useEffect(() => {
    const fetchSubmissions = async () => {
      if (!isAuthenticated) return

      setLoading(true)
      try {
        // First try to fetch from the API
        const response = await fetch("/api/admin/submissions", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${ADMIN_KEY}`,
          },
        })

        if (!response.ok) {
          console.warn(`API returned status: ${response.status}`)
          throw new Error(`API returned status: ${response.status}`)
        }

        const data = await response.json()
        setSubmissions(data.submissions || [])
        setFetchError(null)
      } catch (error) {
        console.error("Error fetching submissions:", error)

        // Fall back to mock data in development or preview mode
        if (process.env.NODE_ENV !== "production" || window.location.hostname.includes("vercel.app")) {
          console.log("Using mock data as fallback")
          setSubmissions(mockSubmissions)
          setFetchError("Using mock data (API unavailable)")
        } else {
          setFetchError(`Failed to load submissions: ${error.message}`)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchSubmissions()
  }, [isAuthenticated])

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn")
    localStorage.removeItem("adminUsername")
    router.push("/admin/login")
  }

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).format(date)
  }

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-background border-b sticky top-0 z-10">
        <div className="container flex h-16 items-center justify-between py-4">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <UserIcon className="h-4 w-4" />
              <span>{username}</span>
            </div>

            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOutIcon className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold">{submissions.length}</div>
              <p className="text-xs text-muted-foreground">Total Submissions</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold">{submissions.filter((s) => s.status === "new").length}</div>
              <p className="text-xs text-muted-foreground">New Messages</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold">{submissions.filter((s) => s.status === "replied").length}</div>
              <p className="text-xs text-muted-foreground">Replied</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold">{submissions.filter((s) => s.category === "job").length}</div>
              <p className="text-xs text-muted-foreground">Job Opportunities</p>
            </CardContent>
          </Card>
        </div>

        {/* Message Status Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {lastAction && lastAction.visible && (
            <div className="col-span-full bg-muted rounded-lg p-3 mb-2 flex items-center justify-between animate-fade-in">
              <p className="text-sm">Message status changed.</p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  if (lastAction) {
                    setSubmissions((prev) =>
                      prev.map((sub) =>
                        sub.id === lastAction.messageId ? { ...sub, status: lastAction.previousStatus as any } : sub,
                      ),
                    )
                    setLastAction(null)
                  }
                }}
              >
                Undo Change
              </Button>
            </div>
          )}

          {/* Read Messages */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Read Messages</CardTitle>
              <CardDescription>Messages you've viewed</CardDescription>
            </CardHeader>
            <CardContent className="max-h-60 overflow-y-auto">
              {submissions.filter((s) => s.status === "read").length === 0 ? (
                <p className="text-sm text-muted-foreground py-2">No read messages</p>
              ) : (
                submissions
                  .filter((s) => s.status === "read")
                  .map((submission) => (
                    <div key={submission.id} className="py-2 border-b last:border-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-sm">{submission.name}</p>
                          <p className="text-xs text-muted-foreground">{submission.email}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            {formatDate(submission.createdAt)}
                          </Badge>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-6 w-6 p-0"
                            onClick={() => {
                              setLastAction({
                                messageId: submission.id,
                                previousStatus: "read",
                                timestamp: Date.now(),
                                visible: true,
                              })
                              setSubmissions((prev) =>
                                prev.map((sub) => (sub.id === submission.id ? { ...sub, status: "new" } : sub)),
                              )
                            }}
                          >
                            <span className="sr-only">Reset to new</span>↩
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))
              )}
            </CardContent>
          </Card>

          {/* Replied Messages */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Replied Messages</CardTitle>
              <CardDescription>Messages you've responded to</CardDescription>
            </CardHeader>
            <CardContent className="max-h-60 overflow-y-auto">
              {submissions.filter((s) => s.status === "replied").length === 0 ? (
                <p className="text-sm text-muted-foreground py-2">No replied messages</p>
              ) : (
                submissions
                  .filter((s) => s.status === "replied")
                  .map((submission) => (
                    <div key={submission.id} className="py-2 border-b last:border-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-sm">{submission.name}</p>
                          <p className="text-xs text-muted-foreground">{submission.email}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            {formatDate(submission.createdAt)}
                          </Badge>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-6 w-6 p-0"
                            onClick={() => {
                              setLastAction({
                                messageId: submission.id,
                                previousStatus: "replied",
                                timestamp: Date.now(),
                                visible: true,
                              })
                              setSubmissions((prev) =>
                                prev.map((sub) => (sub.id === submission.id ? { ...sub, status: "read" } : sub)),
                              )
                            }}
                          >
                            <span className="sr-only">Reset to read</span>↩
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))
              )}
            </CardContent>
          </Card>

          {/* Archived Messages */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Archived Messages</CardTitle>
              <CardDescription>Messages you've archived</CardDescription>
            </CardHeader>
            <CardContent className="max-h-60 overflow-y-auto">
              {submissions.filter((s) => s.status === "archived").length === 0 ? (
                <p className="text-sm text-muted-foreground py-2">No archived messages</p>
              ) : (
                submissions
                  .filter((s) => s.status === "archived")
                  .map((submission) => (
                    <div key={submission.id} className="py-2 border-b last:border-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-sm">{submission.name}</p>
                          <p className="text-xs text-muted-foreground">{submission.email}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            {formatDate(submission.createdAt)}
                          </Badge>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-6 w-6 p-0"
                            onClick={() => {
                              setLastAction({
                                messageId: submission.id,
                                previousStatus: "archived",
                                timestamp: Date.now(),
                                visible: true,
                              })
                              setSubmissions((prev) =>
                                prev.map((sub) => (sub.id === submission.id ? { ...sub, status: "read" } : sub)),
                              )
                            }}
                          >
                            <span className="sr-only">Restore</span>↩
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))
              )}
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Contact Form Submissions</CardTitle>
            <CardDescription>Manage your contact form submissions</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
                <p>Loading submissions...</p>
              </div>
            ) : fetchError ? (
              <div className="text-center py-12 text-red-500">
                <p>{fetchError}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4"
                  onClick={() => {
                    setLoading(true)
                    setFetchError(null)

                    // Retry fetching submissions with improved error handling
                    fetch("/api/admin/submissions", {
                      headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${ADMIN_KEY}`,
                      },
                    })
                      .then((response) => {
                        if (!response.ok) throw new Error(`API returned status: ${response.status}`)
                        return response.json()
                      })
                      .then((data) => {
                        setSubmissions(data.submissions || [])
                        setFetchError(null)
                      })
                      .catch((error) => {
                        console.error("Error fetching submissions:", error)

                        // Fall back to mock data in development or preview mode
                        if (process.env.NODE_ENV !== "production" || window.location.hostname.includes("vercel.app")) {
                          console.log("Using mock data as fallback")
                          setSubmissions(mockSubmissions)
                          setFetchError("Using mock data (API unavailable)")
                        } else {
                          setFetchError(`Failed to load submissions: ${error.message}`)
                        }
                      })
                      .finally(() => setLoading(false))
                  }}
                >
                  Retry
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                {submissions.length === 0 ? (
                  <div className="text-center py-12">
                    <InboxIcon className="mx-auto h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-2 text-lg font-medium">No submissions yet</h3>
                    <p className="mt-1 text-muted-foreground">Submissions will appear here when people contact you.</p>
                  </div>
                ) : (
                  submissions.map((submission) => (
                    <div key={submission.id} className="border rounded-lg p-4 space-y-4">
                      <div className="flex flex-wrap justify-between items-start gap-2">
                        <div>
                          <h3 className="text-lg font-medium">{submission.name}</h3>
                          <p className="text-sm text-muted-foreground">{submission.email}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">{submission.category}</Badge>
                          <Badge
                            variant={
                              submission.status === "new"
                                ? "default"
                                : submission.status === "read"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {submission.status}
                          </Badge>
                        </div>
                      </div>

                      <div className="bg-muted p-3 rounded-md">
                        <p className="whitespace-pre-wrap">{submission.message}</p>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="text-sm text-muted-foreground">
                          Received: {formatDate(submission.createdAt)}
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              setLastAction({
                                messageId: submission.id,
                                previousStatus: submission.status,
                                timestamp: Date.now(),
                                visible: true,
                              })
                              setSubmissions((prev) =>
                                prev.map((sub) => (sub.id === submission.id ? { ...sub, status: "read" } : sub)),
                              )
                            }}
                            disabled={submission.status !== "new"}
                          >
                            <MailIcon className="h-4 w-4 mr-1" /> Mark as Read
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              setLastAction({
                                messageId: submission.id,
                                previousStatus: submission.status,
                                timestamp: Date.now(),
                                visible: true,
                              })
                              setSubmissions((prev) =>
                                prev.map((sub) => (sub.id === submission.id ? { ...sub, status: "replied" } : sub)),
                              )
                            }}
                            disabled={submission.status === "replied"}
                          >
                            <CheckCircleIcon className="h-4 w-4 mr-1" /> Mark as Replied
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              setLastAction({
                                messageId: submission.id,
                                previousStatus: submission.status,
                                timestamp: Date.now(),
                                visible: true,
                              })
                              setSubmissions((prev) =>
                                prev.map((sub) => (sub.id === submission.id ? { ...sub, status: "archived" } : sub)),
                              )
                            }}
                          >
                            <ArchiveIcon className="h-4 w-4 mr-1" /> Archive
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
