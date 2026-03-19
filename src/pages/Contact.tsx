import React, { useEffect } from "react";
import HeartbeatNavbar from "@/components/HeartbeatNavbar";
import HeartbeatFooter from "@/components/HeartbeatFooter";
import SEOHead from "@/components/SEOHead";
import { CheckCircle2 } from "lucide-react";
import SubpageHero from "@/components/SubpageHero";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  useEffect(() => {
    const scriptId = "cal-embed-script";
    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "text/javascript";
    script.innerHTML = `
      (function (C, A, L) {
        let p = function (a, ar) { a.q.push(ar); };
        let d = C.document;
        C.Cal = C.Cal || function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () { p(api, arguments); };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
      })(window, "https://app.cal.com/embed/embed.js", "init");

      Cal("init", "ai-opportunity-assessment", { origin: "https://app.cal.com" });

      Cal.ns["ai-opportunity-assessment"]("inline", {
        elementOrSelector: "#my-cal-inline-ai-opportunity-assessment",
        config: { "layout": "month_view", "useSlotsViewOnSmallScreen": "true" },
        calLink: "hbosb/ai-opportunity-assessment",
      });

      Cal.ns["ai-opportunity-assessment"]("ui", {
        "cssVarsPerTheme": {
          "light": { "cal-brand": "#4a91c4" },
          "dark": { "cal-brand": "#fafafa" }
        },
        "hideEventTypeDetails": false,
        "layout": "month_view"
      });
    `;
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, []);

  const trustPoints = [
    "AI automation solutions for small businesses",
    "CRM and workflow automation",
    "Digital marketing systems",
    "Custom business infrastructure",
  ];

  return (
    <>
      <SEOHead
        title="Contact Us - Heartbeat of South Bay"
        description="Schedule a consultation or send a message. Heartbeat of South Bay helps businesses thrive with AI automation, CRM, and digital marketing."
        ogTitle="Contact Us - Heartbeat of South Bay"
        ogDescription="Book a consultation or get in touch with Heartbeat of South Bay."
        canonicalUrl={`${window.location.origin}/contact`}
      />
      <HeartbeatNavbar />

      <main className="bg-background">
        <SubpageHero
          title="Schedule a Consultation"
          subtitle="Book a quick call to discuss your project, AI automation opportunities, or digital marketing strategy."
        />

        <AnimatedSection>
          <section className="pb-16">
            <div className="mx-auto max-w-[1100px] px-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center mb-8">
                Book a 30-Minute AI Opportunity Assessment
              </h2>
              <div
                className="w-full rounded-2xl bg-card shadow-lg overflow-hidden"
                style={{ minHeight: 500 }}
              >
                <div
                  id="my-cal-inline-ai-opportunity-assessment"
                  style={{ width: "100%", height: "100%", overflow: "scroll", minHeight: 500 }}
                />
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Dark navy section: Form + Trust */}
        <section className="py-16 bg-navy relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -ml-48 -mb-48 pointer-events-none" />
          <div className="mx-auto max-w-[1100px] px-4">
            {/* Contact Form */}
            <div className="mb-16">
              <ContactForm
                areaOfInterest="Contact Page Inquiry"
                formIdPrefix="contact"
              />
            </div>

            {/* Trust Section */}
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-foreground text-center mb-10">
              Why Work With Heartbeat of South&nbsp;Bay
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-start gap-3 bg-white/10 backdrop-blur p-5 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-navy-foreground/70 text-sm font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <HeartbeatFooter />
    </>
  );
};

export default Contact;
