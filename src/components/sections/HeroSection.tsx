import { brand } from "@/config/brand";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { StoreBadges } from "@/components/ui/StoreBadges";

const quickFeatures = [
  { name: "Feed", description: "Compartilhe novidades e materiais" },
  { name: "Fórum", description: "Pergunte, responda e colabore" },
  { name: "Achados e Perdidos", description: "Encontre e ajude" },
  { name: "Chat", description: "Converse e resolva" },
] as const;

export function HeroSection() {
  return (
    <section id="inicio" className="relative isolate scroll-mt-24 overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute left-[-9rem] top-20 h-96 w-96 rounded-full bg-[var(--color-blue)]/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute right-[-8rem] top-12 h-[28rem] w-[28rem] rounded-full bg-[var(--color-pink)]/10 blur-3xl" />

      <Container className="py-10 sm:py-16 lg:py-20">
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <div className="relative z-10 max-w-2xl">
            <p className="mb-4 inline-flex rounded-full border border-white/80 bg-white/75 px-3.5 py-2 text-xs sm:mb-5 sm:px-4 sm:text-sm font-semibold text-[var(--color-primary)] shadow-sm backdrop-blur">
              A plataforma da vida universitária
            </p>
            <h1 className="text-balance text-[clamp(2.65rem,13vw,3.5rem)] font-black leading-[0.98] tracking-[-0.05em] text-[var(--color-text)] sm:text-6xl lg:text-7xl">
              Seu campus{" "}
              <span className="bg-clip-text text-transparent [background-image:var(--gradient-text)]">em um app.</span>
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-[var(--color-text-muted)] sm:mt-6 sm:text-xl sm:leading-8">
              Conecte-se à sua comunidade universitária para compartilhar informações, encontrar materiais acadêmicos, participar de discussões, localizar objetos perdidos e conversar em um só lugar.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <Button href="/#recursos" className="min-h-12 w-full touch-manipulation sm:w-auto">
                Conhecer os recursos
              </Button>
              <Button
                href={brand.instagramUrl}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                aria-label="Acompanhar lançamento no Instagram (abre em nova aba)"
                className="min-h-12 w-full touch-manipulation sm:w-auto"
              >
                Acompanhar lançamento
              </Button>
            </div>
            <p className="mt-6 text-sm font-semibold text-[var(--color-text)]">
              Lançamento em breve para iOS e Android.
            </p>
            <StoreBadges />
          </div>

          <div className="relative mx-auto flex w-full max-w-[20rem] items-center justify-center py-2 sm:max-w-[29rem] sm:py-4 lg:max-w-[38rem] lg:py-0">
            <div aria-hidden="true" className="absolute inset-12 rounded-full opacity-20 blur-3xl [background-image:var(--gradient-primary)]" />
            <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-[min(28rem,90vw)] w-[min(28rem,90vw)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50 bg-white/20 backdrop-blur-sm" />
            <PhoneMockup priority className="relative z-10 max-w-full rotate-[2deg] transition duration-500 motion-reduce:transform-none motion-reduce:transition-none lg:hover:rotate-0 lg:hover:scale-[1.015]" />
          </div>
        </div>

        <div aria-label="Resumo dos recursos" className="mt-10 grid grid-cols-1 gap-3 min-[380px]:grid-cols-2 sm:mt-12 lg:mt-16 lg:grid-cols-4 lg:gap-5">
          {quickFeatures.map((feature) => (
            <article key={feature.name} className="min-w-0 rounded-[1.35rem] border border-white/80 bg-white/85 p-4 shadow-[var(--shadow-card)] backdrop-blur sm:p-5">
              <p className="text-sm font-bold text-[var(--color-primary)] sm:text-base">{feature.name}</p>
              <p className="mt-2 text-sm leading-5 text-[var(--color-text-muted)]">{feature.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
