import React, { useState } from "react";
import HeartbeatNavbar from "@/components/HeartbeatNavbar";
import ConnectSection from "@/components/ConnectSection";
import HeartbeatFooter from "@/components/HeartbeatFooter";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email_address: "",
    phone_number: "",
    message: "",
    sms_consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.full_name.trim() || !formData.email_address.trim() || !formData.phone_number.trim() || !formData.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (!formData.sms_consent) {
      toast.error("Please agree to the SMS consent to submit the form.");
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
      setFormData({ full_name: "", email_address: "", phone_number: "", message: "", sms_consent: false });
    } catch (err) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

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

        {/* Contact Form */}
        <section className="py-16" style={{ backgroundColor: '#d1e8ff' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="bg-card p-8 rounded-2xl shadow-elegant">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="full_name">Name *</Label>
                    <Input
                      id="full_name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.full_name}
                      onChange={(e) => setFormData(prev => ({ ...prev, full_name: e.target.value }))}
                      maxLength={100}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email_address">Email *</Label>
                    <Input
                      id="email_address"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email_address}
                      onChange={(e) => setFormData(prev => ({ ...prev, email_address: e.target.value }))}
                      maxLength={255}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone_number">Phone Number *</Label>
                    <Input
                      id="phone_number"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone_number}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone_number: e.target.value }))}
                      maxLength={20}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      maxLength={1000}
                      rows={5}
                      required
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="sms_consent"
                      checked={formData.sms_consent}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, sms_consent: checked === true }))}
                    />
                    <Label htmlFor="sms_consent" className="text-sm leading-relaxed text-muted-foreground cursor-pointer">
                      By checking this box, you agree to receive SMS messages from Heartbeat of South Bay related to inquiries, consultations, and service updates. Message frequency may vary. Message and data rates may apply. Reply STOP to opt out or HELP for assistance.
                    </Label>
                  </div>

                  <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
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

export default Contact;
