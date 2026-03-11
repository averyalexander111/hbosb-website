import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const bullets = [
  "Where automation could save time",
  "Where AI could increase revenue",
  "What systems would improve operations",
];

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="section-title text-navy-foreground">
            Let's Explore What AI Could Fix In Your Business
          </h2>
          <p className="mt-5 text-lg text-navy-foreground/60">
            Book a complimentary strategy call and we'll identify where AI and
            automation can create the biggest impact in your business.
          </p>

          <ul className="mt-8 space-y-3 text-left max-w-md mx-auto">
            {bullets.map((b) => (
              <li
                key={b}
                className="flex items-center gap-3 text-navy-foreground/80"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <a
              href="https://audit.heartbeatofsouthbay.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:brightness-110 transition-all duration-200"
            >
              Book Your Strategy Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
