"use client";

import React from "react";
import { motion } from "framer-motion";

export const CareerForm = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container2025Redesign">
        <div className="flex flex-wrap lg:flex-nowrap gap-16 items-start">
          {/* Label & Title (1/3) */}
          <div className="w-full lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-tramp-accent font-bold text-[1.4rem] tracking-[0.2em] uppercase mb-4 block">
                Participe da Seleção
              </span>
              <h2 className="text-[3.2rem] md:text-[4.5rem] font-black text-tramp-dark leading-[1.2] mb-8">
                Candidate-se agora
              </h2>
              <p className="text-[1.7rem] leading-relaxed text-tramp-gray">
                Preencha os campos ao lado e nossa equipe de talentos entrará em contato para conhecer sua trajetória.
              </p>
            </motion.div>
          </div>

          {/* Form (2/3) */}
          <div className="w-full lg:w-2/3">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="bg-tramp-bg-light/10 p-10 md:p-16 rounded-[3rem] border border-black/5 shadow-inner"
            >
              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="flex flex-col gap-4">
                    <label className="text-[1.4rem] font-bold text-tramp-dark uppercase tracking-wider ml-2">Nome Completo *</label>
                    <input 
                      type="text" 
                      placeholder="Seu nome"
                      className="w-full bg-white border border-black/10 px-8 py-5 rounded-2xl text-[1.6rem] outline-none focus:border-tramp-accent transition-all"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <label className="text-[1.4rem] font-bold text-tramp-dark uppercase tracking-wider ml-2">E-mail *</label>
                    <input 
                      type="email" 
                      placeholder="seu@email.com"
                      className="w-full bg-white border border-black/10 px-8 py-5 rounded-2xl text-[1.6rem] outline-none focus:border-tramp-accent transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="flex flex-col gap-4">
                    <label className="text-[1.4rem] font-bold text-tramp-dark uppercase tracking-wider ml-2">WhatsApp *</label>
                    <input 
                      type="text" 
                      placeholder="(00) 00000-0000"
                      className="w-full bg-white border border-black/10 px-8 py-5 rounded-2xl text-[1.6rem] outline-none focus:border-tramp-accent transition-all"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <label className="text-[1.4rem] font-bold text-tramp-dark uppercase tracking-wider ml-2">Área de Interesse *</label>
                    <select 
                      className="w-full bg-white border border-black/10 px-8 py-5 rounded-2xl text-[1.6rem] outline-none focus:border-tramp-accent transition-all appearance-none cursor-pointer"
                      style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\' /%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 2rem center', backgroundSize: '1.5rem' }}
                      required
                    >
                      <option value="">Selecione uma área</option>
                      <option value="tecnologia">Tecnologia & Desenvolvimento</option>
                      <option value="design">Design & UX</option>
                      <option value="educacao">Educação & Conteúdo</option>
                      <option value="marketing">Marketing & Comunicação</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <label className="text-[1.4rem] font-bold text-tramp-dark uppercase tracking-wider ml-2">Sobre você *</label>
                  <textarea 
                    placeholder="Conte sua trajetória..."
                    rows={5}
                    className="w-full bg-white border border-black/10 px-8 py-5 rounded-2xl text-[1.6rem] outline-none focus:border-tramp-accent transition-all resize-none"
                    required
                  />
                </div>

                <button 
                  type="submit"
                  className="bg-tramp-dark text-white px-12 py-6 rounded-2xl text-[1.7rem] font-black shadow-xl hover:bg-tramp-accent transition-all duration-300"
                >
                  Enviar candidatura
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
