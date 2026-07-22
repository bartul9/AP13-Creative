import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  MapPin,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Spotlight } from "@/components/spotlight";
import { JourneyTimeline } from "@/components/journey-timeline";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "About",
  description:
    "AP13 is a senior digital product studio from Split, Croatia — crafting premium web, mobile, and AI software.",
};

const principles = [
  {
    icon: Target,
    title: "Product First",
    description:
      "We start with the business problem, user workflow, and release target before choosing the implementation path.",
  },
  {
    icon: Code2,
    title: "Clean Engineering",
    description:
      "We prefer maintainable architecture, clear contracts, and practical technology over unnecessary novelty.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description:
      "Staying small keeps scope clear, communication direct, and the build focused — with no layers to slow it down.",
  },
  {
    icon: Users,
    title: "Partner Mindset",
    description:
      "We stay close to client goals, explain trade-offs, and treat the outcome as shared responsibility.",
  },
];

const facts = [
  { k: "Experience", v: "6+ years" },
  { k: "Based in", v: "Split, HR" },
  { k: "Model", v: "Remote-first" },
  { k: "Focus", v: "Web · Mobile · AI" },
];

const founderSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Supabase",
  "TailwindCSS",
  "AI Agents",
  "Figma",
];

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      <PageHero
        eyebrow="About the studio"
        title={
          <>
            A compact studio with a serious{" "}
            <span className="text-gradient">obsession for craft.</span>
          </>
        }
        description="AP13 is a compact digital studio with 6 years of experience across web, mobile, design systems, AI-enabled workflows, and production launches."
      />

      {/* Founder */}
      <section className="section-shell py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          {/* Portrait */}
          <Reveal variant="scale">
            <div className="relative mx-auto w-full max-w-sm lg:mx-0">
              <div className="pointer-events-none absolute -inset-6 -z-10 bg-[radial-gradient(22rem_22rem_at_50%_25%,rgba(34,224,242,0.20),transparent_70%)]" />
              <div className="border-gradient relative overflow-hidden rounded-2xl">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/luka-portrait.png"
                    alt="Luka Bartulović, founder of AP13"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 24rem, 100vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
                </div>
                {/* floating identity card */}
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-xl border border-border/70 bg-background/70 px-4 py-3 backdrop-blur-md">
                  <div>
                    <p className="font-display text-sm font-semibold text-foreground">
                      Luka Bartulović
                    </p>
                    <p className="label-caps mt-0.5">Founder · Developer</p>
                  </div>
                  <span className="flex items-center gap-2 whitespace-nowrap text-xs text-foreground/60">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                    </span>
                    Available
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Bio */}
          <Reveal delay={120}>
            <p className="eyebrow mb-4">Meet the founder</p>
            <h2 className="text-balance text-4xl text-foreground md:text-5xl">
              The developer behind{" "}
              <span className="text-gradient">AP13.</span>
            </h2>
            <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-foreground/60">
              <span className="font-mono text-primary">Luka Bartulović</span>
              <span className="hidden h-3 w-px bg-border sm:block" />
              <span>Senior Full-Stack Developer</span>
              <span className="hidden h-3 w-px bg-border sm:block" />
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                Split, Croatia
              </span>
            </p>

            <div className="mt-7 space-y-5 text-lg leading-relaxed text-foreground/70">
              <p>
                Luka is a senior full-stack developer with 6 years of experience
                designing and delivering scalable, high-performance web
                applications. He specializes in React, Next.js, and TypeScript,
                building user-centric, responsive interfaces for clients across
                Europe and the US.
              </p>
              <p>
                His focus is AI-powered product development and clean
                architecture - from custom AI agents that automate real
                workflows to full-stack apps with real-time messaging,
                analytics, and intelligent assistance. Having led front-end work
                on high-traffic international platforms, he owns each project
                end to end: architecture, interface, engineering, and launch.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {founderSkills.map((skill) => (
                <span key={skill} className="chip">
                  {skill}
                </span>
              ))}
            </div>

            <Spotlight className="panel spotlight mt-8 flex items-start gap-4 p-5">
              <span className="mt-0.5 flex size-9 flex-shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/[0.06] text-primary">
                <Sparkles className="h-4 w-4" />
              </span>
              <div>
                <p className="label-caps mb-1.5">Currently</p>
                <p className="text-sm leading-relaxed text-foreground/70">
                  Architecting and leading front-end for an Austrian real-estate
                  platform in Next.js &amp; TypeScript, with custom AI agents
                  for property search and lead qualification.
                </p>
              </div>
            </Spotlight>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-cyan"
            >
              Work with Luka
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="section-shell py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="eyebrow mb-4">Our story</p>
            <h2 className="text-balance text-4xl text-foreground md:text-5xl">
              Built for precise digital execution.
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border">
              {facts.map((f) => (
                <div key={f.k} className="bg-card/60 p-5">
                  <div className="label-caps mb-1.5">{f.k}</div>
                  <div className="font-display text-lg font-semibold text-foreground">
                    {f.v}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="panel space-y-6 p-7 text-lg leading-relaxed text-foreground/70 md:p-9">
              <p>
                We work remotely from Croatia, helping founders, operators, and
                growing teams turn product ideas into working software. Our
                focus is simple: clear scope, strong interface design, clean
                code, and shipping discipline.
              </p>
              <p>
                AP13 is intentionally small. That keeps communication
                direct, quality visible, and every decision close to the people
                actually designing and building the product.
              </p>
              <p>
                We care about speed, but never at the expense of
                maintainability. The best work is useful on launch day and still
                understandable months later.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-border/60 py-24">
        <div className="section-shell">
          <div className="mb-14 grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
            <Reveal>
              <p className="eyebrow mb-4">Principles</p>
              <h2 className="text-balance text-4xl text-foreground md:text-5xl">
                How we make decisions.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="body-light max-w-xl md:justify-self-end">
                The same rules guide strategy, design, engineering, and launch
                support across every engagement.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <Reveal
                  key={principle.title}
                  delay={index * 90}
                  variant="scale"
                >
                  <Spotlight className="panel panel-hover group h-full p-7">
                    <div className="mb-6 flex size-12 items-center justify-center rounded-xl border border-primary/25 bg-primary/[0.06] text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {principle.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                      {principle.description}
                    </p>
                  </Spotlight>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-t border-border/60 py-24">
        <div className="section-shell">
          <Reveal className="mb-14 max-w-2xl">
            <p className="eyebrow mb-4">The journey</p>
            <h2 className="text-balance text-4xl text-foreground md:text-5xl">
              The path to AP13.
            </h2>
            <p className="body-light mt-5">
              Six years of compounding craft — from first freelance launches to
              a focused product studio.
            </p>
          </Reveal>
          <JourneyTimeline />
        </div>
      </section>

      <div className="border-t border-border/60">
        <CtaSection
          eyebrow="Work with us"
          title="Let's turn your idea into a product."
          description="Bring the goal, audience, and constraints. We'll help shape the digital product around them."
          secondaryLabel="View services"
          secondaryHref="/services"
        />
      </div>
    </div>
  );
}
