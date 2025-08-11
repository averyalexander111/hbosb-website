import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-auto-scroll";

const TechnologyCarousel = () => {
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
      name: "Notion",
      icon: "/lovable-uploads/d8d910bf-a29e-439d-975b-721cf8b16d73.png"
    },
    {
      name: "Google",
      icon: "/lovable-uploads/508bd167-4c17-4f66-9bc4-1194b4df23e9.png"
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: "#d1e8ff" }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
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
                    className={`object-contain filter hover:scale-110 transition-transform duration-300 ${
                      tech.name === "Gradient Heart" 
                        ? "w-20 h-20 md:w-24 md:h-24" 
                        : "w-16 h-16 md:w-20 md:h-20"
                    }`}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default TechnologyCarousel;