import type { Metadata } from "next";
import { RedirectTo } from "@/components/RedirectTo";

export const metadata: Metadata = {
  title: "Redirecionando... | Trampolean",
  robots: { index: false, follow: true },
  alternates: { canonical: "/sobre" },
};

export default function MetodoRedirectPage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/sobre" />
      <RedirectTo to="/sobre" label="A Trampolean" />
    </>
  );
}
