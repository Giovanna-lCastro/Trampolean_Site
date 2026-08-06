"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export const CompetenceStrip = () => {
  const { t } = useLanguage();
  const items = t.competenceStrip.items;

  return (
    <section className="bg-tramp-dark border-b border-white/10 py-10">
      <div className="container2025Redesign !py-0">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {items.map((item, idx) => (
            <span
              key={item}
              className="group flex items-center gap-2 text-[1.3rem] md:text-[1.4rem] font-semibold uppercase tracking-wider text-tramp-accent text-center px-5 py-2 rounded-full border border-tramp-accent/30 bg-tramp-accent/10 hover:bg-tramp-accent/20 hover:border-tramp-accent/50 transition-colors duration-300"
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-tramp-accent animate-pulse"
                style={{ animationDelay: `${idx * 0.2}s` }}
              ></span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
