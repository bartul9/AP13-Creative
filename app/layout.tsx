import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://ap13-creative.company"),
  title: {
    default: "AP13 Creative - Digital Agency",
    template: "%s | AP13 Creative",
  },
  description:
    "Turning your vision into high-quality digital reality. Web and mobile app development with precision, creativity, and style.",
  keywords: [
    "AP13 Creative",
    "digital agency",
    "web development",
    "mobile app development",
    "product design",
    "software development agency",
    "UI UX design",
    "custom software",
    "startup development partner",
  ],
  applicationName: "AP13 Creative",
  authors: [{ name: "AP13 Creative" }],
  creator: "AP13 Creative",
  publisher: "AP13 Creative",
  category: "Digital Agency",
  alternates: {
    canonical: "https://ap13-creative.company/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ap13-creative.company/",
    title: "AP13 Creative - Digital Agency",
    description:
      "AP13 Creative delivers high-quality web and mobile applications with precision, creativity, and style.",
    siteName: "AP13 Creative",
    images: [
      {
        url: "https://ap13-creative.company/ap13-cyber-wide.png",
        width: 1200,
        height: 630,
        alt: "AP13 Creative branding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AP13 Creative - Digital Agency",
    description:
      "Turning your vision into high-quality digital reality with web and mobile app development.",
    images: ["https://ap13-creative.company/ap13-cyber-wide.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "mHiSsF-vFFPSGIBj9qYP8K0ErznmxILmn2J-RmMgPsc",
  },
  appleWebApp: {
    title: "AP13 Creative",
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AP13 Creative",
              url: "https://ap13-creative.company/",
              logo: "https://ap13-creative.company/ap13-cyber-mark.png",
              sameAs: ["https://www.linkedin.com/company/ap13-creative/"],
            }),
          }}
        />
        {/* WebSite (nice-to-have) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "AP13 Creative",
              url: "https://ap13-creative.company/",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://ap13-creative.company/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <div className="site-ambient" aria-hidden="true" />
        <div className="site-grain" aria-hidden="true" />
        <Navigation />
        <main id="main">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
