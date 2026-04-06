import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-tramp-dark text-white py-20 border-t border-white/10">
      <div className="container2025Redesign text-center !pb-0">
        <span className="text-[2.5rem] font-extrabold tracking-tighter text-white mb-10 block">
          Trampolean
        </span>
        
        <div className="flex flex-wrap justify-center gap-8 mb-12 text-[1.4rem] opacity-60">
          <a href="/sobre" className="hover:text-tramp-cyan transition-colors">Sobre Nós</a>
          <a href="#solucoes" className="hover:text-tramp-cyan transition-colors">Soluções</a>
          <a href="/inovacao" className="hover:text-tramp-cyan transition-colors">Inovação</a>
          <a href="/contato" className="hover:text-tramp-cyan transition-colors">Contato</a>
          <a href="/privacidade" className="hover:text-tramp-cyan transition-colors">Privacidade</a>
        </div>

        <div className="text-[1.3rem] text-white/30 border-t border-white/5 pt-10">
          © {new Date().getFullYear()} Trampolean Arquitetura de Aprendizagem. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};
