"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Script from "next/script"
import { motion, useAnimation, useInView } from "framer-motion"
import { ArrowRight, ChevronDown, ExternalLink, BarChart2, Database, TrendingUp, LineChart } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"

export type ContactCategory = "general" | "job" | "consulting" | "freelance" | "other"

export default function HomePage() {
  return (
    <>
      {/* Formspree Widget Script */}
      <Script id="formspree-widget" strategy="afterInteractive">
        {`
          window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
          formbutton("create", {
            action: "https://formspree.io/f/mwpljkod",
            title: "Contact Me",
            description: "I'll get back to you within 24-48 hours.",
            fields: [
              { 
                type: "email", 
                label: "Your Email:", 
                name: "email",
                required: true,
                placeholder: "your@email.com"
              },
              {
                type: "text",
                label: "Your Name:",
                name: "name",
                required: true,
                placeholder: "John Doe"
              },
              {
                type: "select",
                label: "Inquiry Type:",
                name: "category",
                options: [
                  { label: "Job Opportunity", value: "job" },
                  { label: "Consulting", value: "consulting" },
                  { label: "Freelance Work", value: "freelance" },
                  { label: "General Inquiry", value: "general" },
                  { label: "Other", value: "other" }
                ]
              },
              {
                type: "textarea",
                label: "Message:",
                name: "message",
                placeholder: "How can I help you?",
                required: true
              },
              { type: "submit" }      
            ],
            styles: {
              title: {
                backgroundColor: "#3b82f6"
              },
              button: {
                backgroundColor: "#3b82f6"
              },
              description: {
                color: "#64748b"
              }
            },
            initiallyVisible: false
          });
        `}
      </Script>
      <Script src="https://formspree.io/js/formbutton-v1.min.js" strategy="afterInteractive" />

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
              Born and raised in Miami, Florida, I've always been driven by a natural curiosity for solving problems and
              making a meaningful impact. I originally started college on a pre-nursing path, but it didn't take long
              for me to realize my true interest was at the intersection of technology and business. That shift led me
              to pursue a degree in Management Information Systems, which I earned in 2023.
            </p>
            <p>
              Now, I'm a data analyst with 3+ years of experience helping organizations turn complex data into clear,
              actionable insights. I've worked on everything from pricing strategy and reporting automation to
              full-scale dashboard development. My foundation is built on strong technical skills, but my real value
              comes from bridging data with business goals—translating numbers into stories that drive decisions.
            </p>
            <p>
              Currently, I'm pursuing my MBA with a concentration in Business Analytics (expected 2026), continuing to
              sharpen my skills in areas like data visualization, process improvement, and Lean Six Sigma methodologies.
              I've had the opportunity to work as a Data Analyst at Progressive Insurance and as an HRIS Data Analyst at
              BlueVoyant, where I collaborated with cross-functional teams on high-impact projects that boosted
              operational efficiency and strengthened business intelligence across the organization.
            </p>
            <p>
              Outside of the 9-to-5, I stay connected to my values through my involvement with Omega Psi Phi Fraternity,
              Inc.—mentoring youth, serving my community, and promoting academic excellence. I'm also active in
              professional groups like the PMI Emerald Coast Chapter and the Association for Information Systems at UWF,
              where I continue to learn, collaborate, and grow both personally and professionally.
            </p>
            <p>
              In addition to analytics, I've developed a strong interest in full-stack web and app development. I've
              been building hands-on skills in HTML, CSS, JavaScript, React, and Tailwind CSS—along with version control
              using Git and GitHub. My portfolio site was designed and developed entirely by me, and it reflects both my
              technical growth and creative approach to problem-solving. Whether it's building interactive dashboards or
              designing clean, responsive interfaces, I enjoy the process of bringing ideas to life through code.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-10 p-6 bg-background rounded-lg border border-border shadow-sm"
          >
            <p className="text-center font-medium">
              <span className="text-primary font-bold">Highlights:</span> SQL • ETL Pipelines • Agile • Tableau •
              Communication Skills • Data Cleaning & Preparation • Data Integrity • Data Warehousing
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

          {/* Removed the "View Related Projects" button as requested */}
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
      image: "/images/project-placeholder.png",
      tags: ["Tableau", "Data Visualization", "Process Automation"],
      link: "#",
      slug: "automated-tableau-dashboards",
    },
    {
      title: "Sales Pipeline Tracking Application",
      description:
        "Created a web application that allowed 300 sales representatives to track their pipeline in real-time, increasing productivity by 85%.",
      image: "/images/project-placeholder.png",
      tags: ["Web Development", "Data Analysis", "Sales Analytics"],
      link: "#",
      slug: "sales-pipeline-tracking-application",
    },
    {
      title: "Pricing Strategy Optimization",
      description:
        "Analyzed 20GB of data to determine the best pricing strategy for 10 new products, identifying opportunities that increased revenue by $1.75M annually.",
      image: "/images/project-placeholder.png",
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
        "Designed and maintained ETL pipelines for HR data, ensuring accurate data preparation and cleaning before analysis.",
        "Created SQL queries for data extraction and transformation across large datasets, supporting key reporting initiatives.",
        "Operated in a fast-paced, agile environment with minimal supervision and strong communication skills across global teams.",
      ],
    },
    {
      title: "Data Analyst",
      company: "Progressive Insurance Company",
      period: "Dec 2021 - Dec 2023",
      description: "Focused on project monitoring, reporting, and process improvement to enhance business efficiency.",
      achievements: [
        "Developed ETL workflows to integrate cross-departmental data, supporting data cleaning, preserving data quality, and enabling accurate modeling processes.",
        "Collaborated with developers and project managers to translate business needs into data models",
        "Wrote complex SQL queries including joins, subqueries, and aggregations for dashboard backends",
      ],
    },
  ]

  const education = [
    {
      degree: "Master of Business Administration in Business Analytics",
      institution: "University of West Florida",
      period: "May 2024 - Aug 2026",
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
            {/* Work Experience Column - LEFT SIDE */}
            <motion.div
              variants={containerVariants}
              className="order-2 lg:order-1 bg-background/50 p-6 rounded-lg border border-border/50"
            >
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

            {/* Education and Certifications Column - RIGHT SIDE */}
            <motion.div
              variants={containerVariants}
              className="order-1 lg:order-2 bg-background/50 p-6 rounded-lg border border-border/50"
            >
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
  const [showPreview, setShowPreview] = useState(false)

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

  const previewFeedback = [
    {
      quote: "Sample feedback - This will show what your testimonial will look like once submitted.",
      name: "Your Name",
      title: "Your Position, Company",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote: "Another example of how your feedback will be displayed in our testimonial section.",
      name: "Colleague Name",
      title: "Professional Title",
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

          <motion.div variants={itemVariants} className="mt-12 text-center">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-3 w-3 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              Currently gathering feedback
            </div>

            <div className="mb-8">
              <Button variant="outline" onClick={() => setShowPreview(!showPreview)} className="mx-auto">
                {showPreview ? "Hide Preview" : "Preview Feedback Format"}
              </Button>
            </div>

            {showPreview && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="mx-auto grid gap-8 sm:grid-cols-2 max-w-3xl mb-12"
              >
                {previewFeedback.map((feedback, index) => (
                  <div
                    key={index}
                    className="bg-background border border-dashed border-primary/30 bg-primary/5 rounded-lg p-8 shadow-sm"
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
                    <p className="italic text-muted-foreground mb-6">"{feedback.quote}"</p>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full overflow-hidden bg-muted">
                        <Image
                          src={feedback.avatar || "/placeholder.svg"}
                          alt={feedback.name}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">{feedback.name}</p>
                        <p className="text-sm text-muted-foreground">{feedback.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
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
              Have a project in mind or want to discuss potential opportunities? I'd love to hear from you. Use the
              floating contact button in the bottom-right corner to send me a message.
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
                    <p className="text-muted-foreground">Please contact me via email for my number</p>
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
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-background border border-border rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-serif font-medium mb-6">How to Reach Me</h3>

              <div className="space-y-6">
                <p className="text-muted-foreground">
                  I've implemented a convenient floating contact button that you can access from anywhere on this site.
                  Simply click the button in the bottom-right corner to open the contact form.
                </p>

                <div className="p-6 bg-primary/5 rounded-lg border border-primary/10">
                  <h4 className="font-medium mb-2 flex items-center">
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
                      className="mr-2 text-primary"
                    >
                      <path d="m22 2-7 20-4-9-9-4Z"></path>
                      <path d="M22 2 11 13"></path>
                    </svg>
                    Quick Response
                  </h4>
                  <p>
                    I typically respond to all inquiries within 24-48 hours. For urgent matters, please reach out
                    directly via phone.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <h4 className="font-medium">Preferred Contact Methods:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Contact form (fastest response)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Email for detailed project inquiries</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>LinkedIn for professional networking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Phone for urgent matters</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
