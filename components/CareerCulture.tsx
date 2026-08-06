"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Users, Layers, ShieldCheck, Code2, GraduationCap, Megaphone, BarChart3 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const valuesIcons = [
  <Lightbulb key="lightbulb" className="w-8 h-8 text-tramp-magenta" />,
  <Users key="users" className="w-8 h-8 text-tramp-magenta" />,
  <Layers key="layers" className="w-8 h-8 text-tramp-magenta" />,
  <ShieldCheck key="shield" className="w-8 h-8 text-tramp-magenta" />,
];

const jobsIcons = [
  <GraduationCap key="grad" className="w-10 h-10 text-tramp-magenta" />,
  <Code2 key="code" className="w-10 h-10 text-tramp-magenta" />,
  <BarChart3 key="bar" className="w-10 h-10 text-tramp-magenta" />,
  <Megaphone key="megaphone" className="w-10 h-10 text-tramp-magenta" />,
];

export const CareerCulture = () => {
  const { t } = useLanguage();
  const values = t.careerCulture.values.map((v, idx) => ({ ...v, icon: valuesIcons[idx] }));
  const jobs = t.careerCulture.jobs.map((job, idx) => ({ ...job, icon: jobsIcons[idx] }));

  return (
    <section className="bg-white overflow-hidden border-b border-black/5">
       <div className="container2025Redesign text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1 bg-tramp-magenta/10 text-tramp-magenta text-[1.3rem] font-bold uppercase tracking-widest rounded-lg mb-6">
              {t.careerCulture.eyebrow}
            </span>
            <h2 className="text-balance text-[3.5rem] md:text-[5.5rem] text-tramp-navy font-black mb-10 leading-tight">
              {t.careerCulture.titleBefore}<span className="text-tramp-magenta">{t.careerCulture.titleHighlight}</span>
            </h2>
            <p className="text-pretty text-[1.8rem] md:text-[2.1rem] text-tramp-gray leading-relaxed mb-16">
              {t.careerCulture.paragraph}
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
              {t.careerCulture.jobsEyebrow}
            </span>
            <h2 className="text-balance text-[3.2rem] md:text-[4.5rem] text-tramp-navy font-black leading-tight">
              {t.careerCulture.jobsTitle}
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
