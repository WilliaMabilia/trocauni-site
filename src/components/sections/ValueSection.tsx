const appFeatures = [
  {
    title: "Feed",
    label: "Comunidade em movimento",
    description:
      "Acompanhe novidades, avisos, experiências e publicações feitas por estudantes da sua universidade.",
    details:
      "Compartilhe informações importantes e divulgue materiais acadêmicos que não utiliza mais, como livros, jalecos, calculadoras e apostilas.",
    benefits: ["Publicações", "Curtidas", "Comentários"],
    accent: "from-[#3278f6] to-[#7657ff]",
    glow: "bg-[#4f7cff]/15",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="h-7 w-7"
      >
        <path
          d="M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v7A2.5 2.5 0 0 1 16.5 16H11l-5 3.5V16.1A2.5 2.5 0 0 1 5 14V6.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M8 8h8M8 11.5h5.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Fórum",
    label: "Conhecimento compartilhado",
    description:
      "Crie tópicos, faça perguntas e participe de discussões organizadas sobre a vida acadêmica.",
    details:
      "Encontre respostas sobre disciplinas, cursos, universidade e outros assuntos relevantes, com a colaboração de estudantes da comunidade.",
    benefits: ["Tópicos", "Perguntas", "Respostas"],
    accent: "from-[#9948ee] to-[#df43ba]",
    glow: "bg-[#b24ee8]/15",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="h-7 w-7"
      >
        <path
          d="M4.5 5.75A1.75 1.75 0 0 1 6.25 4h11.5a1.75 1.75 0 0 1 1.75 1.75v7.5A1.75 1.75 0 0 1 17.75 15H11l-4.5 3.5V15h-.25a1.75 1.75 0 0 1-1.75-1.75v-7.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M8 8h8M8 11h6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Achados e Perdidos",
    label: "Ajuda para encontrar",
    description:
      "Avise que encontrou ou perdeu um objeto e alcance rapidamente outros estudantes da universidade.",
    details:
      "Adicione imagem, descrição e informações relevantes para facilitar a identificação e a devolução do item ao responsável.",
    benefits: ["Fotos", "Descrição", "Localização"],
    accent: "from-[#5668a5] to-[#76506f]",
    glow: "bg-[#6571a5]/15",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="h-7 w-7"
      >
        <circle
          cx="10.5"
          cy="10.5"
          r="5.5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="m15 15 4 4M10.5 8v3.25M10.5 13.7v.05"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Chat",
    label: "Conversas mais próximas",
    description:
      "Converse de forma privada com outros estudantes e continue interações iniciadas em qualquer área do app.",
    details:
      "Combine a entrega de materiais, organize a devolução de objetos, esclareça dúvidas e crie novas conexões com segurança.",
    benefits: ["Mensagens", "Conversas", "Conexões"],
    accent: "from-[#4d5b73] to-[#77618d]",
    glow: "bg-[#5d6884]/15",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="h-7 w-7"
      >
        <path
          d="M4.5 6.25A2.25 2.25 0 0 1 6.75 4h10.5a2.25 2.25 0 0 1 2.25 2.25v7.5A2.25 2.25 0 0 1 17.25 16H10l-5.5 4V6.25Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M8 9.5h8M8 12.5h5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
] as const;

const appFlow = [
  {
    name: "Feed",
    description: "Descubra e compartilhe",
    accent: "from-[#3278f6] to-[#7657ff]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <path
          d="M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v7A2.5 2.5 0 0 1 16.5 16H11l-5 3.5V16.1A2.5 2.5 0 0 1 5 14V6.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Fórum",
    description: "Pergunte e colabore",
    accent: "from-[#9948ee] to-[#df43ba]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <path
          d="M4.5 5.75A1.75 1.75 0 0 1 6.25 4h11.5a1.75 1.75 0 0 1 1.75 1.75v7.5A1.75 1.75 0 0 1 17.75 15H11l-4.5 3.5V15h-.25a1.75 1.75 0 0 1-1.75-1.75v-7.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Achados",
    description: "Encontre e ajude",
    accent: "from-[#5668a5] to-[#76506f]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <circle
          cx="10.5"
          cy="10.5"
          r="5.5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="m15 15 4 4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Chat",
    description: "Converse e resolva",
    accent: "from-[#4d5b73] to-[#77618d]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <path
          d="M4.5 6.25A2.25 2.25 0 0 1 6.75 4h10.5a2.25 2.25 0 0 1 2.25 2.25v7.5A2.25 2.25 0 0 1 17.25 16H10l-5.5 4V6.25Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
] as const;

export function ValueSection() {
  return (
    <section
      id="por-que"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-10rem] top-24 h-80 w-80 rounded-full bg-[#6476ff]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-8rem] top-32 h-96 w-96 rounded-full bg-[#ec4899]/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#dedcff] bg-gradient-to-br from-[#f4f5ff] via-white to-[#fff3f7] px-5 py-12 shadow-[0_30px_90px_rgba(76,60,155,0.10)] sm:px-10 sm:py-16 lg:px-14 lg:py-20">
          <div
            aria-hidden="true"
            className="absolute left-[-6rem] top-[-5rem] h-72 w-72 rounded-full bg-[#6476ff]/10 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute right-[-5rem] top-[-4rem] h-72 w-72 rounded-full bg-[#ff5da8]/10 blur-3xl"
          />

          <div className="relative mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#7057ff]">
              O app para a vida universitária
            </p>

            <h2 className="mt-4 text-balance text-4xl font-black tracking-[-0.045em] text-[var(--color-text)] sm:text-5xl lg:text-6xl">
              Sua comunidade universitária em um só lugar
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-pretty text-lg leading-8 text-[var(--color-text-muted)]">
              O TrocaUni conecta estudantes por meio de quatro áreas que
              trabalham juntas para tornar a rotina acadêmica mais simples,
              colaborativa e próxima.
            </p>

            <div className="mx-auto mt-7 flex max-w-2xl flex-wrap justify-center gap-2.5">
              {["Feed", "Fórum", "Achados e Perdidos", "Chat"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#ded8ff] bg-white/80 px-4 py-2 text-sm font-bold text-[var(--color-text)] shadow-sm backdrop-blur"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mt-12 grid gap-5 lg:grid-cols-2">
            {appFeatures.map((feature, index) => (
              <article
                key={feature.title}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white bg-white/90 p-6 shadow-[0_20px_55px_rgba(55,42,120,0.09)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(55,42,120,0.14)] sm:p-7"
              >
                <div
                  aria-hidden="true"
                  className={`absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl transition duration-300 group-hover:scale-125 ${feature.glow}`}
                />

                <div className="relative">
                  <div className="flex items-start justify-between gap-5">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg ${feature.accent}`}
                    >
                      {feature.icon}
                    </div>

                    <span className="text-5xl font-black leading-none text-[#17132c]/[0.05]">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="mt-6 text-xs font-bold uppercase tracking-[0.15em] text-[#735fe0]">
                    {feature.label}
                  </p>

                  <h3 className="mt-2 text-2xl font-black tracking-[-0.03em] text-[var(--color-text)]">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-base font-semibold leading-7 text-[var(--color-text)]/85">
                    {feature.description}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">
                    {feature.details}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2 border-t border-[var(--color-border)] pt-5">
                    {feature.benefits.map((benefit) => (
                      <span
                        key={benefit}
                        className="rounded-full bg-[var(--color-background-soft)] px-3 py-1.5 text-xs font-bold text-[var(--color-text-muted)]"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="relative mt-8 overflow-hidden rounded-[1.9rem] border border-white/90 bg-gradient-to-br from-white via-[#f8f7ff] to-[#fff4f8] px-6 py-8 shadow-[0_24px_70px_rgba(73,58,140,0.11)] sm:px-9 sm:py-10">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#7657ff]/12 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-[#ff5d9e]/10 blur-3xl"
            />

            <div className="relative">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#dcd6ff] bg-white/80 px-3 py-1.5 shadow-sm backdrop-blur">
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 rounded-full bg-gradient-to-r from-[#6f5cff] to-[#ff5f96]"
                  />

                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6d58e8]">
                    Tudo conectado
                  </p>
                </div>

                <h3 className="mt-5 text-3xl font-black tracking-[-0.04em] text-[var(--color-text)] sm:text-4xl">
                  Uma experiência contínua dentro do TrocaUni
                </h3>

                <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--color-text-muted)] sm:text-lg">
                  Descubra uma publicação no Feed, aprofunde uma dúvida no
                  Fórum, ajude alguém em Achados e Perdidos e continue a
                  conversa de forma privada pelo Chat.
                </p>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {appFlow.map((item, index) => (
                  <div
                    key={item.name}
                    className="group relative rounded-[1.4rem] border border-white bg-white/85 p-4 shadow-[0_14px_35px_rgba(73,58,140,0.09)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(73,58,140,0.13)]"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md ${item.accent}`}
                      >
                        {item.icon}
                      </div>

                      <div>
                        <p className="font-black text-[var(--color-text)]">
                          {item.name}
                        </p>

                        <p className="mt-0.5 text-xs font-medium text-[var(--color-text-muted)]">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {index < appFlow.length - 1 ? (
                      <span
                        aria-hidden="true"
                        className="absolute -right-2 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full border border-[#ded8ff] bg-white text-xs font-black text-[#7657ff] lg:flex"
                      >
                        ›
                      </span>
                    ) : null}
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-4 rounded-[1.4rem] border border-[#e3deff] bg-white/70 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-black text-[var(--color-text)]">
                    TrocaUni conecta cada parte da rotina universitária.
                  </p>

                  <p className="mt-1 text-sm leading-6 text-[var(--color-text-muted)]">
                    Informação, colaboração, ajuda e conversas dentro da mesma
                    comunidade.
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#3278f6]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#b34de2]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#6571a5]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#625a79]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
