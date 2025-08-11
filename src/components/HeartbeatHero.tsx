import React from "react";

const HeartbeatHero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center bg-no-repeat sm:bg-cover md:bg-cover lg:bg-cover"
      style={{
        backgroundImage: `url('/lovable-uploads/fc3ff7b6-e1d6-4b4f-a93b-773156f6b8dd.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }}
    >

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Hero Content Image - Larger on mobile for readability */}
        <div className="mb-2 sm:mb-4 md:mb-6 lg:mb-8">
          <img 
            src="/lovable-uploads/f09434ec-e31e-4a1b-8ea9-9028469da094.png" 
            alt="AI is transforming Business - Stay Ahead & Scale Faster" 
            className="w-full h-auto object-contain object-center mx-auto max-w-full scale-110 sm:scale-100 md:scale-75 lg:scale-75"
          />
        </div>

        {/* Main Hero Content - Consistent positioning */}
        <div className="max-w-4xl mx-auto px-4">
          {/* Complimentary Consultation Button - Consistent sizing */}
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

export default HeartbeatHero;