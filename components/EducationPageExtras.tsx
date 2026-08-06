"use client";

import { SectionIntro } from "@/components/SectionIntro";
import { AboutCTA } from "@/components/AboutCTA";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export const EducationIntro = () => {
  const { t } = useLanguage();
  return (
    <SectionIntro
      title={t.educationPage.introTitle}
      quote={t.educationPage.introQuote}
      accent="magenta"
    />
  );
};

export const EducationPageCTA = () => {
  const { t } = useLanguage();
  return <AboutCTA title={t.educationPage.ctaTitle} buttonLabel={t.educationPage.ctaButton} />;
};
