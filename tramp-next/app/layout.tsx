import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Trampolean | Arquitetura de Aprendizagem e IA",
  description: "Líderes em Transformação Digital, Educação Corporativa e IA aplicada ao trabalho.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${inter.variable}`}>
      <body className="font-inter antialiased">{children}</body>
    </html>
  );
}
