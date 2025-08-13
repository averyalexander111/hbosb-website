import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = React.memo(() => {
  const faqs = [
    {
      question: "I don't have time to set this up.",
      answer: "We handle the setup for you. Our team configures everything—automations, messaging flows, and reporting—so you can start seeing results without slowing down your day-to-day operations."
    },
    {
      question: "I'm not sure if this will really work for my business.",
      answer: "BaySignal AI is built for service-based businesses just like yours, and we customize each implementation based on your needs. You'll also get early performance check-ins so you can see real results in the first 30 days."
    },
    {
      question: "I already have a CRM—why do I need BaySignal AI?",
      answer: "Traditional CRMs store client data. BaySignal AI goes further, proactively re-engaging idle clients, recovering lost revenue, and automating follow-ups so you make more money without extra manual work."
    },
    {
      question: "It seems expensive.",
      answer: "What you pay for BaySignal AI often comes back many times over in recovered revenue, reactivated clients, and time saved. Compared to hiring additional staff, BaySignal AI is a fraction of the cost—and it never takes a day off."
    },
    {
      question: "I'm worried about learning yet another tool.",
      answer: "We train you and your team, and we provide ongoing support so you're never left figuring it out alone. Plus, many workflows run quietly in the background, requiring little day-to-day interaction."
    },
    {
      question: "Will this replace my team?",
      answer: "BaySignal AI doesn't replace people—it gives your team superpowers. Free them from repetitive tasks so they can focus on delivering outstanding service and growing your business."
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#d1e8ff' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Frequently Asked Questions
          </h2>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
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