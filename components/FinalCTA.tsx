"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export const FinalCTA = () => {
  const { t } = useLanguage();

  return (
    <section id="cta-final" className="bg-tramp-purple-dark text-white relative overflow-hidden border-t border-white/5">
       {/* High-end background finish */}
       <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-tramp-dark to-transparent z-0"></div>

       <div className="container2025Redesign relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-balance text-[3.2rem] md:text-[4.8rem] font-black mb-10 leading-tight tracking-tight"
          >
             {t.finalCTA.titleBefore}<span className="text-tramp-magenta">{t.finalCTA.titleHighlight}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-16 opacity-80 text-[1.8rem] md:text-[2.2rem] text-pretty leading-relaxed"
          >
             {t.finalCTA.paragraph}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-6 justify-center items-center"
          >
             <a href="/contato" className="btn-premium-purple px-12 py-6 rounded-2xl text-[1.7rem] font-bold shadow-2xl">
                {t.finalCTA.ctaLabel}
             </a>
          </motion.div>
       </div>
    </section>
  );
};
