import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    num: "01",
    title: "AI Revenue System Assessment",
    desc: "Review how inquiries enter, how they are handled, and where gaps may exist.",
  },
  {
    num: "02",
    title: "Appropriate Recommendation",
    desc: "Determine fit based on the problem, current systems, complexity, and demonstrated need.",
  },
  {
    num: "03",
    title: "Approved Implementation",
    desc: "If the recommendation is a fit, confirm scope and build the approved system.",
  },
  {
    num: "04",
    title: "Management & Improvement",
    desc: "For managed systems, monitor the approved environment, review available performance information, and make appropriate in-scope improvements.",
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
          className="text-center max-w-3xl lg:max-w-5xl mx-auto mb-14"
        >
          <h2 className="section-title text-foreground lg:whitespace-nowrap">
            How Working With HBOSB Starts
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            The free assessment comes first. Any recommendation or implementation follows only after the business problem and scope are understood.
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
          className="mt-16 max-w-5xl mx-auto bg-navy rounded-3xl p-8 md:p-12 relative overflow-hidden border border-navy-foreground/10"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/8 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 text-center">
            <h3 className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold text-navy-foreground mb-5 leading-tight lg:whitespace-nowrap">
              Start With the Current Lead Flow
            </h3>
            <p className="text-base md:text-lg text-navy-foreground/70 mb-8 max-w-[720px] mx-auto leading-relaxed">
              Review how inquiries enter, what happens next, and where the current process may be breaking down.
            </p>
            <Link
              to="/assessment"
              className="group inline-flex items-center justify-center rounded-lg bg-primary px-10 py-4 text-base font-semibold text-primary-foreground border-glow-spin hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] hover:scale-[1.03] transition-[transform] duration-300"
            >
              Start Your Free AI Revenue System Assessment
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImplementationSection;
