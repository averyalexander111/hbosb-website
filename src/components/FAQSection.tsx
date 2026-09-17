import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const FAQSection = React.memo(() => {
  const faqs = [
    { question: "What is an AI Revenue System Assessment?", answer: "It is a complimentary review of how inquiries enter your business, how they are handled, and where response, follow-up, handoff, or tracking gaps may exist. No purchase is required." },
    { question: "How long does implementation take?", answer: "Timing is confirmed after we review scope, required access, lead sources, integrations, and dependencies. We do not quote a fixed timeline before that review." },
    { question: "Is implementation included with the assessment?", answer: "No. The assessment provides initial findings and an appropriate next step. Any implementation is reviewed, scoped, and approved separately." },
    { question: "Can your systems integrate with my current tools?", answer: "Often, yes. We work with commonly used CRM, scheduling, and communication platforms. Which integrations are possible depends on what each platform supports, so we confirm compatibility during scope review before anything is promised." },
    { question: "Is the AI Lead Conversion System managed after launch?", answer: "Yes. The standard offer includes ongoing management of the approved environment after launch. The business remains responsible for sales, service, fulfillment, escalations, and human judgment." },
    { question: "How do you measure results?", answer: "We agree on the KPIs that matter to your business, then review the response, follow-up, booking, and outcome data your CRM and workflow tools make available. What can be measured depends on the supported stack and the data it exposes." },
    { question: "Is AI voice included in the standard system?", answer: "No. AI voice is separately scoped and considered only after architecture, cost, compliance, and delivery readiness are reviewed for the specific use case." },
    { question: "Do you guarantee response time, conversion, revenue, or ROI?", answer: "No. Systems are designed to support a more consistent process, but results depend on the approved workflow, connected platforms, lead quality, team response, sales execution, service delivery, and other business conditions." },
  ];

  return (
    <section className="py-24 bg-navy">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-navy-foreground">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-navy-foreground/60 max-w-2xl mx-auto">
            Everything you need to know about working with us.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-navy-foreground/10 rounded-lg px-5 data-[state=open]:border-l-[3px] data-[state=open]:border-l-primary data-[state=open]:bg-primary/[0.04] transition-all duration-200"
              >
                <AccordionTrigger className="text-left font-semibold text-navy-foreground hover:text-primary transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-navy-foreground/60 leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
});

FAQSection.displayName = "FAQSection";

export default FAQSection;
