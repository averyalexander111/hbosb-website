import React from "react";
import HeartbeatNavbar from "@/components/HeartbeatNavbar";
import HeartbeatFooter from "@/components/HeartbeatFooter";
import ConnectSection from "@/components/ConnectSection";
import SEOHead from "@/components/SEOHead";
import averyAlexander from "@/assets/avery-alexander.jpg";

const AboutUs = () => {
  return (
    <>
      <SEOHead 
        title="About Us - Heartbeat of South Bay | AI Automation Experts"
        description="Learn about Heartbeat of South Bay's mission to empower local businesses with AI automation, CRM solutions, and digital marketing expertise in the South Bay area."
        ogTitle="About Us - Heartbeat of South Bay | AI Automation Experts"
        ogDescription="Learn about Heartbeat of South Bay's mission to empower local businesses with AI automation, CRM solutions, and digital marketing expertise in the South Bay area."
        canonicalUrl={`${window.location.origin}/about-us`}
      />
      <HeartbeatNavbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="pt-20 pb-4" style={{ backgroundColor: '#d1e8ff' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Get to know us
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8">
                At Heartbeat of South Bay, we are dedicated to empowering local businesses to thrive in today's digital landscape.
              </p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16" style={{ backgroundColor: '#d1e8ff' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              
              {/* Introduction */}
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  Founded in August 2023, our agency combines innovative digital strategies with a personal touch, ensuring every client receives customized solutions that align with their specific goals.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  We specialize in AI-powered services designed to enhance your online presence, optimize operations, and drive sustainable growth. Our team understands the challenges and opportunities that local businesses face, which is why we're committed to helping you stand out and succeed in a competitive market.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Our core focus is building partnerships based on trust, transparency, and tangible results. From comprehensive digital marketing and web development to CRM solutions and AI automation, Heartbeat of South Bay offers the tools and expertise to support your business at every stage of growth.
                </p>
              </div>

              {/* Mission Section */}
              <div className="bg-card p-8 rounded-2xl shadow-elegant">
                <h2 className="text-3xl font-bold mb-6 text-primary">Our Mission</h2>
                <div className="space-y-4 text-lg leading-relaxed">
                  <p>
                    Our mission is to transform the digital presence of South Bay businesses by delivering customized, high-impact strategies that reflect each client's unique strengths and goals. We are dedicated to harnessing the latest technologies—AI-driven insights, automation, and data analytics—to empower local businesses with tools that were once only accessible to large corporations.
                  </p>
                  
                  <p>
                    At Heartbeat of South Bay, we believe that every business deserves the opportunity to thrive in today's digital world. Through close collaboration and a deep understanding of our clients' needs, we craft tailored solutions that drive growth, enhance customer engagement, and build brand credibility. Our approach goes beyond digital marketing; we focus on building enduring partnerships that support our clients' long-term success.
                  </p>
                  
                  <p>
                    We are passionate about helping businesses not only survive but excel in an ever-evolving digital landscape. By focusing on innovation, integrity, and measurable results, our mission is to make a meaningful difference in the lives of the business owners and communities we serve.
                  </p>
                </div>
              </div>

              {/* Vision Section */}
              <div className="bg-card p-8 rounded-2xl shadow-elegant">
                <h2 className="text-3xl font-bold mb-6 text-primary">Our Vision</h2>
                <div className="space-y-4 text-lg leading-relaxed">
                  <p>
                    Our vision is to create a vibrant community of thriving businesses that are not only equipped with powerful digital tools but are also empowered to lead and shape the future of their industries. We envision a landscape where businesses of all sizes, especially local enterprises, have access to cutting-edge technology, strategic insights, and the resources needed to compete with confidence in the digital age.
                  </p>
                  
                  <p>
                    We are committed to breaking down barriers to digital success, making advanced marketing and automation tools accessible to every business that wants to grow. By fostering a supportive environment and championing innovation, we aim to drive economic growth within our community, helping businesses not only survive but excel in an increasingly competitive world.
                  </p>
                  
                  <p>
                    At Heartbeat of South Bay, we believe that when local businesses flourish, the entire community benefits. Our vision is to be the driving force behind that success—building a future where every business, from startups to established enterprises, has the opportunity to achieve its full potential online.
                  </p>
                </div>
              </div>

              {/* Values Section */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-center text-primary">Our Values</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  
                  <div className="bg-card p-6 rounded-xl shadow-elegant">
                    <h3 className="text-xl font-bold mb-4 text-foreground">Commitment</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We are dedicated to the success of our clients and our community. Our commitment means going above and beyond to ensure that every project reflects the highest standards, delivering value and lasting impact. We see ourselves as partners in your growth journey and are here to support you every step of the way.
                    </p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-xl shadow-elegant">
                    <h3 className="text-xl font-bold mb-4 text-foreground">Innovation</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      In a fast-evolving digital landscape, we prioritize staying ahead of the curve. Through AI-driven solutions, creative problem-solving, and a proactive approach, we bring fresh perspectives and advanced strategies that keep our clients competitive. Innovation isn't just a value—it's the foundation of everything we do.
                    </p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-xl shadow-elegant">
                    <h3 className="text-xl font-bold mb-4 text-foreground">Integrity</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We believe in transparency, honesty, and ethical practices. Trust is the cornerstone of our client relationships, and we are committed to clear communication and accountable actions. Integrity means we'll always provide honest insights, even if it means having tough conversations, because we value long-term partnerships built on trust.
                    </p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-xl shadow-elegant">
                    <h3 className="text-xl font-bold mb-4 text-foreground">Excellence</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Excellence drives us to deliver outstanding results. We hold ourselves to high standards in every project, ensuring meticulous attention to detail and consistent performance. Excellence isn't a one-time achievement; it's a continuous pursuit to refine our skills, improve our services, and exceed expectations.
                    </p>
                  </div>
                  
                </div>
              </div>

              {/* Team Section */}
              <div className="bg-card p-8 rounded-2xl shadow-elegant">
                <h2 className="text-3xl font-bold mb-8 text-center text-primary">Our Team</h2>
                
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="lg:w-1/3">
                    <div className="relative w-64 h-64 mx-auto">
                      <img 
                        src={averyAlexander} 
                        alt="Avery Alexander - Founder / CEO" 
                        className="w-full h-full object-cover rounded-2xl shadow-lg"
                      />
                    </div>
                    <div className="text-center mt-4">
                      <h3 className="text-xl font-bold text-foreground">Avery Alexander</h3>
                      <p className="text-primary font-semibold">Founder / CEO</p>
                    </div>
                  </div>
                  
                  <div className="lg:w-2/3">
                    <p className="text-lg leading-relaxed">
                      Avery Alexander is the visionary behind Heartbeat of South Bay, combining creative entrepreneurship and project management expertise with an innovative approach to digital growth. Through a unique tech stack blending AI-powered infrastructure, marketing, design, and technology, Avery delivers tailored solutions that empower clients to enhance their online presence and achieve lasting success.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="text-center bg-primary/5 p-8 rounded-2xl">
                <h2 className="text-3xl font-bold mb-4 text-primary">Ready to Get Started?</h2>
                <p className="text-lg mb-6 text-muted-foreground">
                  Let's discuss how we can help transform your business's digital presence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="mailto:info@heartbeatofsouthbay.com" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Email Us
                  </a>
                  <a 
                    href="tel:424-488-3774" 
                    className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    Call Us
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <ConnectSection />
      <HeartbeatFooter />
    </>
  );
};

export default AboutUs;