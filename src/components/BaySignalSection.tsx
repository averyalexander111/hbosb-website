import React from "react";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const BaySignalSection = React.memo(() => {
  const benefits = [
    "Recover missed revenue from no-shows & ghosted leads",
    "Automate follow-ups & reminders without lifting a finger", 
    "Extend client engagement to boost lifetime value",
    "Scale without overhead—no new hires required",
    "Craft authentic, human-feel messaging at scale"
  ];

  const carouselSections = [
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

  return (
    <section className="py-16" style={{ backgroundColor: "#d1e8ff" }}>
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Scroll hint indicators */}
          <div className="text-center mb-8">
            <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
              <ChevronLeft className="w-4 h-4" />
              Scroll to explore our solutions
              <ChevronRight className="w-4 h-4" />
            </p>
          </div>
          
          <Carousel className="w-full" opts={{ align: "center", loop: true }}>
            <CarouselContent className="-ml-2 md:-ml-4">
              {carouselSections.map((section, index) => (
                <CarouselItem key={section.id} className="pl-2 md:pl-4 md:basis-4/5 lg:basis-3/4 xl:basis-2/3">
                  <div className="h-full">
                    <div className="bg-white/80 rounded-lg p-6 md:p-8 backdrop-blur-sm shadow-lg text-center h-full min-h-[400px] flex flex-col justify-center transform transition-all duration-300 hover:scale-105">
                      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-6 md:mb-8">
                        {section.title}
                      </h2>
                      {section.content}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/80 border-gray-300 hover:bg-white hover:scale-110 transition-all duration-200" />
            <CarouselNext className="right-4 bg-white/80 border-gray-300 hover:bg-white hover:scale-110 transition-all duration-200" />
          </Carousel>
        </div>
      </div>
    </section>
  );
});

BaySignalSection.displayName = "BaySignalSection";

export default BaySignalSection;