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
          <span className="inline-block px-4 py-1 bg-tramp-accent/10 text-tramp-accent text-[1.3rem] font-bold uppercase tracking-widest rounded-lg mb-6">
            {tag}
          </span>
          <h2 className="text-[3.2rem] md:text-[4.5rem] font-black text-tramp-dark leading-[1.2] mb-8 tracking-tight">
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
      id: "consultoria-ia",
      tag: "Estratégia",
      title: "Consultoria de IA",
      description: "Ajudamos sua empresa a entender onde e como aplicar inteligência artificial de forma estratégica, ética e com retorno mensurável. Do mapeamento de oportunidades à definição de roadmap de adoção, nossa consultoria é orientada a resultado.",
      itemsLabel: "Entregáveis típicos",
      items: ["Diagnóstico de maturidade digital", "Mapa de oportunidades de IA", "Roadmap de implementação", "Políticas de governança"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      reverse: false
    },
    {
      id: "dev-jogos",
      tag: "Game Dev",
      title: "Desenvolvimento de Jogos",
      description: "Criamos jogos sérios, educacionais, corporativos e de entretenimento com alta qualidade técnica e criativa. Nossas produções unem narrativa envolvente, mecânicas bem projetadas e tecnologia de ponta.",
      itemsLabel: "Tipos de jogos",
      items: ["Jogos sérios (treinamento)", "Jogos educacionais", "Simuladores", "Jogos mobile", "Experiências gamificadas"],
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
      reverse: true
    },
    {
      id: "dev-software",
      tag: "Tecnologia",
      title: "Desenvolvimento de Software",
      description: "Desenvolvemos sistemas, aplicativos e plataformas digitais sob medida para as necessidades do seu negócio. Trabalhamos com metodologias ágeis, foco em experiência do usuário e arquitetura escalável.",
      itemsLabel: "Tipos de entrega",
      items: ["Aplicações web", "Apps mobile", "APIs e integrações", "Sistemas internos", "Plataformas SaaS"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
      reverse: false
    },
    {
      id: "automacao-ia",
      tag: "Eficiência",
      title: "Automação de IA",
      description: "Mapeamos e automatizamos processos repetitivos e de alto volume usando inteligência artificial e ferramentas de fluxo inteligente. O resultado é uma operação eficiente, com menos erros e mais tempo estratégico.",
      itemsLabel: "Casos de uso",
      items: ["Atendimento automatizado", "Geração de relatórios", "Triagem de documentos", "Fluxos de aprovação", "Integração entre sistemas"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop",
      reverse: true
    },
    {
      id: "treinamentos",
      tag: "Capacitação",
      title: "Treinamentos",
      description: "Desenvolvemos e facilitamos treinamentos corporativos em tecnologia, inovação e inteligência artificial, adaptados ao perfil da sua organização. Combinamos teoria e prática.",
      itemsLabel: "Formatos",
      items: ["Presencial", "Online / Híbrido", "Assíncrono (EAD)", "Trilhas personalizadas"],
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
      reverse: false
    },
    {
      id: "workshops",
      tag: "Imersão",
      title: "Workshops",
      description: "Workshops imersivos de 1 a 2 dias para times, lideranças e projetos específicos. Focados em resolução de problemas reais com entregáveis concretos ao final.",
      itemsLabel: "Exemplos de temas",
      items: ["IA para líderes", "Inovação em equipe", "Design de produtos digitais", "Gamificação aplicada"],
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
      reverse: true
    },
    {
      id: "gamificacao",
      tag: "Engajamento",
      title: "Gamificação",
      description: "Aplicamos mecânicas de jogo em contextos corporativos e educacionais para aumentar engajamento e motivação. Nossa abordagem é baseada em ciência comportamental.",
      itemsLabel: "Aplicações",
      items: ["Onboarding de colaboradores", "Programas de saúde", "Treinamentos & Vendas", "Sustentabilidade (ESG)"],
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
      reverse: false
    },
    {
      id: "sst",
      tag: "SST & ESG",
      title: "Saúde e Segurança do Trabalho",
      description: "Desenvolvemos soluções tecnológicas voltadas para a saúde e segurança do trabalho, integrando gamificação e IA para melhorar indicadores de segurança e qualidade de vida.",
      itemsLabel: "Entregáveis",
      items: ["Plataformas de SST gamificadas", "Treinamentos de segurança", "Módulos de conscientização", "Painéis de indicadores"],
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop",
      reverse: true
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
