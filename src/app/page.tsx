import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageBackground } from "@/components/layout/PageBackground";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ValueSection } from "@/components/sections/ValueSection";
import { seo } from "@/config/seo";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: seo.url,
    title: seo.title,
    description: seo.description,
  },
};

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <PageBackground />
      <Header />
      <main>
        <HeroSection />
        <ValueSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
