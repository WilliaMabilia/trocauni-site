import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { brand } from "@/config/brand";
import { footerLinks } from "@/data/footerLinks";

export function Footer() {
  return (
    <footer className="relative border-t border-white/70 bg-white/55 backdrop-blur-xl">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b8afff]/60 to-transparent"
      />

      <Container className="flex flex-col gap-8 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Logo size="sm" />

          <p className="mt-3 max-w-md text-sm leading-6 text-[var(--color-text-muted)]">
            {brand.tagline}
          </p>
        </div>

        <nav
          aria-label="Links do rodapé"
          className="flex flex-wrap items-center gap-x-6 gap-y-3"
        >
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-[var(--color-text-muted)] transition hover:text-[var(--color-primary)]"
            >
              {item.label}
            </Link>
          ))}

          <a
            href={brand.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-[var(--color-text-muted)] transition hover:text-[var(--color-primary)]"
          >
            Instagram
          </a>
        </nav>
      </Container>

      <div className="border-t border-white/70">
        <Container className="py-5">
          <p className="text-xs text-[var(--color-text-muted)]">
            © {new Date().getFullYear()} {brand.name}. Todos os direitos
            reservados.
          </p>
        </Container>
      </div>
    </footer>
  );
}
