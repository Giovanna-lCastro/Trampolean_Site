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
    <section className="bg-tramp-purple-dark text-white py-24">
       <div className="container2025Redesign text-center mb-16 !pb-0">
          <h2 className="text-[3.2rem] md:text-[4rem] font-extrabold mb-6 leading-tight">
             Soluções Inteligentes para os Seus Desafios Mais Críticos
          </h2>
          <p className="max-w-3xl mx-auto opacity-70 text-[1.6rem] md:text-[1.8rem] leading-relaxed">
             Seja você um gestor de SST, um líder de RH ou um diretor de inovação — a Trampolean tem a solução certa para o seu contexto.
          </p>
       </div>
       <div className="container2025Redesign !py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {categories.map((cat, idx) => (
                <div 
                  key={idx} 
                  className="bg-white/5 p-12 rounded-[2.5rem] border border-white/10 hover:bg-white/10 hover:-translate-y-3 transition-all duration-300 cursor-default group"
                >
                   <div className="text-[5rem] mb-8 group-hover:scale-110 transition-transform duration-500 origin-left">{cat.icon}</div>
                   <h3 className="text-[2rem] font-bold mb-4 tracking-tight group-hover:text-tramp-cyan transition-colors">{cat.title}</h3>
                   <p className="text-[1.6rem] opacity-70 leading-relaxed">{cat.description}</p>
                </div>
             ))}
          </div>
          <div className="text-center mt-20">
             <button className="bg-tramp-cyan text-white px-12 py-5 rounded-2xl font-bold text-[1.7rem] shadow-xl hover:shadow-tramp-cyan/20 hover:scale-105 active:scale-95 transition-all duration-300">
                Explore Todas as Nossas Soluções
             </button>
          </div>
       </div>
    </section>
  );
};
