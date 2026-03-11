import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";

const HeartbeatFooter = () => {
  return (
    <footer className="py-14 bg-navy border-t border-navy-foreground/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/lovable-uploads/12a9d3c2-5a34-4ec2-982b-4ee2dc3c99eb.png"
                alt="Heartbeat of South Bay"
                className="h-10 w-10"
              />
              <span className="font-semibold text-navy-foreground">
                Heartbeat of South Bay
              </span>
            </div>
            <p className="text-sm text-navy-foreground/50">
              AI systems for modern businesses.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/blog", label: "Blog" },
              { to: "/roi", label: "ROI Calculator" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-navy-foreground/60 hover:text-navy-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://audit.heartbeatofsouthbay.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-foreground/60 hover:text-navy-foreground transition-colors"
            >
              Assessment
            </a>
          </div>

          {/* Social */}
          <div className="flex md:justify-end gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61552716923245&mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-foreground/40 hover:text-navy-foreground transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/heartbeatofsouthbay?igshid=OGQ5ZDc2ODk2ZA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-foreground/40 hover:text-navy-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/HeartbeatSBay"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-foreground/40 hover:text-navy-foreground transition-colors"
              aria-label="X / Twitter"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-navy-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-navy-foreground/40">
            &copy; {new Date().getFullYear()} Heartbeat of South Bay. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs">
            <Link to="/terms" className="text-navy-foreground/40 hover:text-navy-foreground transition-colors">
              Terms
            </Link>
            <Link to="/privacy" className="text-navy-foreground/40 hover:text-navy-foreground transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HeartbeatFooter;
