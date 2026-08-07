import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: { absolute: "Suporte | Trampolean" },
  description: "Suporte aos aplicativos e produtos digitais da Trampolean — como reportar um problema e solicitações de dados e privacidade (LGPD/GDPR).",
};

const items = [
  {
    title: "Suporte do aplicativo",
    body: "Se você está com problema para acessar, usar ou configurar um aplicativo da Trampolean, envie uma mensagem para nosso time de suporte.",
  },
  {
    title: "Como reportar um problema",
    body: "Inclua seu nome, e-mail, o modelo do dispositivo, a versão do aplicativo e uma descrição curta do erro. Se possível, adicione uma captura de tela.",
  },
  {
    title: "Dados e privacidade",
    body: "Para solicitações sobre dados, privacidade ou exclusão de conta, use o mesmo canal de contato e informe que se trata de um pedido LGPD/GDPR.",
  },
];

export default function SupportPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <Header />
      <main className="pt-48 pb-32">
        <div className="container2025Redesign max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1 bg-tramp-accent/10 text-tramp-accent text-[1.3rem] font-bold uppercase tracking-widest rounded-lg mb-6">
            Suporte
          </span>
          <h1 className="text-[3.2rem] md:text-[4.2rem] font-black text-tramp-dark leading-[1.15] mb-10 tracking-tight">
            Suporte aos produtos e aplicativos da Trampolean
          </h1>

          <div className="space-y-6 mb-16">
            {items.map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-[2rem] border border-black/5 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.04)]"
              >
                <h2 className="text-[1.9rem] font-bold text-tramp-dark mb-3">{item.title}</h2>
                <p className="text-[1.6rem] text-tramp-gray leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-[2rem] bg-tramp-bg-light/30 border border-black/5">
            <h2 className="text-[1.6rem] font-bold text-tramp-dark uppercase tracking-widest mb-4">
              Fale com o suporte
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:crie@trampolean.net"
                className="inline-flex items-center justify-center gap-3 bg-tramp-dark text-white px-8 py-4 rounded-2xl text-[1.6rem] font-bold shadow-xl hover:bg-tramp-accent transition-all duration-300"
              >
                crie@trampolean.net
              </a>
              <a
                href="https://wa.me/5511963135038"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border-2 border-tramp-dark/15 text-tramp-dark px-8 py-4 rounded-2xl text-[1.6rem] font-bold hover:border-tramp-dark/30 hover:bg-tramp-dark/5 transition-all duration-300"
              >
                WhatsApp: +55 (11) 96313-5038
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
