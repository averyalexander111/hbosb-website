import React from "react";
import { motion } from "framer-motion";
import { Magnet, Zap, Send, Workflow, MessageCircle, Star } from "lucide-react";

const services = [
  { icon: Magnet, title: "Lead Capture", desc: "Capture calls, forms, and inquiries before they disappear." },
  { icon: Zap, title: "Instant Response", desc: "Respond quickly when prospects are most ready to act." },
  { icon: Send, title: "Follow-Up Engine", desc: "Keep leads moving with consistent follow-up after the first touch." },
  { icon: Workflow, title: "CRM and Pipeline Tracking", desc: "Organize every opportunity from first contact to next step." },
  { icon: MessageCircle, title: "Customer Communication", desc: "Help customers stay informed before, during, and after the job." },
  { icon: Star, title: "Reviews and Retention", desc: "Turn completed jobs into stronger trust and future opportunities." },
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
          <h2 className="section-title text-foreground">Built Around the Way Your Business Already Gets Leads</h2>
          <p className="section-subtitle mx-auto">
            Whether leads come from your website, phone calls, Google Business Profile, paid ads, referrals, or repeat customers, the system helps you respond faster, stay organized, and follow up with the right message at the right time.
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
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
              }}
              className="group p-8 rounded-2xl bg-card border border-border hover:shadow-elegant-hover hover:-translate-y-1 transition-[box-shadow,transform] duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AISystemsSection;
