"use client";

import React from "react";
import { motion } from "framer-motion";

export const AboutStory = () => {
  return (
    <section id="historia" className="bg-white py-32 overflow-hidden border-b border-black/5">
      <div className="container2025Redesign">
        <div className="flex flex-wrap lg:flex-nowrap gap-16 items-start">
          {/* Section Title & Label */}
          <div className="w-full lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-tramp-accent font-bold text-[1.4rem] tracking-[0.2em] uppercase mb-4 block">
                Nossa Trajetória
              </span>
              <h2 className="text-[3.2rem] md:text-[4.5rem] font-black text-tramp-dark leading-[1.2] mb-8">
                De uma ideia disruptiva a uma referência em inovação
              </h2>
            </motion.div>
          </div>

          {/* Content Texts */}
          <div className="w-full lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <p className="text-[1.8rem] md:text-[2rem] leading-relaxed text-tramp-gray">
                A Trampolean foi fundada com uma missão clara: unir criatividade, tecnologia e estratégia 
                para resolver os desafios reais das organizações. Ao longo dos anos, crescemos construindo 
                produtos originais, metodologias próprias e uma cultura que valoriza o humano e o digital em igual medida.
              </p>
              <p className="text-[1.8rem] md:text-[2rem] leading-relaxed text-tramp-gray">
                Atuamos em projetos de impacto para empresas de médio e grande porte, instituições de ensino 
                e organizações do terceiro setor, levando soluções que vão do desenvolvimento de jogos sérios 
                à consultoria de inteligência artificial aplicada.
              </p>
              <p className="text-[1.8rem] md:text-[2rem] leading-relaxed text-tramp-gray font-medium italic border-l-4 border-tramp-accent pl-8 py-2">
                Hoje, a Trampolean consolida sua posição como parceira estratégica de negócios que querem liderar 
                a próxima era — com responsabilidade, propósito e tecnologia de ponta.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
