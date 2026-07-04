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
        <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
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
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-primary)]">
                {eyebrow}
              </p>

              <h1 className="mt-4 text-balance text-4xl font-black tracking-[-0.04em] text-[var(--color-text)] sm:text-5xl lg:text-6xl">
                {title}
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--color-text-muted)]">
                {description}
              </p>

              <div className="mt-10 rounded-[var(--radius-card-large)] border border-white/80 bg-white/90 p-6 shadow-[var(--shadow-card)] backdrop-blur sm:p-10">
                <div className="space-y-8 text-base leading-8 text-[var(--color-text-muted)]">
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
