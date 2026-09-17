import React from "react";
import { motion } from "framer-motion";
import { Inbox, Bell, Repeat, Eye, Users, ChevronRight } from "lucide-react";

const outcomes = [
  { icon: Inbox, title: "Inquiry" },
  { icon: Bell, title: "Response" },
  { icon: Repeat, title: "Follow-Up" },
  { icon: Eye, title: "Visibility" },
  { icon: Users, title: "Human Action" },
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
             Especially Valuable When Each Inquiry Has Meaningful Value
          </h2>
          <p className="mt-4 text-lg text-navy-foreground/60 max-w-2xl mx-auto">
             For restoration and other high-value service businesses, a missed call or delayed response can represent a meaningful opportunity. HBOSB helps create a more structured path from the moment an inquiry arrives to the point where the right person takes action.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-stretch gap-3 max-w-6xl mx-auto">
          {outcomes.map((item, i) => (
            <React.Fragment key={item.title}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: i * 0.09, ease: "easeOut" }}
                className="flex-1 text-center p-6 rounded-lg border border-navy-foreground/10 bg-navy-light/40"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-navy-foreground">{item.title}</h3>
              </motion.div>
              {i < outcomes.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.25, delay: i * 0.09 + 0.08 }}
                  className="flex items-center justify-center rotate-90 lg:rotate-0"
                >
                  <ChevronRight className="h-5 w-5 text-primary/60" />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-navy-foreground/70 max-w-4xl mx-auto leading-relaxed">
          Whether the business handles emergency restoration, scheduled services, estimates, or another high-value customer journey, the principle is the same: Good leads need a reliable process after they arrive.
        </p>
      </div>
    </section>
  );
};

export default ResultsSection;
