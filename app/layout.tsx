import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = "https://trampolean.net";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Trampolean | Transformação Digital, Inteligência Artificial e Fatores Humanos",
    template: "%s | Trampolean",
  },
  description: "Consultoria e desenvolvimento em transformação digital, inteligência artificial, automação, software, jogos digitais, educação corporativa, ergonomia e semiótica para empresas e instituições.",
  keywords: ["transformação digital", "consultoria de IA", "automação de processos", "agentes de IA", "software sob medida", "treinamento de IA para empresas", "educação corporativa", "jogos corporativos", "serious games", "gamificação", "realidade virtual", "ergonomia e fatores humanos", "semiótica aplicada", "governança de IA", "SST"],
  authors: [{ name: "Trampolean" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Trampolean",
    title: "Trampolean | Transformação digital centrada no humano",
    description: "Estratégia, IA, automação, software, jogos, educação corporativa, ergonomia e semiótica para transformar processos, competências e experiências.",
    images: [{ url: "/img_site/possivel_img_home.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trampolean | Transformação digital centrada no humano",
    description: "Estratégia, IA, automação, software, jogos, educação corporativa, ergonomia e semiótica para transformar processos, competências e experiências.",
    images: ["/img_site/possivel_img_home.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Trampolean",
  alternateName: "Trampolean Arquitetura de Aprendizagem",
  description: "A Trampolean é uma consultoria e desenvolvedora brasileira de soluções para transformação digital. Atua com inteligência artificial, automação de processos, agentes inteligentes, software, jogos digitais, gamificação, educação corporativa, ergonomia, fatores humanos, semiótica e governança.",
  url: siteUrl,
  logo: `${siteUrl}/logo-trampolean.png`,
  founder: {
    "@type": "Person",
    name: "Fabiana Raulino",
    jobTitle: "CEO",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55-11-96313-5038",
    email: "crie@trampolean.net",
    contactType: "customer service",
    areaServed: "BR",
    availableLanguage: "Portuguese",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  sameAs: [
    "https://www.linkedin.com/company/trampolean/",
    "https://www.instagram.com/trampolean.oficial",
    "https://www.youtube.com/@trampolean",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="font-inter antialiased">{children}</body>
    </html>
  );
}
