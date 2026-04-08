"use client";

import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CareerHero } from "@/components/CareerHero";
import { CareerCulture } from "@/components/CareerCulture";
import { CareerForm } from "@/components/CareerForm";

export default function CareerPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <Header />
      <main>
        <CareerHero />
        <CareerCulture />
        <CareerForm />
      </main>
      <Footer />
    </div>
  );
}
