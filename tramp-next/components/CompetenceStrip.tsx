import React from "react";

export const CompetenceStrip = () => {
  const items = [
    "Transformação digital e estratégia de IA",
    "Automações, agentes e software",
    "Jogos digitais e gamificação",
    "Treinamentos de IA e educação corporativa",
    "Ergonomia, semiótica e fatores humanos",
  ];

  return (
    <section className="bg-tramp-dark border-b border-white/10 py-10">
      <div className="container2025Redesign !py-0">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {items.map((item) => (
            <span
              key={item}
              className="text-[1.3rem] md:text-[1.4rem] font-semibold uppercase tracking-wider text-white/70 text-center px-5 py-2 rounded-full border border-white/10"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
