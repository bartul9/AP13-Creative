import { CountUp } from "@/components/count-up";
import { Reveal } from "@/components/reveal";

const stats = [
  {
    value: 50,
    suffix: "+",
    label: "Years combined experience",
    description:
      "A senior-led team blending engineering, product strategy, and design craft.",
  },
  {
    value: 40,
    suffix: "+",
    label: "Products shipped",
    description:
      "Launches across SaaS, fintech, commerce, and AI-driven experiences.",
  },
  {
    value: 12,
    suffix: "+",
    label: "Countries served",
    description:
      "Remote-first delivery across time zones, cultures, and complex roadmaps.",
  },
  {
    value: 24,
    suffix: "h",
    label: "Avg. response time",
    description:
      "Direct communication with the people designing and building your product.",
  },
];

export function StatsShowcase() {
  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Reveal
          key={stat.label}
          delay={index * 80}
          className="group bg-card/60 p-7 transition-colors duration-500 hover:bg-card"
        >
          <div className="font-display text-5xl font-semibold leading-none tracking-tight text-gradient md:text-6xl">
            <CountUp value={stat.value} suffix={stat.suffix} />
          </div>
          <div className="mt-5 text-sm font-semibold text-foreground">
            {stat.label}
          </div>
          <p className="mt-2 text-sm leading-relaxed text-foreground/55">
            {stat.description}
          </p>
        </Reveal>
      ))}
    </div>
  );
}
