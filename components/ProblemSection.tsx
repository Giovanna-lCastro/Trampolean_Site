"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, ShieldCheck, Code2, Gamepad2, Rocket, Megaphone, Download, ChevronLeft, ChevronRight } from "lucide-react";

const deck = [
  {
    icon: GraduationCap,
    tag: "Para gestores de sistemas educacionais",
    title: "Educar para a era da IA, no ritmo da nova geração.",
    description: "Formação em IA, metodologias ativas e Geração Z.",
    file: "/downloads/01_educacao_sistemas.pdf",
  },
  {
    icon: ShieldCheck,
    tag: "Para gestores de grandes organizações",
    title: "Proteger pessoas e preparar sua organização para a IA.",
    description: "Ergonomia, fatores humanos e formação em IA.",
    file: "/downloads/02_grandes_organizacoes.pdf",
  },
  {
    icon: Code2,
    tag: "Para gestores de PMEs",
    title: "Software sob medida para PMEs que querem crescer.",
    description: "Sistemas, apps, automações e IA.",
    file: "/downloads/03_pmes_software.pdf",
  },
  {
    icon: Gamepad2,
    tag: "Jogos digitais e gamificação",
    title: "Jogos que fazem as pessoas aprender, decidir e mudar.",
    description: "Serious games, gamificação e realidade virtual.",
    file: "/downloads/04_jogos_gamificacao.pdf",
  },
  {
    icon: Rocket,
    tag: "Mentoria profissional: empreendedorismo & IA",
    title: "Construa um negócio digital na velocidade da IA.",
    description: "Mentoria profissional e empreendedorismo digital.",
    file: "/downloads/05_mentoria.pdf",
  },
  {
    icon: Megaphone,
    tag: "Gestão de redes sociais e posicionamento",
    title: "Transforme autoridade em presença que converte.",
    description: "Posicionamento, conteúdo e gestão de redes.",
    file: "/downloads/06_redes_posicionamento.pdf",
  },
];

export const ProblemSection = () => {
  const [active, setActive] = useState(0);
  const total = deck.length;

  const go = (dir: number) => setActive((prev) => (prev + dir + total) % total);

  return (
    <section className="bg-white">
      <div className="container2025Redesign text-center">
        <span className="inline-block px-4 py-1 bg-tramp-magenta/10 text-tramp-magenta text-[1.3rem] font-bold uppercase tracking-widest rounded-lg mb-6">
          Transformação com Aplicação Real
        </span>
        <h2 className="text-balance text-[3rem] md:text-[3.8rem] lg:text-[4.2rem] text-tramp-navy font-black leading-tight tracking-tight mb-8">
          Digitalizar exige compreender tecnologia, trabalho e pessoas.
        </h2>
        <p className="text-[1.8rem] md:text-[2.1rem] text-tramp-gray text-pretty leading-relaxed mb-16">
          Projetos de transformação falham quando automatizam processos mal compreendidos, adotam ferramentas sem preparar equipes ou desenvolvem interfaces que não fazem sentido para quem as utiliza. A Trampolean integra diagnóstico, aprendizagem, linguagem, fatores humanos e tecnologia para construir soluções aplicáveis e sustentáveis.
        </p>

        {/* Galeria do Deck de Serviço */}
        <div className="max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1 bg-tramp-cyan/10 text-tramp-cyan text-[1.3rem] font-bold uppercase tracking-widest rounded-lg mb-4">
            Deck de Serviço
          </span>
          <p className="text-[1.6rem] text-tramp-gray">
            Baixe a apresentação completa de cada frente de atuação da Trampolean.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative h-[460px] md:h-[420px] flex items-center justify-center">
            {deck.map((item, idx) => {
              let offset = idx - active;
              if (offset > total / 2) offset -= total;
              if (offset < -total / 2) offset += total;

              const isCenter = offset === 0;
              const abs = Math.abs(offset);
              if (abs > 1) return null;

              const Icon = item.icon;
              return (
                <motion.a
                  key={item.title}
                  href={isCenter ? item.file : undefined}
                  download={isCenter}
                  onClick={(e) => {
                    if (!isCenter) {
                      e.preventDefault();
                      setActive(idx);
                    }
                  }}
                  animate={{
                    x: offset * 300,
                    scale: isCenter ? 1 : 0.82,
                    opacity: isCenter ? 1 : 0.35,
                    zIndex: isCenter ? 20 : 10,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 32 }}
                  className={`absolute w-[300px] md:w-[320px] p-8 rounded-[2rem] border bg-white flex flex-col text-left cursor-pointer ${
                    isCenter
                      ? "border-tramp-magenta/30 shadow-[0_25px_60px_rgba(240,36,246,0.18)]"
                      : "border-tramp-navy/5 shadow-[0_20px_50px_rgba(0,0,0,0.04)] pointer-events-none md:pointer-events-auto"
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-tramp-bg-light flex items-center justify-center text-tramp-magenta mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[1.1rem] font-bold uppercase tracking-widest text-tramp-cyan mb-3">
                    {item.tag}
                  </span>
                  <h3 className="text-[1.6rem] font-bold text-tramp-navy mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[1.35rem] text-tramp-gray leading-relaxed opacity-80 mb-6 flex-1">
                    {item.description}
                  </p>
                  {isCenter && (
                    <div className="flex items-center gap-2 text-tramp-magenta font-bold text-[1.3rem]">
                      <Download className="w-4 h-4" />
                      Baixar PDF
                    </div>
                  )}
                </motion.a>
              );
            })}
          </div>

          {/* Setas */}
          <button
            onClick={() => go(-1)}
            aria-label="Anterior"
            className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white border border-tramp-navy/10 shadow-lg flex items-center justify-center text-tramp-navy hover:bg-tramp-magenta hover:text-white hover:border-tramp-magenta transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Próximo"
            className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white border border-tramp-navy/10 shadow-lg flex items-center justify-center text-tramp-navy hover:bg-tramp-magenta hover:text-white hover:border-tramp-magenta transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-8">
            {deck.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                aria-label={`Ir para o item ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === active ? "w-8 bg-tramp-magenta" : "w-2.5 bg-tramp-navy/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
