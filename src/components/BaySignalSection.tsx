import React, { useState, useEffect } from "react";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

const BaySignalSection = React.memo(() => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with middle (Introducing BaySignal AI)

  const benefits = [
    "Recover missed revenue from no-shows & ghosted leads",
    "Automate follow-ups & reminders without lifting a finger", 
    "Extend client engagement to boost lifetime value",
    "Scale without overhead—no new hires required",
    "Craft authentic, human-feel messaging at scale"
  ];

  const sections = [
    {
      id: "launchpad",
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
    },
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
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % sections.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + sections.length) % sections.length);
  };

  const handleWheel = (e) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault();
      if (e.deltaX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  const getSlidePosition = (index) => {
    const offset = index - currentIndex;
    return offset * 100;
  };

  const getSlideScale = (index) => {
    return index === currentIndex ? 1 : 0.85;
  };

  const getSlideOpacity = (index) => {
    return index === currentIndex ? 1 : 0.7;
  };

  const getSlideZIndex = (index) => {
    return index === currentIndex ? 20 : 10;
  };

  return (
    <section className="py-16" style={{ backgroundColor: "#d1e8ff" }}>
      <div className="container mx-auto px-4">
        {/* Carousel Container */}
        <div 
          className="relative max-w-6xl mx-auto h-[600px] overflow-hidden"
          onWheel={handleWheel}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Slides */}
          {sections.map((section, index) => (
            <div
              key={section.id}
              className="absolute top-1/2 left-1/2 w-full max-w-4xl transition-all duration-500 ease-out"
              style={{
                transform: `translate(-50%, -50%) translateX(${getSlidePosition(index)}%) scale(${getSlideScale(index)})`,
                opacity: getSlideOpacity(index),
                zIndex: getSlideZIndex(index),
              }}
            >
              <div className="bg-white/80 rounded-lg p-8 backdrop-blur-sm shadow-lg text-center mx-4">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                  {section.title}
                </h2>
                {section.content}
              </div>
            </div>
          ))}

          {/* Scroll Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
            {sections.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-white shadow-lg scale-125' 
                    : 'bg-white/60 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Scroll Hint */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30">
            <div className="bg-black/70 text-white text-sm px-4 py-2 rounded-full">
              Scroll horizontally or use arrows to explore
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

BaySignalSection.displayName = "BaySignalSection";

export default BaySignalSection;