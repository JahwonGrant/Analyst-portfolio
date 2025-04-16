"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SkillsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  const skillCategories = [
    {
      category: "Data Analysis",
      skills: [
        { name: "Statistical Analysis", level: 95 },
        { name: "Data Modeling", level: 90 },
        { name: "Big Data Analytics", level: 85 },
        { name: "ETL Processes", level: 88 },
        { name: "Advanced Analytics", level: 92 },
      ],
    },
    {
      category: "Data Visualization",
      skills: [
        { name: "Tableau", level: 95 },
        { name: "Data Storytelling", level: 90 },
        { name: "Excel", level: 95 },
        { name: "Dashboard Design", level: 92 },
        { name: "Reporting Automation", level: 94 },
      ],
    },
    {
      category: "Business Intelligence",
      skills: [
        { name: "Strategic Decision-Making", level: 88 },
        { name: "Business Acumen", level: 90 },
        { name: "Data Quality Management", level: 92 },
        { name: "Process Improvement", level: 95 },
        { name: "Lean Six Sigma", level: 96 },
      ],
    },
  ]

  const toolsByCategory = {
    technical: ["Python", "R", "SQL", "MySQL", "SSAS", "SSIS", "ETL", "Statistical Modeling"],
    visualization: ["Tableau", "Excel", "Dashboard Design", "Data Storytelling", "Reporting Automation"],
    methodologies: [
      "Lean Six Sigma",
      "Agile Modeling",
      "MoSCoW Prioritization",
      "Latent Class Analysis",
      "Process Improvement",
    ],
    business: [
      "Business Acumen",
      "Strategic Decision-Making",
      "Data Quality",
      "Requirements Gathering",
      "Stakeholder Communication",
    ],
  }

  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Expertise</span>
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Skills & Proficiencies</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            My technical skills and expertise in data analysis, visualization, and business intelligence.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-16"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full transition-all duration-300 hover:shadow-md">
                <CardHeader>
                  <CardTitle>{category.category}</CardTitle>
                  <CardDescription>
                    My proficiency in {category.category.toLowerCase()} tools and techniques
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                        <motion.div
                          className="h-full bg-primary"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.2 * skillIndex }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Tools & Technologies</CardTitle>
              <CardDescription className="text-center">
                The technologies and methodologies I use to deliver results
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="technical" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                  <TabsTrigger value="technical">Technical</TabsTrigger>
                  <TabsTrigger value="visualization">Visualization</TabsTrigger>
                  <TabsTrigger value="methodologies">Methodologies</TabsTrigger>
                  <TabsTrigger value="business">Business</TabsTrigger>
                </TabsList>
                {Object.entries(toolsByCategory).map(([category, tools]) => (
                  <TabsContent key={category} value={category} className="mt-6">
                    <div className="flex flex-wrap justify-center gap-2">
                      {tools.map((tool, index) => (
                        <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
