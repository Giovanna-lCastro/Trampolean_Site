import React from "react";

const FeatureRow = ({ title, subtitle, description, items, image, reverse }: any) => (
  <div className="container2025Redesign" style={{ 
    display: "flex", 
    flexDirection: reverse ? "row-reverse" : "row", 
    alignItems: "center", 
    gap: "4rem", 
    padding: "6rem 0",
    flexWrap: "wrap"
  }}>
    <div style={{ flex: "1 1 400px" }}>
       <h3 style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "2px", color: "#2E86AB", marginBottom: "1rem", fontWeight: "bold" }}>{subtitle}</h3>
       <h2 style={{ fontSize: "2.25rem", color: "#1A3C5E", marginBottom: "1.5rem", fontWeight: "800" }}>{title}</h2>
       <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#4B5563", marginBottom: "2rem" }}>{description}</p>
       <ul style={{ listStyle: "none", padding: 0 }}>
          {items.map((item: string, i: number) => (
            <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem", color: "#374151" }}>
              <span style={{ color: "#2E86AB", fontWeight: "bold" }}>✓</span> {item}
            </li>
          ))}
       </ul>
       <button style={{ 
         marginTop: "2.5rem", 
         padding: "1rem 2rem", 
         backgroundColor: "#1A3C5E", 
         color: "white", 
         borderRadius: "0.75rem", 
         border: "none", 
         fontWeight: "600",
         cursor: "pointer",
         boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
       }}>
         Saiba mais
       </button>
    </div>
    <div style={{ flex: "1 1 400px", position: "relative" }}>
       <div style={{ 
         position: "absolute", 
         top: "10%", 
         left: "10%", 
         width: "100%", 
         height: "100%", 
         background: "linear-gradient(135deg, #EAF4FB 0%, #D1E9F6 100%)", 
         borderRadius: "2rem",
         zIndex: -1
       }}></div>
       <img 
         src={`/tramp_files/${image}`} 
         alt={title} 
         style={{ width: "100%", borderRadius: "2rem", boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }} 
       />
    </div>
  </div>
);

export const Solutions = () => {
  const solutions = [
    {
      title: "Treinamentos Obrigatórios e Educação em SST",
      subtitle: "Solução de Serviço",
      description: "A Trampolean reinventa os treinamentos obrigatórios de Saúde e Segurança do Trabalho. Combinamos gamificação, narrativas envolventes, hologramas e QR Codes para criar experiências memoráveis.",
      items: ["DDS criativo e gamificado", "SIPAT com jogos e teatro", "Realidade Aumentada e Hologramas"],
      image: "IT.png",
      reverse: false
    },
    {
      title: "Gamificação Corporativa",
      subtitle: "Plataforma + Serviço",
      description: "Transforme a motivação das suas equipes com estratégias de gamificação que conectam objetivos de negócio a resultados reais em engajamento e produtividade.",
      items: ["Aumento de 3x no engajamento", "Onboarding com trilhas gamificadas", "Battle Quiz e Escape Rooms"],
      image: "soc_type2.png",
      reverse: true
    },
    {
       title: "Universidade Corporativa e Estratégia de L&D",
       subtitle: "Consultoria + Plataforma",
       description: "Projetamos e implementamos Universidades Corporativas completas — da estratégia ao lançamento. Mapa de competências e trilhas personalizadas.",
       items: ["Diagnóstico de maturidade L&D", "Arquitetura pedagógica", "Microlearning e Analytics"],
       image: "success-stories-perks-gabriel-stock.png",
       reverse: false
    },
    {
       title: "Ergonomia e Saúde e Segurança do Trabalho (SST)",
       subtitle: "Técnica + Consultiva",
       description: "Realizamos Análises Ergonômicas do Trabalho (AET) em conformidade com a NR-17. Vamos além do laudo, integrando tecnologia e boas práticas globais.",
       items: ["Conformidade NR-17 e PGR", "Consultoria EHS e Sustentabilidade", "Saúde Mental no Trabalho"],
       image: "IT.png",
       reverse: true
    },
    {
       title: "Saúde Digital e Bem-Estar Corporativo",
       subtitle: "Plataforma + Conteúdo",
       description: "Soluções digitais integradas para promover o bem-estar físico e mental. Triagem digital de riscos ergonômicos e programas de saúde mental escaláveis.",
       items: ["Programas de saúde mental gamificados", "Triagem digital postural", "Dashboards de saúde organizacional"],
       image: "ai.png",
       reverse: false
    },
    {
       title: "Transformação Digital e Inteligência Artificial",
       subtitle: "Estratégia + Tecnologia",
       description: "Apoio completo na jornada de Transformação Digital. Implementação de IA aplicada a RH, treinamentos e gestão de riscos operacionais.",
       items: ["Roadmap de Maturidade Digital", "Automação de Onboarding", "Ética e Governança de IA"],
       image: "ai.png",
       reverse: true
    }
  ];

  return (
    <section id="solucoes" style={{ backgroundColor: "#FFFFFF", overflow: "hidden" }}>
       <div className="container2025Redesign" style={{ textAlign: "center", paddingTop: "6rem" }}>
          <h2 style={{ fontSize: "2.75rem", color: "#1A3C5E", fontWeight: "800" }}>
             Descubra o Poder da Trampolean
          </h2>
          <p style={{ maxWidth: "700px", margin: "1.5rem auto", opacity: 0.7, fontSize: "1.2rem" }}>
             Ferramentas e Serviços Criados para o Seu Sucesso. Redefinindo os limites da produtividade e gestão.
          </p>
       </div>
       {solutions.map((s, idx) => (
         <FeatureRow key={idx} {...s} />
       ))}
    </section>
  );
};
