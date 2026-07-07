import type { Metadata } from "next";

import { InstitutionalPage } from "@/components/layout/InstitutionalPage";
import { brand } from "@/config/brand";

export const metadata: Metadata = {
  title: `Regras da Comunidade | ${brand.name}`,
  description:
    "Conheça as regras criadas para manter a comunidade TrocaUni segura, respeitosa e colaborativa.",
  alternates: {
    canonical: `${brand.domain}/regras-da-comunidade/`,
  },
};

const rules = [
  {
    title: "1. Respeito em primeiro lugar",
    paragraphs: [
      "Não são permitidos ataques pessoais, humilhações, perseguições, assédio, ameaças, intimidação ou comportamentos que tornem o ambiente inseguro para outras pessoas.",
      "Discordâncias são permitidas, mas devem ser manifestadas sem agressões, insultos ou tentativas de constrangimento.",
    ],
  },
  {
    title: "2. Proibição de discriminação",
    paragraphs: [
      "Não é permitido publicar conteúdo discriminatório, ofensivo ou hostil com base em raça, cor, etnia, nacionalidade, religião, gênero, identidade de gênero, orientação sexual, deficiência, idade, condição social, aparência, universidade, curso ou qualquer outra característica pessoal.",
    ],
  },
  {
    title: "3. Conteúdo ilegal, violento ou perigoso",
    paragraphs: [
      "Não publique conteúdo que incentive, facilite, organize ou normalize atos ilegais, violência, exploração, autolesão, invasão de privacidade, fraude, golpes ou atividades que possam colocar pessoas em risco.",
      "Ameaças consideradas reais ou situações de risco imediato poderão ser encaminhadas às autoridades competentes quando houver fundamento legal.",
    ],
  },
  {
    title: "4. Privacidade de terceiros",
    paragraphs: [
      "Não divulgue dados pessoais, documentos, imagens privadas, conversas, localização, contatos ou informações confidenciais de outra pessoa sem autorização.",
      "Antes de publicar fotos, vídeos ou capturas de tela envolvendo terceiros, verifique se você possui autorização para fazê-lo.",
    ],
  },
  {
    title: "5. Conteúdo falso ou enganoso",
    paragraphs: [
      "Não publique informações deliberadamente falsas, manipuladas ou enganosas que possam causar prejuízo, confusão, fraude ou risco para a comunidade.",
      "Ao divulgar informações relevantes sobre eventos, oportunidades, vagas, serviços ou comunicados, procure indicar fontes e dados verificáveis.",
    ],
  },
  {
    title: "6. Spam e uso abusivo",
    paragraphs: [
      "Não utilize o TrocaUni para spam, automações abusivas, envio repetitivo de mensagens, divulgação massiva não solicitada, golpes, links suspeitos ou qualquer comportamento que prejudique a experiência dos demais usuários.",
    ],
  },
  {
    title: "7. Publicações, anúncios e fórum",
    paragraphs: [
      "Mantenha as publicações claras, respeitosas e relacionadas ao objetivo da comunidade e à categoria escolhida.",
      "Descrições de produtos, serviços, moradia, oportunidades ou eventos devem apresentar informações verdadeiras e não podem ocultar condições relevantes.",
      "O fórum deve ser utilizado para dúvidas, colaboração, aprendizado e troca responsável de conhecimento.",
    ],
  },
  {
    title: "8. Materiais acadêmicos",
    paragraphs: [
      "Materiais acadêmicos anunciados no TrocaUni devem ser permitidos, descritos com clareza e compatíveis com a finalidade universitária da comunidade.",
      "Não é permitido anunciar itens ilegais, itens proibidos, materiais falsificados, produtos perigosos, medicamentos sujeitos a controle, documentos pessoais, anúncios enganosos, golpes ou cobranças fora do combinado.",
    ],
  },
  {
    title: "9. Achados e Perdidos",
    paragraphs: [
      "Use Achados e Perdidos somente para ajudar na recuperação responsável de objetos encontrados ou perdidos.",
      "Não reivindique falsamente um item, não publique documento pessoal de terceiro sem proteção, não divulgue dados sensíveis, não exija pagamento abusivo para devolver objeto e não use a funcionalidade para fraude.",
      "Evite publicar imagens desnecessárias de documentos pessoais. Quando uma informação for indispensável para identificação do item, proteja dados que não precisam ficar visíveis.",
    ],
  },
  {
    title: "10. Chat e mensagens",
    paragraphs: [
      "O chat deve ser utilizado com respeito. Mensagens ofensivas, assédio, insistência indesejada, spam, golpes, ameaças ou envio de conteúdo inadequado poderão resultar em denúncia e penalidade.",
      "Não use o Chat para coleta indevida de dados, envio de conteúdo ilegal, tentativa de pagamento fraudulento, links perigosos ou qualquer abordagem que coloque outra pessoa em risco.",
      "Respeite quando outra pessoa demonstrar que não deseja continuar uma conversa.",
    ],
  },
  {
    title: "11. Propriedade intelectual",
    paragraphs: [
      "Não publique conteúdo protegido por direitos autorais, marcas ou outros direitos de terceiros sem autorização ou fundamento legal.",
      "Ao utilizar materiais de terceiros, informe a autoria e a fonte quando aplicável.",
    ],
  },
  {
    title: "12. Denúncias",
    paragraphs: [
      "Usuários poderão denunciar conteúdos, perfis, mensagens ou comportamentos que possam violar estas regras.",
      "As denúncias serão avaliadas conforme o contexto, as informações disponíveis, a gravidade, a recorrência e os riscos envolvidos.",
      "Não utilize o sistema de denúncias para perseguir, intimidar ou prejudicar indevidamente outros usuários.",
    ],
  },
  {
    title: "13. Penalidades",
    paragraphs: [
      "Violações poderão resultar em orientação, aviso, redução de visibilidade, ocultação ou remoção de conteúdo, limitação de funcionalidades, bloqueio temporário, suspensão ou encerramento da conta.",
      "As medidas poderão ser aplicadas de forma progressiva ou imediata, dependendo da gravidade do caso e do risco para a comunidade.",
    ],
  },
  {
    title: "14. Uso responsável",
    paragraphs: [
      "Use o TrocaUni para construir uma comunidade universitária mais segura, útil e colaborativa.",
      "Seja educado, ajude quando puder, verifique informações antes de compartilhá-las, evite conflitos desnecessários e respeite os limites das outras pessoas.",
    ],
  },
] as const;

export default function CommunityGuidelinesPage() {
  return (
    <InstitutionalPage
      eyebrow="Convivência e segurança"
      title="Regras da Comunidade TrocaUni"
      description="Estas regras orientam a participação dos usuários e ajudam a preservar um ambiente universitário seguro, respeitoso e colaborativo."
    >
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background-soft)] p-5">
        <p className="font-semibold text-[var(--color-text)]">
          Última atualização: 7 de julho de 2026
        </p>
        <p className="mt-1 text-sm">Versão: 2026-07-07-v1</p>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text)]">
          Nossa comunidade
        </h2>

        <p className="mt-3">
          O TrocaUni foi criado para aproximar estudantes e incentivar
          colaboração, troca de informações, aprendizado, oportunidades e
          convivência respeitosa.
        </p>

        <p className="mt-3">
          Estas regras se aplicam a perfis, publicações, comentários, fóruns,
          anúncios, eventos, mensagens, arquivos, imagens e demais interações
          realizadas por meio da plataforma.
        </p>
      </section>

      {rules.map((rule) => (
        <section key={rule.title}>
          <h2 className="text-2xl font-bold text-[var(--color-text)]">
            {rule.title}
          </h2>

          {rule.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-3">
              {paragraph}
            </p>
          ))}
        </section>
      ))}

      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text)]">
          15. Contato
        </h2>

        <p className="mt-3">
          Dúvidas ou solicitações relacionadas às Regras da Comunidade podem ser
          enviadas para{" "}
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
