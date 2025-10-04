import React, { useState } from "react";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const ConnectSection = React.memo(() => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    areaOfInterest: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from("HBOSB Contact Form")
        .insert({
          full_name: formData.fullName,
          email_address: formData.email,
          phone_number: formData.phoneNumber,
          area_of_interest: formData.areaOfInterest,
          message: formData.message
        });

      if (error) {
        throw error;
      }

      // Reset form on success
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        areaOfInterest: "",
        message: ""
      });

      toast({
        title: "Message sent successfully!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });

    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error sending message",
        description: "There was a problem submitting your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="consultation" 
      className="py-16 text-white"
      style={{ backgroundColor: "hsl(var(--connect-bg))" }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Connect with Us
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Learn how we can help your business thrive in today's competitive digital landscape. 
              At Heartbeat of South Bay, we offer personalized solutions tailored to your unique needs, 
              focusing on enhancing your online presence, streamlining operations, and driving sustainable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="areaOfInterest" className="block text-sm font-medium mb-2">
                    Area of Interest
                  </label>
                  <select
                    id="areaOfInterest"
                    name="areaOfInterest"
                    value={formData.areaOfInterest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="" className="text-gray-900">Select an area of interest</option>
                    <option value="crm-ai-automations" className="text-gray-900">Set up CRM & AI automations (BaySignal AI)</option>
                    <option value="leads-bookings" className="text-gray-900">Get more leads & bookings</option>
                    <option value="re-engage-customers" className="text-gray-900">Re-engage past customers</option>
                    <option value="online-reviews" className="text-gray-900">Improve online reviews</option>
                    <option value="website-design" className="text-gray-900">Build/Redesign website</option>
                    <option value="dashboards-reporting" className="text-gray-900">Dashboards & reporting</option>
                    <option value="managed-hosting" className="text-gray-900">Managed hosting & maintenance (SiteCare)</option>
                    <option value="strategy-consultation" className="text-gray-900">Strategy consultation</option>
                    <option value="other" className="text-gray-900">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Tell us about your project or inquiry"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 mt-1 text-blue-300" />
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-gray-300">
                      20700 Avalon Blvd Ste 116, PO Box 11812<br />
                      Carson, CA 90746
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 mt-1 text-blue-300" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-gray-300">424-488-3774</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 mt-1 text-blue-300" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-300">info@heartbeatofsouthbay.com</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Hours</h4>
                  <div className="text-gray-300 space-y-1">
                    <p>Mon-Fri: 8:30am-7:00pm</p>
                    <p>Sat: 9:30am-3:30pm</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">Social Media</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.facebook.com/profile.php?id=61552716923245&mibextid=LQQJ4d" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-white transition-colors"
                      aria-label="Visit our Facebook page"
                    >
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a 
                      href="https://instagram.com/heartbeatofsouthbay?igshid=OGQ5ZDc2ODk2ZA==" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-white transition-colors"
                      aria-label="Visit our Instagram page"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a 
                      href="https://twitter.com/HeartbeatSBay" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-white transition-colors"
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
      </div>
    </section>
  );
});

ConnectSection.displayName = "ConnectSection";

export default ConnectSection;