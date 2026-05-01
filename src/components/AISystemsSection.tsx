import React from "react";
import { motion } from "framer-motion";
import { Magnet, Send, Mic, Workflow, LineChart, PhoneOutgoing, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Magnet, title: "AI Lead Capture", desc: "Smart intake forms and AI chat systems that convert visitors into leads." },
  { icon: Send, title: "Automated Follow-Ups", desc: "Email and SMS workflows that nurture leads and move them toward action." },
  { icon: Mic, title: "AI Voice Assistants", desc: "24/7 AI-powered communication that responds, qualifies, and routes leads instantly." },
  { icon: Workflow, title: "Automation Infrastructure", desc: "Workflow systems connecting your tools to eliminate bottlenecks and accelerate output." },
  { icon: LineChart, title: "Analytics & Reporting", desc: "Performance dashboards and insights that tie directly to revenue outcomes." },
  { icon: PhoneOutgoing, title: "AI Outbound & Lead Reactivation", desc: "AI-powered systems that proactively reach out to new and existing leads to generate conversations and book appointments." },
];

const AISystemsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="section-title text-foreground">AI Systems We Build</h2>
          <p className="section-subtitle mx-auto">
            Purpose-built systems designed to improve how your business captures, follows up with, and converts opportunities.
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
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
              }}
              className="group p-8 rounded-2xl bg-card border border-border hover:shadow-elegant-hover hover:-translate-y-1 transition-[box-shadow,transform] duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mt-12 md:mt-16 max-w-5xl mx-auto bg-navy rounded-3xl p-8 md:p-12 relative overflow-hidden border border-navy-foreground/10"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/8 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 text-center">
            <h3 className="text-2xl md:text-4xl font-bold text-navy-foreground mb-4">
              Find the Gaps in Your Lead System
            </h3>
            <p className="text-base md:text-lg text-navy-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              Every business has different gaps in lead capture, follow-up, and customer communication. If your website, forms, phone process, CRM, or review follow-up is causing leads to slip through the cracks, we help identify the weak point and build the right system around it.
            </p>
            <Link
              to="/assessment"
              className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground rounded-lg text-base font-semibold border-glow-spin hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] hover:scale-[1.03] transition-[transform] duration-300"
            >
              Start AI Revenue System Assessment
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AISystemsSection;
