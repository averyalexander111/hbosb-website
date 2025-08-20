import { useEffect, useRef, useCallback } from 'react';

export type AnimationType = 
  | 'fade-in'
  | 'slide-up'
  | 'slide-down'
  | 'slide-left'
  | 'slide-right'
  | 'scale-in'
  | 'scale-in-bounce'
  | 'rotate-in'
  | 'blur-in'
  | 'flip-in';

export interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  staggerDelay?: number;
  enableReducedMotion?: boolean;
}

export const useScrollAnimations = (options: ScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    staggerDelay = 100,
    enableReducedMotion = true
  } = options;

  const observerRef = useRef<IntersectionObserver | null>(null);
  const animatedElements = useRef<Set<Element>>(new Set());

  const getAnimationClass = useCallback((animationType: AnimationType): string => {
    const animationMap: Record<AnimationType, string> = {
      'fade-in': 'animate-fade-in',
      'slide-up': 'animate-slide-up',
      'slide-down': 'animate-slide-down',
      'slide-left': 'animate-slide-left',
      'slide-right': 'animate-slide-right',
      'scale-in': 'animate-scale-in',
      'scale-in-bounce': 'animate-scale-in-bounce',
      'rotate-in': 'animate-rotate-in',
      'blur-in': 'animate-blur-in',
      'flip-in': 'animate-flip-in'
    };
    return animationMap[animationType];
  }, []);

  const animateElement = useCallback((element: Element, animationType: AnimationType, delay: number = 0) => {
    // Check for reduced motion preference
    if (enableReducedMotion && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      element.classList.add('opacity-100');
      return;
    }

    const animationClass = getAnimationClass(animationType);
    
    // Add initial hidden state
    element.classList.add('opacity-0');
    
    // Apply animation with delay
    setTimeout(() => {
      element.classList.remove('opacity-0');
      element.classList.add(animationClass);
      
      // Add performance optimization
      const animationElement = element as HTMLElement;
      animationElement.style.willChange = 'transform, opacity';
      
      // Clean up will-change after animation
      const animationDuration = 700; // Match our CSS animation duration
      setTimeout(() => {
        animationElement.style.willChange = 'auto';
      }, animationDuration);
      
    }, delay);
  }, [getAnimationClass, enableReducedMotion]);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !animatedElements.current.has(entry.target)) {
        const element = entry.target;
        animatedElements.current.add(element);
        
        // Get animation type from data attribute
        const animationType = (element.getAttribute('data-animation') as AnimationType) || 'fade-in';
        
        // Handle staggered animations for groups
        const staggerGroup = element.getAttribute('data-stagger-group');
        if (staggerGroup) {
          const groupElements = document.querySelectorAll(`[data-stagger-group="${staggerGroup}"]`);
          groupElements.forEach((groupElement, index) => {
            if (!animatedElements.current.has(groupElement)) {
              animatedElements.current.add(groupElement);
              const delay = index * staggerDelay;
              animateElement(groupElement, animationType, delay);
            }
          });
        } else {
          // Single element animation
          animateElement(element, animationType);
        }
        
        // Unobserve the element after animation
        observerRef.current?.unobserve(element);
      }
    });
  }, [animateElement, staggerDelay]);

  const initializeObserver = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin
    });

    // Observe all elements with animation attributes
    const elementsToObserve = document.querySelectorAll('[data-animation]');
    elementsToObserve.forEach((element) => {
      if (!animatedElements.current.has(element)) {
        observerRef.current?.observe(element);
      }
    });
  }, [handleIntersection, threshold, rootMargin]);

  const resetAnimations = useCallback(() => {
    animatedElements.current.clear();
    initializeObserver();
  }, [initializeObserver]);

  useEffect(() => {
    initializeObserver();

    // Re-initialize when new content is added
    const mutationObserver = new MutationObserver(() => {
      const newElements = document.querySelectorAll('[data-animation]:not(.opacity-0):not([class*="animate-"])');
      if (newElements.length > 0) {
        setTimeout(initializeObserver, 100); // Small delay to ensure DOM is ready
      }
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observerRef.current?.disconnect();
      mutationObserver.disconnect();
    };
  }, [initializeObserver]);

  return {
    resetAnimations,
    animateElement: (element: Element, animationType: AnimationType, delay?: number) => 
      animateElement(element, animationType, delay)
  };
};