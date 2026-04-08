"use client";

import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactHero } from "@/components/ContactHero";
import { ContactContent } from "@/components/ContactContent";

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
