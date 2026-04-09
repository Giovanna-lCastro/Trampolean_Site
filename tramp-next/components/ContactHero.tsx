"use client";

import React from "react";
import { motion } from "framer-motion";

export const ContactHero = () => {
  return (
    <section className="relative min-h-[75vh] flex items-center justify-center pt-32 pb-24 overflow-hidden bg-tramp-dark">
      {/* Background Gradient & Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-tramp-magenta/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-tramp-accent/10 blur-[100px] rounded-full" />
      </div>

      <div className="container2025Redesign relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-6 py-2 bg-white/5 border border-white/10 rounded-full text-tramp-accent text-[1.4rem] font-bold tracking-widest uppercase mb-8">
              Contato & Parcerias
            </span>
            
            <h1 className="text-[4.5rem] md:text-[6.5rem] lg:text-[7.5rem] font-black text-white leading-[1.1] mb-8 tracking-tight">
              Fale com a <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-tramp-magenta via-white to-white/70">Trampolean.</span>
            </h1>
            
            <p className="text-[1.8rem] md:text-[2.2rem] text-white/70 max-w-2xl leading-relaxed mb-12">
              Estamos prontos para ouvir seus desafios e transformar sua organização através da inovação, tecnologia e educação. Vamos conversar?
            </p>
          </motion.div>

          {/* Image Side - Reforçando o Padrão Z */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="hidden lg:block relative"
          >
             <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop" 
                 alt="Conexão e parceria estratégica" 
                 className="w-full h-auto object-cover aspect-video hover:scale-110 transition-transform duration-700" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-tramp-dark via-transparent to-transparent opacity-60" />
             </div>
             
             {/* Floating Badge */}
             <div className="absolute -top-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl animate-bounce-slow">
                <p className="text-tramp-dark text-[2rem] font-black leading-tight text-center">IA & <br /> <span className="text-tramp-magenta uppercase text-[1.2rem] tracking-widest">Inovação</span></p>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
