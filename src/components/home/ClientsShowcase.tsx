"use client";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { clients } from "@/data/clients";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TitleAnimation from "../ui/TitleAnimation";
import TextAnimation from "../ui/TextAnimation";

export default function ClientsShowcase() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      dragFree: true,
    },
    [
      AutoScroll({
        speed: 1,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  if (clients.length === 0) {
    return null;
  }

  // Duplicate clients for seamless looping effect
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="bg-background text-foreground overflow-hidden w-full py-16 md:py-24">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-start items-start flex-col mb-12 md:mb-16">
          <TitleAnimation
            as="h2"
            className="text-2xl text-center lg:text-start md:text-4xl lg:text-6xl font-oswald font-normal text-foreground tracking-tighter leading-tight"
          >
            Trusted By Industry Leaders
          </TitleAnimation>
          <div className="mt-2 lg:mt-6 w-20 lg:w-40 h-1 bg-foreground" />
        </div>

        <TextAnimation
          className="max-w-3xl text-sm md:text-lg text-foreground/60 leading-relaxed mb-16"
          animationType="fadeUp"
          delay={0.1}
        >
          We partner with forward-thinking organizations to deliver innovative
          solutions and drive digital transformation.
        </TextAnimation>

        {/* Slider Container */}
        <div className="relative group">
          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary hover:text-primary-foreground -translate-x-1/2"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary hover:text-primary-foreground translate-x-1/2"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Embla Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {duplicatedClients.map((client, index) => (
                <div
                  key={`${client.id}-${index}`}
                  className="flex-none w-[280px] md:w-[320px] pl-4 md:pl-6"
                >
                  <a
                    href={client.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center h-[200px] md:h-[240px] p-6 rounded-xl bg-card hover:bg-accent transition-all duration-300 cursor-pointer group/card"
                  >
                    {/* Logo Container - Fixed Height */}
                    <div className="flex-1 flex items-center justify-center w-full mb-4">
                      <div className="relative w-full h-[100px] md:h-[120px] flex items-center justify-center">
                        <img
                          src={client.logo}
                          alt={client.name}
                          className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover/card:scale-110"
                        />
                      </div>
                    </div>

                    {/* Name - Fixed Height with Line Clamp */}
                    <div className="h-[48px] flex items-center justify-center">
                      <h3 className="text-sm md:text-base font-medium text-foreground text-center line-clamp-2 transition-colors duration-300 group-hover/card:text-primary">
                        {client.name}
                      </h3>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient Overlays for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
