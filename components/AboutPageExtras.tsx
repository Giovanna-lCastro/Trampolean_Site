"use client";

import { AboutCTA } from "@/components/AboutCTA";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export const AboutPageCTA = () => {
  const { t } = useLanguage();
  return (
    <AboutCTA
      title={
        <>
          {t.aboutPage.ctaTitleLine1} <br className="hidden md:block" /> {t.aboutPage.ctaTitleLine2}
        </>
      }
      description={t.aboutPage.ctaDescription}
      buttonLabel={t.aboutPage.ctaButton}
      buttonHref="/contato"
    />
  );
};
