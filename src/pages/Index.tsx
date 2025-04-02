import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ArrowRight, BarChart2, BrainCircuit, CheckCircle, Cog, Rocket, ThumbsUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/lovable-uploads/af0a8496-0e90-4e5c-9c55-55ca6aeaf09f.png" alt="RevBooster Logo" className="h-10" />
            <span className="font-bold text-xl bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">RevBooster</span>
          </div>
          
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-sm font-medium hover:text-orange-500 transition-colors">Services</a>
            <a href="#testimonials" className="text-sm font-medium hover:text-orange-500 transition-colors">Testimonials</a>
            <a href="#contact" className="text-sm font-medium hover:text-orange-500 transition-colors">Contact</a>
          </nav>
          
          <div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700">Get Started</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Get in Touch</DialogTitle>
                </DialogHeader>
                <form className="space-y-4 pt-4">
                  <div>
                    <Input placeholder="Your Name" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email" />
                  </div>
                  <div>
                    <Input placeholder="Your Phone" />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700">
                    Submit
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-pink-50 z-0"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Boost Your Online <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">Presence</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-md">
                RevBooster crafts industry-leading websites with exceptional user experiences that drive conversions and grow your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-pink-600 rounded-lg blur opacity-30"></div>
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Web Development" 
                className="relative rounded-lg shadow-xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We provide comprehensive web solutions that help businesses thrive in the digital landscape.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-orange-100 p-3 w-12 h-12 flex items-center justify-center mb-5">
                  <Rocket className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Website Development</h3>
                <p className="text-gray-600 mb-4">Custom websites built with cutting-edge technology that engage visitors and drive conversions.</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Responsive design</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>SEO optimization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Performance focused</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-pink-100 p-3 w-12 h-12 flex items-center justify-center mb-5">
                  <Users className="h-6 w-6 text-pink-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">User Experience Design</h3>
                <p className="text-gray-600 mb-4">Intuitive interfaces that delight users and provide seamless navigation throughout your site.</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>User research</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>UI/UX prototyping</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Usability testing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-orange-100 p-3 w-12 h-12 flex items-center justify-center mb-5">
                  <BarChart2 className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Conversion Optimization</h3>
                <p className="text-gray-600 mb-4">Strategic approaches to turn visitors into customers through data-driven improvements.</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>A/B testing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Analytics setup</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Conversion tracking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose RevBooster</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We combine technical expertise with creative design to deliver exceptional results.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="rounded-full bg-gradient-to-r from-orange-500 to-pink-600 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <BrainCircuit className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Industry Expertise</h3>
              <p className="text-gray-600">Years of experience building successful websites across various industries.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="rounded-full bg-gradient-to-r from-orange-500 to-pink-600 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Cog className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Modern Technology</h3>
              <p className="text-gray-600">We use the latest technologies to ensure your website is fast, secure, and scalable.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="rounded-full bg-gradient-to-r from-orange-500 to-pink-600 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <ThumbsUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Customer Support</h3>
              <p className="text-gray-600">Dedicated team ready to assist you with any questions or concerns.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="rounded-full bg-gradient-to-r from-orange-500 to-pink-600 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Efficient processes that get your website up and running quickly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Don't just take our word for it. Here's what our clients have to say about working with us.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="flex text-orange-500">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="flex-1 mb-4 text-gray-600 italic">
                    "RevBooster transformed our online presence completely. Our new website has increased conversions by 45% in just three months!"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="rounded-full bg-gray-200 w-10 h-10 mr-3 flex items-center justify-center">
                      <span className="text-gray-700 font-semibold">JD</span>
                    </div>
                    <div>
                      <p className="font-medium">John Doe</p>
                      <p className="text-sm text-gray-500">CEO, TechFirm</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="flex text-orange-500">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="flex-1 mb-4 text-gray-600 italic">
                    "The team at RevBooster doesn't just build websites - they create experiences. Our customers love our new site and it's been a game-changer for our business."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="rounded-full bg-gray-200 w-10 h-10 mr-3 flex items-center justify-center">
                      <span className="text-gray-700 font-semibold">JS</span>
                    </div>
                    <div>
                      <p className="font-medium">Jane Smith</p>
                      <p className="text-sm text-gray-500">Marketing Director, Brand Co.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="flex text-orange-500">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="flex-1 mb-4 text-gray-600 italic">
                    "Working with RevBooster was a fantastic experience from start to finish. They understood our needs and delivered beyond our expectations."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="rounded-full bg-gray-200 w-10 h-10 mr-3 flex items-center justify-center">
                      <span className="text-gray-700 font-semibold">RJ</span>
                    </div>
                    <div>
                      <p className="font-medium">Robert Johnson</p>
                      <p className="text-sm text-gray-500">Owner, Local Business</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-pink-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Boost Your Online Presence?</h2>
          <p className="max-w-2xl mx-auto mb-8">Let's create a website that drives results for your business.</p>
          <Button size="lg" variant="outline" className="bg-white text-orange-600 hover:bg-orange-50">
            Get Started Today
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">Have a project in mind? Fill out the form and we'll be in touch soon to discuss how we can help.</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="rounded-full bg-orange-100 p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-orange-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-gray-600">info@revbooster.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="rounded-full bg-orange-100 p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-orange-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="rounded-full bg-orange-100 p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-orange-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Location</h3>
                    <p className="text-gray-600">123 Business Ave, Suite 100<br />San Francisco, CA 94107</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <Input id="name" placeholder="Your Name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <Input id="email" type="email" placeholder="Your Email" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <Input id="subject" placeholder="How can we help?" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="flex h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tell us about your project"
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/lovable-uploads/af0a8496-0e90-4e5c-9c55-55ca6aeaf09f.png" alt="RevBooster Logo" className="h-8" />
                <span className="font-bold text-xl bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">RevBooster</span>
              </div>
              <p className="text-gray-400 mb-4">Elevating your online presence with exceptional web experiences.</p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 11 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Web Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">UI/UX Design</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">E-commerce Solutions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">SEO Optimization</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Website Maintenance</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Our Team</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Subscribe</h3>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
              <form className="flex gap-2">
                <Input placeholder="Your Email" className="bg-gray-800 border-gray-700" />
                <Button type="submit" className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </Button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">&copy; 2024 RevBooster. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white text-sm">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
