"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export const CareerForm = () => {
  const { t } = useLanguage();
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

    const labels = t.careerForm.emailBodyLabels;
    const body = `${labels.name}: ${name}\n${labels.email}: ${email}\n${labels.whatsapp}: ${whatsapp}\n${labels.area}: ${areaValue}\n${labels.portfolio}: ${portfolio}\n\n${about}`;
    window.location.href = `mailto:crie@trampolean.net?subject=${encodeURIComponent(t.careerForm.emailSubject)}&body=${encodeURIComponent(body)}`;

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
                {t.careerForm.eyebrow}
              </span>
              <h2 className="text-balance text-[3.2rem] md:text-[4.5rem] font-black text-tramp-dark leading-[1.2] mb-8">
                {t.careerForm.title}
              </h2>
              <p className="text-[1.7rem] leading-relaxed text-tramp-gray mb-12">
                {t.careerForm.paragraph}
              </p>

              <div className="bg-tramp-dark rounded-[2.5rem] p-10">
                <h3 className="text-balance text-[2rem] font-black text-white leading-[1.3] mb-6">
                  {t.careerForm.spontaneousTitle}
                </h3>
                <button
                  type="button"
                  onClick={handleSpontaneous}
                  className="bg-white text-tramp-dark px-8 py-4 rounded-2xl text-[1.5rem] font-black shadow-xl hover:bg-tramp-accent hover:text-white transition-all duration-300"
                >
                  {t.careerForm.spontaneousButton}
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
                    <label className="text-[1.4rem] font-bold text-tramp-dark uppercase tracking-wider ml-2">{t.careerForm.nameLabel}</label>
                    <input
                      type="text"
                      name="name"
                      placeholder={t.careerForm.namePlaceholder}
                      className="w-full bg-white border border-black/10 px-8 py-5 rounded-2xl text-[1.6rem] outline-none focus:border-tramp-accent transition-all"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <label className="text-[1.4rem] font-bold text-tramp-dark uppercase tracking-wider ml-2">{t.careerForm.emailLabel}</label>
                    <input
                      type="email"
                      name="email"
                      placeholder={t.careerForm.emailPlaceholder}
                      className="w-full bg-white border border-black/10 px-8 py-5 rounded-2xl text-[1.6rem] outline-none focus:border-tramp-accent transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="flex flex-col gap-4">
                    <label className="text-[1.4rem] font-bold text-tramp-dark uppercase tracking-wider ml-2">{t.careerForm.whatsappLabel}</label>
                    <input
                      type="text"
                      name="whatsapp"
                      placeholder={t.careerForm.whatsappPlaceholder}
                      className="w-full bg-white border border-black/10 px-8 py-5 rounded-2xl text-[1.6rem] outline-none focus:border-tramp-accent transition-all"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <label className="text-[1.4rem] font-bold text-tramp-dark uppercase tracking-wider ml-2">{t.careerForm.areaLabel}</label>
                    <select
                      name="area"
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      className="w-full bg-white border border-black/10 px-8 py-5 rounded-2xl text-[1.6rem] outline-none focus:border-tramp-accent transition-all appearance-none cursor-pointer"
                      style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\' /%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 2rem center', backgroundSize: '1.5rem' }}
                      required
                    >
                      <option value="">{t.careerForm.areaPlaceholder}</option>
                      <option value="estagio">{t.careerForm.areaOptions[0]}</option>
                      <option value="desenvolvimento">{t.careerForm.areaOptions[1]}</option>
                      <option value="pmo">{t.careerForm.areaOptions[2]}</option>
                      <option value="social-media">{t.careerForm.areaOptions[3]}</option>
                      <option value="espontanea">{t.careerForm.areaOptions[4]}</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <label className="text-[1.4rem] font-bold text-tramp-dark uppercase tracking-wider ml-2">{t.careerForm.portfolioLabel}</label>
                  <input
                    type="url"
                    name="portfolio"
                    placeholder={t.careerForm.portfolioPlaceholder}
                    className="w-full bg-white border border-black/10 px-8 py-5 rounded-2xl text-[1.6rem] outline-none focus:border-tramp-accent transition-all"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <label className="text-[1.4rem] font-bold text-tramp-dark uppercase tracking-wider ml-2">{t.careerForm.aboutLabel}</label>
                  <textarea
                    name="about"
                    placeholder={t.careerForm.aboutPlaceholder}
                    rows={5}
                    className="w-full bg-white border border-black/10 px-8 py-5 rounded-2xl text-[1.6rem] outline-none focus:border-tramp-accent transition-all resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="bg-tramp-dark text-white px-12 py-6 rounded-2xl text-[1.7rem] font-black shadow-xl hover:bg-tramp-accent transition-all duration-300"
                >
                  {t.careerForm.submitButton}
                </button>

                {sent && (
                  <p className="text-[1.5rem] text-tramp-accent font-bold">
                    {t.careerForm.sentMessage}
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
