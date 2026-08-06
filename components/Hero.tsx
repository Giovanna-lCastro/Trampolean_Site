import React from "react";

export const Hero = () => {
  return (
    <section className="relative bg-tramp-dark text-white overflow-hidden pt-40 pb-24 lg:pt-44 lg:pb-32">
      {/* Background Decorativo opcional se houver no original */}
      <div className="absolute inset-0 bg-radial-at-tr from-tramp-magenta/20 to-transparent pointer-events-none"></div>

      <div className="container2025Redesign relative z-10 !py-0">
        <div className="fire-animation animate-left-to-right mb-12 lg:mb-16 text-center">
          <p className="text-[1.2rem] uppercase tracking-widest font-semibold mb-6 text-tramp-accent">
            Transformação Digital Centrada no Humano
          </p>

          <h1 className="text-balance text-[3rem] md:text-[3.8rem] lg:text-[4.2rem] xl:text-[4.8rem] font-extrabold leading-[1.15] tracking-tighter max-w-none">
            Tecnologia para transformar processos, trabalho e aprendizagem
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 items-center">

          <div className="fire-animation animate-left-to-right">
            <div className="text-[1.4rem] lg:text-[1.7rem] leading-relaxed opacity-90 text-pretty max-w-none mb-12 text-gray-300">
              <p>A Trampolean une inteligência artificial, automação, software, jogos digitais, educação corporativa, ergonomia e semiótica para criar soluções aderentes aos desafios reais das organizações. Atuamos da estratégia à implementação, desenvolvendo pessoas, processos e tecnologias sob medida.</p>
            </div>

            <div className="flex flex-wrap gap-6 items-center mb-16">
              <a href="/contato" className="btn-premium-purple px-10 py-5 rounded-2xl font-bold text-[1.6rem] shadow-2xl block text-center">
                Conte seu desafio
              </a>

              <a href="/solucoes" className="group">
                <div className="relative overflow-hidden border-2 border-white/20 px-10 py-5 rounded-2xl font-bold text-[1.6rem] hover:bg-white/5 hover:border-white/40 active:scale-95 transition-all duration-300">
                  <div className="relative z-10 text-white">Conheça nossas soluções</div>
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
                <div className="text-[2.2rem] font-bold">IA & Tecnologia</div>
                <div className="text-[1rem] uppercase tracking-widest opacity-50 mt-1">Soluções Integradas</div>
              </div>
            </div>
          </div>

          {/* Vídeo em card */}
          <div className="fire-animation animate-right-to-left">
            <div className="relative">
              {/* Glow effect behind video */}
              <div className="absolute -inset-4 bg-tramp-cyan/20 blur-3xl rounded-full pointer-events-none"></div>
              <video
                src="/img_site/hero-video2.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="relative z-10 w-full h-auto rounded-[2.5rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
