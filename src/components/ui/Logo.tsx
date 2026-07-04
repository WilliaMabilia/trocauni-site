import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/cn";

type LogoProps = {
  href?: string;
  showIcon?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeMap = {
  sm: {
    wrapper: "gap-2",
    icon: 30,
    text: "text-xl",
  },
  md: {
    wrapper: "gap-3",
    icon: 44,
    text: "text-3xl",
  },
  lg: {
    wrapper: "gap-4",
    icon: 58,
    text: "text-4xl sm:text-5xl",
  },
} as const;

function LogoContent({
  showIcon = true,
  size = "md",
}: Pick<LogoProps, "showIcon" | "size">) {
  const config = sizeMap[size];

  return (
    <>
      {showIcon ? (
        <span className="relative shrink-0">
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-[30%] bg-gradient-to-br from-[#4f7cff]/25 via-[#b94ce1]/20 to-[#ff7048]/20 blur-md"
          />

          <Image
            src="/images/trocauni-icon.png"
            alt=""
            width={config.icon}
            height={config.icon}
            className="relative shrink-0 rounded-[28%] object-cover shadow-[0_8px_24px_rgba(79,69,180,0.18)]"
            priority
          />
        </span>
      ) : null}

      <span
        className={cn(
          "leading-none font-black tracking-[-0.055em]",
          config.text,
        )}
      >
        <span className="text-[#140f2d]">Troca</span>

        <span className="bg-clip-text text-transparent [background-image:var(--gradient-text)]">
          Uni
        </span>
      </span>
    </>
  );
}

export function Logo({
  href = "/",
  showIcon = true,
  size = "md",
  className,
}: LogoProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center rounded-xl outline-none transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-4",
        sizeMap[size].wrapper,
        className,
      )}
      aria-label="TrocaUni — página inicial"
    >
      <LogoContent showIcon={showIcon} size={size} />
    </Link>
  );
}
