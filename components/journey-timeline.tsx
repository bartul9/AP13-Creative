import {
  Award,
  Lightbulb,
  Rocket,
  Sparkle,
  TrendingUp,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/reveal";

const milestones = [
  {
    year: "2020",
    title: "The Spark",
    description:
      "Started shipping freelance projects and sharpening the React and JavaScript craft through real-world launches.",
    icon: Sparkle,
  },
  {
    year: "2021",
    title: "First Paying Clients",
    description:
      "Delivered production sites and small apps for EU clients, building a stronger reference base.",
    icon: Rocket,
  },
  {
    year: "2022",
    title: "Stack Mastery",
    description:
      "Doubled down on Next.js, React Native, Supabase, and modern UI systems for MVP delivery.",
    icon: TrendingUp,
  },
  {
    year: "2023",
    title: "Product Mindset",
    description:
      "Balanced client work with product prototypes across messaging, event, and productivity workflows.",
    icon: Award,
  },
  {
    year: "2024",
    title: "AP13 Idea & Brand",
    description:
      "Defined the AP13 Creative identity, mission, early website, retainers, and agency direction.",
    icon: Lightbulb,
  },
  {
    year: "2025",
    title: "Small Team, Bigger Moves",
    description:
      "Formed a compact core team and scaled polished web, mobile, and AI-powered solutions.",
    icon: Users,
  },
];

export function JourneyTimeline() {
  return (
    <div className="relative mx-auto max-w-3xl">
      {/* vertical spine */}
      <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/50 via-border to-transparent md:left-[31px]" />

      <div className="space-y-3">
        {milestones.map((milestone, index) => {
          const Icon = milestone.icon;
          return (
            <Reveal key={milestone.year} delay={index * 70}>
              <div className="group relative flex gap-6 rounded-2xl border border-transparent p-4 transition-colors duration-500 hover:border-border hover:bg-card/50">
                <div className="relative z-10 flex size-14 flex-shrink-0 items-center justify-center rounded-full border border-primary/30 bg-background text-primary shadow-[0_0_28px_-10px_rgba(34,224,242,0.7)] transition-transform duration-500 group-hover:scale-105 md:size-16">
                  <Icon className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <div className="pt-1">
                  <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">
                    {milestone.year}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold text-foreground md:text-2xl">
                    {milestone.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-foreground/60 md:text-base">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
