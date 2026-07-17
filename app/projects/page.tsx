import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ProjectsGrid, type Project } from "@/components/projects-grid";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected product work from AP13 Creative across web, mobile, SaaS, commerce, and AI.",
};

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    category: "Web",
    description:
      "A modern commerce platform with live inventory, payment flows, and an analytics dashboard.",
    image: "/modern-ecommerce-platform-dark-theme.jpg",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
  },
  {
    title: "SaaS Analytics Dashboard",
    category: "Web",
    description:
      "Real-time analytics, reporting tools, and collaboration workflows for operational teams.",
    image: "/saas-analytics-dashboard-dark-ui.jpg",
    tags: ["React", "Charts", "WebSocket"],
  },
  {
    title: "AI Chatbot Platform",
    category: "AI",
    description:
      "An intelligent chatbot platform with natural-language workflows and multi-channel support.",
    image: "/ai-chatbot-interface-futuristic.jpg",
    tags: ["OpenAI", "Node.js", "MongoDB"],
  },
  {
    title: "Real Estate Portal",
    category: "Web",
    description:
      "A listing platform with search, property detail pages, virtual-tour support, and lead capture.",
    image: "/real-estate-property-portal-modern.jpg",
    tags: ["Next.js", "Maps API", "3D Tours"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="overflow-hidden">
      <PageHero
        eyebrow="Selected work"
        title={
          <>
            Product work across web, mobile,{" "}
            <span className="text-gradient">SaaS, commerce &amp; AI.</span>
          </>
        }
        description="A representative view of the kinds of digital products AP13 Creative designs, builds, launches, and improves."
      />

      <section className="section-shell py-24">
        <ProjectsGrid projects={projects} />
      </section>

      <div className="border-t border-border/60">
        <CtaSection
          eyebrow="Your project"
          title="Want your product in the next batch of shipped work?"
          description="Bring the goal, audience, and constraints. We'll help shape the digital product around them."
          secondaryLabel="View services"
          secondaryHref="/services"
        />
      </div>
    </div>
  );
}
