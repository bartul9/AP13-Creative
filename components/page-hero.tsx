import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
};

/**
 * Consistent inner-page hero: ambient gradient field, mono eyebrow,
 * oversized display headline, and supporting copy.
 */
export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border/60 pt-36 pb-20 md:pt-44 md:pb-24">
      {/* ambient blooms */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 right-[8%] h-80 w-80 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute top-10 left-[2%] h-72 w-72 rounded-full bg-blue/10 blur-[120px]" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full opacity-60 [mask-image:radial-gradient(60%_60%_at_50%_0%,#000,transparent)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(34,224,242,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(34,224,242,0.06) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow anim-fade mb-5">{eyebrow}</p>
          <h1 className="anim-rise display-xl text-balance text-5xl text-foreground sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {description && (
            <p
              className="anim-rise mt-6 max-w-2xl text-lg leading-relaxed text-foreground/65"
              style={{ animationDelay: "120ms" }}
            >
              {description}
            </p>
          )}
          {children && (
            <div className="anim-rise mt-8" style={{ animationDelay: "220ms" }}>
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
