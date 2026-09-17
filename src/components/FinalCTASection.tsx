import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-primary/3 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl lg:max-w-5xl mx-auto text-center"
        >
          <p className="text-primary font-medium mb-3">
            Start with the process
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-foreground mb-4 lg:whitespace-nowrap">
            Find the Gaps Before Building the System
          </h2>
          <p className="text-lg text-navy-foreground/60 mb-8 max-w-xl mx-auto">
            The free AI Revenue System Assessment helps identify likely response, follow-up, lead-tracking, and workflow gaps. If HBOSB appears to be the right fit, the next step is an optional review and an appropriate recommendation.
          </p>

          <Link
            to="/assessment"
            className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground rounded-lg text-base font-semibold border-glow-spin hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] hover:scale-[1.03] transition-[transform] duration-300"
          >
            Start Your Free AI Revenue System Assessment
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="mt-4 text-sm text-navy-foreground/40">
            Complimentary. No purchase commitment required.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
