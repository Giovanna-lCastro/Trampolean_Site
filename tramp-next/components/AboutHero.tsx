"use client";

import React from "react";
import { motion } from "framer-motion";

export const AboutHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-24 overflow-hidden bg-tramp-dark">
      {/* Background Gradient & Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-tramp-accent/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-tramp-magenta/20 blur-[100px] rounded-full" />
      </div>

      <div className="container2025Redesign relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Side */}
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="text-left"
          >
            <span className="inline-block px-6 py-2 bg-white/5 border border-white/10 rounded-full text-tramp-accent text-[1.4rem] font-bold tracking-widest uppercase mb-8">
              Nossa Identidade
            </span>
            
            <h1 className="text-[4.5rem] md:text-[6.5rem] lg:text-[7.5rem] font-black text-white leading-[1.1] mb-8 tracking-tight">
              Somos a <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">Trampolean</span>
            </h1>
            
            <h2 className="text-[2.2rem] md:text-[2.8rem] font-bold text-white/90 mb-10 leading-tight">
              Arquitetura de aprendizagem e trabalho na era da inteligência artificial.
            </h2>
            
            <p className="text-[1.8rem] md:text-[2rem] text-white/70 max-w-2xl leading-relaxed mb-12">
              Nascemos da crença de que tecnologia e educação, quando caminham juntas, 
              transformam empresas e pessoas. Somos uma empresa brasileira especializada em transformação digital, 
              gamificação e educação corporativa estratégica.
            </p>
            
            <div className="flex justify-start">
              <a 
                href="#historia"
                className="bg-tramp-accent text-white px-12 py-5 rounded-2xl text-[1.7rem] font-black shadow-[0_10px_30px_rgba(240,36,246,0.4)] hover:shadow-[0_15px_40px_rgba(240,36,246,0.6)] hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Conheça nossa trajetória
              </a>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="hidden lg:block relative"
          >
             {/* Glow Effect behind image */}
             <div className="absolute inset-0 bg-tramp-accent/30 blur-[100px] rounded-full -z-10 animate-pulse" />
             
             <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop" 
                 alt="Cyber Tech Background" 
                 className="w-full h-auto object-cover aspect-video hover:scale-110 transition-transform duration-700" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-tramp-dark via-transparent to-transparent opacity-60" />
             </div>

             {/* Floating Badge */}
             <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-black/5 animate-bounce-slow">
                <p className="text-tramp-dark text-[2.2rem] font-black leading-tight">2025 <br /> <span className="text-tramp-accent text-[1.4rem] uppercase tracking-widest">Inovação AI</span></p>
             </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/30"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7 13 5 5 5-5"/><path d="m7 6 5 5 5-5"/></svg>
      </motion.div>
    </section>
  );
};
