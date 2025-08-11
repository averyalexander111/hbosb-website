import React from "react";

const HeartbeatHero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url('/lovable-uploads/a6cbcdb7-9240-44ac-8691-526136d2eca3.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Main Hero Content */}
        <div className="max-w-4xl mx-auto">

          {/* Hero Content Image */}
          <div className="mb-8 md:mb-12 px-4 md:px-0">
            <img 
              src="/lovable-uploads/f089cffc-7dc8-48cd-bc68-e6d74de312a4.png" 
              alt="AI is transforming Business - Stay Ahead & Scale Faster" 
              className="w-full max-w-6xl mx-auto h-auto object-contain"
            />
          </div>

          {/* Complimentary Consultation Button */}
          <div className="mb-12 mt-16 md:mt-24">
            <a 
              href="https://cal.com/hbosb/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white font-normal text-base tracking-[2px] px-8 py-4 rounded-2xl border-none cursor-pointer transition-colors duration-300 ease-in-out">
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

export default HeartbeatHero;