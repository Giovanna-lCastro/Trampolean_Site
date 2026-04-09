import React from "react";

export const Hero = () => {
  return (
    <section className="relative bg-tramp-dark text-white overflow-hidden pt-32 min-h-screen flex items-center">
      {/* Background Decorativo opcional se houver no original */}
      <div className="absolute inset-0 bg-radial-at-tr from-tramp-magenta/20 to-transparent pointer-events-none"></div>
      
      <div className="container2025Redesign relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="fire-animation animate-left-to-right">
            <p className="text-[1.4rem] opacity-70 italic mb-6">
              Nascemos da Ergonomia e da Segurança no Trabalho e evoluímos para a Inovação em Processos Organizacionais.
            </p>
            
            <h1 className="text-[4rem] md:text-[5.5rem] lg:text-[6.5rem] font-extrabold leading-[1.1] tracking-tighter mb-8">
              Arquitetura de Aprendizagem e Trabalho na Era da IA
            </h1>
            
            <div className="text-[1.8rem] lg:text-[2rem] leading-relaxed opacity-90 max-w-2xl mb-12">
              <p>Somos líderes em Transformação Digital e Educação Corporativa.</p>
              <p className="mt-4">Criamos soluções inovadoras em IA, Gamificação, Universidades Corporativas e Saúde Digital para empresas que querem liderar o futuro.</p>
            </div>
            
            <div className="flex flex-wrap gap-6 items-center mb-16">
              <a href="#contato" className="btn-premium-purple px-10 py-5 rounded-2xl font-bold text-[1.6rem] shadow-2xl block text-center">
                Agende um Diagnóstico Gratuito
              </a>
              
              <a href="#solucoes" className="group">
                <div className="relative overflow-hidden border-2 border-white/20 px-10 py-5 rounded-2xl font-bold text-[1.6rem] hover:bg-white/5 hover:border-white/40 active:scale-95 transition-all duration-300">
                  <div className="relative z-10 text-white">Conheça Nossas Soluções</div>
                </div>
              </a>
            </div>

            {/* Indicadores de Credibilidade (Stats) */}
            <div className="flex gap-12 pt-10 border-t border-white/10">
               <div>
                  <div className="text-[2.2rem] font-bold">+10 anos</div>
                  <div className="text-[1rem] uppercase tracking-widest opacity-50 mt-1">Experiência SST</div>
               </div>
               <div className="w-[1px] bg-white/20 h-12 self-center"></div>
               <div>
                  <div className="text-[2.2rem] font-bold">Centenas</div>
                  <div className="text-[1rem] uppercase tracking-widest opacity-50 mt-1">Empresas</div>
               </div>
               <div className="w-[1px] bg-white/20 h-12 self-center"></div>
               <div>
                  <div className="text-[2.2rem] font-bold">IA & Games</div>
                  <div className="text-[1rem] uppercase tracking-widest opacity-50 mt-1">Soluções Integradas</div>
               </div>
            </div>
          </div>

          <div className="fire-animation animate-right-to-left">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute -inset-4 bg-tramp-cyan/20 blur-3xl rounded-full pointer-events-none"></div>
              <img 
                src="/tramp_files/success-stories-perks-gabriel-stock.png" 
                alt="Trampolean Hero" 
                className="relative z-10 w-full h-auto rounded-[2.5rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
