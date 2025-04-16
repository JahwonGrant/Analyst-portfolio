"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion, useAnimation, useInView } from "framer-motion"
import {
  ArrowRight,
  Download,
  ChevronDown,
  ExternalLink,
  BarChart2,
  Database,
  TrendingUp,
  LineChart,
} from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"

export type ContactCategory = "general" | "job" | "consulting" | "freelance" | "other"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <ProjectsSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  )
}

function HeroSection() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, threshold: 0.3 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-10 -z-10"></div>

      <div className="executive-container py-20">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid items-center gap-12 md:grid-cols-2"
        >
          <div className="space-y-8 order-2 md:order-1">
            <motion.div variants={itemVariants} className="space-y-4">
              <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                Data Analytics Leadership
              </span>
              <h1 className="executive-heading">
                <span className="block text-foreground">Jahwon Grant</span>
                <span className="block executive-text-gradient">Data Analytics & Business Intelligence Leader</span>
              </h1>
              <p className="executive-paragraph max-w-[600px]">
                Transforming complex data into strategic insights that drive business growth and operational excellence.
                MBA candidate with expertise in data visualization, process improvement, and Lean Six Sigma
                methodologies.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="executive-button group">
                <Link href="#projects">
                  View My Portfolio
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="group">
                <Link href="/resume.pdf">
                  <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                  Download Resume
                </Link>
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-4 pt-4">
              <Link
                href="https://www.linkedin.com/in/jahwongrant/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
              <Link
                href="https://github.com/JahwonGrant"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </Link>
              <Link
                href="mailto:jahwongrant@gmail.com"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                aria-label="Email"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </Link>
            </motion.div>
          </div>

          <motion.div variants={imageVariants} className="flex justify-center order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 blur-xl opacity-70"></div>
              <div className="relative h-[280px] w-[280px] overflow-hidden rounded-full border-4 border-background bg-muted sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px]">
                <Image src="/images/headshot.jpg" alt="Jahwon Grant" fill className="object-cover" priority />
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center"
        >
          <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
          <ChevronDown className="h-6 w-6 text-muted-foreground animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}

function AboutSection() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section id="about" className="executive-section bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10 -z-10"></div>

      <div className="executive-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
              About Me
            </span>
            <h2 className="executive-heading">Transforming Data into Strategic Decisions</h2>
            <div className="w-20 h-1 bg-accent mx-auto mt-6"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6 executive-paragraph">
            <p>
              Born and raised in Miami, Florida, I've always been driven by a passion for problem-solving and helping
              others. I initially started college on a pre-nursing track, but my curiosity for technology and business
              led me to pivot into Management Information Systems.
            </p>
            <p>
              I earned my MIS degree in 2023 and am currently pursuing my MBA with a concentration in Business
              Analytics, expected in 2026. Along the way, I interned at Progressive Insurance and worked as an HRIS Data
              Analyst at BlueVoyant, where I led high-impact projects in pricing strategy, reporting automation, and
              dashboard development.
            </p>
            <p>
              Today, I'm a data analyst with over 3 years of experience turning complex datasets into actionable
              insights. My focus areas include data visualization, process improvement, and business
              intelligence—enabling smarter, data-driven decision-making.
            </p>
            <p>
              Outside of work, I'm a proud member of Omega Psi Phi Fraternity, Inc., where I'm dedicated to youth
              mentorship, community service, and academic excellence. I also stay engaged through professional groups
              like the PMI Emerald Coast Chapter and the Association for Information Systems (AIS) at UWF to
              continuously sharpen my skills.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-10 p-6 bg-background rounded-lg border border-border shadow-sm"
          >
            <p className="text-center font-medium">
              <span className="text-primary font-bold">Key Achievement:</span> Designed 11 automated Tableau dashboards,
              reducing report generation time from 4–8 hours to 15 minutes, streamlining data reporting and improving
              efficiency.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function ExpertiseSection() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const expertiseAreas = [
    {
      title: "Data Analysis",
      description:
        "Expert in statistical techniques, data modeling, and advanced analytics for comprehensive insights.",
      icon: Database,
    },
    {
      title: "Data Visualization",
      description: "Creating impactful visualizations with Tableau and effective data storytelling techniques.",
      icon: BarChart2,
    },
    {
      title: "Process Improvement",
      description: "Leveraging Lean Six Sigma principles to streamline processes and reduce inefficiencies.",
      icon: TrendingUp,
    },
    {
      title: "Business Intelligence",
      description: "Translating data insights into strategic business recommendations and KPIs.",
      icon: LineChart,
    },
  ]

  return (
    <section id="expertise" className="executive-section relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-10 -z-10"></div>

      <div className="executive-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
              Core Expertise
            </span>
            <h2 className="executive-heading">Areas of Specialization</h2>
            <p className="executive-paragraph max-w-2xl mx-auto mt-4">
              My professional expertise spans multiple domains of data analytics and business intelligence, delivering
              measurable results and driving strategic decision-making.
            </p>
            <div className="w-20 h-1 bg-accent mx-auto mt-6"></div>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-background border border-border rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-6">
                  <area.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-3">{area.title}</h3>
                <p className="text-muted-foreground">{area.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-16 text-center">
            <Button asChild size="lg" className="executive-button group">
              <Link href="#projects">
                View Related Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectsSection() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const projects = [
    {
      title: "Automated Tableau Dashboards",
      description:
        "Built 11 automated reporting dashboards using Tableau, reducing report creation time from 4-8 hours to 15 minutes per report.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Tableau", "Data Visualization", "Process Automation"],
      link: "#",
      slug: "automated-tableau-dashboards",
    },
    {
      title: "Sales Pipeline Tracking Application",
      description:
        "Created a web application that allowed 300 sales representatives to track their pipeline in real-time, increasing productivity by 85%.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Web Development", "Data Analysis", "Sales Analytics"],
      link: "#",
      slug: "sales-pipeline-tracking-application",
    },
    {
      title: "Pricing Strategy Optimization",
      description:
        "Analyzed 20GB of data to determine the best pricing strategy for 10 new products, identifying opportunities that increased revenue by $1.75M annually.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Pricing Analytics", "Revenue Optimization", "Market Analysis"],
      link: "#",
      slug: "pricing-strategy-optimization",
    },
  ]

  return (
    <section id="projects" className="executive-section bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10 -z-10"></div>

      <div className="executive-container">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={controls}>
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
              Portfolio
            </span>
            <h2 className="executive-heading">Featured Projects</h2>
            <p className="executive-paragraph max-w-2xl mx-auto mt-4">
              A selection of my most impactful data analytics and business intelligence projects that have delivered
              measurable results.
            </p>
            <div className="w-20 h-1 bg-accent mx-auto mt-6"></div>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-background border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-medium mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                  >
                    View Project <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-16 text-center">
            <Button asChild size="lg" className="executive-button group">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function ExperienceSection() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const experiences = [
    {
      title: "HRIS Data Analyst (Contract)",
      company: "BLUEVOYANT, Inc.",
      period: "Dec 2023 - Jun 2024",
      description:
        "Focused on data analysis, reporting automation, and process improvement to enhance operational efficiency.",
      achievements: [
        "Developed a process that collated 2K customer feedback through email surveys after each sale, which garnered 74 responses a week after implementation and snowballed to a 120% response rate later.",
        "Built 11 automated reporting dashboards using Tableau, reducing report creation time from 4-8 hours to 15 minutes per report.",
        "Created a web application that allowed 300 sales representatives to track their pipeline in real-time, increasing productivity by 85% across all reps.",
      ],
    },
    {
      title: "Data Analyst Internship",
      company: "Progressive Insurance Company",
      period: "Dec 2021 - Dec 2023",
      description: "Focused on project monitoring, reporting, and process improvement to enhance business efficiency.",
      achievements: [
        "Created 19 automated systems that monitored and reported project status, which improved overall business efficiency by 15% QoQ.",
        "Created 7 detailed project plans that included the scope of work, timelines, resource needs, dependencies, risks, and mitigation strategies for Growths within 3 weeks of resumption.",
        "Brainstormed with 7 departments to understand requirements and provided recommendations that improved processes, reduced costs, increased revenue, and enhanced customer experience north of 79%.",
      ],
    },
  ]

  const education = [
    {
      degree: "Master of Business Administration in Business Analytics",
      institution: "University of West Florida",
      period: "2023 - 2025",
      description: "Specialized in business analytics and data science with focus on strategic analysis.",
    },
    {
      degree: "Bachelor's in Management Information Systems",
      institution: "University of West Florida",
      period: "Aug 2017 - May 2023",
      description: "Focused on information systems with coursework in calculus and information security.",
    },
  ]

  return (
    <section id="experience" className="executive-section relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-10 -z-10"></div>

      <div className="executive-container">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={controls}>
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
              Professional Journey
            </span>
            <h2 className="executive-heading">Experience & Education</h2>
            <p className="executive-paragraph max-w-2xl mx-auto mt-4">
              My professional journey, educational background, and certifications in data analytics.
            </p>
            <div className="w-20 h-1 bg-accent mx-auto mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div variants={containerVariants}>
              <motion.h3 variants={itemVariants} className="text-2xl font-serif font-medium mb-8 flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-briefcase"
                  >
                    <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </span>
                Work Experience
              </motion.h3>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative pl-8 border-l-2 border-primary/20 pb-8 last:pb-0"
                  >
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                    <div className="bg-background border border-border rounded-lg p-6 shadow-sm">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                        <h4 className="text-xl font-serif font-medium">{exp.title}</h4>
                        <span className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-lg font-medium text-primary mb-2">{exp.company}</p>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={containerVariants}>
              <motion.h3 variants={itemVariants} className="text-2xl font-serif font-medium mb-8 flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-graduation-cap"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                  </svg>
                </span>
                Education
              </motion.h3>

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative pl-8 border-l-2 border-primary/20 pb-8 last:pb-0"
                  >
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                    <div className="bg-background border border-border rounded-lg p-6 shadow-sm">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                        <h4 className="text-xl font-serif font-medium">{edu.degree}</h4>
                        <span className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-lg font-medium text-primary mb-2">{edu.institution}</p>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={itemVariants} className="mt-12">
                <div className="bg-background border border-border rounded-lg p-6 shadow-sm">
                  <h4 className="text-xl font-serif font-medium mb-4">Certifications</h4>
                  <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.11"></path>
                        <circle cx="12" cy="8" r="7"></circle>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Lean Six Sigma Black Belt (ICBB)</p>
                      <p className="text-sm text-muted-foreground">
                        The Council for Six Sigma Certification (CSSC) • Jan 2025
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const testimonials = [
    {
      quote:
        "Jahwon's data analysis skills transformed our business. His Tableau dashboards reduced our reporting time dramatically and provided insights we never had before.",
      name: "Sarah Johnson",
      title: "Director of Analytics, BLUEVOYANT",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "Working with Jahwon was a game-changer for our sales team. The pipeline tracking application he built increased our productivity by 85% and gave us real-time visibility into our sales process.",
      name: "Michael Chen",
      title: "VP of Sales, BLUEVOYANT",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "Jahwon's Lean Six Sigma expertise helped us identify and eliminate inefficiencies in our processes. His recommendations led to significant cost savings and improved customer satisfaction.",
      name: "Emily Rodriguez",
      title: "Operations Manager, Progressive Insurance",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section id="testimonials" className="executive-section bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10 -z-10"></div>

      <div className="executive-container">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={controls}>
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
              Testimonials
            </span>
            <h2 className="executive-heading">What People Say</h2>
            <p className="executive-paragraph max-w-2xl mx-auto mt-4">
              Feedback from colleagues and clients about my work and impact.
            </p>
            <div className="w-20 h-1 bg-accent mx-auto mt-6"></div>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-background border border-border rounded-lg p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary/20 mb-6"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                </svg>
                <p className="italic text-muted-foreground mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden bg-muted">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function ContactSection() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    category: "general" as ContactCategory,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Send the form data to our API
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      // Reset form and show success message
      setFormState({ name: "", email: "", subject: "", message: "", category: "general" })
      setSubmitStatus("success")
    } catch (error) {
      console.error("Error sending message:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="executive-section relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-10 -z-10"></div>

      <div className="executive-container">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={controls}>
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
              Get In Touch
            </span>
            <h2 className="executive-heading">Let's Connect</h2>
            <p className="executive-paragraph max-w-2xl mx-auto mt-4">
              Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
            </p>
            <div className="w-20 h-1 bg-accent mx-auto mt-6"></div>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants} className="bg-background border border-border rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-serif font-medium mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:jahwongrant@gmail.com" className="text-primary hover:underline">
                      jahwongrant@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+17868689730" className="text-primary hover:underline">
                      +1 (786) 868-9730
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Pensacola, Florida, United States</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-medium mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  <Link
                    href="https://linkedin.com/in/jahwongrant"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </Link>
                  <Link
                    href="https://github.com/JahwonGrant"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </Link>
                  <Link
                    href="https://twitter.com/jahwongrant"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                    aria-label="Twitter"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-background border border-border rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-serif font-medium mb-6">Send a Message</h3>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="What is this regarding?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium mb-2">
                    Message Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formState.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  >
                    <option value="general">General Inquiry</option>
                    <option value="job">Job Opportunity</option>
                    <option value="consulting">Consulting Project</option>
                    <option value="freelance">Freelance Work</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>

                {submitStatus === "success" && (
                  <div className="p-3 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-md">
                    Your message has been sent successfully! I'll get back to you soon.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-3 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-md">
                    There was an error sending your message. Please try again or email me directly.
                  </div>
                )}

                <Button type="submit" className="executive-button w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2"
                    >
                      <path d="m22 2-7 20-4-9-9-4Z"></path>
                      <path d="M22 2 11 13"></path>
                    </svg>
                  )}
                </Button>
              </form>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
