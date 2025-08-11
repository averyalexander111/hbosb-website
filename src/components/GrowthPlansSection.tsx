import React from "react";

const GrowthPlansSection = () => {
  return (
    <section className="py-16" style={{ background: "linear-gradient(45deg, #007bff, #16324f)" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Growth Plans
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Choose the perfect plan to accelerate your business growth
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Core Plan */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
            <div 
              className="text-white text-center py-10 relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #4a91c4, #16324f)" }}
            >
              <svg 
                className="absolute bottom-0 left-0 w-full text-white fill-current" 
                style={{ height: "20px" }}
                viewBox="0 0 1200 120" 
                preserveAspectRatio="none"
              >
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
              </svg>
              <div className="relative z-10">
                <div className="text-5xl font-bold mb-2">
                  <span className="text-sm align-top">$</span>597<span className="text-sm italic ml-2">/ month</span>
                </div>
                <h3 className="text-xs uppercase tracking-widest font-bold">Core</h3>
              </div>
            </div>
            
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="text-sm">• Automated follow-ups & reactivation campaigns</li>
                <li className="text-sm">• Essential client database & meeting note summaries</li>
                <li className="text-sm">• Essential reporting dashboard</li>
                <li className="text-sm">• Simple setup—no tech skills needed</li>
                <li className="text-sm font-bold text-blue-600">• Setup fee: $749</li>
              </ul>
              
              <button 
                className="w-full py-3 px-8 text-white font-bold rounded-full bg-green-600 hover:bg-green-700 transition-colors"
                onClick={() => window.open('https://cal.com/hbosb/30min', '_blank')}
              >
                Unlock
              </button>
            </div>
          </div>

          {/* Plus Plan */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300 border-4 border-yellow-400 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-xs font-bold z-20">
              Most Popular
            </div>
            
            <div 
              className="text-white text-center py-12 relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #007bff, #d1e8ff)" }}
            >
              <svg 
                className="absolute bottom-0 left-0 w-full text-white fill-current" 
                style={{ height: "20px" }}
                viewBox="0 0 1200 120" 
                preserveAspectRatio="none"
              >
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
              </svg>
              <div className="relative z-10">
                <div className="text-5xl font-bold mb-2">
                  <span className="text-sm align-top">$</span>1,297<span className="text-sm italic ml-2">/ month</span>
                </div>
                <h3 className="text-xs uppercase tracking-widest font-bold">Plus</h3>
              </div>
            </div>
            
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="text-sm">• Everything in Core</li>
                <li className="text-sm">• Personalized client journeys & branded proposals</li>
                <li className="text-sm">• Advanced meeting notes with sales insights</li>
                <li className="text-sm">• Competitor snapshots & enhanced review management</li>
                <li className="text-sm">• Monthly strategy call</li>
                <li className="text-sm font-bold text-blue-600">• Setup fee: $1,499</li>
              </ul>
              
              <button 
                className="w-full py-3 px-8 text-white font-bold rounded-full bg-green-600 hover:bg-green-700 transition-colors"
                onClick={() => window.open('https://cal.com/hbosb/30min', '_blank')}
              >
                Unlock
              </button>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
            <div 
              className="text-white text-center py-10 relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #d1e8ff, #2c5777)" }}
            >
              <svg 
                className="absolute bottom-0 left-0 w-full text-white fill-current" 
                style={{ height: "20px" }}
                viewBox="0 0 1200 120" 
                preserveAspectRatio="none"
              >
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
              </svg>
              <div className="relative z-10">
                <div className="text-5xl font-bold mb-2">
                  <span className="text-sm align-top">$</span>2,497<span className="text-sm italic ml-2">/ month</span>
                </div>
                <h3 className="text-xs uppercase tracking-widest font-bold">Pro</h3>
              </div>
            </div>
            
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="text-sm">• Everything in Plus</li>
                <li className="text-sm">• AI Voice Agent for instant lead calls & booking</li>
                <li className="text-sm">• Full CRM integration & advanced dashboards</li>
                <li className="text-sm">• Dynamic proposals with payment links</li>
                <li className="text-sm">• Deep competitor intelligence</li>
                <li className="text-sm">• Priority support & quarterly strategic reviews</li>
                <li className="text-sm font-bold text-blue-600">• Setup fee: $2,999</li>
              </ul>
              
              <button 
                className="w-full py-3 px-8 text-white font-bold rounded-full bg-green-600 hover:bg-green-700 transition-colors"
                onClick={() => window.open('https://cal.com/hbosb/30min', '_blank')}
              >
                Unlock
              </button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-200 mb-6">
            Ready to transform your business growth?
          </p>
          <button 
            className="px-8 py-4 text-lg text-white font-bold rounded-full transition-all duration-300"
            style={{ background: "linear-gradient(135deg, #007bff, #16324f)" }}
            onClick={() => window.open('https://cal.com/hbosb/30min', '_blank')}
          >
            Schedule Your Strategy Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default GrowthPlansSection;