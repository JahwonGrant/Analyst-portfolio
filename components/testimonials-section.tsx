"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { useInView } from "react-intersection-observer"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TestimonialsSection() {
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

  const testimonials = [
    {
      quote:
        "Jahwon's data analysis skills transformed our business. His Tableau dashboards reduced our reporting time dramatically and provided insights we never had before.",
      name: "Sarah Johnson",
      title: "Director of Analytics, BLUEVOYANT",
      avatar: "/images/insight-visuals.png",
    },
    {
      quote:
        "Working with Jahwon was a game-changer for our sales team. The pipeline tracking application he built increased our productivity by 85% and gave us real-time visibility into our sales process.",
      name: "Michael Chen",
      title: "VP of Sales, BLUEVOYANT",
      avatar: "/images/insight-visuals.png",
    },
    {
      quote:
        "Jahwon's Lean Six Sigma expertise helped us identify and eliminate inefficiencies in our processes. His recommendations led to significant cost savings and improved customer satisfaction.",
      name: "Emily Rodriguez",
      title: "Operations Manager, Progressive Insurance",
      avatar: "/images/insight-visuals.png",
    },
  ]

  const [showPreview, setShowPreview] = useState(false)

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
    <section id="testimonials" className="py-24 sm:py-32 bg-muted/30">
      <div className="container">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Testimonials</span>
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">What People Say</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Feedback from colleagues and clients about my work and impact.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-16"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full transition-all duration-300 hover:shadow-md">
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <Quote className="h-8 w-8 text-primary/40" />
                    </div>
                    <p className="flex-1 italic text-muted-foreground mb-6">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-4 mt-auto pt-4 border-t">
                      <Avatar>
                        <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                        <AvatarFallback>
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
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
                <Card key={index} className="h-full border border-dashed border-primary/30 bg-primary/5">
                  <CardContent className="p-6">
                    <div className="flex flex-col h-full">
                      <div className="mb-4">
                        <Quote className="h-8 w-8 text-primary/40" />
                      </div>
                      <p className="flex-1 italic text-muted-foreground mb-6">"{feedback.quote}"</p>
                      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-dashed border-primary/30">
                        <Avatar>
                          <AvatarImage src={feedback.avatar || "/placeholder.svg"} alt={feedback.name} />
                          <AvatarFallback>
                            {feedback.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{feedback.name}</p>
                          <p className="text-sm text-muted-foreground">{feedback.title}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          )}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" className="group">
            <Link href="/feedback">
              View All Feedback
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
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
