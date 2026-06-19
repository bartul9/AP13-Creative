import type { Metadata } from "next";
import { Code2, Target, Users, Zap } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Spotlight } from "@/components/spotlight";
import { JourneyTimeline } from "@/components/journey-timeline";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "About",
  description:
    "AP13 Creative is a senior digital product studio from Split, Croatia — designers and engineers crafting premium web, mobile, and AI software.",
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
      "Small teams move quickly when scope is clear, communication is direct, and the build stays focused.",
  },
  {
    icon: Users,
    title: "Partner Mindset",
    description:
      "We stay close to client goals, explain trade-offs, and treat the outcome as shared responsibility.",
  },
];

const facts = [
  { k: "Founded", v: "2024" },
  { k: "Based in", v: "Split, HR" },
  { k: "Model", v: "Remote-first" },
  { k: "Focus", v: "Web · Mobile · AI" },
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
        description="AP13 Creative brings together developers and designers with 50+ years of combined experience across web, mobile, design systems, AI-enabled workflows, and production launches."
      />

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
                We work globally from Croatia, helping founders, operators, and
                growing teams turn product ideas into working software. Our
                focus is simple: clear scope, strong interface design, clean
                code, and shipping discipline.
              </p>
              <p>
                The team is intentionally small. That keeps communication
                direct, quality visible, and decisions close to the people
                designing and building the product.
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
                <Reveal key={principle.title} delay={index * 90} variant="scale">
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
              The path to AP13 Creative.
            </h2>
            <p className="body-light mt-5">
              Five years of compounding craft — from first freelance launches to
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
