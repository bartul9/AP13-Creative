import { JourneyTimeline } from "@/components/journey-timeline";
import { Users, Zap, Code2, Sparkles, Target, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-45">
        <div className="max-w-4xl mx-auto space-y-2 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-balance">
            About <span className="text-primary glow-cyan">AP13 Creative</span>
          </h1>
          <p className="text-2xl text-muted-foreground text-pretty">
            A small, passionate team with big ambitions and even bigger results
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="prose prose-invert prose-lg max-w-none text-pretty">
            <p className="text-xl leading-relaxed text-foreground/90 mt-2 ">
              We are a small, passionate team of developers and designers with{" "}
              <span className="text-primary font-semibold">
                50+ years of combined experience
              </span>
              . Our mission is simple: turn your vision into reality with speed,
              precision, and creativity.
            </p>

            <p className="text-lg leading-relaxed text-foreground/80 mt-4">
              Based in Split, Croatia, we work with clients globally, delivering
              cutting-edge web and mobile applications that don't just meet
              expectations—they exceed them. We believe in modern technologies,
              clean code, and designs that make an impact.
            </p>

            <p className="text-lg leading-relaxed text-foreground/80">
              What sets us apart is our commitment to excellence and our ability
              to move fast without sacrificing quality. We're not just
              developers—we're partners in your success, dedicated to bringing
              your digital vision to life with creativity and technical
              expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-balance">
              Our <span className="text-primary glow-cyan">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-2xl p-8 hover:box-glow-cyan transition-all duration-300">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">Speed & Agility</h3>
              <p className="text-foreground/80 leading-relaxed">
                We move quickly without compromising quality. Your project
                launches faster than you'd expect, with iterative improvements
                along the way.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 hover:box-glow-cyan transition-all duration-300">
              <Sparkles className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">Creative Excellence</h3>
              <p className="text-foreground/80 leading-relaxed">
                Every pixel matters. We craft experiences that are beautiful,
                intuitive, and memorable, pushing the boundaries of design.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 hover:box-glow-cyan transition-all duration-300">
              <Code2 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">Technical Mastery</h3>
              <p className="text-foreground/80 leading-relaxed">
                We use the latest technologies and best practices to build
                scalable, maintainable solutions that stand the test of time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
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

      {/* Team Section */}
      {/*       <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">
            Join Our <span className="text-primary glow-cyan">Team</span>
          </h2>
          <p className="text-xl text-foreground/80 leading-relaxed">
            We're always looking for talented individuals who share our passion
            for innovation and excellence. If you're ready to work on exciting
            projects with a global team, we'd love to hear from you.
          </p>
          <div className="pt-4">
            <a
              href="/careers"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 box-glow-cyan hover:box-glow-cyan-hover transition-all duration-300 font-semibold"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
}
