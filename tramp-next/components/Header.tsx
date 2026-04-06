import React from "react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent transition-all duration-300">
      <div className="container2025Redesign flex items-center justify-between !py-4">
        <a 
          aria-label="Home" 
          data-testid="header-logo" 
          className="flex items-center group" 
          href="/"
        >
          <span className="text-[2.2rem] font-extrabold text-white tracking-tighter group-hover:text-tramp-cyan transition-colors">
            Trampolean
          </span>
        </a>
        
        <nav className="hidden xl:block">
          <ul role="menu" className="flex items-center gap-8">
            <li role="menuitem"><a href="/" className="text-[1.5rem] font-medium text-white hover:text-tramp-cyan transition-colors">Início</a></li>
            <li role="menuitem"><a href="/sobre" className="text-[1.5rem] font-medium text-white hover:text-tramp-cyan transition-colors">Sobre Nós</a></li>
            <li role="menuitem"><a href="#solucoes" className="text-[1.5rem] font-medium text-white hover:text-tramp-cyan transition-colors">Soluções</a></li>
            <li role="menuitem"><a href="/inovacao" className="text-[1.5rem] font-medium text-white hover:text-tramp-cyan transition-colors">Inovação</a></li>
            <li role="menuitem"><a href="/ergonomia" className="text-[1.5rem] font-medium text-white hover:text-tramp-cyan transition-colors">Ergonomia & SST</a></li>
            <li role="menuitem"><a href="/portfolio" className="text-[1.5rem] font-medium text-white hover:text-tramp-cyan transition-colors">Portfólio</a></li>
            <li role="menuitem"><a href="/blog" className="text-[1.5rem] font-medium text-white hover:text-tramp-cyan transition-colors">Blog</a></li>
            <li role="menuitem"><a href="/contato" className="text-[1.5rem] font-medium text-white hover:text-tramp-cyan transition-colors">Contato</a></li>
          </ul>
        </nav>

        <div className="flex items-center gap-6">
          <a 
            className="hidden sm:block text-[1.5rem] font-semibold text-white hover:opacity-80 transition-opacity" 
            href="/contato"
          >
            Talk to sales
          </a>
          <a 
            className="bg-tramp-cyan text-white px-8 py-3 rounded-xl text-[1.5rem] font-bold shadow-lg hover:shadow-tramp-cyan/20 hover:scale-105 active:scale-95 transition-all duration-200" 
            style={{ backgroundColor: "#2E86AB" }} /* Mantendo o fallback explícito se necessário, mas as classes Tailwind devem cobrir */
            href="#cta-final"
          >
            Agende uma Demonstração
          </a>
        </div>
      </div>
    </header>
  );
};
