import React from "react";
import HeartbeatNavbar from "@/components/HeartbeatNavbar";
import ConnectSection from "@/components/ConnectSection";
import HeartbeatFooter from "@/components/HeartbeatFooter";
import SEOHead from "@/components/SEOHead";

const Contact = () => {
  return (
    <>
      <SEOHead 
        title="Contact Us - Heartbeat of South Bay"
        description="Get in touch with Heartbeat of South Bay. We're here to help your business thrive with custom AI automation and CRM solutions."
        ogTitle="Contact Us - Heartbeat of South Bay"
        ogDescription="Get in touch with Heartbeat of South Bay. We're here to help your business thrive with custom AI automation and CRM solutions."
        canonicalUrl={`${window.location.origin}/contact`}
      />
      <HeartbeatNavbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="pt-20 pb-4" style={{ backgroundColor: '#d1e8ff' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Contact Us
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8">
                We'd love to hear from you. Reach out and let's grow your business together.
              </p>
            </div>
          </div>
        </section>
      </main>
      <ConnectSection />
      <HeartbeatFooter />
    </>
  );
};

export default Contact;
