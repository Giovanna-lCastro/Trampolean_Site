"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface EducationProps {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  forWhom: string;
  format: string;
  topics: string[];
  image: string;
  reverse?: boolean;
}

const EducationSection = ({ id, tag, title, subtitle, description, forWhom, format, topics, image, reverse }: EducationProps) => (
  <section id={id} className={`py-32 overflow-hidden border-b border-black/5 ${reverse ? "bg-tramp-bg-light/10" : "bg-white"}`}>
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
          <span className="inline-block px-4 py-1 bg-tramp-magenta/10 text-tramp-magenta text-[1.3rem] font-bold uppercase tracking-widest rounded-lg mb-6">
            {tag}
          </span>
          <h2 className="text-[3.2rem] md:text-[4.5rem] font-black text-tramp-dark leading-[1.2] mb-6 tracking-tight">
            {title}
          </h2>
          <h3 className="text-[1.8rem] md:text-[2.2rem] font-semibold text-tramp-gray/80 mb-8 italic">
            {subtitle}
          </h3>
          <p className="text-[1.6rem] md:text-[1.8rem] leading-relaxed text-tramp-gray mb-8">
            {description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 p-6 bg-tramp-dark/5 rounded-2xl border border-black/5">
             <div>
                <h4 className="text-[1.4rem] font-bold text-tramp-dark uppercase tracking-wider mb-2">Para quem é:</h4>
                <p className="text-[1.5rem] text-tramp-gray-muted">{forWhom}</p>
             </div>
             <div>
                <h4 className="text-[1.4rem] font-bold text-tramp-dark uppercase tracking-wider mb-2">Formato:</h4>
                <p className="text-[1.5rem] text-tramp-gray-muted">{format}</p>
             </div>
          </div>

          <h4 className="text-[1.8rem] font-bold text-tramp-dark mb-6">Temas abordados:</h4>
          <ul className="space-y-4 mb-12">
            {topics.map((topic, idx) => (
              <li key={idx} className="flex items-center gap-4 text-[1.5rem] md:text-[1.7rem] text-tramp-gray-muted group cursor-default">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-tramp-magenta/10 text-tramp-magenta flex items-center justify-center font-bold">✓</span>
                <span className="group-hover:translate-x-2 transition-transform duration-200">{topic}</span>
              </li>
            ))}
          </ul>

          <Link 
            href="/contato"
            className="inline-flex items-center gap-3 bg-tramp-dark text-white px-10 py-5 rounded-2xl text-[1.7rem] font-bold shadow-xl hover:bg-tramp-magenta transition-all duration-300"
          >
            Quero saber mais / Contato
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

export const EducationDetail = () => {
  const programs = [
    {
      id: "ia-educacao",
      tag: "Metodologia & Inovação",
      title: "IA na Educação",
      subtitle: "Uma metodologia de ensino que incorpora inteligência artificial para inovar o aprendizado em escolas, faculdades e corporações.",
      description: "O programa IA na Educação foi desenvolvido pela Trampolean para instituições de ensino e departamentos de T&D que desejam integrar inteligência artificial como ferramenta pedagógica. Abordamos desde a curadoria de conteúdo com IA até o design de experiências de aprendizagem personalizadas.",
      forWhom: "Professores, coordenadores pedagógicos, gestores de RH e T&D, diretores de ensino.",
      format: "Presencial, online ou híbrido — duração a definir por projeto.",
      topics: [
        "Fundamentos de IA aplicados ao contexto educacional",
        "Personalização do ensino com ferramentas de IA",
        "Avaliação e feedback automatizados",
        "Curadoria e geração de conteúdo com IA",
        "Ética e uso responsável de IA em ambientes educacionais"
      ],
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
      reverse: false
    },
    {
      id: "workshop-lideres",
      tag: "Liderança & Gestão",
      title: "Workshop IA para Líderes",
      subtitle: "Capacitação prática das principais ferramentas de inteligência artificial para líderes que querem ser mais produtivos e estratégicos.",
      description: "O Workshop IA para Líderes é um programa imersivo desenhado para gestores e C-levels que precisam entender, usar e tomar decisões estratégicas sobre IA. O foco é totalmente prático: cada participante sai com domínio de ferramentas reais e um plano de aplicação imediata.",
      forWhom: "Gestores de equipe, diretores, C-levels, líderes de projetos.",
      format: "Workshop presencial ou online — 1 a 2 dias.",
      topics: [
        "O que é IA e como ela já impacta seu setor",
        "Ferramentas de IA para produtividade pessoal e de equipe",
        "Tomada de decisão assistida por IA",
        "Como conduzir equipes na adoção de IA",
        "Casos práticos por segmento de mercado"
      ],
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
      reverse: true
    },
    {
      id: "treinamento-empresas",
      tag: "Capacitação Corporativa",
      title: "Treinamento de Uso de IA para Empresas",
      subtitle: "Um programa completo de capacitação para que os colaboradores da sua empresa adotem IA com confiança, segurança e eficiência.",
      description: "A solução corporativa da Trampolean para organizações que desejam escalar o conhecimento em IA internamente. O programa é customizado conforme o nível de maturidade digital da empresa, cobrindo desde o uso básico até fluxos de trabalho avançados.",
      forWhom: "Equipes inteiras, times de TI, RH, Marketing, Operações.",
      format: "Modular, presencial ou EAD — com trilhas por cargo/função.",
      topics: [
        "Introdução à IA: conceitos e aplicações práticas",
        "Ferramentas de IA para cada área da empresa",
        "Automação de tarefas repetitivas com IA",
        "Segurança, privacidade e ética no uso corporativo",
        "Criação de fluxos de trabalho potencializados por IA"
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
      reverse: false
    }
  ];

  return (
    <div className="bg-white">
      {programs.map((p, idx) => (
        <EducationSection key={idx} {...p} />
      ))}
    </div>
  );
};
