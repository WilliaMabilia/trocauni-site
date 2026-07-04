import type { Feature } from "@/data/features";

type FeatureCardProps = Feature;

const iconConfig: Record<
  Feature["icon"],
  {
    label: string;
    symbol: string;
    gradient: string;
    glow: string;
  }
> = {
  users: {
    label: "Comunidade",
    symbol: "👥",
    gradient: "linear-gradient(135deg, #4f7cff, #7c5cfc)",
    glow: "rgba(79, 124, 255, 0.22)",
  },
  "message-circle": {
    label: "Conversas",
    symbol: "💬",
    gradient: "linear-gradient(135deg, #7c5cfc, #ec4899)",
    glow: "rgba(236, 72, 153, 0.2)",
  },
  "shopping-bag": {
    label: "Marketplace",
    symbol: "🛍️",
    gradient: "linear-gradient(135deg, #ec4899, #f97316)",
    glow: "rgba(249, 115, 22, 0.2)",
  },
  "calendar-days": {
    label: "Oportunidades",
    symbol: "📅",
    gradient: "linear-gradient(135deg, #f97316, #fbbf24)",
    glow: "rgba(251, 191, 36, 0.2)",
  },
};

export function FeatureCard({
  title,
  description,
  icon,
}: FeatureCardProps) {
  const config = iconConfig[icon];

  return (
    <article className="group relative overflow-hidden rounded-[var(--radius-card)] border border-white/80 [background:var(--gradient-card)] p-6 shadow-[var(--shadow-card)] backdrop-blur transition duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-elevated)] sm:p-7">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full blur-3xl transition duration-300 group-hover:scale-125"
        style={{ background: config.glow }}
      />

      <div className="relative">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-2xl text-2xl shadow-lg"
          style={{ background: config.gradient }}
          aria-hidden="true"
        >
          {config.symbol}
        </div>

        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-primary)]">
          {config.label}
        </p>

        <h3 className="mt-2 text-xl font-bold tracking-tight text-[var(--color-text)]">
          {title}
        </h3>

        <p className="mt-3 text-base leading-7 text-[var(--color-text-muted)]">
          {description}
        </p>
      </div>
    </article>
  );
}
