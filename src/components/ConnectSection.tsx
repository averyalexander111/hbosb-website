import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const ConnectSection = React.memo(() => {
  const [formData, setFormData] = useState({
    full_name: "",
    email_address: "",
    phone_number: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        area_of_interest: "Homepage Inquiry",
      });
      if (error) throw error;
      toast.success("Thank you! Your message has been sent successfully.");
      setFormData({ full_name: "", email_address: "", phone_number: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="consultation" 
      className="relative overflow-hidden py-24 bg-background"
    >
      {/* Decorative glow orbs */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] -ml-48 -mb-48 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-primary/8 rounded-full blur-[100px] -mr-32 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Connect with Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Learn how we can help your business thrive in today's competitive digital landscape. 
              At <span className="whitespace-nowrap">Heartbeat of South&nbsp;Bay</span>, we design Custom AI Ops tailored to your workflows, improving client intake, follow ups, and reporting. 
              The result is a stronger online presence, smoother operations, and sustainable growth backed by measurable ROI.
            </p>
          </div>

          {/* Contact Form */}
          <div className="mb-12">
            <div className="bg-navy border border-navy-foreground/10 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-center text-navy-foreground">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="home_full_name" className="text-navy-foreground/70">Name *</Label>
                    <Input
                      id="home_full_name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.full_name}
                      onChange={(e) => setFormData(prev => ({ ...prev, full_name: e.target.value }))}
                      maxLength={100}
                      required
                      className="bg-white border-border text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="home_email" className="text-muted-foreground">Email *</Label>
                    <Input
                      id="home_email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email_address}
                      onChange={(e) => setFormData(prev => ({ ...prev, email_address: e.target.value }))}
                      maxLength={255}
                      required
                      className="bg-white border-border text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="home_phone" className="text-muted-foreground">Phone Number *</Label>
                  <Input
                    id="home_phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone_number}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone_number: e.target.value }))}
                    maxLength={20}
                    required
                    className="bg-white border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="home_message" className="text-muted-foreground">Message *</Label>
                  <Textarea
                    id="home_message"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    maxLength={1000}
                    rows={4}
                    required
                    className="bg-white border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  By submitting this form, you agree to receive SMS messages from Heartbeat of South&nbsp;Bay related to consultations, project updates, and service communication. Message frequency may vary. Message and data rates may apply. Reply STOP to opt out or HELP for assistance. View our{" "}
                  <Link to="/terms" className="underline text-primary hover:text-foreground transition-colors">Terms of Service</Link>
                  {" "}and{" "}
                  <Link to="/privacy" className="underline text-primary hover:text-foreground transition-colors">Privacy Policy</Link>.
                </p>
                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information - Single Row Layout */}
          <div className="w-full">
            <h3 className="text-2xl font-bold mb-8 text-center text-foreground">Get in Touch</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {/* Address */}
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold text-foreground">Address</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  20700 Avalon Blvd Ste 116, PO Box 11812<br />
                  Carson, CA 90746
                </p>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center space-x-2 mb-2">
                  <Phone className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold text-foreground">Phone</h4>
                </div>
                <p className="text-muted-foreground text-sm">424-488-3774</p>
              </div>

              {/* Email */}
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center space-x-2 mb-2">
                  <Mail className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold text-foreground">Email</h4>
                </div>
                <p className="text-muted-foreground text-sm break-all">info@heartbeatofsouthbay.com</p>
              </div>

              {/* Hours */}
              <div className="flex flex-col items-center text-center">
                <h4 className="font-semibold mb-2 text-foreground">Hours</h4>
                <div className="text-muted-foreground text-sm space-y-1">
                  <p>Mon-Fri: 8:30am-7pm</p>
                  <p>Sat: 9:30am-3:30pm</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex flex-col items-center text-center">
                <h4 className="font-semibold mb-3 text-foreground">Social</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/profile.php?id=61552716923245&mibextid=LQQJ4d" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-foreground transition-colors"
                    aria-label="Visit our Facebook page"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://instagram.com/heartbeatofsouthbay?igshid=OGQ5ZDc2ODk2ZA==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-foreground transition-colors"
                    aria-label="Visit our Instagram page"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://twitter.com/HeartbeatSBay" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-foreground transition-colors"
                    aria-label="Visit our Twitter page"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

ConnectSection.displayName = "ConnectSection";

export default ConnectSection;
