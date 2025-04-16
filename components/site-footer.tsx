"use client"

import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="executive-container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-serif font-bold executive-text-gradient">Jahwon Grant</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Data Analytics & Business Intelligence Leader specializing in transforming complex data into actionable
              insights.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/in/jahwongrant/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://github.com/JahwonGrant"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Navigation</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <Link href="/#about" className="text-muted-foreground hover:text-primary transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/#expertise" className="text-muted-foreground hover:text-primary transition-colors">
                    Expertise
                  </Link>
                </li>
                <li>
                  <Link href="/#projects" className="text-muted-foreground hover:text-primary transition-colors">
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-muted-foreground">Insights (Coming Soon)</li>
                <li className="text-muted-foreground">Case Studies (Coming Soon)</li>
                <li className="text-muted-foreground">Resources (Coming Soon)</li>
                <li>
                  <Link href="/#projects" className="text-muted-foreground hover:text-primary transition-colors">
                    All Projects
                  </Link>
                </li>
                <li className="text-xs italic text-muted-foreground mt-2">Content publishing soon</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-muted-foreground">jahwongrant@gmail.com</li>
                <li>
                  <span className="text-muted-foreground">Contact via email for phone number</span>
                </li>
                <li>
                  <span className="text-muted-foreground">Pensacola, Florida</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Jahwon Grant. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
