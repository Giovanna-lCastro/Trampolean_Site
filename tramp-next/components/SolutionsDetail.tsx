"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface SolutionProps {
  id: string;
  tag: string;
  title: string;
  description: string;
  itemsLabel: string;
  items: string[];
  image: string;
  reverse?: boolean;
}

const SolutionSection = ({ id, tag, title, description, itemsLabel, items, image, reverse }: SolutionProps) => (
  <section id={id} className={`overflow-hidden border-b border-black/5 ${reverse ? "bg-tramp-bg-light/10" : "bg-white"}`}>
    <div className="container2025Redesign">
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${reverse ? "lg:flex-row-reverse" : ""}`}>
        {/* Text Area */}
        <motion.div
           initial={{ opacity: 0, x: reverse ? 30 : -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className={reverse ? "lg:order-2" : ""}
        >
          <span className="inline-block px-4 py-1 bg-tramp-accent/10 text-tramp-accent text-[1.3rem] font-bold uppercase tracking-widest rounded-lg mb-6">
            {tag}
          </span>
          <h2 className="text-balance text-[3.2rem] md:text-[4.2rem] font-black text-tramp-dark leading-[1.2] mb-8 tracking-tight">
            {title}
          </h2>
          <p className="text-[1.8rem] md:text-[2rem] leading-relaxed text-tramp-gray mb-10">
            {description}
          </p>

          <h4 className="text-[1.8rem] font-bold text-tramp-dark mb-6">{itemsLabel}:</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {items.map((item, idx) => (
              <li key={idx} className="flex items-center gap-4 text-[1.5rem] md:text-[1.6rem] text-tramp-gray-muted group cursor-default">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-tramp-accent/10 text-tramp-accent flex items-center justify-center font-bold text-[1rem]">✓</span>
                <span className="group-hover:translate-x-2 transition-transform duration-200">{item}</span>
              </li>
            ))}
          </ul>

          <Link 
            href="/contato"
            className="inline-flex items-center gap-3 bg-tramp-dark text-white px-10 py-5 rounded-2xl text-[1.7rem] font-bold shadow-xl hover:bg-tramp-accent transition-all duration-300"
          >
            Falar com um especialista
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
        </motion.div>

        {/* Image Area */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className={`relative group ${reverse ? "lg:order-1" : ""}`}
        >
          <div className="absolute inset-0 bg-tramp-dark/5 rounded-[3rem] -z-10 group-hover:scale-105 transition-transform duration-500" />
          <img 
            src={image} 
            alt={title} 
            className="w-full h-auto rounded-[3rem] shadow-2xl hover:-translate-y-4 transition-transform duration-500"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export const SolutionsDetail = () => {
  const solutions = [
    {
      id: "estrategia-ia",
      tag: "Estratégia",
      title: "Transformação Digital e Estratégia de IA",
      description: "Estruturamos estratégias de transformação a partir dos objetivos, processos, riscos, pessoas e tecnologias da organização.",
      itemsLabel: "Entregáveis",
      items: [
        "Diagnóstico de maturidade digital e de IA",
        "Mapeamento de processos e oportunidades",
        "Roadmap de transformação",
        "Governança, políticas e comitês de IA",
        "Método Semiose",
        "Pilotos, indicadores e gestão da adoção",
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      reverse: false
    },
    {
      id: "automacoes-agentes-software",
      tag: "Tecnologia",
      title: "Automações, Agentes e Software",
      description: "Automatizamos processos e desenvolvemos soluções digitais sob medida, com ou sem inteligência artificial. Atuamos desde fluxos específicos até sistemas integrados de maior complexidade.",
      itemsLabel: "Exemplos",
      items: [
        "Atendimento e triagem",
        "Geração e análise de documentos",
        "Relatórios e dashboards",
        "Aprovações e fluxos internos",
        "Integração entre sistemas e APIs",
        "Agentes e assistentes de IA",
        "Bases de conhecimento e RAG",
        "Portais, aplicativos e plataformas sob medida",
      ],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
      reverse: true
    },
    {
      id: "jogos-gamificacao-experiencias",
      tag: "Experiências",
      title: "Jogos, Gamificação e Experiências Imersivas",
      description: "Desenvolvemos jogos e experiências interativas para treinamento, educação, cultura, vendas, saúde, segurança, sustentabilidade e entretenimento.",
      itemsLabel: "Entregáveis",
      items: [
        "Serious games",
        "Jogos educacionais e corporativos",
        "Jogos de entretenimento",
        "Simuladores de decisão e treinamento",
        "Campanhas gamificadas",
        "Realidade virtual e experiências imersivas",
        "Desenvolvimento multiplataforma",
      ],
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
      reverse: false
    },
    {
      id: "educacao-corporativa-ia",
      tag: "Capacitação",
      title: "Educação Corporativa e Treinamentos de IA",
      description: "Criamos formações práticas para que líderes e equipes compreendam, utilizem e governem a inteligência artificial em seus contextos reais de trabalho.",
      itemsLabel: "Entregáveis",
      items: [
        "IA para líderes e C-levels",
        "Letramento em IA",
        "IA aplicada às áreas de negócio",
        "Engenharia de prompts",
        "Automação de fluxos com IA",
        "IA na educação",
        "Ética, segurança e governança",
        "Trilhas, workshops e laboratórios",
      ],
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
      reverse: true
    },
    {
      id: "ergonomia-semiotica-fatores-humanos",
      tag: "Fatores Humanos",
      title: "Ergonomia, Semiótica e Fatores Humanos",
      description: "Aplicamos ergonomia e semiótica para compreender como pessoas trabalham, interpretam informações, interagem com tecnologias e produzem sentido em sistemas complexos.",
      itemsLabel: "Entregáveis",
      items: [
        "Análise Ergonômica do Trabalho (AET) — conformidade NR-17 e PGR",
        "Ergonomia de interfaces e sistemas digitais",
        "Fatores humanos e experiência do usuário",
        "Riscos psicossociais e organização do trabalho",
        "Análise semiótica de interfaces, documentos e narrativas",
        "Arquitetura de informação e linguagem",
        "SST, EHS, DDS, SIPATs e treinamentos obrigatórios",
        "Campanhas de saúde, prevenção e bem-estar",
      ],
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop",
      reverse: false
    }
  ];

  return (
    <div className="bg-white">
      {solutions.map((s, idx) => (
        <SolutionSection key={idx} {...s} />
      ))}
    </div>
  );
};
