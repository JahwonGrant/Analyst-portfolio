"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { useInView } from "react-intersection-observer"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

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
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
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
      </div>
    </section>
  )
}
