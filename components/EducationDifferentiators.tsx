"use client";

import React from "react";
import { motion } from "framer-motion";
import { Settings, MousePointerClick, Users } from "lucide-react";

export const EducationDifferentiators = () => {
  const differentiators = [
    {
      icon: <Settings className="w-12 h-12" />,
      title: "Programas Sob Medida",
      description: "Cada formação é adaptada ao contexto, à maturidade e aos objetivos da organização."
    },
    {
      icon: <MousePointerClick className="w-12 h-12" />,
      title: "Foco no Uso Prático",
      description: "Nenhuma teoria sem aplicação. Participantes saem com ferramentas dominadas e planos concretos."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Facilitadores Especialistas",
      description: "Quem ensina é quem pratica. Nossa equipe usa IA no dia a dia dos projetos."
    }
  ];

  return (
    <section className="bg-tramp-bg-light/30">
      <div className="container2025Redesign">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 bg-tramp-magenta/10 text-tramp-magenta text-[1.3rem] font-bold uppercase tracking-widest rounded-lg mb-6"
          >
            Nossa Metodologia
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[3.5rem] md:text-[5rem] font-black text-tramp-dark text-balance"
          >
            Por que educação com a Trampolean?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {differentiators.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-black/5 hover:-translate-y-4 transition-all duration-300 group"
            >
              <div className="w-20 h-20 rounded-2xl bg-tramp-magenta/10 text-tramp-magenta flex items-center justify-center mb-8 group-hover:bg-tramp-magenta group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-[2.2rem] font-bold text-tramp-dark mb-6">
                {item.title}
              </h3>
              <p className="text-[1.6rem] leading-relaxed text-tramp-gray">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
