import { Container } from "@/components/ui/Container";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { features } from "@/data/features";

export function FeaturesSection() {
  return (
    <section
      id="recursos"
      className="relative scroll-mt-24 overflow-hidden bg-[var(--color-background-soft)] py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-8rem] top-12 h-72 w-72 rounded-full bg-[var(--color-purple)]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-6rem] right-[-5rem] h-80 w-80 rounded-full bg-[var(--color-orange)]/10 blur-3xl"
      />

      <Container className="relative">
        <SectionTitle
          eyebrow="Tudo em um só lugar"
          title="Sua vida universitária mais simples, próxima e conectada"
          description="Do marketplace à moradia, dos grupos de estudo aos achados e perdidos: o TrocaUni reúne tudo em uma única experiência."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </Container>
    </section>
  );
}
