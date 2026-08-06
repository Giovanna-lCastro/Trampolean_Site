"use client";

import React from "react";
import { Umbrella, Users, Rocket, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export const Segments = () => {
   const categories = [
      {
         title: "Para Gestores de SST e Ergonomia",
         description: "Preveja riscos, otimize ambientes de trabalho e garanta a conformidade com NR-17 através de ferramentas inovadoras.",
         icon: <Umbrella className="w-16 h-16 text-tramp-magenta" />
      },
      {
         title: "Para Líderes de RH e T&D",
         description: "Acelere o desenvolvimento das suas equipes com universidades corporativas e plataformas de gamificação com ROI mensurável.",
         icon: <Users className="w-16 h-16 text-tramp-magenta" />
      },
      {
         title: "Para Diretores de Inovação",
         description: "Implemente IA, automação e ferramentas digitais com estratégia e responsabilidade. Transforme processos operacionais.",
         icon: <Rocket className="w-16 h-16 text-tramp-magenta" />
      },
      {
         title: "Para Líderes de ESG",
         description: "Demonstre compromisso real com o bem-estar dos colaboradores e metas ambientais com dados transparentes.",
         icon: <ShieldCheck className="w-16 h-16 text-tramp-magenta" />
      }
   ];

   return (
      <section className="bg-tramp-purple-dark text-white py-32 relative overflow-hidden">
         {/* Decorative glow */}
         <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-tramp-magenta/5 blur-[120px] rounded-full"></div>

         <div className="container2025Redesign text-center mb-16 !pb-0">
            <motion.h2
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-[3.2rem] md:text-[4.5rem] font-black mb-6 leading-tight"
            >
               Soluções Inteligentes para os <br /> Seus <span className="text-tramp-magenta">Desafios Mais Críticos</span>
            </motion.h2>
            <motion.p
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="opacity-70 text-[1.8rem] md:text-[2rem] text-pretty leading-relaxed"
            >
               Seja você um gestor de SST, um líder de RH ou um diretor de inovação — a Trampolean tem a solução certa para o seu contexto.
            </motion.p>
         </div>
         <div className="container2025Redesign !py-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {categories.map((cat, idx) => (
                  <motion.div
                     key={idx}
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: idx * 0.1 }}
                     className="bg-white/5 p-12 rounded-[3rem] border border-white/10 hover:bg-white/10 hover:-translate-y-3 transition-all duration-300 cursor-default group"
                  >
                     <div className="mb-8 group-hover:scale-110 transition-transform duration-500 origin-left">
                        {cat.icon}
                     </div>
                     <h3 className="text-[2.2rem] font-bold mb-6 tracking-tight group-hover:text-tramp-magenta transition-colors">{cat.title}</h3>
                     <p className="text-[1.6rem] opacity-70 leading-relaxed">{cat.description}</p>
                  </motion.div>
               ))}
            </div>
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center mt-20"
            >
               <a href="/solucoes" className="btn-premium-purple px-12 py-5 rounded-2xl font-bold text-[1.7rem] shadow-xl inline-block">
                  Explore Todas as Nossas Soluções
               </a>
            </motion.div>
         </div>
      </section>
   );
};
