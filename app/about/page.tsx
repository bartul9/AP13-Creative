import Image from "next/image";
import { Code2, Target, Users, Zap } from "lucide-react";
import { JourneyTimeline } from "@/components/journey-timeline";

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
      "We prefer maintainable architecture, clear contracts, and practical technology decisions over unnecessary novelty.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description:
      "Small teams can move quickly when scope is clear, communication is direct, and the build stays focused.",
  },
  {
    icon: Users,
    title: "Partner Mindset",
    description:
      "We stay close to client goals, explain tradeoffs, and treat the product outcome as shared responsibility.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-border pt-28 md:pt-32">
        <Image
          src="/real-estate-property-portal-modern.jpg"
          alt="Modern product interface preview"
          fill
          priority
          className="motion-image object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/85" />
        <div className="section-shell relative py-16 md:py-20">
          <div className="motion-fade-up max-w-4xl">
            <p className="label-caps mb-4 text-primary">About</p>
            <h1 className="text-5xl font-bold leading-[1.05] text-foreground sm:text-6xl">
              A compact digital product team from Split, Croatia.
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-light leading-[1.55] text-foreground/80">
              AP13 Creative brings together developers and designers with 50+
              years of combined experience across web, mobile, design systems,
              AI-enabled workflows, and production launches.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="motion-fade-up grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="label-caps mb-3 text-primary">Story</p>
            <h2 className="text-4xl font-bold leading-tight text-foreground md:text-5xl">
              Built for precise digital execution.
            </h2>
          </div>
          <div className="space-y-6 text-lg font-light leading-[1.55] text-foreground/80">
            <p>
              We work globally from Croatia, helping founders, operators, and
              growing teams turn product ideas into working software. Our focus
              is simple: clear scope, strong interface design, clean code, and
              shipping discipline.
            </p>
            <p>
              The team is intentionally small. That keeps communication direct,
              quality visible, and decisions close to the people designing and
              building the product.
            </p>
            <p>
              We care about speed, but not at the expense of maintainability.
              The best work is useful on launch day and still understandable
              months later.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="section-shell py-20">
          <div className="motion-fade-up mb-12 grid gap-6 md:grid-cols-[0.8fr_1fr] md:items-end">
            <div>
              <p className="label-caps mb-3 text-primary">Principles</p>
              <h2 className="text-4xl font-bold leading-tight text-foreground md:text-5xl">
                How we make decisions.
              </h2>
            </div>
            <p className="body-light max-w-2xl md:justify-self-end">
              The same rules guide strategy, design, engineering, and launch
              support across every engagement.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <article
                  key={principle.title}
                  className="motion-fade-up bg-card p-6 transition-colors duration-300 hover:bg-background"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <Icon className="h-8 w-8 text-primary" />
                  <h3 className="mt-6 text-xl font-bold leading-tight text-foreground">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-foreground/70">
                    {principle.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="motion-fade-up mb-12">
          <p className="label-caps mb-3 text-primary">Timeline</p>
          <h2 className="text-4xl font-bold leading-tight text-foreground md:text-5xl">
            The path to AP13 Creative.
          </h2>
        </div>
        <JourneyTimeline />
      </section>
    </div>
  );
}
