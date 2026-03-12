import React from "react";
import { motion } from "framer-motion";
import { Radar, Mail, Handshake, Heart, BarChart3, ChevronRight } from "lucide-react";

const stages = [
  {
    icon: Radar,
    title: "Capture",
    desc: "Smart forms, AI chat, and intake systems ensure no opportunity is missed.",
  },
  {
    icon: Mail,
    title: "Follow Up",
    desc: "Automated SMS and email sequences keep prospects engaged.",
  },
  {
    icon: Handshake,
    title: "Convert",
    desc: "CRM pipelines and scheduling automation turn prospects into customers.",
  },
  {
    icon: Heart,
    title: "Retain",
    desc: "Review generation and retention campaigns keep clients coming back.",
  },
  {
    icon: BarChart3,
    title: "Optimize",
    desc: "Dashboards and reporting provide insights for continuous improvement.",
  },
];

const AIOperatingSystem = () => {
  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="section-title text-navy-foreground">
            The Heartbeat AI Operating System™
          </h2>
          <p className="mt-4 text-lg text-navy-foreground/60 max-w-2xl mx-auto">
            A complete automation infrastructure that strengthens every stage of
            the customer journey.
          </p>
        </motion.div>

        {/* Pipeline */}
        <div className="flex flex-col lg:flex-row items-stretch gap-4 max-w-6xl mx-auto">
          {stages.map((stage, i) => (
            <React.Fragment key={stage.title}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group flex-1 rounded-2xl border border-navy-foreground/10 bg-navy-light/50 backdrop-blur-sm p-6 text-center hover:border-primary/40 hover:scale-105 hover:shadow-[0_0_25px_hsl(var(--primary)/0.12)] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stage.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-navy-foreground mb-2">
                  {stage.title}
                </h3>
                <p className="text-sm text-navy-foreground/50">{stage.desc}</p>
              </motion.div>
              {i < stages.length - 1 && (
                <div className="hidden lg:flex items-center justify-center">
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ChevronRight className="w-5 h-5 text-primary/40" />
                  </motion.div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIOperatingSystem;
