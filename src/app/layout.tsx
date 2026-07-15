import type { Metadata } from "next";
import "../app/globals.css";

import { Tektur } from "next/font/google";

export const metadata: Metadata = {
  title: "Portfolio - Kauã Simplício",
};

const tektur = Tektur({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
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
