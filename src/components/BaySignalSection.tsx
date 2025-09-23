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
        <div className="max-w-4xl mx-auto">
          <section id="custom-ai-ops" className="hbosb-aiops" aria-labelledby="hbosb-aiops-title">
            <style>{`
              /* ---- Minimal, namespaced styles ---- */
              .hbosb-aiops {
                --hbosb-bg: #f7fbff;
                --hbosb-text: #16324f;
                --hbosb-accent: #28a745; /* Button color; tweak to match brand */
                --hbosb-muted: #5a7184;
                --hbosb-card: #ffffff;
                --hbosb-border: #e6eef6;

                color: var(--hbosb-text);
                background: var(--hbosb-bg);
                padding: 56px 20px;
                border-radius: 16px;
                border: 1px solid var(--hbosb-border);
              }
              .hbosb-aiops__wrap {
                max-width: 1120px;
                margin: 0 auto;
              }
              .hbosb-aiops__eyebrow {
                display: inline-block;
                font-size: 12px;
                letter-spacing: .12em;
                text-transform: uppercase;
                color: var(--hbosb-muted);
                margin-bottom: 8px;
                font-weight: 600;
              }
              .hbosb-aiops__title {
                font-size: clamp(26px, 3vw, 36px);
                line-height: 1.2;
                margin: 0 0 12px 0;
                font-weight: 800;
              }
              .hbosb-aiops__sub {
                font-size: 18px;
                line-height: 1.6;
                color: var(--hbosb-muted);
                margin: 0 0 28px 0;
                max-width: 56ch;
              }
              .hbosb-aiops__grid {
                display: grid;
                grid-template-columns: 1fr;
                gap: 24px;
              }
              @media (min-width: 900px) {
                .hbosb-aiops__grid {
                  grid-template-columns: 1.25fr .75fr;
                  gap: 32px;
                }
              }
              .hbosb-aiops__panel {
                background: var(--hbosb-card);
                border: 1px solid var(--hbosb-border);
                border-radius: 14px;
                padding: 20px;
              }
              .hbosb-aiops__panel + .hbosb-aiops__panel { margin-top: 16px; }

              .hbosb-aiops__list {
                list-style: none;
                padding: 0;
                margin: 0;
                display: grid;
                gap: 10px;
              }
              .hbosb-aiops__item {
                display: grid;
                grid-template-columns: 24px 1fr;
                align-items: start;
                gap: 10px;
                font-size: 16px;
                line-height: 1.6;
              }
              .hbosb-aiops__icon {
                width: 24px; height: 24px; flex: 0 0 24px;
              }
              .hbosb-aiops__panel h3 {
                margin: 0 0 12px 0;
                font-size: 18px;
              }
              .hbosb-aiops__muted {
                color: var(--hbosb-muted);
                font-size: 14px;
                margin-top: 10px;
              }
              .hbosb-aiops__steps {
                counter-reset: step;
                display: grid;
                gap: 10px;
                margin: 0; padding: 0;
                list-style: none;
              }
              .hbosb-aiops__steps li {
                display: grid;
                grid-template-columns: 28px 1fr;
                gap: 10px;
                align-items: start;
                line-height: 1.6;
              }
              .hbosb-aiops__steps li::before {
                counter-increment: step;
                content: counter(step);
                display: inline-grid;
                place-items: center;
                width: 28px; height: 28px;
                border-radius: 999px;
                background: var(--hbosb-text);
                color: #fff;
                font-size: 14px;
                font-weight: 700;
                margin-top: 2px;
              }
              .hbosb-aiops__ctaRow {
                display: grid;
                gap: 12px;
                margin-top: 22px;
              }
              @media (min-width: 640px) {
                .hbosb-aiops__ctaRow { grid-auto-flow: column; justify-content: start; }
              }
              .hbosb-aiops__btn {
                display: inline-block;
                text-align: center;
                font-weight: 700;
                text-decoration: none;
                border-radius: 10px;
                padding: 12px 16px;
                border: 2px solid var(--hbosb-accent);
              }
              .hbosb-aiops__btn--primary {
                background: var(--hbosb-accent);
                color: #fff;
              }
              .hbosb-aiops__btn--ghost {
                background: transparent;
                color: var(--hbosb-text);
              }
              .hbosb-aiops__fineprint {
                font-size: 13px;
                color: var(--hbosb-muted);
                margin-top: 4px;
              }
            `}</style>

            <div className="hbosb-aiops__wrap">
              <div className="hbosb-aiops__header">
                <span className="hbosb-aiops__eyebrow">Custom AI Ops</span>
                <h2 className="hbosb-aiops__title" id="hbosb-aiops-title">Build an AI-powered operating system around <em>your</em> workflow</h2>
                <p className="hbosb-aiops__sub">We replace Frankenstacks with a clean, integrated setup—so new leads are captured, follow-ups happen automatically, and your team spends less time on busywork.</p>
              </div>

              <div className="hbosb-aiops__grid" role="list">
                {/* Left column: What we build + Why it helps */}
                <div className="hbosb-aiops__left" role="listitem">
                  <div className="hbosb-aiops__panel">
                    <h3>What we build (tailored to your tools)</h3>
                    <ul className="hbosb-aiops__list">
                      <li className="hbosb-aiops__item">
                        <svg className="hbosb-aiops__icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
                        <span>AI receptionist for phone, SMS, and web chat (lead capture, routing, and follow-ups)</span>
                      </li>
                      <li className="hbosb-aiops__item">
                        <svg className="hbosb-aiops__icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
                        <span>Automated intake, quotes/proposals, and scheduling</span>
                      </li>
                      <li className="hbosb-aiops__item">
                        <svg className="hbosb-aiops__icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
                        <span>CRM workflows: reminders, pipelines, and reputation boosts</span>
                      </li>
                      <li className="hbosb-aiops__item">
                        <svg className="hbosb-aiops__icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
                        <span>RAG knowledge base trained on your docs and SOPs for accurate answers</span>
                      </li>
                      <li className="hbosb-aiops__item">
                        <svg className="hbosb-aiops__icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
                        <span>Post-visit journeys: reviews, reactivation, memberships/maintenance nudges</span>
                      </li>
                      <li className="hbosb-aiops__item">
                        <svg className="hbosb-aiops__icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
                        <span>Dashboards: bookings, ROI/ROAS, pipeline, and ops health</span>
                      </li>
                    </ul>
                  </div>

                  <div className="hbosb-aiops__panel">
                    <h3>Why it helps</h3>
                    <ul className="hbosb-aiops__list">
                      <li className="hbosb-aiops__item">
                        <svg className="hbosb-aiops__icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
                        <span>Faster response times → more booked jobs</span>
                      </li>
                      <li className="hbosb-aiops__item">
                        <svg className="hbosb-aiops__icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
                        <span>Fewer no-shows and stronger show rates</span>
                      </li>
                      <li className="hbosb-aiops__item">
                        <svg className="hbosb-aiops__icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
                        <span>Cleaner notes, less admin time, and one source of truth</span>
                      </li>
                      <li className="hbosb-aiops__item">
                        <svg className="hbosb-aiops__icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
                        <span>Higher review volume and more repeat business</span>
                      </li>
                    </ul>
                    <p className="hbosb-aiops__muted">Most clients start lean, then layer features over 30–60 days.</p>
                  </div>
                </div>

                {/* Right column: How it works + Proof + CTA */}
                <div className="hbosb-aiops__right" role="listitem">
                  <div className="hbosb-aiops__panel">
                    <h3>How it works</h3>
                    <ol className="hbosb-aiops__steps">
                      <li><strong>Assess</strong> — Map your tools, workflows, and bottlenecks</li>
                      <li><strong>Design</strong> — Propose the cleanest stack that fits your budget</li>
                      <li><strong>Pilot</strong> — Ship a working slice in ~2–4 weeks</li>
                      <li><strong>Scale</strong> — Add channels, automations, and dashboards</li>
                    </ol>
                    <p className="hbosb-aiops__muted">Typical first win: response times cut from hours to minutes; common lift: more reviews and faster follow-through on quotes.</p>

                    <div className="hbosb-aiops__ctaRow" role="group" aria-label="Calls to action">
                      <a className="hbosb-aiops__btn hbosb-aiops__btn--primary" href="https://cal.com/hbosb/30min" target="_blank" rel="noopener">Book a complimentary consultation</a>
                    </div>
                    <div className="hbosb-aiops__fineprint">Free 30-min call. No pressure—just clarity on your best first win.</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
});

BaySignalSection.displayName = "BaySignalSection";

export default BaySignalSection;