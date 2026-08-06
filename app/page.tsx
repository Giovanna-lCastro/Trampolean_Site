import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CompetenceStrip } from "@/components/CompetenceStrip";
import { ProblemSection } from "@/components/ProblemSection";
import { PressSection } from "@/components/PressSection";
import { ResultsSection } from "@/components/ResultsSection";
import { Partners } from "@/components/Partners";
import { Features } from "@/components/Features";
import { Solutions } from "@/components/Solutions";
import { FAQ } from "@/components/FAQ";
import { Differential } from "@/components/Differential";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <CompetenceStrip />
        <ProblemSection />
        <PressSection />
        <ResultsSection />
        <Partners />
        <Features />
        <Solutions />
        <FAQ />
        <Differential />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
