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
      question: "I do not have time to set this up.",
      answer: "We do the heavy lifting. We audit your tools and workflows, implement the build, integrate everything, and track performance for you. You also get scheduled reviews so nothing slips."
    },
    {
      question: "Will this really work for my business?",
      answer: "Yes, and we set clear targets. Custom AI Ops unifies communication, operations, and data around your goals. ROI targets are set for 30 to 90 days."
    },
    {
      question: "I already have a CRM. Why do I need Custom AI Ops?",
      answer: "Keep your CRM. We make it smarter. We automate intake, reminders, reviews, and follow ups, then centralize reporting to reduce no shows and speed response times."
    },
    {
      question: "It seems expensive.",
      answer: "We pair outcomes with protection. Your investment is covered by our Bulletproof Guarantee, including extra support if targets are missed."
    },
    {
      question: "I am worried about learning another tool.",
      answer: "We keep the tech invisible. You get clear SOPs, a knowledge base, and ongoing enablement so day to day work stays simple."
    },
    {
      question: "Will this replace my team?",
      answer: "No, it gives them leverage. Automations handle repetitive work so your people focus on clients and growth."
    },
    {
      question: "How fast will I see results, and how do you measure them?",
      answer: "Quick wins first, compounding gains next. Expect faster response times and a lift in reviews in 30 to 60 days. We track agreed KPIs in dashboards and review progress on a schedule."
    },
    {
      question: "What data security measures do you use?",
      answer: "Security by design. We align with recognized standards and privacy regulations, use encryption and access governance, and run continuous monitoring. A Security Overview and policy summaries are available under NDA."
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
          
          {/* CTA Button */}
          <div className="mt-12 text-center">
            <a 
              href="https://cal.com/hbosb/ai-readiness-assessment-complimentary" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button className="faq-wave-button">
                <span>Start My Assessment</span>
                <div className="wave"></div>
              </button>
            </a>
            <p className="mt-4 text-sm text-muted-foreground">
              Complimentary. Get your fastest first win.
            </p>
          </div>
        </div>
      </div>
      
      <style>{`
        .faq-wave-button {
          position: relative;
          padding: 16px 48px;
          font-size: 18px;
          font-weight: 600;
          color: white;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          border: none;
          border-radius: 50px;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
        }
        
        .faq-wave-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.5);
        }
        
        .faq-wave-button span {
          position: relative;
          z-index: 1;
        }
        
        .faq-wave-button .wave {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, transparent 50%, rgba(255, 255, 255, 0.1) 100%);
          animation: faqWave 2s ease-in-out infinite;
        }
        
        @keyframes faqWave {
          0%, 100% {
            transform: translateY(100%);
          }
          50% {
            transform: translateY(0%);
          }
        }
      `}</style>
    </section>
  );
});

FAQSection.displayName = "FAQSection";

export default FAQSection;