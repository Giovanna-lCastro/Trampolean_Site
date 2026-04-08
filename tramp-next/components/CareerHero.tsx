"use client";

import React from "react";
import { motion } from "framer-motion";

export const CareerHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center pt-32 pb-24 overflow-hidden bg-white border-b border-black/5">
      {/* Subtle Background Decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-tramp-accent/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-tramp-magenta/5 blur-[100px] rounded-full" />
      </div>

      <div className="container2025Redesign relative z-10">
        <div className="flex flex-wrap lg:flex-nowrap gap-16 items-start">
          {/* Section Title (1/3) */}
          <div className="w-full lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-tramp-accent font-bold text-[1.4rem] tracking-[0.2em] uppercase mb-4 block">
                Trabalhe na Trampolean
              </span>
              <h1 className="text-[4rem] md:text-[5.5rem] lg:text-[6.5rem] font-black text-tramp-dark leading-[1.1] tracking-tight">
                Venha construir o <span className="text-tramp-accent">futuro</span> com a gente.
              </h1>
            </motion.div>
          </div>

          {/* Description (2/3) */}
          <div className="w-full lg:w-2/3 lg:pt-14">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-[2rem] md:text-[2.6rem] text-tramp-gray leading-relaxed mb-8">
                A Trampolean é feita por pessoas curiosas, criativas e apaixonadas por tecnologia, educação e impacto. 
              </p>
              <p className="text-[1.8rem] md:text-[2rem] text-tramp-gray/80 leading-relaxed italic border-l-4 border-tramp-accent pl-8 py-2">
                Se você busca um ambiente que valoriza a inovação de verdade, este é o seu lugar. Aqui, cada linha de código e cada dinâmica de grupo tem um propósito maior.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
