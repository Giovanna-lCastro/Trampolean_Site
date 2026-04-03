"use client";

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
    <section className="Section-module-scss-module__sX6ybW__Section Section-module-scss-module__sX6ybW__white-solid white-solid" style={{ padding: "4rem 0" }}>
      <div className="container2025Redesign" style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h2 className="ContentBlock2025-module-scss-module__jZhQ6q__ContentBlock_title" style={{ fontSize: "2rem", color: "#1A3C5E" }}>
           Empresas que Confiam na Trampolean para Liderar o Futuro
        </h2>
        <p style={{ maxWidth: "800px", margin: "1rem auto", opacity: 0.7, fontSize: "1.1rem" }}>
          Desde a otimização de processos até a criação de culturas de aprendizagem contínua, 
          nossos clientes alcançam novos patamares de eficiência, engajamento e inovação.
        </p>
      </div>

      <div className="Carousel2025-module-scss-module__HCi1xW__Carousel2025_sliderContainer">
        <div className="Slider-module-scss-module__ZCi4oa__Slider_wrapper">
          <div className="Slider-module-scss-module__ZCi4oa__Slider_container" style={{ display: "flex", gap: "4rem", justifyContent: "center", alignItems: "center", flexWrap: "wrap", padding: "1rem 2rem" }}>
            {logos.map((logo, index) => (
              <div key={index} className="Slider-module-scss-module__ZCi4oa__Slider_slide">
                <img 
                  alt={logo} 
                  src={`/tramp_files/${logo}`}
                  style={{ height: "40px", opacity: 0.6, filter: "grayscale(100%)", transition: "all 0.3s ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.filter = "grayscale(0%)"; e.currentTarget.style.opacity = "1"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.filter = "grayscale(100%)"; e.currentTarget.style.opacity = "0.6"; }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
