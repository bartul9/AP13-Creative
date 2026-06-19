import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

type CtaSectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CtaSection({
  eyebrow = "Let's build",
  title,
  description,
  primaryLabel = "Start a project",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: CtaSectionProps) {
  return (
    <section className="section-shell py-24">
      <Reveal variant="scale">
        <div className="border-gradient relative overflow-hidden rounded-2xl px-6 py-16 text-center md:px-12 md:py-20">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(40rem_30rem_at_50%_-20%,rgba(34,224,242,0.16),transparent_70%)]" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-card/60" />
          <p className="eyebrow mb-5 justify-center">{eyebrow}</p>
          <h2 className="mx-auto max-w-3xl text-balance text-4xl text-foreground md:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mx-auto mt-6 max-w-xl text-lg text-foreground/65">
              {description}
            </p>
          )}
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href={primaryHref}>
                {primaryLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            {secondaryLabel && secondaryHref && (
              <Button asChild size="lg" variant="outline">
                <Link href={secondaryHref}>{secondaryLabel}</Link>
              </Button>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
