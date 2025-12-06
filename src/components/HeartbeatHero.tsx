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

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="font-montserrat inline-flex items-center justify-center rounded-2xl px-5 py-3 text-base font-semibold bg-white text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white/60 transition-colors"
            >
              Talk to an expert
            </a>
            <a 
              href="https://cal.com/hbosb/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-montserrat inline-flex items-center justify-center rounded-2xl px-5 py-3 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/60 transition-colors"
            >
              Complimentary Consultation
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