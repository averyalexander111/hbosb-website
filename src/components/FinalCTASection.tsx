import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const bullets = [
  "Where calls, forms, and inquiries are being missed",
  "Where follow-up and communication are breaking down",
  "What system would have the biggest impact on revenue",
];

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-navy rounded-3xl p-10 md:p-14 relative overflow-hidden border border-navy-foreground/10"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/8 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 text-center">
            <p className="text-primary font-medium mb-3">
              When businesses operate smarter, they grow stronger.
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-foreground mb-4">
              See Where Leads Are Slipping Through the Cracks
            </h2>
            <p className="text-lg text-navy-foreground/60 mb-8 max-w-xl mx-auto">
              Book a focused assessment to review how your business captures inquiries, follows up, and manages opportunities. You will leave with clear next steps, whether you need a simple missed-call system or a more complete AI revenue system.
            </p>

            <ul className="mb-10 space-y-3 text-left max-w-md mx-auto">
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

            <Link
              to="/assessment"
              className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground rounded-lg text-base font-semibold border-glow-spin hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] hover:scale-[1.03] transition-[transform] duration-300"
            >
              Book Your AI Opportunity Assessment
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="mt-4 text-sm text-navy-foreground/40">
              Identify where AI systems can create the biggest impact in your business.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
