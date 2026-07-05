import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { brand } from "@/config/brand";

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
      <rect width="18" height="18" x="3" y="3" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FinalCtaSection() {
  return (
    <section id="lancamento" className="scroll-mt-24 py-12 sm:py-20">
      <Container>
        <div className="relative isolate overflow-hidden rounded-[1.5rem] border border-white/80 bg-white/95 shadow-[var(--shadow-elevated)] sm:rounded-[2rem]">
          <Image
            src="/images/trocauni-banner-final.png"
            alt=""
            aria-hidden="true"
            fill
            sizes="100vw"
            className="pointer-events-none -z-10 object-cover object-center opacity-[0.08]"
            loading="lazy"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,62,129,0.24),transparent_68%)] blur-2xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 -left-20 -z-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(99,91,255,0.24),transparent_68%)] blur-2xl"
          />

          <div className="mx-auto flex max-w-4xl flex-col items-center px-5 py-10 text-center sm:px-10 sm:py-14 lg:px-16 lg:py-16">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-primary)] sm:text-sm">
              Lançamento oficial em breve
            </p>
            <h2 className="mt-4 text-balance text-3xl font-black leading-tight tracking-[-0.04em] text-[var(--color-text)] sm:text-5xl">
              O TrocaUni está chegando ao iOS e Android.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--color-text-muted)] sm:text-lg sm:leading-8">
              Acompanhe o Instagram oficial e fique por dentro das atualizações e da data de lançamento.
            </p>

            <a
              href={brand.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Acompanhar lançamento no Instagram (abre em nova aba)"
              className="mt-7 inline-flex min-h-12 w-full touch-manipulation items-center justify-center gap-2 rounded-full bg-[linear-gradient(100deg,#635bff_0%,#a855f7_42%,#ec4899_72%,#ff6b35_100%)] px-6 py-3 text-sm font-bold text-white shadow-[0_14px_34px_rgba(168,85,247,0.3)] outline-none transition duration-200 hover:-translate-y-0.5 hover:brightness-105 focus-visible:ring-2 focus-visible:ring-[#a855f7] focus-visible:ring-offset-4 active:translate-y-0 sm:w-auto sm:min-w-60"
            >
              <InstagramIcon />
              Acompanhar lançamento
            </a>

            <p className="mt-6 max-w-xl text-xs leading-5 text-[var(--color-text-muted)] sm:text-sm sm:leading-6">
              Os logotipos das lojas são informativos. Os links oficiais serão adicionados após a publicação dos aplicativos.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
