"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { LockIcon, UserIcon, ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function AdminLogin() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [resetEmail, setResetEmail] = useState("")
  const [error, setError] = useState(searchParams.get("error") === "invalid" ? "Invalid credentials" : "")
  const [success, setSuccess] = useState("")
  const [loading, setLoading] = useState(false)
  const [resetSent, setResetSent] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    // In a real app, you would validate against a database
    // For now, we'll use hardcoded values for demonstration
    if (username === "admin" && (password === process.env.ADMIN_PASSWORD || password === "admin123")) {
      // Store login state in localStorage (in a real app, use secure cookies or tokens)
      localStorage.setItem("adminLoggedIn", "true")
      localStorage.setItem("adminUsername", username)

      // Redirect to dashboard
      router.push(`/admin/dashboard`)
    } else {
      setError("Invalid username or password")
      setLoading(false)
    }
  }

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate password reset email
    setTimeout(() => {
      setResetSent(true)
      setLoading(false)
      setSuccess(`Password reset link sent to ${resetEmail}`)
    }, 1500)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Admin Portal</CardTitle>
          <CardDescription>Access your dashboard to manage contact submissions</CardDescription>
        </CardHeader>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="reset">Reset Password</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <form onSubmit={handleLogin}>
              <CardContent className="space-y-4 pt-4">
                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <div className="relative">
                    <UserIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="username"
                      type="text"
                      placeholder="Enter your username"
                      className="pl-10"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <div className="relative">
                    <LockIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      className="pl-10"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">Default: username "admin" and password "admin123"</p>
                </div>
              </CardContent>

              <CardFooter>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Logging in..." : "Login"}
                  {!loading && <ArrowRightIcon className="ml-2 h-4 w-4" />}
                </Button>
              </CardFooter>
            </form>
          </TabsContent>

          <TabsContent value="reset">
            <form onSubmit={handleReset}>
              <CardContent className="space-y-4 pt-4">
                {success && (
                  <Alert className="bg-green-50 border-green-200 text-green-800">
                    <AlertDescription>{success}</AlertDescription>
                  </Alert>
                )}

                {!resetSent && (
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={resetEmail}
                      onChange={(e) => setResetEmail(e.target.value)}
                      required
                    />
                    <p className="text-xs text-muted-foreground">We'll send a password reset link to this email</p>
                  </div>
                )}
              </CardContent>

              <CardFooter>
                {!resetSent ? (
                  <Button type="submit" className="w-full" disabled={loading || !resetEmail}>
                    {loading ? "Sending..." : "Send Reset Link"}
                  </Button>
                ) : (
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      setResetSent(false)
                      setSuccess("")
                      setResetEmail("")
                    }}
                  >
                    Send Another Reset Link
                  </Button>
                )}
              </CardFooter>
            </form>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  )
}
