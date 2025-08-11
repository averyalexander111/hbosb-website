import React from "react";
import { CheckCircle } from "lucide-react";

const BaySignalSection = () => {
  const benefits = [
    "Recover missed revenue from no-shows & ghosted leads",
    "Automate follow-ups & reminders without lifting a finger", 
    "Extend client engagement to boost lifetime value",
    "Scale without overhead—no new hires required",
    "Craft authentic, human-feel messaging at scale"
  ];

  return (
    <section className="py-16" style={{ backgroundColor: "#d1e8ff" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Introducing BaySignal AI
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Every missed call, every ghosted lead, and every idle client is money left on the table. 
            <strong> BaySignal AI</strong> helps you recover lost revenue, re-engage clients, and build stronger 
            relationships—automatically.
          </p>
          
          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            Built for service-based businesses ready to grow, BaySignal AI combines smart automations 
            with personalized client communication, letting you scale without hiring more staff.
          </p>

          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Why Choose BaySignal AI?
          </h3>
          
          <p className="text-lg text-gray-700 mb-8">
            BaySignal AI powers smarter client engagement so you can focus on running your business.
          </p>

          <div className="space-y-4 text-center max-w-2xl mx-auto mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Complimentary Consultation Button */}
          <div className="flex justify-center">
            <a 
              href="https://cal.com/hbosb/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white font-normal text-sm sm:text-base tracking-[1px] sm:tracking-[2px] px-6 py-3 sm:px-8 sm:py-4 rounded-2xl border-none cursor-pointer transition-colors duration-300 ease-in-out">
                <span className="relative z-10">Complimentary Consultation</span>
                <div className="absolute top-[-100px] left-0 w-full h-[250px] bg-gradient-to-br from-purple-800 to-cyan-400 transition-all duration-500 ease-in-out before:content-[''] before:absolute before:w-[200%] before:h-[200%] before:top-[-10px] before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-3/4 before:rounded-[40%] before:bg-black/50 before:animate-[wave_7s_linear_infinite] after:content-[''] after:absolute after:w-[200%] after:h-[200%] after:top-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-3/4 after:rounded-[45%] after:bg-transparent after:animate-[wave_12s_linear_infinite]"></div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BaySignalSection;