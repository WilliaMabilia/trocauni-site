import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <>
      <Header />

      <main className="min-h-[calc(100dvh-4.75rem)] [background:var(--gradient-soft)] lg:min-h-[calc(100dvh-5.5rem)]">
        <section className="py-14 sm:py-20 lg:py-24">
          <Container>
            <div className="mx-auto flex max-w-2xl flex-col items-start">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-primary)] sm:text-sm sm:tracking-[0.18em]">
                Erro 404
              </p>

              <h1 className="mt-4 text-balance text-4xl font-black leading-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl">
                Página não encontrada
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-[var(--color-text-muted)] sm:text-lg sm:leading-8">
                O endereço acessado não existe ou foi movido. Volte para a
                página inicial para continuar navegando pelo TrocaUni.
              </p>

              <Link
                href="/"
                className="mt-8 inline-flex min-h-12 touch-manipulation items-center justify-center rounded-[var(--radius-button)] px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-card)] outline-none transition duration-200 focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 [background:var(--gradient-primary)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-elevated)]"
              >
                Voltar para o início
              </Link>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
