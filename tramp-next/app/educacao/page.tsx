import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EducationHero } from "@/components/EducationHero";
import { EducationDetail } from "@/components/EducationDetail";
import { EducationDifferentiators } from "@/components/EducationDifferentiators";
import { AboutCTA } from "@/components/AboutCTA";
import { SectionIntro } from "@/components/SectionIntro";

export const metadata: Metadata = {
  title: { absolute: "Educação | Trampolean" },
  description: "Treinamentos de inteligência artificial para transformar a prática de trabalho. IA para lideranças, IA aplicada ao trabalho, IA na educação, governança e trilhas corporativas.",
  alternates: { canonical: "/educacao" },
};

export default function EducationPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <Header />
      <main>
        <EducationHero />

        <SectionIntro
          title="Nossos programas de capacitação"
          quote="A verdadeira transformação com IA não vem apenas da tecnologia, mas da capacidade humana de aplicá-la com lucidez e propósito."
          accent="magenta"
        />

        <EducationDetail />

        <EducationDifferentiators />

        <AboutCTA
          title="Vamos formar sua equipe para a era da IA?"
          buttonLabel="Fale com especialistas"
        />
      </main>
      <Footer />
    </div>
  );
}
