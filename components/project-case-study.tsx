"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, FileText, BarChart2, Database, Code } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

interface ProjectCaseStudyProps {
  project: {
    id: string
    title: string
    slug: string
    summary: string
    description: string
    coverImage: string
    challenge: string
    approach: string
    solution: string
    results: string
    impact: {
      metric: string
      value: string
      change: string
    }[]
    tools: string[]
    technologies: string[]
    categories: string[]
    date: string
    client?: string
    testimonial?: {
      quote: string
      author: string
      position: string
      company: string
    }
    visualizations: {
      title: string
      description: string
      image: string
      type: "chart" | "dashboard" | "image"
    }[]
  }
}

export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
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
          {project.client && (
            <div className="flex items-center gap-2 text-sm">
              <Database className="h-4 w-4 text-primary" />
              <span>
                <span className="font-medium">Client:</span> {project.client}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="relative aspect-video w-full overflow-hidden rounded-lg border accent-border mb-12">
        <Image
          src={project.coverImage || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="mb-12">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8 border accent-border">
          <TabsTrigger
            value="overview"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="challenge"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Challenge
          </TabsTrigger>
          <TabsTrigger
            value="approach"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Approach
          </TabsTrigger>
          <TabsTrigger
            value="solution"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Solution
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
            <div dangerouslySetInnerHTML={{ __html: project.description }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-muted/30 p-6 rounded-lg border accent-border">
              <h3 className="text-lg font-medium mb-3 executive-text-gradient">Tools Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <Badge key={tool} variant="outline">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="bg-muted/30 p-6 rounded-lg border accent-border">
              <h3 className="text-lg font-medium mb-3 executive-text-gradient">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline">
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
                      <span className={`text-xs ${item.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}>
                        {item.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="challenge" className="space-y-6">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: project.challenge }} />
          </div>
        </TabsContent>

        <TabsContent value="approach" className="space-y-6">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: project.approach }} />
          </div>
        </TabsContent>

        <TabsContent value="solution" className="space-y-6">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: project.solution }} />
          </div>
        </TabsContent>

        <TabsContent value="results" className="space-y-6">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: project.results }} />
          </div>

          {project.testimonial && (
            <div className="bg-muted/30 p-6 rounded-lg border accent-border mt-8">
              <blockquote className="italic text-lg mb-4">"{project.testimonial.quote}"</blockquote>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-medium">
                    {project.testimonial.author
                      .split(" ")
                      .map((name) => name[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="font-medium">{project.testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {project.testimonial.position}, {project.testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          )}
        </TabsContent>
      </Tabs>

      <div className="mb-12">
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
                    <Code className="h-3 w-3 inline-block mr-1" />
                    Dashboard
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
      </div>

      <div className="flex justify-between items-center border-t pt-8">
        <Button asChild variant="outline" className="group">
          <Link href="/projects">
            <ArrowRight className="mr-2 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </Link>
        </Button>
        <Button asChild className="executive-button group">
          <Link href="/contact">
            Discuss a Similar Project
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
