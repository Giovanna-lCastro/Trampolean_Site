import React from "react";

export const Partners = () => {
  const logos = [
    "Bamboo_HR_logo__1_.png",
    "BNY_logo_2x.png",
    "Bolt_logo_2x.png",
    "Finn_logo_2x.png",
    "fonds-finanz_2x.png",
    "gojob_2x.png",
    "tally_2x.png"
  ];

  return (
    <section className="bg-white py-32 border-y border-black/5 overflow-hidden">
      <div className="container2025Redesign text-center mb-20 !pb-0">
        <div className="max-w-[95%] lg:max-w-none mx-auto">
          <span className="inline-block px-4 py-1 bg-tramp-magenta/10 text-tramp-magenta text-[1.3rem] font-bold uppercase tracking-widest rounded-lg mb-6">
            Liderança & Confiança
          </span>
          <h2 className="text-[3rem] md:text-[4.2rem] text-tramp-dark font-black mb-6 leading-tight tracking-tight whitespace-nowrap">
             Grandes Marcas que Evoluem com a <span className="text-tramp-magenta">Trampolean.</span>
          </h2>
          <p className="text-[1.8rem] md:text-[2rem] text-tramp-gray opacity-70 leading-relaxed max-w-3xl mx-auto">
             Parcerias estratégicas que transformam o futuro das organizações através da inovação.
          </p>
        </div>
      </div>

      <div className="max-w-[80%] mx-auto tp-partners-carousel">
        <div className="tp-partners-track gap-20 md:gap-40 items-center">
          {/* Duplicamos os logos para o efeito de loop infinito */}
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex items-center justify-center min-w-[200px] md:min-w-[280px]">
              <img 
                alt={logo} 
                src={`/tramp_files/${logo}`}
                className="h-20 md:h-32 !opacity-100 !grayscale-0 !brightness-100 !filter-none hover:scale-105 transition-all duration-500 cursor-pointer object-contain"
                style={{ opacity: 1, filter: 'none' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
