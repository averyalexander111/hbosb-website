import React from "react";
import { motion } from "framer-motion";
import { Clock, Repeat, BarChart3 } from "lucide-react";

const outcomes = [
  {
    icon: Clock,
    title: "Response Consistency",
    desc: "New inquiries enter a structured pipeline and can be acknowledged and routed through approved workflows instead of depending on who is free.",
  },
  {
    icon: Repeat,
    title: "Follow-Up Discipline",
    desc: "Approved SMS and email workflows help appropriate leads keep moving, so follow-up does not depend on who remembers.",
  },
  {
    icon: BarChart3,
    title: "Pipeline Visibility",
    desc: "CRM stages and lead status show what is new, active, waiting, moving, or needs human attention.",
  },
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
            How AI Systems Improve Business Performance
          </h2>
          <p className="mt-4 text-lg text-navy-foreground/60 max-w-2xl mx-auto">
            The improvement is operational. Better handling of the opportunities your business already receives.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {outcomes.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center p-8 rounded-2xl border border-navy-foreground/10 bg-navy-light/40"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-navy-foreground mb-3">{item.title}</h3>
              <p className="text-navy-foreground/70 leading-relaxed text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
