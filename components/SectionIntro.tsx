"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionIntroProps {
  title: string;
  quote: string;
  accent?: "accent" | "magenta";
}

export const SectionIntro = ({ title, quote, accent = "accent" }: SectionIntroProps) => {
  const borderClass = accent === "magenta" ? "border-tramp-magenta" : "border-tramp-accent";

  return (
    <div className="bg-white py-24 border-b border-black/5">
      <div className="container2025Redesign text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[3.2rem] md:text-[4.5rem] font-black text-tramp-dark mb-6"
        >
          {title}
        </motion.h2>
        <div className="text-center">
          <p className={`text-[1.8rem] md:text-[2rem] text-tramp-gray max-w-4xl mx-auto leading-relaxed italic border-l-4 ${borderClass} pl-8 inline-block text-left`}>
            {quote}
          </p>
        </div>
      </div>
    </div>
  );
};
