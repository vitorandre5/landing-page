import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Analytics from "@/components/landing/Analytics";
import Profiles from "@/components/landing/Profiles";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import CTAFooter from "@/components/landing/CTAFooter";

const Index = () => (
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

export default Index;
