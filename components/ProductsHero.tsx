"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export const ProductsHero = () => {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-24 overflow-hidden bg-tramp-dark">
      {/* Background Gradient & Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-tramp-magenta/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-tramp-accent/10 blur-[100px] rounded-full" />
      </div>

      <div className="container2025Redesign relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Text Side */}
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-6 py-2 bg-white/5 border border-white/10 rounded-full text-tramp-accent text-[1.4rem] font-bold tracking-widest uppercase mb-8">
              {t.productsHero.eyebrow}
            </span>

            <h1 className="text-balance text-[3.2rem] md:text-[4.2rem] lg:text-[4.8rem] font-black text-white leading-[1.15] mb-8 tracking-tight">
              {t.productsHero.titleBefore}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">{t.productsHero.titleHighlight}</span>
            </h1>

            <p className="text-[1.6rem] md:text-[1.8rem] text-white/70 text-pretty leading-relaxed mb-12">
              {t.productsHero.paragraph}
            </p>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="hidden lg:block relative"
          >
             <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
               <img 
                 src="/img_site/ProductsHero.jpeg"
                 alt={t.productsHero.imageAlt}
                 className="w-full h-auto object-cover aspect-video hover:scale-110 transition-transform duration-700" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-tramp-dark via-transparent to-transparent opacity-60" />
             </div>
             
             {/* Floating Elements */}
             <div className="absolute -top-10 -right-10 bg-tramp-accent p-8 rounded-3xl shadow-2xl border border-white/10 animate-bounce-slow">
                <p className="text-white text-[2rem] font-black leading-tight">{t.productsHero.badgeLine1} <br /> <span className="text-white/70 text-[1.2rem] uppercase tracking-widest leading-none">{t.productsHero.badgeHighlight}</span></p>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
