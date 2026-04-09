"use client";

import React from "react";
import { motion } from "framer-motion";

export const FinalCTA = () => {
  return (
    <section id="cta-final" className="bg-tramp-purple-dark text-white pt-48 pb-64 relative overflow-hidden border-t border-white/5">
       {/* High-end background finish */}
       <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-tramp-dark to-transparent z-0"></div>

       <div className="container2025Redesign relative z-10 text-center !pb-0">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-[3.5rem] md:text-[5.5rem] font-black mb-10 leading-tight tracking-tight"
          >
             Sua Jornada de Transformação <br /> <span className="text-tramp-magenta">Começa Agora.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16 opacity-80 text-[1.8rem] md:text-[2.2rem] leading-relaxed"
          >
             Não deixe sua empresa para trás enquanto o mercado avança. A Trampolean é sua parceira estratégica 
             para navegar na era da Inteligência Artificial com confiança, ética e resultados concretos. 
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-6 justify-center items-center"
          >
             <a href="#contato" className="btn-premium-purple px-12 py-6 rounded-2xl text-[1.7rem] font-bold shadow-2xl">
                Agende um Diagnóstico Gratuito
             </a>
             <a 
               href="https://wa.me/something" 
               className="bg-white text-tramp-navy px-12 py-6 rounded-2xl text-[1.7rem] font-bold shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
             >
                Fale com um Especialista
             </a>
          </motion.div>
       </div>
    </section>
  );
};
