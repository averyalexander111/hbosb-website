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
  ArrowRight,
  Send,
  Database,
  Repeat,
  CheckCircle2,
} from "lucide-react";
import HeartbeatNavbar from "@/components/HeartbeatNavbar";
import HeartbeatFooter from "@/components/HeartbeatFooter";
import SubpageHero from "@/components/SubpageHero";
import SEOHead from "@/components/SEOHead";
import ConnectSection from "@/components/ConnectSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" as const } },
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
    <div className="min-h-screen">
      <main className="bg-background">
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
              href="https://cal.com/hbosb/lead-system-install"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 justify-center rounded-lg bg-primary px-10 py-4.5 text-base font-semibold text-primary-foreground shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] hover:scale-[1.03] transition-all duration-300"
            >
              Start AI Lead System Installation
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
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
                variants={scaleIn}
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
      <section
        className="py-20 bg-background relative overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-foreground">How the AI Lead Response System Works</h2>
          </motion.div>

          <div className="relative">
            {/* Animated vertical connector line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 md:-translate-x-1/2 w-px flex items-stretch">
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="w-full origin-top bg-gradient-to-b from-primary/40 via-primary/20 to-primary/5"
              />
            </div>

            <div className="space-y-12">
              {steps.map((step, i) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                  className={`relative flex items-center gap-6 md:gap-10 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />

                  {/* Glowing node on the timeline */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20">
                    <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.5)]" />
                    <div className="absolute inset-0 w-3 h-3 rounded-full bg-primary/40 animate-ping" />
                  </div>

                  {/* Card */}
                  <div className="flex-1 ml-14 md:ml-0">
                    <div className="relative group p-6 rounded-2xl bg-card border border-border hover:shadow-[0_8px_30px_hsl(var(--primary)/0.08)] hover:-translate-y-0.5 transition-[box-shadow,transform] duration-300">
                      {/* Large step number */}
                      <span className="absolute -top-3 -right-2 text-7xl font-extrabold text-primary/[0.05] select-none leading-none pointer-events-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <div className="flex items-center gap-4 relative z-10">
                        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                          <step.icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-semibold text-foreground text-lg">{step.label}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
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
                variants={scaleIn}
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
              A one-time setup investment and a simple monthly hosting plan — designed to pay for itself from day one.
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
              variants={scaleIn}
              className="p-8 rounded-2xl bg-card border border-border text-center hover:shadow-elegant-hover hover:-translate-y-1 transition-[box-shadow,transform] duration-300"
            >
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">Setup Investment</p>
              <p className="text-4xl font-extrabold text-foreground">$997</p>
              <p className="text-sm text-muted-foreground mt-2">One-time setup</p>
            </motion.div>

            {/* Monthly */}
            <motion.div
              variants={scaleIn}
              className="p-8 rounded-2xl bg-card border border-border text-center hover:shadow-elegant-hover hover:-translate-y-1 transition-[box-shadow,transform] duration-300"
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
              For many businesses, recovering just one additional customer per month covers the entire cost of the system.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who This System Is For — navy */}
      <section className="py-20 relative overflow-hidden bg-navy">
        <NavySectionBg />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-center mb-10"
          >
            <h2 className="section-title text-navy-foreground">Who This System Is For</h2>
            <p className="section-subtitle mx-auto text-navy-foreground/60">
              This system works best for businesses that regularly receive inquiries from potential customers.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="space-y-3 max-w-xl mx-auto mb-10"
          >
            {[
              "Service businesses that receive website inquiries",
              "Local businesses that rely on appointment bookings",
              "Companies that want faster follow-up with new leads",
              "Teams that want to organize inquiries into a structured pipeline",
            ].map((item) => (
              <motion.div key={item} variants={fadeUp} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-navy-foreground/80">{item}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-center text-navy-foreground/60 leading-relaxed"
          >
            If your business receives inquiries but responses are delayed or inconsistent, the AI Lead Response System can help ensure every opportunity is captured and followed up automatically.
          </motion.p>
        </div>
      </section>


      {/* Next Step CTA */}
      <section className="py-28 relative overflow-hidden bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="max-w-2xl mx-auto rounded-2xl bg-navy border border-navy-foreground/10 p-12 md:p-16 text-center"
          >
            <div className="w-12 h-1 rounded-full bg-primary mx-auto mb-8" />
            <h2 className="section-title text-navy-foreground">
              See If This System Is Right for Your Business
            </h2>
            <p className="mt-5 text-lg text-navy-foreground/60">
              Schedule a consultation to confirm whether the AI Lead Response System is the right fit and begin the installation process for your business.
            </p>
            <div className="mt-12">
              <a
                href="https://cal.com/hbosb/lead-system-install"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 justify-center rounded-lg bg-primary px-10 py-4.5 text-base font-semibold text-primary-foreground shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] hover:scale-[1.03] transition-all duration-300"
              >
                Start AI Lead System Installation
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <ConnectSection />
      <HeartbeatFooter />
      </main>
      <ScrollToTopButton />
    </div>
  );
};

export default AILeadResponseSystem;
