import React from "react";

export const Partners = () => {
  const logos = [
    { file: "Logo_-_Descomplica.png", name: "Descomplica" },
    { file: "Oficina.webp", name: "Oficina" },
    { file: "Senac_logo.svg.png", name: "Senac" },
    { file: "cropped-credilink_R_policromia-1.png", name: "Credilink" },
    { file: "distrito_de_inovao_da_cidade_de_so_paulo_logo.jpg", name: "Distrito de Inovação da Cidade de São Paulo" },
    { file: "logo-cf.svg", name: "CF" },
    { file: "logo_xp-educacao_grVPjD.png", name: "XP Educação" },
    { file: "seo_vz.webp", name: "VZ" },
    { file: "turma-do-jilo.webp", name: "Turma do Jiló" },
    { file: "uber--600.png", name: "Uber" },
    { file: "images (1).png", name: "Parceiro Trampolean" },
    { file: "images (2).png", name: "Parceiro Trampolean" },
    { file: "images (3).png", name: "Parceiro Trampolean" },
    { file: "images (4).png", name: "Parceiro Trampolean" },
    { file: "images.png", name: "Parceiro Trampolean" }
  ];

  return (
    <section className="bg-white border-y border-black/5 overflow-hidden pb-20 md:pb-28">
      <div className="container2025Redesign text-center mb-16 !pb-0">
        <div className="max-w-[95%] lg:max-w-none mx-auto">
          <span className="inline-block px-4 py-1 bg-tramp-magenta/10 text-tramp-magenta text-[1.3rem] font-bold uppercase tracking-widest rounded-lg mb-6">
            Confiança
          </span>
          <h2 className="text-balance text-[3rem] md:text-[4.2rem] text-tramp-dark font-black mb-6 leading-tight tracking-tight">
             Marcas que evoluem com a <span className="text-tramp-magenta">Trampolean.</span>
          </h2>
          <p className="text-[1.8rem] md:text-[2rem] text-tramp-gray opacity-70 leading-relaxed text-pretty">
             Parcerias estratégicas que transformam o futuro das organizações por meio da inovação.
          </p>
        </div>
      </div>

      <div className="max-w-[80%] mx-auto tp-partners-carousel">
        <div className="tp-partners-track gap-20 md:gap-40 items-center">
          {/* Duplicamos os logos para o efeito de loop infinito */}
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex items-center justify-center w-[180px] h-20 md:w-[240px] md:h-28 flex-shrink-0">
              <img
                alt={logo.name}
                src={`/parcerias/${logo.file}`}
                className="max-h-full max-w-full w-auto h-auto object-contain grayscale opacity-70 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
