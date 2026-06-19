"use client";

import { useEffect, useRef, useState } from "react";
import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** ms delay before the reveal transition runs */
  delay?: number;
  /** scale-in variant instead of slide-up */
  variant?: "up" | "scale";
  as?: ElementType;
  /** re-reveal every time it enters the viewport */
  once?: boolean;
};

/**
 * Reveals its children with a smooth fade/slide once scrolled into view.
 * Pure CSS transition driven by an IntersectionObserver — cheap and resilient.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
  as,
  once = true,
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      className={cn(
        variant === "scale" ? "reveal-scale" : "reveal",
        visible && "is-visible",
        className
      )}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
