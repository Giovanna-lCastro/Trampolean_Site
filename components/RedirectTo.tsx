"use client";

import { useEffect } from "react";
import Link from "next/link";

interface RedirectToProps {
  to: string;
  label: string;
}

export const RedirectTo = ({ to, label }: RedirectToProps) => {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-center px-6">
      <div>
        <p className="text-[1.6rem] text-tramp-gray mb-4">
          Esta página mudou de endereço. Redirecionando para {label}...
        </p>
        <Link href={to} className="text-tramp-accent font-bold underline text-[1.6rem]">
          Clique aqui se não for redirecionado automaticamente
        </Link>
      </div>
    </div>
  );
};
