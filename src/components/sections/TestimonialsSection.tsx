
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  initials: string;
}

const StarRating = () => {
  return (
    <div className="flex text-orange-500">
      {[...Array(5)].map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
        </svg>
      ))}
    </div>
  );
};

const TestimonialCard = ({ quote, author, position, initials }: TestimonialProps) => {
  return (
    <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="flex flex-col h-full">
          <div className="mb-4">
            <StarRating />
          </div>
          <blockquote className="flex-1 mb-4 text-gray-600 italic">
            "{quote}"
          </blockquote>
          <div className="flex items-center">
            <div className="rounded-full bg-gray-200 w-10 h-10 mr-3 flex items-center justify-center">
              <span className="text-gray-700 font-semibold">{initials}</span>
            </div>
            <div>
              <p className="font-medium">{author}</p>
              <p className="text-sm text-gray-500">{position}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "RevBooster transformed our online presence completely. Our new website has increased conversions by 45% in just three months!",
      author: "John Doe",
      position: "CEO, TechFirm",
      initials: "JD"
    },
    {
      quote: "The team at RevBooster doesn't just build websites - they create experiences. Our customers love our new site and it's been a game-changer for our business.",
      author: "Jane Smith",
      position: "Marketing Director, Brand Co.",
      initials: "JS"
    },
    {
      quote: "Working with RevBooster was a fantastic experience from start to finish. They understood our needs and delivered beyond our expectations.",
      author: "Robert Johnson",
      position: "Owner, Local Business",
      initials: "RJ"
    }
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Don't just take our word for it. Here's what our clients have to say about working with us.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              initials={testimonial.initials}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
