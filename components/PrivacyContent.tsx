"use client";

import type { ReactNode } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const SectionHeading = ({ children }: { children: ReactNode }) => (
  <h2 className="text-[2.2rem] font-black text-tramp-dark mb-4">{children}</h2>
);

const List = ({ items }: { items: string[] }) => (
  <ul className="space-y-2 list-disc pl-8 mt-2">
    {items.map((item, idx) => (
      <li key={idx}>{item}</li>
    ))}
  </ul>
);

export const PrivacyContent = () => {
  const { t } = useLanguage();
  const p = t.privacyPage;

  return (
    <div className="container2025Redesign !pt-0">
      <h1 className="text-[3.2rem] md:text-[4.5rem] font-black text-tramp-dark mb-4">
        {p.title}
      </h1>
      <p className="text-[1.4rem] text-tramp-gray uppercase tracking-widest mb-12">
        {p.lastUpdated}
      </p>

      <div className="max-w-3xl space-y-10 text-[1.7rem] leading-relaxed text-tramp-gray">
        <div>
          <SectionHeading>{p.intro.heading}</SectionHeading>
          {p.intro.paragraphs.map((para, idx) => (
            <p key={idx} className={idx > 0 ? "mt-4" : undefined}>
              {para}
            </p>
          ))}
        </div>

        <div>
          <SectionHeading>{p.dataCollected.heading}</SectionHeading>
          <p>{p.dataCollected.intro}</p>
          <List items={p.dataCollected.items} />
        </div>

        <div>
          <SectionHeading>{p.dataUse.heading}</SectionHeading>
          <p>{p.dataUse.intro}</p>
          <List items={p.dataUse.items} />
        </div>

        <div>
          <SectionHeading>{p.dataSharing.heading}</SectionHeading>
          <p>{p.dataSharing.intro}</p>
          <List items={p.dataSharing.items} />
        </div>

        <div>
          <SectionHeading>{p.dataRetention.heading}</SectionHeading>
          <p>{p.dataRetention.paragraph}</p>
        </div>

        <div>
          <SectionHeading>{p.dataSecurity.heading}</SectionHeading>
          <p>{p.dataSecurity.paragraph}</p>
        </div>

        <div>
          <SectionHeading>{p.rights.heading}</SectionHeading>
          <p>{p.rights.intro}</p>
          <List items={p.rights.items} />
          <p className="mt-4">
            {p.rights.beforeEmail}{" "}
            <a href="mailto:crie@trampolean.net" className="text-tramp-accent font-bold">
              crie@trampolean.net
            </a>
            {p.rights.afterEmail}
          </p>
        </div>

        <div>
          <SectionHeading>{p.children.heading}</SectionHeading>
          <p>{p.children.paragraph}</p>
        </div>

        <div>
          <SectionHeading>{p.thirdPartyLinks.heading}</SectionHeading>
          <p>{p.thirdPartyLinks.paragraph}</p>
        </div>

        <div>
          <SectionHeading>{p.internationalTransfer.heading}</SectionHeading>
          <p>{p.internationalTransfer.paragraph}</p>
        </div>

        <div>
          <SectionHeading>{p.changes.heading}</SectionHeading>
          <p>{p.changes.paragraph}</p>
        </div>

        <div>
          <SectionHeading>{p.contact.heading}</SectionHeading>
          <p>
            {p.contact.beforeEmail}{" "}
            <a href="mailto:crie@trampolean.net" className="text-tramp-accent font-bold">
              crie@trampolean.net
            </a>{" "}
            {p.contact.betweenEmailAndWhatsapp}{" "}
            <a href="https://wa.me/5511963135038" target="_blank" rel="noopener noreferrer" className="text-tramp-accent font-bold">
              +55 (11) 96313-5038
            </a>
            {p.contact.afterWhatsapp}
          </p>
        </div>
      </div>
    </div>
  );
};
