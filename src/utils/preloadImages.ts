// Enhanced image preloading with lazy loading support
const preloadImage = (src: string, priority: "high" | "low" = "low"): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.loading = priority === "high" ? "eager" : "lazy";
    img.decoding = "async";
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

// Critical images that should be preloaded immediately
const criticalImages = [
  "/lovable-uploads/f09434ec-e31e-4a1b-8ea9-9028469da094.png", // Hero image
  "/lovable-uploads/12a9d3c2-5a34-4ec2-982b-4ee2dc3c99eb.png", // Logo
  "/Header-background.webp", // Header background
];

// Secondary images for later preloading
const secondaryImages = [
  "/background-section1.png",
  "/background-section2.png", 
  "/background-section3.png",
  "/hero-image.jpg",
];

export const preloadCriticalImages = (): void => {
  if (typeof window !== "undefined") {
    // Preload critical images immediately
    criticalImages.forEach(src => preloadImage(src, "high"));
    
    // Preload secondary images after a delay
    setTimeout(() => {
      secondaryImages.forEach(src => preloadImage(src, "low"));
    }, 2000);
  }
};

// Preload fonts for better performance
export const preloadFonts = (): void => {
  if (typeof window !== "undefined") {
    const fonts = [
      "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
      "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap",
      "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Raleway:wght@400;700&display=swap"
    ];
    
    fonts.forEach(href => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "style";
      link.href = href;
      document.head.appendChild(link);
    });
  }
};

export default preloadCriticalImages;