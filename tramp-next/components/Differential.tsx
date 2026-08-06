"use client";

import React from "react";
import { motion } from "framer-motion";

const pillars = [
  {
    title: "Sociotécnica",
    description: "Tecnologia, trabalho e pessoas tratados como parte do mesmo sistema.",
  },
  {
    title: "Ergonomia",
    description: "Soluções desenhadas a partir do trabalho real, não apenas do processo prescrito.",
  },
  {
    title: "Semiótica aplicada",
    description: "Linguagem, interfaces e narrativas analisadas para fortalecer adoção.",
  },
  {
    title: "Desenvolvimento",
    description: "Não só recomendamos: construímos a automação, o software ou o jogo.",
  },
];

export const Differential = () => {
  return (
    <section className="bg-white">
      <div className="container2025Redesign">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-tramp-magenta/10 text-tramp-magenta text-[1.3rem] font-bold uppercase tracking-widest rounded-lg mb-6">
            Por que a Trampolean
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-balance text-[3rem] md:text-[4rem] text-tramp-navy font-black leading-tight tracking-tight mb-8"
          >
            Estratégia, formação e desenvolvimento na mesma empresa.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[1.8rem] md:text-[2.1rem] text-tramp-gray leading-relaxed"
          >
            A Trampolean reúne competências que normalmente são contratadas separadamente. Podemos diagnosticar o problema, desenhar a estratégia, formar as pessoas, automatizar o processo e desenvolver a tecnologia, o jogo, a plataforma ou a experiência necessária.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + idx * 0.1 }}
              className="p-8 rounded-[2rem] border border-tramp-navy/5 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.04)] text-left h-full"
            >
              <h3 className="text-[1.7rem] font-bold text-tramp-navy mb-3 tracking-tight">
                {pillar.title}
              </h3>
              <p className="text-[1.4rem] text-tramp-gray leading-relaxed opacity-80">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
