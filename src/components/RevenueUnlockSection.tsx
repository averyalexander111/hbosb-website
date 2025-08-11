import React from "react";

const RevenueUnlockSection = () => {
  return (
    <section className="py-16" style={{ backgroundColor: "#d1e8ff" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/80 rounded-lg p-8 backdrop-blur-sm shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Unlock Hidden Revenue with BaySignal AI
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Every no-show, ghosted lead, or drop-off is money left on the table. BaySignal AI's 
              plug-and-play automations re-engage quiet clients, trigger smart follow-ups, and surface 
              fresh, targeted leads—all without a single line of code.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              👉 <strong>Built for service businesses</strong> (coaches, clinics, salons, advisors), 
              BaySignal AI scales your client outreach, automates routine work, and fuels sustainable 
              growth—no extra hires required.
            </p>
            
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
      </div>
    </section>
  );
};

export default RevenueUnlockSection;