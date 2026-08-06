import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PrivacyContent } from "@/components/PrivacyContent";

export const metadata: Metadata = {
  title: { absolute: "Política de Privacidade | Trampolean" },
  description: "Como a Trampolean coleta, usa e protege dados pessoais de clientes, candidatos e visitantes, em conformidade com a LGPD.",
};

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <Header />
      <main className="pt-48 pb-32">
        <PrivacyContent />
      </main>
      <Footer />
    </div>
  );
}
