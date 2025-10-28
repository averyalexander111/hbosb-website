import React from "react";

const GrowthPlansSection = React.memo(() => {
  const buttonHoverStyle = {
    background: "linear-gradient(135deg, hsl(45, 100%, 63%), hsl(207, 100%, 50%))" // #ffc501 to #007bff
  };

  const buttonDefaultStyle = {
    background: "linear-gradient(135deg, hsl(134, 61%, 41%), hsl(134, 61%, 41%))" // #28a745
  };

  return (
    <div 
      className="min-h-screen"
      style={{ background: "linear-gradient(45deg, hsl(207, 100%, 50%), hsl(201, 100%, 15%))" }}
    >
      {/* Pricing Header and Plans Section */}
      <div className="relative text-center text-white">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white font-montserrat" style={{ fontSize: "2.5em" }}>
              Growth Plans
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto font-raleway">
              Choose the perfect plan to accelerate your business growth
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16 items-stretch">
            {/* Core Plan */}
            <div 
              className="relative text-center text-gray-600 bg-white rounded-2xl transition-transform hover:scale-105 shadow-lg flex flex-col"
              style={{ 
                boxShadow: "0 0 10px rgba(46, 59, 125, 0.23)",
                minHeight: "420px"
              }}
            >
              {/* Header */}
              <div 
                className="relative rounded-t-2xl text-white text-center flex-shrink-0 overflow-hidden"
                style={{ 
                  background: "linear-gradient(135deg, hsl(207, 57%, 50%), hsl(201, 100%, 15%))",
                  padding: "2.5rem 0 2.5rem" 
                }}
              >
                {/* White Wave */}
                <svg 
                  className="absolute bottom-0 left-0 w-full" 
                  style={{ height: "20px", color: "white", fill: "currentColor" }}
                  viewBox="0 0 1200 120" 
                  preserveAspectRatio="none"
                >
                  <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
                </svg>
                {/* Price */}
                <div className="relative z-10">
                  <div className="text-5xl font-bold leading-tight mb-2 font-montserrat">
                    <span className="text-sm align-top">$</span>997<span className="text-sm italic ml-2">/ month</span>
                  </div>
                  <p className="text-xs uppercase tracking-widest font-bold font-montserrat">Core</p>
                </div>
              </div>
              
              {/* Features List */}
              <div className="flex-1 flex flex-col p-6">
                <ul className="list-none text-left mb-6 space-y-3 font-raleway flex-1">
                  <li className="py-1 text-sm">• Automated follow-ups & reactivation campaigns</li>
                  <li className="py-1 text-sm">• Essential client database & meeting note summaries</li>
                  <li className="py-1 text-sm">• Essential reporting dashboard</li>
                  <li className="py-1 text-sm">• Simple setup—no tech skills needed</li>
                  <li className="py-1 text-sm font-bold text-blue-600">• Setup fee: $1,497</li>
                </ul>
                
                <div className="flex justify-center mt-auto">
                  <button 
                    className="py-3 px-8 text-white font-bold rounded-full transition-all duration-300 font-raleway group"
                    style={buttonDefaultStyle}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.background = buttonHoverStyle.background;
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.background = buttonDefaultStyle.background;
                    }}
                    onClick={() => window.open("https://cal.com/hbosb/30min", "_blank")}
                  >
                    Unlock
                  </button>
                </div>
              </div>
            </div>

            {/* Plus Plan */}
            <div 
              className="relative text-center text-gray-600 bg-white rounded-2xl transition-transform hover:scale-105 z-10 shadow-2xl flex flex-col" 
              style={{ 
                boxShadow: "0 0 20px rgba(46, 59, 125, 0.23)", 
                border: "3px solid hsl(45, 100%, 63%)",
                minHeight: "420px"
              }}
            >
              {/* Most Popular Badge */}
              <div 
                className="absolute -top-3 left-1/2 transform -translate-x-1/2 font-bold px-4 py-1 z-20 text-black rounded-full text-xs"
                style={{ backgroundColor: "hsl(45, 100%, 63%)" }}
              >
                Most Popular
              </div>
              
              {/* Header */}
              <div 
                className="relative rounded-t-2xl text-white text-center flex-shrink-0 overflow-hidden" 
                style={{ 
                  background: "linear-gradient(135deg, hsl(207, 100%, 50%), hsl(210, 100%, 90%))",
                  padding: "3rem 0 2.5rem 0" 
                }}
              >
                {/* White Wave */}
                <svg 
                  className="absolute bottom-0 left-0 w-full" 
                  style={{ height: "20px", color: "white", fill: "currentColor" }}
                  viewBox="0 0 1200 120" 
                  preserveAspectRatio="none"
                >
                  <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
                </svg>
                {/* Price */}
                <div className="relative z-10">
                  <div className="text-5xl font-bold leading-tight mb-2 font-montserrat">
                    <span className="text-sm align-top">$</span>2,497<span className="text-sm italic ml-2">/ month</span>
                  </div>
                  <h3 className="text-xs uppercase tracking-widest font-bold font-montserrat">Plus</h3>
                </div>
              </div>
              
              {/* Features List */}
              <div className="flex-1 flex flex-col p-6">
                <ul className="list-none text-left mb-6 space-y-3 font-raleway flex-1">
                  <li className="py-1 text-sm">• Everything in Core</li>
                  <li className="py-1 text-sm">• Personalized client journeys & branded proposals</li>
                  <li className="py-1 text-sm">• Advanced meeting notes with sales insights</li>
                  <li className="py-1 text-sm">• Competitor snapshots & enhanced review management</li>
                  <li className="py-1 text-sm">• Monthly strategy call</li>
                  <li className="py-1 text-sm font-bold text-blue-600">• Setup fee: $2,997</li>
                </ul>
                
                <div className="flex justify-center mt-auto">
                  <button 
                    className="py-3 px-8 text-white font-bold rounded-full transition-all duration-300 font-raleway"
                    style={buttonDefaultStyle}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.background = buttonHoverStyle.background;
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.background = buttonDefaultStyle.background;
                    }}
                    onClick={() => window.open("https://cal.com/hbosb/30min", "_blank")}
                  >
                    Unlock
                  </button>
                </div>
              </div>
            </div>

            {/* Pro Plan */}
            <div 
              className="relative text-center text-gray-600 bg-white rounded-2xl transition-transform hover:scale-105 shadow-lg flex flex-col" 
              style={{ 
                boxShadow: "0 0 10px rgba(46, 59, 125, 0.23)",
                minHeight: "420px"
              }}
            >
              {/* Header */}
              <div 
                className="relative rounded-t-2xl text-white text-center flex-shrink-0 overflow-hidden" 
                style={{ 
                  background: "linear-gradient(135deg, hsl(210, 100%, 90%), hsl(200, 48%, 31%))",
                  padding: "2.5rem 0 2.5rem" 
                }}
              >
                {/* White Wave */}
                <svg 
                  className="absolute bottom-0 left-0 w-full" 
                  style={{ height: "20px", color: "white", fill: "currentColor" }}
                  viewBox="0 0 1200 120" 
                  preserveAspectRatio="none"
                >
                  <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
                </svg>
                {/* Price */}
                <div className="relative z-10">
                  <div className="text-5xl font-bold leading-tight mb-2 font-montserrat">
                    <span className="text-sm align-top">$</span>4,997<span className="text-sm italic ml-2">/ month</span>
                  </div>
                  <h3 className="text-xs uppercase tracking-widest font-bold font-montserrat">Pro</h3>
                </div>
              </div>
              
              {/* Features List */}
              <div className="flex-1 flex flex-col p-6">
                <ul className="list-none text-left mb-6 space-y-3 font-raleway flex-1">
                  <li className="py-1 text-sm">• Everything in Plus</li>
                  <li className="py-1 text-sm">• AI Voice Agent for instant lead calls & booking</li>
                  <li className="py-1 text-sm">• Full CRM integration & advanced dashboards</li>
                  <li className="py-1 text-sm">• Dynamic proposals with payment links</li>
                  <li className="py-1 text-sm">• Deep competitor intelligence</li>
                  <li className="py-1 text-sm">• Priority support & quarterly strategic reviews</li>
                  <li className="py-1 text-sm font-bold text-blue-600">• Setup fee: $5,997</li>
                </ul>
                
                <div className="flex justify-center mt-auto">
                  <button 
                    className="py-3 px-8 text-white font-bold rounded-full transition-all duration-300 font-raleway"
                    style={buttonDefaultStyle}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.background = buttonHoverStyle.background;
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.background = buttonDefaultStyle.background;
                    }}
                    onClick={() => window.open("https://cal.com/hbosb/30min", "_blank")}
                  >
                    Unlock
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Table Section */}
      <div className="py-16" style={{ backgroundColor: "hsl(210, 100%, 90%)" }}>
        <div className="container mx-auto px-4">
          <div 
            className="overflow-x-auto rounded-lg shadow-lg" 
            style={{ 
              WebkitOverflowScrolling: "touch",
              background: "hsl(210, 100%, 90%)"
            }}
          >
            <table 
              className="w-full border-collapse"
              style={{ 
                minWidth: "600px",
                background: "white"
              }}
            >
              <thead>
                <tr>
                  <th className="text-left font-montserrat text-gray-800 bg-gray-50 p-4 border-b-2 border-gray-300 font-bold">
                    Feature
                  </th>
                  <th className="text-center font-montserrat text-gray-800 bg-gray-50 p-4 border-b-2 border-gray-300 font-bold">
                    Core
                  </th>
                  <th className="text-center font-montserrat text-gray-800 bg-gray-50 p-4 border-b-2 border-gray-300 font-bold">
                    Plus
                  </th>
                  <th className="text-center font-montserrat text-gray-800 bg-gray-50 p-4 border-b-2 border-gray-300 font-bold">
                    Pro
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Lead Finder + Outreach",
                    core: "✔️ Essential scraping + outreach",
                    plus: "✔️ Advanced targeting + custom flows",
                    pro: "✔️ Full automation + multi-campaigns"
                  },
                  {
                    feature: "Client Memory System",
                    core: "✔️ Essential notes + search",
                    plus: "✔️ Deeper insights + web lookup",
                    pro: "✔️ AI assistant + cross-platform summary"
                  },
                  {
                    feature: "Review Management",
                    core: "✔️ Essential message flows",
                    plus: "✔️ Multi-platform custom flows",
                    pro: "✔️ Full analytics + reputation tracking"
                  },
                  {
                    feature: "Meeting Notes",
                    core: "✔️ Essential summaries",
                    plus: "✔️ Key themes + follow-up suggestions",
                    pro: "✔️ Synced with CRM + auto reminders"
                  },
                  {
                    feature: "Proposals",
                    core: "—",
                    plus: "✔️ Branded PDF proposals",
                    pro: "✔️ Interactive proposals + payments"
                  },
                  {
                    feature: "Custom Journeys",
                    core: "—",
                    plus: "✔️ Included",
                    pro: "✔️ Hyper-personalized"
                  },
                  {
                    feature: "Competitor Research",
                    core: "—",
                    plus: "✔️ Monthly snapshot",
                    pro: "✔️ Weekly updates + trends"
                  },
                  {
                    feature: "AI Voice Agent",
                    core: "—",
                    plus: "—",
                    pro: "✔️ Included"
                  },
                  {
                    feature: "Full CRM Access",
                    core: "—",
                    plus: "—",
                    pro: "✔️ Role-based permissions"
                  },
                  {
                    feature: "Reporting & Dashboards",
                    core: "✔️ Essential overview",
                    plus: "✔️ Conversion reporting",
                    pro: "✔️ Advanced real-time analytics"
                  },
                  {
                    feature: "Support",
                    core: "Email + monthly check-in",
                    plus: "Monthly strategy call",
                    pro: "Priority support + quarterly reviews"
                  }
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="font-medium text-gray-800 font-raleway p-3 border-b border-gray-200">
                      {row.feature}
                    </td>
                    <td className="text-center text-gray-600 font-raleway p-3 border-b border-gray-200">
                      {row.core}
                    </td>
                    <td className="text-center text-gray-600 font-raleway p-3 border-b border-gray-200">
                      {row.plus}
                    </td>
                    <td className="text-center text-gray-600 font-raleway p-3 border-b border-gray-200">
                      {row.pro}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-6 font-raleway">
              Ready to transform your business growth?
            </p>
            <style dangerouslySetInnerHTML={{
              __html: `
                @keyframes wave {
                  0% {
                    transform: translate(-50%, -75%) rotate(0deg);
                  }
                  100% {
                    transform: translate(-50%, -75%) rotate(360deg);
                  }
                }
                .wave-button-growth {
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
                .wave-button-growth:hover {
                  background-color: #0056b3;
                }
                .wave-button-growth span {
                  position: relative;
                  z-index: 1;
                }
                .wave-growth {
                  position: absolute;
                  top: -100px;
                  left: 0;
                  width: 100%;
                  height: 250px;
                  background: linear-gradient(45deg, #4f00bc, #29abe2);
                  transition: 0.5s ease;
                }
                .wave-growth::after,
                .wave-growth::before {
                  content: '';
                  position: absolute;
                  width: 200%;
                  height: 200%;
                  top: -10px;
                  left: 50%;
                  transform: translate(-50%, -75%);
                  transition: 0.5s ease;
                }
                .wave-growth::before {
                  border-radius: 40%;
                  background: rgba(1, 1, 1, 0.5);
                  animation: wave 7s linear infinite;
                }
                .wave-growth::after {
                  border-radius: 45%;
                  background: transparent;
                  animation: wave 12s linear infinite;
                }
              `
            }} />
            <a 
              href="https://cal.com/hbosb/30min" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button className="wave-button-growth">
                <span>Complimentary Consultation</span>
                <div className="wave-growth"></div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

GrowthPlansSection.displayName = "GrowthPlansSection";

export default GrowthPlansSection;