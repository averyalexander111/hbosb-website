import React from "react";
import { motion } from "framer-motion";
import { Zap, MessageSquare, BarChart3, CalendarCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  { icon: Zap, title: "Instant Lead Response", desc: "Capture and respond to every inquiry the moment it comes in." },
  { icon: MessageSquare, title: "Automated SMS & Email Follow-Up", desc: "Nurture leads automatically with personalized messages." },
  { icon: BarChart3, title: "Lead Tracking Pipeline", desc: "Organize every lead into a structured, visual pipeline." },
  { icon: CalendarCheck, title: "Appointment Booking Integration", desc: "Let qualified leads book directly into your calendar." },
];

const AILeadResponseSection = () => {
  return (
    <section className="py-28 bg-background relative overflow-hidden">
      {/* Decorative glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/6 w-[300px] h-[300px] bg-primary/3 rounded-full blur-3xl pointer-events-none" />
      
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary mb-6 border border-primary/20">
            AI-Powered Lead Recovery
          </div>
          <h2 className="section-title text-foreground font-display">
            Never Miss Another{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Lead
            </span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Many businesses lose opportunities simply because inquiries are not followed up quickly.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            We design AI-powered lead response systems that capture inquiries, respond instantly, and organize leads into a structured pipeline so no opportunity is missed.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            These systems ensure every inquiry receives an immediate response and structured follow-up, helping businesses convert more leads into customers.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {features.map((f, index) => (
            <motion.div
              key={f.title}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
              }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-[0_8px_30px_hsl(var(--primary)/0.08)] hover:-translate-y-1 transition-all duration-300"
            >
              <span className="absolute top-4 right-5 text-xs font-semibold text-muted-foreground/40 group-hover:text-primary/30 transition-colors">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/30 transition-all duration-300 rounded-full" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <Link
            to="/ai-lead-response-system"
            className="inline-flex items-center gap-2 justify-center rounded-lg bg-primary px-10 py-4.5 text-base font-semibold text-primary-foreground shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] hover:scale-[1.03] transition-all duration-300"
          >
            Learn How the AI Lead Response System Works
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AILeadResponseSection;
