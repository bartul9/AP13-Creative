import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Brain,
  Compass,
  Globe,
  PenTool,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroCanvas } from "@/components/hero-canvas";
import { HeroCodeChips } from "@/components/hero-code-chips";
import { Reveal } from "@/components/reveal";
import { Spotlight } from "@/components/spotlight";
import { StatsShowcase } from "@/components/stats-showcase";
import { TechMarquee } from "@/components/tech-marquee";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "High-performance web apps built on Next.js, React, and TypeScript — fast, accessible, and production-grade.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Cross-platform iOS and Android products with native polish, smooth flows, and reliable releases.",
  },
  {
    icon: PenTool,
    title: "Product Design",
    description:
      "Research, flows, and interface systems that turn fuzzy requirements into interfaces people enjoy using.",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description:
      "Practical AI features — assistants, automation, and analysis — wired cleanly into your product.",
  },
];

const process = [
  {
    step: "01",
    icon: Compass,
    title: "Discovery",
    description:
      "Clarify the product goal, audience, risks, and launch path before a line of code is written.",
  },
  {
    step: "02",
    icon: PenTool,
    title: "Design",
    description:
      "Translate strategy into flows, screens, and a usable, reusable interface system.",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Build",
    description:
      "Engineer the product with modern React, mobile, API, and database foundations.",
  },
  {
    step: "04",
    icon: ShieldCheck,
    title: "Launch",
    description:
      "Validate performance, deploy with confidence, and stay close after release.",
  },
];

const approach = [
  {
    title: "Senior-led, end to end",
    description:
      "The people you talk to are the people designing and building your product. No handoffs, no middle layer.",
  },
  {
    title: "Designed to feel premium",
    description:
      "We obsess over the details — typography, motion, spacing — that make software feel considered and expensive.",
  },
  {
    title: "Engineered to last",
    description:
      "Clean architecture and maintainable code that's useful on launch day and still understandable a year later.",
  },
];

const featured = [
  {
    title: "Commerce Platform",
    category: "Web · Next.js",
    image: "/modern-ecommerce-platform-dark-theme.jpg",
    result: "Stripe · PostgreSQL",
  },
  {
    title: "SaaS Analytics Suite",
    category: "Web · Real-time",
    image: "/saas-analytics-dashboard-dark-ui.jpg",
    result: "React · WebSocket",
  },
  {
    title: "AI Assistant Platform",
    category: "AI · Automation",
    image: "/ai-chatbot-interface-futuristic.jpg",
    result: "OpenAI · Node.js",
  },
];

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* ============================ HERO ============================ */}
      <section className="relative min-h-[100svh] w-full">
        <div className="absolute inset-0">
          <HeroCanvas />
        </div>
        {/* legibility overlays — kept light so the wave reads through */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/85" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/85 via-background/25 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(38rem_30rem_at_72%_42%,rgba(34,224,242,0.12),transparent_70%)]" />
        <HeroCodeChips />

        <div className="section-shell relative z-10 flex min-h-[100svh] flex-col justify-center pt-28 pb-16">
          <div className="max-w-3xl">
            <p className="eyebrow anim-fade mb-6">
              Digital product studio · Split, Croatia
            </p>
            <h1 className="anim-rise display-xl text-5xl text-foreground sm:text-6xl lg:text-[5rem]">
              We craft digital products
              <br />
              <span className="text-flow glow-text">
                engineered to feel premium.
              </span>
            </h1>
            <p
              className="anim-rise mt-7 max-w-xl text-lg leading-relaxed text-foreground/70"
              style={{ animationDelay: "120ms" }}
            >
              AP13 is a senior digital studio designing and building
              web, mobile, and AI-powered software — shipped with speed, taste,
              and engineering discipline.
            </p>
            <div
              className="anim-rise mt-9 flex flex-col gap-3 sm:flex-row"
              style={{ animationDelay: "220ms" }}
            >
              <Button asChild size="lg">
                <Link href="/contact">
                  Start a project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/projects">Explore our work</Link>
              </Button>
            </div>

            <div
              className="anim-fade mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-foreground/55"
              style={{ animationDelay: "360ms" }}
            >
              <span className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Available for new projects
              </span>
              <span className="hidden h-4 w-px bg-border sm:block" />
              <span>
                6+ years building production web, mobile &amp; AI software
              </span>
            </div>
          </div>
        </div>

        {/* scroll hint */}
        <div className="pointer-events-none absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/40">
            Scroll
          </span>
          <span className="h-10 w-px bg-gradient-to-b from-primary/70 to-transparent" />
        </div>
      </section>

      {/* ============================ MARQUEE ============================ */}
      <section className="border-y border-border/60 bg-background/40 py-8 backdrop-blur-sm">
        <div className="section-shell">
          <p className="mb-6 text-center font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/40">
            The modern stack we build with
          </p>
          <TechMarquee />
        </div>
      </section>

      {/* ============================ STATS ============================ */}
      <section className="section-shell py-24">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <p className="eyebrow mb-4 justify-center">The short version</p>
          <h2 className="text-balance text-4xl text-foreground md:text-5xl">
            One studio, end to end — from first pixel to production.
          </h2>
        </Reveal>
        <StatsShowcase />
      </section>

      {/* ============================ SERVICES ============================ */}
      <section className="relative border-t border-border/60 py-24">
        <div className="section-shell">
          <div className="mb-14 grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
            <Reveal>
              <p className="eyebrow mb-4">Capabilities</p>
              <h2 className="text-balance text-4xl text-foreground md:text-5xl">
                Everything your product needs, under one roof.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="body-light max-w-xl md:justify-self-end">
                Strategy, design, and engineering working as one team — so your
                product stays coherent from first sketch to launch day.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={index * 90} variant="scale">
                  <Spotlight className="panel panel-hover border-gradient group h-full p-7">
                    <div className="mb-6 flex size-12 items-center justify-center rounded-xl border border-primary/25 bg-primary/[0.06] text-primary transition-colors duration-500 group-hover:bg-primary/10">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                      {service.description}
                    </p>
                    <Link
                      href="/services"
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100"
                    >
                      Learn more
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Spotlight>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================ PROCESS ============================ */}
      <section className="relative border-t border-border/60 py-24">
        <div className="section-shell">
          <Reveal className="mb-14 max-w-2xl">
            <p className="eyebrow mb-4">How we work</p>
            <h2 className="text-balance text-4xl text-foreground md:text-5xl">
              A clear path from idea to launch.
            </h2>
            <p className="body-light mt-5">
              Every engagement moves through four focused stages with visible
              decisions, practical milestones, and zero decorative complexity.
            </p>
          </Reveal>

          <div className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />
            {process.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.step} delay={index * 100}>
                  <div className="panel panel-hover relative h-full p-7">
                    <div className="mb-6 flex items-center justify-between">
                      <span className="flex size-12 items-center justify-center rounded-full border border-primary/30 bg-background text-primary">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-display text-4xl font-bold text-foreground/10">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================ APPROACH ============================ */}
      <section className="relative border-t border-border/60 py-24">
        <div className="section-shell grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="eyebrow mb-4">Why AP13</p>
            <h2 className="text-balance text-4xl text-foreground md:text-5xl">
              The difference is in the details.
            </h2>
            <p className="body-light mt-5 max-w-md">
              We&apos;re intentionally small — so quality stays visible,
              communication stays direct, and every decision stays close to the
              people doing the work.
            </p>
            <Button asChild variant="outline" className="mt-8">
              <Link href="/about">
                About the studio
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>

          <div className="space-y-4">
            {approach.map((item, index) => (
              <Reveal key={item.title} delay={index * 90}>
                <Spotlight className="panel spotlight flex gap-5 p-6 md:p-7">
                  <span className="mt-1 flex size-9 flex-shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/[0.06] text-primary">
                    <Sparkles className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                      {item.description}
                    </p>
                  </div>
                </Spotlight>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ FEATURED WORK ============================ */}
      <section className="relative border-t border-border/60 py-24">
        <div className="section-shell">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <p className="eyebrow mb-4">Selected work</p>
              <h2 className="text-balance text-4xl text-foreground md:text-5xl">
                The kind of products we build.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 text-sm font-medium text-primary"
              >
                View all work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {featured.map((project, index) => (
              <Reveal key={project.title} delay={index * 100} variant="scale">
                <Link
                  href="/projects"
                  className="panel panel-hover group block overflow-hidden"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover opacity-85 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                    <span className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full border border-border bg-background/70 text-primary opacity-0 backdrop-blur transition-opacity duration-500 group-hover:opacity-100">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-6">
                    <div>
                      <p className="label-caps mb-1.5">{project.category}</p>
                      <h3 className="text-lg font-semibold text-foreground">
                        {project.title}
                      </h3>
                    </div>
                    <span className="font-mono text-xs font-medium text-primary">
                      {project.result}
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ QUOTE ============================ */}
      <section className="relative border-t border-border/60 py-24">
        <div className="section-shell">
          <Reveal className="mx-auto max-w-4xl text-center">
            <Sparkles className="mx-auto mb-8 h-7 w-7 text-primary" />
            <p className="italic text-balance font-display text-2xl font-medium leading-snug text-foreground md:text-4xl md:leading-[1.25]">
              &ldquo;We treat every product like it&apos;s our own - the goal
              isn&apos;t just to ship, it&apos;s to ship something that feels{" "}
              <span className="text-gradient">genuinely premium </span> the
              moment someone opens it.&rdquo;
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <Image
                src="/ap13-cyber-mark.png"
                alt="AP13"
                width={40}
                height={40}
                className="h-10 w-10 rounded-lg border border-primary/30 object-cover"
              />
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">
                  Luka Bartulović
                </p>
                <p className="text-xs text-foreground/50">
                  Founder · AP13
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================ CTA ============================ */}
      <section className="section-shell pb-28 pt-4">
        <Reveal variant="scale">
          <div className="border-gradient relative overflow-hidden rounded-2xl px-6 py-16 text-center md:px-12 md:py-20">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(40rem_30rem_at_50%_-20%,rgba(34,224,242,0.16),transparent_70%)]" />
            <div className="pointer-events-none absolute inset-0 -z-10 bg-card/60" />
            <p className="eyebrow mb-5 justify-center">Let&apos;s build</p>
            <h2 className="mx-auto max-w-3xl text-balance text-4xl text-foreground md:text-6xl">
              Bring us a product problem worth solving.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-foreground/65">
              Tell us the goal, audience, and constraints. We&apos;ll shape the
              scope, design the interface, and ship it for real users.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">
                  Start a project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">View services</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
