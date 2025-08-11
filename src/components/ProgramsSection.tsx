import React from "react";
import { ArrowRight } from "lucide-react";

const ProgramsSection = () => {
  const programs = [
    {
      title: "Lead Generation & Sales Automation",
      image: "/lovable-uploads/12a9d3c2-5a34-4ec2-982b-4ee2dc3c99eb.png",
      features: [
        "AI-Powered Lead Generation",
        "Personalized Outreach Automation", 
        "Competitor Intelligence Insights"
      ]
    },
    {
      title: "Reputation & Brand Management",
      image: "/lovable-uploads/6b4a2f6b-2193-419c-9cc0-145cc7b0e003.png",
      features: [
        "Advanced Review Management",
        "Social Listening & Analytics",
        "AI-Driven Sentiment Analysis",
        "Customer Feedback Integration"
      ]
    },
    {
      title: "Custom Web & Digital Solutions",
      image: "/lovable-uploads/d8d910bf-a29e-439d-975b-721cf8b16d73.png",
      features: [
        "Website Development",
        "Social Media Management",
        "Custom Design Services",
        "AI-Powered Newsletters"
      ]
    },
    {
      title: "Operational Infrastructures",
      image: "/lovable-uploads/508bd167-4c17-4f66-9bc4-1194b4df23e9.png",
      features: [
        "AI Appointment Scheduling Tools",
        "CRM Integration & Automation",
        "Workflow Optimization"
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our AI-Powered Programs
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-contain"
                />
              </div>
              
              <h3 className="text-lg font-bold text-foreground mb-4 text-center">
                {program.title}
              </h3>
              
              <ul className="space-y-2">
                {program.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-700 flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#consultation"
            className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors duration-300"
          >
            Explore Our Solutions
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;