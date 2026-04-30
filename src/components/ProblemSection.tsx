import React from "react";
import { motion } from "framer-motion";
import { PhoneOff, Clock, Inbox, MessageSquareOff, Layers } from "lucide-react";

const problems = [
  { icon: PhoneOff, title: "Missed Calls", desc: "Inquiries come in by phone and never get a callback." },
  { icon: Clock, title: "Slow Response Times", desc: "Prospects move on before anyone gets back to them." },
  { icon: Inbox, title: "Unanswered Forms", desc: "Website and Google Business Profile leads sit untouched." },
  { icon: MessageSquareOff, title: "No Follow-Up Process", desc: "Leads receive one reply, then go quiet." },
  { icon: Layers, title: "Scattered Communication", desc: "Conversations live in too many places to track." },
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
            Most businesses do not have a lead problem. They have a follow-up and conversion problem.
          </p>
          <h2 className="section-title text-foreground">
            Where Service Businesses Quietly Lose Revenue
          </h2>
          <p className="section-subtitle mx-auto">
            Calls get missed, forms go unanswered, follow-up is inconsistent, and customer communication ends up scattered across phone, email, text, and CRM. AI systems close those gaps.
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

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-sm text-muted-foreground max-w-2xl mx-auto mt-10"
        >
          These gaps are predictable, and they are exactly what an AI revenue system is built to fix.
        </motion.p>
      </div>
    </section>
  );
};

export default ProblemSection;
