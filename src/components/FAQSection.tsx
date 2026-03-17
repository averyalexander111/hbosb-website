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
    { question: "What is an AI Revenue System Assessment?", answer: "It's a complimentary analysis of your current business operations where we identify the highest-impact areas for AI systems — from lead capture and follow-up to conversion and reporting." },
    { question: "How long does implementation take?", answer: "Most implementations take 2–6 weeks depending on complexity. We start with quick wins that deliver results in the first 30 days while building out your complete system." },
    { question: "Do I need special software to use AI automation?", answer: "No. We integrate with tools you likely already use — Google Workspace, CRMs, scheduling platforms, and more. Our job is to connect and automate, not add complexity." },
    { question: "Can your systems integrate with my current tools?", answer: "Absolutely. We specialize in connecting disparate tools into a unified system. Whether you use Salesforce, HubSpot, Calendly, or custom software, we build bridges between them." },
    { question: "What types of businesses do you work with?", answer: "We work with service-based businesses, multi-location teams, healthcare practices, professional services, and high-growth companies ready to scale their operations with AI." },
    { question: "How do you measure results?", answer: "We set clear KPIs from day one — response time, conversion rates, no-show rates, review volume — and track them through dashboards you can access anytime." },
    { question: "What data security measures do you use?", answer: "Security is built into every system we deploy. We follow industry standards for encryption, access control, and data handling. Detailed security documentation is available under NDA." },
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
