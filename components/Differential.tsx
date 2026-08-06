"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export const Differential = () => {
  const { t } = useLanguage();
  const pillars = t.differential.pillars;

  return (
    <section className="bg-white">
      <div className="container2025Redesign">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-tramp-magenta/10 text-tramp-magenta text-[1.3rem] font-bold uppercase tracking-widest rounded-lg mb-6">
            {t.differential.eyebrow}
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-balance text-[3rem] md:text-[4rem] text-tramp-navy font-black leading-tight tracking-tight mb-8"
          >
            {t.differential.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[1.8rem] md:text-[2.1rem] text-tramp-gray text-pretty leading-relaxed"
          >
            {t.differential.paragraph}
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + idx * 0.1 }}
              className="p-8 rounded-[2rem] border border-tramp-navy/5 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.04)] text-left h-full"
            >
              <h3 className="text-[1.7rem] font-bold text-tramp-navy mb-3 tracking-tight">
                {pillar.title}
              </h3>
              <p className="text-[1.4rem] text-tramp-gray leading-relaxed opacity-80">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
