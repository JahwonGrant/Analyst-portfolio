"use client"

import { motion } from "framer-motion"
import { BarChart3, Database, LineChart, TrendingUp } from "lucide-react"
import { useInView } from "react-intersection-observer"

import { Card } from "@/components/ui/card"

export default function AboutSection() {
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

  return (
    <section id="about" className="py-24 sm:py-32 bg-muted/30">
      <div className="container">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">About Me</span>
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Turning Data into Decisions</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Born and raised in Miami, Florida, I've always been driven by a passion for problem-solving and helping
            others. I initially started college on a pre-nursing track, but my curiosity for technology and business led
            me to pivot into Management Information Systems.
          </p>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mt-4">
            I earned my MIS degree in 2023 and am currently pursuing my MBA with a concentration in Business Analytics,
            expected in 2026. Go Argos! Along the way, I interned at Progressive Insurance and worked as an HRIS Data
            Analyst at BlueVoyant, where I led high-impact projects in pricing strategy, reporting automation, and
            dashboard development.
          </p>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mt-4">
            Today, I'm a data analyst with over 3 years of experience turning complex datasets into actionable insights.
            My focus areas include data visualization, process improvement, and business intelligence—enabling smarter,
            data-driven decision-making.
          </p>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mt-4">
            Outside of work, I'm a proud member of Omega Psi Phi Fraternity, Inc., where I'm dedicated to youth
            mentorship, community service, and academic excellence. I also stay engaged through professional groups like
            the PMI Emerald Coast Chapter and the Association for Information Systems (AIS) at UWF to continuously
            sharpen my skills.
          </p>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mt-4">
            Looking ahead, my goal is to grow into a leadership role where I can guide teams, drive innovation, and
            share the knowledge I've gained to empower others along the way.
          </p>
          <div className="mt-4 flex items-center justify-center rounded-lg border bg-card p-4 shadow-sm">
            <p className="text-center font-medium">
              <span className="text-primary">Key Achievement:</span> Designed 11 automated Tableau dashboards, reducing
              report generation time from 4–8 hours to 15 minutes, streamlining data reporting and improving efficiency.
            </p>
          </div>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-4 mt-16"
        >
          <motion.div variants={item}>
            <Card className="flex flex-col items-center justify-between p-8 h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <Database className="h-10 w-10 text-primary" />
              </div>
              <div className="space-y-2 text-center mt-6">
                <h3 className="font-bold text-xl">Data Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Expert in statistical techniques, data modeling, and advanced analytics for comprehensive insights.
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="flex flex-col items-center justify-between p-8 h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <BarChart3 className="h-10 w-10 text-primary" />
              </div>
              <div className="space-y-2 text-center mt-6">
                <h3 className="font-bold text-xl">Data Visualization</h3>
                <p className="text-sm text-muted-foreground">
                  Creating impactful visualizations with Tableau and effective data storytelling techniques.
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="flex flex-col items-center justify-between p-8 h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <LineChart className="h-10 w-10 text-primary" />
              </div>
              <div className="space-y-2 text-center mt-6">
                <h3 className="font-bold text-xl">Process Improvement</h3>
                <p className="text-sm text-muted-foreground">
                  Leveraging Lean Six Sigma principles to streamline processes and reduce inefficiencies.
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="flex flex-col items-center justify-between p-8 h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <TrendingUp className="h-10 w-10 text-primary" />
              </div>
              <div className="space-y-2 text-center mt-6">
                <h3 className="font-bold text-xl">Business Intelligence</h3>
                <p className="text-sm text-muted-foreground">
                  Translating data insights into strategic business recommendations and KPIs.
                </p>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
