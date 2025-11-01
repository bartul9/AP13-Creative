import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Linkedin, Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Image
              src="/logo1.png"
              alt="AP13 Creative"
              width={150}
              height={70}
              className="h-8 w-auto"
            />
            <p className="text-sm text-foreground/70 leading-relaxed">
              Turning your vision into high-quality digital reality with speed,
              precision, and creativity.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/ap13-creative"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-card border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all"
              >
                <Linkedin className="w-4 h-4 text-foreground/70 hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              {/*               <li>
                <Link
                  href="/projects"
                  className="text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  Projects
                </Link>
              </li> */}
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
              {/*          <li>
                <Link href="/careers" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Careers
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
              Services
            </h3>
            <ul className="space-y-3">
              <li className="text-sm text-foreground/70">Web Development</li>
              <li className="text-sm text-foreground/70">Mobile Apps</li>
              <li className="text-sm text-foreground/70">UI/UX Design</li>
              <li className="text-sm text-foreground/70">AI Solutions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>Split, Croatia</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <a
                  href="mailto:bartul123@outlook.com"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  bartul123@outlook.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/60">
            © 2025 AP13 Creative. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
