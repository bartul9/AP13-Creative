"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";
import { Clock, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactItems = [
  {
    icon: MapPin,
    title: "Location",
    value: "Split, Croatia",
    note: "Working globally with remote-first delivery.",
  },
  {
    icon: Mail,
    title: "Email",
    value: "bartul123@outlook.com",
    href: "mailto:bartul123@outlook.com",
    note: "Send project scope, timelines, or questions.",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "Connect with AP13 Creative",
    href: "https://www.linkedin.com/company/ap13-creative",
    note: "Follow updates and company activity.",
  },
  {
    icon: Clock,
    title: "Response",
    value: "Within 24 hours",
    note: "We respond fastest when scope and deadline are included.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Project inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );

    window.location.href = `mailto:bartul123@outlook.com?subject=${subject}&body=${body}`;
  };

  return (
    <div>
      <section className="relative overflow-hidden border-b border-border pt-28 md:pt-32">
        <Image
          src="/restaurant-ordering-app.png"
          alt="Mobile ordering app interface"
          fill
          priority
          className="motion-image object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/85" />
        <div className="section-shell relative py-16 md:py-20">
          <div className="motion-fade-up max-w-4xl">
            <p className="label-caps mb-4 text-primary">Contact</p>
            <h1 className="text-5xl font-bold leading-[1.05] text-foreground sm:text-6xl">
              Tell us what you want to build.
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-light leading-[1.55] text-foreground/80">
              Share the product goal, timeline, budget range, and any existing
              assets. We will reply with the next practical step.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="motion-fade-up border border-border bg-card p-6 md:p-8 lg:p-10">
            <div className="mb-8">
              <p className="label-caps mb-3 text-primary">Project inquiry</p>
              <h2 className="text-3xl font-bold leading-tight text-foreground">
                Send a message.
              </h2>
              <p className="body-light mt-3">
                The form opens your email client with the message prepared.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="label-caps text-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(event) =>
                    setFormData({ ...formData, name: event.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="label-caps text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(event) =>
                    setFormData({ ...formData, email: event.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="label-caps text-foreground"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project, timeline, and goals."
                  value={formData.message}
                  onChange={(event) =>
                    setFormData({ ...formData, message: event.target.value })
                  }
                  required
                  rows={7}
                />
              </div>

              <Button type="submit" className="w-full">
                Send Message
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>

          <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-1">
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <>
                  <div className="flex size-12 items-center justify-center rounded-full border border-primary text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="label-caps text-primary">{item.title}</h3>
                    <div className="mt-2 text-lg font-bold leading-tight text-foreground">
                      {item.value}
                    </div>
                    <p className="mt-2 text-sm font-light leading-relaxed text-foreground/70">
                      {item.note}
                    </p>
                  </div>
                </>
              );

              return item.href ? (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="motion-fade-up grid gap-5 bg-card p-6 transition-colors duration-300 hover:bg-background hover:text-primary"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  {content}
                </a>
              ) : (
                <div
                  key={item.title}
                  className="motion-fade-up grid gap-5 bg-card p-6 transition-colors duration-300 hover:bg-background"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
