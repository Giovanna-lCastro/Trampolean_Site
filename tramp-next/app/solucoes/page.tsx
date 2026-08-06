import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SolutionsHero } from "@/components/SolutionsHero";
import { SolutionsDetail } from "@/components/SolutionsDetail";
import { SectionIntro } from "@/components/SectionIntro";

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

        <SectionIntro
          title="Um sistema coerente de competências."
          quote="Transformamos desafios organizacionais complexos em estratégias, competências, processos e soluções digitais aplicáveis."
        />

        <SolutionsDetail />

        <section className="bg-tramp-dark relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[40%] h-full bg-tramp-accent/5 -skew-x-12 translate-x-1/2" />

          <div className="container2025Redesign relative z-10 text-center">
            <h2 className="text-balance text-[3.5rem] md:text-[5.5rem] font-black text-white leading-[1.1] mb-8">
              Não sabe por onde começar?
            </h2>

            <p className="text-[1.8rem] md:text-[2.2rem] text-white/70 max-w-3xl mx-auto leading-relaxed mb-12">
              Conte seu desafio. Ajudamos a identificar a frente certa e desenhar o caminho da transformação.
            </p>

            <Link
              href="/contato"
              className="inline-block bg-white text-tramp-dark px-16 py-6 rounded-2xl text-[1.8rem] font-black shadow-2xl hover:bg-tramp-accent hover:text-white hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Conte seu desafio
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
