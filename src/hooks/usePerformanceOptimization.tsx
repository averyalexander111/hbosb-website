import { useEffect } from 'react';

interface PerformanceConfig {
  enableResourceHints?: boolean;
  enablePrefetch?: boolean;
  deferNonCriticalJS?: boolean;
}

export const usePerformanceOptimization = (config: PerformanceConfig = {}) => {
  const {
    enableResourceHints = true,
    enablePrefetch = true,
    deferNonCriticalJS = true
  } = config;

  useEffect(() => {
    if (!enableResourceHints) return;

    // Add DNS prefetch for external resources
    const dnsHints = [
      'fonts.googleapis.com',
      'fonts.gstatic.com'
    ];

    dnsHints.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = `//${domain}`;
      document.head.appendChild(link);
    });

    // Preconnect to critical external domains
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];

    preconnectDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

  }, [enableResourceHints]);

  useEffect(() => {
    if (!enablePrefetch) return;

    // Prefetch likely next pages
    const prefetchPages = [
      '/about-us',
      '/privacy-policy',
      '/terms-and-conditions'
    ];

    const timeoutId = setTimeout(() => {
      prefetchPages.forEach(page => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = page;
        document.head.appendChild(link);
      });
    }, 3000); // Wait 3 seconds before prefetching

    return () => clearTimeout(timeoutId);
  }, [enablePrefetch]);

  useEffect(() => {
    if (!deferNonCriticalJS) return;

    // Defer non-critical scripts
    const scripts = document.querySelectorAll('script[data-defer]');
    scripts.forEach(script => {
      if (script instanceof HTMLScriptElement) {
        script.defer = true;
      }
    });
  }, [deferNonCriticalJS]);

  // Optimize web vitals
  useEffect(() => {
    // Reduce layout shifts by setting explicit dimensions
    const images = document.querySelectorAll('img:not([width]):not([height])');
    images.forEach(img => {
      if (img instanceof HTMLImageElement && !img.width && !img.height) {
        img.style.aspectRatio = '16/9';
        img.style.objectFit = 'cover';
      }
    });
  }, []);
};

// Helper function to measure performance (simplified version)
export const measurePerformance = () => {
  if (typeof window === 'undefined') return;

  // Simple performance logging
  window.addEventListener('load', () => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      console.log('Page Load Time:', navigation.loadEventEnd - navigation.loadEventStart);
      console.log('DOM Ready Time:', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart);
    }
  });
};