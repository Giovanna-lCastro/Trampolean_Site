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
    <section className="bg-white py-24 border-b border-tramp-navy/5">
      <div className="container2025Redesign text-center !pb-0">
        <h2 className="text-[3.5rem] md:text-[4.5rem] text-tramp-navy font-extrabold mb-10 leading-tight">
          Inovação com Raiz. Impacto com Propósito.
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-[1.8rem] md:text-[2rem] text-tramp-gray leading-relaxed">
            Nascemos da Ergonomia e da Segurança no Trabalho. Evoluímos para a Inovação em Processos Organizacionais. 
            Chegamos à Era da Inteligência Artificial com a mesma missão de sempre: colocar o ser humano no centro de tudo.
          </p>
          <p className="text-[1.6rem] md:text-[1.8rem] text-tramp-gray/70 leading-relaxed italic">
            A Trampolean combina profunda expertise em SST com tecnologias de ponta para criar soluções que 
            transformam ambientes de trabalho — tornando-os mais seguros, inteligentes e humanos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-24">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="group p-12 rounded-[2.5rem] border border-tramp-navy/5 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_80px_rgba(26,60,94,0.08)] hover:-translate-y-3 transition-all duration-500 text-left h-full flex flex-col justify-between"
            >
              <div>
                <div className="text-[5rem] mb-10 transform group-hover:scale-110 transition-transform duration-500 origin-left">
                  {pillar.icon}
                </div>
                <h3 className="text-[2.2rem] font-bold text-tramp-navy mb-6 tracking-tight group-hover:text-tramp-cyan transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-[1.6rem] text-tramp-gray leading-relaxed opacity-80">
                  {pillar.description}
                </p>
              </div>
              
              <div className="mt-10 h-1 w-12 bg-tramp-cyan/20 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
