import React from "react";

const HeartbeatHero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/hero-background.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Subtle left-side gradient for text readability without covering the logo */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/30 to-transparent" />
      
      {/* Bottom fade to blend into next section */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, #d1e8ff 100%)'
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-montserrat font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl leading-tight text-slate-800">
            An integrated AI operating system for your team
          </h1>
          <p className="font-open-sans mt-5 text-lg sm:text-xl text-slate-600 max-w-2xl">
            Replace scattered tools with a secure, unified system for intake, follow ups, and reporting. Built for multi location and high growth teams.
          </p>

          {/* Proof bar */}
          <ul className="font-open-sans mt-6 grid gap-3 sm:grid-cols-3 text-sm text-slate-700">
            <li className="flex items-center gap-2 rounded-xl bg-white/60 px-3 py-2 backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-slate-800" /> Minutes not hours
            </li>
            <li className="flex items-center gap-2 rounded-xl bg-white/60 px-3 py-2 backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-slate-800" /> More reviews, better follow through
            </li>
            <li className="flex items-center gap-2 rounded-xl bg-white/60 px-3 py-2 backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-slate-800" /> Security by design
            </li>
          </ul>

          {/* CTA Button with Wave Animation */}
          <style>{`
            .wave-button {
              font-size: 16px;
              font-weight: 400;
              letter-spacing: 2px;
              padding: 15px 30px;
              text-align: center;
              color: #ffffff;
              background-color: #007bff;
              border: none;
              border-radius: 15px;
              position: relative;
              overflow: hidden;
              cursor: pointer;
              transition: background-color 0.3s ease;
            }
            .wave-button:hover {
              background-color: #0056b3;
            }
            .wave-button span {
              position: relative;
              z-index: 1;
            }
            .wave-button .wave {
              position: absolute;
              top: -100px;
              left: 0;
              width: 100%;
              height: 250px;
              background: linear-gradient(45deg, #4f00bc, #29abe2);
              transition: 0.5s ease;
            }
            .wave-button .wave::after,
            .wave-button .wave::before {
              content: '';
              position: absolute;
              width: 200%;
              height: 200%;
              top: -10px;
              left: 50%;
              transform: translate(-50%, -75%);
              transition: 0.5s ease;
            }
            .wave-button .wave::before {
              border-radius: 40%;
              background: rgba(1, 1, 1, 0.5);
              animation: wave 7s linear infinite;
            }
            .wave-button .wave::after {
              border-radius: 45%;
              background: transparent;
              animation: wave 12s linear infinite;
            }
            @keyframes wave {
              0% { transform: translate(-50%, -75%) rotate(0deg); }
              100% { transform: translate(-50%, -75%) rotate(360deg); }
            }
          `}</style>
          <div className="mt-8">
            <a 
              href="https://cal.com/hbosb/30min" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button className="wave-button font-open-sans">
                <span>Start My Assessment</span>
                <div className="wave"></div>
              </button>
            </a>
          </div>

          {/* Trust strip */}
          <div className="font-open-sans mt-6 text-sm text-slate-500">
            Complimentary. Get your fastest first win.
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeartbeatHero;