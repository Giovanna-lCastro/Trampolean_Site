"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, Users, Brain } from "lucide-react";

export const CareerCulture = () => {
  const points = [
    {
      icon: <Rocket className="w-12 h-12" />,
      title: "Projetos de impacto real",
      description: "Trabalhamos em iniciativas que mudam a forma como empresas operam e como pessoas aprendem."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Equipe multidisciplinar",
      description: "Designers, devs, educadores, estrategistas — uma equipe diversa e totalmente colaborativa."
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Aprendizado contínuo",
      description: "Aqui, a aprendizagem é parte do trabalho. Incentivamos o crescimento técnico e humano constante."
    }
  ];

  return (
    <section className="py-32 bg-tramp-dark text-white overflow-hidden">
      <div className="container2025Redesign border-y border-white/10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[3.5rem] md:text-[5.5rem] font-black leading-[1.1] mb-8"
            >
              Por que a <br /> <span className="text-tramp-accent">Trampolean?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[1.8rem] md:text-[2.2rem] text-white/60 leading-relaxed max-w-xl"
            >
              Não somos apenas uma empresa de tecnologia. Somos um laboratório de inovação humana potencializado por IA.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            {points.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-8 p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-tramp-accent/20 text-tramp-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-[2.2rem] font-bold mb-4">{point.title}</h3>
                  <p className="text-[1.6rem] text-white/60 leading-relaxed">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
