import React from "react";
import { motion } from "framer-motion";
import { Phone, Users, RefreshCw, CalendarCheck, MessageSquare } from "lucide-react";

const capabilities = [
  { icon: Phone, title: "AI Voice Agents That Call Leads Automatically", desc: "Outbound calls triggered instantly when a lead comes in — no human delay." },
  { icon: Users, title: "Conference And Event Lead Follow-Up", desc: "Automatically reach out to every contact collected at events and conferences." },
  { icon: RefreshCw, title: "CRM Reactivation Campaigns", desc: "Re-engage old contacts and dormant leads with automated outreach sequences." },
  { icon: CalendarCheck, title: "Appointment Booking Via Voice", desc: "AI voice agents qualify interest and book appointments directly on your calendar." },
  { icon: MessageSquare, title: "SMS Follow-Up Sequences", desc: "Automated text message sequences that keep leads warm and moving forward." },
];

const AIVoiceOutboundSection = () => {
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
          <h2 className="section-title text-foreground">AI Voice & Outbound Automation</h2>
          <p className="section-subtitle mx-auto">
            Most businesses lose opportunities because they don't follow up fast enough.
            Heartbeat of South Bay builds AI voice systems that can automatically call leads,
            qualify interest, and book appointments on your calendar. Whether it's new leads,
            old contacts, or conference lists, our systems ensure every opportunity is followed
            up with consistently.
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
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {capabilities.map((c) => (
            <motion.div
              key={c.title}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
              }}
              className="group p-8 rounded-2xl bg-card border border-border hover:shadow-elegant-hover hover:-translate-y-1 transition-[box-shadow,transform] duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <c.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AIVoiceOutboundSection;
