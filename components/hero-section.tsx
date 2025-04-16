"use client"

import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Data Analyst & Business Intelligence Specialist"

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [typedText, fullText])

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 subtle-pattern opacity-30 -z-10"></div>

      <div className="container py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-8 order-2 md:order-1">
            <div>
              <div className="inline-block px-3 py-1 text-sm font-medium rounded-full accent-bg text-primary mb-4 border accent-border">
                Data-Driven Decision Making
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                <span className="block text-foreground">Jahwon Grant</span>
                <span className="block h-20 sm:h-24 md:h-28 mt-2">
                  <span className="gradient-text font-bold">
                    {typedText}
                    <span className="animate-pulse">|</span>
                  </span>
                </span>
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-[600px]">
              Detail-oriented Data Analyst with 3+ years of experience transforming complex data into actionable
              insights. Specializing in reporting automation, process improvement, and Lean Six Sigma methodologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="primary-button">
                <a href="#projects">
                  View My Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="group" asChild>
                <a href="/documents/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                  Download Resume
                </a>
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/jahwongrant/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/JahwonGrant"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:jahwongrant@gmail.com"
                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <div className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors">
                <ThemeToggle />
              </div>
            </div>
          </div>
          <div className="flex justify-center order-1 md:order-2">
            <div className="relative subtle-float">
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 blur opacity-50"></div>
              <div className="relative h-[280px] w-[280px] overflow-hidden rounded-full border-4 border-background bg-muted sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px]">
                <Image src="/images/headshot.jpg" alt="Jahwon Grant" fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
