import React from "react";

export const Features = () => {
  const pillars = [
    {
      title: "Inteligência Artificial",
      description: "Soluções de IA aplicadas à gestão de aprendizagem, análise de riscos ergonômicos e automação de processos educacionais.",
      icon: "🤖"
    },
    {
      title: "Gamificação Corporativa",
      description: "Experiências de aprendizagem engajadoras com mecânicas de jogos que aumentam retenção, motivação e desempenho das equipes.",
      icon: "🎮"
    },
    {
      title: "Ergonomia & SST",
      description: "Conformidade com NR-17, avaliações ergonômicas, prevenção de riscos e ambientes de trabalho saudáveis e produtivos.",
      icon: "🏭"
    },
    {
      title: "Educação Corporativa",
      description: "Universidades corporativas, trilhas de aprendizagem personalizadas, microlearning e estratégias de L&D alinhadas ao negócio.",
      icon: "🎓"
    }
  ];

  return (
    <section className="Section-module-scss-module__sX6ybW__Section Section-module-scss-module__sX6ybW__white-solid white-solid" style={{ padding: "6rem 0", color: "#220041" }}>
      <div className="container2025Redesign ContentGrid2025-module-scss-module__-3Y_vG__ContentGrid_grid ContentGrid2025-module-scss-module__-3Y_vG__ContentGrid_gridCol___1 ContentGrid2025-module-scss-module__-3Y_vG__ContentGrid_gridGap___large">
        <div data-testid="contentGridItem" className="ContentGrid2025-module-scss-module__-3Y_vG__ContentGrid_item">
          <div className="ContentBlock2025-module-scss-module__jZhQ6q__ContentBlock ContentBlock2025-module-scss-module__jZhQ6q__ContentBlock_container" style={{ textAlign: "center" }}>
            <h2 className="ContentBlock2025-module-scss-module__jZhQ6q__ContentBlock_title Alignment-module-scss-module__CdTCxq__Alignment___center" style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>
              Inovação com Raiz. Impacto com Propósito.
            </h2>
            <div className="ContentBlock2025-module-scss-module__jZhQ6q__ContentBlock_description Alignment-module-scss-module__CdTCxq__Alignment___center" style={{ maxWidth: "900px", margin: "0 auto" }}>
              <p style={{ fontSize: "1.15rem", lineHeight: "1.8", marginBottom: "1.5rem" }}>
                Nascemos da Ergonomia e da Segurança no Trabalho. Evoluímos para a Inovação em Processos Organizacionais. 
                Chegamos à Era da Inteligência Artificial com a mesma missão de sempre: colocar o ser humano no centro de tudo.
              </p>
              <p style={{ fontSize: "1.1rem", opacity: 0.8 }}>
                A Trampolean combina profunda expertise em SST com tecnologias de ponta para criar soluções que 
                transformam ambientes de trabalho — tornando-os mais seguros, inteligentes e humanos.
              </p>
            </div>
          </div>
        </div>
        <div data-testid="contentGridItem" className="ContentGrid2025-module-scss-module__-3Y_vG__ContentGrid_item" style={{ marginTop: "4rem" }}>
          <div className="ContentGrid2025-module-scss-module__-3Y_vG__ContentGrid_flex ContentGrid2025-module-scss-module__-3Y_vG__ContentGrid_flexCol___4 ContentGrid2025-module-scss-module__-3Y_vG__ContentGrid_flexGap___small" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
            {pillars.map((pillar, index) => (
              <div key={index} className="ContentGrid2025-module-scss-module__-3Y_vG__ContentGrid_item">
                <div className="ContentBlockCard2025-module-scss-module__V6THDa__ContentBlockCard" style={{ height: "100%" }}>
                  <div className="Card2025-module-scss-module__COW6xW__Card2025" style={{ height: "100%", padding: "2.5rem", borderRadius: "1.5rem", border: "1px solid rgba(0,0,0,0.05)", boxShadow: "0 10px 30px -5px rgba(0,0,0,0.05)" }}>
                    <div className="ContentBlockCard2025-module-scss-module__V6THDa__ContentBlockCard_container">
                      <div style={{ fontSize: "3rem", marginBottom: "1.5rem" }}>{pillar.icon}</div>
                      <div className="ContentBlockCard2025-module-scss-module__V6THDa__ContentBlockCard_content">
                        <div className="ContentBlockCard2025-module-scss-module__V6THDa__ContentBlockCard_title" style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "1rem", color: "#1A3C5E" }}>
                          <span>{pillar.title}</span>
                        </div>
                        <div className="ContentBlockCard2025-module-scss-module__V6THDa__ContentBlockCard_description">
                          <p style={{ lineHeight: "1.6", opacity: 0.8 }}>{pillar.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
