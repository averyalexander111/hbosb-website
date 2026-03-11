import React from "react";
import { Phone, Calendar, BarChart3, Clock, TrendingUp, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const stats = [
  { icon: Clock, label: "Minutes, Not Hours", desc: "Average lead response time" },
  { icon: TrendingUp, label: "30-Day Results", desc: "See impact in your first month" },
  { icon: BarChart3, label: "One Dashboard", desc: "Everything in one place" },
  { icon: Users, label: "24/7 Coverage", desc: "AI handles calls & messages around the clock" },
];

const features = [
  {
    icon: Phone,
    title: "AI Receptionist",
    desc: "Answers calls, texts, and website chats instantly. Captures leads, routes them to your team, and follows up automatically.",
  },
  {
    icon: Calendar,
    title: "Automated Scheduling & Follow-Ups",
    desc: "Books appointments, sends quotes, and follows up with reminders — so nothing falls through the cracks.",
  },
  {
    icon: BarChart3,
    title: "Performance Dashboard",
    desc: "See your bookings, revenue, reviews, and pipeline health in one simple view.",
  },
];

const steps = [
  { step: "Assess", desc: "We map your tools and find the bottlenecks" },
  { step: "Design", desc: "We propose the simplest setup that fits your budget" },
  { step: "Build", desc: "You get a working system in 2–4 weeks" },
  { step: "Grow", desc: "We add features as your business scales" },
];

const results = [
  "Response times drop from hours to minutes",
  "Clients rebook and leave more reviews",
  "Your team reclaims hours every week",
];

const BaySignalSection = React.memo(() => {
  return (
    <section className="py-20" style={{ backgroundColor: '#d1e8ff' }}>
      <div className="container mx-auto px-4 max-w-6xl space-y-16">

        {/* Hero Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Custom AI Ops
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Your Business, Running Smarter&nbsp;with&nbsp;AI
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We build a clean, connected system so leads get answered, clients stay engaged, and your team spends less time on busywork.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={item}
              className="bg-card rounded-2xl p-6 text-center shadow-sm border border-border/50 hover:shadow-md transition-shadow"
            >
              <s.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="font-bold text-foreground text-lg">{s.label}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* How It Works */}
        <motion.div
          className="text-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-10">How It Works</h3>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {steps.map((s, i) => (
              <motion.div key={s.step} variants={item} className="relative flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold mb-3">
                  {i + 1}
                </div>
                <p className="font-semibold text-foreground">{s.step}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                {i < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-3 -right-3 w-5 h-5 text-primary/40" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Results Highlights */}
        <motion.div
          className="grid md:grid-cols-3 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {results.map((r) => (
            <motion.div
              key={r}
              variants={item}
              className="bg-primary/10 rounded-2xl p-6 text-center border border-primary/20"
            >
              <p className="font-semibold text-foreground">{r}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          <style dangerouslySetInnerHTML={{
            __html: `
              @keyframes wave {
                0% { transform: translate(-50%, -75%) rotate(0deg); }
                100% { transform: translate(-50%, -75%) rotate(360deg); }
              }
              .wave-button {
                font-size: 16px; font-weight: 400; letter-spacing: 2px;
                padding: 15px 30px; text-align: center; color: #ffffff;
                background-color: hsl(207, 57%, 50%); border: none; border-radius: 15px;
                position: relative; overflow: hidden; cursor: pointer;
                transition: background-color 0.3s ease;
              }
              .wave-button:hover { background-color: hsl(207, 57%, 40%); }
              .wave-button span { position: relative; z-index: 1; }
              .wave { position: absolute; top: -100px; left: 0; width: 100%; height: 250px;
                background: linear-gradient(45deg, hsl(207, 57%, 35%), hsl(200, 70%, 50%));
                transition: 0.5s ease; }
              .wave::after, .wave::before {
                content: ''; position: absolute; width: 200%; height: 200%;
                top: -10px; left: 50%; transform: translate(-50%, -75%);
                transition: 0.5s ease; }
              .wave::before { border-radius: 40%; background: rgba(1,1,1,0.5);
                animation: wave 7s linear infinite; }
              .wave::after { border-radius: 45%; background: transparent;
                animation: wave 12s linear infinite; }
            `
          }} />
          <a href="https://audit.heartbeatofsouthbay.com/" target="_blank" rel="noopener noreferrer">
            <button className="wave-button">
              <span>Start My Assessment</span>
              <div className="wave"></div>
            </button>
          </a>
          <p className="mt-6 text-sm text-muted-foreground">Complimentary. Get your fastest first win.</p>
        </motion.div>
      </div>
    </section>
  );
});

BaySignalSection.displayName = "BaySignalSection";

export default BaySignalSection;
