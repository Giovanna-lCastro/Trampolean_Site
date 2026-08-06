import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CareerHero } from "@/components/CareerHero";
import { CareerCulture } from "@/components/CareerCulture";
import { CareerForm } from "@/components/CareerForm";

export const metadata: Metadata = {
  title: { absolute: "Carreira | Trampolean" },
  description: "Construa tecnologia que as pessoas compreendem, usam e incorporam ao trabalho. Veja as vagas abertas na Trampolean em Tech, Design, Educação e Social Media.",
  alternates: { canonical: "/carreira" },
};

export default function CareerPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <Header />
      <main>
        <CareerHero />
        <CareerCulture />
        <CareerForm />
      </main>
      <Footer />
    </div>
  );
}
