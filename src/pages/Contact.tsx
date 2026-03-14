import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeartbeatNavbar from "@/components/HeartbeatNavbar";
import HeartbeatFooter from "@/components/HeartbeatFooter";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";
import SubpageHero from "@/components/SubpageHero";
import AnimatedSection from "@/components/AnimatedSection";

const Contact = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email_address: "",
    phone_number: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.full_name.trim() || !formData.email_address.trim() || !formData.phone_number.trim() || !formData.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("HBOSB Contact Form").insert({
        full_name: formData.full_name.trim(),
        email_address: formData.email_address.trim(),
        phone_number: formData.phone_number.trim(),
        message: formData.message.trim(),
        area_of_interest: "Contact Page Inquiry",
      });

      if (error) throw error;

      toast.success("Thank you! Your message has been sent successfully.");
      setFormData({ full_name: "", email_address: "", phone_number: "", message: "" });
    } catch (err) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-foreground text-center mb-8">
              Prefer to Send a Message?
            </h2>
            <div className="max-w-xl mx-auto mb-16">
              <div className="bg-white/10 backdrop-blur p-8 rounded-2xl">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="full_name" className="text-navy-foreground/70">Name *</Label>
                    <Input
                      id="full_name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.full_name}
                      onChange={(e) => setFormData(prev => ({ ...prev, full_name: e.target.value }))}
                      maxLength={100}
                      required
                      className="bg-white/10 border-white/20 text-navy-foreground placeholder:text-navy-foreground/40"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="email_address" className="text-navy-foreground/70">Email *</Label>
                    <Input
                      id="email_address"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email_address}
                      onChange={(e) => setFormData(prev => ({ ...prev, email_address: e.target.value }))}
                      maxLength={255}
                      required
                      className="bg-white/10 border-white/20 text-navy-foreground placeholder:text-navy-foreground/40"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="phone_number" className="text-navy-foreground/70">Phone Number *</Label>
                    <Input
                      id="phone_number"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone_number}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone_number: e.target.value }))}
                      maxLength={20}
                      required
                      className="bg-white/10 border-white/20 text-navy-foreground placeholder:text-navy-foreground/40"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="message" className="text-navy-foreground/70">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      maxLength={1000}
                      rows={5}
                      required
                      className="bg-white/10 border-white/20 text-navy-foreground placeholder:text-navy-foreground/40"
                    />
                  </div>

                  <p className="text-xs text-navy-foreground/40 leading-relaxed">
                    By submitting this form, you agree to receive SMS messages from Heartbeat of South Bay related to consultations, project updates, and service communication. Message frequency may vary. Message and data rates may apply. Reply STOP to opt out or HELP for assistance. View our{" "}
                    <Link to="/terms" className="underline text-primary/70 hover:text-navy-foreground transition-colors">Terms of Service</Link>
                    {" "}and{" "}
                    <Link to="/privacy" className="underline text-primary/70 hover:text-navy-foreground transition-colors">Privacy Policy</Link>.
                  </p>

                  <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>

            {/* Trust Section */}
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-foreground text-center mb-10">
              Why Work With Heartbeat of South Bay
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
