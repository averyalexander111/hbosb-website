import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  PhoneOff,
  Clock,
  Repeat,
  FolderSearch,
  EyeOff,
  Inbox,
  Bell,
  PhoneIncoming,
  MessageSquare,
  BarChart3,
  Users,
  CheckCircle2,
  Minus,
  ArrowRight,
  Compass,
  ClipboardList,
} from "lucide-react";
import HeartbeatNavbar from "@/components/HeartbeatNavbar";
import HeartbeatFooter from "@/components/HeartbeatFooter";
import SEOHead from "@/components/SEOHead";
import ConnectSection from "@/components/ConnectSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const IMPLEMENTATION_REVIEW_URL = "https://cal.com/hbosb/lead-system-install";

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
  { icon: PhoneOff, text: "A potential customer calls and no one is able to answer." },
  { icon: Inbox, text: "A form comes in while the team is busy with work already in progress." },
  { icon: Clock, text: "Follow-up depends on who remembers to do it." },
  { icon: Repeat, text: "A lead is contacted once and then disappears." },
  { icon: FolderSearch, text: "There is no clear picture of what happened after an inquiry arrived." },
];

const steps = [
  {
    icon: Inbox,
    title: "New inquiries enter the system",
    desc: "Approved lead sources connect to a structured CRM pipeline.",
  },
  {
    icon: Bell,
    title: "Response and routing begin",
    desc: "The system can acknowledge new inquiries, trigger internal notifications, and route opportunities according to the approved workflow.",
  },
  {
    icon: PhoneIncoming,
    title: "Missed calls can trigger recovery",
    desc: "Applies only when missed-call recovery is part of the approved implementation.",
  },
  {
    icon: MessageSquare,
    title: "Follow-up continues consistently",
    desc: "Approved SMS and email workflows can help appropriate leads keep moving.",
  },
  {
    icon: BarChart3,
    title: "Opportunities stay visible",
    desc: "CRM stages and lead-status tracking show what is new, active, waiting, moving, or needs human attention.",
  },
  {
    icon: Users,
    title: "People handle the parts that require people",
    desc: "Business-specific conversations, sales decisions, escalations, customer service, fulfillment, and judgment stay with your team.",
  },
];

const implementationScope = [
  "One business location",
  "One primary CRM pipeline",
  "Up to three approved inbound lead sources",
  "One booking or scheduling destination",
  "Up to two external integrations beyond HBOSB's standard CRM and automation stack",
  "Up to three core workflow families: new-inquiry response, missed-call recovery, and follow-up / booking movement",
  "One lead-capture form or simple landing-page intake when required",
  "Approved SMS and email follow-up workflows",
  "Internal notifications",
  "One escalation path",
  "CRM stages and basic lead-status visibility",
  "Workflow configuration and testing",
  "System launch",
  "One operational handoff and training session",
];

const managementScope = [
  "Monitoring included workflows and integrations",
  "Troubleshooting and repairing HBOSB-managed configuration",
  "Maintaining existing automations as supported platforms change",
  "Reviewing available lead-response, follow-up, booking, and outcome data",
  "Identifying practical opportunities for improvement",
  "One formal system and performance review each month",
  "Up to two minor modifications per month within the existing system",
];

const clientResponsibilities = [
  "Providing the access required to build and manage the system",
  "Providing accurate hours, services, and booking rules",
  "Approving messaging and escalation rules",
  "Maintaining a responsible internal point of contact",
  "Responding to opportunities that require human attention",
  "Making sales and customer decisions",
  "Fulfilling the service that is sold",
  "Maintaining the capacity to serve the work that comes in",
  "Informing HBOSB of material changes to process, personnel, or lead sources",
];

const compactScope = [
  "One location",
  "One primary CRM pipeline",
  "Up to three approved inbound lead sources",
  "One booking destination",
  "Up to two external integrations",
  "Up to three core workflow families",
];

const usageCosts = [
  "SMS and MMS",
  "Phone numbers",
  "Voice usage",
  "AI and model usage",
  "Transcription",
  "Premium software features",
  "External subscriptions",
  "Data and enrichment services",
  "Other usage-based services",
];

const separatelyScoped = [
  "Additional locations",
  "Material multi-listing configurations",
  "More than three inbound lead sources",
  "Additional integrations",
  "CRM migrations",
  "Extensive custom CRM development",
  "Custom API development",
  "Advanced dashboards or business intelligence",
  "Large outbound or reactivation campaigns",
  "Major website development",
  "New workflow families",
  "Live AI voice systems",
  "After-hours human dispatch",
  "Material redesign of a client business process",
];

const goodFit = [
  "The business receives consistent inbound calls or form inquiries",
  "Response speed meaningfully affects whether the work is won",
  "Calls are sometimes missed or follow-up is inconsistent",
  "Leads arrive through more than one entry point",
  "A customer is worth enough that better handling matters",
  "The owner wants clearer visibility in a CRM",
  "The team has the capacity to serve additional work",
  "The team is willing to follow an agreed process",
];

const poorFit = [
  "There is little inbound demand today",
  "Recovering additional leads would have limited economic value",
  "There is no capacity to handle more work",
  "The expectation is that automation will replace the sales or service team",
  "The team is unwilling to respond to opportunities that require human attention",
  "The business needs staffed emergency dispatch or continuous human answering as a standard part of the service",
];

const faqs = [
  {
    q: "What does the system actually do?",
    a: "It gives your business a managed structure for handling inbound inquiries. Approved lead sources feed a CRM pipeline, the system can acknowledge new inquiries and notify the right people, approved SMS and email workflows support consistent follow-up, missed-call recovery can run where it is part of the implementation, and lead status stays visible so opportunities are not lost between steps.",
  },
  {
    q: "Does this replace my staff?",
    a: "No. The system supports how inquiries are handled. Sales conversations, customer decisions, escalations, customer service, and fulfillment remain with your team.",
  },
  {
    q: "Does HBOSB guarantee every lead is contacted instantly?",
    a: "No. We do not guarantee a specific response time or a specific conversion outcome. The system is designed to make response and follow-up more consistent than a manual process, within the workflows that are approved and the platforms that support them.",
  },
  {
    q: "Does the standard system include 24/7 AI voice answering?",
    a: "No. Live AI voice is not part of the standard AI Lead Conversion System at this time. It may only be reviewed and scoped separately once HBOSB has confirmed the architecture, cost, compliance requirements, and delivery readiness for the specific use case.",
  },
  {
    q: "Does HBOSB provide human emergency dispatch?",
    a: "No. The system does not provide staffed emergency dispatch or continuous human answering.",
  },
  {
    q: "What does the $1,497 monthly management include?",
    a: "Monitoring of the included workflows and integrations, troubleshooting and repair of HBOSB-managed configuration, maintaining existing automations as supported platforms change, reviewing available response, follow-up, booking and outcome data, identifying practical improvements, one formal system and performance review each month, and up to two minor modifications per month within the existing system.",
  },
  {
    q: "What counts as a minor modification?",
    a: "A refinement inside the system that already exists: message wording, timing, routing, fields, or a small workflow adjustment. Unused modifications do not roll over. A new workflow, new location, new integration, new business process, or a materially expanded or redesigned system is scoped separately.",
  },
  {
    q: "Are software and usage charges included?",
    a: "Not automatically. Third-party software and usage-based charges are separate unless a written proposal includes a stated allowance. Examples include SMS and MMS, phone numbers, voice usage, AI and model usage, transcription, premium software features, external subscriptions, and data or enrichment services.",
  },
  {
    q: "We have several locations or Google Business Profile listings. Does that change anything?",
    a: "Yes. Multiple locations or materially multi-listing setups require additional review and may call for a separate Multi-Listing Lead Conversion System review rather than the standard implementation.",
  },
  {
    q: "How long does implementation take?",
    a: "Timing is confirmed after we review scope, required access, lead sources, integrations, and dependencies. We do not quote a fixed timeline before that review.",
  },
  {
    q: "Can we begin with a pilot?",
    a: "Some engagements may be structured as a controlled paid deployment. A pilot documents scope, starting conditions, responsibilities, success measures, and a review point. It is not an automatic price change or an outcome promise.",
  },
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
          description="A managed lead-response system for service businesses: structured intake, approved follow-up workflows, missed-call recovery, and CRM visibility."
        />
        <HeartbeatNavbar />

        {/* Hero — navy */}
        <section className="relative overflow-hidden bg-navy pt-32 pb-20 md:pt-40 md:pb-24">
          <NavySectionBg />
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--navy-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--navy-foreground)) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                  AI Lead Conversion System
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-navy-foreground"
              >
                Your Leads Shouldn't Depend on Someone Remembering to Follow Up
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 text-lg text-navy-foreground/70 leading-relaxed max-w-3xl mx-auto"
              >
                When inquiries come in, slow response, missed calls, inconsistent follow-up, and poor pipeline visibility can turn real opportunities into lost business. The AI Lead Conversion System gives service businesses a managed system for responding to new inquiries, recovering missed calls, following up consistently, tracking opportunities, and guiding prospects toward the appropriate next step.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="mt-4 text-base text-navy-foreground/50 leading-relaxed max-w-3xl mx-auto"
              >
                No new ad campaign required. Start by improving how the opportunities you already generate are handled.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  to="/assessment"
                  className="group inline-flex items-center justify-center gap-2 text-center rounded-lg bg-primary px-8 py-4 text-sm sm:text-base font-semibold leading-snug text-primary-foreground border-glow-spin hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] hover:scale-[1.03] transition-[transform] duration-300"
                >
                  Start Your AI Revenue System Assessment
                  <ArrowRight className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <a
                  href={IMPLEMENTATION_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-center rounded-lg border border-navy-foreground/20 px-8 py-4 text-sm sm:text-base font-semibold leading-snug text-navy-foreground hover:bg-navy-foreground/5 transition-colors duration-200"
                >
                  Request an Implementation Review
                </a>
              </motion.div>

              <motion.p variants={fadeUp} className="mt-6 text-sm text-navy-foreground/40">
                We review your current lead flow and confirm scope before implementation begins.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Problem */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="section-title text-foreground">
                Leads Can Slip Through the Cracks Even When Demand Is Already There
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
            >
              {problems.map((item) => (
                <motion.div
                  key={item.text}
                  variants={scaleIn}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:shadow-elegant-hover transition-[box-shadow] duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="text-center text-muted-foreground max-w-3xl mx-auto mt-10 leading-relaxed"
            >
              Sometimes the missing piece is a reliable system for response, follow-up, tracking, and handoff. That is what the AI Lead Conversion System is designed to improve.
            </motion.p>
          </div>
        </section>

        {/* How it works — navy timeline */}
        <section className="py-20 relative overflow-hidden bg-navy">
          <NavySectionBg />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="text-center mb-16"
            >
              <h2 className="section-title text-navy-foreground">
                A Clearer Path From Inquiry to Next Step
              </h2>
            </motion.div>

            <div className="relative">
              {/* Vertical connector line */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 md:-translate-x-1/2 w-px flex items-stretch">
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="w-full origin-top bg-gradient-to-b from-primary/40 via-primary/20 to-primary/5"
                />
              </div>

              <div className="space-y-10">
                {steps.map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className={`relative flex items-center gap-6 md:gap-10 ${
                      i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className="hidden md:block flex-1" />

                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20">
                      <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.5)]" />
                    </div>

                    <div className="flex-1 ml-14 md:ml-0 min-w-0">
                      <div className="relative group p-6 rounded-2xl bg-navy-light/50 border border-navy-foreground/10 backdrop-blur-sm hover:shadow-elegant-hover hover:-translate-y-0.5 transition-[box-shadow,transform] duration-300">
                        <span className="absolute -top-3 -right-2 text-7xl font-extrabold text-primary/[0.06] select-none leading-none pointer-events-none">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="relative z-10">
                          <div className="flex items-center gap-4">
                            <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/25 transition-colors duration-300">
                              <step.icon className="w-5 h-5 text-primary" />
                            </div>
                            <h3 className="font-semibold text-navy-foreground text-base sm:text-lg">
                              {step.title}
                            </h3>
                          </div>
                          <p className="mt-3 text-sm text-navy-foreground/60 leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="text-center text-navy-foreground/70 mt-14 leading-relaxed"
            >
              HBOSB manages the system around that process. We do not replace the business itself.
            </motion.p>
          </div>
        </section>

        {/* Positioning */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="text-center"
            >
              <h2 className="section-title text-foreground">
                This Is Not an Ad Campaign. It Is Managed Lead-Response Infrastructure.
              </h2>
              <div className="mt-6 space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  The AI Lead Conversion System is designed for businesses that are already generating inquiries and need a more reliable way to respond to them, follow up with them, and keep track of them.
                </p>
                <p>
                  HBOSB builds the initial system, then continues managing the approved workflows, integrations, and ongoing optimization.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Initial System Implementation + Ongoing System Management — navy */}
        <section className="py-20 relative overflow-hidden bg-navy">
          <NavySectionBg />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="grid lg:grid-cols-2 gap-6 lg:gap-8"
            >
              {/* Implementation */}
              <motion.div
                variants={scaleIn}
                className="p-8 sm:p-10 rounded-2xl bg-navy-light/50 border border-navy-foreground/10 backdrop-blur-sm"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-navy-foreground">
                  Initial System Implementation
                </h2>
                <p className="mt-3 text-3xl sm:text-4xl font-extrabold text-primary">
                  $997 <span className="text-base font-medium text-navy-foreground/60">one-time</span>
                </p>
                <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-navy-foreground/50">
                  Standard scope
                </p>
                <ul className="mt-4 space-y-2.5">
                  {implementationScope.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm text-navy-foreground/70 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-navy-foreground/50 leading-relaxed">
                  The exact implementation is confirmed before the build begins. Additional locations, new workflow families, substantial custom development, and additional integrations are scoped separately.
                </p>
              </motion.div>

              {/* Management */}
              <motion.div
                variants={scaleIn}
                className="p-8 sm:p-10 rounded-2xl bg-navy-light/50 border border-navy-foreground/10 backdrop-blur-sm"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-navy-foreground">
                  Ongoing System Management
                </h2>
                <p className="mt-3 text-3xl sm:text-4xl font-extrabold text-primary">
                  $1,497
                  <span className="text-base font-medium text-navy-foreground/60">/month</span>
                </p>
                <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-navy-foreground/50">
                  Includes
                </p>
                <ul className="mt-4 space-y-2.5">
                  {managementScope.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm text-navy-foreground/70 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 space-y-3 text-sm text-navy-foreground/50 leading-relaxed">
                  <p>
                    Minor modifications are refinements inside the existing system: message wording, timing, routing, fields, or small workflow adjustments. Unused modifications do not roll over.
                  </p>
                  <p>
                    A new workflow, new location, substantial redesign, new integration, new business process, or a materially expanded system is scoped separately.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Human responsibilities */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="text-center mb-10"
            >
              <h2 className="section-title text-foreground">
                The System Supports Your Team. It Does Not Replace Your Team.
              </h2>
              <p className="section-subtitle mx-auto mt-4">
                HBOSB manages the approved system configuration and workflows. The business remains responsible for the parts only the business can do.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto"
            >
              {clientResponsibilities.map((item) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border"
                >
                  <ClipboardList className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                  <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="text-center text-muted-foreground max-w-2xl mx-auto mt-10 leading-relaxed"
            >
              The system can support how opportunities are handled. It cannot replace strong sales execution, customer service, fulfillment, or business operations.
            </motion.p>
          </div>
        </section>

        {/* Investment — navy */}
        <section className="py-20 relative overflow-hidden bg-navy">
          <NavySectionBg />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="text-center mb-12"
            >
              <h2 className="section-title text-navy-foreground">Investment</h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto"
            >
              <motion.div
                variants={scaleIn}
                className="p-8 rounded-2xl bg-navy-light/50 border border-navy-foreground/10 text-center backdrop-blur-sm"
              >
                <p className="text-sm font-medium text-navy-foreground/50 uppercase tracking-wider mb-3">
                  Initial System Implementation
                </p>
                <p className="text-4xl font-extrabold text-navy-foreground">$997</p>
                <p className="text-sm text-navy-foreground/50 mt-2">One-time</p>
              </motion.div>
              <motion.div
                variants={scaleIn}
                className="p-8 rounded-2xl bg-navy-light/50 border border-navy-foreground/10 text-center backdrop-blur-sm"
              >
                <p className="text-sm font-medium text-navy-foreground/50 uppercase tracking-wider mb-3">
                  Ongoing System Management
                </p>
                <p className="text-4xl font-extrabold text-navy-foreground">
                  $1,497<span className="text-lg font-normal text-navy-foreground/50">/mo</span>
                </p>
                <p className="text-sm text-navy-foreground/50 mt-2">Monthly</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="mt-12 grid md:grid-cols-3 gap-6"
            >
              <div className="p-6 rounded-2xl bg-navy-light/40 border border-navy-foreground/10">
                <h3 className="font-semibold text-navy-foreground mb-3">Standard scope</h3>
                <ul className="space-y-2">
                  {compactScope.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-navy-foreground/60">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-navy-light/40 border border-navy-foreground/10">
                <h3 className="font-semibold text-navy-foreground mb-3">
                  Third-party software and usage
                </h3>
                <p className="text-sm text-navy-foreground/60 mb-3">
                  Separate unless a written proposal includes a stated allowance.
                </p>
                <ul className="space-y-1.5">
                  {usageCosts.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-navy-foreground/60">
                      <Minus className="w-3 h-3 text-primary flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-navy-light/40 border border-navy-foreground/10">
                <h3 className="font-semibold text-navy-foreground mb-3">Scoped separately</h3>
                <ul className="space-y-1.5">
                  {separatelyScoped.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-navy-foreground/60">
                      <Minus className="w-3 h-3 text-primary flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="text-center text-sm text-navy-foreground/50 max-w-3xl mx-auto mt-10 leading-relaxed"
            >
              Businesses with materially multi-location or multi-listing operations may require a separate Multi-Listing Lead Conversion System review.
            </motion.p>
          </div>
        </section>

        {/* Qualification */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="section-title text-foreground">
                Is the AI Lead Conversion System a Good Fit?
              </h2>
              <p className="section-subtitle mx-auto mt-4">
                It is designed for businesses that already have real inbound opportunities and need those opportunities handled more reliably.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={scaleIn}
                className="p-8 rounded-2xl bg-card border border-border"
              >
                <h3 className="text-lg font-semibold text-foreground mb-5">Often a good fit</h3>
                <ul className="space-y-3">
                  {goodFit.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={scaleIn}
                className="p-8 rounded-2xl bg-card border border-border"
              >
                <h3 className="text-lg font-semibold text-foreground mb-5">Often not a good fit</h3>
                <ul className="space-y-3">
                  {poorFit.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <EyeOff className="w-4 h-4 text-muted-foreground/60 flex-shrink-0 mt-1" />
                      <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pilot — navy */}
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
              <h2 className="section-title text-navy-foreground">
                Some Engagements May Begin as a Paid Pilot
              </h2>
              <div className="mt-6 space-y-4 text-lg text-navy-foreground/70 leading-relaxed">
                <p>
                  In some cases, an engagement may begin as a controlled paid deployment. When that happens, we document the scope, the starting conditions, the responsibilities on each side, the success measures, and a review point.
                </p>
                <p>
                  The standard public investment may still apply. A pilot is not an automatic discount, a revenue guarantee, or a performance promise.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final conversion */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
            >
              <div className="w-12 h-1 rounded-full bg-primary mx-auto mb-8" />
              <h2 className="section-title text-foreground">
                Start With the Lead Flow You Already Have
              </h2>
              <div className="mt-6 space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  The first step is an AI Revenue System Assessment. From there, an implementation review confirms your lead sources, workflow requirements, CRM and integrations, booking process, team responsibilities, what is standard versus separately scoped, third-party usage, and implementation requirements.
                </p>
                <p className="font-semibold text-foreground">
                  Nothing is built until the scope is understood.
                </p>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/assessment"
                  className="group inline-flex items-center justify-center gap-2 text-center rounded-lg bg-primary px-8 py-4 text-sm sm:text-base font-semibold leading-snug text-primary-foreground border-glow-spin hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] hover:scale-[1.03] transition-[transform] duration-300"
                >
                  Start Your AI Revenue System Assessment
                  <ArrowRight className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <a
                  href={IMPLEMENTATION_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-center rounded-lg border border-border px-8 py-4 text-sm sm:text-base font-semibold leading-snug text-foreground hover:bg-card transition-colors duration-200"
                >
                  <Compass className="w-5 h-5 flex-shrink-0 text-primary" />
                  Request an Implementation Review
                </a>
              </div>

              <p className="mt-6 text-sm text-muted-foreground/70">
                Assessment first. Scope confirmed before implementation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ — navy */}
        <section className="py-24 bg-navy">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="text-center mb-14"
            >
              <h2 className="section-title text-navy-foreground">
                AI Lead Conversion System FAQ
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-3">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={faq.q}
                    value={`item-${index}`}
                    className="border border-navy-foreground/10 rounded-lg px-5 data-[state=open]:border-l-[3px] data-[state=open]:border-l-primary data-[state=open]:bg-primary/[0.04] transition-all duration-200"
                  >
                    <AccordionTrigger className="text-left font-semibold text-navy-foreground hover:text-primary transition-colors py-5">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-navy-foreground/60 leading-relaxed pb-5">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
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
