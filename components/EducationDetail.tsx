"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface EducationProps {
  id: string;
  tag: string;
  title: string;
  description: string;
  forWhom: string;
  image: string;
  reverse?: boolean;
  forWhomLabel: string;
  ctaLabel: string;
}

const EducationSection = ({ id, tag, title, description, forWhom, image, reverse, forWhomLabel, ctaLabel }: EducationProps) => (
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
          <span className="inline-block px-4 py-1 bg-tramp-magenta/10 text-tramp-magenta text-[1.3rem] font-bold uppercase tracking-widest rounded-lg mb-6">
            {tag}
          </span>
          <h2 className="text-[3.2rem] md:text-[4.5rem] font-black text-tramp-dark leading-[1.2] mb-6 tracking-tight text-balance">
            {title}
          </h2>
          <p className="text-[1.6rem] md:text-[1.8rem] leading-relaxed text-tramp-gray mb-8">
            {description}
          </p>

          <div className="mb-10 p-6 bg-tramp-dark/5 rounded-2xl border border-black/5">
             <h4 className="text-[1.4rem] font-bold text-tramp-dark uppercase tracking-wider mb-2">{forWhomLabel}</h4>
             <p className="text-[1.5rem] text-tramp-gray-muted">{forWhom}</p>
          </div>

          <Link
            href="/contato"
            className="inline-flex items-center gap-3 bg-tramp-dark text-white px-10 py-5 rounded-2xl text-[1.7rem] font-bold shadow-xl hover:bg-tramp-magenta transition-all duration-300"
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

const programsMeta = [
  { id: "ia-liderancas", image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop", reverse: false },
  { id: "ia-aplicada-trabalho", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop", reverse: true },
  { id: "ia-educacao", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop", reverse: false },
  { id: "governanca-uso-responsavel", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop", reverse: true },
  { id: "trilhas-universidades-corporativas", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop", reverse: false },
];

export const EducationDetail = () => {
  const { t } = useLanguage();
  const programs = programsMeta.map((meta, idx) => ({
    ...meta,
    ...t.educationDetail.items[idx],
    forWhomLabel: t.educationDetail.forWhomLabel,
    ctaLabel: t.educationDetail.ctaLabel,
  }));

  return (
    <div className="bg-white">
      {programs.map((p, idx) => (
        <EducationSection key={idx} {...p} />
      ))}
    </div>
  );
};
