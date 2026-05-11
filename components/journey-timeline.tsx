import {
  Award,
  Lightbulb,
  Rocket,
  Sparkle,
  TrendingUp,
  Users,
} from "lucide-react";

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
    <div className="mx-auto max-w-5xl border-y border-border">
      <div className="divide-y divide-border">
        {milestones.map((milestone, index) => {
          const Icon = milestone.icon;

          return (
            <div
              key={milestone.year}
              className="motion-fade-up grid gap-6 py-8 md:grid-cols-[160px_64px_1fr] md:items-start"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="label-caps text-primary">{milestone.year}</div>
              <div className="flex size-12 items-center justify-center rounded-full border border-primary text-primary md:mx-auto">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-2xl font-bold leading-tight text-foreground">
                  {milestone.title}
                </h3>
                <p className="mt-3 max-w-2xl text-base font-light leading-relaxed text-foreground/75">
                  {milestone.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
