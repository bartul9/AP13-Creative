import {
  MapPin,
  Briefcase,
  Clock,
  DollarSign,
  Heart,
  Zap,
  Users,
  Globe,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const openings = [
  {
    title: "Senior Full-Stack Developer",
    type: "Full-time",
    location: "Remote",
    salary: "$80k - $120k",
    description:
      "We're looking for an experienced full-stack developer to join our team and work on exciting client projects using Next.js, React, and modern technologies.",
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
      "Create stunning user interfaces and craft delightful user experiences for web and mobile applications.",
    requirements: [
      "3+ years of UI/UX design experience",
      "Proficiency in Figma and design tools",
      "Strong portfolio showcasing your work",
      "Understanding of modern design principles",
    ],
  },
  {
    title: "Mobile Developer (React Native)",
    type: "Full-time",
    location: "Remote",
    salary: "$70k - $100k",
    description:
      "Develop native and cross-platform mobile applications for iOS and Android using React Native.",
    requirements: [
      "3+ years of React Native experience",
      "Published apps on App Store and Google Play",
      "Knowledge of native iOS/Android development",
      "Experience with mobile app architecture",
    ],
  },
  {
    title: "Frontend Developer",
    type: "Contract",
    location: "Remote",
    salary: "$50k - $70k",
    description:
      "Build responsive, performant web applications using React, Next.js, and modern CSS frameworks.",
    requirements: [
      "2+ years of React experience",
      "Strong HTML, CSS, and JavaScript skills",
      "Experience with Tailwind CSS or similar",
      "Attention to detail and pixel-perfect implementation",
    ],
  },
];

const benefits = [
  {
    icon: Globe,
    title: "Work From Anywhere",
    description:
      "100% remote-first company. Work from wherever you're most productive.",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Choose your own schedule and work when you're at your best.",
  },
  {
    icon: Zap,
    title: "Growth Opportunities",
    description:
      "Learn new technologies and grow your skills with every project.",
  },
  {
    icon: Users,
    title: "Collaborative Team",
    description: "Work with talented professionals from around the world.",
  },
  {
    icon: DollarSign,
    title: "Competitive Pay",
    description: "Fair compensation that reflects your skills and experience.",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "We value your time and well-being. No overtime culture.",
  },
];

export default function CareersPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-45">
        <div className="max-w-4xl mx-auto space-y-2 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-balance animate-fade-in-up">
            Join the{" "}
            <span className="text-primary glow-cyan">Creative Force</span>
          </h1>
          <p className="text-xl text-muted-foreground text-pretty animate-fade-in-up animation-delay-200">
            Be part of a team that's shaping the future of digital experiences.
            Work on exciting projects with talented people from around the
            world.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">
              Why <span className="text-primary glow-cyan">AP13 Creative?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Benefits and perks of joining our team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 hover:box-glow-cyan transition-all duration-300 animate-fade-in-up animation-delay-150"
                >
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">
              Open <span className="text-primary glow-cyan">Positions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Find your perfect role
            </p>
          </div>

          <div className="space-y-6">
            {openings.map((opening, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 hover:box-glow-cyan transition-all duration-300 animate-fade-in-up animation-delay-150"
              >
                <div className="space-y-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="space-y-3 flex-1">
                      <h3 className="text-2xl font-bold">{opening.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-primary" />
                          {opening.type}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          {opening.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-primary" />
                          {opening.salary}
                        </div>
                      </div>
                    </div>
                    <Link href="/contact">
                      <Button className="bg-primary text-primary-foreground hover:bg-primary/90 whitespace-nowrap">
                        Apply Now
                      </Button>
                    </Link>
                  </div>

                  <p className="text-foreground/80 leading-relaxed">
                    {opening.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground/90">
                      Requirements:
                    </h4>
                    <ul className="space-y-2">
                      {opening.requirements.map((req, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-foreground/70"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
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
              Don't See a Perfect Fit?
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              We're always interested in meeting talented people. Send us your
              portfolio and tell us what makes you special.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 bg-transparent text-lg px-8 py-6 rounded-full"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
