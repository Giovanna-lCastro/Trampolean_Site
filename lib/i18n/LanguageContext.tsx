"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { pt } from "./pt";
import { en } from "./en";
import { es } from "./es";
import { zh } from "./zh";
import { fr } from "./fr";
import type { Dictionary } from "./types";

export type Lang = "pt" | "en" | "es" | "zh" | "fr";

const STORAGE_KEY = "trampolean-lang";

const dictionaries: Record<Lang, Dictionary> = { pt, en, es, zh, fr };

const htmlLang: Record<Lang, string> = {
  pt: "pt-br",
  en: "en",
  es: "es",
  zh: "zh-Hans",
  fr: "fr",
};

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    // Reads localStorage once after mount to avoid an SSR/client hydration
    // mismatch (the server always renders "pt", the static default).
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "pt" || stored === "en" || stored === "es" || stored === "zh" || stored === "fr") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLangState(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = htmlLang[lang];
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
