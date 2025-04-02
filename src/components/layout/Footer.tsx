
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
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
              <SocialIcon href="#" path="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              <SocialIcon href="#" path="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              <SocialIcon href="#" path="M16 11.37A4 4 0 0 1 12.63 8 4 4 0 0 1 16 11.37z" rect={true} />
              <SocialIcon href="#" path="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" circle={true} />
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
  );
};

const SocialIcon = ({ 
  href, 
  path, 
  rect = false, 
  circle = false 
}: { 
  href: string, 
  path: string, 
  rect?: boolean, 
  circle?: boolean 
}) => {
  return (
    <a href={href} className="text-gray-400 hover:text-white">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="h-5 w-5"
      >
        {rect && <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>}
        {circle && <circle cx="4" cy="4" r="2"></circle>}
        {path && <path d={path}></path>}
        {rect && <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>}
        {circle && <rect width="4" height="12" x="2" y="9"></rect>}
      </svg>
    </a>
  );
};

export default Footer;
