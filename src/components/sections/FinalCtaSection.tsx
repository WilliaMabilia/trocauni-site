import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { brand } from "@/config/brand";

export function FinalCtaSection() {
  return (
    <section id="lancamento" className="scroll-mt-24 py-14 sm:py-24">
      <Container>
        <div className="grid overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-white/80 bg-white/90 shadow-[var(--shadow-elevated)] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-center p-5 sm:p-10 lg:p-14">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--color-primary)]">Lançamento oficial em breve</p>
            <h2 className="mt-4 text-balance text-3xl font-black leading-tight tracking-[-0.04em] text-[var(--color-text)] sm:text-5xl">O TrocaUni está chegando ao iOS e Android.</h2>
            <p className="mt-5 text-base leading-7 text-[var(--color-text-muted)] sm:mt-6 sm:text-lg sm:leading-8">
              Acompanhe o Instagram oficial e fique por dentro das atualizações e da data de lançamento.
            </p>
            <div className="mt-8">
              <Button
                href={brand.instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Acompanhar lançamento no Instagram (abre em nova aba)"
                className="min-h-12 w-full touch-manipulation sm:w-auto"
              >
                Acompanhar lançamento
              </Button>
            </div>
            <p className="mt-5 text-sm leading-6 text-[var(--color-text-muted)]">
              Os logotipos das lojas na arte são informativos. Os links oficiais serão adicionados após a publicação dos aplicativos.
            </p>
          </div>

          <figure className="relative min-h-[15rem] bg-[var(--color-background-soft)] sm:min-h-[25rem] lg:min-h-full">
            <Image
              src="/images/trocauni-banner-final.png"
              alt="Identidade visual do TrocaUni com referência ao lançamento para iOS e Android"
              fill
              sizes="(max-width: 1023px) 100vw, 55vw"
              className="object-cover"
              loading="lazy"
            />
            <figcaption className="absolute bottom-4 right-4 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-[var(--color-text)] shadow-sm backdrop-blur">
              Disponível em breve
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
