import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CoursesHero } from "@/components/CoursesHero";
import { CoursesCatalog } from "@/components/CoursesCatalog";
import { CoursesHowItWorks } from "@/components/CoursesHowItWorks";
import { AboutCTA } from "@/components/AboutCTA";

export const metadata: Metadata = {
  title: { absolute: "Cursos para Empresas | Trampolean" },
  description: "Catálogo de trilhas de IA para equipes: lideranças, IA aplicada ao trabalho, prompts, educação, governança e comunicação executiva, na plataforma com a marca da sua empresa.",
  alternates: { canonical: "/cursos" },
};

export default function CoursesPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <Header />
      <main>
        <CoursesHero />

        <CoursesCatalog />

        <CoursesHowItWorks />

        <AboutCTA
          title="Vamos montar a trilha da sua equipe?"
          description="Conte quem você quer formar e em quanto tempo. Voltamos com uma proposta de trilhas e turmas."
          buttonLabel="Solicitar proposta"
        />
      </main>
      <Footer />
    </div>
  );
}
