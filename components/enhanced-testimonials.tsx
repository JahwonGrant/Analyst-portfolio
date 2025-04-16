"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Testimonial {
  id: number
  quote: string
  author: string
  position: string
  company: string
  avatar: string
  logo?: string
  rating?: number
  project?: string
}

interface EnhancedTestimonialsProps {
  testimonials: Testimonial[]
}

export function EnhancedTestimonials({ testimonials }: EnhancedTestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const startAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        setDirection(1)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      }
    }, 8000)
  }

  useEffect(() => {
    startAutoplay()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPaused, testimonials.length])

  const handlePrev = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    startAutoplay()
  }

  const handleNext = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    startAutoplay()
  }

  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        className={`h-5 w-5 ${index < rating ? "text-yellow-400" : "text-gray-300"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <div className="relative overflow-hidden py-12" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
        <Quote className="h-16 w-16 text-primary/10" />
      </div>

      <div className="max-w-5xl mx-auto px-4 relative">
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-8 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-primary/20"
                }`}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="relative h-[400px] md:h-[300px]">
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "tween", duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className="bg-background border accent-border rounded-xl p-8 md:p-12 shadow-lg h-full flex flex-col justify-between">
                <div>
                  {testimonials[currentIndex].rating && (
                    <div className="flex mb-4">{renderStars(testimonials[currentIndex].rating!)}</div>
                  )}

                  <p className="text-xl md:text-2xl italic mb-8">"{testimonials[currentIndex].quote}"</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 border-2 border-primary/20">
                      <AvatarImage
                        src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                        alt={testimonials[currentIndex].author}
                      />
                      <AvatarFallback>
                        {testimonials[currentIndex].author
                          .split(" ")
                          .map((name) => name[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonials[currentIndex].author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                      </p>
                      {testimonials[currentIndex].project && (
                        <p className="text-xs text-primary mt-1">Project: {testimonials[currentIndex].project}</p>
                      )}
                    </div>
                  </div>

                  {testimonials[currentIndex].logo && (
                    <div className="hidden md:block h-10 w-24 relative">
                      <Image
                        src={testimonials[currentIndex].logo || "/placeholder.svg"}
                        alt={testimonials[currentIndex].company}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrev}
            className="rounded-full"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            className="rounded-full"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
