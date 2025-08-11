import React from "react";

const RevenueUnlockSection = () => {
  return (
    <section className="w-full py-16 sm:py-20 bg-gradient-to-br from-background to-muted/20" id="revenue-unlock">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-4xl mx-auto text-center animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-foreground mb-6">
            Unlock Hidden Revenue with BaySignal AI
          </h2>
          <div className="text-lg sm:text-xl text-muted-foreground space-y-6 mb-8">
            <p>
              Every no-show, ghosted lead, or drop-off is money left on the table. BaySignal AI's 
              plug-and-play automations re-engage quiet clients, trigger smart follow-ups, and 
              surface fresh, targeted leads—all without a single line of code.
            </p>
            <div className="flex items-start justify-center gap-3 text-left max-w-2xl mx-auto">
              <span className="text-2xl mt-1">👉</span>
              <p>
                Built for service businesses (coaches, clinics, salons, advisors), BaySignal AI 
                scales your client outreach, automates routine work, and fuels sustainable 
                growth—no extra hires required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueUnlockSection;