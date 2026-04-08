"use client";

import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductsHero } from "@/components/ProductsHero";
import { ProductDetail } from "@/components/ProductDetail";
import { AboutCTA } from "@/components/AboutCTA";
import { motion } from "framer-motion";

export default function ProductsPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <Header />
      <main>
        <ProductsHero />
        
        {/* Intro Text for the product list */}
        <div className="bg-white py-24 border-b border-black/5">
          <div className="container2025Redesign text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[3.2rem] md:text-[4.5rem] font-black text-tramp-dark mb-6"
            >
              Conheça nossas Soluções Originais
            </motion.h2>
            <p className="text-[1.8rem] md:text-[2rem] text-tramp-gray max-w-3xl mx-auto leading-relaxed italic border-l-4 border-tramp-accent pl-8 inline-block text-left">
              “Nossos produtos não são apenas ferramentas; são catalisadores 
              de mudança para empresas que entendem o papel da IA no trabalho.”
            </p>
          </div>
        </div>

        <ProductDetail />
        
        {/* CTA adapted for products */}
        <AboutCTA />
      </main>
      <Footer />
    </div>
  );
}
