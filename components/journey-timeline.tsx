"use client"

import { useEffect, useRef, useState } from "react"
import { Rocket, Lightbulb, Users, TrendingUp, Award, Globe } from "lucide-react"

const milestones = [
  {
    year: "2020",
    title: "The Spark",
    description:
      "Founded by a group of passionate developers with a shared vision to create exceptional digital experiences.",
    icon: Lightbulb,
  },
  {
    year: "2021",
    title: "First Major Client",
    description:
      "Landed our first enterprise client and delivered a cutting-edge e-commerce platform that exceeded expectations.",
    icon: Rocket,
  },
  {
    year: "2022",
    title: "Team Expansion",
    description:
      "Grew our team to include talented designers and developers from around the world, embracing remote-first culture.",
    icon: Users,
  },
  {
    year: "2023",
    title: "Rapid Growth",
    description:
      "Completed 50+ projects across web, mobile, and AI solutions. Established ourselves as a trusted partner for startups and enterprises.",
    icon: TrendingUp,
  },
  {
    year: "2024",
    title: "Industry Recognition",
    description:
      "Received multiple awards for design excellence and innovation. Featured in leading tech publications.",
    icon: Award,
  },
  {
    year: "2025",
    title: "Global Reach",
    description:
      "Serving clients across 15+ countries with a focus on AI-powered solutions and next-generation web technologies.",
    icon: Globe,
  },
]

export function JourneyTimeline() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => new Set(prev).add(index))
            }
          })
        },
        { threshold: 0.2 },
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Timeline line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20" />

      <div className="space-y-16">
        {milestones.map((milestone, index) => {
          const Icon = milestone.icon
          const isVisible = visibleItems.has(index)
          const isLeft = index % 2 === 0

          return (
            <div
              key={index}
              ref={(el) => {
                itemRefs.current[index] = el
              }}
              className={`relative flex items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} gap-8`}
            >
              {/* Content */}
              <div
                className={`flex-1 ${isLeft ? "md:text-right md:pr-12" : "md:text-left md:pl-12"} pl-20 md:pl-0 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="inline-block">
                  <div className="text-sm font-bold text-primary mb-2">{milestone.year}</div>
                  <h3 className="text-2xl font-bold mb-3">{milestone.title}</h3>
                  <p className="text-foreground/70 leading-relaxed max-w-md">{milestone.description}</p>
                </div>
              </div>

              {/* Icon */}
              <div
                className={`absolute left-8 md:left-1/2 md:-translate-x-1/2 w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center transition-all duration-700 ${
                  isVisible ? "scale-100 rotate-0" : "scale-0 rotate-180"
                }`}
              >
                <Icon className="w-7 h-7 text-primary" />
              </div>

              {/* Spacer for layout */}
              <div className="flex-1 hidden md:block" />
            </div>
          )
        })}
      </div>
    </div>
  )
}
