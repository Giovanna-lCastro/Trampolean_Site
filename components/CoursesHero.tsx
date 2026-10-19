"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CURSOS } from "@/lib/cursos";

const NUMEROS = [
  { valor: `${CURSOS.length}`, rotulo: "trilhas no catálogo" },
  { valor: "100%", rotulo: "com a marca da sua empresa" },
  { valor: "IA", rotulo: "feedback em vídeo e quizzes" },
];

export const CoursesHero = () => (
  <section className="relative min-h-[80vh] flex items-center justify-center pt-32 pb-24 overflow-hidden bg-tramp-dark">
    <div className="absolute inset-0 z-0">
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-tramp-magenta/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-tramp-accent/10 blur-[100px] rounded-full" />
    </div>

    <div className="container2025Redesign relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-6 py-2 bg-white/5 border border-white/10 rounded-full text-tramp-accent text-[1.4rem] font-bold tracking-widest uppercase mb-8">
            Cursos para empresas
          </span>

          <h1 className="text-[3.2rem] md:text-[4.2rem] lg:text-[4.8rem] font-black text-white leading-[1.15] mb-8 tracking-tight text-balance">
            Trilhas de IA prontas para a sua equipe, <span className="text-transparent bg-clip-text bg-gradient-to-r from-tramp-gradient-start to-tramp-gradient-end">com a sua marca</span>
          </h1>

          <p className="text-[1.6rem] md:text-[1.8rem] text-white/70 text-pretty leading-relaxed mb-12">
            Escolha as trilhas do catálogo Trampolean, nós liberamos na plataforma da sua empresa e você acompanha
            a evolução de cada colaborador em relatórios próprios.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#catalogo" className="btn-premium-purple px-10 py-5 rounded-2xl text-[1.6rem] font-black">
              Ver catálogo
            </a>
            <Link
              href="/contato"
              className="px-10 py-5 rounded-2xl text-[1.6rem] font-bold border-2 border-white/20 text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300"
            >
              Solicitar proposta
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="grid grid-cols-1 gap-6"
        >
          {NUMEROS.map((n) => (
            <div key={n.rotulo} className="flex items-center gap-8 bg-white/5 border border-white/10 rounded-3xl px-10 py-8">
              <span className="text-[4.2rem] font-black text-white leading-none min-w-[9rem]">{n.valor}</span>
              <span className="text-[1.7rem] text-white/70">{n.rotulo}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);
