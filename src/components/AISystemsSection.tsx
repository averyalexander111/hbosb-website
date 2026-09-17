import React from "react";
import { motion } from "framer-motion";
import { ClipboardList, PhoneOff, Send, Workflow, LineChart, Route, CalendarCheck } from "lucide-react";

const services = [
  { icon: ClipboardList, title: "Lead Capture & Intake", desc: "Forms and intake workflows that organize new inquiries." },
  { icon: PhoneOff, title: "Missed-Call Recovery", desc: "Structured response workflows that help reduce opportunities being forgotten after a missed call." },
  { icon: Send, title: "SMS & Email Follow-Up", desc: "Approved communication sequences that support consistent follow-up." },
  { icon: LineChart, title: "CRM & Pipeline Visibility", desc: "Clear stages and lead tracking so opportunities remain visible." },
  { icon: CalendarCheck, title: "Booking & Lead Routing", desc: "Workflows that move appropriate inquiries toward the right person or next step." },
  { icon: Workflow, title: "Workflow Automation & Integrations", desc: "Connections between systems involved in the customer journey." },
  { icon: Route, title: "Reporting & Optimization", desc: "Available system data used to review performance and identify practical improvements." },
];

const AISystemsSection = () => {
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
          <h2 className="section-title text-foreground">Capabilities We Bring Into the Right System</h2>
          <p className="section-subtitle mx-auto">
            Every business does not need every capability. HBOSB uses the components that solve the demonstrated operational problem and fit the approved implementation.
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
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
              }}
              className="group p-8 rounded-lg bg-card border border-border hover:shadow-elegant-hover hover:-translate-y-0.5 transition-[box-shadow,transform] duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mt-10 max-w-4xl mx-auto bg-navy rounded-lg p-6 md:p-8 relative overflow-hidden border border-navy-foreground/10"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/8 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-navy-foreground mb-3">
              AI Voice
            </h3>
            <p className="text-base md:text-lg text-navy-foreground/70 mb-8 max-w-[880px] mx-auto leading-relaxed">
              AI voice can be evaluated when it fits the use case. It is separately scoped and is not a standard inclusion in the AI Lead Conversion System.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AISystemsSection;
