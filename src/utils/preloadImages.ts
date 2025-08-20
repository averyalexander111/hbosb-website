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
  // Technology carousel icons
  "/lovable-uploads/bbe3fb35-d530-4ed4-955d-ea333847387a.png", // Supabase
  "/lovable-uploads/a9488bc1-c20b-4ebd-81a3-dab6badda94e.png", // Gradient Heart
  "/lovable-uploads/6df45b1f-a2c5-44fb-b9b7-a78890424d8b.png", // Network
  "/lovable-uploads/d12e40d6-2664-4b67-9258-3bd483100057.png", // Starburst
  "/lovable-uploads/d8d910bf-a29e-439d-975b-721cf8b16d73.png", // Notion
  "/lovable-uploads/508bd167-4c17-4f66-9bc4-1194b4df23e9.png", // Google
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