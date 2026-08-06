"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const AboutLeadership = () => {
  return (
    <section className="bg-tramp-bg-light/30 py-32 overflow-hidden border-y border-black/5">
      <div className="container2025Redesign">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Photo Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            {/* Decorative Background */}
            <div className="absolute top-[5%] left-[5%] w-full h-full bg-tramp-accent/10 rounded-[3rem] -z-10 group-hover:scale-105 transition-transform duration-500" />

            <img
              src="/foto_fabi.jpg"
              alt="Fabiana Raulino, CEO da Trampolean"
              className="w-full h-auto rounded-[3rem] shadow-2xl object-cover aspect-[4/5]"
            />

            <div className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl">
              <h3 className="text-[2.2rem] font-black text-tramp-dark mb-1">Fabiana Raulino</h3>
              <p className="text-[1.6rem] text-tramp-accent font-bold uppercase tracking-widest">CEO da Trampolean</p>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-tramp-accent font-bold text-[1.4rem] tracking-[0.2em] uppercase mb-4 block">
              Liderança
            </span>
            <h2 className="text-balance text-[3.2rem] md:text-[4.5rem] font-black text-tramp-dark leading-[1.2] mb-8">
              Liderança interdisciplinar para ecossistemas complexos.
            </h2>

            <div className="space-y-8 mb-12">
              <p className="text-[1.8rem] md:text-[2rem] leading-relaxed text-tramp-gray">
                Fabiana Raulino reúne experiência executiva, acadêmica e técnica em inteligência artificial,
                transformação digital, educação corporativa, ergonomia, engenharia de produção, semiótica e
                desenvolvimento de ecossistemas digitais. Na Trampolean, lidera projetos que conectam estratégia,
                trabalho, aprendizagem, linguagem e tecnologia.
              </p>
            </div>

            <Link
              href="/contato"
              className="inline-flex items-center gap-3 bg-tramp-dark text-white px-10 py-5 rounded-2xl text-[1.7rem] font-bold shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Fale com nossa equipe
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
