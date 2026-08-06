"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ProductProps {
  id: string;
  tag: string;
  title: string;
  description: string;
  fullDescription: string;
  benefits: string[];
  image: string;
  reverse?: boolean;
}

const ProductSection = ({ id, tag, title, description, fullDescription, benefits, image, reverse }: ProductProps) => (
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
          <h2 className="text-balance text-[3.2rem] md:text-[4.5rem] font-black text-tramp-dark leading-[1.2] mb-6 tracking-tight">
            {title}
          </h2>
          <h3 className="text-[1.8rem] md:text-[2.2rem] font-semibold text-tramp-gray/80 mb-8 italic">
            {description}
          </h3>
          <p className="text-[1.6rem] md:text-[1.8rem] leading-relaxed text-tramp-gray mb-10">
            {fullDescription}
          </p>

          <ul className="space-y-4 mb-12">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-center gap-4 text-[1.5rem] md:text-[1.7rem] text-tramp-gray-muted group cursor-default">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-tramp-accent/10 text-tramp-accent flex items-center justify-center font-bold">✓</span>
                <span className="group-hover:translate-x-2 transition-transform duration-200">{benefit}</span>
              </li>
            ))}
          </ul>

          <Link 
            href="/contato"
            className="inline-flex items-center gap-3 bg-tramp-dark text-white px-10 py-5 rounded-2xl text-[1.7rem] font-bold shadow-xl hover:bg-tramp-accent transition-all duration-300"
          >
            Saber mais / Contato
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

export const ProductDetail = () => {
  const products = [
    {
      id: "manual-etica",
      tag: "Governança & Compliance",
      title: "Manual de Ética de IA para Empresas",
      description: "O guia prático para implementar inteligência artificial com responsabilidade e conformidade.",
      fullDescription: "Produto desenvolvido para ajudar empresas a adotarem IA de forma responsável. Cobre desde princípios fundamentais até protocolos de auditoria e conformidade com a LGPD.",
      benefits: [
        "Protocolos de governança prontos para aplicação",
        "Alinhamento com LGPD e marcos regulatórios",
        "Redução de riscos reputacionais e legais",
        "Customizável para cada empresa"
      ],
      image: "https://images.unsplash.com/photo-1544396821-4dd40b938ad3?q=80&w=800&auto=format&fit=crop",
      reverse: false
    },
    {
      id: "book-wizard",
      tag: "Inteligência Artificial",
      title: "Book Wizard",
      description: "A IA que transforma suas ideias em livros completos — do conceito ao conteúdo estruturado.",
      fullDescription: "Ferramenta de IA generativa para criação assistida de livros, apostilas e materiais corporativos. Reduz drasticamente o tempo de produção mantendo a qualidade técnica.",
      benefits: [
        "Geração automatizada de estrutura e conteúdo",
        "Ideal para materiais técnicos e didáticos",
        "Interface intuitiva",
        "Exportação em múltiplos formatos (PDF, Word, ePub)"
      ],
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop",
      reverse: true
    },
    {
       id: "player-2",
       tag: "Game Development",
       title: "Player 2",
       description: "O plugin que integra geração de jogos por IA diretamente no Unity.",
       fullDescription: "Assistente de IA dentro da Unity Engine que acelera o desenvolvimento de jogos. Permite criar mecânicas, cenários e NPCs com auxílio de IA generativa em tempo real.",
       benefits: [
         "Integração nativa com a Unity",
         "Geração de assets e mecânicas assistida por IA",
         "Acelera a prototipagem",
         "Ideal para serious games e jogos corporativos"
       ],
       image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
       reverse: false
    },
    {
       id: "kapta",
       tag: "ESG & Gamificação",
       title: "Kapta",
       description: "Plataforma gamificada que transforma a coleta de resíduos em engajamento real.",
       fullDescription: "Aplica mecânicas de jogo à coleta seletiva e à gestão de resíduos. Por meio de desafios e recompensas, engaja comunidades e colaboradores e gera relatórios de impacto ESG.",
       benefits: [
         "Engajamento sustentado por gamificação",
         "Painel de dados para relatórios ESG",
         "Adaptável para empresas, condomínios e governos",
         "Incentiva mudança de comportamento"
       ],
       image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop",
       reverse: true
    }
  ];

  return (
    <div className="bg-white">
      {products.map((p, idx) => (
        <ProductSection key={idx} {...p} />
      ))}
    </div>
  );
};
