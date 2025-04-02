
import React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
