import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { brand } from "@/config/brand";

export function FinalCtaSection() {
  return (
    <section
      id="lista-de-espera"
      className="relative scroll-mt-24 overflow-hidden py-12 sm:py-16 lg:py-20"
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

          <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem] shadow-[0_30px_80px_rgba(66,48,150,0.16)] sm:rounded-[2rem] lg:rounded-[2.4rem]">
            <Image
              src="/images/trocauni-banner-final.png"
              alt="TrocaUni, seu campus em um aplicativo"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1280px"
              className="object-cover"
            />

            <a
              href={brand.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Seguir o TrocaUni no Instagram"
              className="
                group
                absolute
                left-[69%]
                top-[63%]
                z-10
                inline-flex
                -translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
                gap-1.5
                whitespace-nowrap
                rounded-full
                bg-gradient-to-r
                from-[#665cff]
                via-[#b94bdd]
                to-[#ff6550]
                px-3
                py-2
                text-[10px]
                font-bold
                text-white
                shadow-[0_8px_20px_rgba(102,76,220,0.30)]
                transition
                duration-300
                hover:scale-[1.04]
                hover:shadow-[0_12px_30px_rgba(102,76,220,0.42)]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-white
                sm:left-[69%]
                sm:top-[62%]
                sm:gap-2
                sm:px-4
                sm:py-2.5
                sm:text-xs
                md:px-5
                md:py-3
                md:text-sm
                lg:left-[69%]
                lg:top-[62%]
                lg:px-6
                lg:py-3.5
                lg:text-base
              "
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4 md:h-5 md:w-5"
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

              <span className="sm:hidden">Instagram</span>

              <span className="hidden sm:inline">
                Seguir no Instagram
              </span>

              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="hidden h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 sm:block md:h-4 md:w-4"
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
