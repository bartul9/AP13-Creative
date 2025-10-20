import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Zap,
  Shield,
  Sparkles,
  Code2,
  Palette,
  Smartphone,
  Star,
} from "lucide-react";

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
                  className="border-primary/30 text-foreground hover:bg-primary/10 text-lg px-8 py-6 rounded-full bg-transparent"
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
                  100+
                </div>
                <div className="text-sm text-muted-foreground">
                  Projects Delivered
                </div>
              </div>
              <div className="space-y-2 p-6 rounded-xl bg-card/50 border border-border hover:box-glow-cyan transition-all duration-300">
                <div className="text-5xl font-bold text-primary glow-cyan">
                  15+
                </div>
                <div className="text-sm text-muted-foreground">
                  Countries Served
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* Features Section */}
      <section className="relative py-32 bg-gradient-to-b from-background to-card/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-balance">
                Why Choose{" "}
                <span className="text-primary glow-cyan">AP13 Creative</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We combine technical expertise with creative excellence to
                deliver exceptional results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group p-8 rounded-2xl bg-card border border-border hover:box-glow-cyan transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Lightning Fast</h3>
                <p className="text-foreground/70 leading-relaxed">
                  We move at startup speed without compromising quality. Your
                  project launches faster than you'd expect.
                </p>
              </div>

              <div className="group p-8 rounded-2xl bg-card border border-border hover:box-glow-cyan transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Enterprise Grade</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Built with security, scalability, and performance in mind.
                  Production-ready code from day one.
                </p>
              </div>

              <div className="group p-8 rounded-2xl bg-card border border-border hover:box-glow-cyan transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Pixel Perfect</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Every detail matters. We craft experiences that are beautiful,
                  intuitive, and memorable.
                </p>
              </div>

              <div className="group p-8 rounded-2xl bg-card border border-border hover:box-glow-cyan transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Code2 className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Modern Stack</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Next.js, React, TypeScript, and cutting-edge AI. We use the
                  best tools for the job.
                </p>
              </div>

              <div className="group p-8 rounded-2xl bg-card border border-border hover:box-glow-cyan transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Palette className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Design First</h3>
                <p className="text-foreground/70 leading-relaxed">
                  User experience drives everything we do. Beautiful interfaces
                  that users love to interact with.
                </p>
              </div>

              <div className="group p-8 rounded-2xl bg-card border border-border hover:box-glow-cyan transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Smartphone className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Mobile Ready</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Responsive by default. Your app looks and works perfectly on
                  every device and screen size.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-32">
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

      {/* Testimonials Section */}
      <section className="relative py-32 bg-gradient-to-b from-card/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-balance">
                What Our{" "}
                <span className="text-primary glow-cyan">Clients Say</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "CEO, TechStart",
                  content:
                    "AP13 Creative transformed our vision into reality. The team's expertise and dedication exceeded all expectations.",
                  rating: 5,
                },
                {
                  name: "Michael Chen",
                  role: "Founder, AppFlow",
                  content:
                    "Working with AP13 was a game-changer. They delivered a stunning mobile app ahead of schedule.",
                  rating: 5,
                },
                {
                  name: "Emma Williams",
                  role: "CTO, DataSync",
                  content:
                    "The quality of code and attention to detail is outstanding. Highly recommend for any serious project.",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-card border border-border hover:box-glow-cyan transition-all duration-300"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-foreground/80 leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
