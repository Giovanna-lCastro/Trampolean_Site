"use client";

import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SolutionsHero } from "@/components/SolutionsHero";
import { SolutionsDetail } from "@/components/SolutionsDetail";
import { AboutCTA } from "@/components/AboutCTA";
import { motion } from "framer-motion";

export default function SolutionsPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <Header />
      <main>
        <SolutionsHero />
        
        {/* Intro Text for the solutions list */}
        <div className="bg-white py-24 border-b border-black/5">
          <div className="container2025Redesign text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[3.2rem] md:text-[4.5rem] font-black text-tramp-dark mb-6"
            >
              Expertise em Tecnologia e Inovação
            </motion.h2>
            <div className="text-center">
                <p className="text-[1.8rem] md:text-[2rem] text-tramp-gray max-w-4xl mx-auto leading-relaxed italic border-l-4 border-tramp-accent pl-8 inline-block text-left">
                “Nossa missão é transformar desafios complexos em soluções digitais simples, 
                escaláveis e com alto valor agregado para o seu negócio.”
                </p>
            </div>
          </div>
        </div>

        <SolutionsDetail />
        
        <AboutCTA />
      </main>
      <Footer />
    </div>
  );
}
