import React, { Suspense } from "react";
import HeartbeatNavbar from "@/components/HeartbeatNavbar";
import HeartbeatHero from "@/components/HeartbeatHero";
import HeartbeatFooter from "@/components/HeartbeatFooter";
import SEOHead from "@/components/SEOHead";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { lazyWithReload } from "@/lib/lazyWithReload";

const ProblemSection = lazyWithReload(() => import("@/components/ProblemSection"));
const AIOperatingSystem = lazyWithReload(() => import("@/components/AIOperatingSystem"));
const AISystemsSection = lazyWithReload(() => import("@/components/AISystemsSection"));
const ResultsSection = lazyWithReload(() => import("@/components/ResultsSection"));
const ImplementationSection = lazyWithReload(() => import("@/components/ImplementationSection"));
const TestimonialsSection = lazyWithReload(() => import("@/components/TestimonialsSection"));
const FAQSection = lazyWithReload(() => import("@/components/FAQSection"));
const AILeadResponseSection = lazyWithReload(() => import("@/components/AILeadResponseSection"));
const FinalCTASection = lazyWithReload(() => import("@/components/FinalCTASection"));
const ConnectSection = lazyWithReload(() => import("@/components/ConnectSection"));

const Loader = () => (
  <div className="py-8 flex justify-center">
    <div className="animate-pulse bg-border rounded-lg h-32 w-full max-w-4xl" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="AI Lead Conversion Systems for Service Businesses | HBOSB"
        description="Managed lead-response and business systems that help service businesses improve inquiry response, follow-up, handoff, and pipeline visibility."
      />
      <HeartbeatNavbar />
      <main>
        <HeartbeatHero />
        <Suspense fallback={<Loader />}><ProblemSection /></Suspense>
        <Suspense fallback={<Loader />}><AILeadResponseSection /></Suspense>
        <Suspense fallback={<Loader />}><ResultsSection /></Suspense>
        <Suspense fallback={<Loader />}><AISystemsSection /></Suspense>
        <Suspense fallback={<Loader />}><ImplementationSection /></Suspense>
        <Suspense fallback={<Loader />}><TestimonialsSection /></Suspense>
        <Suspense fallback={<Loader />}><FAQSection /></Suspense>
        <Suspense fallback={<Loader />}><FinalCTASection /></Suspense>
        <Suspense fallback={<Loader />}><ConnectSection /></Suspense>
      </main>
      <ScrollToTopButton />
      <HeartbeatFooter />
    </div>
  );
};

export default Index;
