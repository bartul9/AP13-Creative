const stats = [
  {
    value: "50+",
    label: "Years Combined Experience",
    description:
      "A senior-led team blending engineering, strategy, and design expertise.",
  },
  {
    value: "10+",
    label: "Projects Delivered",
    description:
      "High-impact launches across SaaS, fintech, and immersive product experiences.",
  },
  {
    value: "5+",
    label: "Countries Served",
    description:
      "Global teams trust us to navigate time zones, cultures, and complex roadmaps.",
  },
];

export function StatsShowcase() {
  return (
    <div className="mx-auto w-full max-w-5xl border-y border-border">
      <div className="grid divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="motion-fade-up px-6 py-8 text-left"
            style={{ animationDelay: `${index * 90}ms` }}
          >
            <div className="text-5xl font-bold leading-none text-primary md:text-6xl">
              {stat.value}
            </div>
            <div className="mt-4 text-base font-bold leading-snug text-foreground">
              {stat.label}
            </div>
            <p className="mt-3 text-sm font-light leading-relaxed text-foreground/70">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
