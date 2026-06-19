"use client";

import type { ElementType, ReactNode } from "react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type SpotlightProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

/**
 * Wraps content with a cursor-following radial highlight.
 * Combine with the `.spotlight` utility class for the glow layer.
 */
export function Spotlight({ children, className, as }: SpotlightProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);

  const handleMove = (e: React.PointerEvent<HTMLElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    node.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <Tag ref={ref} onPointerMove={handleMove} className={cn("spotlight", className)}>
      {children}
    </Tag>
  );
}

export default Spotlight;
