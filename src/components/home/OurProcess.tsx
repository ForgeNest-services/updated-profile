"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleAnimation from "../ui/TitleAnimation";
import TextAnimation from "../ui/TextAnimation";

gsap.registerPlugin(ScrollTrigger);

export default function OurProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  const processSteps = [
    {
      title: "Discovery",
      description:
        "Understand your goals, challenges, and vision for the project.",
      step: "Step 01",
    },
    {
      title: "Planning",
      description:
        "Create a clear roadmap and technical approach tailored to your needs.",
      step: "Step 02",
    },
    {
      title: "Design",
      description:
        "Build user-friendly designs that align with your brand and goals.",
      step: "Step 03",
    },
    {
      title: "Development",
      description:
        "Develop clean, efficient code with regular updates and transparency.",
      step: "Step 04",
    },
    {
      title: "Launch",
      description:
        "Deploy your project smoothly with thorough testing and support.",
      step: "Step 05",
    },
    {
      title: "Support",
      description:
        "Ongoing maintenance, updates, and optimization for success.",
      step: "Step 06",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline line animation
      if (timelineRef.current) {
        gsap.fromTo(
          timelineRef.current,
          { scaleY: 0, opacity: 0 },
          {
            scaleY: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: timelineRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Timeline items animation - all at once
      const validItems = itemsRef.current.filter((el) => el !== null);
      if (validItems.length > 0) {
        gsap.fromTo(
          validItems,
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: timelineRef.current,
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
      className="relative bg-background text-foreground"
    >
      <div className="relative w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <TitleAnimation className="text-2xl text-center lg:text-start md:text-4xl lg:text-6xl font-oswald font-normal text-foreground tracking-tighter leading-tight">
            Our Process
          </TitleAnimation>
          <div className="mt-2 lg:mt-6 w-20 lg:w-40 h-1 bg-foreground" />
          <TextAnimation
            className="max-w-3xl text-sm md:text-lg text-foreground/80 leading-relaxed mt-8"
            animationType="fadeUp"
            delay={0.2}
          >
            From initial conversation to final delivery and beyond, here's how
            we bring your vision to life.
          </TextAnimation>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div
            ref={timelineRef}
            className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-foreground/20 origin-top"
          />

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16">
            {processSteps.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) itemsRef.current[index] = el;
                }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-foreground rounded-full z-10 border-4 border-background" />

                {/* Content */}
                <div
                  className={`ml-16 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="bg-background border border-foreground/10 rounded-2xl p-6 md:p-8 hover:border-foreground/20 transition-all duration-300">
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-foreground/10 text-foreground text-sm font-medium rounded-full">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-oswald font-normal text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
