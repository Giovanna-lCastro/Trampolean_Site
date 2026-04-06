import React from "react";

export const FinalCTA = () => {
  return (
    <section id="cta-final" className="bg-tramp-purple-dark text-white py-32 relative overflow-hidden">
       {/* Background accent */}
       <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[200%] bg-gradient-to-br from-tramp-magenta/20 to-transparent rotate-15 z-0 pointer-events-none"></div>

       <div className="container2025Redesign relative z-10 text-center !pb-0">
          <h2 className="text-[3.5rem] md:text-[5rem] font-extrabold mb-10 leading-tight">
             Sua Jornada de Transformação Começa Agora.
          </h2>
          <p className="max-w-4xl mx-auto mb-16 opacity-80 text-[1.8rem] md:text-[2.2rem] leading-relaxed">
             Não deixe sua empresa para trás enquanto o mercado avança. A Trampolean é sua parceira estratégica 
             para navegar na era da Inteligência Artificial com confiança, ética e resultados concretos. 
             Dê o primeiro passo hoje.
          </p>
          
          <div className="flex flex-wrap gap-6 justify-center items-center">
             <a 
               href="#contato" 
               className="bg-tramp-cyan text-white px-12 py-6 rounded-2xl text-[1.7rem] font-bold shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
             >
                Agende um Diagnóstico Gratuito
             </a>
             <a 
               href="https://wa.me/something" 
               className="bg-white text-tramp-navy px-12 py-6 rounded-2xl text-[1.7rem] font-bold shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
             >
                Fale com um Especialista
             </a>
             <a 
               href="#ebook" 
               className="border-2 border-white/20 text-white px-12 py-6 rounded-2xl text-[1.7rem] font-bold hover:bg-white/5 hover:border-white/50 active:scale-95 transition-all duration-300"
             >
                Baixe o E-book Gratuito
             </a>
          </div>
          <p className="mt-12 text-[1.3rem] text-white/50 italic">
             * O Futuro da IA no Trabalho — Guia Essencial 2025
          </p>
       </div>
    </section>
  );
};
