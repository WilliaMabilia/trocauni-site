export function StoreBadges() {
  return (
    <div className="mt-7">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[var(--color-primary)]">
        Disponível em breve
      </p>

      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex min-w-[10.5rem] items-center gap-3 rounded-2xl border border-[var(--color-border)] bg-white/90 px-4 py-3 shadow-[var(--shadow-card)] backdrop-blur">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-8 w-8 shrink-0 fill-[var(--color-text)]"
          >
            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.79 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.09ZM12.03 7.25C11.88 5.02 13.69 3.18 15.77 3c.29 2.58-2.34 4.5-3.74 4.25Z" />
          </svg>

          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
              Em breve na
            </p>
            <p className="text-base font-bold text-[var(--color-text)]">
              App Store
            </p>
          </div>
        </div>

        <div className="flex min-w-[10.5rem] items-center gap-3 rounded-2xl border border-[var(--color-border)] bg-white/90 px-4 py-3 shadow-[var(--shadow-card)] backdrop-blur">
          <svg
            viewBox="0 0 48 48"
            aria-hidden="true"
            className="h-8 w-8 shrink-0"
          >
            <path
              d="M6 5.5 28.5 24 6 42.5Z"
              fill="#34A853"
            />
            <path
              d="m28.5 24 6.2-5.1 7.3 4.2c1.5.9 1.5 2.9 0 3.8l-7.3 4.2Z"
              fill="#FBBC04"
            />
            <path
              d="M6 5.5 34.7 18.9 28.5 24Z"
              fill="#4285F4"
            />
            <path
              d="M6 42.5 28.5 24l6.2 7.1Z"
              fill="#EA4335"
            />
          </svg>

          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
              Em breve no
            </p>
            <p className="text-base font-bold text-[var(--color-text)]">
              Google Play
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
