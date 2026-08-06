import React from "react";

export const AboutDifferentiators = () => {
  const pillars = [
    {
      title: "Transformação digital sociotécnica",
      description: "Consideramos tecnologia, trabalho, linguagem, aprendizagem, cultura, riscos e organização como partes do mesmo sistema.",
    },
    {
      title: "Ergonomia e trabalho real",
      description: "Desenhamos soluções a partir da atividade como ela acontece — variabilidades, restrições, riscos e estratégias reais das pessoas —, e não apenas de processos prescritos.",
    },
    {
      title: "Semiótica aplicada",
      description: "Analisamos linguagem, signos, interfaces, narrativas e documentos para fortalecer comunicação, experiência, aprendizagem e adoção.",
    },
    {
      title: "Educação como infraestrutura",
      description: "Tecnologia só gera valor quando as pessoas desenvolvem repertório e segurança para aplicá-la. Por isso formação pode integrar qualquer projeto.",
    },
    {
      title: "Capacidade de desenvolvimento",
      description: "Não só recomendamos. Desenvolvemos automações, agentes, softwares, plataformas, jogos e experiências sob medida.",
    },
    {
      title: "Governança e responsabilidade",
      description: "Ética, privacidade, segurança, validação, rastreabilidade e gestão de riscos incorporadas ao desenho das soluções.",
    },
  ];

  return (
    <section className="bg-tramp-bg-light/20 border-y border-black/5">
      <div className="container2025Redesign">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-tramp-magenta/10 text-tramp-magenta text-[1.3rem] font-bold uppercase tracking-widest rounded-lg mb-6">
            O que nos torna diferentes
          </span>
          <h2 className="text-balance text-[3rem] md:text-[4.2rem] text-tramp-navy font-black leading-tight tracking-tight">
            Pilares metodológicos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-10 rounded-[2.5rem] border border-tramp-navy/5 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.04)] text-left h-full"
            >
              <h3 className="text-[2rem] font-bold text-tramp-navy mb-4 tracking-tight">
                {pillar.title}
              </h3>
              <p className="text-[1.6rem] text-tramp-gray leading-relaxed opacity-80">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
