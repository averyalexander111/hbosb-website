import React from "react";
import { motion } from "framer-motion";
import { Inbox, Bell, MessageSquare, Eye, BarChart3, ChevronRight } from "lucide-react";

const stages = [
  {
    icon: Inbox,
    title: "Capture",
    desc: "Organize appropriate inquiries as they enter.",
  },
  {
    icon: Bell,
    title: "Respond",
    desc: "Acknowledge and route opportunities through approved workflows.",
  },
  {
    icon: MessageSquare,
    title: "Follow Up",
    desc: "Support consistent SMS, email, and missed-call recovery when included.",
  },
  {
    icon: Eye,
    title: "Track",
    desc: "Keep lead status and next actions visible.",
  },
  {
    icon: BarChart3,
    title: "Improve",
    desc: "Review available system information and refine the approved process over time.",
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
          <p className="text-xs lg:text-sm font-medium text-primary uppercase tracking-wider mb-4 lg:whitespace-nowrap">
            An explanatory framework for clearer operations
          </p>
          <h2 className="section-title text-navy-foreground lg:whitespace-nowrap">
            Where Better Systems Create Leverage
          </h2>
          <p className="mt-4 text-lg text-navy-foreground/60 max-w-2xl mx-auto lg:max-w-none lg:whitespace-nowrap">
            Process, technology, and human responsibility work together across the approved lead flow.
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
                className="group flex-1 rounded-lg border border-navy-foreground/10 bg-navy-light/50 backdrop-blur-sm p-6 text-center hover:border-primary/40 lg:hover:-translate-y-0.5 hover:shadow-[0_0_25px_hsl(var(--primary)/0.12)] transition-[border-color,box-shadow,transform] duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stage.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-navy-foreground mb-2">
                  {stage.title}
                </h3>
                <p className="text-sm text-navy-foreground/60">{stage.desc}</p>
              </motion.div>
              {i < stages.length - 1 && (
                <div className="hidden lg:flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, x: -4 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
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
