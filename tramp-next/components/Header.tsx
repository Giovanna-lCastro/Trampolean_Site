"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
const IconLayers = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polygon points="2 12 12 17 22 12"/><polygon points="2 17 12 22 22 17"/></svg>
);
const IconMedal = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6.1 2h11.8a2 2 0 0 1 1.7.8l1.61 2.14a2 2 0 0 1 .13 2.2L16.79 15"/><path d="M11 12 5.12 2.2"/><path d="m13 12 5.88-9.8"/><path d="M8 7h8"/><circle cx="12" cy="17" r="5"/><path d="M12 18v-2h.01"/></svg>
);

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Começa a mudar quando passa de 80px (saindo do topo do Hero)
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "A Trampolean", href: "/sobre" },
    { 
      name: "Produtos", 
      href: "/produtos",
      hasMega: true,
      items: [
        { title: "Manual de Ética de IA", description: "Governança e compliance para uso responsável de IA.", href: "/produtos#manual-etica", icon: <IconShield /> },
        { title: "Book Wizard", description: "Transforme ideias em livros e apostilas com IA.", href: "/produtos#book-wizard", icon: <IconWand /> },
        { title: "Player 2", description: "Acelere a prototipagem de games no Unity via IA.", href: "/produtos#player-2", icon: <IconGamepad /> },
        { title: "Kapta", description: "Gamificação aplicada à sustentabilidade e resíduos.", href: "/produtos#kapta", icon: <IconLeaf /> }
      ],
      footer: { text: "Ver todos os produtos", href: "/produtos" }
    },
    { 
      name: "Educação", 
      href: "/educacao",
      hasMega: true,
      items: [
        { title: "IA na Educação", description: "Metodologias disruptivas para instituições de ensino.", href: "/educacao#ia-educacao", icon: <IconBrain /> },
        { title: "Workshop para Líderes", description: "Capacitação prática em IA para tomada de decisão.", href: "/educacao#workshop-lideres", icon: <IconSchool /> },
        { title: "Treinamento Corporativo", description: "Scale o conhecimento de IA em toda a sua empresa.", href: "/educacao#treinamento-empresas", icon: <IconBuilding /> }
      ],
      footer: { text: "Explorar programas", href: "/educacao" }
    },
    { 
      name: "Soluções", 
      href: "/solucoes",
      hasMega: true,
      gridCols: "grid-cols-2",
      items: [
        { title: "Consultoria de IA", description: "Design de estratégia e roadmap de implementação.", href: "/solucoes#consultoria-ia", icon: <IconZap /> },
        { title: "Dev de Jogos", description: "Criação de serious games e experiências gamificadas.", href: "/solucoes#dev-jogos", icon: <IconGamepad /> },
        { title: "Dev de Software", description: "Sistemas e apps escaláveis sob medida.", href: "/solucoes#dev-software", icon: <IconLayers /> },
        { title: "Automação de IA", description: "Eficiência operacional com fluxos inteligentes.", href: "/solucoes#automacao-ia", icon: <IconZap /> },
        { title: "Gamificação", description: "Engajamento real através de ciência comportamental.", href: "/solucoes#gamificacao", icon: <IconMedal /> },
        { title: "SST Inovadora", description: "Saúde e Segurança com tecnologia e propósito.", href: "/solucoes#sst", icon: <IconShield /> }
      ],
      footer: { text: "Todas as soluções", href: "/solucoes" }
    },
    { name: "Carreira", href: "/carreira" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-xl py-4 border-b border-black/5" 
          : "bg-[#16002e]/80 backdrop-blur-sm py-8 border-b border-white/10"
      }`}
    >
      <div className="container2025Redesign flex items-center justify-between !py-0">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-2 group outline-none"
        >
          <span className={`text-[2.6rem] font-black tracking-tighter transition-colors duration-300 ${
            scrolled ? "text-tramp-dark" : "text-white"
          } group-hover:text-tramp-accent`}>
            Trampolean<span className="text-tramp-accent">.</span>
          </span>
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
          <Link 
            href="/contato"
            className={`hidden sm:block text-[1.5rem] font-bold transition-colors px-4 ${
              scrolled ? "text-tramp-dark/80 hover:text-tramp-accent" : "text-white hover:text-tramp-accent"
            }`}
          >
            Log in
          </Link>
          <Link 
            href="/contato"
            className={`bg-tramp-accent text-white px-8 py-3.5 rounded-2xl text-[1.5rem] font-black shadow-[0_8px_20px_rgba(240,36,246,0.3)] hover:shadow-[0_12px_24px_rgba(240,36,246,0.5)] hover:scale-105 active:scale-95 transition-all duration-300`}
          >
            Contato
          </Link>
          
          {/* Mobile Menu Trigger */}
          <button className={`lg:hidden p-2 ${scrolled ? "text-tramp-dark" : "text-white"}`}>
             <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        </div>
      </div>
    </header>
  );
};
