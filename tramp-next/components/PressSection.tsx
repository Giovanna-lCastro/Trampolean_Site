import React from 'react';
import Image from 'next/image';

export const PressSection = () => {
  return (
    <section className="py-24 bg-gray-50 border-y border-gray-200 overflow-hidden">
      <div className="container2025Redesign">
        <div className="text-center flex flex-col items-center mb-24">
          <div className="inline-block bg-tramp-accent text-white px-8 py-3 rounded-full mb-8 shadow-[0_10px_20px_-5px_rgba(240,36,246,0.4)]">
            <h2 className="uppercase tracking-widest font-extrabold text-[1.4rem]">Na Mídia</h2>
          </div>
          <h3 className="text-[3.5rem] md:text-[5rem] font-extrabold text-tramp-dark tracking-tight">
            Trampolean em Destaque
          </h3>
        </div>

        {/* Z-Pattern Block 1: São Paulo Innovation Week */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Lado Esquerdo: Imagem */}
          <div className="fire-animation animate-left-to-right relative h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
            <Image 
              src="/noticia_e_img/SPIW/SPIW.jpg" 
              alt="Fabiana Raulino no painel do São Paulo Innovation Week" 
              fill 
              priority
              className="object-cover object-center hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Lado Direito: Texto */}
          <div className="fire-animation animate-right-to-left flex flex-col justify-center">
            <span className="text-tramp-cyan font-extrabold uppercase tracking-widest text-[1.4rem] mb-4">
              Estadão
            </span>
            <h4 className="text-[3rem] md:text-[4rem] font-extrabold text-tramp-dark leading-[1.1] mb-6">
              Liderança e IA no São Paulo Innovation Week
            </h4>
            <p className="text-[1.6rem] md:text-[1.8rem] text-gray-800 leading-relaxed mb-8 font-medium">
              A CEO da Trampolean, Fabiana Raulino, integrou painel que debateu os impactos da inteligência artificial e as novas dinâmicas das carreiras em camadas. A visão da empresa sobre a evolução do mercado corporativo ganhou forte repercussão em veículos como o Estadão.
            </p>
          </div>
          
        </div>

        {/* Z-Pattern Block 2: SciBiz USP */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-24 lg:mt-32">
          
          {/* Lado Esquerdo: Texto */}
          <div className="fire-animation animate-left-to-right flex flex-col justify-center order-2 lg:order-1">
            <span className="text-tramp-cyan font-extrabold uppercase tracking-widest text-[1.4rem] mb-4">
              SciBiz USP
            </span>
            <h4 className="text-[3rem] md:text-[4rem] font-extrabold text-tramp-dark leading-[1.1] mb-6">
              Educação, Tecnologia e o Futuro da Formação Profissional
            </h4>
            <p className="text-[1.6rem] md:text-[1.8rem] text-gray-800 leading-relaxed mb-8 font-medium">
              Na 9ª edição do SciBiz USP, a CEO da Trampolean debateu os desafios de educar em um mundo orientado por dados e inteligência artificial. O painel destacou como a tecnologia atua como uma linguagem fundamental não para substituir o humano, mas para criar experiências de aprendizagem mais inclusivas e personalizadas.
            </p>
          </div>

          {/* Lado Direito: Imagem */}
          <div className="fire-animation animate-right-to-left relative h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl order-1 lg:order-2">
            <Image 
              src="/noticia_e_img/SciBiz/IMG-20260514-WA0045.jpg" 
              alt="Fabiana Raulino no SciBiz USP" 
              fill 
              className="object-cover object-center hover:scale-105 transition-transform duration-700"
            />
          </div>
          
        </div>

        {/* Z-Pattern Block 3: Forbes Tech */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-24 lg:mt-32">
          
          {/* Lado Esquerdo: Imagem (Volta para a ordem original para fechar o Z) */}
          <div className="fire-animation animate-left-to-right relative h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl order-1">
            <Image 
              src="/noticia_e_img/Forbes/ChatGPT Image 27 de mai. de 2026, 21_25_11.png" 
              alt="Fabiana Raulino na Forbes" 
              fill 
              className="object-cover object-center hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Lado Direito: Texto */}
          <div className="fire-animation animate-right-to-left flex flex-col justify-center order-2">
            <span className="text-tramp-cyan font-extrabold uppercase tracking-widest text-[1.4rem] mb-4">
              Forbes Tech
            </span>
            <h4 className="text-[3rem] md:text-[4rem] font-extrabold text-tramp-dark leading-[1.1] mb-6">
              Novas Gerações e a Segurança Digital nos Metaversos
            </h4>
            <p className="text-[1.6rem] md:text-[1.8rem] text-gray-800 leading-relaxed mb-8 font-medium">
              Em matéria para a Forbes, a fundadora da Trampolean debateu os limites da biometria facial em jogos como o Roblox. A análise ressalta que proteger crianças em ecossistemas digitais vai além de barreiras técnicas, exigindo letramento contínuo, supervisão familiar e uma cultura de governança corporativa.
            </p>
          </div>
          
        </div>

      </div>
    </section>
  );
};
