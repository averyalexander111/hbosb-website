import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const scope = ["One business location", "Exact scope confirmed before build"];

const AILeadResponseSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/6 w-[300px] h-[300px] bg-primary/3 rounded-full blur-3xl pointer-events-none" />
      
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary mb-6 border border-primary/20">
            The Primary Managed System
          </div>
          <h2 className="section-title text-foreground font-display">
            AI Lead Conversion System
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            For service businesses already generating inquiries but losing opportunities through missed calls, slow response, inconsistent follow-up, or poor pipeline visibility. HBOSB builds the focused system, connects the approved lead flow, and continues managing the approved environment after launch.
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
          className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto"
        >
          {[{ label: "Initial implementation", price: "$997", suffix: "one-time" }, { label: "Ongoing system management", price: "$1,497", suffix: "/month" }].map((item) => (
            <motion.div
              key={item.label}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
              }}
              className="p-8 rounded-lg bg-card border border-border text-center hover:border-primary/30 hover:shadow-[0_8px_30px_hsl(var(--primary)/0.08)] hover:-translate-y-0.5 transition-[transform,box-shadow,border-color] duration-300"
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{item.label}</p>
              <p className="mt-3 text-4xl font-extrabold text-foreground">{item.price}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.suffix}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-8">
          {scope.map((item) => <p key={item} className="flex items-center justify-center gap-2 text-sm text-muted-foreground"><CheckCircle2 className="h-4 w-4 text-primary" />{item}</p>)}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <Link
            to="/leads"
            className="inline-flex items-center gap-2 justify-center rounded-lg bg-primary px-10 py-4 text-base font-semibold text-primary-foreground border-glow-spin hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] hover:scale-[1.03] transition-[transform] duration-300"
          >
             See How the AI Lead Conversion System Works
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
        <p className="mt-6 text-center text-sm text-muted-foreground max-w-3xl mx-auto">
          Businesses with materially more complex multi-location or multi-listing environments may require a different implementation approach. The AI Revenue System Assessment helps determine the appropriate path.
        </p>
      </div>
    </section>
  );
};

export default AILeadResponseSection;
