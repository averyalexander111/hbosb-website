
import React, { useEffect, lazy, Suspense } from "react";
import HeartbeatNavbar from "@/components/HeartbeatNavbar";
import HeartbeatHero from "@/components/HeartbeatHero";
import HeartbeatFooter from "@/components/HeartbeatFooter";
import { preloadCriticalImages, preloadFonts } from "@/utils/preloadImages";
import { usePerformanceOptimization } from "@/hooks/usePerformanceOptimization";
import SEOHead from "@/components/SEOHead";

// Lazy load non-critical components
const TechnologyCarousel = lazy(() => import("@/components/TechnologyCarousel"));
const BaySignalSection = lazy(() => import("@/components/BaySignalSection"));
const ROICalculator = lazy(() => import("@/components/ROICalculator"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const ConnectSection = lazy(() => import("@/components/ConnectSection"));

const Index = () => {
  // Enable performance optimizations
  usePerformanceOptimization();
  // Preload critical images and fonts for better performance
  useEffect(() => {
    preloadCriticalImages();
    preloadFonts();
  }, []);

  // Initialize intersection observer to detect when elements enter viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    // This helps ensure smooth scrolling for the anchor links
    const handleAnchorClick = (e: Event) => {
      e.preventDefault();
      
      const target = e.target as HTMLAnchorElement;
      const targetId = target.getAttribute('href')?.substring(1);
      if (!targetId) return;
      
      const targetElement = document.getElementById(targetId);
      if (!targetElement) return;
      
      // Increased offset to account for mobile nav
      const offset = window.innerWidth < 768 ? 100 : 80;
      
      window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior: 'smooth'
      });
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });
    
    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  // Component loader for lazy-loaded sections
  const SectionLoader = () => (
    <div className="py-8 flex justify-center">
      <div className="animate-pulse bg-gray-200 rounded-lg h-32 w-full max-w-4xl"></div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <SEOHead />
      <HeartbeatNavbar />
      <main>
        <HeartbeatHero />
        <Suspense fallback={<SectionLoader />}>
          <TechnologyCarousel />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <BaySignalSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <TestimonialsSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <ROICalculator />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <FAQSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <ConnectSection />
        </Suspense>
      </main>
      <HeartbeatFooter />
    </div>
  );
};

export default Index;
