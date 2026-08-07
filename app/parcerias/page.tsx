import type { Metadata } from "next";
import { RedirectTo } from "@/components/RedirectTo";

export const metadata: Metadata = {
  title: "Redirecionando... | Trampolean",
  robots: { index: false, follow: true },
  alternates: { canonical: "/" },
};

export default function ParceriasRedirectPage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/" />
      <RedirectTo to="/" label="a página inicial" />
    </>
  );
}
