import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-auto-scroll";


const TechnologyCarousel = React.memo(() => {
  const technologies = [
    {
      name: "Supabase",
      icon: "/lovable-uploads/bbe3fb35-d530-4ed4-955d-ea333847387a.png"
    },
    {
      name: "Gradient Heart",
      icon: "/lovable-uploads/a9488bc1-c20b-4ebd-81a3-dab6badda94e.png"
    },
    {
      name: "Network",
      icon: "/lovable-uploads/6df45b1f-a2c5-44fb-b9b7-a78890424d8b.png"
    },
    {
      name: "Starburst",
      icon: "/lovable-uploads/d12e40d6-2664-4b67-9258-3bd483100057.png"
    },
    {
      name: "ElevenLabs",
      icon: "/lovable-uploads/elevenlabs-icon.png"
    },
    {
      name: "Notion",
      icon: "/lovable-uploads/d8d910bf-a29e-439d-975b-721cf8b16d73.png"
    },
    {
      name: "Google",
      icon: "/lovable-uploads/508bd167-4c17-4f66-9bc4-1194b4df23e9.png"
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#d1e8ff' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
          Built with technology you love
        </h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              stopOnInteraction: false,
              stopOnMouseEnter: false,
            })
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {/* Duplicate items for seamless loop */}
            {[...technologies, ...technologies, ...technologies].map((tech, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/3 md:basis-1/4 lg:basis-1/6">
                <div className="flex justify-center items-center p-4">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-16 h-16 md:w-20 md:h-20 object-contain filter hover:scale-110 transition-transform duration-300"
                    loading="eager"
                    fetchPriority="high"
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