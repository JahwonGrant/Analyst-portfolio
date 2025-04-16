"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

// Simple client-side auth management
export function useAdminAuth() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<{ username: string } | null>(null)

  useEffect(() => {
    // Check if user is logged in
    const checkAuth = () => {
      const adminAuth = localStorage.getItem("adminLoggedIn")
      const username = localStorage.getItem("adminUsername")

      if (adminAuth === "true" && username) {
        setUser({ username })
      } else {
        setUser(null)
      }

      setLoading(false)
    }

    checkAuth()
  }, [])

  const login = (username: string, password: string): Promise<boolean> => {
    return new Promise((resolve) => {
      // Updated credentials
      if (username === "adminjg" && password === "jgadmin123") {
        localStorage.setItem("adminLoggedIn", "true")
        localStorage.setItem("adminUsername", username)

        // Set auth cookie (in a real app, this would be done by the server)
        document.cookie = `adminAuth=${JSON.stringify({
          username,
          authenticated: true,
          timestamp: Date.now(),
        })}; path=/; max-age=86400; SameSite=Strict`

        setUser({ username })
        resolve(true)
      } else {
        resolve(false)
      }
    })
  }

  const logout = () => {
    localStorage.removeItem("adminLoggedIn")
    localStorage.removeItem("adminUsername")

    // Clear auth cookie
    document.cookie = "adminAuth=; path=/; max-age=0"

    setUser(null)
    router.push("/admin/login")
  }

  return {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user,
  }
}

// Hook to protect admin routes
export function useAdminProtected() {
  const router = useRouter()
  const { isAuthenticated, loading } = useAdminAuth()

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/admin/login")
    }
  }, [isAuthenticated, loading, router])

  return { loading }
}
