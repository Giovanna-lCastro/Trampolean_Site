"use client";

import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutHero } from "@/components/AboutHero";
import { AboutStory } from "@/components/AboutStory";
import { AboutMetrics } from "@/components/AboutMetrics";
import { AboutLeadership } from "@/components/AboutLeadership";
import { AboutValues } from "@/components/AboutValues";
import { AboutCTA } from "@/components/AboutCTA";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <Header />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutMetrics />
        <AboutLeadership />
        <AboutValues />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  );
}
