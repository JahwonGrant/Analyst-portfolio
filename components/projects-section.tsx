"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, ExternalLink, Github, LineChart, BarChart3, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useInView } from "react-intersection-observer"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getFeaturedProjects } from "@/lib/projects"

export default function ProjectsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = getFeaturedProjects()

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  const categories = [
    { value: "all", label: "All Projects", icon: LineChart },
    { value: "analysis", label: "Data Analysis", icon: BarChart3 },
    { value: "visualization", label: "Visualization", icon: BarChart3 },
    { value: "development", label: "Development", icon: Github },
    { value: "improvement", label: "Process Improvement", icon: Users },
  ]

  return (
    <section id="projects" className="py-24 sm:py-32 relative overflow-hidden bg-muted/30">
      <div className="absolute inset-0 subtle-pattern opacity-30 -z-10"></div>

      <div className="container relative z-10">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <span className="rounded-full accent-bg px-3 py-1 text-sm font-medium text-primary border accent-border">
            Portfolio
          </span>
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl gradient-text">Featured Projects</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Explore my data analysis and business intelligence projects that have delivered measurable results and
            business impact.
          </p>
        </div>

        <div className="mt-12">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-12 border accent-border">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.value}
                  value={category.value}
                  className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <category.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{category.label}</span>
                  <span className="sm:hidden">{category.value === "all" ? "All" : category.label.split(" ")[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <motion.div
                ref={ref}
                variants={container}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              >
                {projects.map((project) => (
                  <motion.div key={project.id} variants={item} layout>
                    <Card className="group h-full overflow-hidden transition-all duration-300 hover:shadow-lg border accent-border card-hover">
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
                        <div className="absolute right-4 top-4 flex gap-2">
                          {project.githubUrl && (
                            <Button size="icon" variant="ghost" className="rounded-full bg-background/80" asChild>
                              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                              </a>
                            </Button>
                          )}
                          {project.demoUrl && (
                            <Button size="icon" variant="ghost" className="rounded-full bg-background/80" asChild>
                              <a href={project.demoUrl} target="_blank" rel="noreferrer">
                                <ExternalLink className="h-5 w-5" />
                                <span className="sr-only">Visit Project</span>
                              </a>
                            </Button>
                          )}
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
                          {project.categories.length > 3 && (
                            <Badge variant="outline">+{project.categories.length - 3}</Badge>
                          )}
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
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            {/* Other tabs content would go here - simplified for brevity */}
            {categories.slice(1).map((category) => (
              <TabsContent key={category.value} value={category.value} className="mt-6">
                <div className="text-center py-12">
                  <p className="text-muted-foreground">Filter by {category.label} category to see relevant projects.</p>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-16 flex justify-center">
            <Button size="lg" className="primary-button group" asChild>
              <Link href="/projects">
                View All Projects
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
