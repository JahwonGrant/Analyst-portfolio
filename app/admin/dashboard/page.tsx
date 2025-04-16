"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts"
import { ArchiveIcon, CheckCircleIcon, EyeIcon, InboxIcon, TrashIcon, ArrowUpIcon, ArrowDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { ContactSubmission } from "@/lib/contact-store"

// COLORS for charts
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"]

export default function AdminDashboard() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const adminKey = searchParams.get("key")

  const [submissions, setSubmissions] = useState<ContactSubmission[]>([])
  const [filteredSubmissions, setFilteredSubmissions] = useState<ContactSubmission[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [stats, setStats] = useState<any>(null)
  const [filter, setFilter] = useState<{
    status: string
    category: string
    search: string
    sortBy: string
    sortOrder: "asc" | "desc"
  }>({
    status: "all",
    category: "all",
    search: "",
    sortBy: "createdAt",
    sortOrder: "desc",
  })

  // Fetch submissions
  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await fetch(`/api/admin/submissions?key=${adminKey}`)
        if (!response.ok) {
          throw new Error("Failed to fetch submissions")
        }
        const data = await response.json()
        setSubmissions(data.submissions)
        setFilteredSubmissions(data.submissions)
        setStats(data.stats)
      } catch (err) {
        setError("Error fetching submissions")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchSubmissions()
  }, [adminKey])

  // Apply filters
  useEffect(() => {
    let result = [...submissions]

    // Filter by status
    if (filter.status !== "all") {
      result = result.filter((sub) => sub.status === filter.status)
    }

    // Filter by category
    if (filter.category !== "all") {
      result = result.filter((sub) => sub.category === filter.category)
    }

    // Filter by search term
    if (filter.search) {
      const searchLower = filter.search.toLowerCase()
      result = result.filter(
        (sub) =>
          sub.name.toLowerCase().includes(searchLower) ||
          sub.email.toLowerCase().includes(searchLower) ||
          sub.subject.toLowerCase().includes(searchLower) ||
          sub.message.toLowerCase().includes(searchLower),
      )
    }

    // Sort results
    result.sort((a, b) => {
      const aValue = a[filter.sortBy as keyof ContactSubmission]
      const bValue = b[filter.sortBy as keyof ContactSubmission]

      if (typeof aValue === "string" && typeof bValue === "string") {
        return filter.sortOrder === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue)
      }

      // Default to date comparison
      const aDate = new Date(a.createdAt).getTime()
      const bDate = new Date(b.createdAt).getTime()
      return filter.sortOrder === "asc" ? aDate - bDate : bDate - aDate
    })

    setFilteredSubmissions(result)
  }, [submissions, filter])

  // Handle status change
  const handleStatusChange = async (id: string, status: "new" | "read" | "replied" | "archived") => {
    try {
      const response = await fetch(`/api/admin/submissions/${id}?key=${adminKey}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      })

      if (!response.ok) {
        throw new Error("Failed to update submission")
      }

      // Update local state
      setSubmissions((prev) => prev.map((sub) => (sub.id === id ? { ...sub, status } : sub)))
    } catch (err) {
      console.error(err)
      setError("Error updating submission")
    }
  }

  // Handle delete
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this submission?")) {
      return
    }

    try {
      const response = await fetch(`/api/admin/submissions/${id}?key=${adminKey}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error("Failed to delete submission")
      }

      // Update local state
      setSubmissions((prev) => prev.filter((sub) => sub.id !== id))
    } catch (err) {
      console.error(err)
      setError("Error deleting submission")
    }
  }

  // Prepare chart data
  const categoryData = stats?.categoryBreakdown
    ? Object.entries(stats.categoryBreakdown).map(([name, value]) => ({ name, value }))
    : []

  const trendData = stats?.submissionsByDay
    ? Object.entries(stats.submissionsByDay).map(([date, count]) => ({ date, count }))
    : []

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-lg">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Contact Form Dashboard</h1>
            <p className="text-muted-foreground">Manage and analyze your contact form submissions</p>
          </div>
          <Button onClick={() => router.push("/")}>Back to Website</Button>
        </div>

        {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">{error}</div>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Submissions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats?.totalCount || 0}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">New Messages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">{stats?.newCount || 0}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Replied</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">{stats?.repliedCount || 0}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Archived</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-600">{stats?.archivedCount || 0}</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="submissions" className="space-y-6">
          <TabsList>
            <TabsTrigger value="submissions">Submissions</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="submissions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Filters</CardTitle>
                <CardDescription>Filter and sort your submissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <Label htmlFor="status-filter">Status</Label>
                    <Select value={filter.status} onValueChange={(value) => setFilter({ ...filter, status: value })}>
                      <SelectTrigger id="status-filter">
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Statuses</SelectItem>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="read">Read</SelectItem>
                        <SelectItem value="replied">Replied</SelectItem>
                        <SelectItem value="archived">Archived</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="category-filter">Category</Label>
                    <Select
                      value={filter.category}
                      onValueChange={(value) => setFilter({ ...filter, category: value })}
                    >
                      <SelectTrigger id="category-filter">
                        <SelectValue placeholder="Filter by category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="job">Job</SelectItem>
                        <SelectItem value="consulting">Consulting</SelectItem>
                        <SelectItem value="freelance">Freelance</SelectItem>
                        <SelectItem value="general">General</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="sort-by">Sort By</Label>
                    <Select value={filter.sortBy} onValueChange={(value) => setFilter({ ...filter, sortBy: value })}>
                      <SelectTrigger id="sort-by">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="createdAt">Date</SelectItem>
                        <SelectItem value="name">Name</SelectItem>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="subject">Subject</SelectItem>
                        <SelectItem value="priority">Priority</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="search">Search</Label>
                    <div className="flex gap-2">
                      <Input
                        id="search"
                        placeholder="Search submissions..."
                        value={filter.search}
                        onChange={(e) => setFilter({ ...filter, search: e.target.value })}
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setFilter({ ...filter, sortOrder: filter.sortOrder === "asc" ? "desc" : "asc" })}
                      >
                        {filter.sortOrder === "asc" ? (
                          <ArrowUpIcon className="h-4 w-4" />
                        ) : (
                          <ArrowDownIcon className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Form Submissions</CardTitle>
                <CardDescription>
                  Showing {filteredSubmissions.length} of {submissions.length} submissions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {filteredSubmissions.length === 0 ? (
                    <div className="text-center py-12">
                      <InboxIcon className="mx-auto h-12 w-12 text-muted-foreground" />
                      <h3 className="mt-2 text-lg font-medium">No submissions found</h3>
                      <p className="mt-1 text-muted-foreground">Try adjusting your filters to see more results.</p>
                    </div>
                  ) : (
                    filteredSubmissions.map((submission) => (
                      <div key={submission.id} className="border rounded-lg p-4 space-y-4">
                        <div className="flex flex-wrap justify-between items-start gap-2">
                          <div>
                            <h3 className="text-lg font-medium">{submission.subject}</h3>
                            <p className="text-sm text-muted-foreground">
                              From: {submission.name} ({submission.email})
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <Badge
                              variant={
                                submission.category === "job"
                                  ? "default"
                                  : submission.category === "consulting"
                                    ? "secondary"
                                    : submission.category === "freelance"
                                      ? "destructive"
                                      : "outline"
                              }
                            >
                              {submission.category}
                            </Badge>
                            <Badge
                              variant={
                                submission.status === "new"
                                  ? "default"
                                  : submission.status === "read"
                                    ? "secondary"
                                    : submission.status === "replied"
                                      ? "outline"
                                      : "outline"
                              }
                            >
                              {submission.status}
                            </Badge>
                            <Badge variant="outline">Priority: {submission.priority}</Badge>
                          </div>
                        </div>

                        <div className="bg-muted p-3 rounded-md">
                          <p className="whitespace-pre-wrap">{submission.message}</p>
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="text-sm text-muted-foreground">
                            Received: {new Date(submission.createdAt).toLocaleString()}
                          </div>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleStatusChange(submission.id, "read")}
                              disabled={submission.status === "read"}
                            >
                              <EyeIcon className="h-4 w-4 mr-1" /> Mark as Read
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleStatusChange(submission.id, "replied")}
                              disabled={submission.status === "replied"}
                            >
                              <CheckCircleIcon className="h-4 w-4 mr-1" /> Mark as Replied
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleStatusChange(submission.id, "archived")}
                              disabled={submission.status === "archived"}
                            >
                              <ArchiveIcon className="h-4 w-4 mr-1" /> Archive
                            </Button>
                            <Button variant="destructive" size="sm" onClick={() => handleDelete(submission.id)}>
                              <TrashIcon className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Submissions by Category</CardTitle>
                  <CardDescription>Distribution of messages by category</CardDescription>
                </CardHeader>
                <CardContent className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Submission Trends</CardTitle>
                  <CardDescription>Messages received over the last 30 days</CardDescription>
                </CardHeader>
                <CardContent className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={trendData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="count" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Insights</CardTitle>
                <CardDescription>Key metrics and patterns from your submissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <h3 className="font-medium">Top Categories</h3>
                    <div className="space-y-1">
                      {categoryData
                        .sort((a, b) => (b.value as number) - (a.value as number))
                        .slice(0, 3)
                        .map((category, index) => (
                          <div key={index} className="flex justify-between">
                            <span className="capitalize">{category.name}</span>
                            <span className="font-medium">{category.value}</span>
                          </div>
                        ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium">Response Rate</h3>
                    <div className="text-2xl font-bold">
                      {stats?.repliedCount && stats?.totalCount
                        ? `${((stats.repliedCount / stats.totalCount) * 100).toFixed(0)}%`
                        : "0%"}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {stats?.repliedCount || 0} of {stats?.totalCount || 0} messages replied
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium">Average Messages per Day</h3>
                    <div className="text-2xl font-bold">
                      {trendData.length > 0
                        ? (trendData.reduce((sum, item) => sum + (item.count as number), 0) / trendData.length).toFixed(
                            1,
                          )
                        : "0"}
                    </div>
                    <p className="text-sm text-muted-foreground">Based on the last {trendData.length} days</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
