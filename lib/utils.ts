import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

// Update the absoluteUrl function to work without requiring the environment variable
export function absoluteUrl(path: string) {
  // For client-side code, use the window.location
  if (typeof window !== "undefined") {
    return `${window.location.origin}${path}`
  }

  // For server-side code, use a default or the environment variable if available
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || ""
  return `${baseUrl}${path}`
}
