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
    <div className="relative mx-auto w-full max-w-5xl">
      <div className="relative grid gap-6 pt-20 sm:grid-cols-3">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-3xl border border-primary/15 bg-card/70 px-8 py-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_35px_120px_-45px_rgba(56,189,248,0.7)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute -inset-px rounded-[28px] opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100 bg-[conic-gradient(at_top_left,_rgba(56,189,248,0.25),_transparent_45%,_transparent_70%,_rgba(34,211,238,0.25))]" />
            <div className="relative space-y-4">
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/70">
                Impact
              </div>
              <div className="text-6xl font-semibold leading-none text-transparent bg-gradient-to-r from-primary to-cyan-300 bg-clip-text drop-shadow-[0_0_18px_rgba(34,211,238,0.35)]">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-foreground">
                {stat.label}
              </div>
              <p className="text-sm leading-relaxed text-foreground/70">
                {stat.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
