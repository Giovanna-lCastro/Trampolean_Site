import type { Metadata } from "next";
import { RedirectTo } from "@/components/RedirectTo";

export const metadata: Metadata = {
  title: "Redirecionando... | Trampolean",
  robots: { index: false, follow: true },
  alternates: { canonical: "/privacidade" },
};

export default function PrivacyRedirectPage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/privacidade" />
      <RedirectTo to="/privacidade" label="a Política de Privacidade" />
    </>
  );
}
