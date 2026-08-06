"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const MetricCard = ({ value, label, delay }: { value: string; label: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="bg-tramp-dark/5 p-12 rounded-[2.5rem] border border-black/5 hover:border-tramp-accent/30 hover:bg-white hover:shadow-2xl transition-all duration-300 group text-center"
  >
    <div className="text-[4rem] md:text-[5rem] font-black text-tramp-dark mb-4 transition-colors group-hover:text-tramp-accent leading-none">
      {value}
    </div>
    <div className="text-[1.6rem] md:text-[1.8rem] text-tramp-gray leading-tight font-medium">
      {label}
    </div>
  </motion.div>
);

export const AboutMetrics = () => {
  const { t } = useLanguage();
  const metrics = t.aboutMetrics.items;

  return (
    <section className="bg-white pb-32 overflow-hidden">
      <div className="container2025Redesign">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-tramp-accent font-bold text-[1.4rem] tracking-[0.2em] uppercase mb-4 block">
              {t.aboutMetrics.eyebrow}
            </span>
            <h2 className="text-balance text-[3.2rem] md:text-[4.5rem] font-black text-tramp-dark leading-[1.2]">
              {t.aboutMetrics.title}
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, idx) => (
            <MetricCard key={idx} value={m.value} label={m.label} delay={0.1 * idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
