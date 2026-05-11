import Link from "next/link";
import Image from "next/image";
import { Linkedin, Mail, MapPin } from "lucide-react";

const linkGroups = [
  {
    title: "Company",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/projects", label: "Projects" },
      { href: "/careers", label: "Careers" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services", label: "Web Development" },
      { href: "/services", label: "Mobile Apps" },
      { href: "/services", label: "UI/UX Design" },
      { href: "/services", label: "AI Solutions" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="section-shell py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Image
              src="/logo1.png"
              alt="AP13 Creative"
              width={150}
              height={70}
              className="h-8 w-auto"
            />
            <p className="text-sm font-light leading-relaxed text-foreground/70">
              Turning your vision into high-quality digital reality with speed,
              precision, and creativity.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/ap13-creative"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AP13 Creative on LinkedIn"
                className="flex size-10 items-center justify-center rounded-full border border-border bg-background transition-colors hover:border-primary hover:text-primary"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title} className="space-y-4">
              <h3 className="label-caps text-foreground">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((item) => (
                  <li key={`${group.title}-${item.label}`}>
                    <Link
                      href={item.href}
                      className="text-sm font-light text-foreground/70 transition-colors hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-4">
            <h3 className="label-caps text-foreground">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm font-light text-foreground/70">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>Split, Croatia</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <a
                  href="mailto:bartul123@outlook.com"
                  className="font-light text-foreground/70 transition-colors hover:text-primary"
                >
                  bartul123@outlook.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm font-light text-foreground/60">
            &copy; 2025 AP13 Creative. All rights reserved.
          </p>
          <Link
            href="/contact"
            className="label-caps text-primary transition-colors hover:text-primary/80"
          >
            Contact AP13
          </Link>
        </div>
      </div>
    </footer>
  );
}
