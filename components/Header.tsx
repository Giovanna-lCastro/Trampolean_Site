"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageCircle, LogIn } from "lucide-react";
import { MegaMenu } from "./MegaMenu";
import { useLanguage, Lang } from "@/lib/i18n/LanguageContext";
import { PLATAFORMA_URL } from "@/lib/cursos";

// --- Custom SVGs for Mega Menu Icons ---
const IconShield = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);
const IconWand = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 4 4 4"/><path d="M10.7 7.3 4.7 13.3a2.1 2.1 0 0 0 0 3l2.8 2.8a2.1 2.1 0 0 0 3 0l6-6Z"/><path d="m19 4-1 1"/><path d="m20 2-2 2"/><path d="m20 9-1 1"/><path d="m21 8-2 2"/><path d="m16.5 3.5 1 1"/></svg>
);
const IconGamepad = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" x2="10" y1="12" y2="12"/><line x1="8" x2="8" y1="10" y2="14"/><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="15.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="15.5" cy="13.5" r=".5" fill="currentColor"/><circle cx="18.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="18.5" cy="13.5" r=".5" fill="currentColor"/></svg>
);
const IconLeaf = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8a13 13 0 0 1-13 13h-4A4 4 0 0 1 8 15"/></svg>
);
const IconBrain = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.54Z"/></svg>
);
const IconSchool = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m4 6 8-4 8 4"/><path d="m18 10 2 1v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l2-1"/><path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"/><path d="M18 5v17"/></svg>
);
const IconBuilding = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/></svg>
);
const IconZap = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);
const IconRocket = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
);
const IconBot = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
);
const IconPulse = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
);

// --- Flag icons for the language switcher ---
const FlagBR = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" className="rounded-full block">
    <circle cx="10" cy="10" r="10" fill="#009c3b" />
    <polygon points="10,3 17.5,10 10,17 2.5,10" fill="#ffdf00" />
    <circle cx="10" cy="10" r="3.4" fill="#002776" />
  </svg>
);
const FlagUS = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" className="rounded-full block">
    <circle cx="10" cy="10" r="10" fill="#b22234" />
    <g fill="#fff">
      <rect y="2.85" width="20" height="1.55" />
      <rect y="5.95" width="20" height="1.55" />
      <rect y="9.05" width="20" height="1.55" />
      <rect y="12.15" width="20" height="1.55" />
      <rect y="15.25" width="20" height="1.55" />
    </g>
    <rect x="0" y="0" width="9.5" height="10.4" fill="#3c3b6e" />
  </svg>
);
const FlagES = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" className="rounded-full block">
    <circle cx="10" cy="10" r="10" fill="#aa151b" />
    <rect y="5" width="20" height="10" fill="#f1bf00" />
  </svg>
);
const FlagCN = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" className="rounded-full block">
    <circle cx="10" cy="10" r="10" fill="#de2910" />
    <g fill="#ffde00">
      <polygon points="5,4 5.9,6.6 8.6,6.6 6.4,8.2 7.3,10.8 5,9.1 2.7,10.8 3.6,8.2 1.4,6.6 4.1,6.6" />
      <polygon points="9.6,3.2 10,4.3 11.1,4.3 10.2,5 10.5,6.1 9.6,5.4 8.7,6.1 9,5 8.1,4.3 9.2,4.3" />
      <polygon points="11.6,5.6 12,6.7 13.1,6.7 12.2,7.4 12.5,8.5 11.6,7.8 10.7,8.5 11,7.4 10.1,6.7 11.2,6.7" />
      <polygon points="11.6,8.8 12,9.9 13.1,9.9 12.2,10.6 12.5,11.7 11.6,11 10.7,11.7 11,10.6 10.1,9.9 11.2,9.9" />
      <polygon points="9.6,11 10,12.1 11.1,12.1 10.2,12.8 10.5,13.9 9.6,13.2 8.7,13.9 9,12.8 8.1,12.1 9.2,12.1" />
    </g>
  </svg>
);
const FlagFR = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" className="rounded-full block">
    <circle cx="10" cy="10" r="10" fill="#fff" />
    <path d="M0 10a10 10 0 0 1 6.67-9.43v18.86A10 10 0 0 1 0 10z" fill="#0055a4" />
    <path d="M20 10a10 10 0 0 1-6.67 9.43V.57A10 10 0 0 1 20 10z" fill="#ef4135" />
  </svg>
);

const FLAGS: { lang: Lang; label: string; Icon: () => React.JSX.Element }[] = [
  { lang: "pt", label: "Português", Icon: FlagBR },
  { lang: "en", label: "English", Icon: FlagUS },
  { lang: "es", label: "Español", Icon: FlagES },
  { lang: "zh", label: "中文", Icon: FlagCN },
  { lang: "fr", label: "Français", Icon: FlagFR },
];

const LanguageSwitcher = ({ lang, setLang, size = "sm", dark = true }: { lang: Lang; setLang: (l: Lang) => void; size?: "sm" | "lg"; dark?: boolean }) => (
  <div className={`flex items-center gap-1 rounded-xl ${dark ? "bg-white/10" : "bg-black/5"} ${size === "lg" ? "p-1.5" : "p-1"}`}>
    {FLAGS.map(({ lang: flagLang, label, Icon }) => (
      <button
        key={flagLang}
        type="button"
        onClick={() => setLang(flagLang)}
        aria-label={label}
        aria-pressed={lang === flagLang}
        className={`rounded-lg transition-all duration-200 ${size === "lg" ? "p-1.5" : "p-1"} ${
          lang === flagLang ? "ring-2 ring-tramp-accent scale-110" : "opacity-50 hover:opacity-100"
        }`}
      >
        <Icon />
      </button>
    ))}
  </div>
);

export const Header = () => {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Começa a mudar quando passa de 80px (saindo do topo do Hero)
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (contactRef.current && !contactRef.current.contains(e.target as Node)) {
        setContactOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: t.header.nav.home, href: "/" },
    { name: t.header.nav.about, href: "/sobre" },
    {
      name: t.header.nav.solutions,
      href: "/solucoes",
      hasMega: true,
      gridCols: "grid-cols-1",
      items: [
        { ...t.header.solutionsMenu[0], href: "/solucoes#transformacao-digital", icon: <IconRocket /> },
        { ...t.header.solutionsMenu[1], href: "/solucoes#automacoes-agentes-software", icon: <IconBot /> },
        { ...t.header.solutionsMenu[2], href: "/solucoes#jogos-gamificacao-imersao", icon: <IconGamepad /> },
        { ...t.header.solutionsMenu[3], href: "/solucoes#educacao-corporativa", icon: <IconSchool /> },
        { ...t.header.solutionsMenu[4], href: "/solucoes#ergonomia-semiotica", icon: <IconPulse /> }
      ],
      footer: { text: t.header.solutionsMenuFooter, href: "/solucoes" }
    },
    {
      name: t.header.nav.education,
      href: "/educacao",
      hasMega: true,
      items: [
        { ...t.header.educationMenu[0], href: "/educacao#ia-liderancas", icon: <IconBuilding /> },
        { ...t.header.educationMenu[1], href: "/educacao#ia-aplicada", icon: <IconZap /> },
        { ...t.header.educationMenu[2], href: "/educacao#ia-educacao", icon: <IconSchool /> },
        { ...t.header.educationMenu[3], href: "/educacao#governanca", icon: <IconShield /> }
      ],
      footer: { text: t.header.educationMenuFooter, href: "/educacao" }
    },
    // Simulação B2B: rótulo ainda sem tradução nos arquivos de i18n.
    { name: "Cursos", href: "/cursos" },
    {
      name: t.header.nav.products,
      href: "/produtos",
      hasMega: true,
      items: [
        { ...t.header.productsMenu[0], href: "/produtos#manual-etica", icon: <IconShield /> },
        { ...t.header.productsMenu[1], href: "/produtos#book-wizard", icon: <IconWand /> },
        { ...t.header.productsMenu[2], href: "/produtos#player-2", icon: <IconGamepad /> },
        { ...t.header.productsMenu[3], href: "/produtos#kapta", icon: <IconLeaf /> }
      ],
      footer: { text: t.header.productsMenuFooter, href: "/produtos" }
    },
    { name: t.header.nav.career, href: "/carreira" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-xl border-b border-black/5"
          : "bg-[#16002e]/80 backdrop-blur-sm border-b border-white/10"
      }`}
    >
      <div className="flex items-stretch">
      <div className={`container2025Redesign flex-1 min-w-0 flex items-center justify-between ${scrolled ? "!py-2" : "!py-3 lg:!py-4"}`}>
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-2 group outline-none"
        >
          <img
            src="/logo-trampolean.png"
            alt="Trampolean Logo"
            className="h-[4rem] md:h-[5.2rem] w-auto object-contain transition-all duration-300 group-hover:opacity-80"
          />
        </Link>
        
        {/* Navigation Desktop */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-2 xl:gap-8">
            {navLinks.map((link) => (
              <li 
                key={link.name}
                onMouseEnter={() => link.hasMega && setActiveMenu(link.name)}
                onMouseLeave={() => setActiveMenu(null)}
                className="relative py-2"
              >
                <Link 
                  href={link.href}
                  className={`text-[1.55rem] font-bold px-4 py-2 rounded-xl transition-all duration-300 flex items-center gap-2 group ${
                    scrolled 
                      ? (activeMenu === link.name ? "text-tramp-accent bg-black/5" : "text-tramp-dark/80 hover:text-tramp-dark")
                      : (activeMenu === link.name ? "text-tramp-accent bg-white/5" : "text-white/90 hover:text-white")
                  }`}
                >
                  {link.name}
                  {link.hasMega && (
                    <motion.span
                      animate={{ rotate: activeMenu === link.name ? 180 : 0 }}
                      className="text-[1.2rem] opacity-50 group-hover:opacity-100"
                    >
                      ▾
                    </motion.span>
                  )}
                </Link>

                {/* Mega Menu Integration */}
                {link.hasMega && (
                  <AnimatePresence>
                    {activeMenu === link.name && (
                      <MegaMenu 
                        isOpen={true} 
                        items={link.items!} 
                        footerLink={link.footer}
                        gridCols={link.gridCols}
                      />
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Search & CTAs */}
        <div className="flex items-center gap-6">
          <LanguageSwitcher lang={lang} setLang={setLang} dark={!scrolled} />

          <a
            href={PLATAFORMA_URL ? `${PLATAFORMA_URL}/login` : "#"}
            title={PLATAFORMA_URL ? "Acessar a plataforma de cursos" : "Em breve"}
            className={`hidden sm:inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-[1.5rem] font-bold border-2 transition-all duration-300 ${
              scrolled
                ? "border-tramp-dark/15 text-tramp-dark/80 hover:border-tramp-dark/30 hover:bg-tramp-dark/5"
                : "border-white/20 text-white hover:border-white/40 hover:bg-white/5"
            }`}
          >
            <LogIn className="w-5 h-5" />
            {t.header.login}
          </a>

          <div className="relative" ref={contactRef}>
            <button
              onClick={() => setContactOpen((prev) => !prev)}
              aria-expanded={contactOpen}
              className="bg-tramp-accent text-white px-8 py-3.5 rounded-2xl text-[1.5rem] font-black shadow-[0_8px_20px_rgba(240,36,246,0.3)] hover:shadow-[0_12px_24px_rgba(240,36,246,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
            >
              {t.header.contact}
              <motion.span
                animate={{ rotate: contactOpen ? 180 : 0 }}
                className="text-[1.1rem] opacity-80"
              >
                ▾
              </motion.span>
            </button>

            <AnimatePresence>
              {contactOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-full mt-3 w-96 bg-white rounded-2xl shadow-2xl border border-black/5 overflow-hidden z-50"
                >
                  <a
                    href="mailto:crie@trampolean.net"
                    onClick={() => setContactOpen(false)}
                    className="flex items-center gap-4 px-6 py-5 text-tramp-dark hover:bg-tramp-bg-light transition-colors"
                  >
                    <span className="w-11 h-11 rounded-xl bg-tramp-bg-light flex items-center justify-center text-tramp-magenta flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </span>
                    <span className="flex flex-col leading-tight whitespace-nowrap">
                      <span className="text-[1.5rem] font-bold">{t.header.email}</span>
                      <span className="text-[1.2rem] text-tramp-gray">crie@trampolean.net</span>
                    </span>
                  </a>
                  <a
                    href="https://wa.me/5511963135038"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setContactOpen(false)}
                    className="flex items-center gap-4 px-6 py-5 text-tramp-dark hover:bg-tramp-bg-light transition-colors border-t border-black/5"
                  >
                    <span className="w-11 h-11 rounded-xl bg-tramp-bg-light flex items-center justify-center text-tramp-magenta flex-shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </span>
                    <span className="flex flex-col leading-tight whitespace-nowrap">
                      <span className="text-[1.5rem] font-bold">{t.header.whatsapp}</span>
                      <span className="text-[1.2rem] text-tramp-gray">+55 (11) 96313-5038</span>
                    </span>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? t.header.closeMenu : t.header.openMenu}
            aria-expanded={mobileOpen}
            className={`lg:hidden p-2 ${scrolled ? "text-tramp-dark" : "text-white"}`}
          >
             {mobileOpen ? (
               <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
             ) : (
               <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
             )}
          </button>
        </div>
      </div>

        {/* T4 Interactive Banner */}
        <a
          href="https://www.t4interactive.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-stretch shrink-0 relative overflow-hidden group"
        >
          <img
            src="/t4-vibe-soccer-banner.png"
            alt="T4 Interactive - Vibe Soccer"
            className="h-full w-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          {/* Fade to blend with header on the left */}
          <div
            className={`absolute inset-y-0 left-0 w-10 xl:w-14 bg-gradient-to-r transition-colors duration-500 ${
              scrolled ? "from-white" : "from-[#16002e]"
            } to-transparent`}
          />
        </a>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-white border-t border-black/5 shadow-xl"
          >
            <nav className="container2025Redesign !py-8 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[1.8rem] font-bold text-tramp-dark py-3 border-b border-black/5"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://wa.me/5511963135038"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[1.8rem] font-bold text-tramp-accent py-3 border-b border-black/5"
              >
                {t.header.whatsappCta}
              </a>
              <div className="flex items-center justify-center py-4">
                <LanguageSwitcher lang={lang} setLang={setLang} size="lg" dark={false} />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
