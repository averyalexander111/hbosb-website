import React from "react";
import { motion } from "framer-motion";
import { PhoneOff, Clock, Repeat, Eye } from "lucide-react";

const problems = [
  { icon: PhoneOff, title: "Missed Inquiries", desc: "Calls or forms arrive when no one is ready to respond." },
  { icon: Clock, title: "Slow Response", desc: "Delays give the customer time to contact another provider." },
  { icon: Repeat, title: "Inconsistent Follow-Up", desc: "The next step depends on who remembers to take it." },
  { icon: Eye, title: "Limited Pipeline Visibility", desc: "The team cannot clearly see what is new, active, waiting, or requires attention." },
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
          <h2 className="section-title text-foreground">
            Good Leads Still Get Lost After They Arrive
          </h2>
          <p className="section-subtitle mx-auto">
            A potential customer calls while the team is busy. A form arrives after hours. Follow-up happens once and then disappears. No one can clearly see where the opportunity stands. For many service businesses, generating the inquiry is only part of the problem. The business also needs a reliable way to respond, follow up, track the opportunity, and hand it to the right person.
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
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
            {problems.map((item) => (
            <motion.div
              key={item.title}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
              }}
               className="flex flex-col items-center text-center p-6 rounded-lg bg-card border border-border hover:shadow-elegant-hover hover:-translate-y-0.5 transition-[box-shadow,transform] duration-300"
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
          Better systems can make response, follow-up, tracking, and handoff more consistent.
        </motion.p>
      </div>
    </section>
  );
};

export default ProblemSection;
