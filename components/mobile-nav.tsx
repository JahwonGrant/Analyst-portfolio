"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function MobileNav() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col space-y-3 p-4">
      <Link href="/" className="flex items-center space-x-2 mb-6">
        <span className="font-bold text-2xl text-primary">JG</span>
      </Link>
      <nav className="flex flex-col space-y-3">
        <Link
          href="/"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/" ? "text-foreground" : "text-foreground/60",
          )}
        >
          Home
        </Link>
        <Link
          href="/#about"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/#about" ? "text-foreground" : "text-foreground/60",
          )}
        >
          About
        </Link>
        <Link
          href="/#skills"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/#skills" ? "text-foreground" : "text-foreground/60",
          )}
        >
          Expertise
        </Link>
        <Link
          href="/projects"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/projects") ? "text-foreground" : "text-foreground/60",
          )}
        >
          Projects
        </Link>
        <Link
          href="/#experience"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/#experience" ? "text-foreground" : "text-foreground/60",
          )}
        >
          Experience
        </Link>
        <Link
          href="/contact"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/contact") ? "text-foreground" : "text-foreground/60",
          )}
        >
          Contact
        </Link>
      </nav>
    </div>
  )
}
