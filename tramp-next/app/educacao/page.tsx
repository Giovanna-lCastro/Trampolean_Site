"use client";

import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EducationHero } from "@/components/EducationHero";
import { EducationDetail } from "@/components/EducationDetail";
import { EducationDifferentiators } from "@/components/EducationDifferentiators";
import { AboutCTA } from "@/components/AboutCTA";
import { motion } from "framer-motion";

export default function EducationPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <Header />
      <main>
        <EducationHero />
        
        {/* Intro Text for the education list */}
        <div className="bg-white py-24 border-b border-black/5">
          <div className="container2025Redesign text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[3.2rem] md:text-[4.5rem] font-black text-tramp-dark mb-6"
            >
              Nossos Programas de Capacitação
            </motion.h2>
            <div className="text-center">
                <p className="text-[1.8rem] md:text-[2rem] text-tramp-gray max-w-4xl mx-auto leading-relaxed italic border-l-4 border-tramp-magenta pl-8 inline-block text-left">
                “Acreditamos que a verdadeira inovação em IA não vem apenas da tecnologia, 
                mas da capacidade humana de aplicá-la com lucidez e propósito.”
                </p>
            </div>
          </div>
        </div>

        <EducationDetail />
        
        <EducationDifferentiators />
        
        <AboutCTA />
      </main>
      <Footer />
    </div>
  );
}
