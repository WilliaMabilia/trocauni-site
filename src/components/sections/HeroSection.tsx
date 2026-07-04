import { brand } from "@/config/brand";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { StoreBadges } from "@/components/ui/StoreBadges";

const floatingCards = [
  {
    eyebrow: "Feed",
    title: "Compartilhe e acompanhe sua comunidade",
    className:
      "left-[-1.5rem] top-[5.5rem] xl:left-[-4.5rem] xl:top-[6.5rem]",
    accent: "from-[#4f7cff] to-[#7c5cfc]",
  },
  {
    eyebrow: "Fórum",
    title: "Tire dúvidas e compartilhe conhecimento",
    className:
      "right-[-1.5rem] top-[9.5rem] xl:right-[-5rem] xl:top-[10.5rem]",
    accent: "from-[#a64bea] to-[#ec4899]",
  },
  {
    eyebrow: "Achados e Perdidos",
    title: "Ajude objetos a encontrarem seus donos",
    className:
      "bottom-[4.5rem] left-[-1rem] xl:bottom-[5rem] xl:left-[-5rem]",
    accent: "from-[#6474a8] to-[#7c5cfc]",
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
        className="pointer-events-none absolute left-[-9rem] top-20 h-96 w-96 rounded-full bg-[var(--color-blue)]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-8rem] top-12 h-[28rem] w-[28rem] rounded-full bg-[var(--color-pink)]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-10rem] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[var(--color-orange)]/8 blur-3xl"
      />

      <Container className="grid min-h-[calc(100vh-5.5rem)] items-center gap-14 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:py-20">
        <div className="relative z-10 max-w-2xl">
          <p className="mb-5 inline-flex rounded-full border border-white/80 bg-white/75 px-4 py-2 text-sm font-semibold text-[var(--color-primary)] shadow-sm backdrop-blur">
            A plataforma da vida universitária
          </p>

          <h1 className="text-balance text-5xl font-black tracking-[-0.05em] text-[var(--color-text)] sm:text-6xl lg:text-7xl">
            Seu campus{" "}
            <span className="bg-clip-text text-transparent [background-image:var(--gradient-text)]">
              em um app.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-[var(--color-text-muted)] sm:text-xl">
            Compartilhe informações no Feed, tire dúvidas no Fórum, encontre
            objetos em Achados e Perdidos e converse diretamente pelo Chat.
          </p>

          <div className="mt-8">
            <Button
              href={brand.instagramUrl}
              target="_blank"
              rel="noreferrer"
            >
              Seguir no Instagram
            </Button>
          </div>

          <StoreBadges />
        </div>

        <div className="relative mx-auto flex w-full max-w-[38rem] items-center justify-center py-6 lg:py-0">
          <div
            aria-hidden="true"
            className="absolute inset-12 rounded-full [background-image:var(--gradient-primary)] opacity-20 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50 bg-white/20 backdrop-blur-sm"
          />

          <PhoneMockup
            priority
            className="relative z-10 rotate-[2.5deg] transition duration-500 hover:rotate-0 hover:scale-[1.015]"
          />

          <div className="pointer-events-none absolute inset-0 z-20 hidden lg:block">
            {floatingCards.map((card) => (
              <article
                key={card.eyebrow}
                className={`absolute w-52 rounded-[1.4rem] border border-white/80 bg-white/90 p-4 shadow-[var(--shadow-card)] backdrop-blur ${card.className}`}
              >
                <div
                  aria-hidden="true"
                  className={`mb-3 h-1.5 w-10 rounded-full bg-gradient-to-r ${card.accent}`}
                />

                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]">
                  {card.eyebrow}
                </p>

                <p className="mt-1 text-sm font-bold leading-5 text-[var(--color-text)]">
                  {card.title}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
