import type { Metadata } from "next";
import {
  Brain,
  Code2,
  Globe,
  Palette,
  Shield,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Spotlight } from "@/components/spotlight";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-cycle digital product services from AP13 — web development, mobile apps, product design, AI integrations, and launch support.",
};

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Custom websites and web applications built with Next.js, React, TypeScript, and production-grade deployment paths.",
    features: [
      "Responsive design",
      "SEO optimized",
      "Progressive web apps",
      "E-commerce",
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
      "Native and cross-platform mobile apps for iOS and Android with polished flows and reliable release support.",
    features: [
      "iOS & Android",
      "React Native",
      "App Store launch",
      "Push notifications",
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
    features: ["User research", "Wireframing", "Prototyping", "Design systems"],
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
    features: ["AI integration", "Chatbots", "Data analysis", "Automation"],
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
    title: "Performance",
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
    <div className="overflow-hidden">
      <PageHero
        eyebrow="What we do"
        title={
          <>
            Digital products, designed and{" "}
            <span className="text-gradient">engineered end to end.</span>
          </>
        }
        description="AP13 covers the full product path: strategy, interface design, web and mobile engineering, AI features, integrations, and launch support."
      />

      {/* Core services */}
      <section className="section-shell py-24">
        <div className="space-y-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={index * 60}>
                <Spotlight className="panel panel-hover grid gap-8 p-7 md:grid-cols-[0.9fr_1.1fr] md:p-9 lg:p-10">
                  <div>
                    <div className="mb-6 flex size-14 items-center justify-center rounded-2xl border border-primary/25 bg-primary/[0.06] text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="label-caps mb-3">
                      0{index + 1} · Core service
                    </p>
                    <h2 className="text-3xl font-semibold text-foreground">
                      {service.title}
                    </h2>
                    <p className="body-light mt-4 max-w-xl">
                      {service.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span key={feature} className="chip">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-border pt-7 md:border-l md:border-t-0 md:pl-9 md:pt-0">
                    <h3 className="label-caps mb-5">What&apos;s included</h3>
                    <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                      {service.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/70"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/70" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Spotlight>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Around the build */}
      <section className="border-t border-border/60 py-24">
        <div className="section-shell">
          <div className="mb-14 grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
            <Reveal>
              <p className="eyebrow mb-4">Expertise</p>
              <h2 className="text-balance text-4xl text-foreground md:text-5xl">
                Support around the build.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="body-light max-w-xl md:justify-self-end">
                Use these as standalone workstreams or as part of a full product
                engagement.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={index * 90} variant="scale">
                  <Spotlight className="panel panel-hover group h-full p-7">
                    <div className="mb-6 flex size-12 items-center justify-center rounded-xl border border-primary/25 bg-primary/[0.06] text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                      {service.description}
                    </p>
                  </Spotlight>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <div className="border-t border-border/60">
        <CtaSection
          eyebrow="Next step"
          title="Tell us what you need to ship."
          description="We'll help define the right scope, milestones, and implementation plan."
          secondaryLabel="See our work"
          secondaryHref="/projects"
        />
      </div>
    </div>
  );
}
