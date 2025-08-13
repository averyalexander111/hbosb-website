import React from "react";

const GrowthPlansSection = React.memo(() => {
  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(45deg, #007bff, #16324f)" }}>
      {/* Pricing Header and Plans Section */}
      <div className="relative text-center text-white">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ fontSize: "2.5em" }}>
              Growth Plans
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Choose the perfect plan to accelerate your business growth
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
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
                  background: "linear-gradient(135deg, #4a91c4, #16324f)", 
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
                  <div className="text-5xl font-bold leading-tight mb-2">
                    <span className="text-sm align-top">$</span>597<span className="text-sm italic ml-2">/ month</span>
                  </div>
                  <p className="text-xs uppercase tracking-widest font-bold">Core</p>
                </div>
              </div>
              
              {/* Features List */}
              <div className="flex-1 flex flex-col p-6">
                <ul className="list-none text-left mb-6 space-y-3 flex-1">
                  <li className="py-1 text-sm">• Automated follow-ups & reactivation campaigns</li>
                  <li className="py-1 text-sm">• Essential client database & meeting note summaries</li>
                  <li className="py-1 text-sm">• Essential reporting dashboard</li>
                  <li className="py-1 text-sm">• Simple setup—no tech skills needed</li>
                  <li className="py-1 text-sm font-bold text-blue-600">• Setup fee: $749</li>
                </ul>
                
                <div className="flex justify-center mt-auto">
                  <button 
                    className="py-3 px-8 text-white font-bold rounded-full transition-all duration-300 hover:brightness-110"
                    style={{ background: "linear-gradient(135deg, #28a745, #28a745)" }}
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
                border: "3px solid #ffc501",
                minHeight: "420px"
              }}
            >
              {/* Most Popular Badge */}
              <div 
                className="absolute -top-3 left-1/2 transform -translate-x-1/2 font-bold px-4 py-1 z-20 text-black rounded-full text-xs"
                style={{ backgroundColor: "#ffc501" }}
              >
                Most Popular
              </div>
              
              {/* Header */}
              <div 
                className="relative rounded-t-2xl text-white text-center flex-shrink-0 overflow-hidden" 
                style={{ 
                  background: "linear-gradient(135deg, #007bff, #d1e8ff)", 
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
                  <div className="text-5xl font-bold leading-tight mb-2">
                    <span className="text-sm align-top">$</span>1,297<span className="text-sm italic ml-2">/ month</span>
                  </div>
                  <h3 className="text-xs uppercase tracking-widest font-bold">Plus</h3>
                </div>
              </div>
              
              {/* Features List */}
              <div className="flex-1 flex flex-col p-6">
                <ul className="list-none text-left mb-6 space-y-3 flex-1">
                  <li className="py-1 text-sm">• Everything in Core</li>
                  <li className="py-1 text-sm">• Personalized client journeys & branded proposals</li>
                  <li className="py-1 text-sm">• Advanced meeting notes with sales insights</li>
                  <li className="py-1 text-sm">• Competitor snapshots & enhanced review management</li>
                  <li className="py-1 text-sm">• Monthly strategy call</li>
                  <li className="py-1 text-sm font-bold text-blue-600">• Setup fee: $1,499</li>
                </ul>
                
                <div className="flex justify-center mt-auto">
                  <button 
                    className="py-3 px-8 text-white font-bold rounded-full transition-all duration-300 hover:brightness-110"
                    style={{ background: "linear-gradient(135deg, #28a745, #28a745)" }}
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
                  background: "linear-gradient(135deg, #d1e8ff, #2c5777)", 
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
                  <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57-84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
                </svg>
                {/* Price */}
                <div className="relative z-10">
                  <div className="text-5xl font-bold leading-tight mb-2">
                    <span className="text-sm align-top">$</span>2,497<span className="text-sm italic ml-2">/ month</span>
                  </div>
                  <h3 className="text-xs uppercase tracking-widest font-bold">Pro</h3>
                </div>
              </div>
              
              {/* Features List */}
              <div className="flex-1 flex flex-col p-6">
                <ul className="list-none text-left mb-6 space-y-3 flex-1">
                  <li className="py-1 text-sm">• Everything in Plus</li>
                  <li className="py-1 text-sm">• AI Voice Agent for instant lead calls & booking</li>
                  <li className="py-1 text-sm">• Full CRM integration & advanced dashboards</li>
                  <li className="py-1 text-sm">• Dynamic proposals with payment links</li>
                  <li className="py-1 text-sm">• Deep competitor intelligence</li>
                  <li className="py-1 text-sm">• Priority support & quarterly strategic reviews</li>
                  <li className="py-1 text-sm font-bold text-blue-600">• Setup fee: $2,999</li>
                </ul>
                
                <div className="flex justify-center mt-auto">
                  <button 
                    className="py-3 px-8 text-white font-bold rounded-full transition-all duration-300 hover:brightness-110"
                    style={{ background: "linear-gradient(135deg, #28a745, #28a745)" }}
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
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
            <table className="min-w-full border-collapse bg-white">
              <thead>
                <tr>
                  <th className="text-left font-bold bg-gray-50 p-4 border-b-2 border-gray-300">Feature</th>
                  <th className="text-center font-bold bg-gray-50 p-4 border-b-2 border-gray-300">Core</th>
                  <th className="text-center font-bold bg-gray-50 p-4 border-b-2 border-gray-300">Plus</th>
                  <th className="text-center font-bold bg-gray-50 p-4 border-b-2 border-gray-300">Pro</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="font-medium text-gray-800 p-3 border-b border-gray-200">Lead Finder + Outreach</td>
                  <td className="text-center text-gray-600 p-3 border-b border-gray-200">✔️ Essential scraping + outreach</td>
                  <td className="text-center text-gray-600 p-3 border-b border-gray-200">✔️ Advanced targeting + custom flows</td>
                  <td className="text-center text-gray-600 p-3 border-b border-gray-200">✔️ Full automation + multi-campaigns</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="font-medium text-gray-800 p-3 border-b border-gray-200">Client Memory System</td>
                  <td className="text-center text-gray-600 p-3 border-b border-gray-200">✔️ Essential notes + search</td>
                  <td className="text-center text-gray-600 p-3 border-b border-gray-200">✔️ Deeper insights + web lookup</td>
                  <td className="text-center text-gray-600 p-3 border-b border-gray-200">✔️ AI assistant + cross-platform summary</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="font-medium text-gray-800 p-3 border-b border-gray-200">Review Management</td>
                  <td className="text-center text-gray-600 p-3 border-b border-gray-200">✔️ Essential message flows</td>
                  <td className="text-center text-gray-600 p-3 border-b border-gray-200">✔️ Multi-platform custom flows</td>
                  <td className="text-center text-gray-600 p-3 border-b border-gray-200">✔️ Full analytics + reputation tracking</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="font-medium text-gray-800 p-3 border-b border-gray-200">Meeting Notes</td>
                  <td className="text-center text-gray-600 p-3 border-b border-gray-200">✔️ Essential summaries</td>
                  <td className="text-center text-gray-600 p-3 border-b border-gray-200">✔️ Key themes + follow-up suggestions</td>
                  <td className="text-center text-gray-600 p-3 border-b border-gray-200">✔️ Synced with CRM + auto reminders</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="font-medium text-gray-800 p-3 border-b border-gray-200">Proposals</td>
                  <td className="text-center text-gray-600 p-3 border-b border-gray-200">—</td>
                  <td className="text-center text-gray-600 p-3 border-b border-gray-200">✔️ Branded PDF proposals</td>
                  <td className="text-center text-gray-600 p-3 border-b border-gray-200">✔️ Interactive proposals + payments</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="font-medium text-gray-800 p-3 border-b border-gray-200">Custom Journeys</td>
                  <td className="text-center text-gray-600 p-3 border-b border-gray-200">—</td>
                  <td className="text-center text-gray-600 p-3 border-b border-gray-200">✔️ Included</td>
                  <td className="text-center text-gray-600 p-3 border-b border-gray-200">✔️ Hyper-personalized</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="font-medium text-gray-800 p-3 border-b border-gray-200">Competitor Research</td>
                  <td className="text-center text-gray-600 p-3 border-b border-gray-200">—</td>
                  <td className="text-center text-gray-600 p-3 border-b border-gray-200">✔️ Monthly snapshot</td>
                  <td className="text-center text-gray-600 p-3 border-b border-gray-200">✔️ Weekly updates + trends</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="font-medium text-gray-800 p-3 border-b border-gray-200">AI Voice Agent</td>
                  <td className="text-center text-gray-600 p-3 border-b border-gray-200">—</td>
                  <td className="text-center text-gray-600 p-3 border-b border-gray-200">—</td>
                  <td className="text-center text-gray-600 p-3 border-b border-gray-200">✔️ Included</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="font-medium text-gray-800 p-3 border-b border-gray-200">Full CRM Access</td>
                  <td className="text-center text-gray-600 p-3 border-b border-gray-200">—</td>
                  <td className="text-center text-gray-600 p-3 border-b border-gray-200">—</td>
                  <td className="text-center text-gray-600 p-3 border-b border-gray-200">✔️ Role-based permissions</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="font-medium text-gray-800 p-3 border-b border-gray-200">Reporting & Dashboards</td>
                  <td className="text-center text-gray-600 p-3 border-b border-gray-200">✔️ Essential overview</td>
                  <td className="text-center text-gray-600 p-3 border-b border-gray-200">✔️ Conversion reporting</td>
                  <td className="text-center text-gray-600 p-3 border-b border-gray-200">✔️ Advanced real-time analytics</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="font-medium text-gray-800 p-3 border-b border-gray-200">Support</td>
                  <td className="text-center text-gray-600 p-3 border-b border-gray-200">Email + monthly check-in</td>
                  <td className="text-center text-gray-600 p-3 border-b border-gray-200">Monthly strategy call</td>
                  <td className="text-center text-gray-600 p-3 border-b border-gray-200">Priority support + quarterly reviews</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-6">
              Ready to transform your business growth?
            </p>
            <button 
              className="px-8 py-4 text-lg text-white font-bold rounded-full transition-all duration-300 hover:brightness-110"
              style={{ background: "linear-gradient(135deg, #007bff, #16324f)" }}
              onClick={() => window.open("https://cal.com/hbosb/30min", "_blank")}
            >
              Schedule Your Strategy Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

GrowthPlansSection.displayName = "GrowthPlansSection";

export default GrowthPlansSection;