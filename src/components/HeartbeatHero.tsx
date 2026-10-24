import React, { useState, useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import { Zap, TrendingUp, Bot, Pause, Play } from "lucide-react";
import HeroNetwork from "./HeroNetwork";
import { Link } from "react-router-dom";

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";
const subscribeReducedMotion = (onChange: () => void) => {
  const media = window.matchMedia(reducedMotionQuery);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
};
const getReducedMotion = () => window.matchMedia(reducedMotionQuery).matches;
const getServerReducedMotion = () => false;

const HeartbeatHero = () => {
  const reducedMotion = useSyncExternalStore(subscribeReducedMotion, getReducedMotion, getServerReducedMotion);
  const [paused, setPaused] = useState(false);
  // Under reduced motion, content renders immediately without entrance movement.
  const enter = (delay: number, y = 20) =>
    reducedMotion
      ? { initial: false as const }
      : { initial: { opacity: 0, y }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay } };
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

      {/* Decorative connected network */}
      <HeroNetwork animate={!reducedMotion} paused={paused} />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <motion.h1
            {...enter(0)}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-navy-foreground"
          >
            AI Revenue Systems for Modern Businesses
          </motion.h1>

          <motion.p
            {...enter(0.15)}
            className="mt-6 text-lg sm:text-xl text-navy-foreground/70 max-w-2xl"
          >
            We build AI-powered systems that help service-based businesses capture leads, automate follow-up, and convert more opportunities into revenue.
          </motion.p>

          <motion.p
            {...enter(0.22)}
            className="mt-3 text-base sm:text-lg text-navy-foreground/50 max-w-2xl"
          >
            Managed systems support response, follow-up, and pipeline visibility. Your team stays in charge of the conversations and decisions.
          </motion.p>

          {/* Benefit pills */}
          <motion.div
            {...enter(0.3)}
            className="mt-8 flex flex-wrap gap-3"
          >
            {[
              { icon: Zap, label: "Improve lead capture" },
              { icon: Bot, label: "Automate follow-up" },
              { icon: TrendingUp, label: "Improve pipeline visibility" },
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
            {...enter(0.45)}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/assessment"
              className="inline-flex items-center justify-center text-center rounded-lg bg-primary px-5 sm:px-8 py-3.5 sm:py-4 text-sm font-semibold leading-snug text-primary-foreground shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] hover:scale-[1.03] transition-all duration-300"
            >
              Start Your AI Revenue System Assessment
            </Link>
            <Link
              to="/roi"
              className="inline-flex items-center justify-center rounded-lg border border-navy-foreground/20 px-6 py-3.5 text-sm font-semibold text-navy-foreground hover:bg-navy-foreground/5 transition-all duration-200"
            >
              Calculate Your Potential ROI
            </Link>
          </motion.div>

          <motion.p
            {...enter(0.6, 0)}
            className="mt-6 text-sm text-navy-foreground/40"
          >
            Complimentary assessment · No commitment required
          </motion.p>
        </div>
      </div>

      {!reducedMotion && (
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
          aria-label={paused ? "Play background animation" : "Pause background animation"}
          className="absolute bottom-4 right-4 sm:right-6 z-20 inline-flex items-center gap-1.5 rounded-full border border-navy-foreground/15 bg-navy/60 px-3 py-1.5 text-xs text-navy-foreground/60 hover:text-navy-foreground hover:border-navy-foreground/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors"
        >
          {paused ? <Play className="w-3 h-3" aria-hidden="true" /> : <Pause className="w-3 h-3" aria-hidden="true" />}
          {paused ? "Play" : "Pause"}
        </button>
      )}
    </section>
  );
};

export default HeartbeatHero;
