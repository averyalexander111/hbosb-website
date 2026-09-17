import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FloatingNodes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Animated circuit/workflow nodes */}
    <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[500px] opacity-[0.07]" viewBox="0 0 600 500">
      {/* Connection lines */}
      <motion.line x1="100" y1="150" x2="300" y2="100" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeDasharray="6 4"
        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2, delay: 0.5 }} />
      <motion.line x1="300" y1="100" x2="500" y2="180" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeDasharray="6 4"
        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2, delay: 1 }} />
      <motion.line x1="150" y1="300" x2="350" y2="350" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeDasharray="6 4"
        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2, delay: 1.5 }} />
      <motion.line x1="350" y1="350" x2="480" y2="280" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeDasharray="6 4"
        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2, delay: 2 }} />
      <motion.line x1="300" y1="100" x2="350" y2="350" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="4 6"
        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2, delay: 2.5 }} />

      {/* Nodes */}
      {[
        { cx: 100, cy: 150, r: 6, delay: 0.3 },
        { cx: 300, cy: 100, r: 8, delay: 0.8 },
        { cx: 500, cy: 180, r: 6, delay: 1.3 },
        { cx: 150, cy: 300, r: 5, delay: 1.8 },
        { cx: 350, cy: 350, r: 7, delay: 2.3 },
        { cx: 480, cy: 280, r: 5, delay: 2.8 },
      ].map((node, i) => (
        <motion.circle
          key={i}
          cx={node.cx} cy={node.cy} r={node.r}
          fill="hsl(var(--primary))"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.8] }}
          transition={{ duration: 0.6, delay: node.delay }}
        />
      ))}

    </svg>
  </div>
);

const HeartbeatHero = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-navy">
      {/* Gradient mesh background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--navy-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--navy-foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Animated workflow nodes — hidden on mobile for performance */}
      <div className="hidden md:block">
        <FloatingNodes />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary"
          >
            Managed Lead Response &amp; Business Systems for Service Businesses
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
            className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-navy-foreground"
          >
            Stop Losing Good Leads to Slow Response and Inconsistent Follow-Up
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.16, ease: "easeOut" }}
            className="mt-6 text-lg sm:text-xl text-navy-foreground/70 max-w-2xl"
          >
            Heartbeat of South&nbsp;Bay builds and manages practical systems that help service businesses respond to inquiries, recover missed opportunities, follow up consistently, and keep leads visible from first contact to next step. Especially useful for restoration and other high-value service businesses where a missed call or delayed follow-up can mean valuable work is lost.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.24, ease: "easeOut" }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/assessment"
              className="group inline-flex items-center justify-center gap-2 text-center rounded-lg bg-primary px-5 sm:px-8 py-3.5 sm:py-4 text-sm font-semibold leading-snug text-primary-foreground shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-navy transition-[transform,box-shadow] duration-300"
            >
              Start Your Free AI Revenue System Assessment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/leads"
              className="inline-flex items-center justify-center rounded-lg border border-navy-foreground/20 px-6 py-3.5 text-sm font-semibold text-navy-foreground hover:bg-navy-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors duration-200"
            >
              See the AI Lead Conversion System
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.32 }}
            className="mt-6 text-sm text-navy-foreground/40"
          >
            Complimentary assessment. No purchase commitment required.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeartbeatHero;
