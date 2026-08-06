"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface AboutCTAProps {
  title?: React.ReactNode;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
}

export const AboutCTA = ({
  title = <>Pronto para transformar <br className="hidden md:block" /> sua empresa?</>,
  description = "Converse com nossos especialistas e descubra como a Trampolean pode impulsionar seu negócio com estratégia, tecnologia e propósito.",
  buttonLabel = "Entre em Contato",
  buttonHref = "/contato",
}: AboutCTAProps) => {
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
          <h2 className="text-[3.5rem] md:text-[5.5rem] font-black text-white leading-[1.1] mb-8 text-balance">
            {title}
          </h2>

          <p className="text-[1.8rem] md:text-[2.2rem] text-white/70 text-pretty leading-relaxed mb-12">
            {description}
          </p>

          <Link
            href={buttonHref}
            className="inline-block bg-white text-tramp-dark px-16 py-6 rounded-2xl text-[1.8rem] font-black shadow-2xl hover:bg-tramp-accent hover:text-white hover:scale-105 active:scale-95 transition-all duration-300"
          >
            {buttonLabel}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
