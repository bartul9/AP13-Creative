import type { ReactNode } from "react";

type Chip = {
  /** tailwind position classes */
  pos: string;
  /** float timing */
  delay: string;
  duration: string;
  content: ReactNode;
};

const kw = "text-violet";
const str = "text-primary";
const fn = "text-cyan";
const mut = "text-foreground/45";

const chips: Chip[] = [
  {
    pos: "top-[15%] right-[7%]",
    delay: "0s",
    duration: "8s",
    content: (
      <>
        <span className={kw}>const</span> <span className="text-foreground/80">studio</span>{" "}
        <span className={mut}>=</span> <span className={str}>&apos;AP13&apos;</span>
      </>
    ),
  },
  {
    pos: "top-[28%] right-[22%]",
    delay: "1.1s",
    duration: "9.5s",
    content: (
      <>
        <span className={mut}>&lt;</span>
        <span className={fn}>HeroCanvas</span> <span className={mut}>/&gt;</span>
      </>
    ),
  },
  {
    pos: "top-[43%] right-[5%]",
    delay: "0.5s",
    duration: "8.6s",
    content: (
      <span className="flex items-center gap-2">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
        </span>
        <span className="text-foreground/70">build</span>{" "}
        <span className={fn}>passing</span>
      </span>
    ),
  },
  {
    pos: "top-[57%] right-[19%]",
    delay: "1.8s",
    duration: "10s",
    content: (
      <>
        <span className={mut}>{"{"}</span> <span className="text-foreground/80">ai</span>
        <span className={mut}>:</span> <span className={kw}>true</span>{" "}
        <span className={mut}>{"}"}</span>
      </>
    ),
  },
  {
    pos: "top-[69%] right-[8%]",
    delay: "0.9s",
    duration: "9s",
    content: (
      <>
        <span className={mut}>$</span> <span className="text-foreground/75">npm run</span>{" "}
        <span className={fn}>deploy</span>
      </>
    ),
  },
];

/**
 * Floating, code-flavoured glass chips that frame the hero's open side.
 * Purely decorative — hidden on small screens and for pointer users only.
 */
export function HeroCodeChips() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-10 hidden lg:block"
    >
      {chips.map((chip, i) => (
        <div
          key={i}
          className={`anim-fade absolute ${chip.pos}`}
          style={{ animationDelay: `${0.6 + i * 0.15}s` }}
        >
          <div
            className="float-slow"
            style={{ animationDelay: chip.delay, animationDuration: chip.duration }}
          >
            <span className="glass inline-flex items-center whitespace-nowrap rounded-full px-3.5 py-2 font-mono text-[12px] shadow-[0_10px_40px_-16px_rgba(34,224,242,0.55)]">
              {chip.content}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
