"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from "@/lib/i18n/LanguageContext";

export const PressSection = () => {
  const { t } = useLanguage();
  const [article1, article2, article3] = t.pressSection.articles;

  return (
    <section className="bg-gray-50 border-y border-gray-200 overflow-hidden">
      <div className="container2025Redesign">
        <div className="text-center flex flex-col items-center mb-16 md:mb-20">
          <div className="inline-block bg-tramp-accent text-white px-8 py-3 rounded-full mb-8 shadow-[0_10px_20px_-5px_rgba(240,36,246,0.4)]">
            <h2 className="uppercase tracking-widest font-extrabold text-[1.4rem]">{t.pressSection.badge}</h2>
          </div>
          <h3 className="text-[3.5rem] md:text-[5rem] font-extrabold text-tramp-dark tracking-tight">
            {t.pressSection.title}
          </h3>
        </div>

        {/* Z-Pattern Block 1: São Paulo Innovation Week */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Lado Esquerdo: Imagem */}
          <div className="fire-animation animate-left-to-right relative h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
            <Image
              src="/noticia_e_img/SPIW/SPIW.jpg"
              alt={article1.imageAlt}
              fill
              priority
              className="object-cover object-center hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Lado Direito: Texto */}
          <div className="fire-animation animate-right-to-left flex flex-col justify-center">
            <span className="text-tramp-cyan font-extrabold uppercase tracking-widest text-[1.4rem] mb-4">
              {article1.source}
            </span>
            <h4 className="text-[3rem] md:text-[4rem] font-extrabold text-tramp-dark leading-[1.1] mb-6">
              {article1.title}
            </h4>
            <p className="text-[1.6rem] md:text-[1.8rem] text-gray-800 leading-relaxed mb-8 font-medium">
              {article1.paragraph}
            </p>
          </div>

        </div>

        {/* Z-Pattern Block 2: SciBiz USP */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-24 lg:mt-32">

          {/* Lado Esquerdo: Texto */}
          <div className="fire-animation animate-left-to-right flex flex-col justify-center order-2 lg:order-1">
            <span className="text-tramp-cyan font-extrabold uppercase tracking-widest text-[1.4rem] mb-4">
              {article2.source}
            </span>
            <h4 className="text-[3rem] md:text-[4rem] font-extrabold text-tramp-dark leading-[1.1] mb-6">
              {article2.title}
            </h4>
            <p className="text-[1.6rem] md:text-[1.8rem] text-gray-800 leading-relaxed mb-8 font-medium">
              {article2.paragraph}
            </p>
          </div>

          {/* Lado Direito: Imagem */}
          <div className="fire-animation animate-right-to-left relative h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl order-1 lg:order-2">
            <Image
              src="/noticia_e_img/SciBiz/IMG-20260514-WA0045.jpg"
              alt={article2.imageAlt}
              fill
              className="object-cover object-center hover:scale-105 transition-transform duration-700"
            />
          </div>

        </div>

        {/* Z-Pattern Block 3: Forbes Tech */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-24 lg:mt-32">

          {/* Lado Esquerdo: Imagem (Volta para a ordem original para fechar o Z) */}
          <div className="fire-animation animate-left-to-right relative h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl order-1">
            <Image
              src="/noticia_e_img/Forbes/ChatGPT Image 27 de mai. de 2026, 21_25_11.png"
              alt={article3.imageAlt}
              fill
              className="object-cover object-center hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Lado Direito: Texto */}
          <div className="fire-animation animate-right-to-left flex flex-col justify-center order-2">
            <span className="text-tramp-cyan font-extrabold uppercase tracking-widest text-[1.4rem] mb-4">
              {article3.source}
            </span>
            <h4 className="text-[3rem] md:text-[4rem] font-extrabold text-tramp-dark leading-[1.1] mb-6">
              {article3.title}
            </h4>
            <p className="text-[1.6rem] md:text-[1.8rem] text-gray-800 leading-relaxed mb-8 font-medium">
              {article3.paragraph}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
