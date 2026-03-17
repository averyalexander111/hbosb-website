import React from "react";
import { motion } from "framer-motion";
import { Zap, TrendingUp, Bot } from "lucide-react";
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

      {/* Pulsing rings on main nodes */}
      {[
        { cx: 300, cy: 100, delay: 1 },
        { cx: 350, cy: 350, delay: 2 },
      ].map((node, i) => (
        <motion.circle
          key={`ring-${i}`}
          cx={node.cx} cy={node.cy} r={12}
          fill="none" stroke="hsl(var(--primary))" strokeWidth="1"
          initial={{ scale: 0.8, opacity: 0.6 }}
          animate={{ scale: [0.8, 1.8], opacity: [0.6, 0] }}
          transition={{ duration: 2.5, delay: node.delay, repeat: Infinity, repeatDelay: 1 }}
        />
      ))}
    </svg>
  </div>
);

const HeartbeatHero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy">
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
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-navy-foreground"
          >
            Turn Your Business Into an AI Revenue System
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-lg sm:text-xl text-navy-foreground/70 max-w-2xl"
          >
            We design AI-powered systems that capture, follow up with, and convert your leads into customers automatically.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="mt-3 text-base text-navy-foreground/50 italic"
          >
            Most businesses don't have a lead problem — they have a follow-up and conversion problem.
          </motion.p>

          {/* Benefit pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {[
              { icon: Zap, label: "Reduce manual work" },
              { icon: TrendingUp, label: "Convert more leads" },
              { icon: Bot, label: "Automate follow-ups" },
            ].map((item) => (
              <span
                key={item.label}
                className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-2 text-sm text-navy-foreground/90"
              >
                <item.icon className="w-4 h-4 text-primary" />
                {item.label}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://audit.heartbeatofsouthbay.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] hover:scale-[1.03] transition-all duration-300"
            >
              Start Your AI Revenue System Assessment
            </a>
            <Link
              to="/roi"
              className="inline-flex items-center justify-center rounded-lg border border-navy-foreground/20 px-6 py-3.5 text-sm font-semibold text-navy-foreground hover:bg-navy-foreground/5 transition-all duration-200"
            >
              Calculate Your Potential ROI
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 text-sm text-navy-foreground/40"
          >
            Complimentary assessment · No commitment required
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeartbeatHero;
