import React from "react";

const FeatureRow = ({ title, subtitle, description, items, image, reverse }: any) => (
  <div className={`container2025Redesign flex flex-wrap items-center gap-16 py-24 ${reverse ? "flex-row-reverse" : "flex-row"}`}>
    <div className="flex-1 min-w-[320px] md:min-w-[400px]">
       <h3 className="text-[1.4rem] uppercase tracking-[2px] text-tramp-cyan mb-4 font-bold">{subtitle}</h3>
       <h2 className="text-[3.2rem] md:text-[3.6rem] text-tramp-navy mb-6 font-extrabold leading-tight">{title}</h2>
       <p className="text-[1.8rem] leading-relaxed text-tramp-gray mb-8">{description}</p>
       <ul className="list-none p-0">
          {items.map((item: string, i: number) => (
            <li key={i} className="flex items-center gap-3 mb-3 text-tramp-gray-muted text-[1.6rem]">
              <span className="text-tramp-cyan font-bold text-[1.8rem]">✓</span> {item}
            </li>
          ))}
       </ul>
       <button className="mt-10 px-10 py-4 bg-tramp-navy text-white rounded-xl font-bold text-[1.6rem] shadow-lg hover:scale-105 active:scale-95 transition-all duration-200">
         Saiba mais
       </button>
    </div>
    <div className="flex-1 min-w-[320px] md:min-w-[400px] relative group">
       {/* Decorative Background */}
       <div className="absolute top-[10%] left-[10%] w-full h-full bg-gradient-to-br from-tramp-bg-light to-tramp-bg-cyan rounded-[2.5rem] -z-10 group-hover:scale-105 transition-transform duration-500"></div>
       <img 
         src={`/tramp_files/${image}`} 
         alt={title} 
         className="w-full rounded-[2.5rem] shadow-2xl transition-transform duration-500 group-hover:-translate-y-2" 
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
    <section id="solucoes" className="bg-white overflow-hidden py-12">
       <div className="container2025Redesign text-center !pb-0">
          <h2 className="text-[3.5rem] md:text-[4.5rem] text-tramp-navy font-extrabold leading-tight">
             Descubra o Poder da Trampolean
          </h2>
          <p className="max-w-3xl mx-auto mt-6 opacity-70 text-[1.8rem] md:text-[2rem] leading-relaxed">
             Ferramentas e Serviços Criados para o Seu Sucesso. Redefinindo os limites da produtividade e gestão.
          </p>
       </div>
       {solutions.map((s, idx) => (
         <FeatureRow key={idx} {...s} />
       ))}
    </section>
  );
};
