"use client";

import React from "react";
import { Rocket, Bot, Gamepad2, BookOpen, HeartPulse } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const pillarIcons = [
  <Rocket key="rocket" className="w-16 h-16 text-tramp-magenta" />,
  <Bot key="bot" className="w-16 h-16 text-tramp-magenta" />,
  <Gamepad2 key="gamepad" className="w-16 h-16 text-tramp-magenta" />,
  <BookOpen key="book" className="w-16 h-16 text-tramp-magenta" />,
  <HeartPulse key="heart" className="w-16 h-16 text-tramp-magenta" />,
];

export const Features = () => {
  const { t } = useLanguage();
  const pillars = t.features.pillars.map((pillar, idx) => ({
    ...pillar,
    icon: pillarIcons[idx],
  }));

  return (
    <section className="bg-white border-b border-tramp-navy/5">
      <div className="container2025Redesign">
        {/* Z-Pattern Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <span className="inline-block px-4 py-1 bg-tramp-magenta/10 text-tramp-magenta text-[1.3rem] font-bold uppercase tracking-widest rounded-lg mb-6">
              {t.features.eyebrow}
            </span>
            <h2 className="text-[3.5rem] md:text-[5.5rem] text-tramp-navy font-black mb-10 leading-[1.1] tracking-tight">
              {t.features.titleLine1}<br /> <span className="text-tramp-magenta">{t.features.titleLine2}</span>
            </h2>
            <div className="space-y-6">
              <p className="text-[1.8rem] md:text-[2.1rem] text-tramp-gray leading-relaxed">
                {t.features.paragraph}
              </p>
              <p className="text-[1.6rem] md:text-[1.8rem] text-tramp-gray/70 leading-relaxed italic border-l-4 border-tramp-magenta pl-8">
                {t.features.quote}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-tramp-magenta/10 blur-[100px] rounded-full"></div>
            <img
              src="/img_site/times_usando_ia.png"
              alt={t.features.imageAlt}
              className="relative z-10 w-full rounded-[3rem] shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-12 rounded-[2.5rem] border border-tramp-navy/5 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_80px_rgba(130,0,250,0.12)] hover:-translate-y-3 transition-all duration-500 text-left h-full flex flex-col justify-between"
            >
              <div>
                <div className="mb-10 transform group-hover:scale-110 transition-transform duration-500 origin-left">
                  {pillar.icon}
                </div>
                <h3 className="text-[2.2rem] font-bold text-tramp-navy mb-6 tracking-tight group-hover:text-tramp-magenta transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-[1.6rem] text-tramp-gray leading-relaxed opacity-80">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-10 h-1 w-12 bg-tramp-magenta/20 group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
