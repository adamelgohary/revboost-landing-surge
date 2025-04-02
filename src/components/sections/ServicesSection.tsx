
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Users, BarChart2, CheckCircle } from "lucide-react";

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  iconBgColor 
}: { 
  icon: React.ElementType, 
  title: string, 
  description: string, 
  features: string[], 
  iconBgColor: string 
}) => {
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white/80 backdrop-blur-sm">
      <CardContent className="pt-6">
        <div className={`rounded-full ${iconBgColor} p-3 w-12 h-12 flex items-center justify-center mb-5`}>
          <Icon className="h-6 w-6 text-orange-500" />
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: Rocket,
      title: "Website Development",
      description: "Custom websites built with cutting-edge technology that engage visitors and drive conversions.",
      features: ["Responsive design", "SEO optimization", "Performance focused"],
      iconBgColor: "bg-orange-100"
    },
    {
      icon: Users,
      title: "User Experience Design",
      description: "Intuitive interfaces that delight users and provide seamless navigation throughout your site.",
      features: ["User research", "UI/UX prototyping", "Usability testing"],
      iconBgColor: "bg-pink-100"
    },
    {
      icon: BarChart2,
      title: "Conversion Optimization",
      description: "Strategic approaches to turn visitors into customers through data-driven improvements.",
      features: ["A/B testing", "Analytics setup", "Conversion tracking"],
      iconBgColor: "bg-orange-100"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We provide comprehensive web solutions that help businesses thrive in the digital landscape.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
              features={service.features} 
              iconBgColor={service.iconBgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
