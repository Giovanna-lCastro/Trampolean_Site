"use client";

import React from "react";
import { motion } from "framer-motion";
import { Palette, BarChart3, Award, Trophy, Layers, ShieldCheck } from "lucide-react";
import { PLATAFORMA_URL } from "@/lib/cursos";

const ETAPAS = [
  { titulo: "Diagnóstico", texto: "Entendemos o momento da empresa e indicamos as trilhas certas para cada público." },
  { titulo: "Licença das trilhas", texto: "As trilhas escolhidas são liberadas no ambiente da sua empresa, sem cópia nem retrabalho." },
  { titulo: "Convite da equipe", texto: "Você gera links de convite por turma ou área. O colaborador se cadastra em minutos." },
  { titulo: "Acompanhamento", texto: "Relatórios de engajamento, conclusão, notas e certificados, exportáveis a qualquer momento." },
];

const ENTREGAS = [
  { Icon: Palette, titulo: "Plataforma com a sua marca", texto: "Logo, cores e textos da sua empresa em todo o ambiente do aluno." },
  { Icon: Layers, titulo: "Catálogo + trilhas exclusivas", texto: "Use o catálogo Trampolean e crie trilhas próprias, só da sua empresa." },
  { Icon: BarChart3, titulo: "Relatórios para o RH", texto: "Visão por turma, por pessoa e por trilha, com exportação em planilha." },
  { Icon: Trophy, titulo: "Gamificação", texto: "XP, missões, insígnias, ranking e loja de recompensas para manter o ritmo." },
  { Icon: Award, titulo: "Certificados verificáveis", texto: "Emitidos automaticamente ao fim de cada trilha, com código de verificação." },
  { Icon: ShieldCheck, titulo: "LGPD", texto: "Dados no Brasil e IA que não usa o conteúdo da sua empresa para treino." },
];

export const CoursesHowItWorks = () => (
  <section className="bg-tramp-bg-light">
    <div className="container2025Redesign">
      <h2 className="text-[3.2rem] md:text-[4.2rem] font-black text-tramp-dark leading-[1.15] mb-14 text-balance">
        Como funciona para a sua empresa
      </h2>

      <ol className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-24">
        {ETAPAS.map((e, i) => (
          <motion.li
            key={e.titulo}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="bg-white rounded-[2rem] p-8 border border-black/5"
          >
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full btn-premium-purple text-[1.6rem] font-black mb-6">
              {i + 1}
            </span>
            <h3 className="text-[2rem] font-black text-tramp-dark mb-3">{e.titulo}</h3>
            <p className="text-[1.5rem] text-tramp-gray leading-relaxed">{e.texto}</p>
          </motion.li>
        ))}
      </ol>

      <h2 className="text-[2.8rem] md:text-[3.6rem] font-black text-tramp-dark leading-[1.15] mb-12 text-balance">
        O que vem junto
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {ENTREGAS.map(({ Icon, titulo, texto }) => (
          <div key={titulo} className="flex gap-6 bg-white rounded-[2rem] p-8 border border-black/5">
            <Icon className="w-9 h-9 shrink-0 text-tramp-magenta" />
            <div>
              <h3 className="text-[1.8rem] font-black text-tramp-dark mb-2">{titulo}</h3>
              <p className="text-[1.5rem] text-tramp-gray leading-relaxed">{texto}</p>
            </div>
          </div>
        ))}
      </div>

      {PLATAFORMA_URL && (
        <p className="mt-14 text-[1.6rem] text-tramp-gray">
          Já é cliente?{" "}
          <a href={`${PLATAFORMA_URL}/login`} className="font-bold text-tramp-magenta hover:underline">
            Acesse a plataforma
          </a>
        </p>
      )}
    </div>
  </section>
);
