"use client"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import StatsCards from "@/components/stats-cards"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"

export default function ClientPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <StatsCards />
      <TestimonialsSection />
      <ContactSection />
      <SiteFooter />
    </main>
  )
}
