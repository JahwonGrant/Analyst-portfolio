"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getFeaturedProjects } from "@/lib/projects"

export default function FeaturedProject() {
  const projects = getFeaturedProjects(1)
  const project = projects[0]

  return (
    <div className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 subtle-pattern opacity-30 -z-10"></div>

      <div className="container">
        <div className="flex flex-col items-center justify-center mb-8">
          <span className="rounded-full accent-bg px-3 py-1 text-sm font-medium text-primary mb-2 border accent-border">
            Featured Project
          </span>
          <h2 className="text-2xl font-bold text-center gradient-text">Latest Work</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <div className="relative aspect-video overflow-hidden rounded-lg border accent-border card-hover">
            <Image
              src={project.coverImage || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-all duration-500"
              priority
            />
          </div>

          <div className="space-y-4 p-6 rounded-lg border accent-border card-hover">
            <h3 className="text-2xl font-bold gradient-text">{project.title}</h3>
            <p className="text-muted-foreground">{project.overview}</p>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.categories.map((tag, index) => (
                <Badge key={index} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {project.impact.slice(0, 2).map((item, index) => (
                <div key={index} className="bg-muted/30 p-3 rounded-lg border accent-border">
                  <p className="text-sm text-muted-foreground">{item.metric}</p>
                  <p className="text-lg font-bold">{item.value}</p>
                  <p className={`text-xs ${item.change.startsWith("+") ? "text-emerald-500" : "text-rose-500"}`}>
                    {item.change}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              {project.githubUrl && (
                <Button variant="outline" asChild>
                  <a href={project.githubUrl} className="flex items-center gap-2" target="_blank" rel="noreferrer">
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                </Button>
              )}

              <Button asChild className="primary-button">
                <Link href={`/projects/${project.slug}`}>
                  View Project
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
