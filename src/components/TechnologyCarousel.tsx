import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-auto-scroll";

const TechnologyCarousel = React.memo(() => {
  const technologies = [
    { name: "Supabase", icon: "/lovable-uploads/bbe3fb35-d530-4ed4-955d-ea333847387a.png" },
    { name: "Gradient Heart", icon: "/lovable-uploads/a9488bc1-c20b-4ebd-81a3-dab6badda94e.png" },
    { name: "Network", icon: "/lovable-uploads/6df45b1f-a2c5-44fb-b9b7-a78890424d8b.png" },
    { name: "Starburst", icon: "/lovable-uploads/d12e40d6-2664-4b67-9258-3bd483100057.png" },
    { name: "ElevenLabs", icon: "/lovable-uploads/elevenlabs-icon.png" },
    { name: "Notion", icon: "/lovable-uploads/d8d910bf-a29e-439d-975b-721cf8b16d73.png" },
    { name: "Google", icon: "/lovable-uploads/508bd167-4c17-4f66-9bc4-1194b4df23e9.png" },
    { name: "Google Antigravity", icon: "/lovable-uploads/google-antigravity-icon.png" },
  ];

  return (
    <section className="py-20 bg-[#0a1628]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-3">
          Built With Technology You Already Trust
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-xl mx-auto">
          We integrate seamlessly with the tools your business already relies on.
        </p>

        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[
            Autoplay({ stopOnInteraction: false, stopOnMouseEnter: false }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {[...technologies, ...technologies, ...technologies].map((tech, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/3 md:basis-1/4 lg:basis-1/6">
                <div className="flex justify-center items-center p-4">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-16 h-16 md:w-20 md:h-20 object-contain opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300"
                    loading="eager"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
});

TechnologyCarousel.displayName = "TechnologyCarousel";

export default TechnologyCarousel;
