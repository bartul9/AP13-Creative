import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Linkedin, Mail, MapPin } from "lucide-react";

const linkGroups = [
  {
    title: "Studio",
    links: [
      { href: "/about", label: "About" },
      { href: "/projects", label: "Work" },
      { href: "/services", label: "Services" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services", label: "Web Development" },
      { href: "/services", label: "Mobile Apps" },
      { href: "/services", label: "Product Design" },
      { href: "/services", label: "AI Solutions" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-10 border-t border-border/70">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="section-shell pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/ap13-cyber-mark.png"
                alt="AP13"
                width={48}
                height={48}
                className="h-11 w-11 rounded-lg border border-primary/30 object-cover shadow-[0_0_24px_-8px_rgba(34,224,242,0.6)]"
              />
              <span className="font-display text-base font-semibold tracking-tight text-foreground">
                AP13
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-foreground/60">
              A digital product studio turning ambitious ideas into refined,
              production-grade web, mobile, and AI software.
            </p>
            <a
              href="https://www.linkedin.com/company/ap13-dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="AP13 on LinkedIn"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-background/40 text-foreground/80 transition-colors hover:border-primary/60 hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title} className="space-y-4">
              <h3 className="label-caps">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((item) => (
                  <li key={`${group.title}-${item.label}`}>
                    <Link
                      href={item.href}
                      className="link-underline text-sm text-foreground/65 transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-4">
            <h3 className="label-caps">Get in touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5 text-foreground/65">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>Split, Croatia — working worldwide</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <a
                  href="mailto:projects@ap13.dev"
                  className="link-underline break-all text-foreground/65 transition-colors hover:text-foreground"
                >
                  projects@ap13.dev
                </a>
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-cyan"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* oversized wordmark */}
        <div
          aria-hidden="true"
          className="pointer-events-none mt-16 select-none overflow-hidden"
        >
          <div className="bg-gradient-to-b from-foreground/[0.06] to-transparent bg-clip-text text-center font-display text-[18vw] font-bold leading-none tracking-tighter text-transparent">
            AP13
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-foreground/45">
            © {new Date().getFullYear()} AP13. All rights reserved.
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/40">
            Designed &amp; built in Croatia
          </p>
        </div>
      </div>
    </footer>
  );
}
