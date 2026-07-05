"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { brand } from "@/config/brand";
import { navigation } from "@/data/navigation";

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
      <rect width="18" height="18" x="3" y="3" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const linkClasses =
  "rounded-lg px-3 py-2 text-sm font-semibold text-[var(--color-text-muted)] outline-none transition hover:bg-white/80 hover:text-[var(--color-primary)] focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/90 shadow-[0_8px_30px_rgba(52,40,110,0.05)] backdrop-blur-xl">
      <Container className="flex min-h-[4.75rem] items-center justify-between gap-4 py-3 lg:min-h-[5.5rem] lg:py-0">
        <Logo size="md" />

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-1 lg:flex"
        >
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className={linkClasses}>
              {item.label}
            </Link>
          ))}

          <Link
            href={brand.instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Acompanhar lançamento no Instagram (abre em nova aba)"
            className="ml-3 inline-flex min-h-11 items-center justify-center gap-2 rounded-[var(--radius-button)] px-5 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-card)] outline-none transition hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 [background:var(--gradient-primary)]"
          >
            <InstagramIcon />
            Acompanhar lançamento
          </Link>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex min-h-11 min-w-11 touch-manipulation items-center justify-center rounded-xl border border-[var(--color-border)] bg-white text-[var(--color-text)] outline-none transition hover:border-[var(--color-primary)] focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 lg:hidden"
        >
          <span aria-hidden="true" className="relative block h-5 w-6">
            <span
              className={`absolute left-0 top-0.5 h-0.5 w-6 rounded bg-current transition ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2.5 h-0.5 w-6 rounded bg-current transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[1.125rem] h-0.5 w-6 rounded bg-current transition ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </Container>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full z-[60] h-[calc(100dvh-4.75rem)] overflow-y-auto overscroll-contain border-t border-white/70 bg-white px-4 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] shadow-[0_24px_60px_rgba(38,30,82,0.14)] sm:px-6 sm:py-6 lg:hidden"
        >
          <nav
            aria-label="Navegação principal em dispositivos móveis"
            className="mx-auto flex max-w-lg flex-col gap-2"
          >
            {navigation.map((item, index) => (
              <Link
                ref={index === 0 ? firstLinkRef : undefined}
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="flex min-h-12 touch-manipulation items-center rounded-xl px-4 text-base font-semibold text-[var(--color-text)] outline-none transition hover:bg-[var(--color-background-soft)] hover:text-[var(--color-primary)] focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href={brand.instagramUrl}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              aria-label="Acompanhar lançamento no Instagram (abre em nova aba)"
              className="mt-3 inline-flex min-h-12 touch-manipulation items-center justify-center gap-2 rounded-[var(--radius-button)] px-5 py-3 text-base font-semibold text-white outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 [background:var(--gradient-primary)]"
            >
              <InstagramIcon />
              Acompanhar lançamento
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
