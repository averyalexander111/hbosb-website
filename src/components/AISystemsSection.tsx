import React from "react";
import { motion } from "framer-motion";
import { Magnet, Send, Mic, Workflow, LineChart } from "lucide-react";

const services = [
  { icon: Magnet, title: "AI Lead Capture", desc: "Smart intake forms and AI chat systems that convert visitors into leads." },
  { icon: Send, title: "Automated Follow-Ups", desc: "Email and SMS workflows that nurture leads without manual effort." },
  { icon: Mic, title: "AI Voice Assistants", desc: "24/7 automated customer communication that never sleeps." },
  { icon: Workflow, title: "Automation Infrastructure", desc: "Workflow automation connecting your tools and systems seamlessly." },
  { icon: LineChart, title: "Analytics & Reporting", desc: "Performance dashboards and insights to drive better decisions." },
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
            Purpose-built automation systems designed around your business goals.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:shadow-elegant-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AISystemsSection;
