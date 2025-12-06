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

          {/* Contact Information - Centered */}
          <div className="max-w-md mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Get in Touch</h3>
            
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
    </section>
  );
});

ConnectSection.displayName = "ConnectSection";

export default ConnectSection;
