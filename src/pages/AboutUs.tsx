import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Clock, MessageSquareOff, Wrench, Zap, MessageSquare, BarChart3, Settings, Award, Lightbulb, Bot } from "lucide-react";
import HeartbeatNavbar from "@/components/HeartbeatNavbar";
import HeartbeatFooter from "@/components/HeartbeatFooter";
import SEOHead from "@/components/SEOHead";
import SubpageHero from "@/components/SubpageHero";
import AIOperatingSystem from "@/components/AIOperatingSystem";
import FinalCTASection from "@/components/FinalCTASection";
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

const newEraItems = [
  { icon: Zap, text: "Respond faster to opportunities" },
  { icon: Settings, text: "Automate repetitive workflows" },
  { icon: MessageSquare, text: "Improve customer communication" },
  { icon: BarChart3, text: "Operate with greater efficiency" },
];

const philosophyStatements = [
  "Systems that capture opportunities automatically.",
  "Systems that communicate with customers consistently.",
  "Systems that streamline operations and provide clarity into performance.",
];



const credentials = [
  { icon: Award, title: "Certified Project Manager" },
  { icon: Lightbulb, title: "Creative Entrepreneurship & Systems Design" },
  { icon: Bot, title: "AI Consulting & Automation Strategy" },
  { icon: Settings, title: "Workflow Automation & Operational Optimization" },
];

const AboutUs = () => {
  return (
    <>
      <SEOHead
        title="About Us - Heartbeat of South Bay | AI Consulting & Automation"
        description="Heartbeat of South Bay is an AI consulting and automation firm that helps businesses modernize operations with intelligent systems."
        ogTitle="About Us - Heartbeat of South Bay | AI Consulting & Automation"
        ogDescription="We design and implement AI-powered systems that capture leads, automate communication, and streamline workflows."
        canonicalUrl={`${window.location.origin}/about-us`}
      />
      <HeartbeatNavbar />
      <main>
        {/* 1. Hero */}
        <SubpageHero
          title="About Heartbeat of South&nbsp;Bay"
          subtitle="Modern Businesses Deserve Systems That Work as Hard as They Do"
        />

        {/* 2. Intro */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div {...fadeUp} className="max-w-3xl mx-auto space-y-6 text-center">
              <p className="text-lg leading-relaxed text-muted-foreground">
                <span className="whitespace-nowrap">Heartbeat of South&nbsp;Bay</span> is an AI consulting and automation firm that helps businesses modernize how they operate.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                We design and implement AI-powered systems that capture leads, automate customer communication, and streamline operational workflows — allowing businesses to operate more efficiently and grow with confidence.
              </p>
              <p className="text-base text-foreground/70 italic">
                Instead of adding more tools, we build intelligent systems that work continuously in the background to support modern business operations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 3. The Problem */}
        <section className="py-20 bg-navy relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="section-title text-navy-foreground">The Problem With Modern Business Operations</h2>
              <p className="mt-4 text-navy-foreground/60 text-lg">
                For too long, businesses have relied on scattered tools, manual workflows, and disconnected processes that slow growth instead of supporting it.
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
              <p className="text-xl font-semibold text-navy-foreground">
                Businesses today don't need more tools.
              </p>
              <p className="text-2xl font-bold text-primary mt-2">
                They need better systems.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 4. A New Era */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-6">
              <h2 className="section-title">A New Era of Business Operations</h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Artificial intelligence and automation are transforming how companies capture opportunities, communicate with customers, and manage their operations.
              </p>
            </motion.div>
            <motion.p {...fadeUp} className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Organizations that implement intelligent systems gain the ability to:
            </motion.p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
              {newEraItems.map((item, i) => (
                <motion.div
                  key={item.text}
                  {...scaleIn(i * 0.1)}
                  className="bg-card rounded-2xl p-6 text-center shadow-elegant hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-medium text-foreground">{item.text}</p>
                </motion.div>
              ))}
            </div>
            <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto space-y-3">
              <p className="text-muted-foreground">But tools alone are not the answer.</p>
              <p className="text-lg font-semibold text-foreground">
                What businesses truly need are systems that connect technology, workflows, and people into a unified operational structure.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 5. The Heartbeat Philosophy */}
        <section className="py-20 bg-navy relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="section-title text-navy-foreground">The Heartbeat Philosophy</h2>
              <p className="mt-4 text-navy-foreground/60 text-lg">
                At <span className="whitespace-nowrap">Heartbeat of South&nbsp;Bay</span>, we believe the future of business operations lies in intelligent systems.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
              {philosophyStatements.map((statement, i) => (
                <motion.div
                  key={i}
                  {...scaleIn(i * 0.1)}
                  className="rounded-2xl border border-primary/20 bg-navy-light/30 backdrop-blur-sm p-8 relative"
                >
                  <div className="absolute top-4 left-6 text-primary/20 text-5xl font-bold leading-none">"</div>
                  <p className="text-navy-foreground/90 text-lg leading-relaxed pt-6">{statement}</p>
                </motion.div>
              ))}
            </div>
            <motion.p {...fadeUp} className="text-center text-navy-foreground/60 text-lg max-w-2xl mx-auto">
              When these systems are designed correctly, businesses spend less time managing tools and more time focusing on growth.
            </motion.p>
          </div>
        </section>

        {/* 6. AI Operating System */}
        <AIOperatingSystem />




        {/* 8. Meet the Founder */}
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
                    <span className="whitespace-nowrap">Heartbeat of South&nbsp;Bay</span> was founded by Avery Alexander Palmer, a Certified Project Manager, Creative Entrepreneur, and AI Consultant, with a mission to help businesses modernize how they operate through intelligent systems and automation.
                  </p>
                  <p className="text-navy-foreground/80 leading-relaxed">
                    Avery combines expertise in project management, digital strategy, and AI-powered automation to design operational systems that improve how businesses capture opportunities, communicate with customers, and manage internal workflows.
                  </p>
                  <p className="text-navy-foreground/60 leading-relaxed italic">
                    Rather than simply installing tools, Avery approaches automation through a systems-thinking mindset — integrating technology, processes, and human workflows into unified systems that operate continuously in the background.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 9. Credentials & Expertise */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.h2 {...fadeUp} className="section-title text-center mb-12">
              Credentials &amp; Expertise
            </motion.h2>
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {credentials.map((cred, i) => (
                <motion.div
                  key={cred.title}
                  {...scaleIn(i * 0.1)}
                  className="flex items-center gap-4 bg-card rounded-2xl p-6 shadow-elegant hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                    <cred.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-semibold text-foreground">{cred.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Our Vision */}
        <section className="py-20 bg-navy relative overflow-hidden">
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto">
              <h2 className="section-title text-navy-foreground mb-6">Our Vision</h2>
              <p className="text-xl text-navy-foreground/70 leading-relaxed mb-4">
                <span className="whitespace-nowrap">Heartbeat of South&nbsp;Bay</span> exists to help businesses step confidently into a new era of intelligent operations powered by AI and automation.
              </p>
              <p className="text-lg text-navy-foreground/50 leading-relaxed">
                We envision a future where every business — regardless of size — has access to the intelligent systems that were once reserved for enterprise organizations.
              </p>
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
                  Let's Explore What AI Could Fix In Your Business
                </h2>
                <p className="text-lg text-navy-foreground/60 mb-8 max-w-xl mx-auto">
                  Identify where your business is losing opportunities and how AI systems can improve your lead capture, follow-up, and conversion process.
                </p>

                <ul className="mb-10 space-y-3 text-left max-w-md mx-auto">
                  {["Where automation could save time", "Where AI could increase revenue", "What systems would improve operations"].map((b) => (
                    <li key={b} className="flex items-center gap-3 text-navy-foreground/80">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{b}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://audit.heartbeatofsouthbay.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground rounded-lg text-base font-semibold border-glow-spin hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] hover:scale-[1.03] transition-[transform] duration-300"
                >
                  Start Your AI Revenue System Assessment
                  <ArrowRight className="w-5 h-5" />
                </a>
                <p className="mt-4 text-sm text-navy-foreground/40">
                  Identify where AI systems can create the biggest impact in your business.
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
