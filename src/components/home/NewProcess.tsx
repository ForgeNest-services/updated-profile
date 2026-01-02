"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as LucideIcons from "lucide-react";
import TitleAnimation from "../ui/TitleAnimation";
import TextAnimation from "../ui/TextAnimation";

gsap.registerPlugin(ScrollTrigger);

export default function NewProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon className="w-6 h-6" /> : null;
  };

  const processSteps = [
    {
      title: "Discovery",
      description:
        "We analyze your goals, requirements, and market to build a solid foundation.",
      icon: "Search",
    },
    {
      title: "Planning",
      description:
        "Creating a strategic roadmap with clear milestones and deliverables.",
      icon: "ClipboardList",
    },
    {
      title: "Design",
      description:
        "Crafting intuitive user experiences and stunning visual interfaces.",
      icon: "Palette",
    },
    {
      title: "Development",
      description:
        "Writing clean, efficient code to bring the designs to life.",
      icon: "Code",
    },
    {
      title: "Launch",
      description:
        "Deploying your solution and providing ongoing support for growth.",
      icon: "Rocket",
    },
    {
      title: "Support",
      description:
        "Continuous maintenance, updates, and optimization for success.",
      icon: "Headphones",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Line animation
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0, opacity: 0 },
          {
            scaleX: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: lineRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Items animation
      const validItems = itemsRef.current.filter((el) => el !== null);
      if (validItems.length > 0) {
        validItems.forEach((item, index) => {
          gsap.fromTo(
            item,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: index * 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                toggleActions: "play none none none",
              },
            }
          );
        });
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
        {/* Header */}
        <div className="flex justify-center items-center flex-col mb-12 md:mb-16">
          <TitleAnimation
            as="h2"
            className="text-2xl text-center md:text-4xl lg:text-6xl font-oswald font-normal text-white tracking-tighter leading-tight"
          >
            How We Work
          </TitleAnimation>
          <div className="mt-2 lg:mt-6 w-20 lg:w-40 h-1 bg-white" />
        </div>

        <TextAnimation
          className="max-w-3xl mx-auto text-center text-sm md:text-lg text-white/70 leading-relaxed mb-12"
          animationType="fadeUp"
          delay={0.2}
        >
          A transparent, agile process designed to deliver excellence at every
          step.
        </TextAnimation>

        {/* Process Items */}
        <div className="relative max-w-6xl mx-auto">
          {/* Horizontal Line */}
          <div
            ref={lineRef}
            className="hidden lg:block absolute top-16 left-0 right-0 h-[1px] bg-white/20 origin-left"
          />

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {processSteps.map((step, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) itemsRef.current[index] = el;
                }}
                className="flex flex-col items-center text-center"
              >
                {/* Icon Circle */}
                <div className="relative z-10 flex items-center justify-center w-20 h-20 rounded-full border-2 border-[#dd4f43] bg-foreground mb-6">
                  <div className="text-white">{getIcon(step.icon)}</div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-oswald font-semibold text-white mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-lg text-white/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
