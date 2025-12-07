import React from "react";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const ConnectSection = React.memo(() => {
  return (
    <section 
      id="consultation" 
      className="py-16 text-white"
      style={{ backgroundColor: "hsl(var(--connect-bg))" }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
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

          {/* Contact Information - Responsive Grid */}
          <div className="w-full">
            <h3 className="text-2xl font-bold mb-8 text-center">Get in Touch</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Address */}
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <div className="flex items-center space-x-3 mb-2">
                  <MapPin className="w-5 h-5 text-blue-300" />
                  <h4 className="font-semibold">Address</h4>
                </div>
                <p className="text-gray-300">
                  20700 Avalon Blvd Ste 116, PO Box 11812<br />
                  Carson, CA 90746
                </p>
              </div>

              {/* Phone & Email */}
              <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-4">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <Phone className="w-5 h-5 text-blue-300" />
                    <h4 className="font-semibold">Phone</h4>
                  </div>
                  <p className="text-gray-300">424-488-3774</p>
                </div>
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <Mail className="w-5 h-5 text-blue-300" />
                    <h4 className="font-semibold">Email</h4>
                  </div>
                  <p className="text-gray-300">info@heartbeatofsouthbay.com</p>
                </div>
              </div>

              {/* Hours & Social */}
              <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Hours</h4>
                  <div className="text-gray-300 space-y-1">
                    <p>Mon-Fri: 8:30am-7:00pm</p>
                    <p>Sat: 9:30am-3:30pm</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Social Media</h4>
                  <div className="flex space-x-4 justify-center md:justify-start">
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
