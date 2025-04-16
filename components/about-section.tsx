"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

export default function AboutSection() {
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
