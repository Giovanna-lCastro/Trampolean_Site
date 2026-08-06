"use client";

import Link from "next/link";
import { SectionIntro } from "@/components/SectionIntro";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export const SolutionsIntro = () => {
  const { t } = useLanguage();
  return (
    <SectionIntro
      title={t.solutionsPage.introTitle}
      quote={t.solutionsPage.introQuote}
    />
  );
};

export const SolutionsPageCTA = () => {
  const { t } = useLanguage();
  return (
    <section className="bg-tramp-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[40%] h-full bg-tramp-accent/5 -skew-x-12 translate-x-1/2" />

      <div className="container2025Redesign relative z-10 text-center">
        <h2 className="text-balance text-[3.5rem] md:text-[5.5rem] font-black text-white leading-[1.1] mb-8">
          {t.solutionsPage.ctaTitle}
        </h2>

        <p className="text-[1.8rem] md:text-[2.2rem] text-white/70 max-w-3xl mx-auto leading-relaxed mb-12">
          {t.solutionsPage.ctaParagraph}
        </p>

        <Link
          href="/contato"
          className="inline-block bg-white text-tramp-dark px-16 py-6 rounded-2xl text-[1.8rem] font-black shadow-2xl hover:bg-tramp-accent hover:text-white hover:scale-105 active:scale-95 transition-all duration-300"
        >
          {t.solutionsPage.ctaButton}
        </Link>
      </div>
    </section>
  );
};
