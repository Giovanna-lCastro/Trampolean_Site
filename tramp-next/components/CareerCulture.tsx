"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, Users, Brain } from "lucide-react";

export const CareerCulture = () => {
  const points = [
    {
      icon: <Rocket className="w-10 h-10" />,
      title: "Projetos de impacto real",
      description: "Trabalhamos em iniciativas que mudam a forma como empresas operam e como pessoas aprendem."
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Equipe multidisciplinar",
      description: "Designers, devs, educadores, estrategistas — uma equipe diversa e totalmente colaborativa."
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: "Aprendizado contínuo",
      description: "Aqui, a aprendizagem é parte do trabalho. Incentivamos o crescimento técnico e humano constante."
    }
  ];

  return (
    <section className="py-32 bg-white overflow-hidden border-b border-black/5">
      <div className="container2025Redesign">
        <div className="flex flex-wrap lg:flex-nowrap gap-16 items-start">
          {/* Label & Title (1/3) */}
          <div className="w-full lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-tramp-accent font-bold text-[1.4rem] tracking-[0.2em] uppercase mb-4 block">
                Cultura & Valores
              </span>
              <h2 className="text-[3.2rem] md:text-[4.5rem] font-black text-tramp-dark leading-[1.2] mb-8">
                Por que a Trampolean?
              </h2>
              <p className="text-[1.7rem] leading-relaxed text-tramp-gray">
                Não somos apenas uma empresa de tecnologia. Somos um laboratório de inovação humana potencializado por IA.
              </p>
            </motion.div>
          </div>

          {/* Points (2/3) */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {points.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="p-10 bg-tramp-bg-light/20 border border-black/5 rounded-[2.5rem] hover:shadow-xl hover:translate-x-2 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-tramp-magenta text-white flex items-center justify-center mb-6">
                    {point.icon}
                  </div>
                  <h3 className="text-[2rem] font-bold text-tramp-dark mb-4">{point.title}</h3>
                  <p className="text-[1.6rem] text-tramp-gray leading-relaxed">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
