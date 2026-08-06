import React from 'react';
import Image from 'next/image';

export const EbookCTA = () => {
  return (
    <section className="relative overflow-hidden bg-tramp-dark text-white border-b border-white/10">
      {/* Background Decorativo - Brilho suave */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-tramp-magenta/20 via-tramp-dark to-tramp-dark pointer-events-none"></div>

      <div className="container2025Redesign relative z-10">
        <div className="fire-animation animate-left-to-right bg-white/5 border border-white/10 rounded-[3rem] p-12 md:p-20 shadow-2xl backdrop-blur-md">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Lado Esquerdo: Textos */}
            <div className="text-left flex flex-col items-start">
              <div className="inline-block bg-tramp-cyan/10 px-6 py-2 rounded-full mb-8 border border-tramp-cyan/20">
                <span className="uppercase tracking-widest font-extrabold text-[1.2rem] text-tramp-cyan">Material Gratuito</span>
              </div>

              <h2 className="text-[3.5rem] md:text-[5rem] font-extrabold mb-6 leading-[1.1] text-white">
                Baixe nossa cartilha de termos da Geração Z
              </h2>

              <p className="text-[1.8rem] md:text-[2.2rem] text-gray-300 mb-12 font-medium leading-relaxed">
                Do &quot;six seven&quot; ao &quot;farmando aura&quot;: entenda a linguagem das novas gerações e como isso impacta o futuro do trabalho.
              </p>

              <a
                href="/downloads/cartilha-geracao-z.pdf"
                download="Cartilha-Geracao-Z-Trampolean.pdf"
                className="inline-flex items-center justify-center gap-4 bg-gradient-to-r from-[#8200fa] to-[#f024f6] text-white hover:opacity-90 px-12 py-6 rounded-full font-extrabold text-[1.8rem] md:text-[2rem] shadow-[0_10px_40px_-10px_rgba(240,36,246,0.6)] transition-all duration-300 hover:scale-105 active:scale-95"
              >
                {/* SVG Limpo - Download */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Baixar Cartilha Agora
              </a>
            </div>

            {/* Lado Direito: Imagens do Ebook em Cascata Diagonal */}
            <div className="relative h-[350px] md:h-[450px] lg:h-[550px] w-full mt-16 lg:mt-0">

              {/* Imagem Topo-Esquerda (Maior, Fundo) */}
              <div className="absolute left-[0%] top-[10%] md:top-[10%] w-[70%] z-10 hover:z-40 hover:-translate-y-4 hover:scale-105 transition-all duration-500 rounded-3xl border-4 border-tramp-cyan/40 shadow-[0_0_30px_rgba(0,255,255,0.2)] overflow-hidden cursor-pointer">
                <img 
                  src="/e_book/img3.png"
                  alt="Página da Cartilha Geração Z"
                  className="w-full h-auto block"
                />
              </div>

              {/* Imagem Direita-Meio (Média, Meio) */}
              <div className="absolute right-[0%] top-[30%] md:top-[30%] w-[65%] z-20 hover:z-40 hover:-translate-y-4 hover:scale-105 transition-all duration-500 rounded-3xl border-4 border-tramp-magenta/50 shadow-[0_0_40px_rgba(130,0,250,0.3)] overflow-hidden cursor-pointer">
                <img 
                  src="/e_book/img2.png"
                  alt="Página da Cartilha Geração Z"
                  className="w-full h-auto block"
                />
              </div>

              {/* Imagem Base (Menor, Frente) */}
              <div className="absolute left-[10%] top-[50%] md:top-[50%] w-[60%] z-30 hover:z-40 hover:-translate-y-4 hover:scale-105 transition-all duration-500 rounded-3xl border-4 border-[#f024f6]/60 shadow-[0_0_50px_rgba(240,36,246,0.4)] overflow-hidden cursor-pointer">
                <img 
                  src="/e_book/img1.png"
                  alt="Capa da Cartilha Geração Z"
                  className="w-full h-auto block"
                />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
