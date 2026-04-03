import React from "react";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const ConnectSection = React.memo(() => {
  return (
    <section
      id="consultation"
      className="relative overflow-hidden py-24 bg-background"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Connect with Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Learn how we can help your business thrive in today's competitive
              digital landscape. At{" "}
              <span className="whitespace-nowrap">
                Heartbeat of South&nbsp;Bay
              </span>
              , we design Custom AI Ops tailored to your workflows, improving
              client intake, follow ups, and reporting. The result is a stronger
              online presence, smoother operations, and sustainable growth backed
              by measurable ROI.
            </p>
          </div>

          {/* Contact Form */}
          <div className="mb-12">
            <div className="bg-navy border border-navy-foreground/10 rounded-2xl p-8">
              <ContactForm
                areaOfInterest="Homepage Inquiry"
                formIdPrefix="home"
              />
            </div>
          </div>

          {/* Contact Information - Single Row Layout */}
          <div className="w-full">
            <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
              Get in Touch
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <p className="text-muted-foreground text-sm break-all">
                  info@heartbeatofsouthbay.com
                </p>
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
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
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
