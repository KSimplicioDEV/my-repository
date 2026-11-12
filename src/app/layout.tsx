import type { Metadata } from "next";
import "../app/globals.css";

import { Tektur } from "next/font/google";

// TODO: troque pela URL final do portfólio quando tiver um domínio.
// Na Vercel, o domínio de produção é detectado sozinho.
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

const description =
  "Desenvolvedor Full Stack com foco em React, Next.js, TypeScript e Node.js. Conheça meus projetos, entre eles o CorrigeAI, corretor de redação do ENEM com IA.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Kauã Simplício | Desenvolvedor Full Stack",
  description,
  authors: [{ name: "Kauã Simplício" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    alternateLocale: ["en_US"],
    siteName: "Kauã Simplício",
    title: "Kauã Simplício | Desenvolvedor Full Stack",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Kauã Simplício | Desenvolvedor Full Stack",
    description,
  },
};

// Só os pesos usados na página (normal, medium, semibold e bold).
const tektur = Tektur({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-tektur",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={tektur.className}>
      <body>{children}</body>
    </html>
  );
}
