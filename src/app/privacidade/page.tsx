import type { Metadata } from "next";

import { InstitutionalPage } from "@/components/layout/InstitutionalPage";
import { brand } from "@/config/brand";

export const metadata: Metadata = {
  title: `Política de Privacidade | ${brand.name}`,
  description:
    "Saiba como o TrocaUni coleta, utiliza, armazena, protege e compartilha dados pessoais.",
};

export default function PrivacyPage() {
  return (
    <InstitutionalPage
      eyebrow="Proteção de dados"
      title="Política de Privacidade do TrocaUni"
      description="Esta Política explica como os dados pessoais são tratados durante o acesso e a utilização da plataforma TrocaUni."
    >
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background-soft)] p-5">
        <p className="font-semibold text-[var(--color-text)]">
          Última atualização: 2 de maio de 2026
        </p>
        <p className="mt-1 text-sm">Versão: 2026-05-02-v1</p>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text)]">
          Introdução
        </h2>

        <p className="mt-3">
          Esta Política de Privacidade explica como o TrocaUni coleta, utiliza,
          armazena, protege, compartilha e elimina dados pessoais dos usuários.
        </p>

        <p className="mt-3">
          Ao utilizar a plataforma, o usuário reconhece que seus dados serão
          tratados conforme esta Política e de acordo com a legislação
          aplicável.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text)]">
          1. Dados que podemos coletar
        </h2>

        <p className="mt-3">
          O TrocaUni poderá tratar as seguintes categorias de dados:
        </p>

        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            <strong>Dados de cadastro:</strong> nome, e-mail, foto de perfil,
            identificador da conta e informações de autenticação;
          </li>
          <li>
            <strong>Dados acadêmicos e de perfil:</strong> universidade, campus,
            curso, semestre, estado, cidade, gênero quando informado e outras
            informações adicionadas voluntariamente;
          </li>
          <li>
            <strong>Conteúdo e interações:</strong> publicações, comentários,
            respostas, curtidas, fóruns, anúncios, eventos e demais conteúdos
            enviados à plataforma;
          </li>
          <li>
            <strong>Comunicações:</strong> mensagens, solicitações de suporte e
            comunicações enviadas pelos canais oficiais;
          </li>
          <li>
            <strong>Segurança e moderação:</strong> denúncias, bloqueios,
            restrições, decisões de moderação e registros administrativos;
          </li>
          <li>
            <strong>Preferências:</strong> configurações de conta, privacidade,
            notificações e personalização;
          </li>
          <li>
            <strong>Dados técnicos:</strong> identificadores do usuário e do
            dispositivo, tokens de notificação, datas de acesso, registros de
            falha, endereço IP quando processado pela infraestrutura e
            informações necessárias para segurança e funcionamento;
          </li>
          <li>
            <strong>Dados de uso:</strong> ações realizadas, recursos acessados,
            datas, horários e registros necessários para análise de desempenho,
            prevenção de abuso e auditoria.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text)]">
          2. Como utilizamos os dados
        </h2>

        <p className="mt-3">Os dados poderão ser utilizados para:</p>

        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>criar, autenticar, manter e proteger a conta do usuário;</li>
          <li>exibir o perfil e as informações escolhidas pelo usuário;</li>
          <li>
            permitir publicações, comentários, fóruns, mensagens, anúncios,
            eventos e demais funcionalidades;
          </li>
          <li>enviar notificações e comunicações relacionadas ao serviço;</li>
          <li>processar denúncias e aplicar medidas de moderação;</li>
          <li>prevenir fraude, spam, abuso e acesso não autorizado;</li>
          <li>
            diagnosticar erros e melhorar segurança, estabilidade, desempenho e
            experiência;
          </li>
          <li>prestar atendimento e responder solicitações;</li>
          <li>cumprir obrigações legais ou regulatórias;</li>
          <li>
            resguardar direitos do TrocaUni, dos usuários e de terceiros.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text)]">
          3. Bases legais
        </h2>

        <p className="mt-3">
          Conforme a finalidade e o contexto, o tratamento poderá ocorrer com
          base na execução de procedimentos relacionados ao serviço solicitado
          pelo usuário, cumprimento de obrigação legal ou regulatória,
          exercício regular de direitos, legítimo interesse, proteção da vida,
          prevenção de fraude e segurança, consentimento ou outras hipóteses
          previstas na legislação.
        </p>

        <p className="mt-3">
          Quando o tratamento depender de consentimento, o usuário poderá
          revogá-lo pelos meios disponibilizados, sem afetar tratamentos
          realizados anteriormente de forma válida.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text)]">
          4. Perfil e conteúdo visível
        </h2>

        <p className="mt-3">
          Algumas informações poderão ser exibidas para outros usuários de
          acordo com o funcionamento da plataforma e com as configurações
          disponíveis, incluindo nome, avatar, universidade, curso, publicações,
          comentários, anúncios e outras interações públicas.
        </p>

        <p className="mt-3">
          O usuário não deve publicar dados pessoais sensíveis, documentos,
          credenciais ou informações privadas desnecessárias em áreas públicas.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text)]">
          5. Moderação e segurança
        </h2>

        <p className="mt-3">
          Dados relacionados a publicações, comentários, fóruns, mensagens,
          denúncias, notificações e ações administrativas poderão ser analisados
          para investigar violações, prevenir abusos, proteger usuários e
          aplicar medidas de segurança ou moderação.
        </p>

        <p className="mt-3">
          A análise poderá envolver processos automáticos, assistidos por
          tecnologia ou realizados por pessoas autorizadas.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text)]">
          6. Compartilhamento de dados
        </h2>

        <p className="mt-3">
          O TrocaUni não vende dados pessoais dos usuários.
        </p>

        <p className="mt-3">
          Os dados poderão ser compartilhados ou disponibilizados:
        </p>

        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>quando necessário para a operação técnica da plataforma;</li>
          <li>
            com fornecedores de infraestrutura, autenticação, armazenamento,
            processamento, comunicação e segurança;
          </li>
          <li>
            para cumprimento de ordem judicial, obrigação legal ou solicitação
            válida de autoridade competente;
          </li>
          <li>
            para prevenção de fraude, investigação de incidentes e proteção de
            direitos;
          </li>
          <li>
            quando o próprio usuário tornar uma informação visível por meio das
            funcionalidades da plataforma;
          </li>
          <li>
            em reorganizações societárias, observadas as proteções legais
            aplicáveis.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text)]">
          7. Serviços de terceiros
        </h2>

        <p className="mt-3">
          O TrocaUni utiliza serviços de infraestrutura tecnológica, incluindo
          recursos do Google Firebase, como Firebase Authentication, Cloud
          Firestore, Cloud Storage, Cloud Functions, Firebase Cloud Messaging e
          outros serviços necessários para autenticação, banco de dados,
          armazenamento, processamento, notificações e segurança.
        </p>

        <p className="mt-3">
          Esses fornecedores poderão processar dados de acordo com suas
          atribuições técnicas, contratos aplicáveis, configurações do serviço e
          respectivas políticas de privacidade.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text)]">
          8. Transferência e processamento internacional
        </h2>

        <p className="mt-3">
          Alguns fornecedores de tecnologia poderão armazenar ou processar dados
          em infraestrutura localizada fora do Brasil.
        </p>

        <p className="mt-3">
          Quando aplicável, o TrocaUni adotará medidas compatíveis com a
          legislação para proteger os dados em transferências internacionais.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text)]">
          9. Armazenamento e retenção
        </h2>

        <p className="mt-3">
          Os dados serão mantidos pelo período necessário para fornecer o
          serviço, cumprir as finalidades descritas nesta Política, proteger a
          comunidade, resolver disputas, atender obrigações legais e exercer
          direitos.
        </p>

        <p className="mt-3">
          Os períodos de retenção poderão variar conforme a categoria do dado,
          a situação da conta, a existência de denúncias, investigações,
          obrigações legais, prevenção de fraude, auditoria e necessidade de
          segurança.
        </p>

        <p className="mt-3">
          Após o encerramento da finalidade aplicável, os dados poderão ser
          eliminados, anonimizados ou preservados quando houver fundamento legal
          para sua manutenção.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text)]">
          10. Segurança
        </h2>

        <p className="mt-3">
          O TrocaUni adota medidas técnicas e administrativas destinadas a
          reduzir riscos de acesso indevido, alteração não autorizada, perda,
          destruição ou uso inadequado de dados.
        </p>

        <p className="mt-3">
          Essas medidas poderão incluir autenticação, regras de acesso,
          validações, segregação de permissões, registros de segurança,
          monitoramento e restrição de operações administrativas.
        </p>

        <p className="mt-3">
          Apesar dessas medidas, nenhum serviço digital pode garantir segurança
          absoluta. O usuário deve proteger seus dispositivos e credenciais.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text)]">
          11. Direitos do usuário
        </h2>

        <p className="mt-3">
          Nos limites e condições previstos na legislação, o usuário poderá
          solicitar:
        </p>

        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>confirmação da existência de tratamento;</li>
          <li>acesso aos dados pessoais;</li>
          <li>correção de dados incompletos, inexatos ou desatualizados;</li>
          <li>
            anonimização, bloqueio ou eliminação de dados desnecessários,
            excessivos ou tratados em desconformidade;
          </li>
          <li>portabilidade, quando aplicável e regulamentada;</li>
          <li>
            informações sobre entidades com as quais os dados foram
            compartilhados;
          </li>
          <li>revogação do consentimento, quando essa for a base legal;</li>
          <li>
            eliminação de dados tratados com consentimento, ressalvadas as
            hipóteses legais de conservação;
          </li>
          <li>revisão de decisões automatizadas, quando aplicável;</li>
          <li>oposição a tratamento realizado em desconformidade com a lei.</li>
        </ul>

        <p className="mt-3">
          Para proteger o titular, o TrocaUni poderá solicitar informações
          necessárias para confirmar sua identidade antes de atender uma
          solicitação.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text)]">
          12. Exclusão da conta
        </h2>

        <p className="mt-3">
          O usuário poderá solicitar a exclusão da conta pelos recursos
          disponibilizados no aplicativo ou pelos canais oficiais do TrocaUni.
        </p>

        <p className="mt-3">
          A exclusão poderá remover ou anonimizar dados relacionados ao perfil e
          ao uso da plataforma. Alguns registros poderão ser mantidos quando
          necessários para segurança, auditoria, prevenção de fraude,
          cumprimento de obrigação legal, exercício regular de direitos ou
          resolução de disputas.
        </p>

        <p className="mt-3">
          Conteúdos compartilhados com terceiros ou integrados a conversas e
          interações coletivas poderão não desaparecer imediatamente de todas as
          visualizações, especialmente quando sua preservação for necessária
          para manter o contexto, a segurança ou direitos de outros usuários.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text)]">
          13. Alterações nesta Política
        </h2>

        <p className="mt-3">
          Esta Política poderá ser atualizada para refletir mudanças no
          aplicativo, nos serviços utilizados, nas práticas de tratamento de
          dados ou na legislação.
        </p>

        <p className="mt-3">
          A versão vigente será identificada pela data e pelo código de versão.
          Quando houver alteração relevante, o usuário poderá ser notificado e,
          quando necessário, solicitado a aceitar uma nova versão.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text)]">
          14. Contato e solicitações de privacidade
        </h2>

        <p className="mt-3">
          Dúvidas e solicitações relacionadas a dados pessoais e privacidade
          podem ser enviadas para{" "}
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
