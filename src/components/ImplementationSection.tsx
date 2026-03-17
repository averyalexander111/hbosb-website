import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "AI Revenue System Assessment",
    desc: "We analyze how your business currently receives and manages inquiries to identify where opportunities are being missed.",
  },
  {
    num: "02",
    title: "AI System Blueprint",
    desc: "We design a clear implementation plan outlining workflows, integrations, and how your system will improve lead conversion.",
  },
  {
    num: "03",
    title: "Automation Implementation",
    desc: "We build and deploy your AI system, integrating it with your existing tools and processes.",
  },
  {
    num: "04",
    title: "Optimization & Growth",
    desc: "We monitor performance, refine workflows, and improve results over time as your system continues to operate.",
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
            How We Build and Implement AI Systems
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            These results come from a structured system designed to improve how your business captures, follows up with, and converts opportunities.
          </p>
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center max-w-2xl mx-auto"
        >
          <h3 className="text-xl font-semibold text-foreground mb-3">
            See What This Looks Like for Your Business
          </h3>
          <p className="text-sm text-muted-foreground mb-8">
            Schedule an AI Revenue System Assessment to identify where your business can improve lead conversion, follow-up, and automation.
          </p>
          <a
            href="https://audit.heartbeatofsouthbay.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center rounded-lg bg-primary px-10 py-4.5 text-base font-semibold text-primary-foreground border-glow-spin hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] hover:scale-[1.03] transition-[transform] duration-300"
          >
            Start AI Revenue System Assessment
            <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ImplementationSection;
