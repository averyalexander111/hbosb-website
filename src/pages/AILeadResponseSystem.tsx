import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  AlertTriangle,
  Clock,
  FolderSearch,
  RefreshCw,
  Zap,
  MessageSquare,
  Mail,
  BarChart3,
  CalendarCheck,
  Monitor,
  ArrowDown,
  Send,
  Database,
  Repeat,
  CheckCircle2,
  TrendingUp,
  Layers,
} from "lucide-react";
import HeartbeatNavbar from "@/components/HeartbeatNavbar";
import HeartbeatFooter from "@/components/HeartbeatFooter";
import SubpageHero from "@/components/SubpageHero";
import SEOHead from "@/components/SEOHead";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const problems = [
  { icon: AlertTriangle, text: "Missed website inquiries" },
  { icon: Clock, text: "Slow response times" },
  { icon: FolderSearch, text: "Disorganized lead tracking" },
  { icon: RefreshCw, text: "Inconsistent follow-up" },
];

const steps = [
  { icon: Send, label: "Lead Inquiry" },
  { icon: Zap, label: "Instant Automated Response" },
  { icon: Database, label: "Lead Captured in CRM" },
  { icon: Repeat, label: "Follow-Up Sequence" },
  { icon: CalendarCheck, label: "Appointment or Sale" },
];

const features = [
  { icon: Zap, title: "Custom Lead Capture Page or Form", desc: "Branded intake forms designed to convert visitors into qualified leads." },
  { icon: MessageSquare, title: "Automated SMS Response", desc: "Instant text replies the moment a lead submits an inquiry." },
  { icon: Mail, title: "Automated Email Follow-Ups", desc: "Drip sequences that nurture leads without manual effort." },
  { icon: BarChart3, title: "CRM Pipeline Setup", desc: "Organized stages so you always know where every lead stands." },
  { icon: CalendarCheck, title: "Appointment Booking Integration", desc: "Let leads schedule directly into your calendar." },
  { icon: Monitor, title: "Automation Monitoring", desc: "Ongoing oversight to ensure every workflow runs reliably." },
];

const monthlyIncludes = [
  "System monitoring",
  "Automation maintenance",
  "Workflow reliability",
  "Updates and improvements",
];

/* Reusable navy section background with blur orbs */
const NavySectionBg = () => (
  <>
    <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
  </>
);

const AILeadResponseSystem = () => {
  return (
    <main className="min-h-screen">
      <SEOHead
        title="AI Lead Response System | Heartbeat of South Bay"
        description="Discover how our AI Lead Response System captures inquiries, responds instantly, and organizes leads into a structured pipeline so no opportunity is missed."
      />
      <HeartbeatNavbar />

      {/* Hero */}
      <SubpageHero
        title="AI Lead Response System"
        subtitle="Turn every inquiry into an organized opportunity."
      />

      {/* Hero description + CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Our AI-powered lead response systems ensure that every inquiry receives an immediate response and structured follow-up. Businesses no longer lose opportunities due to delayed responses or disorganized lead management.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.5, delay: 0.15 } } }}
            className="mt-10"
          >
            <a
              href="https://audit.heartbeatofsouthbay.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-10 py-4.5 text-base font-semibold text-primary-foreground shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] hover:scale-[1.03] transition-all duration-300"
            >
              Schedule a Consultation
            </a>
          </motion.div>
        </div>
      </section>

      {/* The Problem — navy */}
      <section className="py-20 relative overflow-hidden bg-navy">
        <NavySectionBg />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <h2 className="section-title text-navy-foreground">Why Businesses Lose Leads</h2>
            <p className="section-subtitle mx-auto text-navy-foreground/60">
              Many businesses receive inquiries but fail to respond quickly. When responses are delayed, potential customers often move on to competitors.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto"
          >
            {problems.map((p) => (
              <motion.div
                key={p.text}
                variants={fadeUp}
                className="flex items-center gap-4 p-5 rounded-2xl bg-navy-light/50 border border-navy-foreground/10 backdrop-blur-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-destructive/20 flex items-center justify-center flex-shrink-0">
                  <p.icon className="w-5 h-5 text-destructive" />
                </div>
                <span className="text-sm font-medium text-navy-foreground">{p.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Solution — Process Diagram */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <h2 className="section-title text-foreground">How the AI Lead Response System Works</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="flex flex-col items-center gap-3"
          >
            {steps.map((step, i) => (
              <React.Fragment key={step.label}>
                <motion.div
                  variants={fadeUp}
                  className="flex items-center gap-4 w-full max-w-md p-5 rounded-2xl bg-card border border-border hover:shadow-elegant-hover transition-shadow duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-semibold text-foreground">{step.label}</span>
                </motion.div>
                {i < steps.length - 1 && (
                  <motion.div variants={fadeUp}>
                    <ArrowDown className="w-5 h-5 text-primary/40" />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What the System Includes — navy */}
      <section className="py-20 relative overflow-hidden bg-navy">
        <NavySectionBg />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <h2 className="section-title text-navy-foreground">What the System Includes</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                className="group p-8 rounded-2xl bg-navy-light/50 border border-navy-foreground/10 backdrop-blur-sm hover:shadow-elegant-hover hover:-translate-y-1 transition-[box-shadow,transform] duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary/25 transition-colors">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-navy-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-navy-foreground/60 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Investment */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <h2 className="section-title text-foreground">Investment</h2>
            <p className="section-subtitle mx-auto max-w-3xl">
              The AI Lead Response System is installed with a one-time setup investment and a simple monthly hosting plan. This system is designed to capture inquiries, respond instantly, and organize leads into a structured pipeline so your business can convert more opportunities into customers.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto"
          >
            {/* Setup */}
            <motion.div
              variants={fadeUp}
              className="p-8 rounded-2xl bg-card border border-border text-center"
            >
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">Setup Investment</p>
              <p className="text-4xl font-extrabold text-foreground">$997</p>
              <p className="text-sm text-muted-foreground mt-2">One-time setup</p>
            </motion.div>

            {/* Monthly */}
            <motion.div
              variants={fadeUp}
              className="p-8 rounded-2xl bg-card border border-border text-center"
            >
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">Monthly System Hosting</p>
              <p className="text-4xl font-extrabold text-foreground">$97<span className="text-lg font-normal text-muted-foreground">/mo</span></p>
              <ul className="mt-5 space-y-2 text-left">
                {monthlyIncludes.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mt-10 max-w-2xl mx-auto text-center"
          >
            <p className="text-muted-foreground leading-relaxed">
              For many businesses, recovering just one additional customer per month can cover the cost of the system. By ensuring every inquiry receives an immediate response and structured follow-up, the AI Lead Response System helps businesses capture opportunities that would otherwise be lost.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Businesses Install — navy */}
      <section className="py-20 relative overflow-hidden bg-navy">
        <NavySectionBg />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-center"
          >
            <h2 className="section-title text-navy-foreground">Why Businesses Install This System</h2>
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4 text-left p-6 rounded-2xl bg-navy-light/50 border border-navy-foreground/10 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <p className="text-navy-foreground/70 leading-relaxed">
                  Recovering just <span className="font-semibold text-navy-foreground">one additional customer per month</span> often covers the entire system cost, making this a self-funding investment from day one.
                </p>
              </div>
              <div className="flex items-start gap-4 text-left p-6 rounded-2xl bg-navy-light/50 border border-navy-foreground/10 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Layers className="w-5 h-5 text-primary" />
                </div>
                <p className="text-navy-foreground/70 leading-relaxed">
                  The AI Lead Response System becomes the <span className="font-semibold text-navy-foreground">foundation of an automated business workflow</span>, connecting lead capture, follow-up, scheduling, and reporting into one seamless system.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Next Step CTA */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="section-title text-foreground">
              See If This System Is Right for Your Business
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Schedule a short consultation and we will evaluate whether the AI Lead Response System is a good fit for your business.
            </p>
            <div className="mt-12">
              <a
                href="https://audit.heartbeatofsouthbay.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-10 py-4.5 text-base font-semibold text-primary-foreground shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] hover:scale-[1.03] transition-all duration-300"
              >
                Book AI Opportunity Assessment
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <HeartbeatFooter />
    </main>
  );
};

export default AILeadResponseSystem;
