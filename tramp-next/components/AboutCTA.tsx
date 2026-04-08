"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const AboutCTA = () => {
  return (
    <section className="bg-tramp-dark py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-tramp-accent/5 -skew-x-12 translate-x-1/2" />
      
      <div className="container2025Redesign relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[3.5rem] md:text-[5.5rem] font-black text-white leading-[1.1] mb-8">
            Pronto para transformar <br className="hidden md:block" /> sua empresa?
          </h2>
          
          <p className="text-[1.8rem] md:text-[2.2rem] text-white/70 max-w-3xl mx-auto leading-relaxed mb-12">
            Converse com nossos especialistas e descubra como a Trampolean 
            pode impulsionar seu negócio com estratégia, tecnologia e propósito.
          </p>
          
          <Link 
            href="/contato"
            className="inline-block bg-white text-tramp-dark px-16 py-6 rounded-2xl text-[1.8rem] font-black shadow-2xl hover:bg-tramp-accent hover:text-white hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Entre em Contato
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
