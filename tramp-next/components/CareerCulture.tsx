"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Users, Layers, ShieldCheck, Code2, GraduationCap, Megaphone, BarChart3 } from "lucide-react";

export const CareerCulture = () => {
  const values = [
    { title: "Inovação com aplicação real", icon: <Lightbulb className="w-8 h-8 text-tramp-magenta" /> },
    { title: "Impacto humano", icon: <Users className="w-8 h-8 text-tramp-magenta" /> },
    { title: "Interdisciplinaridade de verdade", icon: <Layers className="w-8 h-8 text-tramp-magenta" /> },
    { title: "Liberdade com responsabilidade", icon: <ShieldCheck className="w-8 h-8 text-tramp-magenta" /> },
  ];

  const jobs = [
    {
      title: "Estágio (múltiplas áreas)",
      description: "Oportunidades em Tech, Design/UX, Educação e Social Media.",
      icon: <GraduationCap className="w-10 h-10 text-tramp-magenta" />,
    },
    {
      title: "Pessoa Desenvolvedora (Full Stack / IA)",
      description: "Web, agentes, RAG, automações e integrações.",
      icon: <Code2 className="w-10 h-10 text-tramp-magenta" />,
    },
    {
      title: "Analista de PMO",
      description: "Governança e entrega de projetos multidisciplinares.",
      icon: <BarChart3 className="w-10 h-10 text-tramp-magenta" />,
    },
    {
      title: "Social Media / Analista de Conteúdo",
      description: "Traduzir a autoridade técnica em conteúdo por canal.",
      icon: <Megaphone className="w-10 h-10 text-tramp-magenta" />,
    },
  ];

  return (
    <section className="bg-white overflow-hidden border-b border-black/5">
       <div className="container2025Redesign text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1 bg-tramp-magenta/10 text-tramp-magenta text-[1.3rem] font-bold uppercase tracking-widest rounded-lg mb-6">
              Nossa Cultura
            </span>
            <h2 className="text-balance text-[3.5rem] md:text-[5.5rem] text-tramp-navy font-black mb-10 leading-tight">
              Por que a <span className="text-tramp-magenta">Trampolean?</span>
            </h2>
            <p className="max-w-4xl mx-auto text-[1.8rem] md:text-[2.1rem] text-tramp-gray leading-relaxed mb-16">
              Do diagnóstico à entrega, no mesmo projeto: diagnosticamos, desenhamos a estratégia, formamos pessoas, automatizamos processos e desenvolvemos a tecnologia. Você resolve problemas que não são só técnicos, mas organizacionais, humanos e comunicacionais.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6 mb-24">
             {values.map((v, idx) => (
                <motion.div
                   key={idx}
                   initial={{ opacity: 0, y: 15 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.1 }}
                   className="flex items-center gap-4 bg-white px-8 py-6 rounded-3xl border border-tramp-navy/5 shadow-[0_20px_50px_rgba(0,0,0,0.03)]"
                >
                   {v.icon}
                   <span className="text-[1.6rem] font-bold text-tramp-navy text-left">{v.title}</span>
                </motion.div>
             ))}
          </div>
       </div>

       <div id="vagas" className="container2025Redesign scroll-mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-tramp-magenta/10 text-tramp-magenta text-[1.3rem] font-bold uppercase tracking-widest rounded-lg mb-6">
              Oportunidades
            </span>
            <h2 className="text-balance text-[3.2rem] md:text-[4.5rem] text-tramp-navy font-black leading-tight">
              Vagas abertas
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
             {jobs.map((job, idx) => (
                <motion.div
                   key={idx}
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.1 }}
                   className="bg-white p-12 rounded-[3.5rem] border border-tramp-navy/5 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(130,0,250,0.1)] hover:-translate-y-4 transition-all duration-500 group"
                >
                   <div className="mb-10 p-6 bg-tramp-magenta/5 w-fit rounded-3xl group-hover:scale-110 transition-transform duration-500">
                      {job.icon}
                   </div>
                   <h3 className="text-[2.4rem] font-bold text-tramp-navy mb-6 group-hover:text-tramp-magenta transition-colors">{job.title}</h3>
                   <p className="text-[1.7rem] text-tramp-gray leading-relaxed opacity-80">{job.description}</p>
                </motion.div>
             ))}
          </div>
       </div>
    </section>
  );
};
