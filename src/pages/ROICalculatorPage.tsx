import { lazy, Suspense } from "react";
import HeartbeatNavbar from "@/components/HeartbeatNavbar";
import HeartbeatFooter from "@/components/HeartbeatFooter";
import SEOHead from "@/components/SEOHead";
import SubpageHero from "@/components/SubpageHero";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const ROICalculator = lazy(() => import("@/components/ROICalculator"));

const ROICalculatorPage = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Business Impact Scenario Calculator | HBOSB"
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
        <section className="bg-navy py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-foreground">Find the Gaps Behind the Numbers</h2>
            <p className="mt-5 text-lg text-navy-foreground/70 leading-relaxed">
              A scenario can help frame the economic importance of better lead handling, but it does not diagnose the actual process. The free AI Revenue System Assessment helps identify where response, follow-up, tracking, or handoff may be breaking down.
            </p>
            <ul className="mt-8 space-y-3 text-left max-w-xl mx-auto">
              {["Where response or follow-up may be inconsistent", "Which operational information matters", "What practical next step may fit"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-navy-foreground/80">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/assessment" className="group mt-9 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-semibold text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-navy">
              Start Your Free AI Revenue System Assessment
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>
      </main>
      <HeartbeatFooter />
    </div>
  );
};

export default ROICalculatorPage;
