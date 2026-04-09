"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, Users, Brain, Zap, Star } from "lucide-react";

export const CareerCulture = () => {
  const values = [
    {
      title: "Inovação Constante",
      description: "Trabalhamos na fronteira da tecnologia organizacional. Se você gosta de aprender e aplicar o novo, aqui é seu lugar.",
      icon: <Zap className="w-12 h-12 text-tramp-magenta" />
    },
    {
      title: "Impacto Humano",
      description: "Nossa tecnologia não substitui pessoas; ela as potencializa. Cada projeto visa melhorar a vida de quem trabalha.",
      icon: <Users className="w-12 h-12 text-tramp-magenta" />
    },
    {
      title: "Liberdade Criativa",
      description: "Valorizamos a autonomia e a voz de cada colaborador. Boas ideias vêm de todos os lugares e são ouvidas.",
      icon: <Star className="w-12 h-12 text-tramp-magenta" />
    }
  ];

  return (
    <section className="bg-white py-32 overflow-hidden border-b border-black/5">
       <div className="container2025Redesign text-center mb-20 !pb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1 bg-tramp-magenta/10 text-tramp-magenta text-[1.3rem] font-bold uppercase tracking-widest rounded-lg mb-6">
              Nossa Cultura
            </span>
            <h2 className="text-[3.5rem] md:text-[5.5rem] text-tramp-navy font-black mb-10 leading-tight">
              Por que a <span className="text-tramp-magenta">Trampolean?</span>
            </h2>
            <p className="max-w-3xl mx-auto text-[1.8rem] md:text-[2.1rem] text-tramp-gray leading-relaxed mb-16">
              Oferecemos um ambiente de crescimento acelerado, onde a tecnologia de ponta e o bem-estar caminham juntos.
            </p>
          </motion.div>
       </div>

       <div className="container2025Redesign !py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
             {values.map((v, idx) => (
                <motion.div 
                   key={idx} 
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.1 }}
                   className="bg-white p-12 rounded-[3.5rem] border border-tramp-navy/5 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(130,0,250,0.1)] hover:-translate-y-4 transition-all duration-500 group"
                >
                   <div className="mb-10 p-6 bg-tramp-magenta/5 w-fit rounded-3xl group-hover:scale-110 transition-transform duration-500">
                      {v.icon}
                   </div>
                   <h3 className="text-[2.4rem] font-bold text-tramp-navy mb-6 group-hover:text-tramp-magenta transition-colors">{v.title}</h3>
                   <p className="text-[1.7rem] text-tramp-gray leading-relaxed opacity-80">{v.description}</p>
                </motion.div>
             ))}
          </div>
       </div>
    </section>
  );
};
