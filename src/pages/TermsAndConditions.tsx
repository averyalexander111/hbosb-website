import React from "react";
import HeartbeatNavbar from "@/components/HeartbeatNavbar";
import ConnectSection from "@/components/ConnectSection";
import HeartbeatFooter from "@/components/HeartbeatFooter";
import SEOHead from "@/components/SEOHead";
import SubpageHero from "@/components/SubpageHero";

const TermsAndConditions = () => {
  return (
    <>
      <SEOHead 
        title="Terms and Conditions - Heartbeat of South Bay"
        description="Read the terms and conditions for using Heartbeat of South Bay's AI automation and CRM services for local businesses."
        ogTitle="Terms and Conditions - Heartbeat of South Bay"
        ogDescription="Read the terms and conditions for using Heartbeat of South Bay's AI automation and CRM services for local businesses."
        canonicalUrl={`${window.location.origin}/terms`}
      />
      <HeartbeatNavbar />
      <main>
        <SubpageHero
          title="Terms and Conditions"
          subtitle="Welcome to Heartbeat of South Bay!"
        />

        {/* Terms Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              
              <div className="bg-card p-8 rounded-2xl shadow-elegant">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed mb-6">
                    These terms and conditions outline the rules and regulations for the use of Heartbeat of South Bay's Website, located at <a href="https://heartbeatofsouthbay.com" className="text-primary hover:underline">https://heartbeatofsouthbay.com</a>.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-8">
                    By accessing this website, we assume you accept these terms and conditions. Do not continue to use Heartbeat of South Bay if you do not agree to take all of the terms and conditions stated on this page.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 text-primary">Cookies</h2>
                  <p className="text-base leading-relaxed mb-4">
                    The website uses cookies to help personalize your online experience. By accessing Heartbeat of South Bay, you agreed to use the required cookies.
                  </p>
                  <p className="text-base leading-relaxed mb-4">
                    A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you and can only be read by a web server in the domain that issued the cookie to you.
                  </p>
                  <p className="text-base leading-relaxed mb-8">
                    We may use cookies to collect, store, and track information for statistical or marketing purposes to operate our website. You have the ability to accept or decline optional Cookies. There are some required Cookies that are necessary for the operation of our website. These cookies do not require your consent as they always work. Please keep in mind that by accepting required Cookies, you also accept third-party Cookies, which might be used via third-party provided services if you use such services on our website, for example, a video display window provided by third parties and integrated into our website.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 text-primary">License</h2>
                  <p className="text-base leading-relaxed mb-4">
                    Unless otherwise stated, Heartbeat of South Bay and/or its licensors own the intellectual property rights for all material on Heartbeat of South Bay. All intellectual property rights are reserved. You may access this from Heartbeat of South Bay for your own personal use subjected to restrictions set in these terms and conditions.
                  </p>
                  <p className="text-base leading-relaxed mb-4">You must not:</p>
                  <ul className="list-disc pl-6 mb-8 space-y-2">
                    <li>Copy or republish material from Heartbeat of South Bay</li>
                    <li>Sell, rent, or sub-license material from Heartbeat of South Bay</li>
                    <li>Reproduce, duplicate, or copy material from Heartbeat of South Bay</li>
                    <li>Redistribute content from Heartbeat of South Bay</li>
                  </ul>

                  <h2 className="text-2xl font-bold mb-4 text-primary">User Comments</h2>
                  <p className="text-base leading-relaxed mb-4">
                    Parts of this website offer users an opportunity to post and exchange opinions and information in certain areas. Heartbeat of South Bay does not filter, edit, publish, or review Comments before their presence on the website. Comments do not reflect the views and opinions of Heartbeat of South Bay, its agents, and/or affiliates. Comments reflect the views and opinions of the person who posts their views and opinions.
                  </p>
                  <p className="text-base leading-relaxed mb-4">
                    To the extent permitted by applicable laws, Heartbeat of South Bay shall not be liable for the Comments or any liability, damages, or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
                  </p>
                  <p className="text-base leading-relaxed mb-8">
                    Heartbeat of South Bay reserves the right to monitor all Comments and remove any Comments that can be considered inappropriate, offensive, or causes breach of these Terms and Conditions.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 text-primary">Hyperlinking to our Content</h2>
                  <p className="text-base leading-relaxed mb-4">
                    The following organizations may link to our Website without prior written approval:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Government agencies</li>
                    <li>Search engines</li>
                    <li>News organizations</li>
                    <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses</li>
                    <li>System-wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site</li>
                  </ul>

                  <h2 className="text-2xl font-bold mb-4 text-primary">Content Liability</h2>
                  <p className="text-base leading-relaxed mb-4">
                    We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are raised on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene, or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 text-primary">Reservation of Rights</h2>
                  <p className="text-base leading-relaxed mb-4">
                    We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 text-primary">Disclaimer</h2>
                  <p className="text-base leading-relaxed mb-4">
                    To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Limit or exclude our or your liability for death or personal injury</li>
                    <li>Limit or exclude our or your liability for fraud or fraudulent misrepresentation</li>
                    <li>Limit any of our or your liabilities in any way that is not permitted under applicable law</li>
                    <li>Exclude any of our or your liabilities that may not be excluded under applicable law</li>
                  </ul>
                  <p className="text-base leading-relaxed mb-8">
                    The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort, and for breach of statutory duty.
                  </p>

                  <p className="text-base leading-relaxed">
                    As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
                  </p>
                </div>
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

export default TermsAndConditions;