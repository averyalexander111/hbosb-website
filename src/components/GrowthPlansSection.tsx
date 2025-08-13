import React from "react";

const PricingCard = ({ 
  title, 
  price, 
  isPopular = false, 
  features, 
  setupFee,
  gradientFrom,
  gradientTo 
}: {
  title: string;
  price: string;
  isPopular?: boolean;
  features: string[];
  setupFee: string;
  gradientFrom: string;
  gradientTo: string;
}) => (
  <div 
    className={`relative text-center bg-card rounded-2xl transition-transform hover:scale-105 shadow-elegant flex flex-col min-h-[420px] ${
      isPopular ? 'border-2 border-pulse-500 z-10 shadow-elegant-hover' : ''
    }`}
  >
    {isPopular && (
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 font-bold px-4 py-1 z-20 bg-pulse-500 text-white rounded-full text-xs">
        Most Popular
      </div>
    )}
    
    {/* Header */}
    <div 
      className={`relative rounded-t-2xl text-primary-foreground text-center flex-shrink-0 overflow-hidden ${
        isPopular ? 'pt-12 pb-10' : 'py-10'
      }`}
      style={{ 
        background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` 
      }}
    >
      {/* White Wave */}
      <svg 
        className="absolute bottom-0 left-0 w-full h-5 text-primary-foreground fill-current"
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
      >
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" />
      </svg>
      
      {/* Price */}
      <div className="relative z-10">
        <div className="text-5xl font-bold leading-tight mb-2">
          <span className="text-sm align-top">$</span>{price}<span className="text-sm italic ml-2">/ month</span>
        </div>
        <p className="text-xs uppercase tracking-widest font-bold">{title}</p>
      </div>
    </div>
    
    {/* Features List */}
    <div className="flex-1 flex flex-col p-6">
      <ul className="list-none text-left mb-6 space-y-3 flex-1 text-card-foreground">
        {features.map((feature, index) => (
          <li key={index} className="py-1 text-sm flex items-start">
            <span className="text-primary mr-2 font-bold">•</span>
            {feature}
          </li>
        ))}
        <li className="py-1 text-sm font-bold text-primary">
          <span className="text-primary mr-2 font-bold">•</span>
          Setup fee: {setupFee}
        </li>
      </ul>
      
      <div className="flex justify-center mt-auto">
        <button 
          className="py-3 px-8 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-full transition-all duration-300 hover:from-green-600 hover:to-green-700 hover:scale-105"
          onClick={() => window.open("https://cal.com/hbosb/30min", "_blank")}
        >
          Unlock
        </button>
      </div>
    </div>
  </div>
);

const GrowthPlansSection = React.memo(() => {
  const plans = [
    {
      title: "Core",
      price: "597",
      features: [
        "Automated follow-ups & reactivation campaigns",
        "Essential client database & meeting note summaries",
        "Essential reporting dashboard",
        "Simple setup—no tech skills needed"
      ],
      setupFee: "$749",
      gradientFrom: "hsl(var(--primary))",
      gradientTo: "hsl(var(--foreground))"
    },
    {
      title: "Plus",
      price: "1,297",
      isPopular: true,
      features: [
        "Everything in Core",
        "Personalized client journeys & branded proposals",
        "Advanced meeting notes with sales insights",
        "Competitor snapshots & enhanced review management",
        "Monthly strategy call"
      ],
      setupFee: "$1,499",
      gradientFrom: "hsl(var(--primary))",
      gradientTo: "hsl(var(--secondary))"
    },
    {
      title: "Pro",
      price: "2,497",
      features: [
        "Everything in Plus",
        "AI Voice Agent for instant lead calls & booking",
        "Full CRM integration & advanced dashboards",
        "Dynamic proposals with payment links",
        "Deep competitor intelligence",
        "Priority support & quarterly strategic reviews"
      ],
      setupFee: "$2,999",
      gradientFrom: "hsl(var(--secondary))",
      gradientTo: "hsl(var(--foreground))"
    }
  ];

  const comparisonData = [
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
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-primary to-foreground">
      {/* Pricing Header and Plans Section */}
      <div className="relative text-center text-primary-foreground">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-foreground">
              Growth Plans
            </h1>
            <p className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto">
              Choose the perfect plan to accelerate your business growth
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {plans.map((plan, index) => (
              <PricingCard
                key={index}
                title={plan.title}
                price={plan.price}
                isPopular={plan.isPopular}
                features={plan.features}
                setupFee={plan.setupFee}
                gradientFrom={plan.gradientFrom}
                gradientTo={plan.gradientTo}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Comparison Table Section */}
      <div className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="overflow-x-auto bg-card rounded-lg shadow-elegant">
            <table className="min-w-full border-collapse bg-card">
              <thead>
                <tr>
                  <th className="text-left font-bold bg-muted p-4 border-b-2 border-border text-card-foreground">Feature</th>
                  <th className="text-center font-bold bg-muted p-4 border-b-2 border-border text-card-foreground">Core</th>
                  <th className="text-center font-bold bg-muted p-4 border-b-2 border-border text-card-foreground">Plus</th>
                  <th className="text-center font-bold bg-muted p-4 border-b-2 border-border text-card-foreground">Pro</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="hover:bg-muted transition-colors">
                    <td className="font-medium text-card-foreground p-3 border-b border-border">{row.feature}</td>
                    <td className="text-center text-muted-foreground p-3 border-b border-border text-sm">{row.core}</td>
                    <td className="text-center text-muted-foreground p-3 border-b border-border text-sm">{row.plus}</td>
                    <td className="text-center text-muted-foreground p-3 border-b border-border text-sm">{row.pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground mb-6">
              Ready to transform your business growth?
            </p>
            <button 
              className="px-8 py-4 text-lg text-primary-foreground font-bold rounded-full transition-all duration-300 hover:scale-105 bg-gradient-to-r from-primary to-foreground"
              onClick={() => window.open("https://cal.com/hbosb/30min", "_blank")}
            >
              Schedule Your Strategy Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

GrowthPlansSection.displayName = "GrowthPlansSection";

export default GrowthPlansSection;