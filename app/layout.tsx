import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ap13-creative.company/"),
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
    canonical: "/",
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
        url: "/logo.png",
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
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans antialiased`}>
        <Navigation />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
