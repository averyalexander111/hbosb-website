import React from "react";
import { motion } from "framer-motion";

const metrics = [
  { value: "30%", label: "Reduce no-shows" },
  { value: "22%", label: "Improve client retention" },
  { value: "18%", label: "Increase booking conversion" },
];

const ResultsSection = () => {
  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-primary/3" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="section-title text-navy-foreground">
            Real Results From AI Automation
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center p-8 rounded-2xl border border-navy-foreground/10 bg-navy-light/40"
            >
              <div className="text-5xl md:text-6xl font-extrabold text-primary mb-3">
                {m.value}
              </div>
              <p className="text-navy-foreground/70 font-medium">{m.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Placeholder testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 max-w-2xl mx-auto text-center"
        >
          <blockquote className="text-lg italic text-navy-foreground/60">
            "Heartbeat of South Bay helped us automate our follow-ups and
            dramatically improve our response times. Our operations feel much
            more organized."
          </blockquote>
          <p className="mt-4 text-sm text-navy-foreground/40">— Satisfied Client</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
