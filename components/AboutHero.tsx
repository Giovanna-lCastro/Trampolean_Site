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

            <h1 className="text-balance text-[3.2rem] md:text-[4.2rem] lg:text-[4.8rem] font-black text-white leading-[1.15] mb-10 tracking-tight">
              Transformação digital construída a partir do trabalho humano.
            </h1>

            <p className="text-[1.6rem] md:text-[1.8rem] text-white/70 text-pretty leading-relaxed mb-12">
              A Trampolean é uma consultoria e desenvolvedora de soluções que conecta tecnologia, aprendizagem,
              trabalho e linguagem. Atuamos com inteligência artificial, automação, software, jogos digitais,
              educação corporativa, ergonomia e semiótica.
            </p>

            <div className="flex justify-start">
              <a
                href="/solucoes"
                className="bg-tramp-accent text-white px-12 py-5 rounded-2xl text-[1.7rem] font-black shadow-[0_10px_30px_rgba(240,36,246,0.4)] hover:shadow-[0_15px_40px_rgba(240,36,246,0.6)] hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Conheça nossas soluções
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
                src="/noticia_e_img/Imagens/20241024_100302.jpg"
                alt="Fabiana Raulino, CEO da Trampolean, apresentando em evento sobre Inteligência Artificial"
                className="w-full h-auto object-cover aspect-video hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tramp-dark via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-black/5 animate-bounce-slow">
              <p className="text-tramp-dark text-[2.2rem] font-black leading-tight">+10 anos <br /> <span className="text-tramp-accent text-[1.4rem] uppercase tracking-widest">Inovação AI</span></p>
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
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7 13 5 5 5-5" /><path d="m7 6 5 5 5-5" /></svg>
      </motion.div>
    </section>
  );
};
