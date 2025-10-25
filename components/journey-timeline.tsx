"use client";

import { useEffect, useRef, useState } from "react";
import {
  Rocket,
  Lightbulb,
  Users,
  TrendingUp,
  Award,
  Globe,
} from "lucide-react";

const milestones = [
  {
    year: "2020",
    title: "The Spark",
    description:
      "Started shipping freelance projects and sharpening the React/JS craft. First real-world apps, first late-night deploys.",
    icon: Lightbulb,
  },
  {
    year: "2021",
    title: "First Paying Clients",
    description:
      "Delivered production sites and small apps for EU clients. Built confidence and a solid reference base.",
    icon: Rocket,
  },
  {
    year: "2022",
    title: "Stack Mastery",
    description:
      "Doubled down on Next.js, React Native, Supabase, and modern UI systems. Built multiple MVPs and internal tools.",
    icon: TrendingUp,
  },
  {
    year: "2023",
    title: "Product Mindset",
    description:
      "Prototyped ConsigliereX, LifeFlow, and event/messaging features. Learned to balance client work with product bets.",
    icon: Award,
  },
  {
    year: "2024",
    title: "AP13 Idea & Brand",
    description:
      "Defined AP13 Creative: name, identity, and mission. Early logo/website, first retainers, and a clear agency direction.",
    icon: Lightbulb,
  },
  {
    year: "2025",
    title: "Small Team, Bigger Moves",
    description:
      "Formed a compact core team (~4). Launching polished web & mobile work for EU clients; scaling AI-powered solutions.",
    icon: Users,
  },
];

export function JourneyTimeline() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => new Set(prev).add(index));
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Timeline line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20" />

      <div className="space-y-16">
        {milestones.map((milestone, index) => {
          const Icon = milestone.icon;
          const isVisible = visibleItems.has(index);
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className={`relative flex items-center ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8`}
            >
              {/* Content */}
              <div
                className={`flex-1 ${
                  isLeft ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
                } pl-20 md:pl-0 transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="inline-block">
                  <div className="text-sm font-bold text-primary mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{milestone.title}</h3>
                  <p className="text-foreground/70 leading-relaxed max-w-md">
                    {milestone.description}
                  </p>
                </div>
              </div>

              {/* Icon */}
              <div
                className={`absolute left-0 md:left-1/2 md:-translate-x-1/2 w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center transition-all duration-700 ${
                  isVisible ? "scale-100 rotate-0" : "scale-0 rotate-180"
                }`}
              >
                <Icon className="w-7 h-7 text-primary" />
              </div>

              {/* Spacer for layout */}
              <div className="flex-1 hidden md:block" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
