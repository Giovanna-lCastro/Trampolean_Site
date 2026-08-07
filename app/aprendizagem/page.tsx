import type { Metadata } from "next";
import { RedirectTo } from "@/components/RedirectTo";

export const metadata: Metadata = {
  title: "Redirecionando... | Trampolean",
  robots: { index: false, follow: true },
  alternates: { canonical: "/educacao" },
};

export default function AprendizagemRedirectPage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/educacao" />
      <RedirectTo to="/educacao" label="Educação & Capacitação" />
    </>
  );
}
