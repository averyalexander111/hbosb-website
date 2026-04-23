import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const HeartbeatNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const links = [
    { to: "/", label: "Home" },
    { to: "/leads", label: "Lead Conversion System" },
    { to: "/roi", label: "ROI Calculator" },
    { to: "/about", label: "About Us" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/90 backdrop-blur-md border-b border-navy-foreground/10 shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" onClick={handleNavClick} className="flex items-center gap-2">
            <img
              src="/lovable-uploads/12a9d3c2-5a34-4ec2-982b-4ee2dc3c99eb.png"
              alt="Heartbeat of South Bay"
              className="h-10 w-10"
            />
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={handleNavClick}
                className="text-sm text-navy-foreground/80 hover:text-navy-foreground transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/audit"
              className="text-sm font-semibold rounded-lg bg-primary px-4 py-2 text-primary-foreground hover:brightness-110 transition-all"
            >
              Audit
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-navy-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-1 bg-navy-light rounded-xl p-4 mt-2 border border-navy-foreground/10">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="px-3 py-2.5 text-sm text-navy-foreground/80 hover:text-navy-foreground rounded-lg hover:bg-navy-foreground/5 transition-colors"
                  onClick={() => { handleNavClick(); setIsMenuOpen(false); }}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/audit"
                className="mt-2 text-center text-sm font-semibold rounded-lg bg-primary px-4 py-2.5 text-primary-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Audit
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default HeartbeatNavbar;
