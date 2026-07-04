import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { brand } from "@/config/brand";

export function FinalCtaSection() {
  return (
    <section
      id="lista-de-espera"
      className="relative scroll-mt-24 overflow-hidden py-14 sm:py-18 lg:py-22"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-10rem] top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#397cff]/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10rem] top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#ff5f91]/10 blur-[120px]"
      />

      <Container>
        <div className="relative mx-auto max-w-7xl">
          <div
            aria-hidden="true"
            className="absolute inset-x-16 bottom-[-2rem] h-24 rounded-[50%] bg-[#7255ee]/18 blur-3xl"
          />

          <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] shadow-[0_35px_100px_rgba(66,48,150,0.18)] sm:rounded-[2.4rem]">
            <Image
              src="/images/trocauni-banner-final.png"
              alt="TrocaUni, seu campus em um aplicativo"
              fill
              sizes="(max-width: 768px) 100vw, 1280px"
              className="object-cover"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#100b2c]/5 via-transparent to-white/5"
            />

            <a
              href={brand.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Seguir o TrocaUni no Instagram"
              className="group absolute left-[65%] top-[62%] z-10 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-gradient-to-r from-[#5f5cff] via-[#b649e2] to-[#ff654b] px-5 py-3 text-sm font-bold text-white shadow-[0_14px_35px_rgba(115,73,225,0.32)] transition duration-300 hover:-translate-y-[55%] hover:scale-[1.03] hover:shadow-[0_18px_45px_rgba(115,73,225,0.42)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/80 sm:left-[68%] sm:top-[63%] sm:px-6 sm:py-3.5 sm:text-base lg:left-[69%] lg:top-[62%]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="h-5 w-5 shrink-0"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="2"
                />

                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="2"
                />

                <circle
                  cx="17.4"
                  cy="6.7"
                  r="1.1"
                  fill="currentColor"
                />
              </svg>

              <span>Seguir no Instagram</span>

              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M8 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
