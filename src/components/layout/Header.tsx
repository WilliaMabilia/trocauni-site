import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { navigation } from "@/data/navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/70 shadow-[0_8px_30px_rgba(52,40,110,0.05)] backdrop-blur-xl">
      <Container className="flex min-h-[5.5rem] items-center justify-between gap-6">
        <Logo size="md" />

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-7 md:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative rounded-lg px-1 py-2 text-sm font-semibold text-[var(--color-text-muted)] outline-none transition hover:text-[var(--color-primary)] focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-4"
            >
              {item.label}

              <span
                aria-hidden="true"
                className="absolute inset-x-1 bottom-0 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-[#5d6cff] via-[#a64bea] to-[#ff6a64] transition-transform duration-300 group-hover:scale-x-100"
              />
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
