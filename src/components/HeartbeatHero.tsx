import React from "react";

const HeartbeatHero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url('/lovable-uploads/9e9b1725-bae8-4bf2-bc17-d1fcf083a1c2.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background decorative elements - Palm tree graphic */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-[600px] h-[600px] opacity-30">
          <img 
            src="/lovable-uploads/12a9d3c2-5a34-4ec2-982b-4ee2dc3c99eb.png" 
            alt="" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Main Hero Content */}
        <div className="max-w-4xl mx-auto">

          {/* Complimentary Consultation Button */}
          <div className="mb-12">
            <a 
              href="https://cal.com/hbosb/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="px-8 py-4 text-white bg-blue-800 hover:bg-blue-900 rounded-full font-semibold text-lg tracking-wide transition-all duration-300 transform hover:scale-105 shadow-lg">
                Complimentary Consultation
              </button>
            </a>
          </div>

        </div>
      </div>

    </section>
  );
};

export default HeartbeatHero;