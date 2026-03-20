import React from "react";
import { Link } from "react-router-dom";
import HeartbeatNavbar from "@/components/HeartbeatNavbar";
import ConnectSection from "@/components/ConnectSection";
import HeartbeatFooter from "@/components/HeartbeatFooter";
import SEOHead from "@/components/SEOHead";
import SubpageHero from "@/components/SubpageHero";
import AnimatedSection from "@/components/AnimatedSection";

const PrivacyPolicy = () => {
  return (
    <>
      <SEOHead 
        title="Privacy Policy - Heartbeat of South Bay"
        description="Read Heartbeat of South Bay's privacy policy to understand how we collect, use, and protect your personal information when using our AI automation services."
        ogTitle="Privacy Policy - Heartbeat of South Bay"
        ogDescription="Learn how Heartbeat of South Bay collects, uses, and protects your information."
        canonicalUrl={`${window.location.origin}/privacy-policy`}
      />
      <HeartbeatNavbar />
      <main>
        <SubpageHero
          title="Privacy Policy"
          subtitle="Your privacy is important to us at Heartbeat of South&nbsp;Bay."
        />

        {/* Privacy Policy Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              
              <AnimatedSection>
              <div className="bg-card p-8 rounded-2xl shadow-elegant">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed mb-6">
                    Heartbeat of South Bay is a digital marketing and AI automation agency that provides services to businesses and individuals. We act as the data controller for any personal information collected through our website.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    We have adopted this Privacy Policy, which determines how we are processing the information collected by Heartbeat of South Bay, which also provides the reasons why we must collect certain personal data about you. Therefore, you must read this Privacy Policy before using Heartbeat of South Bay website.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-8">
                    We take care of your personal data and undertake to guarantee its confidentiality and security.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 text-primary">Personal Information We Collect</h2>
                  <p className="text-base leading-relaxed mb-8">
                    When you visit the Heartbeat of South Bay, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the installed cookies on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products you view, what websites or search terms referred you to the Site, and how you interact with the Site. We refer to this automatically-collected information as "Device Information." Moreover, we might collect the personal data you provide to us (including but not limited to Name, Surname, Address, payment information, etc.) during registration to be able to fulfill the agreement.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 text-primary">Why Do We Process Your Data?</h2>
                  <p className="text-base leading-relaxed mb-4">
                    Our top priority is customer data security, and, as such, we may process only minimal user data, only as much as it is absolutely necessary to maintain the website. Information collected automatically is used only to identify potential cases of abuse and establish statistical information regarding website usage. This statistical information is not otherwise aggregated in such a way that it would identify any particular user of the system.
                  </p>
                  <p className="text-base leading-relaxed mb-8">
                    You can visit the website without telling us who you are or revealing any information, by which someone could identify you as a specific, identifiable individual. If, however, you wish to use some of the website's features, or you wish to receive our newsletter or provide other details by filling a form, you may provide personal data to us, such as your email, first name, last name, city of residence, organization, telephone number. You can choose not to provide us with your personal data, but then you may not be able to take advantage of some of the website's features. For example, you won't be able to receive our Newsletter or contact us directly from the website. Users who are uncertain about what information is mandatory are welcome to contact us via <a href="mailto:info@heartbeatofsouthbay.com" className="text-primary hover:underline">info@heartbeatofsouthbay.com</a>.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 text-primary">Your Rights</h2>
                  <p className="text-base leading-relaxed mb-4">
                    If you are a European resident, you have the following rights related to your personal data:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>The right to be informed</li>
                    <li>The right of access</li>
                    <li>The right to rectification</li>
                    <li>The right to erasure</li>
                    <li>The right to restrict processing</li>
                    <li>The right to data portability</li>
                    <li>The right to object</li>
                    <li>Rights in relation to automated decision-making and profiling</li>
                  </ul>
                  <p className="text-base leading-relaxed mb-8">
                    If you would like to exercise this right, please contact us through the contact information below.
                  </p>
                  <p className="text-base leading-relaxed mb-8">
                    Additionally, if you are a European resident, we note that we are processing your information in order to fulfill contracts we might have with you (for example, if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information might be transferred outside of Europe, including Canada and the United States.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 text-primary">SMS Communications and Consent</h2>
                  <p className="text-base leading-relaxed mb-4">
                    Heartbeat of South Bay collects phone numbers through website forms, including the contact form located at <a href="https://heartbeatofsouthbay.com/contact" className="text-primary hover:underline">https://heartbeatofsouthbay.com/contact</a>.
                  </p>
                  <p className="text-base leading-relaxed mb-4">
                    When submitting a form, users are required to provide their phone number and check a consent checkbox before submission. This checkbox is not pre-selected and must be actively selected by the user.
                  </p>
                  <p className="text-base leading-relaxed mb-4">
                    By submitting the form and providing consent, users agree to receive SMS messages related to their inquiry, including responses, appointment scheduling, reminders, and follow-up communication.
                  </p>
                  <p className="text-base leading-relaxed mb-4">
                    Message frequency varies based on user interaction. Message and data rates may apply.
                  </p>
                  <p className="text-base leading-relaxed mb-4">
                    Users can opt out of receiving SMS messages at any time by replying STOP. For assistance, users can reply HELP or contact us at <a href="mailto:info@heartbeatofsouthbay.com" className="text-primary hover:underline">info@heartbeatofsouthbay.com</a> or through our website at <a href="https://heartbeatofsouthbay.com/contact" className="text-primary hover:underline">https://heartbeatofsouthbay.com/contact</a>.
                  </p>
                  <p className="text-base leading-relaxed mb-4">
                    Heartbeat of South Bay uses phone numbers and SMS opt-in data solely for communication related to the user's inquiry and services. We do not sell, rent, or share phone numbers or SMS opt-in data with third parties for marketing purposes.
                  </p>
                  <p className="text-base leading-relaxed mb-8">
                    Consent to receive SMS messages is not a condition of purchase.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 text-primary">Links to Other Websites</h2>
                  <p className="text-base leading-relaxed mb-8">
                    Our website may contain links to other websites that are not owned or controlled by us. Please be aware that we are not responsible for such other websites or third parties' privacy practices. We encourage you to be aware when you leave our website and read the privacy statements of each website that may collect personal information.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 text-primary">Information Security</h2>
                  <p className="text-base leading-relaxed mb-8">
                    We secure information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use, or disclosure. We keep reasonable administrative, technical, and physical safeguards to protect against unauthorized access, use, modification, and personal data disclosure in its control and custody. However, no data transmission over the Internet or wireless network can be guaranteed.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 text-primary">Legal Disclosure</h2>
                  <p className="text-base leading-relaxed mb-8">
                    We will disclose any information we collect, use or receive if required or permitted by law, such as to comply with a subpoena or similar legal process, and when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 text-primary">Contact Information</h2>
                  <p className="text-base leading-relaxed mb-4">
                    If you would like to contact us to understand more about this Policy or wish to contact us concerning any matter relating to individual rights and your Personal Information, you may send an email to <a href="mailto:info@heartbeatofsouthbay.com" className="text-primary hover:underline">info@heartbeatofsouthbay.com</a>.
                  </p>
                  <p className="text-base leading-relaxed">
                    View our <Link to="/terms-and-conditions" className="text-primary hover:underline">Terms and Conditions</Link> and <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
                  </p>
                </div>
              </div>
              </AnimatedSection>

            </div>
          </div>
        </section>
      </main>
      <ConnectSection />
      <HeartbeatFooter />
    </>
  );
};

export default PrivacyPolicy;