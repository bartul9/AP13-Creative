"use client";

import type React from "react";
import { useState } from "react";
import { Clock, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";

const contactItems = [
  {
    icon: MapPin,
    title: "Location",
    value: "Split, Croatia",
    note: "Working remotely with clients across time zones.",
  },
  {
    icon: Mail,
    title: "Email",
    value: "projects@ap13-creative.company",
    href: "mailto:projects@ap13-creative.company",
    note: "Send project scope, timelines, or questions.",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "AP13 Creative",
    href: "https://www.linkedin.com/company/ap13-creative",
    note: "Follow project updates and new work.",
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

    window.location.href = `mailto:projects@ap13-creative.company?subject=${subject}&body=${body}`;
  };

  return (
    <div className="overflow-hidden">
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Tell us what you{" "}
            <span className="text-gradient">want to build.</span>
          </>
        }
        description="Share the product goal, timeline, budget range, and any existing assets. We'll reply with the next practical step."
      />

      <section className="section-shell py-24">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="panel p-7 md:p-9">
              <p className="eyebrow mb-3">Project inquiry</p>
              <h2 className="text-3xl font-semibold text-foreground">
                Send a message.
              </h2>
              <p className="mt-3 text-sm text-foreground/55">
                The form opens your email client with the message prepared.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="label-caps">
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
                    <label htmlFor="email" className="label-caps">
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
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="label-caps">
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

                <Button type="submit" size="lg" className="w-full">
                  Send message
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <>
                  <div className="flex size-11 flex-shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/[0.06] text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="label-caps">{item.title}</h3>
                    <div className="mt-1.5 text-base font-semibold text-foreground">
                      {item.value}
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-foreground/55">
                      {item.note}
                    </p>
                  </div>
                </>
              );

              return (
                <Reveal key={item.title} delay={index * 80}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="panel panel-hover flex h-full items-start gap-4 p-6"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="panel flex h-full items-start gap-4 p-6">
                      {content}
                    </div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
