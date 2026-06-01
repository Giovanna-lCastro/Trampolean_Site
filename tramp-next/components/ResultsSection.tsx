import React from 'react';

export const ResultsSection = () => {
  const stats = [
    {
      value: "40k+",
      label: "pessoas impactadas"
    },
    {
      value: "500+",
      label: "eventos realizados"
    },
    {
      value: "2k+",
      label: "soluções entregues"
    },
    {
      value: "300+",
      label: "clientes e parceiros atendidos"
    }
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-tramp-dark text-white border-b border-white/10">
      {/* Background Decorativo - Brilho suave central para mesclar com o EbookCTA */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-tramp-cyan/10 via-tramp-dark to-tramp-dark pointer-events-none"></div>

      <div className="container2025Redesign relative z-10">
        
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-block bg-tramp-magenta/10 px-6 py-2 rounded-full mb-6 border border-tramp-magenta/20">
            <span className="uppercase tracking-widest font-extrabold text-[1.2rem] text-tramp-accent">
              Resultados
            </span>
          </div>
          <h2 className="text-[3rem] md:text-[4.5rem] font-extrabold leading-tight text-white mb-4">
            Transformação em <span className="text-transparent bg-clip-text bg-gradient-to-r from-tramp-gradient-start to-tramp-gradient-end">Números</span>
          </h2>
          <p className="text-[1.8rem] text-gray-300 font-medium max-w-3xl mx-auto">
            Mais do que métricas, entregamos experiências e soluções que redefinem o mercado e impulsionam o futuro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white/5 border border-white/10 rounded-3xl p-10 flex flex-col items-center justify-center text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-3 hover:scale-105 hover:shadow-[0_0_40px_rgba(240,36,246,0.15)] hover:border-tramp-magenta/30 group"
            >
              <h3 className="text-[4.5rem] md:text-[5.5rem] font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 group-hover:from-tramp-gradient-start group-hover:to-tramp-gradient-end transition-all duration-500">
                {stat.value}
              </h3>
              <p className="text-[1.6rem] text-gray-300 font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
