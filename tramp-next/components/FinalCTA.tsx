"use client";

import React from "react";

export const FinalCTA = () => {
  return (
    <section id="cta-final" style={{ 
      backgroundColor: "#1A3C5E", 
      color: "white", 
      padding: "8rem 0", 
      position: "relative",
      overflow: "hidden"
    }}>
       {/* Background accent */}
       <div style={{ 
         position: "absolute", 
         top: "-10%", 
         right: "-10%", 
         width: "40%", 
         height: "200%", 
         background: "linear-gradient(135deg, rgba(46,134,171,0.2) 0%, rgba(46,134,171,0) 100%)", 
         transform: "rotate(15deg)",
         zIndex: 0
       }}></div>

       <div className="container2025Redesign" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <h2 style={{ fontSize: "3rem", fontWeight: "800", marginBottom: "2rem" }}>
             Sua Jornada de Transformação Começa Agora.
          </h2>
          <p style={{ maxWidth: "800px", margin: "0 auto 4rem auto", opacity: 0.8, fontSize: "1.25rem", lineHeight: "1.6" }}>
             Não deixe sua empresa para trás enquanto o mercado avança. A Trampolean é sua parceira estratégica 
             para navegar na era da Inteligência Artificial com confiança, ética e resultados concretos. 
             Dê o primeiro passo hoje.
          </p>
          
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
             <a href="#contato" style={{ 
               backgroundColor: "#2E86AB", 
               color: "white", 
               padding: "1.25rem 2.5rem", 
               borderRadius: "0.75rem", 
               fontSize: "1.1rem", 
               fontWeight: "bold", 
               textDecoration: "none",
               transition: "transform 0.2s ease"
             }}
             onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
             onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
             >
                Agende um Diagnóstico Gratuito
             </a>
             <a href="https://wa.me/something" style={{ 
               backgroundColor: "white", 
               color: "#1A3C5E", 
               padding: "1.25rem 2.5rem", 
               borderRadius: "0.75rem", 
               fontSize: "1.1rem", 
               fontWeight: "bold", 
               textDecoration: "none",
               transition: "transform 0.2s ease"
             }}
             onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
             onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
             >
                Fale com um Especialista
             </a>
             <a href="#ebook" style={{ 
               backgroundColor: "transparent", 
               color: "white", 
               padding: "1.25rem 2.5rem", 
               borderRadius: "0.75rem", 
               fontSize: "1.1rem", 
               fontWeight: "bold", 
               textDecoration: "none",
               border: "2px solid rgba(255,255,255,0.3)",
               transition: "all 0.2s ease"
             }}
             onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.8)"; }}
             onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; }}
             >
                Baixe o E-book Gratuito
             </a>
          </div>
          <p style={{ marginTop: "1rem", fontSize: "0.9rem", color: "rgba(255,255,255,0.6)" }}>
             * O Futuro da IA no Trabalho — Guia Essencial 2025
          </p>
       </div>
    </section>
  );
};
