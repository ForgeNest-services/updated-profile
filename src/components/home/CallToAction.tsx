"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TitleAnimation from "../ui/TitleAnimation";
import TextAnimation from "../ui/TextAnimation";

gsap.registerPlugin(ScrollTrigger);

export default function CallToAction() {
  const sectionRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (buttonRef.current) {
        gsap.fromTo(
          buttonRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-foreground text-white py-16 md:py-24"
    >
      <div className="relative w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Title */}
          <TitleAnimation
            as="h2"
            className="text-2xl md:text-4xl lg:text-6xl font-oswald font-normal text-white tracking-tighter leading-tight mb-6"
          >
            Ready to Transform Your Business?
          </TitleAnimation>

          {/* Description */}
          <TextAnimation
            className="text-sm md:text-lg text-white/70 leading-relaxed mb-8 md:mb-12 max-w-2xl"
            animationType="fadeUp"
            delay={0.2}
          >
            Let's discuss how we can help you achieve your goals with custom web
            solutions tailored to your needs.
          </TextAnimation>

          {/* CTA Button */}
          <div ref={buttonRef} className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-3 bg-white text-foreground px-4 md:px-6 py-3 rounded-full font-oswald text-base md:text-lg uppercase transition-all duration-300 group shadow-lg hover:shadow-xl"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            <Link
              href="/our-services"
              className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white px-4 md:px-6 rounded-full font-oswald text-base md:text-lg uppercase hover:bg-white hover:text-foreground transition-all duration-300 group"
            >
              View Our Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
