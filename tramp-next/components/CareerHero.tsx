"use client";

import React from "react";
import { motion } from "framer-motion";

export const CareerHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-24 overflow-hidden bg-white">
      {/* Subtle Background Decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-tramp-accent/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-tramp-magenta/5 blur-[100px] rounded-full" />
      </div>

      <div className="container2025Redesign relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="max-w-4xl mx-auto"
        >
          <span className="inline-block px-6 py-2 bg-tramp-accent/10 border border-tramp-accent/20 rounded-full text-tramp-accent text-[1.4rem] font-bold tracking-widest uppercase mb-8">
            Trabalhe na Trampolean
          </span>
          
          <h1 className="text-[4.5rem] md:text-[6.5rem] lg:text-[7.5rem] font-black text-tramp-dark leading-[1.1] mb-8 tracking-tight">
            Venha construir o <br /> <span className="text-tramp-accent">futuro com a gente.</span>
          </h1>
          
          <p className="text-[1.8rem] md:text-[2.2rem] text-tramp-gray max-w-3xl mx-auto leading-relaxed mb-12">
            A Trampolean é feita por pessoas curiosas, criativas e apaixonadas por tecnologia, educação e impacto. 
            Se você busca um ambiente que valoriza a inovação de verdade, este é o seu lugar.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
