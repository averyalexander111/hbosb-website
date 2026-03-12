import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-auto-scroll";
import logoGreenGeometric from "@/assets/logo-green-geometric.png";
import twilioLogo from "@/assets/twilio-logo.png";
import airtableLogo from "@/assets/airtable-logo.png";

const TechnologyCarousel = React.memo(() => {
  const technologies = [
    { name: "Supabase", icon: "/lovable-uploads/bbe3fb35-d530-4ed4-955d-ea333847387a.png" },
    { name: "Gradient Heart", icon: "/lovable-uploads/a9488bc1-c20b-4ebd-81a3-dab6badda94e.png" },
    { name: "Network", icon: "/lovable-uploads/6df45b1f-a2c5-44fb-b9b7-a78890424d8b.png" },
    { name: "Starburst", icon: "/lovable-uploads/d12e40d6-2664-4b67-9258-3bd483100057.png" },
    { name: "ElevenLabs", icon: "/lovable-uploads/elevenlabs-icon.png" },
    { name: "Notion", icon: "/lovable-uploads/d8d910bf-a29e-439d-975b-721cf8b16d73.png" },
    { name: "Google", icon: "/lovable-uploads/508bd167-4c17-4f66-9bc4-1194b4df23e9.png" },
    { name: "Green Geometric", icon: logoGreenGeometric },
    { name: "Google Antigravity", icon: "/lovable-uploads/google-antigravity-icon.png" },
    { name: "Twilio", icon: twilioLogo },
    { name: "Airtable", icon: airtableLogo },
  ];

  return (
    <section className="py-24 bg-[hsl(var(--navy))]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-navy-foreground mb-3">
          Built With Technology You Already Trust
        </h2>
        <p className="text-center text-navy-foreground/50 mb-14 max-w-xl mx-auto">
          We integrate seamlessly with the tools your business already relies on.
        </p>

        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[
            Autoplay({ stopOnInteraction: false, stopOnMouseEnter: false }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-3 md:-ml-5">
            {[...technologies, ...technologies, ...technologies].map((tech, index) => (
              <CarouselItem key={index} className="pl-3 md:pl-5 basis-1/3 md:basis-1/4 lg:basis-1/6">
                <div className="group flex items-center justify-center p-5">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-14 h-14 md:w-18 md:h-18 object-contain opacity-100 group-hover:scale-110 transition-all duration-300"
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
