import React, { useState } from "react";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const BaySignalSection = React.memo(() => {
  const [activeIndex, setActiveIndex] = useState(0);

  const benefits = [
    "Recover missed revenue from no-shows & ghosted leads",
    "Automate follow-ups & reminders without lifting a finger", 
    "Extend client engagement to boost lifetime value",
    "Scale without overhead—no new hires required",
    "Craft authentic, human-feel messaging at scale"
  ];

  const sections = [
    {
      id: "introducing",
      title: "Introducing BaySignal AI",
      content: (
        <>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Every missed call, every ghosted lead, and every idle client is money left on the table. 
            <strong> BaySignal AI</strong> helps you recover lost revenue, re-engage clients, and build stronger 
            relationships—automatically.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            Built for service-based businesses ready to grow, BaySignal AI combines smart automations 
            with personalized client communication, letting you scale without hiring more staff.
          </p>
        </>
      )
    },
    {
      id: "why-choose",
      title: "Why Choose BaySignal AI?",
      content: (
        <>
          <p className="text-lg text-gray-700 mb-8">
            BaySignal AI powers smarter client engagement so you can focus on running your business.
          </p>

          <div className="space-y-4 max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </>
      )
    },
    {
      id: "no-website",
      title: "No website? Low conversions?",
      content: (
        <>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            We can spin up a fast, conversion-first LaunchPad in 7 days and keep it secure with SiteCare—then plug BaySignal AI right in.
          </p>
          <div className="space-y-4 max-w-lg mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
              <span className="text-gray-700 font-medium">Built to convert cold traffic</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
              <span className="text-gray-700 font-medium">SSL, backups, updates</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
              <span className="text-gray-700 font-medium">Ready for automation</span>
            </div>
          </div>
        </>
      )
    }
  ];

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev - 1 + sections.length) % sections.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % sections.length);
  };

  const getSlidePosition = (index: number) => {
    const relative = (index - activeIndex + sections.length) % sections.length;
    if (relative === 0) return "translate-x-0 scale-105 z-20 opacity-100"; // center/active
    if (relative === 1) return "translate-x-[80%] scale-90 z-10 opacity-70"; // right
    if (relative === 2) return "-translate-x-[80%] scale-90 z-10 opacity-70"; // left
    return "translate-x-full scale-75 z-0 opacity-0"; // hidden
  };

  return (
    <section className="py-16" style={{ backgroundColor: "#d1e8ff" }}>
      <div className="container mx-auto px-4">
        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto h-[600px] overflow-hidden">
          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white"
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white"
            onClick={handleNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Slides */}
          <div className="relative w-full h-full flex items-center justify-center">
            {sections.map((section, index) => (
              <div
                key={section.id}
                className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out transform ${getSlidePosition(index)}`}
              >
                <div className="w-full max-w-4xl bg-white/80 rounded-lg p-8 backdrop-blur-sm shadow-lg text-center mx-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                    {section.title}
                  </h2>
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
            {sections.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? "bg-primary scale-125" 
                    : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Scroll Hint */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30">
            <p className="text-sm text-gray-600 bg-white/80 px-3 py-1 rounded-full">
              ← Scroll or click arrows to explore →
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

BaySignalSection.displayName = "BaySignalSection";

export default BaySignalSection;