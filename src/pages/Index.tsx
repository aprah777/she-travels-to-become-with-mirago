import HeroSection from "@/components/HeroSection";
import WhySheTravels from "@/components/WhySheTravels";
import HowWeWalk from "@/components/HowWeWalk";
import WhatMiragoDoes from "@/components/WhatMiragoDoes";
import BrandPhilosophy from "@/components/BrandPhilosophy";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhySheTravels />
      <HowWeWalk />
      <WhatMiragoDoes />
      <BrandPhilosophy />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
