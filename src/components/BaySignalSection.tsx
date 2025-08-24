import React, { useState, useRef, useEffect } from "react";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

const BaySignalSection = React.memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
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

  const handleScroll = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentIndex((prev) => (prev - 1 + sections.length) % sections.length);
    } else {
      setCurrentIndex((prev) => (prev + 1) % sections.length);
    }
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (containerRef.current && containerRef.current.contains(e.target as Node)) {
        e.preventDefault();
        if (e.deltaX > 0 || e.deltaY > 0) {
          handleScroll('right');
        } else if (e.deltaX < 0 || e.deltaY < 0) {
          handleScroll('left');
        }
      }
    };

    document.addEventListener('wheel', handleWheel, { passive: false });
    return () => document.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <section className="py-16" style={{ backgroundColor: "#d1e8ff" }}>
      <div className="container mx-auto px-4">
        <div className="relative max-w-6xl mx-auto" ref={containerRef}>
          {/* Navigation arrows */}
          <button
            onClick={() => handleScroll('left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Previous section"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          
          <button
            onClick={() => handleScroll('right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Next section"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Carousel container */}
          <div className="relative h-[600px] overflow-hidden">
            {sections.map((section, index) => {
              const position = (index - currentIndex + sections.length) % sections.length;
              let transformClass = '';
              let scaleClass = '';
              let opacityClass = '';
              let zIndexClass = '';

              if (position === 0) {
                // Center (focal point)
                transformClass = 'translate-x-0';
                scaleClass = 'scale-100';
                opacityClass = 'opacity-100';
                zIndexClass = 'z-10';
              } else if (position === 1) {
                // Right
                transformClass = 'translate-x-[60%]';
                scaleClass = 'scale-90';
                opacityClass = 'opacity-70';
                zIndexClass = 'z-5';
              } else if (position === sections.length - 1) {
                // Left
                transformClass = '-translate-x-[60%]';
                scaleClass = 'scale-90';
                opacityClass = 'opacity-70';
                zIndexClass = 'z-5';
              } else {
                // Hidden
                transformClass = 'translate-x-full';
                scaleClass = 'scale-75';
                opacityClass = 'opacity-0';
                zIndexClass = 'z-0';
              }

              return (
                <div
                  key={section.id}
                  className={`absolute inset-0 transition-all duration-500 ease-in-out ${transformClass} ${scaleClass} ${opacityClass} ${zIndexClass}`}
                >
                  <div className="max-w-4xl mx-auto bg-white/80 rounded-lg p-8 backdrop-blur-sm shadow-lg text-center h-full flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                      {section.title}
                    </h2>
                    {section.content}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Scroll indicator */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600 mb-3">Scroll or use arrows to explore</p>
            <div className="flex justify-center space-x-2">
              {sections.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex 
                      ? 'bg-blue-500 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to section ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

BaySignalSection.displayName = "BaySignalSection";

export default BaySignalSection;