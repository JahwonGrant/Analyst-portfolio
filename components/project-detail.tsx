"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Github, ExternalLink, FileText, BarChart2, Database, Code, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Project } from "@/lib/projects"

interface ProjectDetailProps {
  project: Project
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const [activeTab, setActiveTab] = useState("overview")

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <motion.div className="max-w-5xl mx-auto" initial="hidden" animate="visible" variants={staggerContainer}>
      <motion.div variants={fadeIn} className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.categories.map((category) => (
            <Badge key={category} variant="secondary" className="text-sm">
              {category}
            </Badge>
          ))}
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 executive-text-gradient">
          {project.title}
        </h1>
        <p className="text-xl text-muted-foreground mb-6">{project.summary}</p>
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex items-center gap-2 text-sm">
            <FileText className="h-4 w-4 text-primary" />
            <span>
              <span className="font-medium">Date:</span> {project.date}
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn}
        className="relative aspect-video w-full overflow-hidden rounded-lg border accent-border mb-12"
      >
        <Image
          src={project.coverImage || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      <motion.div variants={fadeIn}>
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8 border accent-border">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="situation"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Situation
            </TabsTrigger>
            <TabsTrigger
              value="task"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Task
            </TabsTrigger>
            <TabsTrigger
              value="action"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Action
            </TabsTrigger>
            <TabsTrigger
              value="results"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Results
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>{project.overview}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-muted/30 p-6 rounded-lg border accent-border">
                <h3 className="text-lg font-medium mb-3 executive-text-gradient">Tools Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <Badge key={tool.name} variant="outline" className="py-1.5">
                      {tool.icon && <span className="mr-1">{tool.icon}</span>}
                      {tool.name}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg border accent-border">
                <h3 className="text-lg font-medium mb-3 executive-text-gradient">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="py-1.5">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg border accent-border">
                <h3 className="text-lg font-medium mb-3 executive-text-gradient">Key Metrics</h3>
                <div className="space-y-2">
                  {project.impact.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm">{item.metric}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{item.value}</span>
                        <span
                          className={`text-xs ${item.change.startsWith("+") ? "text-emerald-500" : "text-rose-500"}`}
                        >
                          {item.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="situation" className="space-y-6">
            <Card className="border accent-border">
              <CardHeader>
                <CardTitle className="text-xl executive-text-gradient">Situation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p>{project.situation}</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="task" className="space-y-6">
            <Card className="border accent-border">
              <CardHeader>
                <CardTitle className="text-xl executive-text-gradient">Task</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p>{project.task}</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="action" className="space-y-6">
            <Card className="border accent-border">
              <CardHeader>
                <CardTitle className="text-xl executive-text-gradient">Action</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p>{project.action}</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="results" className="space-y-6">
            <Card className="border accent-border">
              <CardHeader>
                <CardTitle className="text-xl executive-text-gradient">Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p>{project.results}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  {project.impact.map((item, index) => (
                    <div key={index} className="bg-muted/30 p-4 rounded-lg border accent-border text-center">
                      <p className="text-sm text-muted-foreground mb-1">{item.metric}</p>
                      <p className="text-2xl font-bold">{item.value}</p>
                      <p className={`text-sm ${item.change.startsWith("+") ? "text-emerald-500" : "text-rose-500"}`}>
                        {item.change}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>

      {project.visualizations && project.visualizations.length > 0 && (
        <motion.div variants={fadeIn} className="mb-12">
          <h2 className="text-2xl font-serif font-bold mb-6 executive-text-gradient">Data Visualizations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.visualizations.map((viz, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background border accent-border rounded-lg overflow-hidden"
              >
                <div className="aspect-video relative">
                  <Image src={viz.image || "/placeholder.svg"} alt={viz.title} fill className="object-cover" />
                  {viz.type === "chart" && (
                    <div className="absolute top-3 right-3 bg-primary/90 text-primary-foreground px-2 py-1 rounded text-xs">
                      <BarChart2 className="h-3 w-3 inline-block mr-1" />
                      Chart
                    </div>
                  )}
                  {viz.type === "dashboard" && (
                    <div className="absolute top-3 right-3 bg-primary/90 text-primary-foreground px-2 py-1 rounded text-xs">
                      <Database className="h-3 w-3 inline-block mr-1" />
                      Dashboard
                    </div>
                  )}
                  {viz.type === "diagram" && (
                    <div className="absolute top-3 right-3 bg-primary/90 text-primary-foreground px-2 py-1 rounded text-xs">
                      <Code className="h-3 w-3 inline-block mr-1" />
                      Diagram
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-2">{viz.title}</h3>
                  <p className="text-sm text-muted-foreground">{viz.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      <motion.div
        variants={fadeIn}
        className="flex flex-col md:flex-row justify-between items-center gap-4 border-t pt-8"
      >
        <div className="flex gap-4">
          <Button asChild variant="outline" className="group">
            <Link href="/projects">
              <ArrowRight className="mr-2 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
              Back to Projects
            </Link>
          </Button>

          {project.githubUrl && (
            <Button asChild variant="outline" className="group">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View Code
              </a>
            </Button>
          )}

          {project.demoUrl && (
            <Button asChild variant="outline" className="group">
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
        </div>

        <Button asChild className="executive-button group">
          <Link href="/contact">
            <Mail className="mr-2 h-4 w-4" />
            Discuss This Project
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  )
}
