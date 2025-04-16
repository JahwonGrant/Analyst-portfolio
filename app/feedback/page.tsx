import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Quote } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { baseMetadata } from "../metadata"

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Client Feedback | Jahwon Grant",
  description: "Testimonials and feedback from clients and colleagues about Jahwon Grant's data analytics work.",
}

export default function FeedbackPage() {
  const testimonials = [
    {
      quote:
        "Jahwon's data analysis skills transformed our business. His Tableau dashboards reduced our reporting time dramatically and provided insights we never had before.",
      name: "Sarah Johnson",
      title: "Director of Analytics, BLUEVOYANT",
      avatar: "/images/insight-visuals.png",
      company: "BLUEVOYANT",
      project: "Reporting Dashboard Automation",
      date: "June 2024",
    },
    {
      quote:
        "Working with Jahwon was a game-changer for our sales team. The pipeline tracking application he built increased our productivity by 85% and gave us real-time visibility into our sales process.",
      name: "Michael Chen",
      title: "VP of Sales, BLUEVOYANT",
      avatar: "/images/insight-visuals.png",
      company: "BLUEVOYANT",
      project: "Sales Pipeline Tracking Application",
      date: "May 2024",
    },
    {
      quote:
        "Jahwon's Lean Six Sigma expertise helped us identify and eliminate inefficiencies in our processes. His recommendations led to significant cost savings and improved customer satisfaction.",
      name: "Emily Rodriguez",
      title: "Operations Manager, Progressive Insurance",
      avatar: "/images/insight-visuals.png",
      company: "Progressive Insurance",
      project: "Process Improvement Initiative",
      date: "December 2023",
    },
    {
      quote:
        "The customer segmentation analysis Jahwon performed gave us incredible insights into our market. We were able to tailor our marketing strategies and saw a 32% increase in conversion rates.",
      name: "David Wilson",
      title: "Marketing Director, RetailCo",
      avatar: "/images/insight-visuals.png",
      company: "RetailCo",
      project: "Customer Segmentation Analysis",
      date: "February 2024",
    },
    {
      quote:
        "Jahwon's ability to translate complex data into actionable business recommendations is exceptional. His strategic thinking and technical skills make him a valuable asset to any data-driven organization.",
      name: "Jennifer Lee",
      title: "Chief Data Officer, FinTech Solutions",
      avatar: "/images/insight-visuals.png",
      company: "FinTech Solutions",
      project: "Data Strategy Consulting",
      date: "April 2024",
    },
    {
      quote:
        "The predictive model Jahwon developed for our inventory management has reduced our stockouts by 45% and decreased carrying costs by 28%. His work has had a direct impact on our bottom line.",
      name: "Robert Martinez",
      title: "Supply Chain Manager, Global Retail",
      avatar: "/images/insight-visuals.png",
      company: "Global Retail",
      project: "Inventory Optimization",
      date: "March 2024",
    },
  ]

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-16">
        <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Testimonials</span>
        <h1 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Client Feedback</h1>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          What clients and colleagues say about working with me and the impact of my data analytics solutions.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="h-full transition-all duration-300 hover:shadow-md">
            <CardContent className="p-6">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary/40" />
                </div>
                <p className="flex-1 italic text-muted-foreground mb-6">"{testimonial.quote}"</p>
                <div className="mt-auto">
                  <div className="flex items-center gap-4 pt-4 border-t">
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
                  <div className="mt-4 pt-4 border-t">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="font-medium">Company</p>
                        <p className="text-muted-foreground">{testimonial.company}</p>
                      </div>
                      <div>
                        <p className="font-medium">Project</p>
                        <p className="text-muted-foreground">{testimonial.project}</p>
                      </div>
                      <div className="col-span-2 mt-2">
                        <p className="font-medium">Date</p>
                        <p className="text-muted-foreground">{testimonial.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <Button asChild variant="outline" className="group">
          <Link href="/#testimonials">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  )
}
