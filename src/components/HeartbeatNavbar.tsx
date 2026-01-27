import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const HeartbeatNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-sm border-b border-gray-200" style={{ backgroundColor: '#d1e8ff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#d1e8ff' }}>
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" onClick={handleNavClick} className="flex items-center">
            <img 
              src="/lovable-uploads/12a9d3c2-5a34-4ec2-982b-4ee2dc3c99eb.png" 
              alt="Heartbeat of South Bay" 
              className="h-12 w-12"
            />
            <span className="ml-2 text-xl font-bold text-foreground">
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                to="/" 
                onClick={handleNavClick}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                onClick={handleNavClick}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                About Us
              </Link>
              <Link 
                to="/blog" 
                onClick={handleNavClick}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                Blog
              </Link>
              <a 
                href="https://audit.heartbeatofsouthbay.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                Assessment
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3 bg-white rounded-lg mt-2 mb-4 shadow-lg">
              <Link 
                to="/" 
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => { handleNavClick(); setIsMenuOpen(false); }}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => { handleNavClick(); setIsMenuOpen(false); }}
              >
                About Us
              </Link>
              <Link 
                to="/blog" 
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => { handleNavClick(); setIsMenuOpen(false); }}
              >
                Blog
              </Link>
              <a 
                href="https://audit.heartbeatofsouthbay.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Assessment
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default HeartbeatNavbar;