import { brand } from "@/config/brand";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { StoreBadges } from "@/components/ui/StoreBadges";

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

const quickFeatures = [
  {
    name: "Feed",
    description: "Compartilhe novidades e materiais",
  },
  {
    name: "Fórum",
    description: "Pergunte, responda e colabore",
  },
  {
    name: "Achados e Perdidos",
    description: "Encontre e ajude",
  },
  {
    name: "Chat",
    description: "Converse e resolva",
  },
] as const;

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative isolate scroll-mt-24 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[var(--color-blue)]/10 blur-3xl sm:h-96 sm:w-96"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-8 h-80 w-80 rounded-full bg-[var(--color-pink)]/10 blur-3xl sm:h-[28rem] sm:w-[28rem]"
      />

      <Container className="pb-10 pt-7 sm:pb-14 sm:pt-12 lg:py-20">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="relative z-10 max-w-2xl">
            <p className="mb-4 inline-flex rounded-full border border-white/80 bg-white/80 px-3.5 py-2 text-xs font-semibold text-[var(--color-primary)] shadow-sm backdrop-blur sm:mb-5 sm:px-4 sm:text-sm">
              A plataforma da vida universitária
            </p>

            <h1 className="max-w-[18ch] text-balance text-[clamp(2.55rem,12vw,3.5rem)] font-black leading-[0.98] tracking-[-0.05em] text-[var(--color-text)] sm:max-w-none sm:text-6xl lg:text-7xl">
              Seu campus{" "}
              <span className="bg-clip-text text-transparent [background-image:var(--gradient-text)]">
                em um app.
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-pretty text-base leading-7 text-[var(--color-text-muted)] sm:mt-6 sm:text-xl sm:leading-8">
              Conecte-se à sua comunidade universitária para compartilhar
              informações, encontrar materiais acadêmicos, participar de
              discussões, localizar objetos perdidos e conversar em um só
              lugar.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <Button
                href="/#recursos"
                className="mobile-button-motion min-h-12 w-full touch-manipulation justify-center gap-2 sm:w-auto"
              >
                Conhecer os recursos
              </Button>

              <Button
                href={brand.instagramUrl}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                aria-label="Acompanhar o lançamento no Instagram do TrocaUni; abre em nova aba"
                className="mobile-button-motion min-h-12 w-full touch-manipulation justify-center gap-2 sm:w-auto"
              >
                <InstagramIcon />
                <span>Acompanhar lançamento</span>
              </Button>
            </div>

            <p className="mt-5 text-sm font-semibold text-[var(--color-text)] sm:mt-6">
              Lançamento em breve para iOS e Android.
            </p>

            <div className="mt-3">
              <StoreBadges />
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-[17.5rem] items-center justify-center pt-1 sm:max-w-[25rem] sm:pt-3 lg:max-w-[36rem] lg:pt-0">
            <div
              aria-hidden="true"
              className="absolute inset-10 rounded-full opacity-20 blur-3xl [background-image:var(--gradient-primary)]"
            />

            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[min(24rem,82vw)] w-[min(24rem,82vw)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50 bg-white/20 backdrop-blur-sm sm:h-[26rem] sm:w-[26rem] lg:h-[30rem] lg:w-[30rem]"
            />

            <PhoneMockup
              priority
              className="relative z-10 max-w-full rotate-[1.5deg] transition duration-500 motion-reduce:transform-none motion-reduce:transition-none lg:hover:rotate-0 lg:hover:scale-[1.015]"
            />
          </div>
        </div>

        <div
          aria-label="Resumo dos recursos"
          className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 lg:mt-16 lg:grid-cols-4 lg:gap-5"
        >
          {quickFeatures.map((feature) => (
            <article
              key={feature.name}
              className="mobile-card-motion min-w-0 rounded-[1.25rem] border border-white/80 bg-white/85 p-3.5 shadow-[var(--shadow-card)] backdrop-blur sm:rounded-[1.35rem] sm:p-5"
            >
              <p className="text-sm font-bold leading-5 text-[var(--color-primary)] sm:text-base">
                {feature.name}
              </p>

              <p className="mt-1.5 text-[0.8rem] leading-5 text-[var(--color-text-muted)] sm:mt-2 sm:text-sm">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
