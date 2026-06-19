"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  /** numeric target, e.g. 50 */
  value: number;
  /** text appended after the number, e.g. "+" or "%" */
  suffix?: string;
  prefix?: string;
  durationMs?: number;
  className?: string;
};

/**
 * Counts up to `value` the first time it scrolls into view.
 * Respects reduced-motion by snapping straight to the final value.
 */
export function CountUp({
  value,
  suffix = "",
  prefix = "",
  durationMs = 1600,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || started.current) return;
          started.current = true;
          observer.disconnect();

          if (reduce) {
            setDisplay(value);
            return;
          }

          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - start) / durationMs, 1);
            // easeOutExpo
            const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
            setDisplay(Math.round(eased * value));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value, durationMs]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export default CountUp;
