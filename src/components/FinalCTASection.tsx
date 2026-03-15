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
    <section className="py-28 bg-gradient-to-b from-navy via-navy-light to-navy relative overflow-hidden">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl pointer-events-none" />
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

          <div className="mt-12">
            <a
              href="https://audit.heartbeatofsouthbay.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-10 py-4.5 text-base font-semibold text-primary-foreground border-glow-spin hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] hover:scale-[1.03] transition-[transform] duration-300"
            >
              Book Your AI Opportunity Assessment
            </a>
            <p className="mt-4 text-sm text-navy-foreground/40">
              Discover where automation can create the biggest impact in your business.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
