import React from "react";
import { motion } from "framer-motion";
import { Radar, Mail, Handshake, Heart, BarChart3, ChevronRight } from "lucide-react";

const stages = [
  {
    icon: Radar,
    title: "Capture",
    desc: "Pull every call, form, and inquiry into one place automatically.",
  },
  {
    icon: Mail,
    title: "Follow Up",
    desc: "Reach prospects quickly with consistent SMS and email touches.",
  },
  {
    icon: Handshake,
    title: "Convert",
    desc: "Move qualified leads into booked appointments without manual chasing.",
  },
  {
    icon: Heart,
    title: "Retain",
    desc: "Stay in touch after the job with updates and review requests.",
  },
  {
    icon: BarChart3,
    title: "Optimize",
    desc: "See what is working with clear reporting on response and conversion.",
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
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
            One connected system, not a stack of disconnected tools.
          </p>
          <h2 className="section-title text-navy-foreground">
            The Heartbeat AI Operating System
          </h2>
          <p className="mt-4 text-lg text-navy-foreground/60 max-w-2xl mx-auto">
            A connected system that strengthens every stage of how your business captures, follows up with, and converts leads. Depending on the business, this may include missed-call response, website form capture, CRM tracking, automated follow-up, customer updates, review request workflows, and reporting.
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
                className="group flex-1 rounded-2xl border border-navy-foreground/10 bg-navy-light/50 backdrop-blur-sm p-6 text-center hover:border-primary/40 lg:hover:scale-105 hover:shadow-[0_0_25px_hsl(var(--primary)/0.12)] transition-[border-color,box-shadow,transform] duration-300"
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

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-sm text-navy-foreground/50 max-w-3xl mx-auto mt-12"
        >
          If your website, forms, phone process, CRM, or review follow-up is causing leads to slip through the cracks, we help identify the weak point and build the right system around it.
        </motion.p>
      </div>
    </section>
  );
};

export default AIOperatingSystem;
