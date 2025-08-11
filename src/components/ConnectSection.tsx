import React, { useState } from "react";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const ConnectSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", { email, message });
    setEmail("");
    setMessage("");
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
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
              
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
                    >
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a 
                      href="https://instagram.com/heartbeatofsouthbay?igshid=OGQ5ZDc2ODk2ZA==" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-white transition-colors"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a 
                      href="https://twitter.com/HeartbeatSBay" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-white transition-colors"
                    >
                      <Twitter className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Stay Informed with Our Latest Updates</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Your message"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* Additional Content */}
          <div className="mt-16 text-center">
            <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">
                Unlock Hidden Revenue with BaySignal AI
              </h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                Every no-show, ghosted lead, or drop-off is money left on the table. BaySignal AI's 
                plug-and-play automations re-engage quiet clients, trigger smart follow-ups, and surface 
                fresh, targeted leads—all without a single line of code.
              </p>
              <p className="text-lg text-gray-200 mt-4">
                👉 <strong>Built for service businesses</strong> (coaches, clinics, salons, advisors), 
                BaySignal AI scales your client outreach, automates routine work, and fuels sustainable 
                growth—no extra hires required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;