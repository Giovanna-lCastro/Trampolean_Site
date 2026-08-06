"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export const ContactContent = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const subject = (data.get("subject") as string) || "Contato pelo site";
    const message = data.get("message") as string;

    const body = `Nome: ${name}\nE-mail: ${email}\n\n${message}`;
    window.location.href = `mailto:crie@trampolean.net?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSent(true);
    form.reset();
  };

  return (
    <section className="py-32 bg-white overflow-hidden border-b border-black/5">
      <div className="container2025Redesign">
        <div className="flex flex-wrap lg:flex-nowrap gap-20 items-start">
          
          {/* Left Column: Info (1/3) */}
          <div className="w-full lg:w-1/3 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[3.2rem] md:text-[4rem] font-black text-tramp-dark leading-[1.2] mb-12">
                Onde nos <br /> <span className="text-tramp-accent">encontrar</span>
              </h2>

              <div className="space-y-10">
                {/* Email */}
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-tramp-bg-light flex items-center justify-center text-tramp-magenta group-hover:bg-tramp-magenta group-hover:text-white transition-all duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[1.4rem] font-bold text-tramp-gray uppercase tracking-widest mb-1">E-mail</p>
                    <a href="mailto:crie@trampolean.net" className="text-[1.8rem] text-tramp-dark font-medium hover:text-tramp-magenta transition-colors">
                      crie@trampolean.net
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-tramp-bg-light flex items-center justify-center text-tramp-magenta group-hover:bg-tramp-magenta group-hover:text-white transition-all duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[1.4rem] font-bold text-tramp-gray uppercase tracking-widest mb-1">WhatsApp</p>
                    <a href="https://wa.me/5511963135038" target="_blank" rel="noopener noreferrer" className="text-[1.8rem] text-tramp-dark font-medium hover:text-tramp-magenta transition-colors">
                      +55 (11) 96313-5038
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-tramp-bg-light flex items-center justify-center text-tramp-magenta group-hover:bg-tramp-magenta group-hover:text-white transition-all duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[1.4rem] font-bold text-tramp-gray uppercase tracking-widest mb-1">Localização</p>
                    <p className="text-[1.8rem] text-tramp-dark font-medium leading-relaxed">
                      São Paulo, SP — Brasil <br />
                      <span className="text-[1.4rem] text-tramp-gray font-normal">Atendimento Global</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-12 border-t border-black/5">
                <p className="text-[1.4rem] font-bold text-tramp-gray uppercase tracking-widest mb-6">Siga a Trampolean</p>
                <div className="flex gap-4">
                  {[
                    // LinkedIn
                    {
                      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>,
                      href: "https://www.linkedin.com/company/trampolean/",
                      label: "LinkedIn"
                    },
                    // Instagram
                    {
                      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>,
                      href: "https://www.instagram.com/trampolean.oficial",
                      label: "Instagram"
                    },
                    // YouTube
                    {
                      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2h15a2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2Z"/><path d="m10 15 5-3-5-3z"/></svg>,
                      href: "https://www.youtube.com/@trampolean",
                      label: "YouTube"
                    }
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-14 h-14 rounded-2xl bg-tramp-dark text-white flex items-center justify-center hover:bg-tramp-accent hover:-translate-y-1 transition-all duration-300"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Form (2/3) */}
          <div className="w-full lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-tramp-bg-light/10 p-10 md:p-16 rounded-[3rem] border border-black/5 shadow-inner"
            >
              <h3 className="text-[2.2rem] md:text-[2.8rem] font-black text-tramp-dark mb-12">
                Envie uma mensagem
              </h3>
              
              <form className="space-y-10" onSubmit={handleSubmit}>
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

                <div className="flex flex-col gap-4">
                  <label className="text-[1.4rem] font-bold text-tramp-dark uppercase tracking-wider ml-2">Tema de interesse</label>
                  <select
                    name="subject"
                    defaultValue=""
                    className="w-full bg-white border border-black/10 px-8 py-5 rounded-2xl text-[1.6rem] outline-none focus:border-tramp-accent transition-all"
                  >
                    <option value="" disabled>Selecione um tema</option>
                    <option value="Transformação digital e estratégia de IA">Transformação digital e estratégia de IA</option>
                    <option value="Automação de processos">Automação de processos</option>
                    <option value="Agentes de IA e bases de conhecimento">Agentes de IA e bases de conhecimento</option>
                    <option value="Software ou plataforma">Software ou plataforma</option>
                    <option value="Jogos, gamificação ou realidade virtual">Jogos, gamificação ou realidade virtual</option>
                    <option value="Treinamentos de IA e educação corporativa">Treinamentos de IA e educação corporativa</option>
                    <option value="Ergonomia, fatores humanos ou riscos psicossociais">Ergonomia, fatores humanos ou riscos psicossociais</option>
                    <option value="Semiótica e comunicação">Semiótica e comunicação</option>
                    <option value="SST, EHS e campanhas">SST, EHS e campanhas</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>

                <div className="flex flex-col gap-4">
                  <label className="text-[1.4rem] font-bold text-tramp-dark uppercase tracking-wider ml-2">Mensagem *</label>
                  <textarea
                    name="message"
                    placeholder="Descreva seu desafio, projeto ou proposta..."
                    rows={6}
                    className="w-full bg-white border border-black/10 px-8 py-5 rounded-2xl text-[1.6rem] outline-none focus:border-tramp-accent transition-all resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-4 bg-tramp-dark text-white px-12 py-6 rounded-2xl text-[1.7rem] font-black shadow-xl hover:bg-tramp-accent transition-all duration-300"
                >
                  Solicitar conversa estratégica
                </button>

                {sent && (
                  <p className="text-[1.5rem] text-tramp-accent font-bold">
                    Seu app de e-mail foi aberto com a mensagem pronta — é só confirmar o envio. Se preferir, fale com a gente pelo WhatsApp.
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
