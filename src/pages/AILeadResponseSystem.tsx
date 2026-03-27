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
  { icon: AlertTriangle, text: "Leads come in but no one responds immediately" },
  { icon: Clock, text: "Follow-up is inconsistent or forgotten entirely" },
  { icon: FolderSearch, text: "Opportunities are lost to faster competitors" },
  { icon: RefreshCw, text: "No system in place to track or convert inquiries" },
];

const steps = [
  { icon: Send, label: "A lead submits a form" },
  { icon: Zap, label: "They receive an instant response" },
  { icon: Repeat, label: "Automated follow-up begins" },
  { icon: Database, label: "The lead is tracked inside your CRM" },
  { icon: CalendarCheck, label: "They are guided toward booking" },
];

const features = [
  { icon: Zap, title: "Lead Capture Form or Landing Page", desc: "Designed to convert visitors into qualified leads for your business." },
  { icon: MessageSquare, title: "Instant SMS Response System", desc: "Every new inquiry gets an immediate text reply — automatically." },
  { icon: Mail, title: "Automated Follow-Up Sequences", desc: "SMS and email follow-ups that nurture leads without manual effort." },
  { icon: BarChart3, title: "CRM Pipeline Setup", desc: "Organized stages so you always know where every lead stands." },
  { icon: CalendarCheck, title: "Appointment Booking Integration", desc: "Leads schedule directly into your calendar — no back and forth." },
  { icon: Monitor, title: "Automation Monitoring", desc: "Ongoing oversight to ensure every workflow runs reliably." },
];

const monthlyIncludes = [
  "System monitoring",
  "Automation maintenance",
  "Workflow reliability",
  "Updates and improvements",
];

const conversionBullets = [
  "Instantly responds to every new inquiry",
  "Follows up automatically (SMS + email)",
  "Organizes leads into a structured pipeline",
  "Moves prospects toward booking without manual effort",
];

const advancedBullets = [
  "Follow up after conferences or events",
  "Reconnect with old contacts",
  "Qualify prospects using AI voice agents",
  "Proactively reach out to leads",
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
        title="AI Lead Conversion System | Heartbeat of South Bay"
        description="Discover how our AI Lead Conversion System captures inquiries, responds instantly, and converts leads into booked appointments so no opportunity is missed."
      />
      <HeartbeatNavbar />

      {/* Hero */}
      <SubpageHero
        title="Turn More of Your Leads Into Booked Jobs Automatically"
        subtitle="We install AI-powered systems that respond instantly, follow up automatically, and convert more of your existing leads into paying customers."
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
            Most businesses don't lose leads because of bad marketing. They lose them because they don't respond fast enough.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.5, delay: 0.2 } } }}
            className="mt-10"
          >
            <a
              href="https://cal.com/hbosb/lead-system-install"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 justify-center rounded-lg bg-primary px-10 py-4.5 text-base font-semibold text-primary-foreground border-glow-spin hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] hover:scale-[1.03] transition-[transform] duration-300"
            >
              Book an AI Revenue System Assessment
              <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_hsl(var(--primary-foreground)/0.6)]" />
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
            <h2 className="section-title text-navy-foreground">Why You're Losing Leads</h2>
            <p className="section-subtitle mx-auto text-navy-foreground/60">
              You're not losing leads because you need more traffic. You're losing them because you don't have a system.
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
            <h2 className="section-title text-foreground">How the AI Lead Conversion System Works</h2>
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

      {/* Conversion, Not Just Response */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-center mb-10"
          >
            <h2 className="section-title text-foreground">
              AI Lead{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                Conversion
              </span>
              {" "}System
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              This system ensures every new inquiry is contacted instantly, followed up automatically, and guided toward a booked opportunity.
            </p>
            <p className="mt-3 text-lg font-semibold text-foreground">
              This is not marketing. This is infrastructure.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="space-y-3 max-w-xl mx-auto mb-10"
          >
            {conversionBullets.map((item) => (
              <motion.div key={item} variants={fadeUp} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-center text-muted-foreground leading-relaxed"
          >
            Most businesses focus on getting more leads. The real leverage comes from converting the ones you already have.
          </motion.p>
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
            <h2 className="section-title text-navy-foreground">What You Get</h2>
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

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-center text-navy-foreground/60 mt-10 text-sm"
          >
            Everything is installed and configured for your business.
          </motion.p>
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
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">System Installation</p>
              <p className="text-4xl font-extrabold text-foreground">$997</p>
              <p className="text-sm text-muted-foreground mt-2">One-time setup</p>
            </motion.div>

            {/* Monthly */}
            <motion.div
              variants={scaleIn}
              className="p-8 rounded-2xl bg-card border border-border text-center hover:shadow-elegant-hover hover:-translate-y-1 transition-[box-shadow,transform] duration-300"
            >
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">Monthly System Hosting & Maintenance</p>
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
              Includes hosting, monitoring, and ongoing system maintenance. Messaging costs (Twilio) are usage-based and billed separately.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
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
              Built for businesses that already receive inquiries but lack a system to convert them.
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
              "Service businesses that receive inquiries daily",
              "Local businesses that rely on booked appointments",
              "Companies losing deals to slower follow-up",
              "Teams ready to systematize their lead pipeline",
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
            This is the first system inside your AI Operating System™. Once installed, this system becomes the foundation for more advanced automation and revenue systems.
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
              Book an AI Revenue System Assessment
            </h2>
            <p className="mt-5 text-lg text-navy-foreground/60">
              We'll walk through your current lead flow and show you exactly where opportunities are being lost — and how to fix it.
            </p>
            <div className="mt-12">
              <a
                href="https://cal.com/hbosb/lead-system-install"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 justify-center rounded-lg bg-primary px-10 py-4.5 text-base font-semibold text-primary-foreground border-glow-spin hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] hover:scale-[1.03] transition-[transform] duration-300"
              >
                Book an AI Revenue System Assessment
                <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_hsl(var(--primary-foreground)/0.6)]" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Need Something More Advanced? — navy */}
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
            <h2 className="section-title text-navy-foreground">Need Something More Advanced?</h2>
            <p className="mt-5 text-lg text-navy-foreground/60 leading-relaxed">
              For businesses that want to go beyond inbound lead response, we also build advanced AI systems designed to generate new opportunities and increase revenue.
            </p>
            <p className="mt-4 text-lg text-navy-foreground/60 leading-relaxed">
              These systems can:
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="space-y-3 max-w-xl mx-auto mb-10"
          >
            {advancedBullets.map((item) => (
              <motion.div key={item} variants={fadeUp} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-navy-foreground/80">{item}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-center"
          >
            <p className="text-navy-foreground/60 leading-relaxed mb-10">
              Each system is custom-built based on your business, workflow, and growth goals.
            </p>
            <a
              href="https://audit.heartbeatofsouthbay.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 justify-center rounded-lg bg-primary px-10 py-4.5 text-base font-semibold text-primary-foreground border-glow-spin hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] hover:scale-[1.03] transition-[transform] duration-300"
            >
              Apply for AI Revenue System Assessment
              <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_hsl(var(--primary-foreground)/0.6)]" />
            </a>
            <p className="mt-4 text-sm text-navy-foreground/40">
              Complete a short assessment to see if your business is a fit for a custom AI outbound or revenue system.
            </p>
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
