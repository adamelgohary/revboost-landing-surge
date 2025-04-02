
import React from "react";
import { BrainCircuit, Cog, ThumbsUp, Rocket } from "lucide-react";

interface FeatureProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="rounded-full bg-gradient-to-r from-orange-500 to-pink-600 p-3 w-12 h-12 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: BrainCircuit,
      title: "Industry Expertise",
      description: "Years of experience building successful websites across various industries."
    },
    {
      icon: Cog,
      title: "Modern Technology",
      description: "We use the latest technologies to ensure your website is fast, secure, and scalable."
    },
    {
      icon: ThumbsUp,
      title: "Customer Support",
      description: "Dedicated team ready to assist you with any questions or concerns."
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Efficient processes that get your website up and running quickly."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose RevBooster</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We combine technical expertise with creative design to deliver exceptional results.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
