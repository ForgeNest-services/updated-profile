"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleAnimation from "../ui/TitleAnimation";
import TextAnimation from "../ui/TextAnimation";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUsHero() {
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image animation
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { scale: 0.8, opacity: 0, rotateY: 15 },
          {
            scale: 1,
            opacity: 1,
            rotateY: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative bg-background text-foreground py-20 md:py-32 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(currentColor 1px, transparent 1px),
                             linear-gradient(90deg, currentColor 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            color: "#181832",
          }}
        />
      </div>

      <div className="relative w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <TitleAnimation
                as="h1"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-oswald font-normal text-foreground tracking-tighter leading-tight"
              >
                About Forgenest
              </TitleAnimation>
              <div className="h-1 w-20 sm:w-24 md:w-28 lg:w-32 bg-foreground rounded-full" />
            </div>

            <TextAnimation
              className="text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed"
              animationType="fadeUp"
              delay={0.2}
            >
              We are a passionate team of designers, developers, and strategists
              dedicated to transforming ideas into exceptional digital
              experiences.
            </TextAnimation>

            <TextAnimation
              className="text-base md:text-lg text-foreground/80 leading-relaxed"
              animationType="fadeUp"
              delay={0.4}
            >
              Founded with a vision to bridge the gap between creativity and
              technology, Forgenest has grown into a trusted partner for
              businesses seeking innovative digital solutions. Our journey began
              with a simple belief: every great idea deserves to be brought to
              life with precision, creativity, and cutting-edge technology.
            </TextAnimation>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <TextAnimation
                className="text-sm md:text-base text-foreground/70"
                animationType="slideIn"
                delay={0.6}
              >
                <strong>Founded:</strong> 2025
              </TextAnimation>
              <TextAnimation
                className="text-sm md:text-base text-foreground/70"
                animationType="slideIn"
                delay={0.7}
              >
                <strong>Location:</strong> Global Remote Team
              </TextAnimation>
              <TextAnimation
                className="text-sm md:text-base text-foreground/70"
                animationType="slideIn"
                delay={0.8}
              >
                <strong>Specialty:</strong> Digital Innovation
              </TextAnimation>
            </div>
          </div>

          {/* Image */}
          <div ref={imageRef} className="relative">
            <video
              src="/video/logo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="rounded-3xl shadow-2xl border border-foreground"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
