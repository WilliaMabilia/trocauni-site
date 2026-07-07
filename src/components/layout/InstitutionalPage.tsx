import type { ReactNode } from "react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Container } from "@/components/ui/Container";

type InstitutionalPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function InstitutionalPage({
  eyebrow,
  title,
  description,
  children,
}: InstitutionalPageProps) {
  return (
    <>
      <Header />

      <main className="[background:var(--gradient-soft)]">
        <section className="relative overflow-hidden py-12 sm:py-20 lg:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[-8rem] top-10 h-72 w-72 rounded-full bg-[var(--color-blue)]/10 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[-7rem] top-16 h-80 w-80 rounded-full bg-[var(--color-pink)]/10 blur-3xl"
          />

          <Container className="relative">
            <div className="mx-auto max-w-4xl">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-primary)] sm:text-sm sm:tracking-[0.18em]">
                {eyebrow}
              </p>

              <h1 className="mt-4 text-balance text-3xl font-black leading-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl">
                {title}
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-7 text-[var(--color-text-muted)] sm:text-lg sm:leading-8">
                {description}
              </p>

              <div className="mt-8 w-full overflow-hidden rounded-2xl border border-white/80 bg-white/90 p-4 shadow-[var(--shadow-card)] backdrop-blur sm:mt-10 sm:rounded-[var(--radius-card-large)] sm:p-8 lg:p-10">
                <div className="space-y-7 text-base leading-7 text-[var(--color-text-muted)] [overflow-wrap:anywhere] sm:space-y-8 sm:leading-8">
                  {children}
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
