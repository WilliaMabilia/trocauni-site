import { brand } from "@/config/brand";

export const seo = {
  title: `${brand.name} | ${brand.tagline}`,
  description: brand.description,
  siteName: brand.name,
  url: brand.domain,
  locale: "pt_BR",
  ogImage: "/images/og-image.png",
} as const;
