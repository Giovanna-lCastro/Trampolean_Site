import React from "react";
import Link from "next/link";

interface FeatureRowProps {
  title: string;
  subtitle: string;
  description: string;
  items: string[];
  image: string;
  reverse?: boolean;
  buttonText?: string;
}

const FeatureRow = ({ title, subtitle, description, items, image, reverse, buttonText }: FeatureRowProps) => (
  <div className={`container2025Redesign !py-16 md:!py-20 flex flex-wrap items-center gap-16 ${reverse ? "flex-row-reverse" : "flex-row"}`}>
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
      <Link
        href="/contato"
        className="inline-block mt-10 px-10 py-4 bg-tramp-navy text-white rounded-xl font-bold text-[1.6rem] shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
      >
        {buttonText || "Conheça as soluções"}
      </Link>
    </div>
    <div className="flex-1 min-w-[320px] md:min-w-[400px] relative group">
      {/* Decorative Background */}
      <div className="absolute top-[10%] left-[10%] w-full h-full bg-gradient-to-br from-tramp-bg-light to-tramp-bg-cyan rounded-[2.5rem] -z-10 group-hover:scale-105 transition-transform duration-500"></div>
      <img
        src={image}
        alt={title}
        className="w-full rounded-[2.5rem] shadow-2xl transition-transform duration-500 group-hover:-translate-y-2"
      />
    </div>
  </div>
);

export const Solutions = () => {
  const solutions = [
    {
      title: "Treinamentos obrigatórios, SIPATs e programas de segurança mais engajadores",
      subtitle: "Solução de Serviço",
      description: "A Trampolean transforma treinamentos de Segurança e Saúde no Trabalho em experiências mais claras, participativas e memoráveis. Criamos DDS, SIPATs, trilhas de aprendizagem, campanhas internas e formações obrigatórias com linguagem acessível, gamificação, narrativas, recursos digitais e foco em mudança de comportamento.",
      items: [
        "DDS criativo e gamificado",
        "SIPATs com jogos, teatro e experiências digitais",
        "Treinamentos obrigatórios com linguagem simples e aplicável",
        "Campanhas de prevenção, saúde e segurança no trabalho",
        "Recursos com QR Codes, vídeos, quizzes e materiais interativos"
      ],
      image: "/noticia_e_img/Imagens/Congresso.jpg",
      reverse: false
    },
    {
      title: "Soluções digitais para capacitar equipes",
      subtitle: "Plataforma + Serviço",
      description: "A Trampolean cria plataformas, treinamentos, universidades corporativas, jogos, trilhas gamificadas e experiências digitais sob medida para empresas, órgãos públicos, universidades e grandes operações.",
      items: [
        "Universidade corporativa em Moodle ou plataforma sob medida",
        "Trilhas de aprendizagem por cargo, área ou competência",
        "Onboarding digital para novos trabalhadores",
        "Treinamentos obrigatórios com certificado e relatórios",
        "Quizzes, rankings, badges e desafios gamificados",
        "Dashboards para acompanhar participação e desempenho",
        "Campanhas internas de segurança, saúde, cultura e compliance",
        "Portais de conhecimento com vídeos, materiais, atividades e avaliações"
      ],
      image: "/noticia_e_img/Imagens/EAD.jpg",
      reverse: true,
      buttonText: "Quero criar uma plataforma de aprendizagem"
    },
    {
      title: "Método Semiose e Ética em Inteligência Artificial",
      subtitle: "CONSULTORIA + GOVERNANÇA EM IA",
      description: "A Trampolean orienta organizações na adoção responsável da IA, combinando ergonomia, semiótica, governança, educação corporativa e análise de riscos para apoiar decisões mais seguras e conscientes.",
      items: [
        "Comitês de Ética em IA",
        "Políticas de uso responsável",
        "Diagnóstico de maturidade em IA",
        "Letramento em IA para lideranças",
        "Análise de riscos, vieses e impactos"],
      image: "/img_site/reflexao.png",
      reverse: false,
      buttonText: "Conheça o Método Semiose"
    },
    {
      title: "Ergonomia e Saúde e Segurança do Trabalho (SST)",
      subtitle: "Técnica + Consultiva",
      description: "Realizamos Análises Ergonômicas do Trabalho (AET) em conformidade com a NR-17. Vamos além do laudo, integrando tecnologia e boas práticas globais.",
      items: ["Conformidade NR-17 e PGR", "Consultoria EHS e Sustentabilidade", "Saúde Mental no Trabalho"],
      image: "/noticia_e_img/Imagens/SST.jpg",
      reverse: true
    },
    {
      title: "Saúde Digital e Bem-Estar Corporativo",
      subtitle: "Plataforma + Conteúdo",
      description: "Soluções digitais integradas para promover o bem-estar físico e mental. Triagem digital de riscos ergonômicos e programas de saúde mental escaláveis.",
      items: ["Programas de saúde mental gamificados", "Triagem digital postural", "Dashboards de saúde organizacional"],
      image: "/img_site/Persona 01.webp",
      reverse: false
    }
  ];

  return (
    <section id="solucoes" className="bg-white overflow-hidden">
      <div className="container2025Redesign text-center !pb-0 mb-10 md:mb-16">
        <span className="inline-block px-4 py-1 bg-tramp-magenta/10 text-tramp-magenta text-[1.3rem] font-bold uppercase tracking-widest rounded-lg mb-6">
          Nossas Soluções
        </span>
        <h2 className="text-[3.5rem] md:text-[4.5rem] text-tramp-navy font-black leading-tight tracking-tight">
          Tecnologia para impulsionar sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-tramp-gradient-start to-tramp-gradient-end">Evolução</span>
        </h2>
        <p className="mt-6 text-tramp-gray opacity-80 text-[1.8rem] md:text-[2.1rem] text-pretty leading-relaxed">
          Combinamos Inteligência Artificial, Ergonomia e Educação para entregar ferramentas e serviços que redefinem os limites da produtividade, cuidado e gestão.
        </p>
      </div>
      {solutions.map((s, idx) => (
        <FeatureRow key={idx} {...s} />
      ))}
    </section>
  );
};
