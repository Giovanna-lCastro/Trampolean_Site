"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export const PrivacyContent = () => {
  const { t } = useLanguage();
  return (
    <div className="container2025Redesign !pt-0">
      <h1 className="text-[3.2rem] md:text-[4.5rem] font-black text-tramp-dark mb-12">
        {t.privacyPage.title}
      </h1>

      <div className="max-w-3xl space-y-10 text-[1.7rem] leading-relaxed text-tramp-gray">
        <p>
          {t.privacyPage.intro}
        </p>

        <div>
          <h2 className="text-[2.2rem] font-black text-tramp-dark mb-4">{t.privacyPage.dataCollected.heading}</h2>
          <p>
            {t.privacyPage.dataCollected.paragraph}
          </p>
        </div>

        <div>
          <h2 className="text-[2.2rem] font-black text-tramp-dark mb-4">{t.privacyPage.dataUse.heading}</h2>
          <p>
            {t.privacyPage.dataUse.paragraph}
          </p>
        </div>

        <div>
          <h2 className="text-[2.2rem] font-black text-tramp-dark mb-4">{t.privacyPage.rights.heading}</h2>
          <p>
            {t.privacyPage.rights.beforeEmail}{" "}
            <a href="mailto:crie@trampolean.net" className="text-tramp-accent font-bold">
              crie@trampolean.net
            </a>
            {t.privacyPage.rights.afterEmail}
          </p>
        </div>

        <div>
          <h2 className="text-[2.2rem] font-black text-tramp-dark mb-4">{t.privacyPage.contact.heading}</h2>
          <p>
            {t.privacyPage.contact.beforeEmail}{" "}
            <a href="mailto:crie@trampolean.net" className="text-tramp-accent font-bold">
              crie@trampolean.net
            </a>{" "}
            {t.privacyPage.contact.betweenEmailAndWhatsapp}{" "}
            <a href="https://wa.me/5511963135038" target="_blank" rel="noopener noreferrer" className="text-tramp-accent font-bold">
              +55 (11) 96313-5038
            </a>
            {t.privacyPage.contact.afterWhatsapp}
          </p>
        </div>
      </div>
    </div>
  );
};
