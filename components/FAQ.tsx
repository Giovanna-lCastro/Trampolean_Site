"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { pt } from "@/lib/i18n/pt";

export const FAQ = () => {
  const { t } = useLanguage();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pt.faq.items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="bg-tramp-bg-light/20 border-y border-black/5">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="container2025Redesign">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-tramp-accent/10 text-tramp-accent text-[1.3rem] font-bold uppercase tracking-widest rounded-lg mb-6">
            {t.faq.eyebrow}
          </span>
          <h2 className="text-[3.2rem] md:text-[4.5rem] font-black text-tramp-dark">
            {t.faq.title}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {t.faq.items.map((faq, idx) => (
            <details
              key={idx}
              className="group bg-white rounded-3xl border border-black/5 shadow-sm open:shadow-md transition-all"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between gap-6 px-10 py-8 text-[1.8rem] font-bold text-tramp-dark">
                {faq.question}
                <span className="flex-shrink-0 text-tramp-accent text-[2rem] transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="px-10 pb-8 text-[1.6rem] leading-relaxed text-tramp-gray">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
