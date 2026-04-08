"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface MegaMenuItemProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

const MegaMenuItem = ({ title, description, href, icon }: MegaMenuItemProps) => (
  <Link 
    href={href}
    className="flex items-start gap-4 p-4 rounded-xl hover:bg-tramp-dark/5 transition-colors group"
  >
    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-tramp-dark/5 rounded-lg group-hover:bg-tramp-accent/10 transition-colors">
      <div className="text-tramp-dark group-hover:text-tramp-accent transition-colors">
        {icon}
      </div>
    </div>
    <div>
      <h4 className="text-[1.5rem] font-bold text-tramp-dark mb-1 leading-tight">{title}</h4>
      <p className="text-[1.3rem] text-tramp-gray leading-snug">{description}</p>
    </div>
  </Link>
);

interface MegaMenuProps {
  items: MegaMenuItemProps[];
  footerLink?: { text: string; href: string };
  gridCols?: string;
  isOpen: boolean;
}

export const MegaMenu = ({ items, footerLink, gridCols = "grid-cols-2", isOpen }: MegaMenuProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[650px] bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-black/5 overflow-hidden z-50 pointer-events-auto`}
    >
      {/* Arrow */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-t border-l border-black/5" />
      
      <div className={`p-8 grid ${gridCols} gap-4`}>
        {items.map((item, idx) => (
          <MegaMenuItem key={idx} {...item} />
        ))}
      </div>

      {footerLink && (
        <div className="bg-tramp-dark/5 p-6 border-t border-black/5">
          <Link 
            href={footerLink.href} 
            className="text-[1.4rem] font-semibold text-tramp-dark hover:text-tramp-accent transition-colors flex items-center gap-2"
          >
            {footerLink.text} 
            <span className="text-[1.8rem]">→</span>
          </Link>
        </div>
      )}
    </motion.div>
  );
};
