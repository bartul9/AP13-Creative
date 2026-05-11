import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Clock,
  DollarSign,
  Globe,
  Heart,
  MapPin,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const openings = [
  {
    title: "Senior Full-Stack Developer",
    type: "Full-time",
    location: "Remote",
    salary: "$80k - $120k",
    description:
      "Own production-grade client work across Next.js, React, Node.js, APIs, and deployment workflows.",
    requirements: [
      "5+ years of experience with React and Node.js",
      "Strong TypeScript skills",
      "Experience with Next.js and modern web technologies",
      "Excellent communication skills",
    ],
  },
  {
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Remote",
    salary: "$60k - $90k",
    description:
      "Design practical product interfaces from discovery through prototype, design system, and implementation support.",
    requirements: [
      "3+ years of UI/UX design experience",
      "Proficiency in Figma and design tools",
      "Strong portfolio showcasing product work",
      "Understanding of modern design principles",
    ],
  },
  {
    title: "Mobile Developer (React Native)",
    type: "Full-time",
    location: "Remote",
    salary: "$70k - $100k",
    description:
      "Build reliable cross-platform mobile applications for iOS and Android with release-ready polish.",
    requirements: [
      "3+ years of React Native experience",
      "Published apps on App Store and Google Play",
      "Knowledge of native iOS and Android development",
      "Experience with mobile app architecture",
    ],
  },
  {
    title: "Frontend Developer",
    type: "Contract",
    location: "Remote",
    salary: "$50k - $70k",
    description:
      "Turn designs into responsive, performant web interfaces using React, Next.js, and modern CSS.",
    requirements: [
      "2+ years of React experience",
      "Strong HTML, CSS, and JavaScript skills",
      "Experience with Tailwind CSS or similar",
      "Attention to detail and production quality",
    ],
  },
];

const benefits = [
  {
    icon: Globe,
    title: "Remote First",
    description:
      "Work from where you are productive while staying close to project communication.",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description:
      "Plan deep work around clear delivery expectations and team availability.",
  },
  {
    icon: Zap,
    title: "Growth Work",
    description:
      "Build across products, stacks, and industries instead of repeating one narrow workflow.",
  },
  {
    icon: Users,
    title: "Small Team",
    description:
      "Collaborate directly with people responsible for decisions, design, and delivery.",
  },
  {
    icon: DollarSign,
    title: "Competitive Pay",
    description:
      "Compensation is aligned with skill level, responsibility, and project impact.",
  },
  {
    icon: Heart,
    title: "Healthy Pace",
    description:
      "We value focus, sustainable output, and clean handoffs over constant urgency.",
  },
];

export default function CareersPage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-border pt-28 md:pt-32">
        <Image
          src="/fitness-tracking-app.png"
          alt="Mobile product interface"
          fill
          priority
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/85" />
        <div className="section-shell relative py-16 md:py-20">
          <div className="max-w-4xl">
            <p className="label-caps mb-4 text-primary">Careers</p>
            <h1 className="text-5xl font-bold leading-[1.05] text-foreground sm:text-6xl">
              Join a small team building serious digital products.
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-light leading-[1.55] text-foreground/80">
              AP13 Creative works with focused specialists who care about
              product thinking, clean execution, and direct collaboration.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="mb-12 grid gap-6 md:grid-cols-[0.8fr_1fr] md:items-end">
          <div>
            <p className="label-caps mb-3 text-primary">Benefits</p>
            <h2 className="text-4xl font-bold leading-tight text-foreground md:text-5xl">
              Built for focused work.
            </h2>
          </div>
          <p className="body-light max-w-2xl md:justify-self-end">
            The team structure is intentionally compact, remote-friendly, and
            delivery-oriented.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article key={benefit.title} className="bg-card p-6">
                <Icon className="h-8 w-8 text-primary" />
                <h3 className="mt-6 text-xl font-bold leading-tight text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-foreground/70">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="section-shell py-20">
          <div className="mb-12">
            <p className="label-caps mb-3 text-primary">Open positions</p>
            <h2 className="text-4xl font-bold leading-tight text-foreground md:text-5xl">
              Current roles.
            </h2>
          </div>

          <div className="space-y-4">
            {openings.map((opening) => (
              <article
                key={opening.title}
                className="grid gap-6 border border-border bg-background p-6 lg:grid-cols-[1fr_auto] lg:items-start"
              >
                <div>
                  <h3 className="text-2xl font-bold leading-tight text-foreground">
                    {opening.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm font-light text-foreground/70">
                    <span className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-primary" />
                      {opening.type}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      {opening.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-primary" />
                      {opening.salary}
                    </span>
                  </div>
                  <p className="body-light mt-5 max-w-3xl">
                    {opening.description}
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {opening.requirements.map((requirement) => (
                      <div
                        key={requirement}
                        className="border-b border-border pb-3 text-sm font-light text-foreground/70"
                      >
                        {requirement}
                      </div>
                    ))}
                  </div>
                </div>
                <Button asChild>
                  <Link href="/contact">
                    Apply Now
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="grid gap-8 border border-border bg-card p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
          <div>
            <p className="label-caps mb-3 text-primary">Open application</p>
            <h2 className="text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Do not see the exact role?
            </h2>
            <p className="body-light mt-4 max-w-2xl">
              Send your portfolio, GitHub, or product work and explain where
              you would add value.
            </p>
          </div>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
