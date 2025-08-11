import React from "react";

const HeartbeatHero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, hsl(var(--hero-light)), hsl(var(--hero-dark)))`
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 opacity-20">
          <img 
            src="/lovable-uploads/12a9d3c2-5a34-4ec2-982b-4ee2dc3c99eb.png" 
            alt="" 
            className="w-full h-full object-contain filter blur-sm"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Main Hero Content */}
        <div className="max-w-4xl mx-auto">
          <img 
            src="/lovable-uploads/329dfcbe-dc1d-4bad-b196-0d006137980e.png" 
            alt="AI is Transforming Business" 
            className="mx-auto mb-8 max-w-full h-auto"
          />
          
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
            Stay Ahead & Scale Faster!
          </h2>

          {/* Complimentary Consultation Button */}
          <div className="mb-12">
            <a 
              href="https://cal.com/hbosb/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="complimentary-consultation-btn relative overflow-hidden px-8 py-4 text-white bg-blue-600 rounded-2xl font-medium text-lg tracking-wider hover:bg-blue-700 transition-colors duration-300">
                <span className="relative z-10">Complimentary Consultation</span>
                <div className="wave absolute -top-24 left-0 w-full h-60 bg-gradient-to-r from-purple-600 to-blue-400 transition-all duration-500"></div>
              </button>
            </a>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
            Recover lost bookings and win back idle clients with BaySignal AI. Our plug-and-play 
            automations automatically re-engage no-shows, streamline your workflow, and deliver 
            targeted leads—so you can scale without extra hires.
          </p>
        </div>
      </div>

    </section>
  );
};

export default HeartbeatHero;