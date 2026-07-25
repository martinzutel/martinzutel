import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Martin Zutelman — Fotografía · Diseño · Web",
  description: "Portfolio de Martin Zutelman — fotografía, diseño gráfico y desarrollo web. Proyectos reales con criterio visual, desde la identidad hasta el código. Buenos Aires.",
  metadataBase: new URL("https://martinzutelman.com"),
  openGraph: {
    title: "Martin Zutelman — Fotografía · Diseño · Web",
    description: "Portfolio de Martin Zutelman — fotografía, diseño gráfico y desarrollo web. Proyectos reales con criterio visual, desde la identidad hasta el código. Buenos Aires.",
    url: "https://martinzutelman.com",
    siteName: "Martin Zutelman",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Martin Zutelman — Fotografía · Diseño · Web",
    description: "Portfolio de Martin Zutelman — fotografía, diseño gráfico y desarrollo web. Proyectos reales con criterio visual, desde la identidad hasta el código. Buenos Aires.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
