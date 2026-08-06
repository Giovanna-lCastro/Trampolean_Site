import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductsHero } from "@/components/ProductsHero";
import { ProductDetail } from "@/components/ProductDetail";
import { EbookCTA } from "@/components/EbookCTA";
import { ProductsIntro, ProductsPageCTA } from "@/components/ProductsPageExtras";

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

        <ProductsIntro />

        <ProductDetail />

        <EbookCTA />

        <ProductsPageCTA />
      </main>
      <Footer />
    </div>
  );
}
