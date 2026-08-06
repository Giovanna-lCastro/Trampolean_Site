import React from "react";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/trampolean/" },
  { label: "Instagram", href: "https://www.instagram.com/trampolean.oficial" },
  { label: "YouTube", href: "https://www.youtube.com/@trampolean" },
];

export const Footer = () => {
  return (
    <footer className="bg-tramp-dark text-white py-20 border-t border-white/10">
      <div className="container2025Redesign !pb-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left mb-16">
          {/* Brand */}
          <div>
            <span className="text-[2.5rem] font-extrabold tracking-tighter text-white mb-4 block">
              Trampolean
            </span>
            <p className="text-[1.4rem] text-white/50 leading-relaxed max-w-xs mx-auto md:mx-0">
              Transformação digital que conecta tecnologia, trabalho, aprendizagem e linguagem.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-[1.3rem] font-bold uppercase tracking-widest text-white/40 mb-6">Navegação</p>
            <div className="flex flex-col gap-4 text-[1.5rem] opacity-80">
              <a href="/sobre" className="hover:text-tramp-cyan transition-colors">A Trampolean</a>
              <a href="/solucoes" className="hover:text-tramp-cyan transition-colors">Soluções</a>
              <a href="/educacao" className="hover:text-tramp-cyan transition-colors">Educação</a>
              <a href="/produtos" className="hover:text-tramp-cyan transition-colors">Produtos</a>
              <a href="/carreira" className="hover:text-tramp-cyan transition-colors">Carreira</a>
              <a href="/contato" className="hover:text-tramp-cyan transition-colors">Contato</a>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <p className="text-[1.3rem] font-bold uppercase tracking-widest text-white/40 mb-6">Contato</p>
            <div className="flex flex-col gap-4 text-[1.5rem] opacity-80 mb-8">
              <a href="mailto:crie@trampolean.net" className="hover:text-tramp-cyan transition-colors">crie@trampolean.net</a>
              <a href="https://wa.me/5511963135038" target="_blank" rel="noopener noreferrer" className="hover:text-tramp-cyan transition-colors">+55 (11) 96313-5038</a>
              <span>São Paulo, SP — Brasil</span>
            </div>
            <div className="flex gap-4 justify-center md:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-[1.4rem] opacity-70 hover:opacity-100 hover:text-tramp-cyan transition-all"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[1.3rem] text-white/30 border-t border-white/5 pt-10 pb-10">
          <span>© {new Date().getFullYear()} Trampolean. Todos os direitos reservados.</span>
          <a href="/privacidade" className="hover:text-tramp-cyan transition-colors">Política de Privacidade</a>
        </div>
      </div>
    </footer>
  );
};
