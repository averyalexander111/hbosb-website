import React from "react";
import { motion } from "framer-motion";
import { PhoneOff, Clock, CalendarX, Snail, Star } from "lucide-react";

const problems = [
  { icon: PhoneOff, title: "Missed Inquiries", desc: "Potential customers reach out and never receive a response." },
  { icon: Clock, title: "Inconsistent Follow-Ups", desc: "Leads are not contacted consistently, causing lost opportunities." },
  { icon: CalendarX, title: "Manual Scheduling", desc: "Time is lost going back and forth trying to book appointments." },
  { icon: Snail, title: "Slow Response Times", desc: "Delayed replies push potential customers toward competitors." },
  { icon: Star, title: "Low Review Volume", desc: "Satisfied customers leave without sharing their experience." },
];

const ProblemSection = () => {
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
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Most businesses don't have a lead problem — they have a follow-up and conversion problem.
          </p>
          <h2 className="section-title text-foreground">
            Most Businesses Are Losing Opportunities Every Day
          </h2>
          <p className="section-subtitle mx-auto">
            Small breakdowns in response time, follow-up, and organization lead to missed revenue.
            AI systems fix these gaps by capturing, responding to, and converting opportunities automatically.
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
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
        >
          {problems.map((item) => (
            <motion.div
              key={item.title}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
              }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border hover:shadow-elegant-hover transition-[box-shadow] duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
