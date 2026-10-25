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
const TechnologyCarousel = lazyWithReload(() => import("@/components/TechnologyCarousel"));
const TestimonialsSection = lazyWithReload(() => import("@/components/TestimonialsSection"));
const FAQSection = lazyWithReload(() => import("@/components/FAQSection"));
const AILeadResponseSection = lazyWithReload(() => import("@/components/AILeadResponseSection"));
const SystemWalkthroughSection = lazyWithReload(() => import("@/components/SystemWalkthroughSection"));
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
        title="AI Revenue Systems for Service Businesses | Heartbeat of South Bay"
        description="We build and manage AI revenue systems for service businesses, supporting lead capture, follow-up, and CRM visibility. Start with a complimentary assessment."
        ogTitle="AI Revenue Systems Built for Service Businesses | Heartbeat of South Bay"
        ogDescription="We build and manage AI revenue systems for service businesses, supporting lead capture, follow-up, and CRM visibility. Start with a complimentary assessment."
        canonicalUrl="https://heartbeatofsouthbay.com/"
      />
      <HeartbeatNavbar />
      <main>
        <HeartbeatHero />
        <Suspense fallback={<Loader />}><ProblemSection /></Suspense>
        <Suspense fallback={<Loader />}><AIOperatingSystem /></Suspense>
        <Suspense fallback={<Loader />}><AISystemsSection /></Suspense>
        
        <Suspense fallback={<Loader />}><ResultsSection /></Suspense>
        <Suspense fallback={<Loader />}><ImplementationSection /></Suspense>
        <Suspense fallback={<Loader />}><TechnologyCarousel /></Suspense>
        <Suspense fallback={<Loader />}><TestimonialsSection /></Suspense>
        <Suspense fallback={<Loader />}><FAQSection /></Suspense>
        <Suspense fallback={<Loader />}><AILeadResponseSection /></Suspense>
        <Suspense fallback={<Loader />}><SystemWalkthroughSection /></Suspense>
        <Suspense fallback={<Loader />}><FinalCTASection /></Suspense>
        <Suspense fallback={<Loader />}><ConnectSection /></Suspense>
      </main>
      <ScrollToTopButton />
      <HeartbeatFooter />
    </div>
  );
};

export default Index;
