import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AP13 Creative - Digital Agency",
  description:
    "Turning your vision into high-quality digital reality. Web and mobile app development with precision, creativity, and style.",
  verification: {
    google: "mHiSsF-vFFPSGIBj9qYP8K0ErznmxILmn2J-RmMgPsc",
  },
  appleWebApp: {
    title: "AP13 Creative",
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
