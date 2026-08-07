"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface SolutionProps {
  id: string;
  tag: string;
  title: string;
  description: string;
  itemsLabel: string;
  items: string[];
  image: string;
  reverse?: boolean;
  ctaLabel: string;
}

const SolutionSection = ({ id, tag, title, description, itemsLabel, items, image, reverse, ctaLabel }: SolutionProps) => (
  <section id={id} className={`overflow-hidden border-b border-black/5 ${reverse ? "bg-tramp-bg-light/10" : "bg-white"}`}>
    <div className="container2025Redesign">
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${reverse ? "lg:flex-row-reverse" : ""}`}>
        {/* Text Area */}
        <motion.div
           initial={{ opacity: 0, x: reverse ? 30 : -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className={reverse ? "lg:order-2" : ""}
        >
          <span className="inline-block px-4 py-1 bg-tramp-accent/10 text-tramp-accent text-[1.3rem] font-bold uppercase tracking-widest rounded-lg mb-6">
            {tag}
          </span>
          <h2 className="text-balance text-[3.2rem] md:text-[4.2rem] font-black text-tramp-dark leading-[1.2] mb-8 tracking-tight">
            {title}
          </h2>
          <p className="text-[1.8rem] md:text-[2rem] leading-relaxed text-tramp-gray mb-10">
            {description}
          </p>

          <h4 className="text-[1.8rem] font-bold text-tramp-dark mb-6">{itemsLabel}:</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {items.map((item, idx) => (
              <li key={idx} className="flex items-center gap-4 text-[1.5rem] md:text-[1.6rem] text-tramp-gray-muted group cursor-default">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-tramp-accent/10 text-tramp-accent flex items-center justify-center font-bold text-[1rem]">✓</span>
                <span className="group-hover:translate-x-2 transition-transform duration-200">{item}</span>
              </li>
            ))}
          </ul>

          <Link 
            href="/contato"
            className="inline-flex items-center gap-3 bg-tramp-dark text-white px-10 py-5 rounded-2xl text-[1.7rem] font-bold shadow-xl hover:bg-tramp-accent transition-all duration-300"
          >
            {ctaLabel}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
        </motion.div>

        {/* Image Area */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className={`relative group ${reverse ? "lg:order-1" : ""}`}
        >
          <div className="absolute inset-0 bg-tramp-dark/5 rounded-[3rem] -z-10 group-hover:scale-105 transition-transform duration-500" />
          <img 
            src={image} 
            alt={title} 
            className="w-full h-auto rounded-[3rem] shadow-2xl hover:-translate-y-4 transition-transform duration-500"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

const solutionsMeta = [
  { id: "estrategia-ia", image: "/img_site/Solutions/SolutionEstrategia.jpeg", reverse: false },
  { id: "automacoes-agentes-software", image: "/img_site/Solutions/SolutionTecnologia.jpeg", reverse: true },
  { id: "jogos-gamificacao-experiencias", image: "/img_site/Solutions/SolutionsGames.jpeg", reverse: false },
  { id: "educacao-corporativa-ia", image: "/img_site/Solutions/SolutionsCapacitacao.jpeg", reverse: true },
  { id: "ergonomia-semiotica-fatores-humanos", image: "/img_site/Solutions/SolutionsFatoresHumanos.jpeg", reverse: false },
];

export const SolutionsDetail = () => {
  const { t } = useLanguage();
  const solutions = solutionsMeta.map((meta, idx) => ({
    ...meta,
    ...t.solutionsDetail.items[idx],
    ctaLabel: t.solutionsDetail.ctaLabel,
  }));

  return (
    <div className="bg-white">
      {solutions.map((s, idx) => (
        <SolutionSection key={idx} {...s} />
      ))}
    </div>
  );
};
