import type { Metadata } from "next";

import { InstitutionalPage } from "@/components/layout/InstitutionalPage";
import { Button } from "@/components/ui/Button";
import { brand } from "@/config/brand";

export const metadata: Metadata = {
  title: `Contato | ${brand.name}`,
  description:
    "Entre em contato com a equipe do TrocaUni.",
  alternates: {
    canonical: `${brand.domain}/contato/`,
  },
};

export default function ContactPage() {
  return (
    <InstitutionalPage
      eyebrow="Contato"
      title="Fale com o TrocaUni"
      description="Dúvidas, sugestões, parcerias ou suporte: escolha o canal mais adequado para falar com a equipe."
    >
      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text)]">
          Atendimento
        </h2>

        <p className="mt-3">
          Para assuntos gerais, suporte ou solicitações relacionadas à sua conta,
          envie uma mensagem para:
        </p>

        <a
          href={`mailto:${brand.email}`}
          className="mt-4 inline-flex text-lg font-bold text-[var(--color-primary)] hover:underline"
        >
          {brand.email}
        </a>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text)]">
          Redes sociais
        </h2>

        <p className="mt-3">
          Acompanhe novidades, atualizações do projeto e informações sobre o
          lançamento pelo Instagram.
        </p>

        <div className="mt-5">
          <Button
            href={brand.instagramUrl}
            target="_blank"
            rel="noreferrer"
          >
            Abrir Instagram
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text)]">
          Prazo de resposta
        </h2>

        <p className="mt-3">
          A equipe buscará responder às mensagens em até cinco dias úteis,
          dependendo da natureza da solicitação.
        </p>
      </section>
    </InstitutionalPage>
  );
}
