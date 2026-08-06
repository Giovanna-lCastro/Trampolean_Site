"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface FeatureRowProps {
  title: string;
  subtitle: string;
  description: string;
  items: string[];
  image: string;
  reverse?: boolean;
  buttonText?: string;
}

const FeatureRow = ({ title, subtitle, description, items, image, reverse, buttonText }: FeatureRowProps) => (
  <div className={`container2025Redesign !py-16 md:!py-20 flex flex-wrap items-center gap-16 ${reverse ? "flex-row-reverse" : "flex-row"}`}>
    <div className="flex-1 min-w-[320px] md:min-w-[400px]">
      <h3 className="text-[1.4rem] uppercase tracking-[2px] text-tramp-cyan mb-4 font-bold">{subtitle}</h3>
      <h2 className="text-[3.2rem] md:text-[3.6rem] text-tramp-navy mb-6 font-extrabold leading-tight">{title}</h2>
      <p className="text-[1.8rem] leading-relaxed text-tramp-gray mb-8">{description}</p>
      <ul className="list-none p-0">
        {items.map((item: string, i: number) => (
          <li key={i} className="flex items-center gap-3 mb-3 text-tramp-gray-muted text-[1.6rem]">
            <span className="text-tramp-cyan font-bold text-[1.8rem]">✓</span> {item}
          </li>
        ))}
      </ul>
      <Link
        href="/contato"
        className="inline-block mt-10 px-10 py-4 bg-tramp-navy text-white rounded-xl font-bold text-[1.6rem] shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
      >
        {buttonText || "Conheça as soluções"}
      </Link>
    </div>
    <div className="flex-1 min-w-[320px] md:min-w-[400px] relative group">
      {/* Decorative Background */}
      <div className="absolute top-[10%] left-[10%] w-full h-full bg-gradient-to-br from-tramp-bg-light to-tramp-bg-cyan rounded-[2.5rem] -z-10 group-hover:scale-105 transition-transform duration-500"></div>
      <img
        src={image}
        alt={title}
        className="w-full rounded-[2.5rem] shadow-2xl transition-transform duration-500 group-hover:-translate-y-2"
      />
    </div>
  </div>
);

const solutionsMeta = [
  { image: "/noticia_e_img/Imagens/Congresso.jpg", reverse: false },
  { image: "/noticia_e_img/Imagens/EAD.jpg", reverse: true },
  { image: "/img_site/reflexao.png", reverse: false },
  { image: "/noticia_e_img/Imagens/SST.jpg", reverse: true },
  { image: "/img_site/Persona 01.webp", reverse: false },
];

export const Solutions = () => {
  const { t } = useLanguage();
  const solutions = solutionsMeta.map((meta, idx) => ({
    ...meta,
    ...t.solutions.items[idx],
    buttonText: t.solutions.items[idx].buttonText || t.solutions.defaultButtonText,
  }));

  return (
    <section id="solucoes" className="bg-white overflow-hidden">
      <div className="container2025Redesign text-center !pb-0 mb-10 md:mb-16">
        <span className="inline-block px-4 py-1 bg-tramp-magenta/10 text-tramp-magenta text-[1.3rem] font-bold uppercase tracking-widest rounded-lg mb-6">
          {t.solutions.eyebrow}
        </span>
        <h2 className="text-[3.5rem] md:text-[4.5rem] text-tramp-navy font-black leading-tight tracking-tight">
          {t.solutions.titleBefore}<span className="text-transparent bg-clip-text bg-gradient-to-r from-tramp-gradient-start to-tramp-gradient-end">{t.solutions.titleHighlight}</span>
        </h2>
        <p className="mt-6 text-tramp-gray opacity-80 text-[1.8rem] md:text-[2.1rem] text-pretty leading-relaxed">
          {t.solutions.subtitle}
        </p>
      </div>
      {solutions.map((s, idx) => (
        <FeatureRow key={idx} {...s} />
      ))}
    </section>
  );
};
