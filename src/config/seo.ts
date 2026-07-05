import { brand } from "@/config/brand";

export const seo = {
  title: `${brand.name} | Seu campus em um app`,
  description: brand.description,
  siteName: brand.name,
  url: brand.domain,
  locale: "pt_BR",
  ogImage: "/images/trocauni-banner-final.png",
} as const;
