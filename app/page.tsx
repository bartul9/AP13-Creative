import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { JourneyTimeline } from "@/components/journey-timeline";

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <main className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-block animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Crafting Digital Excellence Since 2020</span>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight animate-fade-in-up">
              Turning your vision into{" "}
              <span className="text-primary glow-cyan bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                high-quality digital reality
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-foreground/80 text-pretty max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              We build web and mobile apps fast, with precision, creativity, and
              style. Your success is our mission.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 animate-fade-in-up animation-delay-400">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 box-glow-cyan hover:box-glow-cyan-hover transition-all duration-300 text-lg px-8 py-6 rounded-full group"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/30 text-foreground hover:bg-primary/10 hover:text-white text-lg px-8 py-6 rounded-full bg-transparent"
                >
                  View Our Work
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-20 max-w-4xl mx-auto animate-fade-in-up animation-delay-600">
              <div className="space-y-2 p-6 rounded-xl bg-card/50 border border-border hover:box-glow-cyan transition-all duration-300">
                <div className="text-5xl font-bold text-primary glow-cyan">
                  50+
                </div>
                <div className="text-sm text-muted-foreground">
                  Years Combined Experience
                </div>
              </div>
              <div className="space-y-2 p-6 rounded-xl bg-card/50 border border-border hover:box-glow-cyan transition-all duration-300">
                <div className="text-5xl font-bold text-primary glow-cyan">
                  10+
                </div>
                <div className="text-sm text-muted-foreground">
                  Projects Delivered
                </div>
              </div>
              <div className="space-y-2 p-6 rounded-xl bg-card/50 border border-border hover:box-glow-cyan transition-all duration-300">
                <div className="text-5xl font-bold text-primary glow-cyan">
                  5+
                </div>
                <div className="text-sm text-muted-foreground">
                  Countries Served
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* Process Section */}
      <section className="relative pt-12 pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-balance">
                Our <span className="text-primary glow-cyan">Process</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A proven methodology that delivers results every time
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description:
                    "We dive deep into your vision, goals, and requirements to create a solid foundation.",
                },
                {
                  step: "02",
                  title: "Design",
                  description:
                    "Crafting beautiful, user-centered designs that bring your brand to life.",
                },
                {
                  step: "03",
                  title: "Development",
                  description:
                    "Building with modern technologies and best practices for optimal performance.",
                },
                {
                  step: "04",
                  title: "Launch",
                  description:
                    "Deploying your project with confidence and providing ongoing support.",
                },
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="text-6xl font-bold text-primary/10 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-balance">
              Our <span className="text-primary glow-cyan">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From a small startup to a trusted global partner
            </p>
          </div>

          <JourneyTimeline />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-card to-primary/10 border border-primary/30 p-12 md:p-16 text-center">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative z-10 space-y-6">
                <h2 className="text-4xl sm:text-5xl font-bold text-balance">
                  Ready to Build Something{" "}
                  <span className="text-primary glow-cyan">Amazing?</span>
                </h2>
                <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
                  Let's turn your vision into reality. Get in touch today and
                  let's start building your next big thing.
                </p>
                <div className="pt-4">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 box-glow-cyan hover:box-glow-cyan-hover transition-all duration-300 text-lg px-10 py-7 rounded-full group"
                    >
                      Get Started Now
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
