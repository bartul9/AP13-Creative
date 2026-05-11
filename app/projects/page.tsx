import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "A modern commerce platform with live inventory, payment flows, and an analytics dashboard.",
    image: "/modern-ecommerce-platform-dark-theme.jpg",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    results: "300% conversion increase",
  },
  {
    title: "Fitness Tracking App",
    category: "Mobile Development",
    description:
      "A cross-platform mobile app for workouts, nutrition, health metrics, and AI-guided recommendations.",
    image: "/fitness-tracking-app.png",
    tags: ["React Native", "AI/ML", "Firebase"],
    results: "50K+ active users",
  },
  {
    title: "SaaS Dashboard",
    category: "Web Development",
    description:
      "Real-time analytics, reporting tools, and collaboration workflows for operational teams.",
    image: "/saas-analytics-dashboard-dark-ui.jpg",
    tags: ["React", "Charts", "WebSocket"],
    results: "10K+ users supported",
  },
  {
    title: "AI Chatbot Platform",
    category: "AI Solutions",
    description:
      "An intelligent chatbot platform with natural language workflows and multi-channel support.",
    image: "/ai-chatbot-interface-futuristic.jpg",
    tags: ["OpenAI", "Node.js", "MongoDB"],
    results: "95% satisfaction",
  },
  {
    title: "Real Estate Portal",
    category: "Web Development",
    description:
      "A listing platform with search, property detail pages, virtual-tour support, and lead capture.",
    image: "/real-estate-property-portal-modern.jpg",
    tags: ["Next.js", "Maps API", "3D Tours"],
    results: "1M+ monthly visitors",
  },
  {
    title: "Restaurant Ordering App",
    category: "Mobile Development",
    description:
      "A mobile ordering system with payments, live tracking, customer accounts, and loyalty flows.",
    image: "/restaurant-ordering-app.png",
    tags: ["React Native", "Stripe", "GPS"],
    results: "40% more orders",
  },
];

export default function ProjectsPage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-border pt-28 md:pt-32">
        <Image
          src="/saas-analytics-dashboard-dark-ui.jpg"
          alt="SaaS dashboard interface"
          fill
          priority
          className="motion-image object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/85" />
        <div className="section-shell relative py-16 md:py-20">
          <div className="motion-fade-up max-w-4xl">
            <p className="label-caps mb-4 text-primary">Projects</p>
            <h1 className="text-5xl font-bold leading-[1.05] text-foreground sm:text-6xl">
              Product work across web, mobile, SaaS, commerce, and AI.
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-light leading-[1.55] text-foreground/80">
              A representative view of the kinds of digital products AP13
              Creative designs, builds, launches, and improves.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="motion-fade-up group flex flex-col bg-card transition-colors duration-300 hover:bg-background"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="relative aspect-[16/10] border-b border-border bg-background">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="label-caps text-primary">{project.category}</p>
                <h2 className="mt-4 text-2xl font-bold leading-tight text-foreground">
                  {project.title}
                </h2>
                <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-foreground/70">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-border px-3 py-2 text-xs font-bold uppercase tracking-[0.08em] text-foreground/75"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 border-t border-border pt-4 text-sm font-bold text-primary">
                  {project.results}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="section-shell py-20">
          <div className="motion-fade-up grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="label-caps mb-3 text-primary">Your project</p>
              <h2 className="text-3xl font-bold leading-tight text-foreground md:text-4xl">
                Want your product in the next batch of shipped work?
              </h2>
              <p className="body-light mt-4 max-w-2xl">
                Bring the goal, audience, and constraints. We will help shape
                the digital product around them.
              </p>
            </div>
            <Button asChild size="lg">
              <Link href="/contact">
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
