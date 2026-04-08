"use client";

import React from "react";
import { motion } from "framer-motion";

export const ContactHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center pt-40 pb-24 overflow-hidden bg-tramp-dark text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-tramp-magenta/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-tramp-accent/10 blur-[100px] rounded-full" />
      </div>

      <div className="container2025Redesign relative z-10">
        <div className="flex flex-wrap lg:flex-nowrap gap-16 items-start">
          {/* Title (1/3) */}
          <div className="w-full lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-tramp-accent font-black text-[1.4rem] tracking-[0.2em] uppercase mb-4 block">
                Contato
              </span>
              <h1 className="text-[4.5rem] md:text-[6.5rem] font-black leading-[1.1] tracking-tight">
                Fale com a <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">Trampolean</span>
              </h1>
            </motion.div>
          </div>

          {/* Subtitle (2/3) */}
          <div className="w-full lg:w-2/3 lg:pt-14">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-[2rem] md:text-[2.8rem] text-white/70 leading-relaxed max-w-2xl">
                Tem um projeto em mente? Uma pergunta? Uma parceria para propor? Estamos aqui para conversar e transformar sua ideia em realidade.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
