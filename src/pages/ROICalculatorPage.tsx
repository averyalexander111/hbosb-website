import { lazy, Suspense } from "react";
import HeartbeatNavbar from "@/components/HeartbeatNavbar";
import HeartbeatFooter from "@/components/HeartbeatFooter";
import SEOHead from "@/components/SEOHead";
import SubpageHero from "@/components/SubpageHero";
import FinalCTASection from "@/components/FinalCTASection";

const ROICalculator = lazy(() => import("@/components/ROICalculator"));

const ROICalculatorPage = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Scenario Model | Heartbeat of South Bay"
        description="Model a potential monthly scenario for an AI Lead Conversion System using your own assumptions. An estimation tool, not a forecast or guarantee."
      />
      <HeartbeatNavbar />
      <main>
        <SubpageHero
          title="Scenario Model"
          subtitle="Model a potential monthly scenario using your own assumptions. This is an estimation tool, not a forecast or guarantee."
        />
        <Suspense fallback={<div className="py-8 flex justify-center"><div className="animate-pulse bg-muted rounded-lg h-32 w-full max-w-4xl"></div></div>}>
          <ROICalculator />
        </Suspense>
        <div className="bg-background flex justify-center py-8">
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-navy/20 to-transparent" />
        </div>
        <FinalCTASection />
      </main>
      <HeartbeatFooter />
    </div>
  );
};

export default ROICalculatorPage;
