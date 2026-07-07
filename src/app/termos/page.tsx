import type { Metadata } from "next";

import { InstitutionalPage } from "@/components/layout/InstitutionalPage";
import { brand } from "@/config/brand";

export const metadata: Metadata = {
  title: `Termos de Uso | ${brand.name}`,
  description:
    "Consulte os Termos de Uso que regulam o acesso e a utilização da plataforma TrocaUni.",
  alternates: {
    canonical: `${brand.domain}/termos/`,
  },
};

export default function TermsPage() {
  return (
    <InstitutionalPage
      eyebrow="Documento legal"
      title="Termos de Uso do TrocaUni"
      description="Estes Termos regulam o acesso e a utilização do aplicativo e dos serviços disponibilizados pelo TrocaUni."
    >
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background-soft)] p-5">
        <p className="font-semibold text-[var(--color-text)]">
          Última atualização: 7 de julho de 2026
        </p>
        <p className="mt-1 text-sm">Versão: 2026-07-07-v1</p>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text)]">
          Bem-vindo ao TrocaUni
        </h2>

        <p className="mt-3">
          Estes Termos de Uso regulam o acesso e a utilização do TrocaUni, uma
          plataforma criada para conectar estudantes universitários e facilitar
          publicações, conversas, dúvidas acadêmicas, interações em comunidade,
          eventos, comunicados e outras atividades relacionadas à vida
          universitária.
        </p>

        <p className="mt-3">
          Ao criar uma conta, acessar ou utilizar o TrocaUni, você declara que
          leu, compreendeu e concorda com estes Termos, com a Política de
          Privacidade e com as Regras da Comunidade.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text)]">
          1. Sobre o TrocaUni
        </h2>

        <p className="mt-3">
          O TrocaUni é uma plataforma digital voltada ao ambiente universitário.
          O aplicativo permite que usuários criem perfis, publiquem conteúdos,
          interajam em publicações, participem de fóruns, enviem mensagens,
          recebam notificações, denunciem conteúdos e acessem comunicados,
          eventos e recursos disponibilizados pela plataforma.
        </p>

        <p className="mt-3">
          Algumas funcionalidades poderão ser modificadas, adicionadas,
          restringidas ou descontinuadas de acordo com a evolução do produto,
          necessidades operacionais, segurança da comunidade ou exigências
          legais.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text)]">
          2. Cadastro e conta do usuário
        </h2>

        <p className="mt-3">
          Para utilizar determinadas funcionalidades, o usuário deverá criar
          uma conta e fornecer informações verdadeiras, atualizadas e
          compatíveis com seu perfil.
        </p>

        <p className="mt-3">
          O usuário é responsável por manter a segurança de sua conta, proteger
          seus meios de autenticação, não compartilhar o acesso com terceiros e
          comunicar ao TrocaUni qualquer suspeita de uso não autorizado.
        </p>

        <p className="mt-3">
          Contas criadas com informações falsas, fraudulentas, enganosas ou
          utilizadas para se passar por outra pessoa poderão ser restringidas,
          suspensas ou encerradas.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text)]">
          3. Uso permitido da plataforma
        </h2>

        <p className="mt-3">
          O usuário concorda em utilizar o TrocaUni de forma ética, respeitosa,
          segura e compatível com a finalidade da plataforma.
        </p>

        <p className="mt-3">
          O aplicativo poderá ser utilizado para interagir com outros
          estudantes, publicar conteúdos relacionados à vida acadêmica,
          participar de discussões, trocar mensagens, acompanhar comunicados,
          divulgar eventos, oferecer ou buscar produtos e serviços permitidos e
          denunciar conteúdos ou comportamentos inadequados.
        </p>

        <p className="mt-3">
          O Feed também pode ser usado para divulgar materiais acadêmicos
          permitidos, como livros, jalecos, calculadoras, apostilas e outros
          itens compatíveis com a finalidade universitária da comunidade.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text)]">
          4. Condutas proibidas
        </h2>

        <p className="mt-3">Não é permitido utilizar o TrocaUni para:</p>

        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            publicar conteúdo ilegal, ofensivo, discriminatório, ameaçador,
            abusivo ou que incentive violência;
          </li>
          <li>
            praticar assédio, perseguição, intimidação ou insistência indesejada;
          </li>
          <li>
            divulgar dados pessoais ou conteúdo privado de terceiros sem
            autorização;
          </li>
          <li>
            publicar golpes, fraudes, spam, links perigosos, arquivos maliciosos
            ou informações deliberadamente enganosas;
          </li>
          <li>
            oferecer produtos, serviços ou atividades proibidos pela legislação
            ou pelas regras da plataforma;
          </li>
          <li>
            anunciar itens ilegais, proibidos, falsificados, perigosos ou que
            violem direitos de terceiros;
          </li>
          <li>
            tentar acessar contas, dados, sistemas ou áreas administrativas sem
            autorização;
          </li>
          <li>
            interferir no funcionamento do aplicativo ou burlar mecanismos de
            autenticação, segurança, moderação ou controle de acesso;
          </li>
          <li>
            utilizar automações abusivas, coleta indevida de dados ou qualquer
            mecanismo que prejudique usuários ou a infraestrutura da plataforma.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text)]">
          5. Conteúdo publicado pelo usuário
        </h2>

        <p className="mt-3">
          O usuário é responsável pelos conteúdos que publica, envia, comenta,
          anuncia ou compartilha no TrocaUni e declara possuir os direitos e
          autorizações necessários para sua utilização.
        </p>

        <p className="mt-3">
          Em anúncios ou divulgações, o usuário é responsável pela veracidade
          das informações, imagens, condições, disponibilidade, preço combinado
          e demais detalhes apresentados a outros usuários.
        </p>

        <p className="mt-3">
          O usuário mantém a titularidade sobre seu conteúdo. Ao publicá-lo,
          concede ao TrocaUni uma autorização limitada, não exclusiva e
          necessária para armazenar, processar, reproduzir e exibir esse
          conteúdo dentro da plataforma, conforme o funcionamento normal do
          serviço.
        </p>

        <p className="mt-3">
          Essa autorização permanece enquanto o conteúdo estiver disponível na
          plataforma ou pelo período necessário para processamento de
          solicitações, segurança, auditoria, cumprimento legal e proteção de
          direitos.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text)]">
          6. Negociações entre usuários
        </h2>

        <p className="mt-3">
          Quando o TrocaUni permitir anúncios, ofertas, trocas, vendas,
          contratações, moradia ou outras negociações, a plataforma atuará como
          meio de conexão entre os usuários.
        </p>

        <p className="mt-3">
          Cada usuário é responsável por avaliar a outra parte, verificar
          informações, negociar condições e adotar cuidados de segurança. O
          TrocaUni não processa pagamentos, não participa da entrega e não
          garante qualidade, estado, autenticidade, disponibilidade, entrega ou
          pagamento em negociações entre usuários.
        </p>

        <p className="mt-3">
          As negociações são feitas diretamente entre usuários. Itens ilegais,
          proibidos ou falsificados não podem ser anunciados.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text)]">
          7. Moderação, denúncias e penalidades
        </h2>

        <p className="mt-3">
          O TrocaUni poderá utilizar processos de moderação manual, automática
          ou assistida por tecnologia para proteger usuários, preservar a
          segurança da comunidade e aplicar estes Termos.
        </p>

        <p className="mt-3">
          Usuários poderão denunciar conteúdos, perfis, mensagens ou
          comportamentos que possam violar estes Termos ou as Regras da
          Comunidade.
        </p>

        <p className="mt-3">
          Após análise, o TrocaUni poderá arquivar a denúncia, solicitar
          informações adicionais, marcar o caso como revisado, reduzir a
          visibilidade, ocultar ou remover conteúdo, enviar advertência, limitar
          funcionalidades, suspender ou encerrar uma conta e registrar ações
          administrativas para fins de segurança e auditoria.
        </p>

        <p className="mt-3">
          As medidas poderão considerar a natureza, a gravidade, a recorrência,
          os riscos envolvidos e o histórico da conta.
        </p>

        <p className="mt-3">
          O TrocaUni pode moderar, remover ou restringir conteúdo quando houver
          indícios de violação destes Termos, das Regras da Comunidade, da
          legislação ou da segurança da plataforma.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text)]">
          8. Eventos, comunicados e notificações
        </h2>

        <p className="mt-3">
          O TrocaUni poderá enviar notificações relacionadas à conta, segurança,
          publicações, curtidas, comentários, respostas, mensagens, denúncias,
          moderação, eventos, comunicados administrativos e outras
          funcionalidades da plataforma.
        </p>

        <p className="mt-3">
          Algumas notificações poderão ser configuradas pelo usuário. Avisos
          essenciais relacionados à segurança, à conta, à moderação ou a
          obrigações legais poderão ser enviados independentemente das
          preferências de comunicação promocional.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text)]">
          9. Privacidade e dados pessoais
        </h2>

        <p className="mt-3">
          O tratamento de dados pessoais é explicado na Política de
          Privacidade. A utilização da plataforma poderá envolver dados de
          cadastro, perfil, universidade, curso, publicações, comentários,
          mensagens, denúncias, notificações, identificadores técnicos,
          preferências e registros de segurança e uso.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text)]">
          10. Segurança da conta e da comunidade
        </h2>

        <p className="mt-3">
          O TrocaUni poderá aplicar mecanismos de autenticação, controle de
          acesso, validações, registros administrativos, análise de risco,
          moderação e restrições para contas bloqueadas, suspensas, banidas,
          comprometidas ou inativas.
        </p>

        <p className="mt-3">
          Nenhum sistema é completamente imune a incidentes. O usuário também
          deve adotar medidas de proteção, como manter seus dispositivos seguros
          e não compartilhar códigos ou credenciais de acesso.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text)]">
          11. Disponibilidade do serviço
        </h2>

        <p className="mt-3">
          O TrocaUni buscará manter a plataforma disponível, segura e funcional,
          mas não garante funcionamento ininterrupto, livre de falhas ou
          permanentemente disponível.
        </p>

        <p className="mt-3">
          O serviço poderá ficar temporariamente indisponível por manutenção,
          atualização, correção de falhas, incidentes, indisponibilidade de
          fornecedores, caso fortuito, força maior ou outras situações
          operacionais.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text)]">
          12. Alterações nos Termos
        </h2>

        <p className="mt-3">
          Estes Termos poderão ser atualizados para refletir mudanças no
          produto, na legislação, nas práticas de segurança, nas regras da
          comunidade ou no funcionamento da plataforma.
        </p>

        <p className="mt-3">
          A versão vigente será identificada pela data e pelo código de versão.
          Quando uma alteração relevante exigir novo aceite, o usuário poderá
          ser solicitado a revisar e aceitar a nova versão.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text)]">
          13. Restrição ou encerramento da conta
        </h2>

        <p className="mt-3">
          O usuário poderá solicitar a exclusão de sua conta pelos recursos
          disponibilizados no aplicativo ou pelos canais oficiais.
        </p>

        <p className="mt-3">
          Suspensão, banimento e exclusão voluntária são situações diferentes. A
          suspensão ou o banimento decorrem de medida de segurança ou moderação.
          A exclusão voluntária é solicitada pelo próprio usuário.
        </p>

        <p className="mt-3">
          O TrocaUni poderá limitar, suspender ou encerrar contas que violem
          estes Termos, as Regras da Comunidade, direitos de terceiros, a
          legislação aplicável ou a segurança da plataforma.
        </p>

        <p className="mt-3">
          Determinados registros poderão ser preservados quando necessários ao
          cumprimento de obrigação legal, prevenção de fraude, segurança,
          auditoria, exercício regular de direitos ou resolução de disputas.
        </p>

        <p className="mt-3">
          Após a exclusão voluntária, alguns conteúdos podem permanecer
          anonimizados quando necessário para preservar a integridade de
          conversas, tópicos, respostas, mensagens ou outras interações da
          comunidade.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text)]">
          14. Legislação aplicável
        </h2>

        <p className="mt-3">
          Estes Termos serão interpretados de acordo com a legislação
          brasileira. Nenhuma disposição deste documento deverá limitar
          direitos assegurados por normas aplicáveis ao usuário.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text)]">
          15. Contato
        </h2>

        <p className="mt-3">
          Dúvidas, solicitações ou questões relacionadas ao uso da plataforma,
          segurança, moderação ou privacidade podem ser enviadas para{" "}
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
