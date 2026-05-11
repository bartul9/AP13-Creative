import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Code2,
  Globe,
  Palette,
  Shield,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Custom websites and web applications built with Next.js, React, TypeScript, APIs, and production-grade deployment paths.",
    features: [
      "Responsive Design",
      "SEO Optimized",
      "Progressive Web Apps",
      "E-commerce Solutions",
    ],
    details: [
      "Full-stack development with Next.js and React",
      "Server-side rendering for performance and SEO",
      "API integration and backend development",
      "Database design and implementation",
      "Payment gateway integration",
      "Content management systems",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android with polished flows and reliable release support.",
    features: [
      "iOS & Android",
      "React Native",
      "App Store Deployment",
      "Push Notifications",
    ],
    details: [
      "Cross-platform development with React Native",
      "Native iOS and Android implementation support",
      "App Store and Google Play deployment",
      "Push notifications and real-time updates",
      "Offline functionality and data sync",
      "In-app purchases and subscriptions",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Product design that turns fuzzy requirements into practical flows, reusable components, and high-fidelity interfaces.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    details: [
      "User research and persona development",
      "Information architecture and user flows",
      "Wireframes and interactive prototypes",
      "High-fidelity visual design",
      "Design system creation and documentation",
      "Usability testing and iteration",
    ],
  },
  {
    icon: Brain,
    title: "AI-Powered Solutions",
    description:
      "AI features that fit the product: chat, workflow automation, analysis, recommendations, and intelligent assistance.",
    features: ["AI Integration", "Chatbots", "Data Analysis", "Automation"],
    details: [
      "Custom AI chatbot development",
      "Natural language processing integration",
      "Machine learning model implementation",
      "Predictive analytics and insights",
      "Process automation with AI",
      "Computer vision and image recognition",
    ],
  },
];

const additionalServices = [
  {
    icon: Code2,
    title: "API Development",
    description:
      "REST and GraphQL APIs designed for clean contracts, scalability, and maintainable integration.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Measurement-led improvements for loading speed, runtime responsiveness, and Core Web Vitals.",
  },
  {
    icon: Shield,
    title: "Security Audits",
    description:
      "Application reviews focused on authentication, authorization, data exposure, and deployment risk.",
  },
  {
    icon: Sparkles,
    title: "Consulting",
    description:
      "Strategic technical support for architecture, roadmap planning, and delivery decisions.",
  },
];

export default function ServicesPage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-border pt-28 md:pt-32">
        <Image
          src="/modern-ecommerce-platform-dark-theme.jpg"
          alt="Modern ecommerce application interface"
          fill
          priority
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/85" />
        <div className="section-shell relative py-16 md:py-20">
          <div className="max-w-4xl">
            <p className="label-caps mb-4 text-primary">Services</p>
            <h1 className="text-5xl font-bold leading-[1.05] text-foreground sm:text-6xl">
              Digital products, designed and engineered end to end.
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-light leading-[1.55] text-foreground/80">
              AP13 Creative covers the full product path: strategy, interface
              design, web and mobile engineering, AI features, integrations, and
              launch support.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="space-y-8">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="grid gap-8 border border-border bg-card p-6 md:grid-cols-[0.9fr_1.1fr] md:p-8 lg:p-10"
              >
                <div>
                  <div className="mb-6 flex size-14 items-center justify-center rounded-full border border-primary text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="label-caps mb-3 text-primary">
                    Core service
                  </p>
                  <h2 className="text-3xl font-bold leading-tight text-foreground">
                    {service.title}
                  </h2>
                  <p className="body-light mt-4 max-w-xl">
                    {service.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="label-caps border border-border px-3 py-2 text-primary"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-border pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                  <h3 className="label-caps mb-4 text-foreground">
                    Included
                  </h3>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {service.details.map((detail) => (
                      <li
                        key={detail}
                        className="border-b border-border pb-3 text-sm font-light leading-relaxed text-foreground/75"
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="section-shell py-20">
          <div className="mb-12 grid gap-6 md:grid-cols-[0.8fr_1fr] md:items-end">
            <div>
              <p className="label-caps mb-3 text-primary">Expertise</p>
              <h2 className="text-4xl font-bold leading-tight text-foreground md:text-5xl">
                Support around the build.
              </h2>
            </div>
            <p className="body-light max-w-2xl md:justify-self-end">
              Use these services as standalone workstreams or as part of a full
              product engagement.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {additionalServices.map((service) => {
              const Icon = service.icon;

              return (
                <article key={service.title} className="bg-card p-6">
                  <Icon className="h-8 w-8 text-primary" />
                  <h3 className="mt-6 text-xl font-bold leading-tight text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-foreground/70">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="grid gap-8 border border-border bg-card p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
          <div>
            <p className="label-caps mb-3 text-primary">Next step</p>
            <h2 className="text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Tell us what you need to ship.
            </h2>
            <p className="body-light mt-4 max-w-2xl">
              We will help define the right scope, team shape, milestones, and
              implementation plan.
            </p>
          </div>
          <Button asChild size="lg">
            <Link href="/contact">
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
