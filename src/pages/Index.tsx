import { useEffect } from "react";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Analytics from "@/components/landing/Analytics";
import Profiles from "@/components/landing/Profiles";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import CTAFooter from "@/components/landing/CTAFooter";
import { useSiteLanguage } from "@/lib/language";

const Index = () => {
  const { language } = useSiteLanguage();

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = language === "en"
      ? "Bet Tagger - Bet Tracking and Analysis"
      : "Bet Tagger - Controle e analise de apostas";
  }, [language]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Features />
        <Analytics />
        <Profiles />
        <Pricing />
        <FAQ />
        <CTAFooter />
      </main>
    </div>
  );
};

export default Index;
