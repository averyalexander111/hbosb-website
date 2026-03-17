import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "AI Revenue System Assessment",
    desc: "We analyze your current operations to identify where AI systems can improve your lead capture, follow-up, and conversion process.",
  },
  {
    num: "02",
    title: "AI System Blueprint",
    desc: "A detailed implementation plan outlining workflows, integrations, and expected outcomes.",
  },
  {
    num: "03",
    title: "Automation Implementation",
    desc: "We build and deploy your custom AI systems, integrating with your existing tools.",
  },
  {
    num: "04",
    title: "Optimization & Growth",
    desc: "Ongoing monitoring, reporting, and refinement to maximize results over time.",
  },
];

const ImplementationSection = () => {
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
          <h2 className="section-title text-foreground">
            How We Implement AI Systems
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative text-center"
            >
              <div className="text-5xl font-extrabold text-primary/15 mb-4">
                {step.num}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImplementationSection;
