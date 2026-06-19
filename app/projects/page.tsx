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
    result: "+300% conversion increase",
  },
  {
    title: "Fitness Tracking App",
    category: "Mobile",
    description:
      "A cross-platform mobile app for workouts, nutrition, health metrics, and AI-guided recommendations.",
    image: "/fitness-tracking-app.png",
    tags: ["React Native", "AI/ML", "Firebase"],
    result: "50K+ active users",
  },
  {
    title: "SaaS Analytics Dashboard",
    category: "Web",
    description:
      "Real-time analytics, reporting tools, and collaboration workflows for operational teams.",
    image: "/saas-analytics-dashboard-dark-ui.jpg",
    tags: ["React", "Charts", "WebSocket"],
    result: "10K+ users supported",
  },
  {
    title: "AI Chatbot Platform",
    category: "AI",
    description:
      "An intelligent chatbot platform with natural-language workflows and multi-channel support.",
    image: "/ai-chatbot-interface-futuristic.jpg",
    tags: ["OpenAI", "Node.js", "MongoDB"],
    result: "95% satisfaction",
  },
  {
    title: "Real Estate Portal",
    category: "Web",
    description:
      "A listing platform with search, property detail pages, virtual-tour support, and lead capture.",
    image: "/real-estate-property-portal-modern.jpg",
    tags: ["Next.js", "Maps API", "3D Tours"],
    result: "1M+ monthly visitors",
  },
  {
    title: "Restaurant Ordering App",
    category: "Mobile",
    description:
      "A mobile ordering system with payments, live tracking, customer accounts, and loyalty flows.",
    image: "/restaurant-ordering-app.png",
    tags: ["React Native", "Stripe", "GPS"],
    result: "+40% more orders",
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
