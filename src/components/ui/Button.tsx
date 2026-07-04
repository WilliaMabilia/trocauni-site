import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

type SharedProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type LinkButtonProps = SharedProps &
  Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "className" | "children" | "href"
  > & {
    href: string;
  };

type NativeButtonProps = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: never;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "[background:var(--gradient-primary)] text-white shadow-[var(--shadow-card)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-elevated)]",
  secondary:
    "border border-[var(--color-border)] bg-white text-[var(--color-text)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]",
  ghost:
    "bg-transparent text-[var(--color-text-muted)] hover:bg-[var(--color-background-soft)] hover:text-[var(--color-text)]",
};

const baseClasses =
  "inline-flex min-h-12 items-center justify-center rounded-[var(--radius-button)] px-6 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

export function Button(props: ButtonProps) {
  const variant = props.variant ?? "primary";

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    props.className,
  );

  if ("href" in props && typeof props.href === "string") {
    return (
      <Link
        href={props.href}
        className={classes}
        target={props.target}
        rel={props.rel}
        aria-label={props["aria-label"]}
      >
        {props.children}
      </Link>
    );
  }

  const buttonProps = props as NativeButtonProps;

  return (
    <button
      type={buttonProps.type ?? "button"}
      className={classes}
      disabled={buttonProps.disabled}
      onClick={buttonProps.onClick}
      aria-label={buttonProps["aria-label"]}
    >
      {buttonProps.children}
    </button>
  );
}
