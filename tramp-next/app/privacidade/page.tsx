import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: { absolute: "Política de Privacidade | Trampolean" },
  description: "Como a Trampolean coleta, usa e protege dados pessoais de clientes, candidatos e visitantes, em conformidade com a LGPD.",
};

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <Header />
      <main className="pt-48 pb-32">
        <div className="container2025Redesign !pt-0">
          <h1 className="text-[3.2rem] md:text-[4.5rem] font-black text-tramp-dark mb-12">
            Política de Privacidade
          </h1>

          <div className="max-w-3xl space-y-10 text-[1.7rem] leading-relaxed text-tramp-gray">
            <p>
              A Trampolean respeita a privacidade de clientes, candidatos e visitantes do site e trata dados
              pessoais em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
            </p>

            <div>
              <h2 className="text-[2.2rem] font-black text-tramp-dark mb-4">Quais dados coletamos</h2>
              <p>
                Coletamos apenas os dados fornecidos voluntariamente por você nos formulários de
                contato e de candidatura: nome, e-mail, WhatsApp, área/tema de interesse e
                a mensagem enviada.
              </p>
            </div>

            <div>
              <h2 className="text-[2.2rem] font-black text-tramp-dark mb-4">Como usamos seus dados</h2>
              <p>
                Utilizamos esses dados exclusivamente para responder a solicitações, avaliar
                candidaturas e dar continuidade ao relacionamento comercial ou profissional iniciado por você.
                Não vendemos nem compartilhamos seus dados com terceiros para fins de marketing.
              </p>
            </div>

            <div>
              <h2 className="text-[2.2rem] font-black text-tramp-dark mb-4">Seus direitos</h2>
              <p>
                Você pode solicitar a qualquer momento a confirmação, correção, portabilidade ou exclusão dos
                seus dados pessoais pelo e-mail{" "}
                <a href="mailto:contato@trampolean.net" className="text-tramp-accent font-bold">
                  contato@trampolean.net
                </a>.
              </p>
            </div>

            <div>
              <h2 className="text-[2.2rem] font-black text-tramp-dark mb-4">Contato</h2>
              <p>
                Em caso de dúvidas, fale pelo e-mail{" "}
                <a href="mailto:contato@trampolean.net" className="text-tramp-accent font-bold">
                  contato@trampolean.net
                </a>{" "}
                ou pelo WhatsApp{" "}
                <a href="https://wa.me/5511913271774" target="_blank" rel="noopener noreferrer" className="text-tramp-accent font-bold">
                  +55 (11) 91327-1774
                </a>.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
