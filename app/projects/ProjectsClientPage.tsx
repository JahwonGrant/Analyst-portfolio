"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { getAllProjects } from "@/lib/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function ProjectsClientPage() {
  const projects = getAllProjects()

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 executive-text-gradient">
          Data Analysis Projects
        </h1>
        <p className="text-xl text-muted-foreground">
          Explore my portfolio of data analysis and business intelligence projects showcasing real-world impact and
          results.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 mb-16">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-8 bg-background border accent-border rounded-lg overflow-hidden"
          >
            <div className="md:w-2/5 aspect-video relative">
              <Image src={project.coverImage || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>
            <div className="p-6 md:w-3/5 flex flex-col">
              <div className="flex flex-wrap gap-2 mb-3">
                {project.categories.slice(0, 2).map((category) => (
                  <Badge key={category} variant="secondary" className="text-xs">
                    {category}
                  </Badge>
                ))}
              </div>
              <h2 className="text-2xl font-serif font-bold mb-2 executive-text-gradient">{project.title}</h2>
              <p className="text-muted-foreground mb-4">{project.summary}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {project.impact.slice(0, 2).map((item, i) => (
                  <div key={i} className="bg-muted/30 p-3 rounded-lg border accent-border text-center">
                    <p className="text-xs text-muted-foreground mb-1">{item.metric}</p>
                    <p className="text-lg font-bold">{item.value}</p>
                    <p className={`text-xs ${item.change.startsWith("+") ? "text-emerald-500" : "text-rose-500"}`}>
                      {item.change}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <Button asChild className="executive-button group">
                  <Link href={`/projects/${project.slug}`}>
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
