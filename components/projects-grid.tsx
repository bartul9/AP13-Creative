"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

export type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
};

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    [projects],
  );
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={cn(
              "rounded-full border px-4 py-2 text-[13px] font-medium transition-all duration-300",
              active === category
                ? "border-primary/50 bg-primary/10 text-primary"
                : "border-border bg-background/30 text-foreground/60 hover:border-primary/40 hover:text-foreground",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, index) => (
          <Reveal key={project.title} delay={(index % 3) * 90} variant="scale">
            <article className="panel panel-hover group flex h-full flex-col overflow-hidden">
              <div className="relative aspect-[16/11] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-85 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-border bg-background/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-primary backdrop-blur">
                  {project.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/60">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
