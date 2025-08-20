import React from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'fade-in' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'scale-in' | 'scale-in-bounce' | 'rotate-in' | 'blur-in' | 'flip-in';
  staggerGroup?: string;
  className?: string;
}

/**
 * AnimatedSection - A wrapper component that adds scroll-triggered animations
 * 
 * @param children - The content to animate
 * @param animation - The type of animation to apply (default: 'fade-in')
 * @param staggerGroup - If provided, elements with the same staggerGroup will animate in sequence
 * @param className - Additional CSS classes
 */
export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = 'fade-in',
  staggerGroup,
  className = ''
}) => {
  const dataAttributes = {
    'data-animation': animation,
    ...(staggerGroup && { 'data-stagger-group': staggerGroup })
  };

  return (
    <div 
      className={`opacity-0 ${className}`}
      {...dataAttributes}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;