"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ChevronDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TitleAnimation from "@/components/ui/TitleAnimation";
import TextAnimation from "@/components/ui/TextAnimation";

export default function NewHeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const ctaButtonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      if (contentRef.current) {
        gsap.set(contentRef.current, {
          opacity: 0,
          y: 40,
        });
      }

      if (ctaButtonsRef.current) {
        gsap.set(ctaButtonsRef.current, {
          opacity: 0,
          y: 20,
        });
      }

      if (scrollIndicatorRef.current) {
        gsap.set(scrollIndicatorRef.current, {
          y: 50,
          opacity: 0,
        });
      }

      // Create timeline
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      // Animate content
      if (contentRef.current) {
        tl.to(contentRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
        });
      }

      // Animate CTA buttons
      if (ctaButtonsRef.current) {
        tl.to(
          ctaButtonsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.5"
        );
      }

      // Animate scroll indicator
      if (scrollIndicatorRef.current) {
        tl.to(
          scrollIndicatorRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
          },
          "-=0.4"
        );

        // Scroll indicator bounce loop
        gsap.to(scrollIndicatorRef.current, {
          y: 10,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: 2,
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative bg-black overflow-hidden flex items-center justify-center min-h-screen"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-img.png"
          alt="Forgenest Services "
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Gradient overlay from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      {/* Content Container */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 text-center"
      >
        {/* Main Headline */}
        <TitleAnimation
          as="h1"
          className="text-3xl md:text-5xl lg:text-6xl font-oswald font-normal text-white tracking-tight leading-tight mb-4 md:mb-6"
        >
          We Build What You Imagine
        </TitleAnimation>

        {/* Subheadline */}
        <TextAnimation
          className="max-w-2xl mx-auto text-sm md:text-base lg:text-lg text-gray-200 leading-relaxed mb-6 md:mb-8 px-2"
          delay={0.2}
          animationType="fadeUp"
        >
          A space where ideas are nurtured, designed, and brought to life. We
          blend technology, creativity, and strategy to forge digital
          experiences that inspire growth and imagination.
        </TextAnimation>

        {/* CTA Buttons */}
        <div
          ref={ctaButtonsRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4"
        >
          {/* Primary CTA */}
          <Link
            href="/contact-us"
            className="group inline-flex items-center gap-2 bg-white  text-foreground font-semibold px-6 py-3 rounded-full font-oswald text-sm md:text-base uppercase transition-all duration-300 hover:shadow-lg hover:shadow-foreground/50 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>

          {/* Secondary CTA */}
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 bg-transparent border-2 border-white/80 hover:border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-full font-oswald text-sm md:text-base uppercase transition-all duration-300 w-full sm:w-auto justify-center"
          >
            View Our Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 md:mt-10">
          <p className="text-xs md:text-sm text-gray-400">
            Trusted by 50+ businesses worldwide
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer z-10"
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          });
        }}
      >
        <span className="font-oswald text-xs uppercase tracking-wider text-white/70">
          Scroll to Explore
        </span>
        <ChevronDown className="w-4 h-4 text-white/70" />
      </div>
    </section>
  );
}
