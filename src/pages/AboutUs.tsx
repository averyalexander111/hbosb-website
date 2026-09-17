import { motion } from "framer-motion";
import { Award, Lightbulb, Bot, Settings, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import HeartbeatNavbar from "@/components/HeartbeatNavbar";
import HeartbeatFooter from "@/components/HeartbeatFooter";
import SEOHead from "@/components/SEOHead";
import SubpageHero from "@/components/SubpageHero";
import AIOperatingSystem from "@/components/AIOperatingSystem";
import averyAlexander from "@/assets/avery-alexander.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.4, ease: "easeOut" as const },
};

const approach = [
  { title: "Understand the business first", text: "Identify the actual problem and the people responsible for the process." },
  { title: "Improve the process second", text: "Clarify what should happen before adding technology." },
  { title: "Apply technology where it creates leverage", text: "Use automation and AI for repeatable steps that can be responsibly supported." },
  { title: "Keep people responsible for human decisions", text: "Sales judgment, customer service, fulfillment, escalation, and business decisions remain with people." },
];

const credentials = [
  { icon: Award, title: "Google AI Professional Certificate" },
  { icon: Award, title: "Google Project Management Professional Certificate" },
  { icon: Lightbulb, title: "Certificate in Creative Entrepreneurship, LMU Extension" },
  { icon: Bot, title: "AI systems consulting and workflow automation" },
  { icon: Settings, title: "Business systems and digital implementation" },
];

const AboutUs = () => (
  <>
    <SEOHead
      title="About Heartbeat of South Bay | Practical Business Systems"
      description="Learn how Heartbeat of South Bay helps service businesses improve lead response, follow-up, customer communication, workflow, and operational visibility."
      canonicalUrl="https://heartbeatofsouthbay.com/about"
    />
    <HeartbeatNavbar />
    <main>
      <SubpageHero
        title="Better Business Systems Start With the Process"
        subtitle="Heartbeat of South Bay helps service businesses improve how opportunities move through their business. We design, implement, and manage practical systems for lead response, follow-up, customer communication, workflow automation, and operational visibility. Technology is part of the solution, but we start with the business problem first."
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">Businesses Do Not Always Need More Tools</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Scattered tools, manual handoffs, inconsistent follow-up, and disconnected information can make it difficult to see what is happening after an opportunity enters the business. The problem is often not the absence of software. The problem is that the process, people, and tools are not working together clearly. HBOSB helps create a more structured operating path.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title text-navy-foreground">The HBOSB Approach</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {approach.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.07, ease: "easeOut" }}
                className="rounded-lg border border-navy-foreground/10 bg-navy-light/50 p-7"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold text-navy-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-foreground/70">{item.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AIOperatingSystem />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 {...fadeUp} className="section-title text-center mb-12">Meet the Founder</motion.h2>
          <motion.div {...fadeUp} className="max-w-5xl mx-auto rounded-lg border border-border bg-card p-8 md:p-10">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="lg:w-1/3 text-center">
                <img src={averyAlexander} alt="Avery Alexander Palmer, founder of Heartbeat of South Bay" className="w-56 h-56 object-cover rounded-lg shadow-lg mx-auto" />
                <h3 className="text-xl font-bold text-foreground mt-5">Avery Alexander Palmer</h3>
                <p className="text-primary font-semibold text-sm mt-1">Founder, Creative Entrepreneur &amp; AI Systems Consultant</p>
              </div>
              <div className="lg:w-2/3">
                <p className="text-muted-foreground leading-relaxed">
                  Heartbeat of South&nbsp;Bay was founded by Avery Alexander Palmer to help service businesses turn disconnected processes and tools into clearer operating systems. Avery combines project management, creative entrepreneurship, digital strategy, and practical AI implementation to design systems around real business needs. The goal is not to install technology for its own sake. It is to improve how the business responds, communicates, follows up, tracks work, and makes decisions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 {...fadeUp} className="section-title text-navy-foreground text-center mb-12">Credentials &amp; Expertise</motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {credentials.map((credential, index) => (
              <motion.div
                key={credential.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="flex items-center gap-4 rounded-lg border border-navy-foreground/10 bg-navy-light/50 p-6"
              >
                <credential.icon className="h-5 w-5 shrink-0 text-primary" />
                <p className="font-semibold text-navy-foreground">{credential.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium mb-3">When businesses operate smarter, they grow stronger.</p>
            <h2 className="section-title">Practical Systems for Businesses Ready to Operate More Clearly</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              HBOSB exists to help service businesses access structured lead-response, communication, and workflow systems without needing an enterprise operations department. When technology, process, and people are aligned, the business gains greater consistency, visibility, and control.
            </p>
            <Link to="/assessment" className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-semibold text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
              Start Your Free AI Revenue System Assessment
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
    <HeartbeatFooter />
  </>
);

export default AboutUs;
