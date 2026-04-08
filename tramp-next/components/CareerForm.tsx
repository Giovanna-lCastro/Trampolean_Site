"use client";

import React from "react";
import { motion } from "framer-motion";

export const CareerForm = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container2025Redesign max-w-5xl">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[3.5rem] md:text-[5rem] font-black text-tramp-dark mb-6"
          >
            Candidate-se agora
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[1.8rem] md:text-[2.1rem] text-tramp-gray"
          >
            Preencha o formulário abaixo e nossa equipe entrará em contato.
          </motion.p>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="bg-tramp-bg-light/20 p-8 md:p-16 rounded-[3rem] border border-black/5 shadow-2xl"
        >
          <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Nome */}
              <div className="flex flex-col gap-4">
                <label className="text-[1.5rem] font-bold text-tramp-dark uppercase tracking-wider ml-2">Nome Completo *</label>
                <input 
                  type="text" 
                  placeholder="Seu nome aqui"
                  className="w-full bg-white border border-black/10 px-8 py-5 rounded-2xl text-[1.6rem] outline-none focus:border-tramp-accent focus:ring-4 focus:ring-tramp-accent/5 transition-all"
                  required
                />
              </div>
              
              {/* E-mail */}
              <div className="flex flex-col gap-4">
                <label className="text-[1.5rem] font-bold text-tramp-dark uppercase tracking-wider ml-2">E-mail *</label>
                <input 
                  type="email" 
                  placeholder="seu@email.com"
                  className="w-full bg-white border border-black/10 px-8 py-5 rounded-2xl text-[1.6rem] outline-none focus:border-tramp-accent focus:ring-4 focus:ring-tramp-accent/5 transition-all"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* WhatsApp */}
              <div className="flex flex-col gap-4">
                <label className="text-[1.5rem] font-bold text-tramp-dark uppercase tracking-wider ml-2">WhatsApp *</label>
                <input 
                  type="text" 
                  placeholder="(00) 00000-0000"
                  className="w-full bg-white border border-black/10 px-8 py-5 rounded-2xl text-[1.6rem] outline-none focus:border-tramp-accent focus:ring-4 focus:ring-tramp-accent/5 transition-all"
                  required
                />
              </div>
              
              {/* Area */}
              <div className="flex flex-col gap-4">
                <label className="text-[1.5rem] font-bold text-tramp-dark uppercase tracking-wider ml-2">Área de Interesse *</label>
                <select 
                  className="w-full bg-white border border-black/10 px-8 py-5 rounded-2xl text-[1.6rem] outline-none focus:border-tramp-accent focus:ring-4 focus:ring-tramp-accent/5 transition-all appearance-none cursor-pointer"
                  style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\' /%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 2rem center', backgroundSize: '1.5rem' }}
                  required
                >
                  <option value="">Selecione uma área</option>
                  <option value="tecnologia">Tecnologia & Desenvolvimento</option>
                  <option value="design">Design & UX</option>
                  <option value="educacao">Educação & Conteúdo</option>
                  <option value="marketing">Marketing & Comunicação</option>
                  <option value="gestao">Gestão & Projetos</option>
                  <option value="comercial">Comercial & Parcerias</option>
                  <option value="outras">Outras áreas</option>
                </select>
              </div>
            </div>

            {/* Sobre */}
            <div className="flex flex-col gap-4">
              <label className="text-[1.5rem] font-bold text-tramp-dark uppercase tracking-wider ml-2">Sobre você *</label>
              <textarea 
                placeholder="Conte um pouco sobre sua trajetória, o que você faz, o que te motiva e por que quer fazer parte da Trampolean."
                rows={6}
                className="w-full bg-white border border-black/10 px-8 py-5 rounded-2xl text-[1.6rem] outline-none focus:border-tramp-accent focus:ring-4 focus:ring-tramp-accent/5 transition-all resize-none"
                required
              />
            </div>

            <div className="pt-6">
              <button 
                type="submit"
                className="w-full bg-tramp-dark text-white py-6 rounded-2xl text-[1.8rem] font-black shadow-xl hover:bg-tramp-accent hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Enviar candidatura
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
