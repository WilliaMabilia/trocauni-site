import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { navigation } from "@/data/navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/85 shadow-[0_8px_30px_rgba(52,40,110,0.05)] backdrop-blur-xl">
      <Container className="flex flex-col gap-2 py-3 md:min-h-[5.5rem] md:flex-row md:items-center md:justify-between md:gap-6 md:py-0">
        <div className="flex w-full items-center justify-center md:w-auto md:justify-start">
          <Logo size="md" />
        </div>

        <nav
          aria-label="Navegação principal"
          className="grid w-full grid-cols-3 gap-1 border-t border-[#ece8f7] pt-2 md:flex md:w-auto md:items-center md:gap-7 md:border-0 md:pt-0"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative flex min-h-10 items-center justify-center rounded-xl px-2 py-2 text-center text-[11px] font-semibold leading-tight text-[var(--color-text-muted)] outline-none transition hover:bg-white/80 hover:text-[var(--color-primary)] focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 sm:text-xs md:min-h-0 md:justify-start md:rounded-lg md:px-1 md:text-sm"
            >
              <span>{item.label}</span>

              <span
                aria-hidden="true"
                className="absolute inset-x-2 bottom-0 h-0.5 origin-center scale-x-0 rounded-full bg-gradient-to-r from-[#5d6cff] via-[#a64bea] to-[#ff6a64] transition-transform duration-300 group-hover:scale-x-100 md:inset-x-1 md:origin-left"
              />
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
