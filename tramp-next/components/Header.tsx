"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";
import { MegaMenu } from "./MegaMenu";

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

export const Header = () => {
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
    { name: "Início", href: "/" },
    { name: "A Trampolean", href: "/sobre" },
    {
      name: "Soluções",
      href: "/solucoes",
      hasMega: true,
      gridCols: "grid-cols-1",
      items: [
        { title: "Transformação Digital e Estratégia de IA", description: "Diagnóstico, roadmap, redesenho de processos, governança e adoção.", href: "/solucoes#transformacao-digital", icon: <IconRocket /> },
        { title: "Automações, Agentes e Software", description: "Fluxos automatizados, assistentes, RAG, integrações, sistemas e plataformas sob medida.", href: "/solucoes#automacoes-agentes-software", icon: <IconBot /> },
        { title: "Jogos, Gamificação e Imersão", description: "Serious games, simuladores, experiências gamificadas e realidade virtual.", href: "/solucoes#jogos-gamificacao-imersao", icon: <IconGamepad /> },
        { title: "Educação Corporativa e Treinamentos de IA", description: "Formação de líderes, trilhas por área, IA na educação e programas de adoção.", href: "/solucoes#educacao-corporativa", icon: <IconSchool /> },
        { title: "Ergonomia, Semiótica e Fatores Humanos", description: "Trabalho real, interfaces, linguagem, riscos psicossociais e SST.", href: "/solucoes#ergonomia-semiotica", icon: <IconPulse /> }
      ],
      footer: { text: "Todas as soluções", href: "/solucoes" }
    },
    {
      name: "Educação",
      href: "/educacao",
      hasMega: true,
      items: [
        { title: "IA para Lideranças", description: "Formação executiva para decidir e conduzir a transformação.", href: "/educacao#ia-liderancas", icon: <IconBuilding /> },
        { title: "IA Aplicada ao Trabalho", description: "Prática em prompts, agentes, automações e fluxos.", href: "/educacao#ia-aplicada", icon: <IconZap /> },
        { title: "IA na Educação", description: "Formação de docentes e gestores para transformar a aprendizagem.", href: "/educacao#ia-educacao", icon: <IconSchool /> },
        { title: "Governança e Uso Responsável", description: "Ética, privacidade, segurança e responsabilidade humana.", href: "/educacao#governanca", icon: <IconShield /> }
      ],
      footer: { text: "Explorar programas", href: "/educacao" }
    },
    {
      name: "Produtos",
      href: "/produtos",
      hasMega: true,
      items: [
        { title: "Manual de Ética de IA", description: "Governança e compliance para uso responsável de IA.", href: "/produtos#manual-etica", icon: <IconShield /> },
        { title: "Book Wizard", description: "Transforme ideias em livros e apostilas com IA.", href: "/produtos#book-wizard", icon: <IconWand /> },
        { title: "Player 2", description: "Acelere a prototipagem de games no Unity com IA.", href: "/produtos#player-2", icon: <IconGamepad /> },
        { title: "Kapta", description: "Gamificação aplicada à sustentabilidade e resíduos.", href: "/produtos#kapta", icon: <IconLeaf /> }
      ],
      footer: { text: "Ver todos os produtos", href: "/produtos" }
    },
    { name: "Carreira", href: "/carreira" },
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
          <div className="relative" ref={contactRef}>
            <button
              onClick={() => setContactOpen((prev) => !prev)}
              aria-expanded={contactOpen}
              className="bg-tramp-accent text-white px-8 py-3.5 rounded-2xl text-[1.5rem] font-black shadow-[0_8px_20px_rgba(240,36,246,0.3)] hover:shadow-[0_12px_24px_rgba(240,36,246,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
            >
              Contato
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
                    href="mailto:contato@trampolean.net"
                    onClick={() => setContactOpen(false)}
                    className="flex items-center gap-4 px-6 py-5 text-tramp-dark hover:bg-tramp-bg-light transition-colors"
                  >
                    <span className="w-11 h-11 rounded-xl bg-tramp-bg-light flex items-center justify-center text-tramp-magenta flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </span>
                    <span className="flex flex-col leading-tight whitespace-nowrap">
                      <span className="text-[1.5rem] font-bold">E-mail</span>
                      <span className="text-[1.2rem] text-tramp-gray">contato@trampolean.net</span>
                    </span>
                  </a>
                  <a
                    href="https://wa.me/5511913271774"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setContactOpen(false)}
                    className="flex items-center gap-4 px-6 py-5 text-tramp-dark hover:bg-tramp-bg-light transition-colors border-t border-black/5"
                  >
                    <span className="w-11 h-11 rounded-xl bg-tramp-bg-light flex items-center justify-center text-tramp-magenta flex-shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </span>
                    <span className="flex flex-col leading-tight whitespace-nowrap">
                      <span className="text-[1.5rem] font-bold">WhatsApp</span>
                      <span className="text-[1.2rem] text-tramp-gray">+55 (11) 91327-1774</span>
                    </span>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
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
                href="https://wa.me/5511913271774"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[1.8rem] font-bold text-tramp-accent py-3"
              >
                Falar no WhatsApp
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
