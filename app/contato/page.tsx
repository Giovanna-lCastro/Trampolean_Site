import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactHero } from "@/components/ContactHero";
import { ContactContent } from "@/components/ContactContent";

export const metadata: Metadata = {
  title: { absolute: "Contato | Trampolean" },
  description: "Fale com a Trampolean sobre transformação digital, IA, automação, software, jogos, treinamentos, ergonomia ou semiótica aplicada.",
  alternates: { canonical: "/contato" },
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <Header />
      <main>
        <ContactHero />
        <ContactContent />
      </main>
      <Footer />
    </div>
  );
}
