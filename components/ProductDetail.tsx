"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface ProductProps {
  id: string;
  tag: string;
  title: string;
  description: string;
  fullDescription: string;
  benefits: string[];
  image: string;
  reverse?: boolean;
  ctaLabel: string;
  ctaHref: string;
  ctaExternal?: boolean;
  ctaDownload?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  secondaryDownload?: string;
}

const DownloadIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

const ProductSection = ({ id, tag, title, description, fullDescription, benefits, image, reverse, ctaLabel, ctaHref, ctaExternal, ctaDownload, secondaryLabel, secondaryHref, secondaryDownload }: ProductProps) => (
  <section id={id} className={`overflow-hidden border-b border-black/5 ${reverse ? "bg-tramp-bg-light/10" : "bg-white"}`}>
    <div className="container2025Redesign">
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${reverse ? "lg:flex-row-reverse" : ""}`}>
        {/* Text Area */}
        <motion.div
           initial={{ opacity: 0, x: reverse ? 30 : -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className={reverse ? "lg:order-2" : ""}
        >
          <span className="inline-block px-4 py-1 bg-tramp-accent/10 text-tramp-accent text-[1.3rem] font-bold uppercase tracking-widest rounded-lg mb-6">
            {tag}
          </span>
          <h2 className="text-balance text-[3.2rem] md:text-[4.5rem] font-black text-tramp-dark leading-[1.2] mb-6 tracking-tight">
            {title}
          </h2>
          <h3 className="text-[1.8rem] md:text-[2.2rem] font-semibold text-tramp-gray/80 mb-8 italic">
            {description}
          </h3>
          <p className="text-[1.6rem] md:text-[1.8rem] leading-relaxed text-tramp-gray mb-10">
            {fullDescription}
          </p>

          <ul className="space-y-4 mb-12">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-center gap-4 text-[1.5rem] md:text-[1.7rem] text-tramp-gray-muted group cursor-default">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-tramp-accent/10 text-tramp-accent flex items-center justify-center font-bold">✓</span>
                <span className="group-hover:translate-x-2 transition-transform duration-200">{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-5">
            {ctaExternal ? (
              <a
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-tramp-dark text-white px-10 py-5 rounded-2xl text-[1.7rem] font-bold shadow-xl hover:bg-tramp-accent transition-all duration-300"
              >
                {ctaLabel}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
              </a>
            ) : ctaDownload ? (
              <a
                href={ctaHref}
                download={ctaDownload}
                className="inline-flex items-center gap-3 bg-tramp-dark text-white px-10 py-5 rounded-2xl text-[1.7rem] font-bold shadow-xl hover:bg-tramp-accent transition-all duration-300"
              >
                {ctaLabel}
                <DownloadIcon />
              </a>
            ) : (
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-3 bg-tramp-dark text-white px-10 py-5 rounded-2xl text-[1.7rem] font-bold shadow-xl hover:bg-tramp-accent transition-all duration-300"
              >
                {ctaLabel}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
            )}

            {secondaryLabel && secondaryHref && (
              <a
                href={secondaryHref}
                download={secondaryDownload}
                className="inline-flex items-center gap-3 bg-tramp-accent/10 text-tramp-accent px-10 py-5 rounded-2xl text-[1.7rem] font-bold hover:bg-tramp-accent/20 transition-all duration-300"
              >
                {secondaryLabel}
                <DownloadIcon />
              </a>
            )}
          </div>
        </motion.div>

        {/* Image Area */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className={`relative group ${reverse ? "lg:order-1" : ""}`}
        >
          <div className="absolute inset-0 bg-tramp-dark/5 rounded-[3rem] -z-10 group-hover:scale-105 transition-transform duration-500" />
          <img 
            src={image} 
            alt={title} 
            className="w-full h-auto rounded-[3rem] shadow-2xl hover:-translate-y-4 transition-transform duration-500"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

const productsMeta = [
  {
    id: "manual-etica",
    image: "https://images.unsplash.com/photo-1544396821-4dd40b938ad3?q=80&w=800&auto=format&fit=crop",
    reverse: false,
    ctaHref: "/downloads/manual-etica-ia.pdf",
    ctaDownload: "Manual-Etica-IA-Trampolean.pdf",
  },
  {
    id: "book-wizard",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop",
    reverse: true,
    ctaHref: "/contato",
  },
  {
    id: "player-2",
    image: "/products/Player2Banner.jpeg",
    reverse: false,
    ctaHref: "https://assetstore.unity.com/packages/tools/generative-ai/player-2-ai-project-architect-344526",
    ctaExternal: true,
  },
  {
    id: "kapta",
    image: "/products/KaptaBanner.jpeg",
    reverse: true,
    ctaHref: "/contato",
    secondaryHref: "/downloads/mudanca-climatica.pdf",
    secondaryDownload: "Mudanca-Climatica-Trampolean.pdf",
  },
];

export const ProductDetail = () => {
  const { t } = useLanguage();
  const products = productsMeta.map((meta, idx) => ({
    ...meta,
    ...t.productDetail.items[idx],
    ctaLabel: meta.ctaExternal
      ? t.productDetail.unityStoreLabel
      : meta.ctaDownload
      ? t.productDetail.downloadLabel
      : t.productDetail.ctaLabel,
    secondaryLabel: meta.secondaryHref ? t.productDetail.climateDownloadLabel : undefined,
  }));

  return (
    <div className="bg-white">
      {products.map((p, idx) => (
        <ProductSection key={idx} {...p} />
      ))}
    </div>
  );
};
