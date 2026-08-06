"use client";

import { SectionIntro } from "@/components/SectionIntro";
import { AboutCTA } from "@/components/AboutCTA";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export const ProductsIntro = () => {
  const { t } = useLanguage();
  return (
    <SectionIntro
      title={t.productsPage.introTitle}
      quote={t.productsPage.introQuote}
    />
  );
};

export const ProductsPageCTA = () => {
  const { t } = useLanguage();
  return (
    <AboutCTA
      title={t.productsPage.ctaTitle}
      description={t.productsPage.ctaDescription}
      buttonLabel={t.productsPage.ctaButton}
      buttonHref="/contato"
    />
  );
};
