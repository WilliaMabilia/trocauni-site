import { brand } from "@/config/brand";

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

export function FinalCtaSection() {
  return (
    <section
      id="lancamento"
      aria-labelledby="final-cta-title"
      className="px-4 pb-12 pt-14 sm:px-6 sm:pb-16 sm:pt-18 lg:px-8 lg:pb-16 lg:pt-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="relative isolate overflow-hidden rounded-[2rem] border border-white/80 bg-[linear-gradient(135deg,rgba(239,244,255,0.98),rgba(255,244,249,0.98))] px-5 py-11 shadow-[0_22px_65px_rgba(91,74,180,0.14)] sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-[#7c5cff]/10 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-[#ff6a75]/10 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/50 blur-3xl"
          />

          <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#6c4cff] sm:text-sm">
              Lançamento oficial em breve
            </p>

            <h2
              id="final-cta-title"
              className="mt-4 max-w-3xl text-balance text-3xl font-extrabold tracking-[-0.04em] text-[#17132f] sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]"
            >
              O TrocaUni está chegando ao iOS e Android.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#747087] sm:text-lg sm:leading-8">
              Acompanhe o Instagram oficial para receber novidades e saber
              quando o aplicativo estiver disponível.
            </p>

            <a
              href={brand.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Acompanhar o lançamento no Instagram do TrocaUni; abre em nova aba"
              className="mobile-button-motion mt-7 inline-flex min-h-12 w-full max-w-sm items-center justify-center gap-2 rounded-full bg-[linear-gradient(90deg,#695cff_0%,#d94bc8_52%,#ff6a3d_100%)] px-7 py-3.5 font-semibold text-white shadow-[0_14px_34px_rgba(204,74,177,0.28)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(204,74,177,0.34)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#7c5cff]/30 active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none"
            >
              <InstagramIcon />
              <span>Acompanhar lançamento</span>
            </a>

            <p className="mt-5 max-w-xl text-sm leading-6 text-[#747087]">
              Os links oficiais serão adicionados após o lançamento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
