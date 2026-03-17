import React, { lazy, Suspense } from "react";
import HeartbeatNavbar from "@/components/HeartbeatNavbar";
import HeartbeatHero from "@/components/HeartbeatHero";
import HeartbeatFooter from "@/components/HeartbeatFooter";
import SEOHead from "@/components/SEOHead";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const ProblemSection = lazy(() => import("@/components/ProblemSection"));
const AIOperatingSystem = lazy(() => import("@/components/AIOperatingSystem"));
const AISystemsSection = lazy(() => import("@/components/AISystemsSection"));

const ResultsSection = lazy(() => import("@/components/ResultsSection"));
const ImplementationSection = lazy(() => import("@/components/ImplementationSection"));
const TechnologyCarousel = lazy(() => import("@/components/TechnologyCarousel"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const AILeadResponseSection = lazy(() => import("@/components/AILeadResponseSection"));
const FinalCTASection = lazy(() => import("@/components/FinalCTASection"));
const ConnectSection = lazy(() => import("@/components/ConnectSection"));

const Loader = () => (
  <div className="py-8 flex justify-center">
    <div className="animate-pulse bg-border rounded-lg h-32 w-full max-w-4xl" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead />
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
        <Suspense fallback={<Loader />}><FinalCTASection /></Suspense>
        <Suspense fallback={<Loader />}><ConnectSection /></Suspense>
      </main>
      <ScrollToTopButton />
      <HeartbeatFooter />
    </div>
  );
};

export default Index;
