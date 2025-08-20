import React from 'react';
import { AnimatedSection } from './AnimatedSection';

/**
 * StaggeredAnimationDemo - Demonstrates how to use staggered animations
 * This component can be used in any section that needs multiple elements to animate sequentially
 */
export const StaggeredAnimationDemo: React.FC = () => {
  const features = [
    { title: "Dynamic Animations", description: "Multiple entrance effects as you scroll" },
    { title: "Staggered Reveals", description: "Elements appear one after another" },
    { title: "Performance Optimized", description: "Will-change and transform-based animations" },
    { title: "Accessibility Aware", description: "Respects reduced motion preferences" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="slide-up" className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Enhanced Scroll Animations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch as elements smoothly animate into view with various entrance effects
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((feature, index) => (
            <AnimatedSection
              key={index}
              animation="scale-in"
              staggerGroup="features"
              className="bg-card rounded-lg p-6 shadow-elegant hover:shadow-elegant-hover transition-shadow"
            >
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedSection animation="slide-right" className="text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Targeted Effects</h3>
            <p className="text-muted-foreground">Each section can have its own unique animation type</p>
          </AnimatedSection>

          <AnimatedSection animation="blur-in" className="text-center">
            <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Smooth Performance</h3>
            <p className="text-muted-foreground">Optimized for 60fps animations with proper cleanup</p>
          </AnimatedSection>

          <AnimatedSection animation="rotate-in" className="text-center">
            <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">♿</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Accessibility First</h3>
            <p className="text-muted-foreground">Respects user preferences for reduced motion</p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default StaggeredAnimationDemo;