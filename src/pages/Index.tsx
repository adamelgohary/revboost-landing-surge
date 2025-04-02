
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CtaSection from "@/components/sections/CtaSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <div className="absolute inset-0 top-16 bottom-auto bg-gradient-to-b from-orange-50 via-pink-50 to-orange-50 -z-10 min-h-[calc(100vh-4rem)]"></div>
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
