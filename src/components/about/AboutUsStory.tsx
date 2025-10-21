"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleAnimation from "../ui/TitleAnimation";
import TextAnimation from "../ui/TextAnimation";

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    title: "The Beginning",
    description:
      "Forgenest was founded with a vision to revolutionize digital experiences through innovative design and cutting-edge technology.",
    milestone: "Company Founded",
  },
  {
    title: "First Breakthrough",
    description:
      "We delivered our first major project, establishing our reputation for quality and innovation in the digital space.",
    milestone: "First Major Client",
  },
  {
    title: "Expansion",
    description:
      "Expanded our team and services, adding AI integration and cloud solutions to our portfolio.",
    milestone: "Team Growth",
  },
  {
    title: "Recognition",
    description:
      "Received industry recognition for our innovative approach to digital transformation and client satisfaction.",
    milestone: "Award Winner",
  },
  {
    title: "Global Reach",
    description:
      "Established partnerships worldwide, serving clients across multiple continents with our remote-first approach.",
    milestone: "Global Expansion",
  },
  {
    title: "Future Vision",
    description:
      "Continuing to push boundaries with emerging technologies like AI, AR/VR, and sustainable digital solutions.",
    milestone: "Innovation Leader",
  },
];

export default function AboutUsStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline animation
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

      // Timeline items animation
      const validItems = itemsRef.current.filter((el) => el !== null);
      if (validItems.length > 0) {
        gsap.fromTo(
          validItems,
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
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
      className="relative bg-background text-foreground py-10 md:py-16"
    >
      <div className="relative w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <TitleAnimation className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-oswald font-normal text-foreground tracking-tighter leading-tight">
            Our Journey
          </TitleAnimation>
          <div className="h-1 w-20 sm:w-24 md:w-28 lg:w-32 bg-foreground mx-auto rounded-full mt-6" />
          <TextAnimation
            className="max-w-3xl mx-auto text-base md:text-lg text-foreground/80 leading-relaxed mt-8"
            animationType="fadeUp"
            delay={0.2}
          >
            From humble beginnings to becoming a trusted partner in digital
            innovation, here's our story of growth, learning, and continuous
            evolution.
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
            {timelineData.map((item, index) => (
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
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-foreground/10 text-foreground text-sm font-medium rounded-full">
                        {item.milestone}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
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
