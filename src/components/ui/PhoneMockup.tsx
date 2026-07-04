import Image from "next/image";

import { cn } from "@/lib/cn";

type PhoneMockupProps = {
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
  priority?: boolean;
};

export function PhoneMockup({
  className,
  imageSrc = "/images/trocauni-home-screen.jpg",
  imageAlt = "Tela inicial do aplicativo TrocaUni",
  priority = false,
}: PhoneMockupProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-[17.5rem] sm:w-[19.5rem] lg:w-[20.5rem]",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-6 bottom-[-2.5rem] h-16 rounded-[50%] bg-[#25194d]/30 blur-2xl"
      />

      <div
        aria-hidden="true"
        className="absolute -left-[0.2rem] top-[7.2rem] h-14 w-[0.22rem] rounded-l-full bg-gradient-to-b from-[#b9b7c8] via-[#625e70] to-[#c8c5d1] shadow-sm"
      />

      <div
        aria-hidden="true"
        className="absolute -left-[0.2rem] top-[11.2rem] h-20 w-[0.22rem] rounded-l-full bg-gradient-to-b from-[#b9b7c8] via-[#625e70] to-[#c8c5d1] shadow-sm"
      />

      <div
        aria-hidden="true"
        className="absolute -right-[0.2rem] top-[9rem] h-24 w-[0.22rem] rounded-r-full bg-gradient-to-b from-[#c8c5d1] via-[#625e70] to-[#b9b7c8] shadow-sm"
      />

      <div className="relative rounded-[3.4rem] bg-gradient-to-br from-[#d9d7e1] via-[#625e70] to-[#dedce5] p-[0.22rem] shadow-[0_45px_100px_rgba(35,20,77,0.28),0_20px_45px_rgba(99,75,180,0.22)]">
        <div className="rounded-[3.2rem] bg-[#111018] p-[0.48rem]">
          <div className="relative overflow-hidden rounded-[2.72rem] bg-black">
            <div className="relative aspect-[9/19.5] w-full overflow-hidden bg-[#f6f4ff]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority={priority}
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 312px, 328px"
                className="object-cover object-top"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/14 via-transparent to-transparent"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 w-[24%] bg-gradient-to-r from-white/8 to-transparent"
              />
            </div>

            <div
              aria-hidden="true"
              className="absolute left-1/2 top-3 z-20 h-[1.45rem] w-[5.7rem] -translate-x-1/2 rounded-full bg-[#09080d] shadow-[inset_0_-1px_1px_rgba(255,255,255,0.08)]"
            >
              <span className="absolute left-1/2 top-[0.32rem] h-[0.3rem] w-[1.7rem] -translate-x-1/2 rounded-full bg-[#302e37]" />

              <span className="absolute right-[0.62rem] top-[0.39rem] h-[0.58rem] w-[0.58rem] rounded-full bg-[#151926] ring-1 ring-[#343a55]">
                <span className="absolute inset-[0.13rem] rounded-full bg-[#253869]" />
              </span>
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex h-7 items-end justify-center pb-2"
            >
              <span className="h-1 w-24 rounded-full bg-black/35 backdrop-blur" />
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[0.45rem] rounded-[3rem] ring-1 ring-inset ring-white/15"
      />
    </div>
  );
}
