"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, Users, CheckCircle2 } from "lucide-react";
import { CATEGORIAS, CURSOS } from "@/lib/cursos";

export const CoursesCatalog = () => {
  const [categoria, setCategoria] = useState<string | null>(null);
  const visiveis = categoria ? CURSOS.filter((c) => c.categoria === categoria) : CURSOS;

  return (
    <section id="catalogo" className="bg-white">
      <div className="container2025Redesign">
        <div className="max-w-[80rem] mb-12">
          <h2 className="text-[3.2rem] md:text-[4.2rem] font-black text-tramp-dark leading-[1.15] mb-6 text-balance">
            Catálogo de trilhas
          </h2>
          <p className="text-[1.7rem] text-tramp-gray text-pretty leading-relaxed">
            Cada trilha combina aulas em vídeo, exercícios e, quando indicado, aulas ao vivo e análise de vídeo por IA.
            Todas emitem certificado verificável ao final.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {[null, ...CATEGORIAS].map((cat) => (
            <button
              key={cat ?? "todas"}
              type="button"
              onClick={() => setCategoria(cat)}
              aria-pressed={categoria === cat}
              className={`px-6 py-3 rounded-full text-[1.5rem] font-bold border transition-all duration-200 ${
                categoria === cat
                  ? "bg-tramp-dark text-white border-tramp-dark"
                  : "bg-white text-tramp-dark/70 border-tramp-dark/15 hover:border-tramp-dark/40"
              }`}
            >
              {cat ?? "Todas"}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {visiveis.map((curso, i) => (
            <motion.article
              key={curso.id}
              id={curso.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex flex-col rounded-[2.4rem] overflow-hidden border border-black/5 shadow-[0_10px_40px_-15px_rgba(34,0,65,0.25)] bg-white"
            >
              <div className={`bg-gradient-to-br ${curso.gradiente} p-8 text-white`}>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-4 py-1.5 rounded-full bg-white/20 text-[1.25rem] font-bold uppercase tracking-wider">
                    {curso.categoria}
                  </span>
                  <span className="text-[1.3rem] font-bold text-white/85">{curso.nivel}</span>
                </div>
                <h3 className="text-[2.3rem] font-black leading-tight text-balance">{curso.titulo}</h3>
              </div>

              <div className="flex flex-col flex-1 p-8 gap-6">
                <p className="text-[1.55rem] text-tramp-gray-muted leading-relaxed">{curso.resumo}</p>

                <div className="flex flex-wrap gap-x-6 gap-y-2 text-[1.4rem] text-tramp-gray">
                  <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4" /> {curso.cargaHoraria}</span>
                  <span className="inline-flex items-center gap-2"><Users className="w-4 h-4" /> {curso.publico}</span>
                </div>

                <ul className="flex flex-col gap-2">
                  {curso.resultados.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-[1.45rem] text-tramp-dark/80">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0 text-tramp-magenta" /> {r}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {curso.formatos.map((f) => (
                    <span key={f} className="px-3 py-1 rounded-lg bg-tramp-bg-light text-tramp-navy text-[1.25rem] font-semibold">
                      {f}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/contato?curso=${curso.id}`}
                  className="mt-2 text-center px-6 py-4 rounded-2xl text-[1.5rem] font-bold border-2 border-tramp-dark/15 text-tramp-dark hover:border-tramp-magenta hover:text-tramp-magenta transition-all duration-300"
                >
                  Quero para minha empresa
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
