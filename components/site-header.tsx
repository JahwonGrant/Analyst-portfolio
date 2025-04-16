"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-2xl text-primary">JG</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
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
              href="/#expertise"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/#expertise" ? "text-foreground" : "text-foreground/60",
              )}
            >
              Expertise
            </Link>
            <Link
              href="/#projects"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/#projects" ? "text-foreground" : "text-foreground/60",
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
              href="/#contact"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/#contact" ? "text-foreground" : "text-foreground/60",
              )}
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle />
              <Button asChild variant="default">
                <Link href="/#contact">How to Reach Me</Link>
              </Button>
            </div>
          </div>
          <nav className="flex items-center md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0">
                <MobileNav />
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  )
}
