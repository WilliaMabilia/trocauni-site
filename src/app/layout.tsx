import type { Metadata } from "next";

import { brand } from "@/config/brand";
import { seo } from "@/config/seo";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(seo.url),
  applicationName: seo.siteName,
  title: {
    default: seo.title,
    template: "%s",
  },
  description: seo.description,
  openGraph: {
    type: "website",
    locale: seo.locale,
    url: seo.url,
    siteName: seo.siteName,
    title: seo.title,
    description: seo.description,
    images: [
      {
        url: seo.ogImage,
        width: 1200,
        height: 630,
        alt: "TrocaUni — seu campus em um app",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage],
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: seo.siteName,
    url: seo.url,
    logo: `${seo.url}/icon.png`,
    email: brand.email,
    sameAs: [brand.instagramUrl],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: seo.siteName,
    url: seo.url,
    inLanguage: "pt-BR",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
