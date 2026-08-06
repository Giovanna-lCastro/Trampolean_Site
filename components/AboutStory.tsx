"use client";

import React from "react";
import { motion } from "framer-motion";

export const AboutStory = () => {
  return (
    <section id="historia" className="bg-white py-32 overflow-hidden border-b border-black/5">
      <div className="container2025Redesign">
        <div className="flex flex-wrap lg:flex-nowrap gap-16 items-start">
          {/* Section Title & Label */}
          <div className="w-full lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-tramp-accent font-bold text-[1.4rem] tracking-[0.2em] uppercase mb-4 block">
                Nossa Trajetória
              </span>
              <h2 className="text-balance text-[3.2rem] md:text-[4.5rem] font-black text-tramp-dark leading-[1.2] mb-8">
                Entre educação, tecnologia e ciência do trabalho.
              </h2>
            </motion.div>
          </div>

          {/* Content Texts */}
          <div className="w-full lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <p className="text-[1.8rem] md:text-[2rem] leading-relaxed text-tramp-gray">
                A Trampolean nasceu da investigação sobre como as pessoas aprendem, trabalham, comunicam, decidem
                e interagem com sistemas complexos. Essa base orientou a expansão da empresa para educação
                corporativa, transformação digital, inteligência artificial, software, jogos e experiências
                imersivas.
              </p>
              <p className="text-[1.8rem] md:text-[2rem] leading-relaxed text-tramp-gray">
                Nossa atuação combina ergonomia para compreender o trabalho real, semiótica para analisar
                linguagem e produção de sentido, educação para desenvolver competências e tecnologia para
                implementar soluções. Essa integração permite atuar em problemas que não são apenas técnicos,
                mas também organizacionais, humanos e comunicacionais.
              </p>
              <p className="text-[1.8rem] md:text-[2rem] leading-relaxed text-tramp-gray font-medium italic border-l-4 border-tramp-accent pl-8 py-2">
                Não construímos tecnologia pela tecnologia. Construímos pontes entre o que as pessoas precisam
                e o que a tecnologia torna possível.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
