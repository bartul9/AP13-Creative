import { CountUp } from "@/components/count-up";
import { Reveal } from "@/components/reveal";

type Stat = {
  value?: number;
  suffix?: string;
  display?: string;
  label: string;
  description: string;
};

const stats: Stat[] = [
  {
    value: 6,
    suffix: "+",
    label: "Years of experience",
    description:
      "Shipping production web, mobile, and AI software since 2020.",
  },
  {
    display: "A→Z",
    label: "End to end",
    description:
      "Strategy, interface design, engineering, and launch — handled under one roof.",
  },
  {
    display: "1:1",
    label: "Direct collaboration",
    description:
      "You work directly with the people building your product. No account managers, no handoffs.",
  },
  {
    value: 24,
    suffix: "h",
    label: "Avg. response time",
    description:
      "Fast, direct communication throughout the entire project.",
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
            {stat.value !== undefined ? (
              <CountUp value={stat.value} suffix={stat.suffix} />
            ) : (
              <span>{stat.display}</span>
            )}
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
