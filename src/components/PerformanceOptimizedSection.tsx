import React, { ComponentType, ReactNode } from 'react';

interface PerformanceOptimizedSectionProps {
  children: ReactNode;
  className?: string;
  critical?: boolean;
}

// Higher-order component to wrap sections with performance optimizations
export const withPerformanceOptimization = <P extends object>(
  Component: ComponentType<P>,
  options: { critical?: boolean } = {}
) => {
  const WrappedComponent = (props: P) => {
    return (
      <div 
        style={{
          contentVisibility: options.critical ? 'visible' : 'auto',
          containIntrinsicSize: options.critical ? 'none' : '1000px'
        }}
      >
        <Component {...props} />
      </div>
    );
  };
  
  WrappedComponent.displayName = `withPerformanceOptimization(${Component.displayName || Component.name})`;
  return WrappedComponent;
};

// Performance optimized section wrapper
const PerformanceOptimizedSection: React.FC<PerformanceOptimizedSectionProps> = ({
  children,
  className = '',
  critical = false
}) => {
  return (
    <section 
      className={className}
      style={{
        contentVisibility: critical ? 'visible' : 'auto',
        containIntrinsicSize: critical ? 'none' : '500px'
      }}
    >
      {children}
    </section>
  );
};

export default PerformanceOptimizedSection;