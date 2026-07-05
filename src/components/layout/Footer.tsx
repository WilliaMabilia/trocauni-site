"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { brand } from "@/config/brand";
import { footerLinks } from "@/data/footerLinks";

export function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/70 bg-white/75 py-8 sm:py-10 backdrop-blur-xl">
      <Container className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <Logo size="md" />
          <p className="mt-4 max-w-xl leading-7 text-[var(--color-text-muted)]">
            TrocaUni — conectando informação, colaboração e conversas na vida universitária.
          </p>
        </div>

        <nav aria-label="Links institucionais" className="grid grid-cols-2 gap-x-4 gap-y-2 sm:flex sm:flex-wrap sm:gap-x-5 sm:gap-y-3 lg:justify-end">
          {footerLinks.map((item) => {
            const isCurrent = pathname === item.href || pathname === `${item.href}/`;
            return (
              <Link
                key={item.href}
                href={`${item.href}/`}
                aria-current={isCurrent ? "page" : undefined}
                className={`inline-flex min-h-11 touch-manipulation items-center rounded-md text-sm font-semibold outline-none transition hover:text-[var(--color-primary)] focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 ${isCurrent ? "text-[var(--color-primary)] underline underline-offset-4" : "text-[var(--color-text-muted)]"}`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href={brand.instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram do TrocaUni (abre em nova aba)"
            className="inline-flex min-h-11 touch-manipulation items-center rounded-md text-sm font-semibold text-[var(--color-text-muted)] outline-none transition hover:text-[var(--color-primary)] focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2"
          >
            Instagram ↗
          </Link>
        </nav>

        <p className="text-sm text-[var(--color-text-muted)] lg:col-span-2 lg:text-right">
          © {currentYear} {brand.name}. Todos os direitos reservados.
        </p>
      </Container>
    </footer>
  );
}
