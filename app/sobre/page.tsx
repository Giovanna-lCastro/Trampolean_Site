import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutHero } from "@/components/AboutHero";
import { AboutStory } from "@/components/AboutStory";
import { AboutMetrics } from "@/components/AboutMetrics";
import { AboutDifferentiators } from "@/components/AboutDifferentiators";
import { AboutLeadership } from "@/components/AboutLeadership";
import { AboutValues } from "@/components/AboutValues";
import { AboutCTA } from "@/components/AboutCTA";

export const metadata: Metadata = {
  title: { absolute: "A Trampolean | Transformação digital centrada no humano" },
  description: "Consultoria e desenvolvedora que conecta tecnologia, trabalho, aprendizagem e linguagem. IA, automação, software, jogos, educação corporativa, ergonomia e semiótica. Liderada por Fabiana Raulino.",
  alternates: { canonical: "/sobre" },
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <Header />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutMetrics />
        <AboutDifferentiators />
        <AboutLeadership />
        <AboutValues />
        <AboutCTA
          title={<>Pronto para transformar <br className="hidden md:block" /> sua organização?</>}
          description="Converse com nossos especialistas e descubra como a Trampolean pode transformar processos, competências e experiências."
          buttonLabel="Entre em contato"
          buttonHref="/contato"
        />
      </main>
      <Footer />
    </div>
  );
}
