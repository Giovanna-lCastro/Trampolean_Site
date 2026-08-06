"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export const AboutStory = () => {
  const { t } = useLanguage();
  return (
    <section id="historia" className="bg-white py-32 overflow-hidden border-b border-black/5">
      <div className="container2025Redesign">
        <div className="flex flex-wrap lg:flex-nowrap gap-16 items-start">
          {/* Section Title & Label */}
          <div className="w-full lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-tramp-accent font-bold text-[1.4rem] tracking-[0.2em] uppercase mb-4 block">
                {t.aboutStory.eyebrow}
              </span>
              <h2 className="text-balance text-[3.2rem] md:text-[4.5rem] font-black text-tramp-dark leading-[1.2] mb-8">
                {t.aboutStory.title}
              </h2>
            </motion.div>
          </div>

          {/* Content Texts */}
          <div className="w-full lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <p className="text-[1.8rem] md:text-[2rem] leading-relaxed text-tramp-gray">
                {t.aboutStory.paragraphs[0]}
              </p>
              <p className="text-[1.8rem] md:text-[2rem] leading-relaxed text-tramp-gray">
                {t.aboutStory.paragraphs[1]}
              </p>
              <p className="text-[1.8rem] md:text-[2rem] leading-relaxed text-tramp-gray font-medium italic border-l-4 border-tramp-accent pl-8 py-2">
                {t.aboutStory.paragraphs[2]}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
