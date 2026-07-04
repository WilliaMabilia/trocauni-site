import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageBackground } from "@/components/layout/PageBackground";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ValueSection } from "@/components/sections/ValueSection";

export default function Home() {
  return (
    <>
      <PageBackground />

      <div className="relative isolate min-h-screen">
        <Header />

        <main>
          <HeroSection />

          <div id="por-que" className="scroll-mt-24">
            <div id="recursos" className="scroll-mt-24">
              <ValueSection />
            </div>
          </div>

          <FinalCtaSection />
        </main>

        <Footer />
      </div>
    </>
  );
}
