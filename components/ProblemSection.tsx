"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, ShieldCheck, Code2, Gamepad2, Rocket, Megaphone, Download, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const deckMeta = [
  { icon: GraduationCap, file: "/downloads/01_educacao_sistemas.pdf" },
  { icon: ShieldCheck, file: "/downloads/02_grandes_organizacoes.pdf" },
  { icon: Code2, file: "/downloads/03_pmes_software.pdf" },
  { icon: Gamepad2, file: "/downloads/04_jogos_gamificacao.pdf" },
  { icon: Rocket, file: "/downloads/05_mentoria.pdf" },
  { icon: Megaphone, file: "/downloads/06_redes_posicionamento.pdf" },
];

export const ProblemSection = () => {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);

  const deck = deckMeta.map((meta, idx) => ({
    ...meta,
    ...t.problemSection.deck[idx],
  }));

  const total = deck.length;

  const go = (dir: number) => setActive((prev) => (prev + dir + total) % total);

  return (
    <section className="bg-white">
      <div className="container2025Redesign text-center">
        <span className="inline-block px-4 py-1 bg-tramp-magenta/10 text-tramp-magenta text-[1.3rem] font-bold uppercase tracking-widest rounded-lg mb-6">
          {t.problemSection.eyebrow}
        </span>
        <h2 className="text-balance text-[3rem] md:text-[3.8rem] lg:text-[4.2rem] text-tramp-navy font-black leading-tight tracking-tight mb-8">
          {t.problemSection.title}
        </h2>
        <p className="text-[1.8rem] md:text-[2.1rem] text-tramp-gray text-pretty leading-relaxed mb-16">
          {t.problemSection.paragraph}
        </p>

        {/* Galeria do Deck de Serviço */}
        <div className="max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1 bg-tramp-cyan/10 text-tramp-cyan text-[1.3rem] font-bold uppercase tracking-widest rounded-lg mb-4">
            {t.problemSection.deckEyebrow}
          </span>
          <p className="text-[1.6rem] text-tramp-gray">
            {t.problemSection.deckIntro}
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
                      {t.problemSection.downloadLabel}
                    </div>
                  )}
                </motion.a>
              );
            })}
          </div>

          {/* Setas */}
          <button
            onClick={() => go(-1)}
            aria-label={t.problemSection.prevLabel}
            className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white border border-tramp-navy/10 shadow-lg flex items-center justify-center text-tramp-navy hover:bg-tramp-magenta hover:text-white hover:border-tramp-magenta transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label={t.problemSection.nextLabel}
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
                aria-label={t.problemSection.goToItemLabel.replace("{n}", String(idx + 1))}
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
