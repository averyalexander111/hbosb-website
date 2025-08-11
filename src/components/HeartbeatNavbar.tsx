import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const HeartbeatNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#d1e8ff' }}>
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/12a9d3c2-5a34-4ec2-982b-4ee2dc3c99eb.png" 
              alt="Heartbeat of South Bay" 
              className="h-12 w-12"
            />
            <span className="ml-2 text-xl font-bold text-foreground">
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a 
                href="#home" 
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                Home
              </a>
              <a 
                href="/about" 
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                About Us
              </a>
              <a 
                href="#consultation" 
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                Consultation
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white rounded-lg mt-2 shadow-lg">
              <a 
                href="#home" 
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="/about" 
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              <a 
                href="#consultation" 
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Consultation
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default HeartbeatNavbar;