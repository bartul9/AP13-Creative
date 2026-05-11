import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatsShowcase } from "@/components/stats-showcase";

const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Clarify the product goal, audience, risks, technical scope, and launch path before design or code starts.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Translate the product strategy into flows, screens, components, and a usable interface system.",
  },
  {
    step: "03",
    title: "Development",
    description:
      "Build the application with modern React, Next.js, mobile, API, and database foundations.",
  },
  {
    step: "04",
    title: "Launch",
    description:
      "Prepare production, validate performance, deploy confidently, and stay available after release.",
  },
];

const featuredServices = [
  "Web applications",
  "Mobile apps",
  "Product design",
  "AI integrations",
];

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-border pt-28 md:pt-32">
        <Image
          src="/saas-analytics-dashboard-dark-ui.jpg"
          alt="Modern analytics dashboard interface"
          fill
          priority
          className="motion-image object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/80" />

        <div className="section-shell relative pb-16 md:pb-20">
          <div className="grid min-h-[calc(100svh-12rem)] items-end gap-12 md:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-4xl">
              <p className="label-caps motion-fade-up mb-5 text-primary">
                Digital product studio
              </p>
              <h1 className="motion-fade-up motion-delay-100 text-5xl font-bold leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
                AP13 Creative
              </h1>
              <p className="motion-fade-up motion-delay-200 mt-6 max-w-2xl text-lg font-light leading-[1.55] text-foreground/80 sm:text-xl">
                We design and build web, mobile, and AI-powered software for
                teams that need polished products shipped with speed and
                engineering discipline.
              </p>
              <div className="motion-fade-up motion-delay-300 mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Start a Project
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/projects">View Work</Link>
                </Button>
              </div>
            </div>

            <div className="motion-fade-up motion-delay-400 grid gap-3 border-y border-border py-6 md:border-l md:border-y-0 md:py-0 md:pl-8">
              {featuredServices.map((service, index) => (
                <Link
                  key={service}
                  href="/services"
                  className="label-caps motion-link flex items-center justify-between border-b border-border py-4 text-foreground transition-colors duration-300 last:border-b-0 hover:text-primary"
                  style={{ animationDelay: `${450 + index * 80}ms` }}
                >
                  <span>{service}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell motion-fade-up py-20">
        <StatsShowcase />
      </section>

      <section className="border-y border-border bg-card">
        <div className="section-shell py-20">
          <div className="motion-fade-up mb-12 grid gap-6 md:grid-cols-[0.8fr_1fr] md:items-end">
            <div>
              <p className="label-caps mb-3 text-primary">Process</p>
              <h2 className="text-4xl font-bold leading-tight text-foreground md:text-5xl">
                Built in clear stages.
              </h2>
            </div>
            <p className="body-light max-w-2xl md:justify-self-end">
              Every engagement moves from scope to design to production with
              visible decisions, practical milestones, and no decorative
              complexity.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => (
              <article
                key={item.step}
                className="motion-fade-up bg-card p-6 transition-colors duration-300 hover:bg-background"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="text-5xl font-bold leading-none text-primary">
                  {item.step}
                </div>
                <h3 className="mt-6 text-xl font-bold leading-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-foreground/70">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border">
        <Image
          src="/ai-chatbot-interface-futuristic.jpg"
          alt="AI interface dashboard"
          fill
          className="motion-image object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/85" />
        <div className="section-shell relative py-20">
          <div className="motion-fade-up max-w-3xl">
            <p className="label-caps mb-3 text-primary">Start</p>
            <h2 className="text-4xl font-bold leading-tight text-foreground md:text-5xl">
              Bring us a product problem worth solving.
            </h2>
            <p className="body-light mt-5 max-w-2xl">
              We will help shape the scope, design the interface, build the
              system, and prepare it for real users.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">
                  Contact AP13
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
