import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PreROICTA = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Calculate your potential ROI and see how AI can accelerate your growth. 
            Our proven strategies have helped businesses increase revenue by up to 300%.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="group bg-white text-primary hover:bg-white/90"
              asChild
            >
              <a href="#roi-calculator">
                Calculate Your ROI
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary"
              asChild
            >
              <a 
                href="https://cal.com/hbosb/30min" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Book Free Consultation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreROICTA;