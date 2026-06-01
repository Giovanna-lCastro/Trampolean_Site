"use client";

import React from "react";
import { Brain, Bot, BookOpen, HeartPulse, Rocket, Gamepad2, MonitorSmartphone, Glasses } from "lucide-react";
import { motion } from "framer-motion";

export const Features = () => {
  const pillars = [
    {
      title: "Inteligência Artificial para Empresas",
      description: "Treinamentos, consultoria e soluções em IA para melhorar processos, apoiar decisões, automatizar rotinas e preparar equipes para a transformação digital.",
      icon: <Brain className="w-16 h-16 text-tramp-magenta" />
    },
    {
      title: "Agentes de IA e Automação",
      description: "Criamos agentes inteligentes, assistentes internos e fluxos automatizados para atendimento, operação, gestão do conhecimento e aumento de produtividade.",
      icon: <Bot className="w-16 h-16 text-tramp-magenta" />
    },
    {
      title: "Educação Corporativa",
      description: "Desenvolvemos universidades corporativas, trilhas de aprendizagem, programas de capacitação e microlearning alinhados às metas do negócio.",
      icon: <BookOpen className="w-16 h-16 text-tramp-magenta" />
    },
    {
      title: "Ergonomia e Saúde no Trabalho",
      description: "Atuamos com ergonomia, fatores humanos, segurança do trabalho e prevenção de riscos psicossociais para promover ambientes mais seguros, saudáveis e produtivos.",
      icon: <HeartPulse className="w-16 h-16 text-tramp-magenta" />
    },
    {
      title: "Transformação Digital",
      description: "Realizamos diagnósticos, mapeamos processos e recomendamos soluções digitais para empresas que precisam inovar com coerência, eficiência e sustentabilidade.",
      icon: <Rocket className="w-16 h-16 text-tramp-magenta" />
    },
    {
      title: "Gamificação e Jogos Digitais",
      description: "Criamos experiências gamificadas, jogos corporativos e soluções interativas para aumentar engajamento, retenção e aplicação prática do conhecimento.",
      icon: <Gamepad2 className="w-16 h-16 text-tramp-magenta" />
    },
    {
      title: "Software Sob Medida e UX/UI",
      description: "Desenvolvemos plataformas, sistemas e produtos digitais com foco em usabilidade, eficiência operacional e aderência real às necessidades do cliente.",
      icon: <MonitorSmartphone className="w-16 h-16 text-tramp-magenta" />
    },
    {
      title: "Realidade Virtual e Experiências Imersivas",
      description: "Projetamos simulações, treinamentos em realidade virtual e experiências imersivas para aprendizagem prática, sensibilização e desenvolvimento de competências.",
      icon: <Glasses className="w-16 h-16 text-tramp-magenta" />
    }
  ];

  return (
    <section className="bg-white py-32 border-b border-tramp-navy/5">
      <div className="container2025Redesign !pb-0">
        {/* Z-Pattern Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <span className="inline-block px-4 py-1 bg-tramp-magenta/10 text-tramp-magenta text-[1.3rem] font-bold uppercase tracking-widest rounded-lg mb-6">
              ERGONOMIA, SEGURANÇA DO TRABALHO E INTELIGÊNCIA ARTIFICIAL
            </span>
            <h2 className="text-[3.5rem] md:text-[5.5rem] text-tramp-navy font-black mb-10 leading-[1.1] tracking-tight">
              Tecnologia para tornar o trabalho<br /> <span className="text-tramp-magenta"> mais seguro, inteligente e humano.</span>
            </h2>
            <div className="space-y-6">
              <p className="text-[1.8rem] md:text-[2.1rem] text-tramp-gray leading-relaxed">
                A Trampolean nasceu da Ergonomia de Sistemas de Produção e da Segurança e Saúde no Trabalho. Hoje, desenvolve soluções em inteligência artificial, educação corporativa, saúde digital, UX/UI, jogos digitais e software sob medida para empresas que precisam transformar processos, capacitar equipes e reduzir riscos no trabalho.
              </p>
              <p className="text-[1.6rem] md:text-[1.8rem] text-tramp-gray/70 leading-relaxed italic border-l-4 border-tramp-magenta pl-8">
                Combinamos diagnóstico técnico, formação de pessoas e desenvolvimento de soluções digitais para apoiar organizações na gestão da ergonomia, na prevenção de riscos psicossociais e na inovação de processos com foco em produtividade, segurança e cuidado.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-tramp-magenta/10 blur-[100px] rounded-full"></div>
            <img
              src="/img_site/times_usando_ia.png"
              alt="Technology and Human collaboration"
              className="relative z-10 w-full rounded-[3rem] shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-12 rounded-[2.5rem] border border-tramp-navy/5 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_80px_rgba(130,0,250,0.12)] hover:-translate-y-3 transition-all duration-500 text-left h-full flex flex-col justify-between"
            >
              <div>
                <div className="mb-10 transform group-hover:scale-110 transition-transform duration-500 origin-left">
                  {pillar.icon}
                </div>
                <h3 className="text-[2.2rem] font-bold text-tramp-navy mb-6 tracking-tight group-hover:text-tramp-magenta transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-[1.6rem] text-tramp-gray leading-relaxed opacity-80">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-10 h-1 w-12 bg-tramp-magenta/20 group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
