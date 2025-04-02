
import React from "react";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-pink-600 text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Boost Your Online Presence?</h2>
        <p className="max-w-2xl mx-auto mb-8">Let's create a website that drives results for your business.</p>
        <Button size="lg" variant="outline" className="bg-white text-orange-600 hover:bg-orange-50">
          Get Started Today
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;
