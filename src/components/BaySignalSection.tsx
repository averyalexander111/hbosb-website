import React from "react";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

const BaySignalSection = React.memo(() => {
  const benefits = [
    "Recover missed revenue from no-shows & ghosted leads",
    "Automate follow-ups & reminders without lifting a finger", 
    "Extend client engagement to boost lifetime value",
    "Scale without overhead—no new hires required",
    "Craft authentic, human-feel messaging at scale"
  ];

  const launchPadFeatures = [
    "Built to convert cold traffic",
    "SSL, backups, updates", 
    "Ready for automation"
  ];

  const carouselItems = [
    {
      id: "introducing",
      title: "Introducing BaySignal AI",
      content: (
        <div>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Every missed call, every ghosted lead, and every idle client is money left on the table. 
            <strong> BaySignal AI</strong> helps you recover lost revenue, re-engage clients, and build stronger 
            relationships—automatically.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Built for service-based businesses ready to grow, BaySignal AI combines smart automations 
            with personalized client communication, letting you scale without hiring more staff.
          </p>
        </div>
      )
    },
    {
      id: "why-choose",
      title: "Why Choose BaySignal AI?",
      content: (
        <div>
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
        </div>
      )
    },
    {
      id: "launchpad",
      title: "No website? Low conversions?",
      content: (
        <div>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            We can spin up a fast, conversion-first LaunchPad in 7 days and keep it secure with SiteCare—then plug BaySignal AI right in.
          </p>
          <div className="space-y-4 max-w-lg mx-auto">
            {launchPadFeatures.map((feature, index) => (
              <div key={index} className="flex items-center justify-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: "#d1e8ff" }}>
      <div className="container mx-auto px-4">
        {/* Scroll indicator text */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Scroll to explore our solutions</span>
            <ChevronRight className="w-5 h-5" />
          </div>
        </div>

        {/* Horizontal scrollable carousel */}
        <div className="relative overflow-hidden">
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden" 
               style={{ 
                 scrollbarWidth: 'none', 
                 msOverflowStyle: 'none'
               }}>
            {carouselItems.map((item, index) => (
              <div
                key={item.id}
                className={`flex-shrink-0 snap-center transition-all duration-300 ${
                  index === 1 
                    ? 'w-[500px] scale-105 z-10' // Middle item (focal point)
                    : 'w-[400px] scale-95 opacity-90' // Side items
                } bg-white/80 rounded-lg p-8 backdrop-blur-sm shadow-lg text-center`}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                  {item.title}
                </h3>
                {item.content}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll dots indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {carouselItems.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === 1 ? 'bg-primary' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

BaySignalSection.displayName = "BaySignalSection";

export default BaySignalSection;