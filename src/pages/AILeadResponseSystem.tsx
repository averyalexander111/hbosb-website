import React from "react";
import HeartbeatNavbar from "@/components/HeartbeatNavbar";
import HeartbeatFooter from "@/components/HeartbeatFooter";
import SubpageHero from "@/components/SubpageHero";
import SEOHead from "@/components/SEOHead";

const AILeadResponseSystem = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="AI Lead Response System | Heartbeat of South Bay"
        description="Discover how our AI Lead Response System captures inquiries, responds instantly, and organizes leads into a structured pipeline so no opportunity is missed."
      />
      <HeartbeatNavbar />
      <SubpageHero
        title="AI Lead Response System"
        subtitle="Capture, respond, and convert — automatically."
      />
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <p className="text-lg text-muted-foreground">
            Full details coming soon. In the meantime, book an AI Opportunity Assessment to learn how this system can work for your business.
          </p>
          <div className="mt-10">
            <a
              href="https://audit.heartbeatofsouthbay.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-10 py-4.5 text-base font-semibold text-primary-foreground shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] hover:scale-[1.03] transition-all duration-300"
            >
              Book Your AI Opportunity Assessment
            </a>
          </div>
        </div>
      </section>
      <HeartbeatFooter />
    </div>
  );
};

export default AILeadResponseSystem;
