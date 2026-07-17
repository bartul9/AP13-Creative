"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Work" },
];

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 12);
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (scrollTop / height) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "transition-all duration-500",
          scrolled
            ? "border-b border-border/70 bg-background/70 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="section-shell">
          <div
            className={cn(
              "flex items-center justify-between transition-all duration-500",
              scrolled ? "h-16" : "h-20",
            )}
          >
            <Link href="/" className="group flex items-center gap-3">
              <span className="relative inline-flex">
                <Image
                  src="/ap13-cyber-mark.png"
                  alt="AP13 Creative"
                  width={44}
                  height={44}
                  className="h-10 w-10 rounded-lg border border-primary/30 object-cover shadow-[0_0_24px_-6px_rgba(34,224,242,0.6)] transition-transform duration-500 group-hover:scale-105"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-sm font-semibold tracking-tight text-foreground">
                  AP13 Creative
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                  Digital Studio
                </span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative rounded-full px-4 py-2 text-[13px] font-medium transition-colors duration-300",
                      active
                        ? "text-primary"
                        : "text-foreground/70 hover:text-foreground",
                    )}
                  >
                    {active && (
                      <span className="absolute inset-0 -z-10 rounded-full border border-primary/25 bg-primary/[0.07]" />
                    )}
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden md:block">
              <Button asChild size="sm">
                <Link href="/contact">
                  Start a project
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              className="flex size-11 items-center justify-center rounded-full border border-border bg-background/40 text-foreground backdrop-blur-sm transition-colors hover:border-primary/60 hover:text-primary md:hidden"
              onClick={() => setMobileMenuOpen((v) => !v)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* scroll progress */}
        <div className="relative h-px w-full bg-transparent">
          <div
            className="h-px bg-gradient-to-r from-primary via-cyan to-blue transition-[width] duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 top-0 z-40 origin-top bg-background/95 backdrop-blur-2xl transition-all duration-500 md:hidden",
          mobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        <div className="section-shell flex h-full flex-col pt-24 pb-10">
          <nav className="flex flex-col">
            {[...navItems, { href: "/contact", label: "Contact" }].map(
              (item, idx) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center justify-between border-b border-border/60 py-5 font-display text-2xl font-medium transition-colors",
                      active ? "text-primary" : "text-foreground/85",
                    )}
                    style={{
                      transitionDelay: mobileMenuOpen ? `${idx * 40}ms` : "0ms",
                    }}
                  >
                    {item.label}
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
                  </Link>
                );
              },
            )}
          </nav>
          <div className="mt-auto">
            <Button asChild size="lg" className="w-full">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Start a project
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
