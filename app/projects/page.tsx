import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getAllProjects } from "@/lib/projects"
import { baseMetadata } from "../metadata"

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Projects | Jahwon Grant",
  description: "Explore my portfolio of data analytics and business intelligence projects.",
}

export default function ProjectsPage() {
  const projects = getAllProjects()

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-16">
        <span className="rounded-full accent-bg px-3 py-1 text-sm font-medium text-primary border accent-border">
          Portfolio
        </span>
        <h1 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl gradient-text">Project Portfolio</h1>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          A showcase of my data analytics and business intelligence projects that have delivered measurable results and
          business impact.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="group h-full overflow-hidden transition-all duration-300 hover:shadow-lg border accent-border"
          >
            <div className="relative">
              <div className="aspect-video overflow-hidden">
                <Image
                  src={project.coverImage || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>
            </div>
            <CardHeader>
              <div className="flex flex-col space-y-1">
                <CardTitle className="text-xl gradient-text">{project.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{project.date}</p>
              </div>
              <CardDescription className="line-clamp-3 mt-2">{project.summary}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.categories.slice(0, 3).map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary">
                    {tag}
                  </Badge>
                ))}
                {project.categories.length > 3 && <Badge variant="outline">+{project.categories.length - 3}</Badge>}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button asChild variant="outline" className="group">
                <Link href={`/projects/${project.slug}`}>
                  View Details
                  <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
