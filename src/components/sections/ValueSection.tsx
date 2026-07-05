import Link from "next/link";

import { Container } from "@/components/ui/Container";

const appFeatures = [
  {
    id: "feed",
    number: "01",
    eyebrow: "Comunidade em movimento",
    name: "Feed",
    paragraphs: [
      "O Feed reúne novidades, avisos, experiências e publicações feitas por estudantes da sua universidade.",
      "Você também pode publicar livros, jalecos, calculadoras, apostilas e outros materiais acadêmicos que não utiliza mais, facilitando compras, vendas e trocas dentro da comunidade.",
    ],
    indicators: ["Publicações", "Curtidas", "Comentários"],
    gradient: "from-[#4f7cff] to-[#7c5cfc]",
  },
  {
    id: "forum",
    number: "02",
    eyebrow: "Conhecimento compartilhado",
    name: "Fórum",
    paragraphs: [
      "Crie tópicos, faça perguntas e participe de discussões organizadas sobre cursos, disciplinas e situações da vida universitária.",
      "Compartilhe experiências, ajude outros estudantes e encontre respostas construídas pela própria comunidade.",
    ],
    indicators: ["Tópicos", "Perguntas", "Respostas"],
    gradient: "from-[#a64bea] to-[#ec4899]",
  },
  {
    id: "achados-e-perdidos",
    number: "03",
    eyebrow: "Ajuda para encontrar",
    name: "Achados e Perdidos",
    paragraphs: [
      "Perdeu ou encontrou um objeto no campus? Publique as informações para alcançar estudantes da mesma comunidade universitária.",
      "Adicione uma imagem, uma descrição e o local relacionado ao item para facilitar sua identificação e ajudar na devolução.",
    ],
    indicators: ["Fotos", "Descrição", "Localização"],
    gradient: "from-[#6474a8] to-[#7c5cfc]",
  },
  {
    id: "chat",
    number: "04",
    eyebrow: "Conversas mais próximas",
    name: "Chat",
    paragraphs: [
      "Converse diretamente com outros estudantes e continue interações iniciadas em qualquer área do TrocaUni.",
      "Combine detalhes de uma negociação, organize a devolução de um objeto ou esclareça uma dúvida sem precisar sair do aplicativo.",
    ],
    indicators: ["Mensagens", "Conversas", "Conexões"],
    gradient: "from-[#ff6a64] to-[#ff9b54]",
  },
] as const;

const safetyItems = [
  {
    title: "Denúncias",
    description: "Conteúdos, perfis, mensagens ou comportamentos inadequados podem ser denunciados para análise.",
  },
  {
    title: "Moderação",
    description: "Violações das regras podem resultar em análise, restrição, remoção de conteúdo ou outras medidas aplicáveis.",
  },
  {
    title: "Regras da Comunidade",
    description: "Orientações claras ajudam a manter as interações respeitosas, úteis e compatíveis com a finalidade da plataforma.",
  },
] as const;

const appFlow = [
  { name: "Feed", description: "Descubra e compartilhe" },
  { name: "Fórum", description: "Pergunte e colabore" },
  { name: "Achados e Perdidos", description: "Encontre e ajude" },
  { name: "Chat", description: "Converse e resolva" },
] as const;

export function ValueSection() {
  return (
    <>
      <section id="recursos" className="scroll-mt-24 py-14 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--color-primary)]">O app para a vida universitária</p>
            <h2 className="mt-4 text-balance text-3xl font-black leading-tight tracking-[-0.04em] text-[var(--color-text)] sm:text-5xl">
              Quatro recursos. Uma única comunidade universitária.
            </h2>
            <p className="mt-5 text-pretty text-base leading-7 text-[var(--color-text-muted)] sm:mt-6 sm:text-lg sm:leading-8">
              O Feed, o Fórum, Achados e Perdidos e o Chat trabalham juntos para facilitar trocas, dúvidas, ajuda e conversas durante a rotina acadêmica.
            </p>
          </div>

          <div className="mt-12 space-y-8 sm:mt-20 sm:space-y-16">
            {appFeatures.map((feature, index) => (
              <article
                id={feature.id}
                key={feature.id}
                className="scroll-mt-28 overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-white/80 bg-white/82 shadow-[var(--shadow-card)] backdrop-blur"
              >
                <div className="grid items-stretch lg:grid-cols-2">
                  <div className={`flex flex-col justify-center p-5 sm:p-10 lg:p-14 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--color-primary)]">{feature.eyebrow}</p>
                    <div className="mt-4 flex items-start gap-3 sm:items-baseline sm:gap-4">
                      <span className="text-sm font-black text-[var(--color-text-muted)]">{feature.number}</span>
                      <h3 className="min-w-0 text-3xl font-black leading-tight tracking-[-0.04em] text-[var(--color-text)] sm:text-5xl">{feature.name}</h3>
                    </div>
                    <div className="mt-6 space-y-4 text-base leading-7 text-[var(--color-text-muted)] sm:text-lg sm:leading-8">
                      {feature.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                  </div>

                  <div className={`relative flex min-h-[14rem] items-center justify-center overflow-hidden bg-[var(--color-background-soft)] p-5 sm:min-h-[20rem] sm:p-10 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div aria-hidden="true" className={`absolute h-64 w-64 rounded-full bg-gradient-to-br ${feature.gradient} opacity-20 blur-3xl`} />
                    <div className="relative grid w-full max-w-md gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                      {feature.indicators.map((indicator) => (
                        <div key={indicator} className="flex min-h-16 items-center justify-center rounded-[1.2rem] sm:min-h-28 sm:rounded-[1.4rem] border border-white/80 bg-white/90 px-4 py-5 text-center text-sm font-bold text-[var(--color-text)] shadow-sm">
                          {indicator}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="seguranca" className="scroll-mt-24 py-14 sm:py-24">
        <Container>
          <div className="overflow-hidden rounded-[1.5rem] border border-white/80 bg-white/85 p-5 sm:rounded-[2rem] sm:p-10 shadow-[var(--shadow-card)] backdrop-blur lg:p-14">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--color-primary)]">Comunidade com responsabilidade</p>
              <h2 className="mt-4 text-balance text-3xl font-black leading-tight tracking-[-0.04em] text-[var(--color-text)] sm:text-5xl">Recursos para uma convivência mais segura.</h2>
              <p className="mt-5 text-base leading-7 text-[var(--color-text-muted)] sm:mt-6 sm:text-lg sm:leading-8">
                O TrocaUni reúne regras de comunidade, ferramentas de denúncia e processos de moderação para ajudar a lidar com conteúdos e comportamentos inadequados.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {safetyItems.map((item, index) => (
                <article key={item.title} className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-background-soft)] p-6">
                  <span aria-hidden="true" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-black text-[var(--color-primary)] shadow-sm">{index + 1}</span>
                  <h3 className="mt-5 text-xl font-bold text-[var(--color-text)]">{item.title}</h3>
                  <p className="mt-3 leading-7 text-[var(--color-text-muted)]">{item.description}</p>
                </article>
              ))}
            </div>

            <Link href="/regras-da-comunidade/" className="mt-8 inline-flex min-h-12 w-full touch-manipulation items-center justify-center rounded-[var(--radius-button)] px-5 py-3 sm:w-auto font-semibold text-white outline-none transition hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 [background:var(--gradient-primary)]">
              Conhecer as Regras da Comunidade
            </Link>
          </div>
        </Container>
      </section>

      <section id="por-que" className="scroll-mt-24 py-14 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--color-primary)]">Tudo conectado</p>
            <h2 className="mt-4 text-balance text-3xl font-black leading-tight tracking-[-0.04em] text-[var(--color-text)] sm:text-5xl">Uma experiência contínua dentro do TrocaUni</h2>
            <p className="mt-5 text-base leading-7 text-[var(--color-text-muted)] sm:mt-6 sm:text-lg sm:leading-8">
              Uma interação pode começar no Feed, continuar em uma discussão no Fórum, ajudar na devolução de um objeto e terminar em uma conversa direta pelo Chat.
            </p>
          </div>

          <ol className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
            {appFlow.map((item, index) => (
              <li key={item.name} className="relative rounded-[1.5rem] border border-white/80 bg-white/85 p-6 shadow-[var(--shadow-card)]">
                <span className="text-sm font-black text-[var(--color-primary)]">0{index + 1}</span>
                <h3 className="mt-4 text-xl font-bold text-[var(--color-text)]">{item.name}</h3>
                <p className="mt-2 leading-6 text-[var(--color-text-muted)]">{item.description}</p>
              </li>
            ))}
          </ol>

          <p className="mx-auto mt-10 max-w-3xl text-center text-lg font-semibold leading-8 text-[var(--color-text)]">
            O TrocaUni conecta informação, colaboração, ajuda e conversas dentro da mesma comunidade universitária.
          </p>
        </Container>
      </section>
    </>
  );
}
