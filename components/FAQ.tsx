import React from "react";

const faqs = [
  {
    question: "O que a Trampolean faz?",
    answer: "A Trampolean realiza projetos de transformação digital para empresas, instituições de ensino e organizações públicas. Atua com estratégia de IA, automação, agentes inteligentes, software, jogos digitais, gamificação, educação corporativa, ergonomia, semiótica e fatores humanos.",
  },
  {
    question: "A Trampolean desenvolve automações sob medida?",
    answer: "Sim. Automatizamos processos operacionais, administrativos, documentais, comerciais, educacionais e de atendimento. As soluções podem usar inteligência artificial, integrações, regras de negócio, agentes ou sistemas sob medida — com ou sem IA, de fluxos específicos a sistemas integrados.",
  },
  {
    question: "A Trampolean desenvolve jogos digitais?",
    answer: "Sim. Desenvolvemos serious games, jogos educacionais, corporativos e de entretenimento, simuladores, experiências gamificadas e projetos imersivos para diferentes plataformas.",
  },
  {
    question: "A Trampolean oferece treinamentos de IA?",
    answer: "Sim. Os programas incluem IA para líderes, letramento em IA, IA aplicada ao trabalho, engenharia de prompts, automação, IA na educação, governança e trilhas customizadas por área ou função.",
  },
  {
    question: "Como ergonomia e semiótica entram nos projetos?",
    answer: "A ergonomia permite compreender o trabalho real, as atividades, os riscos e as necessidades dos usuários. A semiótica contribui para analisar linguagem, interfaces, narrativas e documentos. Juntas, tornam as soluções mais compreensíveis, utilizáveis e aderentes ao contexto.",
  },
  {
    question: "A Trampolean atua apenas com inteligência artificial?",
    answer: "Não. A IA é uma das tecnologias que utilizamos. Também atuamos com transformação digital, automação convencional, integração de sistemas, software, plataformas, jogos, gamificação, educação corporativa, ergonomia, semiótica e SST.",
  },
  {
    question: "Como entrar em contato?",
    answer: "Pelo e-mail crie@trampolean.net, pelo WhatsApp +55 (11) 96313-5038 ou pelo formulário da página de Contato.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export const FAQ = () => {
  return (
    <section className="bg-tramp-bg-light/20 border-y border-black/5">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="container2025Redesign">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-tramp-accent/10 text-tramp-accent text-[1.3rem] font-bold uppercase tracking-widest rounded-lg mb-6">
            Perguntas Frequentes
          </span>
          <h2 className="text-[3.2rem] md:text-[4.5rem] font-black text-tramp-dark">
            Tire suas dúvidas
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group bg-white rounded-3xl border border-black/5 shadow-sm open:shadow-md transition-all"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between gap-6 px-10 py-8 text-[1.8rem] font-bold text-tramp-dark">
                {faq.question}
                <span className="flex-shrink-0 text-tramp-accent text-[2rem] transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="px-10 pb-8 text-[1.6rem] leading-relaxed text-tramp-gray">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
