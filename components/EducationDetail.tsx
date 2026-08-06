"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface EducationProps {
  id: string;
  tag: string;
  title: string;
  description: string;
  forWhom: string;
  image: string;
  reverse?: boolean;
}

const EducationSection = ({ id, tag, title, description, forWhom, image, reverse }: EducationProps) => (
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
          <span className="inline-block px-4 py-1 bg-tramp-magenta/10 text-tramp-magenta text-[1.3rem] font-bold uppercase tracking-widest rounded-lg mb-6">
            {tag}
          </span>
          <h2 className="text-[3.2rem] md:text-[4.5rem] font-black text-tramp-dark leading-[1.2] mb-6 tracking-tight text-balance">
            {title}
          </h2>
          <p className="text-[1.6rem] md:text-[1.8rem] leading-relaxed text-tramp-gray mb-8">
            {description}
          </p>

          <div className="mb-10 p-6 bg-tramp-dark/5 rounded-2xl border border-black/5">
             <h4 className="text-[1.4rem] font-bold text-tramp-dark uppercase tracking-wider mb-2">Para quem é:</h4>
             <p className="text-[1.5rem] text-tramp-gray-muted">{forWhom}</p>
          </div>

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
      id: "ia-liderancas",
      tag: "Liderança & Estratégia",
      title: "IA para Lideranças",
      description: "Formação executiva para compreender impactos, identificar oportunidades, avaliar riscos e conduzir a transformação digital.",
      forWhom: "Gestores, diretores, C-levels e conselhos.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
      reverse: false
    },
    {
      id: "ia-aplicada-trabalho",
      tag: "Produtividade & Prática",
      title: "IA Aplicada ao Trabalho",
      description: "Programas práticos sobre pesquisa, análise, produção de conteúdo, engenharia de prompts, agentes, automações e fluxos de trabalho.",
      forWhom: "Equipes de todas as áreas.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
      reverse: true
    },
    {
      id: "ia-educacao",
      tag: "Educação & Pedagogia",
      title: "IA na Educação",
      description: "Formação para docentes e gestores sobre práticas pedagógicas, autoria, avaliação, curadoria, governança e transformação da aprendizagem.",
      forWhom: "Professores, coordenadores, gestores de ensino e T&D.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
      reverse: false
    },
    {
      id: "governanca-uso-responsavel",
      tag: "Governança & Ética",
      title: "Governança e Uso Responsável",
      description: "Formação sobre ética, privacidade, segurança, vieses, propriedade intelectual, validação e responsabilidade humana.",
      forWhom: "Lideranças, jurídico, compliance e comitês de IA.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
      reverse: true
    },
    {
      id: "trilhas-universidades-corporativas",
      tag: "Trilhas & T&D",
      title: "Trilhas e Universidades Corporativas",
      description: "Arquitetura de aprendizagem, plataformas, microlearning, gamificação, avaliação e indicadores de aplicação.",
      forWhom: "RH, T&D e universidades corporativas.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
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
