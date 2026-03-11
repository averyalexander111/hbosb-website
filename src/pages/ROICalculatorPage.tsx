import React, { lazy, Suspense } from "react";
import HeartbeatNavbar from "@/components/HeartbeatNavbar";
import HeartbeatFooter from "@/components/HeartbeatFooter";
import SEOHead from "@/components/SEOHead";
import AnimatedSection from "@/components/AnimatedSection";
import SubpageHero from "@/components/SubpageHero";

const ROICalculator = lazy(() => import("@/components/ROICalculator"));
const ConnectSection = lazy(() => import("@/components/ConnectSection"));

const ROICalculatorPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="ROI Calculator | Heartbeat of South Bay"
        description="Calculate the return on investment for AI automation and CRM solutions for your local business."
      />
      <HeartbeatNavbar />
      <main className="pt-16">
        <Suspense fallback={<div className="py-8 flex justify-center"><div className="animate-pulse bg-muted rounded-lg h-32 w-full max-w-4xl"></div></div>}>
          <ROICalculator />
        </Suspense>
        <AnimatedSection>
          <Suspense fallback={null}>
            <ConnectSection />
          </Suspense>
        </AnimatedSection>
      </main>
      <HeartbeatFooter />
    </div>
  );
};

export default ROICalculatorPage;
