const tools = [
  "Next.js",
  "React",
  "TypeScript",
  "React Native",
  "Node.js",
  "Tailwind CSS",
  "Figma",
  "Supabase",
  "PostgreSQL",
  "OpenAI",
  "Stripe",
  "Vercel",
  "Framer Motion",
  "GraphQL",
];

export function TechMarquee() {
  const row = [...tools, ...tools];

  return (
    <div className="marquee-track mask-fade-x relative overflow-hidden">
      <div className="marquee items-center gap-3 py-2">
        {row.map((tool, i) => (
          <span
            key={`${tool}-${i}`}
            className="glass inline-flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 font-mono text-sm text-foreground/70 transition-colors hover:text-foreground"
          >
            <span className="text-primary/70">&lt;/&gt;</span>
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}
