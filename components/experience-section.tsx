"use client"

import { motion } from "framer-motion"
import { CalendarIcon, GraduationCap, Briefcase, Award, FileText } from "lucide-react"
import { useInView } from "react-intersection-observer"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ExperienceSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  const workExperience = [
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
        "Analyzed 20GB of data to determine the best pricing strategy for 10 new products; identified opportunities that increased revenue by $1.75M annually.",
      ],
    },
    {
      title: "Data Analyst internship",
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
      courses: [
        "Advanced BI Applications",
        "Quantitative Methods",
        "Business Process Integration",
        "Financial Management",
        "Strategic Policy & Strategy",
        "Compensation & Benefits",
        "HR Management",
      ],
    },
    {
      degree: "Bachelor's in Management Information Systems",
      institution: "University of West Florida",
      period: "Aug 2017 - May 2023",
      description: "Focused on information systems with coursework in calculus and information security.",
      courses: ["MAC 2233 - Calculus with Business Applications", "ISM 3323 - Information Security Management"],
    },
  ]

  const certifications = [
    {
      name: "Lean Six Sigma Black Belt (ICBB)",
      issuer: "The Council for Six Sigma Certification (CSSC)",
      date: "Jan 2025",
      description: "Advanced certification in Lean Six Sigma methodologies for process improvement and efficiency.",
    },
  ]

  const publications = [
    {
      title: "The Future of Feedback: AI Chatbots in Employee Engagement",
      publisher: "University of West Florida, College of Business",
      date: "2024",
      description: "Research on the application of AI chatbots for improving employee engagement and feedback systems.",
    },
  ]

  return (
    <section id="experience" className="py-24 sm:py-32 bg-muted/30">
      <div className="container">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Journey</span>
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Experience & Education</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            My professional journey, educational background, and certifications in data analytics.
          </p>
        </div>

        <Tabs defaultValue="work" className="mt-12">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="work" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              <span className="hidden sm:inline">Work Experience</span>
              <span className="sm:hidden">Work</span>
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              <span className="hidden sm:inline">Education</span>
              <span className="sm:hidden">Edu</span>
            </TabsTrigger>
            <TabsTrigger value="certifications" className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span className="hidden sm:inline">Certifications</span>
              <span className="sm:hidden">Certs</span>
            </TabsTrigger>
            <TabsTrigger value="publications" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Publications</span>
              <span className="sm:hidden">Pubs</span>
            </TabsTrigger>
          </TabsList>

          <motion.div ref={ref} variants={container} initial="hidden" animate={inView ? "show" : "hidden"}>
            <TabsContent value="work" className="space-y-6">
              {workExperience.map((job, index) => (
                <motion.div key={index} variants={item}>
                  <Card className="overflow-hidden border-l-4 border-l-primary">
                    <CardHeader className="bg-muted/50">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                        <div>
                          <CardTitle className="text-xl md:text-2xl">{job.title}</CardTitle>
                          <CardDescription className="text-base">{job.company}</CardDescription>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground bg-background/80 px-3 py-1 rounded-full self-start">
                          <CalendarIcon className="mr-1 h-3 w-3" />
                          {job.period}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4 pt-6">
                      <p>{job.description}</p>
                      <div>
                        <h4 className="font-medium text-lg mb-2">Key Achievements:</h4>
                        <ul className="space-y-3">
                          {job.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start gap-2">
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-sm">
                                {achievementIndex + 1}
                              </span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </TabsContent>

            <TabsContent value="education" className="space-y-6">
              {education.map((edu, index) => (
                <motion.div key={index} variants={item}>
                  <Card className="overflow-hidden border-l-4 border-l-primary">
                    <CardHeader className="bg-muted/50">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                        <div>
                          <CardTitle className="text-xl md:text-2xl">{edu.degree}</CardTitle>
                          <CardDescription className="text-base">{edu.institution}</CardDescription>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground bg-background/80 px-3 py-1 rounded-full self-start">
                          <CalendarIcon className="mr-1 h-3 w-3" />
                          {edu.period}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4 pt-6">
                      <p>{edu.description}</p>
                      <div>
                        <h4 className="font-medium text-lg mb-2">Relevant Coursework:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {edu.courses.map((course, courseIndex) => (
                            <div key={courseIndex} className="flex items-center gap-2 bg-muted/50 p-2 rounded-md">
                              <GraduationCap className="h-4 w-4 text-primary" />
                              <span>{course}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </TabsContent>

            <TabsContent value="certifications">
              <div className="grid gap-6 sm:grid-cols-2">
                {certifications.map((cert, index) => (
                  <motion.div key={index} variants={item}>
                    <Card className="h-full border-t-4 border-t-primary transition-all duration-300 hover:shadow-md">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-xl">{cert.name}</CardTitle>
                          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10">
                            <Award className="h-5 w-5 text-primary" />
                          </div>
                        </div>
                        <CardDescription className="text-base">
                          {cert.issuer} • {cert.date}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>{cert.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="publications">
              <div className="grid gap-6 sm:grid-cols-2">
                {publications.map((pub, index) => (
                  <motion.div key={index} variants={item}>
                    <Card className="h-full border-t-4 border-t-primary transition-all duration-300 hover:shadow-md">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-xl">{pub.title}</CardTitle>
                          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10">
                            <FileText className="h-5 w-5 text-primary" />
                          </div>
                        </div>
                        <CardDescription className="text-base">
                          {pub.publisher} • {pub.date}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>{pub.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </motion.div>
        </Tabs>
      </div>
    </section>
  )
}
