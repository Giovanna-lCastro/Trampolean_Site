"use client";

import React from "react";

export const Segments = () => {
  const categories = [
    {
      title: "Para Gestores de SST e Ergonomia",
      description: "Preveja riscos, otimize ambientes de trabalho e garanta a conformidade com NR-17 através de avaliações ergonômicas técnicas e ferramentas inovadoras.",
      icon: "🦺"
    },
    {
      title: "Para Líderes de RH e T&D",
      description: "Acelere o desenvolvimento das suas equipes com universidades corporativas, trilhas personalizadas e plataformas de gamificação com ROI mensurável.",
      icon: "👩‍💼"
    },
    {
      title: "Para Diretores de Inovação e Digital",
      description: "Implemente IA, automação e ferramentas digitais com estratégia e responsabilidade. Transforme processos operacionais e educacionais.",
      icon: "🚀"
    },
    {
      title: "Para Líderes de ESG e Sustentabilidade",
      description: "Demonstre compromisso real com o bem-estar dos colaboradores e metas ambientais com dados transparentes e engajamento sustentável.",
      icon: "🌿"
    }
  ];

  return (
    <section style={{ backgroundColor: "#1A3C5E", color: "white", padding: "6rem 0" }}>
       <div className="container2025Redesign" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "1.5rem" }}>
             Soluções Inteligentes para os Seus Desafios Mais Críticos
          </h2>
          <p style={{ maxWidth: "700px", margin: "0 auto", opacity: 0.8, fontSize: "1.1rem" }}>
             Seja você um gestor de SST, um líder de RH ou um diretor de inovação — a Trampolean tem a solução certa para o seu contexto.
          </p>
       </div>
       <div className="container2025Redesign">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
             {categories.map((cat, idx) => (
                <div key={idx} style={{ 
                  backgroundColor: "rgba(255,255,255,0.05)", 
                  padding: "3rem", 
                  borderRadius: "1.5rem", 
                  border: "1px solid rgba(255,255,255,0.1)",
                  transition: "transform 0.3s ease",
                  cursor: "default"
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-10px)"; e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)"; }}
                >
                   <div style={{ fontSize: "3rem", marginBottom: "1.5rem" }}>{cat.icon}</div>
                   <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>{cat.title}</h3>
                   <p style={{ lineHeight: "1.6", opacity: 0.8 }}>{cat.description}</p>
                </div>
             ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "4rem" }}>
             <button style={{ 
               backgroundColor: "#2E86AB", 
               color: "white", 
               padding: "1rem 2.5rem", 
               borderRadius: "0.75rem", 
               border: "none", 
               fontWeight: "600",
               fontSize: "1.1rem",
               cursor: "pointer"
             }}>
                Explore Todas as Nossas Soluções
             </button>
          </div>
       </div>
    </section>
  );
};
