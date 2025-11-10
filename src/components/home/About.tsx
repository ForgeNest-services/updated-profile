"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TitleAnimation from "../ui/TitleAnimation";
import TextAnimation from "../ui/TextAnimation";
import { DottedMap } from "../ui/dotted-map";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          {
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 70%",
              toggleActions: "play none none reverse",
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
      className="relative bg-background text-foreground overflow-hidden w-full"
    >
      {/* DottedMap Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none overflow-hidden">
        <div className="absolute w-full h-full">
          <DottedMap
            width={1200}
            height={800}
            mapSamples={5000}
            dotColor="currentColor"
            dotRadius={2}
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="flex justify-center items-center flex-col mb-12 md:mb-16">
          <TitleAnimation className="text-2xl text-center md:text-4xl lg:text-6xl font-oswald font-normal text-foreground tracking-tighter leading-tight">
            Who We Are
          </TitleAnimation>
          <div className="mt-2 lg:mt-6 w-20 lg:w-40 h-1 bg-foreground" />
        </div>

        <TextAnimation
          className="max-w-3xl mx-auto text-center text-sm md:text-lg text-foreground/80 leading-relaxed mb-12"
          animationType="fadeUp"
          delay={0.1}
        >
          We are a digital studio dedicated to crafting exceptional web
          experiences.
        </TextAnimation>

        {/* Content */}
        <div
          ref={contentRef}
          className="max-w-4xl mx-auto space-y-6 md:space-y-8"
        >
          <TextAnimation
            className="text-sm md:text-lg text-foreground text-center leading-relaxed"
            animationType="fadeUp"
            delay={0.1}
          >
            Forgenest is a digital studio dedicated to crafting exceptional web
            experiences. We specialize in building custom web applications and
            modern websites that drive real business results.
          </TextAnimation>

          <TextAnimation
            className="text-sm md:text-lg text-foreground text-center leading-relaxed"
            animationType="fadeUp"
            delay={0.2}
          >
            Our approach combines strategic thinking with technical expertise.
            We work closely with our clients to understand their vision,
            challenges, and goals. From custom dashboards and admin panels to
            SaaS platforms and high-converting marketing websites, we deliver
            solutions that are both beautiful and functional.
          </TextAnimation>

          <TextAnimation
            className="text-sm md:text-lg text-foreground text-center leading-relaxed"
            animationType="fadeUp"
            delay={0.3}
          >
            We believe in clean code, thoughtful design, and transparent
            partnerships. Every project is an opportunity to create something
            that matters—something that doesn't just meet requirements, but
            exceeds expectations and delivers measurable impact for your
            business.
          </TextAnimation>

          <div className="flex justify-center mt-8">
            <Link
              href="/about-us"
              className="inline-flex items-center gap-3 bg-foreground text-background px-6 md:px-8 py-3 md:py-4 rounded-full font-oswald text-sm md:text-base uppercase hover:opacity-90 transition-opacity duration-300 group"
            >
              Our Story
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
