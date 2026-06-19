import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Briefcase,
  Clock,
  DollarSign,
  Globe,
  Heart,
  MapPin,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Spotlight } from "@/components/spotlight";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join AP13 Creative — a small, senior, remote-first studio building premium web, mobile, and AI products.",
};

const openings = [
  {
    title: "Senior Full-Stack Developer",
    type: "Full-time",
    location: "Remote",
    salary: "$80k – $120k",
    description:
      "Own production-grade client work across Next.js, React, Node.js, APIs, and deployment workflows.",
    requirements: [
      "5+ years with React and Node.js",
      "Strong TypeScript skills",
      "Experience with Next.js and modern web",
      "Excellent communication",
    ],
  },
  {
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Remote",
    salary: "$60k – $90k",
    description:
      "Design practical product interfaces from discovery through prototype, design system, and implementation support.",
    requirements: [
      "3+ years of UI/UX experience",
      "Proficiency in Figma",
      "Strong product portfolio",
      "Modern design fundamentals",
    ],
  },
  {
    title: "Mobile Developer (React Native)",
    type: "Full-time",
    location: "Remote",
    salary: "$70k – $100k",
    description:
      "Build reliable cross-platform mobile applications for iOS and Android with release-ready polish.",
    requirements: [
      "3+ years of React Native",
      "Published apps on the stores",
      "Native iOS/Android knowledge",
      "Mobile architecture experience",
    ],
  },
  {
    title: "Frontend Developer",
    type: "Contract",
    location: "Remote",
    salary: "$50k – $70k",
    description:
      "Turn designs into responsive, performant web interfaces using React, Next.js, and modern CSS.",
    requirements: [
      "2+ years of React experience",
      "Strong HTML, CSS, JavaScript",
      "Experience with Tailwind CSS",
      "Production-quality attention to detail",
    ],
  },
];

const benefits = [
  {
    icon: Globe,
    title: "Remote First",
    description:
      "Work from where you are productive while staying close to project communication.",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description:
      "Plan deep work around clear delivery expectations and team availability.",
  },
  {
    icon: Zap,
    title: "Growth Work",
    description:
      "Build across products, stacks, and industries instead of repeating one narrow workflow.",
  },
  {
    icon: Users,
    title: "Small Team",
    description:
      "Collaborate directly with the people responsible for decisions, design, and delivery.",
  },
  {
    icon: DollarSign,
    title: "Competitive Pay",
    description:
      "Compensation aligned with skill level, responsibility, and project impact.",
  },
  {
    icon: Heart,
    title: "Healthy Pace",
    description:
      "We value focus, sustainable output, and clean handoffs over constant urgency.",
  },
];

export default function CareersPage() {
  return (
    <div className="overflow-hidden">
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Join a small team building{" "}
            <span className="text-gradient">serious digital products.</span>
          </>
        }
        description="AP13 Creative works with focused specialists who care about product thinking, clean execution, and direct collaboration."
      />

      {/* Benefits */}
      <section className="section-shell py-24">
        <div className="mb-14 grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
          <Reveal>
            <p className="eyebrow mb-4">Benefits</p>
            <h2 className="text-balance text-4xl text-foreground md:text-5xl">
              Built for focused work.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="body-light max-w-xl md:justify-self-end">
              The team structure is intentionally compact, remote-friendly, and
              delivery-oriented.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Reveal key={benefit.title} delay={index * 80} variant="scale">
                <Spotlight className="panel panel-hover group h-full p-7">
                  <div className="mb-6 flex size-12 items-center justify-center rounded-xl border border-primary/25 bg-primary/[0.06] text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                    {benefit.description}
                  </p>
                </Spotlight>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Openings */}
      <section className="border-t border-border/60 py-24">
        <div className="section-shell">
          <Reveal className="mb-14 max-w-2xl">
            <p className="eyebrow mb-4">Open positions</p>
            <h2 className="text-balance text-4xl text-foreground md:text-5xl">
              Current roles.
            </h2>
          </Reveal>

          <div className="space-y-4">
            {openings.map((opening, index) => (
              <Reveal key={opening.title} delay={index * 70}>
                <Spotlight className="panel panel-hover grid gap-6 p-7 lg:grid-cols-[1fr_auto] lg:items-start md:p-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground">
                      {opening.title}
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm text-foreground/60">
                      <span className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-primary" />
                        {opening.type}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        {opening.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-primary" />
                        {opening.salary}
                      </span>
                    </div>
                    <p className="body-light mt-5 max-w-3xl">
                      {opening.description}
                    </p>
                    <div className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                      {opening.requirements.map((requirement) => (
                        <div
                          key={requirement}
                          className="flex items-start gap-2.5 text-sm text-foreground/60"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/70" />
                          {requirement}
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button asChild className="lg:mt-1">
                    <Link href="/contact">
                      Apply now
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </Spotlight>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-border/60">
        <CtaSection
          eyebrow="Open application"
          title="Don't see the exact role?"
          description="Send your portfolio, GitHub, or product work and tell us where you would add value."
          primaryLabel="Get in touch"
        />
      </div>
    </div>
  );
}
