"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { clients } from "@/data/clients";
import TitleAnimation from "../ui/TitleAnimation";
import TextAnimation from "../ui/TextAnimation";

gsap.registerPlugin(ScrollTrigger);

export default function ClientsShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const validCards = cardsRef.current.filter((el) => el !== null);
      if (validCards.length > 0) {
        gsap.fromTo(
          validCards,
          {
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  if (clients.length === 0) {
    return null;
  }

  return (
    <section
      ref={sectionRef}
      className="bg-background text-foreground overflow-hidden w-full"
    >
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

        {/* Clients Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {clients.map((client, index) => (
            <div
              key={client.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
            >
              <a
                href={client.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col h-full p-8 rounded-2xl border border-foreground/15 bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:border-foreground/25 hover:scale-105"
              >
                {/* Logo */}
                <div className="flex-1 flex items-center justify-center mb-6 min-h-[120px]">
                  <div className="relative w-full h-[120px] flex items-center justify-center">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-lg md:text-xl font-semibold text-foreground text-center hover:text-foreground/80 transition-colors duration-300">
                  {client.name}
                </h3>

                {/* Link Indicator */}
                <div className="mt-4 pt-4 border-t border-foreground/10 text-center">
                  <span className="text-xs text-foreground/60 font-medium">
                    Visit Website ↗
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
