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