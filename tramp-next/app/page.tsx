import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PressSection } from "@/components/PressSection";
import { EbookCTA } from "@/components/EbookCTA";
import { Partners } from "@/components/Partners";
import { Features } from "@/components/Features";
import { Solutions } from "@/components/Solutions";
import { Segments } from "@/components/Segments";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <PressSection />
        <EbookCTA />
        <Partners />
        <Features />
        <Solutions />
        <Segments />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
