import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductsHero } from "@/components/ProductsHero";
import { ProductDetail } from "@/components/ProductDetail";
import { AboutCTA } from "@/components/AboutCTA";
import { SectionIntro } from "@/components/SectionIntro";
import { EbookCTA } from "@/components/EbookCTA";

export const metadata: Metadata = {
  title: { absolute: "Produtos | Trampolean" },
  description: "Produtos originais da Trampolean: Manual de Ética de IA, Book Wizard, Player 2 e Kapta — IA, governança, criação de conteúdo e gamificação.",
  alternates: { canonical: "/produtos" },
};

export default function ProductsPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <Header />
      <main>
        <ProductsHero />

        <SectionIntro
          title="Conheça nossas soluções originais"
          quote="Nossos produtos não são apenas ferramentas; são catalisadores de mudança para organizações que entendem o papel da IA no trabalho."
        />

        <ProductDetail />

        <EbookCTA />

        <AboutCTA
          title="Quer aplicar algum produto na sua organização?"
          description="Fale com a Trampolean e descubra como o Manual de Ética de IA, o Book Wizard, o Player 2 ou o Kapta podem ser aplicados no seu contexto."
          buttonLabel="Entre em contato"
          buttonHref="/contato"
        />
      </main>
      <Footer />
    </div>
  );
}
