import type { Metadata } from "next";

import { InstitutionalPage } from "@/components/layout/InstitutionalPage";
import { brand } from "@/config/brand";

export const metadata: Metadata = {
  title: `Exclusão de conta | ${brand.name}`,
  description:
    "Saiba como solicitar a exclusão da sua conta TrocaUni e como seus dados são tratados.",
  alternates: {
    canonical: `${brand.domain}/exclusao-de-conta/`,
  },
};

export default function AccountDeletionPage() {
  return (
    <InstitutionalPage
      eyebrow="Privacidade e conta"
      title="Exclusão de conta"
      description="Saiba como solicitar a exclusão da sua conta TrocaUni e como seus dados são tratados durante esse processo."
    >
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background-soft)] p-5">
        <p className="font-semibold text-[var(--color-text)]">
          Última atualização: 7 de julho de 2026
        </p>
        <p className="mt-1 text-sm">Versão: 2026-07-07-v1</p>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text)]">
          Como solicitar pelo aplicativo
        </h2>

        <p className="mt-3">
          Para solicitar a exclusão da sua conta, use o caminho disponível no
          aplicativo:
        </p>

        <ol className="mt-3 list-decimal space-y-2 pl-6">
          <li>abra o TrocaUni;</li>
          <li>acesse Perfil;</li>
          <li>abra Privacidade;</li>
          <li>selecione &quot;Excluir minha conta&quot;;</li>
          <li>confirme a solicitação.</li>
        </ol>

        <p className="mt-3">
          A solicitação é registrada pelo aplicativo e processada com segurança.
          O processamento pode não acontecer imediatamente.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text)]">
          Quando você não consegue acessar o app
        </h2>

        <p className="mt-3">
          Se você não conseguir acessar o aplicativo, entre em contato pelo
          e-mail{" "}
          <a
            href={`mailto:${brand.email}`}
            className="font-semibold text-[var(--color-primary)] hover:underline"
          >
            {brand.email}
          </a>
          . O suporte poderá orientar você e validar a solicitação antes de dar
          continuidade ao atendimento.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text)]">
          Dados apagados
        </h2>

        <p className="mt-3">
          Conforme o funcionamento da plataforma e a situação da conta, a
          exclusão pode apagar dados como:
        </p>

        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>conta de autenticação;</li>
          <li>perfil privado;</li>
          <li>perfil público;</li>
          <li>tokens de notificação;</li>
          <li>configurações da conta;</li>
          <li>imagens e arquivos pessoais associados;</li>
          <li>dados de presença;</li>
          <li>bloqueios e relações pessoais;</li>
          <li>notificações recebidas.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text)]">
          Dados anonimizados
        </h2>

        <p className="mt-3">
          Alguns conteúdos podem permanecer anonimizados para preservar a
          integridade de conversas e da comunidade. Isso pode incluir:
        </p>

        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>publicações;</li>
          <li>comentários;</li>
          <li>tópicos e respostas;</li>
          <li>mensagens;</li>
          <li>conversas;</li>
          <li>itens removidos de Achados e Perdidos.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text)]">
          Dados que podem ser mantidos
        </h2>

        <p className="mt-3">
          Alguns registros podem ser mantidos quando necessários para segurança,
          prevenção de fraude, prevenção de abuso, moderação, investigação de
          denúncias ou cumprimento de obrigação legal.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text)]">
          Sign in with Apple
        </h2>

        <p className="mt-3">
          Quando aplicável, a autorização do Sign in with Apple é revogada no
          fluxo de exclusão da conta.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text)]">
          Caráter permanente
        </h2>

        <p className="mt-3">
          Depois de concluída, a exclusão da conta é permanente e não pode ser
          desfeita.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text)]">
          Contato
        </h2>

        <p className="mt-3">
          Para dúvidas sobre exclusão de conta, fale com o TrocaUni pelo e-mail{" "}
          <a
            href={`mailto:${brand.email}`}
            className="font-semibold text-[var(--color-primary)] hover:underline"
          >
            {brand.email}
          </a>
          .
        </p>
      </section>
    </InstitutionalPage>
  );
}
