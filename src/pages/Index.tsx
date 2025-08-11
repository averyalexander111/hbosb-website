
import React, { useEffect } from "react";
import HeartbeatNavbar from "@/components/HeartbeatNavbar";
import HeartbeatHero from "@/components/HeartbeatHero";
import TechnologyCarousel from "@/components/TechnologyCarousel";
import BaySignalSection from "@/components/BaySignalSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProgramsSection from "@/components/ProgramsSection";
import FAQSection from "@/components/FAQSection";
import GrowthPlansSection from "@/components/GrowthPlansSection";
import ConnectSection from "@/components/ConnectSection";
import HeartbeatFooter from "@/components/HeartbeatFooter";

const Index = () => {
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
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        // Increased offset to account for mobile nav
        const offset = window.innerWidth < 768 ? 100 : 80;
        
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen">
      <HeartbeatNavbar />
      <main>
        <HeartbeatHero />
        <TechnologyCarousel />
        <BaySignalSection />
        <TestimonialsSection />
        <ProgramsSection />
        <FAQSection />
        <GrowthPlansSection />
        <ConnectSection />
      </main>
      <HeartbeatFooter />
    </div>
  );
};

export default Index;
