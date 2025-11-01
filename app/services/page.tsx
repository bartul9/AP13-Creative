import {
  Globe,
  Smartphone,
  Palette,
  Brain,
  Code2,
  Zap,
  Shield,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern frameworks like Next.js, React, and TypeScript. Fast, responsive, and optimized for performance.",
    features: [
      "Responsive Design",
      "SEO Optimized",
      "Progressive Web Apps",
      "E-commerce Solutions",
    ],
    details: [
      "Full-stack development with Next.js and React",
      "Server-side rendering for optimal performance",
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
      "Native and cross-platform mobile applications for iOS and Android. Beautiful interfaces with seamless user experiences.",
    features: [
      "iOS & Android",
      "React Native",
      "App Store Deployment",
      "Push Notifications",
    ],
    details: [
      "Cross-platform development with React Native",
      "Native iOS and Android development",
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
      "User-centered design that combines aesthetics with functionality. From wireframes to high-fidelity prototypes.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    details: [
      "User research and persona development",
      "Information architecture and user flows",
      "Wireframing and interactive prototypes",
      "High-fidelity visual design",
      "Design system creation and documentation",
      "Usability testing and iteration",
    ],
  },
  {
    icon: Brain,
    title: "AI-Powered Solutions",
    description:
      "Integrate cutting-edge AI capabilities into your applications. From chatbots to machine learning models.",
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
      "RESTful and GraphQL APIs built for scalability and performance.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Speed up your existing applications with expert optimization techniques.",
  },
  {
    icon: Shield,
    title: "Security Audits",
    description:
      "Comprehensive security reviews to protect your digital assets.",
  },
  {
    icon: Sparkles,
    title: "Consulting",
    description:
      "Strategic technology consulting to guide your digital transformation.",
  },
];

export default function ServicesPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-45">
        <div className="max-w-4xl mx-auto space-y-2 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-balance animate-fade-in-up">
            Our <span className="text-primary glow-cyan">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground text-pretty animate-fade-in-up animation-delay-200">
            Comprehensive digital solutions tailored to your needs, delivered
            with expertise and passion
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto space-y-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-3xl p-8 md:p-12 hover:box-glow-cyan transition-all duration-300 group animate-fade-in-up animation-delay-150"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  <div className="space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold">{service.title}</h3>
                    <p className="text-lg text-foreground/80 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-foreground/90">
                      What's Included:
                    </h4>
                    <ul className="space-y-3">
                      {service.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-foreground/70"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Additional Services */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">
              Additional{" "}
              <span className="text-primary glow-cyan">Expertise</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              More ways we can help your business succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 hover:box-glow-cyan transition-all duration-300 group text-center animate-fade-in-up animation-delay-150"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-foreground/70">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/20 via-card to-primary/10 border border-primary/30 rounded-3xl p-12 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to Get{" "}
              <span className="text-primary glow-cyan">Started?</span>
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Let's discuss your project and find the perfect solution for your
              needs.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 box-glow-cyan hover:box-glow-cyan-hover transition-all duration-300 text-lg px-8 py-6 rounded-full"
              >
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
