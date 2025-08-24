import React, { useState } from "react";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const BaySignalSection = React.memo(() => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const benefits = [
    "Recover missed revenue from no-shows & ghosted leads",
    "Automate follow-ups & reminders without lifting a finger", 
    "Extend client engagement to boost lifetime value",
    "Scale without overhead—no new hires required",
    "Craft authentic, human-feel messaging at scale"
  ];

  const slides = [
    {
      id: 0,
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
      id: 1,
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
      id: 2,
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

  return (
    <section className="py-16" style={{ backgroundColor: "#d1e8ff" }}>
      <div className="container mx-auto px-4">
        <div className="relative max-w-6xl mx-auto">
          <Carousel 
            className="w-full"
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {slides.map((slide, index) => (
                <CarouselItem key={slide.id} className="pl-2 md:pl-4 basis-4/5 md:basis-3/5 lg:basis-1/2">
                  <div 
                    className={`
                      bg-white/80 rounded-lg p-6 md:p-8 backdrop-blur-sm shadow-lg text-center
                      transition-all duration-500 ease-in-out transform
                      ${index === currentSlide ? 'scale-105 shadow-2xl z-10' : 'scale-95 shadow-md z-0'}
                      hover:scale-100 cursor-pointer
                    `}
                    style={{
                      minHeight: '400px',
                    }}
                  >
                    <h2 className={`
                      font-bold text-foreground mb-6 md:mb-8 transition-all duration-300
                      ${index === currentSlide ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}
                    `}>
                      {slide.title}
                    </h2>
                    
                    <div className={`
                      transition-opacity duration-300
                      ${index === currentSlide ? 'opacity-100' : 'opacity-75'}
                    `}>
                      {slide.content}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Custom navigation buttons with clear visual cues */}
            <CarouselPrevious 
              className="left-4 bg-white/90 hover:bg-white shadow-lg border-2 border-blue-200 hover:border-blue-400 transition-all duration-200"
            />
            <CarouselNext 
              className="right-4 bg-white/90 hover:bg-white shadow-lg border-2 border-blue-200 hover:border-blue-400 transition-all duration-200"
            />
          </Carousel>
          
          {/* Scroll indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`
                  w-3 h-3 rounded-full transition-all duration-300
                  ${index === currentSlide ? 'bg-blue-600 scale-125' : 'bg-blue-300 hover:bg-blue-400'}
                `}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Scroll hint text */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
              <ChevronLeft className="w-4 h-4" />
              Scroll to explore our solutions
              <ChevronRight className="w-4 h-4" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

BaySignalSection.displayName = "BaySignalSection";

export default BaySignalSection;