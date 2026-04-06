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
    <section className="bg-white py-16 border-b border-tramp-navy/5">
      <div className="container2025Redesign text-center mb-12 !pb-0">
        <h2 className="text-[2.4rem] text-tramp-navy font-bold mb-4">
           Empresas que Confiam na Trampolean para Liderar o Futuro
        </h2>
        <p className="max-w-2xl mx-auto opacity-70 text-[1.4rem] leading-relaxed">
          Desde a otimização de processos até a criação de culturas de aprendizagem contínua, 
          nossos clientes alcançam novos patamares de eficiência, engajamento e inovação.
        </p>
      </div>

      <div className="container2025Redesign !py-8">
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 px-4">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <img 
                alt={logo} 
                src={`/tramp_files/${logo}`}
                className="h-10 md:h-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
