"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Linkedin, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-45">
        <div className="max-w-4xl mx-auto space-y-2 text-pretty text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-balance">
            Let's <span className="text-primary glow-cyan">Connect</span>
          </h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Ready to bring your vision to life? Get in touch with us today and
            let's create something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card border border-border rounded-3xl p-8 md:p-10 space-y-8 hover:box-glow-cyan transition-all duration-300">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">Send us a message</h2>
                <p className="text-foreground/70">
                  Fill out the form and we'll get back to you within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name *
                  </label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="bg-background border-border h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="bg-background border-border h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={6}
                    className="bg-background border-border resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 box-glow-cyan hover:box-glow-cyan-hover transition-all duration-300 h-12 text-base group"
                >
                  Send Message
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-card border border-border rounded-3xl p-8 space-y-6 hover:box-glow-cyan transition-all duration-300">
                <h2 className="text-2xl font-bold">Get in touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1 text-lg">Location</div>
                      <div className="text-foreground/70">Split, Croatia</div>
                      <div className="text-sm text-foreground/60">
                        Working globally, serving clients worldwide
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1 text-lg">Email</div>
                      <a
                        href="mailto:bartul123@outlook.com"
                        className="text-primary hover:underline hover:text-primary/80 transition-colors"
                      >
                        bartul123@outlook.com
                      </a>
                      <div className="text-sm text-foreground/60 mt-1">
                        We'll respond within 24 hours
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Linkedin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1 text-lg">LinkedIn</div>
                      <a
                        href="https://www.linkedin.com/company/ap13-creative"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline hover:text-primary/80 transition-colors"
                      >
                        Connect with us
                      </a>
                      <div className="text-sm text-foreground/60 mt-1">
                        Follow our latest updates
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
