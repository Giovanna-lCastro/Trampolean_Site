import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SolutionsHero } from "@/components/SolutionsHero";
import { SolutionsDetail } from "@/components/SolutionsDetail";
import { SolutionsIntro, SolutionsPageCTA } from "@/components/SolutionsPageExtras";

export const metadata: Metadata = {
  title: { absolute: "Soluções | Trampolean" },
  description: "Da estratégia à automação, do treinamento ao produto digital. IA, automação, software, jogos, educação corporativa, ergonomia e semiótica para transformar processos e experiências.",
  alternates: { canonical: "/solucoes" },
};

export default function SolutionsPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <Header />
      <main>
        <SolutionsHero />

        <SolutionsIntro />

        <SolutionsDetail />

        <SolutionsPageCTA />
      </main>
      <Footer />
    </div>
  );
}
