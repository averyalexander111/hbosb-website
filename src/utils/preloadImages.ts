// Preload critical images for better performance
const preloadImage = (src: string): void => {
  const img = new Image();
  img.src = src;
};

// Critical images that should be preloaded
const criticalImages = [
  "/lovable-uploads/f09434ec-e31e-4a1b-8ea9-9028469da094.png", // Hero image
  "/lovable-uploads/12a9d3c2-5a34-4ec2-982b-4ee2dc3c99eb.png", // Logo
];

export const preloadCriticalImages = (): void => {
  if (typeof window !== "undefined") {
    criticalImages.forEach(preloadImage);
  }
};

export default preloadCriticalImages;