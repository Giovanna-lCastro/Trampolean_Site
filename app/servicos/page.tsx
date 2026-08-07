import type { Metadata } from "next";
import { RedirectTo } from "@/components/RedirectTo";

export const metadata: Metadata = {
  title: "Redirecionando... | Trampolean",
  robots: { index: false, follow: true },
  alternates: { canonical: "/solucoes" },
};

export default function ServicosRedirectPage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/solucoes" />
      <RedirectTo to="/solucoes" label="Nossas Soluções" />
    </>
  );
}
