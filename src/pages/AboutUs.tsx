import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Clock, MessageSquareOff, Wrench, MessageSquare, BarChart3, Settings, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import HeartbeatNavbar from "@/components/HeartbeatNavbar";
import HeartbeatFooter from "@/components/HeartbeatFooter";
import SEOHead from "@/components/SEOHead";
import SubpageHero from "@/components/SubpageHero";
import averyAlexander from "@/assets/avery-alexander.jpg";


const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

const scaleIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.4, delay },
});

const painPoints = [
  { icon: AlertTriangle, text: "Leads slip through the cracks" },
  { icon: Clock, text: "Follow-ups happen inconsistently" },
  { icon: MessageSquareOff, text: "Customer communication becomes fragmented" },
  { icon: Wrench, text: "Operations depend on manual effort" },
];

const approachSteps = [
  { icon: MessageSquare, title: "Understand the Business", description: "Clarify the inquiry sources, current workflows, business priorities, and people responsible for the work." },
  { icon: Settings, title: "Improve the Process", description: "Identify the gaps and define a workable process before choosing tools or adding automation." },
  { icon: Wrench, title: "Implement the Agreed System", description: "Connect the appropriate workflows and tools within the agreed scope, then test the intended behavior." },
  { icon: BarChart3, title: "Manage and Review", description: "For managed engagements, monitor and maintain the agreed system, review its operation, and assess changes within scope." },
];

const AboutUs = () => {
  return (
    <>
      <SEOHead
        title="About Us | AI Consulting — Heartbeat of South Bay"
        description="Heartbeat of South Bay helps service businesses improve inquiry response, follow-up, and customer communication through practical systems and ongoing management."
        ogTitle="About Us - Heartbeat of South Bay | AI Consulting & Automation"
        ogDescription="Heartbeat of South Bay helps service businesses improve inquiry response, follow-up, and customer communication through practical systems and ongoing management."
        canonicalUrl={`${window.location.origin}/about`}
      />
      <HeartbeatNavbar />
      <main>
        {/* 1. Hero */}
        <SubpageHero
          title="About Heartbeat of South&nbsp;Bay"
          subtitle="Practical Systems for Better Response, Follow-Up, and Customer Communication"
        />

        {/* 2. Intro */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div {...fadeUp} className="max-w-3xl mx-auto space-y-6 text-center">
              <p className="text-lg leading-relaxed text-muted-foreground">
                <span className="whitespace-nowrap">Heartbeat of South&nbsp;Bay</span> helps service businesses improve inquiry response, follow-up, and customer communication through practical systems and ongoing management.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                We connect workflows, technology, and clear human responsibilities around the business need. Our primary managed offer, the AI Lead Conversion System, focuses on how incoming inquiries are handled and followed up.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 3. The Problem */}
        <section className="py-20 bg-navy relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="section-title text-navy-foreground">Why Heartbeat of South Bay Exists</h2>
              <p className="mt-4 text-navy-foreground/60 text-lg">
                When inquiries, follow-up, and customer information are spread across disconnected tools, important next steps can become harder to manage.
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
              {painPoints.map((item, i) => (
                <motion.div
                  key={item.text}
                  {...scaleIn(i * 0.1)}
                  className="flex items-start gap-4 rounded-2xl border border-navy-foreground/10 bg-navy-light/50 backdrop-blur-sm p-6"
                >
                  <div className="w-10 h-10 rounded-lg bg-destructive/15 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-destructive" />
                  </div>
                  <p className="text-navy-foreground/80">{item.text}</p>
                </motion.div>
              ))}
            </div>
            <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto">
              <p className="text-lg text-navy-foreground/80 leading-relaxed">
                HBOSB brings those workflows into a clearer process, with responsibilities defined for the business and the system.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 4. How We Approach the Work */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="section-title">How We Approach the Work</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
              {approachSteps.map((item, i) => (
                <motion.div
                  key={item.title}
                  {...scaleIn(i * 0.1)}
                  className="bg-card rounded-2xl p-6 text-center shadow-elegant hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-medium text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
            <motion.p {...fadeUp} className="text-center text-muted-foreground text-lg max-w-3xl mx-auto">
              Automation supports the workflow. Your team remains responsible for human follow-up, sales conversations, and delivering your services.
            </motion.p>
          </div>
        </section>

        {/* 5. Meet the Founder */}
        <section className="py-20 bg-navy relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2 {...fadeUp} className="section-title text-navy-foreground text-center mb-12">
              Meet the Founder
            </motion.h2>
            <motion.div
              {...scaleIn(0)}
              className="max-w-4xl mx-auto rounded-2xl border border-navy-foreground/10 bg-navy-light/50 backdrop-blur-sm p-8 md:p-10"
            >
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/3 text-center">
                  <img
                    src={averyAlexander}
                    alt="Avery Alexander Palmer - Founder"
                    className="w-56 h-56 object-cover rounded-2xl shadow-lg mx-auto"
                  />
                  <h3 className="text-xl font-bold text-navy-foreground mt-4">Avery Alexander Palmer</h3>
                  <p className="text-primary font-semibold text-sm">Founder &amp; AI Consultant</p>
                </div>
                <div className="lg:w-2/3 space-y-4">
                  <p className="text-navy-foreground/80 leading-relaxed">
                    <span className="whitespace-nowrap">Avery Alexander Palmer</span> is the founder of <span className="whitespace-nowrap">Heartbeat of South&nbsp;Bay</span>, a creative entrepreneur and AI systems consultant. His background brings together creative strategy, digital platforms, project management, and workflow automation.
                  </p>
                  <p className="text-navy-foreground/80 leading-relaxed">
                    Through HBOSB, he applies that experience to practical business needs: responding to inquiries, organizing follow-up, improving customer communication, and coordinating the work behind delivery. His work spans CRM workflows, digital platforms, and project coordination, connecting business priorities with practical implementation.
                  </p>
                  <p className="text-navy-foreground/60 leading-relaxed italic">
                    His approach starts with understanding the business, improving the process, and then choosing technology that supports the work. The goal is a usable system with clear responsibilities for the people who depend on it.
                  </p>
                  <p className="pt-1">
                    <a
                      href="https://theaveryalexander.com/capability-statement"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
                    >
                      Explore Avery’s background and selected work
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              {...scaleIn(0)}
              className="max-w-3xl mx-auto bg-navy rounded-3xl p-10 md:p-14 relative overflow-hidden border border-navy-foreground/10"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/8 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 text-center">
                <p className="text-primary font-medium mb-3">
                  When businesses operate smarter, they grow stronger.
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-navy-foreground mb-4">
                  Explore Your Lead Response and Follow-Up
                </h2>
                <p className="text-lg text-navy-foreground/60 mb-8 max-w-xl mx-auto">
                  The complimentary AI Revenue System Assessment helps identify likely gaps in lead response, follow-up, tracking, and handoff, with initial findings and an appropriate next step.
                </p>

                <ul className="mb-10 space-y-3 text-left max-w-md mx-auto">
                  {["Likely response and follow-up gaps", "Tracking and handoff issues", "An appropriate next step"].map((b) => (
                    <li key={b} className="flex items-center gap-3 text-navy-foreground/80">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{b}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/assessment"
                  className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground rounded-lg text-base font-semibold border-glow-spin hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] hover:scale-[1.03] transition-[transform] duration-300"
                >
                  Start Your AI Revenue System Assessment
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <p className="mt-4 text-sm text-navy-foreground/40">
                  Complimentary initial findings. Optional assessment review. No purchase required.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <HeartbeatFooter />
    </>
  );
};

export default AboutUs;
