import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EducationHero } from "@/components/EducationHero";
import { EducationDetail } from "@/components/EducationDetail";
import { EducationDifferentiators } from "@/components/EducationDifferentiators";
import { EducationIntro, EducationPageCTA } from "@/components/EducationPageExtras";

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

        <EducationIntro />

        <EducationDetail />

        <EducationDifferentiators />

        <EducationPageCTA />
      </main>
      <Footer />
    </div>
  );
}
