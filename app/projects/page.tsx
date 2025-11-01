import { ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "A modern e-commerce solution with real-time inventory, seamless checkout experience, and advanced analytics dashboard.",
    image: "/modern-ecommerce-platform-dark-theme.jpg",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    results: "300% increase in conversion rate",
  },
  {
    title: "Fitness Tracking App",
    category: "Mobile Development",
    description:
      "iOS and Android app for tracking workouts, nutrition, and health metrics with social features and AI-powered recommendations.",
    image: "/fitness-tracking-app.png",
    tags: ["React Native", "AI/ML", "Firebase"],
    results: "50K+ active users",
  },
  {
    title: "SaaS Dashboard",
    category: "Web Development",
    description:
      "Analytics dashboard with real-time data visualization, reporting tools, and team collaboration features.",
    image: "/saas-analytics-dashboard-dark-ui.jpg",
    tags: ["React", "D3.js", "WebSocket"],
    results: "Real-time data for 10K+ users",
  },
  {
    title: "AI Chatbot Platform",
    category: "AI Solutions",
    description:
      "Intelligent chatbot platform with natural language processing capabilities and multi-channel support.",
    image: "/ai-chatbot-interface-futuristic.jpg",
    tags: ["OpenAI", "Node.js", "MongoDB"],
    results: "95% customer satisfaction",
  },
  {
    title: "Real Estate Portal",
    category: "Web Development",
    description:
      "Property listing platform with advanced search, virtual tours, and integrated mortgage calculator.",
    image: "/real-estate-property-portal-modern.jpg",
    tags: ["Next.js", "Maps API", "3D Tours"],
    results: "1M+ monthly visitors",
  },
  {
    title: "Restaurant Ordering App",
    category: "Mobile Development",
    description:
      "Mobile app for food ordering with real-time tracking, payment integration, and loyalty rewards program.",
    image: "/restaurant-ordering-app.png",
    tags: ["React Native", "Stripe", "GPS"],
    results: "40% increase in orders",
  },
];

export default function ProjectsPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-45">
        <div className="max-w-4xl mx-auto space-y-2 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-balance">
            Our <span className="text-primary glow-cyan">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground text-pretty">
            A showcase of our recent work and client success stories that speak
            for themselves
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:box-glow-cyan transition-all duration-300 flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>
                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="pt-2 border-t border-border">
                    <p className="text-sm font-semibold text-primary">
                      {project.results}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/20 via-card to-primary/10 border border-primary/30 rounded-3xl p-12 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Want to See Your Project{" "}
              <span className="text-primary glow-cyan">Here?</span>
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Let's create something amazing together. Get in touch and let's
              discuss your vision.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 box-glow-cyan hover:box-glow-cyan-hover transition-all duration-300 text-lg px-8 py-6 rounded-full group"
              >
                Start Your Project
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
