import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { ThemeProvider } from "@/components/ThemeProvider";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sou Amada | Amanda Sena",
  description: "A jornada transformadora de Amanda Sena através da dor, da adoção e de um chamado improvável para a África. Descubra o amor que cura de dentro para fora.",
  keywords: ["Amanda Sena", "Sou Amada", "Livro cristão", "Testemunho", "Endometriose", "Adoção", "África", "Fé", "Feminilidade", "Milagre"],
  authors: [{ name: "Amanda Sena" }],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: "Sou Amada | Amanda Sena",
    description: "A jornada transformadora de Amanda Sena através da dor, da adoção e de um chamado improvável para a África.",
    url: "https://souamada.com.br", // URL fictícia para ser atualizada depois
    siteName: "Sou Amada - Livro",
    images: [
      {
        url: "/og-image.jpg", // Placeholder para a imagem OG
        width: 1200,
        height: 630,
        alt: "Capa do Livro Sou Amada",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sou Amada | Amanda Sena",
    description: "Descubra o amor que cura de dentro para fora.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema JSON-LD para Livro e Autor
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    "name": "Sou Amada",
    "author": {
      "@type": "Person",
      "name": "Amanda Sena"
    },
    "description": "Descubra o amor que cura de dentro para fora. Um testemunho de fé e adoção na África.",
    "inLanguage": "pt-BR",
    "publisher": {
      "@type": "Organization",
      "name": "Amanda Sena"
    }
  };

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${playfair.variable} ${inter.variable} min-h-full flex flex-col antialiased bg-theme-base font-sans`}>
        <Script
          id="schema-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
