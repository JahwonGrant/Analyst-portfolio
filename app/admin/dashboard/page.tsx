"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArchiveIcon, CheckCircleIcon, InboxIcon, LogOutIcon, MailIcon, SearchIcon, UserIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useAdminProtected, useAdminAuth } from "@/lib/admin-auth"

// Types for our contact submissions
interface ContactSubmission {
  id: string
  name: string
  email: string
  message: string
  category: string
  status: "new" | "read" | "replied" | "archived"
  createdAt: string
}

export default function AdminDashboard() {
  const router = useRouter()
  const { user, logout } = useAdminAuth()
  const { loading: authLoading } = useAdminProtected()

  const [submissions, setSubmissions] = useState<ContactSubmission[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [filter, setFilter] = useState("all")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null)

  // Fetch submissions
  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        // In a real app, this would be an API call
        // For now, we'll use mock data
        const mockSubmissions: ContactSubmission[] = [
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
          {
            id: "4",
            name: "Sarah Williams",
            email: "sarah@example.com",
            message: "We're looking for a data analyst to join our team. Would you be interested?",
            category: "job",
            status: "new",
            createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
          },
          {
            id: "5",
            name: "David Brown",
            email: "david@example.com",
            message: "I'd like to feature your work in our tech blog. Please let me know if you're interested.",
            category: "other",
            status: "archived",
            createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
          },
        ]

        setSubmissions(mockSubmissions)
        setLoading(false)
      } catch (err) {
        setError("Failed to fetch submissions")
        setLoading(false)
      }
    }

    if (!authLoading) {
      fetchSubmissions()
    }
  }, [authLoading])

  // Filter submissions
  const filteredSubmissions = submissions.filter((submission) => {
    // Filter by status
    if (filter !== "all" && submission.status !== filter) {
      return false
    }

    // Filter by category
    if (categoryFilter !== "all" && submission.category !== categoryFilter) {
      return false
    }

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      return (
        submission.name.toLowerCase().includes(term) ||
        submission.email.toLowerCase().includes(term) ||
        submission.message.toLowerCase().includes(term)
      )
    }

    return true
  })

  // Update submission status
  const updateStatus = (id: string, status: "new" | "read" | "replied" | "archived") => {
    setSubmissions((prev) => prev.map((sub) => (sub.id === id ? { ...sub, status } : sub)))

    if (selectedSubmission?.id === id) {
      setSelectedSubmission((prev) => (prev ? { ...prev, status } : null))
    }
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

  if (authLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    )
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
              <span>{user?.username || "Admin"}</span>
            </div>

            <Button variant="ghost" size="sm" onClick={logout}>
              <LogOutIcon className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container py-6">
        <Tabs defaultValue="inbox">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar */}
            <div className="w-full md:w-64 space-y-4">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="inbox">Inbox</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>

              <div className="space-y-2">
                <div className="font-medium">Status</div>
                <div className="space-y-1">
                  <Button
                    variant={filter === "all" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setFilter("all")}
                  >
                    <InboxIcon className="h-4 w-4 mr-2" />
                    All
                    <Badge className="ml-auto">{submissions.length}</Badge>
                  </Button>

                  <Button
                    variant={filter === "new" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setFilter("new")}
                  >
                    <MailIcon className="h-4 w-4 mr-2" />
                    New
                    <Badge className="ml-auto">{submissions.filter((s) => s.status === "new").length}</Badge>
                  </Button>

                  <Button
                    variant={filter === "read" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setFilter("read")}
                  >
                    <CheckCircleIcon className="h-4 w-4 mr-2" />
                    Read
                    <Badge className="ml-auto">{submissions.filter((s) => s.status === "read").length}</Badge>
                  </Button>

                  <Button
                    variant={filter === "replied" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setFilter("replied")}
                  >
                    <CheckCircleIcon className="h-4 w-4 mr-2" />
                    Replied
                    <Badge className="ml-auto">{submissions.filter((s) => s.status === "replied").length}</Badge>
                  </Button>

                  <Button
                    variant={filter === "archived" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setFilter("archived")}
                  >
                    <ArchiveIcon className="h-4 w-4 mr-2" />
                    Archived
                    <Badge className="ml-auto">{submissions.filter((s) => s.status === "archived").length}</Badge>
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-medium">Category</div>
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="job">Job Opportunities</SelectItem>
                    <SelectItem value="consulting">Consulting</SelectItem>
                    <SelectItem value="question">Questions</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <TabsContent value="inbox" className="mt-0">
                <Card>
                  <CardHeader className="p-4">
                    <div className="flex items-center justify-between">
                      <CardTitle>Contact Submissions</CardTitle>
                      <div className="relative w-64">
                        <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          type="search"
                          placeholder="Search messages..."
                          className="pl-8"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </div>
                    </div>
                    <CardDescription>
                      {filteredSubmissions.length} {filteredSubmissions.length === 1 ? "message" : "messages"} found
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-0">
                    {loading ? (
                      <div className="flex justify-center p-8">
                        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
                      </div>
                    ) : error ? (
                      <div className="p-8 text-center text-red-500">{error}</div>
                    ) : filteredSubmissions.length === 0 ? (
                      <div className="p-8 text-center text-muted-foreground">No messages found</div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                        {/* Message List */}
                        <div className="border rounded-md overflow-hidden">
                          <div className="divide-y max-h-[600px] overflow-y-auto">
                            {filteredSubmissions.map((submission) => (
                              <div
                                key={submission.id}
                                className={`p-4 cursor-pointer hover:bg-muted transition-colors ${
                                  selectedSubmission?.id === submission.id ? "bg-muted" : ""
                                }`}
                                onClick={() => {
                                  setSelectedSubmission(submission)
                                  if (submission.status === "new") {
                                    updateStatus(submission.id, "read")
                                  }
                                }}
                              >
                                <div className="flex justify-between items-start mb-1">
                                  <div className="font-medium">{submission.name}</div>
                                  <div className="text-xs text-muted-foreground">
                                    {formatDate(submission.createdAt)}
                                  </div>
                                </div>
                                <div className="text-sm text-muted-foreground mb-1">{submission.email}</div>
                                <div className="text-sm line-clamp-2">{submission.message}</div>
                                <div className="flex gap-2 mt-2">
                                  <Badge
                                    variant={
                                      submission.status === "new"
                                        ? "default"
                                        : submission.status === "read"
                                          ? "secondary"
                                          : submission.status === "replied"
                                            ? "outline"
                                            : submission.status === "archived"
                                              ? "destructive"
                                              : "default"
                                    }
                                  >
                                    {submission.status.charAt(0).toUpperCase() + submission.status.slice(1)}
                                  </Badge>
                                  <Badge variant="outline">{submission.category}</Badge>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Message Detail */}
                        <div className="border rounded-md p-4">
                          {selectedSubmission ? (
                            <div>
                              <div className="flex justify-between items-start mb-4">
                                <div>
                                  <h3 className="text-lg font-bold">{selectedSubmission.name}</h3>
                                  <p className="text-sm text-muted-foreground">{selectedSubmission.email}</p>
                                </div>
                                <div className="flex gap-2">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => updateStatus(selectedSubmission.id, "replied")}
                                    disabled={selectedSubmission.status === "replied"}
                                  >
                                    Mark as Replied
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => updateStatus(selectedSubmission.id, "archived")}
                                    disabled={selectedSubmission.status === "archived"}
                                  >
                                    Archive
                                  </Button>
                                </div>
                              </div>

                              <div className="mb-4">
                                <div className="text-sm text-muted-foreground mb-1">
                                  Received: {formatDate(selectedSubmission.createdAt)}
                                </div>
                                <div className="flex gap-2 mb-4">
                                  <Badge
                                    variant={
                                      selectedSubmission.status === "new"
                                        ? "default"
                                        : selectedSubmission.status === "read"
                                          ? "secondary"
                                          : selectedSubmission.status === "replied"
                                            ? "outline"
                                            : "destructive"
                                    }
                                  >
                                    {selectedSubmission.status.charAt(0).toUpperCase() +
                                      selectedSubmission.status.slice(1)}
                                  </Badge>
                                  <Badge variant="outline">{selectedSubmission.category}</Badge>
                                </div>
                              </div>

                              <div className="border-t pt-4">
                                <h4 className="font-medium mb-2">Message:</h4>
                                <p className="whitespace-pre-wrap">{selectedSubmission.message}</p>
                              </div>

                              <div className="mt-6">
                                <h4 className="font-medium mb-2">Quick Reply:</h4>
                                <div className="flex gap-2 flex-wrap">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => {
                                      alert(`Email sent to ${selectedSubmission.email}`)
                                      updateStatus(selectedSubmission.id, "replied")
                                    }}
                                  >
                                    Send Thank You
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => {
                                      alert(`Email sent to ${selectedSubmission.email}`)
                                      updateStatus(selectedSubmission.id, "replied")
                                    }}
                                  >
                                    Request More Info
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => {
                                      alert(`Email sent to ${selectedSubmission.email}`)
                                      updateStatus(selectedSubmission.id, "replied")
                                    }}
                                  >
                                    Schedule Call
                                  </Button>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="h-full flex items-center justify-center text-muted-foreground">
                              <div className="text-center">
                                <MailIcon className="h-12 w-12 mx-auto mb-4 opacity-20" />
                                <p>Select a message to view details</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="analytics" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Analytics</CardTitle>
                    <CardDescription>Overview of your contact form submissions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                      <Card>
                        <CardContent className="p-6">
                          <div className="text-2xl font-bold">{submissions.length}</div>
                          <p className="text-xs text-muted-foreground">Total Submissions</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-6">
                          <div className="text-2xl font-bold">
                            {submissions.filter((s) => s.status === "new").length}
                          </div>
                          <p className="text-xs text-muted-foreground">New Messages</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-6">
                          <div className="text-2xl font-bold">
                            {submissions.filter((s) => s.category === "job").length}
                          </div>
                          <p className="text-xs text-muted-foreground">Job Opportunities</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-6">
                          <div className="text-2xl font-bold">
                            {submissions.filter((s) => s.category === "consulting").length}
                          </div>
                          <p className="text-xs text-muted-foreground">Consulting Inquiries</p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-lg font-medium mb-4">Message Categories</h3>
                      <div className="h-64 bg-muted/50 rounded-lg flex items-center justify-center">
                        <p className="text-muted-foreground">Category distribution chart would appear here</p>
                      </div>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-lg font-medium mb-4">Message Timeline</h3>
                      <div className="h-64 bg-muted/50 rounded-lg flex items-center justify-center">
                        <p className="text-muted-foreground">Message timeline chart would appear here</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  )
}
