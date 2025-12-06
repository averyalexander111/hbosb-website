import React from "react";

const HeartbeatHero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/lovable-uploads/fc3ff7b6-e1d6-4b4f-a93b-773156f6b8dd.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/80 to-slate-900" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-montserrat font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl leading-tight text-white">
            An integrated AI operating system for your team
          </h1>
          <p className="font-open-sans mt-5 text-lg sm:text-xl text-slate-300 max-w-2xl">
            Replace scattered tools with a secure, unified system for intake, follow ups, and reporting. Built for multi location and high growth teams.
          </p>

          {/* Proof bar */}
          <ul className="font-open-sans mt-6 grid gap-3 sm:grid-cols-3 text-sm text-slate-300">
            <li className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-white" /> Minutes not hours
            </li>
            <li className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-white" /> More reviews, better follow through
            </li>
            <li className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-white" /> Security by design
            </li>
          </ul>

          {/* CTA Button with Wave Animation */}
          <style>{`
            @keyframes wave {
              0% { transform: translateX(-100%) skewX(-15deg); }
              100% { transform: translateX(100%) skewX(-15deg); }
            }
            .wave-button {
              position: relative;
              overflow: hidden;
              background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
              border: none;
              cursor: pointer;
            }
            .wave-button .wave {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
              animation: wave 2s infinite;
            }
          `}</style>
          <div className="mt-8">
            <a 
              href="https://cal.com/hbosb/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="wave-button font-montserrat inline-flex items-center justify-center rounded-2xl px-8 py-4 text-lg font-semibold text-white focus:outline-none focus:ring-2 focus:ring-primary/60 transition-colors"
            >
              <span className="relative z-10">Complimentary Consultation</span>
              <div className="wave"></div>
            </a>
          </div>

          {/* Trust strip */}
          <div className="font-open-sans mt-6 text-xs text-slate-400">
            We do not sell data. Request our Security Overview.
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeartbeatHero;