import { Github, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-12 bg-muted/30">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-lg font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Jahwon Grant
            </span>
          </Link>
          <p className="text-sm text-muted-foreground max-w-xs">
            Data analyst with 3+ years of experience in data analysis, reporting automation, and process improvement
            using Lean Six Sigma principles.
          </p>
          <div className="flex gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="mailto:jahwongrant@gmail.com"
              className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="tel:+17868689730"
              className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              aria-label="Phone"
            >
              <Phone className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                Skills
              </Link>
            </li>
            <li>
              <Link href="#experience" className="text-muted-foreground hover:text-primary transition-colors">
                Experience
              </Link>
            </li>
            <li>
              <Link href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Data Analysis
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Data Visualization
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Business Intelligence
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Process Improvement
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Lean Six Sigma Consulting
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <a
                href="mailto:jahwongrant@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                jahwongrant@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <a href="tel:+17868689730" className="text-muted-foreground hover:text-primary transition-colors">
                +1 (786) 868-9730
              </a>
            </li>
            <li className="flex items-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-primary mt-0.5"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span className="text-muted-foreground">
                Pensacola, Florida,
                <br />
                United States
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-8 border-t pt-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} Jahwon Grant. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
