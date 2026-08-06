"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export const CareerForm = () => {
  const [sent, setSent] = useState(false);
  const [area, setArea] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const whatsapp = data.get("whatsapp") as string;
    const areaValue = data.get("area") as string;
    const portfolio = data.get("portfolio") as string;
    const about = data.get("about") as string;

    const body = `Nome: ${name}\nE-mail: ${email}\nWhatsApp: ${whatsapp}\nVaga/Área de interesse: ${areaValue}\nPortfólio/LinkedIn: ${portfolio}\n\n${about}`;
    window.location.href = `mailto:crie@trampolean.net?subject=${encodeURIComponent("Candidatura - Carreira Trampolean")}&body=${encodeURIComponent(body)}`;

    setSent(true);
    setArea("");
    form.reset();
  };

  const handleSpontaneous = () => {
    setArea("espontanea");
    document.getElementById("candidatura-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="bg-white relative overflow-hidden">
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
              <h2 className="text-balance text-[3.2rem] md:text-[4.5rem] font-black text-tramp-dark leading-[1.2] mb-8">
                Candidate-se agora
              </h2>
              <p className="text-[1.7rem] leading-relaxed text-tramp-gray mb-12">
                Preencha os campos ao lado e nossa equipe de talentos entrará em contato para conhecer sua trajetória.
              </p>

              <div className="bg-tramp-dark rounded-[2.5rem] p-10">
                <h3 className="text-balance text-[2rem] font-black text-white leading-[1.3] mb-6">
                  Não encontrou a vaga ideal?
                </h3>
                <button
                  type="button"
                  onClick={handleSpontaneous}
                  className="bg-white text-tramp-dark px-8 py-4 rounded-2xl text-[1.5rem] font-black shadow-xl hover:bg-tramp-accent hover:text-white transition-all duration-300"
                >
                  Enviar candidatura espontânea
                </button>
              </div>
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
              <form id="candidatura-form" className="space-y-10 scroll-mt-32" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="flex flex-col gap-4">
                    <label className="text-[1.4rem] font-bold text-tramp-dark uppercase tracking-wider ml-2">Nome Completo *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Seu nome"
                      className="w-full bg-white border border-black/10 px-8 py-5 rounded-2xl text-[1.6rem] outline-none focus:border-tramp-accent transition-all"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <label className="text-[1.4rem] font-bold text-tramp-dark uppercase tracking-wider ml-2">E-mail *</label>
                    <input
                      type="email"
                      name="email"
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
                      name="whatsapp"
                      placeholder="(00) 00000-0000"
                      className="w-full bg-white border border-black/10 px-8 py-5 rounded-2xl text-[1.6rem] outline-none focus:border-tramp-accent transition-all"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <label className="text-[1.4rem] font-bold text-tramp-dark uppercase tracking-wider ml-2">Vaga/Área de Interesse *</label>
                    <select
                      name="area"
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      className="w-full bg-white border border-black/10 px-8 py-5 rounded-2xl text-[1.6rem] outline-none focus:border-tramp-accent transition-all appearance-none cursor-pointer"
                      style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\' /%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 2rem center', backgroundSize: '1.5rem' }}
                      required
                    >
                      <option value="">Selecione uma opção</option>
                      <option value="estagio">Estágio</option>
                      <option value="desenvolvimento">Desenvolvimento</option>
                      <option value="pmo">PMO</option>
                      <option value="social-media">Social Media</option>
                      <option value="espontanea">Candidatura espontânea</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <label className="text-[1.4rem] font-bold text-tramp-dark uppercase tracking-wider ml-2">Portfólio/LinkedIn</label>
                  <input
                    type="url"
                    name="portfolio"
                    placeholder="https://linkedin.com/in/seu-perfil"
                    className="w-full bg-white border border-black/10 px-8 py-5 rounded-2xl text-[1.6rem] outline-none focus:border-tramp-accent transition-all"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <label className="text-[1.4rem] font-bold text-tramp-dark uppercase tracking-wider ml-2">Sobre você *</label>
                  <textarea
                    name="about"
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

                {sent && (
                  <p className="text-[1.5rem] text-tramp-accent font-bold">
                    Seu app de e-mail foi aberto com a candidatura pronta — é só confirmar o envio.
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
