import React from "react";
import { CheckCircle } from "lucide-react";

const BaySignalSection = React.memo(() => {
  return (
    <section className="py-16" style={{ backgroundColor: "#d1e8ff" }}>
      <div className="container mx-auto px-4 space-y-8">
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
                  <p><strong>Early revenue win:</strong> reactivated clients generate booked work in the first 30 days</p>
                  <p><strong>Fewer no-shows:</strong> automated confirmations and reminders lift attendance and follow-through</p>
                  <p><strong>Unified view:</strong> one dashboard shows pipeline, performance KPIs, and next actions</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* CTA - Centered below the card */}
        <div className="text-center mt-12">
          <style dangerouslySetInnerHTML={{
            __html: `
              @keyframes wave {
                0% {
                  transform: translate(-50%, -75%) rotate(0deg);
                }
                100% {
                  transform: translate(-50%, -75%) rotate(360deg);
                }
              }
              .wave-button {
                font-size: 16px;
                font-weight: 400;
                letter-spacing: 2px;
                padding: 15px 30px;
                text-align: center;
                color: #ffffff;
                background-color: #007bff;
                border: none;
                border-radius: 15px;
                position: relative;
                overflow: hidden;
                cursor: pointer;
                transition: background-color 0.3s ease;
              }
              .wave-button:hover {
                background-color: #0056b3;
              }
              .wave-button span {
                position: relative;
                z-index: 1;
              }
              .wave {
                position: absolute;
                top: -100px;
                left: 0;
                width: 100%;
                height: 250px;
                background: linear-gradient(45deg, #4f00bc, #29abe2);
                transition: 0.5s ease;
              }
              .wave::after,
              .wave::before {
                content: '';
                position: absolute;
                width: 200%;
                height: 200%;
                top: -10px;
                left: 50%;
                transform: translate(-50%, -75%);
                transition: 0.5s ease;
              }
              .wave::before {
                border-radius: 40%;
                background: rgba(1, 1, 1, 0.5);
                animation: wave 7s linear infinite;
              }
              .wave::after {
                border-radius: 45%;
                background: transparent;
                animation: wave 12s linear infinite;
              }
            `
          }} />
          <a 
            href="https://cal.com/hbosb/30min" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button className="wave-button">
              <span>Start My Assessment</span>
              <div className="wave"></div>
            </button>
          </a>
          <p className="text-sm text-gray-500 mt-4">Complimentary. Get your fastest first win.</p>
        </div>
      </div>
    </section>
  );
});

BaySignalSection.displayName = "BaySignalSection";

export default BaySignalSection;