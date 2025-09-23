import React from "react";
import { CheckCircle } from "lucide-react";

const BaySignalSection = React.memo(() => {
  const benefits = [
    "Recover missed revenue from no-shows & ghosted leads",
    "Automate follow-ups & reminders without lifting a finger", 
    "Extend client engagement to boost lifetime value",
    "Scale without overhead—no new hires required",
    "Craft authentic, human-feel messaging at scale"
  ];

  return (
    <section className="py-16" style={{ backgroundColor: "#d1e8ff" }}>
      <div className="container mx-auto px-4 space-y-8">
        {/* Introducing BaySignal AI Box */}
        <div className="max-w-4xl mx-auto bg-white/80 rounded-lg p-8 backdrop-blur-sm shadow-lg text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Introducing BaySignal AI
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Every missed call, every ghosted lead, and every idle client is money left on the table. 
            <strong> BaySignal AI</strong> helps you recover lost revenue, re-engage clients, and build stronger 
            relationships—automatically.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            Built for service-based businesses ready to grow, BaySignal AI combines smart automations 
            with personalized client communication, letting you scale without hiring more staff.
          </p>
        </div>

        {/* Why Choose BaySignal AI Box */}
        <div className="max-w-4xl mx-auto bg-white/80 rounded-lg p-8 backdrop-blur-sm shadow-lg text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Why Choose BaySignal AI?
          </h3>
          
          <p className="text-lg text-gray-700 mb-8">
            BaySignal AI powers smarter client engagement so you can focus on running your business.
          </p>

          <div className="space-y-4 max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* LaunchPad & SiteCare Box */}
        <div className="max-w-4xl mx-auto bg-white/80 rounded-lg p-8 backdrop-blur-sm shadow-lg text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            No website? Low conversions?
          </h3>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            We can spin up a fast, conversion-first LaunchPad in 7 days and keep it secure with SiteCare—then plug BaySignal AI right in.
          </p>
          <div className="space-y-4 max-w-lg mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
              <span className="text-gray-700 font-medium">Built to convert cold traffic</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
              <span className="text-gray-700 font-medium">SSL, backups, updates</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
              <span className="text-gray-700 font-medium">Ready for automation</span>
            </div>
          </div>
        </div>

        {/* Custom AI Ops Section */}
        <div className="max-w-4xl mx-auto bg-white/80 rounded-lg p-8 backdrop-blur-sm shadow-lg">
          <div className="text-center mb-8">
            <span className="inline-block text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
              Custom AI Ops
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Build an AI-powered operating system around <em>your</em> workflow
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              We replace Frankenstacks with a clean, integrated setup—so leads get handled, clients stay engaged, and your team spends less time on busywork.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* What we build */}
              <div>
                <h4 className="text-xl font-bold text-foreground mb-4">What we build (tailored to your tools):</h4>
                <div className="space-y-3">
                  {[
                    "AI receptionist for calls, SMS, and website chat (lead capture, routing, follow-ups)",
                    "Automated intake, quotes/proposals, and scheduling", 
                    "CRM workflows with reminders, pipelines, and reputation boosts",
                    "RAG knowledge base for accurate answers from your docs and SOPs",
                    "Post-visit journeys: reviews, reactivation, membership/maintenance nudges",
                    "Dashboards: bookings, ROAS/ROI, pipeline, and ops health"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why it helps */}
              <div>
                <h4 className="text-xl font-bold text-foreground mb-4">Why it helps:</h4>
                <div className="space-y-3">
                  {[
                    "Faster response times → more booked jobs",
                    "Fewer no-shows and better show rates",
                    "Clearer notes and less admin time", 
                    "Higher repeat business and reviews",
                    "One source of truth across apps"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* How it works */}
              <div>
                <h4 className="text-xl font-bold text-foreground mb-4">How it works:</h4>
                <div className="space-y-3">
                  {[
                    { step: "Assess", desc: "Map your current tools and bottlenecks" },
                    { step: "Design", desc: "Propose the cleanest stack that fits your budget" },
                    { step: "Pilot", desc: "Ship a working slice in ~2–4 weeks" },
                    { step: "Scale", desc: "Add channels, automations, and dashboards" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">{item.step}</span>
                        <span className="text-gray-700"> — {item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Micro-proof points */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Typical first win:</strong> response times cut from hours to minutes</p>
                  <p><strong>Common lift:</strong> more reviews + better follow-through on quotes</p>
                  <p><strong>Most clients</strong> start lean, then layer on features over 30–60 days</p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <a 
                  href="https://cal.com/hbosb/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <button className="relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white font-normal tracking-widest px-8 py-4 rounded-2xl transition-colors duration-300 group">
                    <span className="relative z-10">COMPLIMENTARY CONSULTATION</span>
                    <div className="absolute top-[-100px] left-0 w-full h-[250px] bg-gradient-to-br from-purple-600 to-blue-400 opacity-50 transition-all duration-500 group-hover:top-0">
                      <div className="absolute w-full h-full animate-pulse rounded-full bg-black/20 transform -translate-x-1/2 -translate-y-3/4 left-1/2 top-2"></div>
                    </div>
                  </button>
                </a>
                <p className="text-sm text-gray-500 mt-2">Free 30-min call. No pressure—just clarity on your best first win.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

BaySignalSection.displayName = "BaySignalSection";

export default BaySignalSection;