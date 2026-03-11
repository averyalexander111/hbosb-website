import React from "react";
import { motion } from "framer-motion";
import { Zap, TrendingUp, Bot } from "lucide-react";
import { Link } from "react-router-dom";

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

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-navy-foreground"
          >
            Turn Your Business Into an AI-Powered System
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-lg sm:text-xl text-navy-foreground/70 max-w-2xl"
          >
            Heartbeat of South Bay designs and implements AI-powered business
            systems that capture leads, automate customer communication, and
            streamline operations.
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
              { icon: TrendingUp, label: "Capture more leads" },
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
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:brightness-110 transition-all duration-200"
            >
              Start Your AI Opportunity Assessment
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
