import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { company } from "../data/siteContent";
import { usePageSeo } from "../hooks/usePageSeo";

/* Sections */
import { HeroSection } from "../components/sections/HeroSection";
import { MarqueeSection } from "../components/sections/MarqueeSection";
import { SolutionsSection } from "../components/sections/SolutionsSection";
import { AboutSection } from "../components/sections/AboutSection";
import { ParallaxQuote } from "../components/sections/ParallaxQuote";
import { ClientsSection } from "../components/sections/ClientsSection";
import { ServicesSection } from "../components/sections/ServicesSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { FaqSection } from "../components/sections/FaqSection";
import { CtaSection } from "../components/sections/CtaSection";

export  default function HomePage() {
  const { hash } = useLocation();

  /* ---------------- SEO ---------------- */
  usePageSeo({
    title: "Home",
    description: `${company.name} provides CCTV, solar, and automation solutions across India.`,
    path: "/",
  });

  /* ---------------- SMOOTH SCROLL FIX ---------------- */
  useEffect(() => {
    if (!hash) return;

    const id = hash.replace("#", "");

    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [hash]);

  return (
    <main className="flex flex-col">

      {/* HERO */}
      <HeroSection />

      {/* BRAND MARQUEE */}
      <MarqueeSection />

      {/* SOLUTIONS */}
      <SolutionsSection />

      {/* ABOUT */}
      <AboutSection />

      {/* QUOTE */}
      <ParallaxQuote />

      {/* CLIENTS */}
      <ClientsSection
        logoLimit={25}
        showViewAllLink
        showMap
      />

      {/* SECOND MARQUEE */}
      <MarqueeSection reverse />

      {/* SERVICES */}
      <ServicesSection />

      {/* TESTIMONIALS */}
      <TestimonialsSection />

      {/* FAQ */}
      <FaqSection />

      {/* CTA */}
      <CtaSection />

    </main>
  );
}