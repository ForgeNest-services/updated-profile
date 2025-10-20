"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Search,
  Lightbulb,
  Code,
  Palette,
  Rocket,
  CheckCircle,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function OurProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const snakeRef = useRef<SVGPathElement>(null);
  const stepsRef = useRef<HTMLDivElement[]>([]);

  const processSteps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Discovery",
      description:
        "We dive deep into your business goals, target audience, and project requirements to create a solid foundation.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Strategy",
      description:
        "Our team crafts a comprehensive strategy that aligns with your vision and market opportunities.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design",
      description:
        "We create stunning visual experiences that captivate your audience and reflect your brand identity.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Development",
      description:
        "Our developers bring designs to life with clean, efficient code and cutting-edge technologies.",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Launch",
      description:
        "We ensure a smooth deployment and provide ongoing support to keep your project running perfectly.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Optimize",
      description:
        "Continuous monitoring and optimization to ensure your project delivers maximum value and performance.",
      color: "from-indigo-500 to-blue-500",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate snake path drawing
      if (snakeRef.current) {
        const pathLength = snakeRef.current.getTotalLength();
        snakeRef.current.style.strokeDasharray = pathLength.toString();
        snakeRef.current.style.strokeDashoffset = pathLength.toString();

        gsap.to(snakeRef.current, {
          strokeDashoffset: 0,
          duration: 3,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
          },
        });
      }

      // Animate steps appearing
      stepsRef.current.forEach((step, index) => {
        if (step) {
          gsap.fromTo(
            step,
            {
              opacity: 0,
              y: 50,
              scale: 0.8,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: step,
                start: "top 85%",
                end: "top 15%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-background text-foreground px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-oswald font-normal text-foreground tracking-tighter leading-tight mb-4">
            Our Process
          </h2>
          <div className="w-20 lg:w-40 h-1 bg-foreground mx-auto mb-6" />
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            From concept to completion, we follow a proven methodology that
            ensures exceptional results and seamless collaboration.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Snake SVG Path */}
          <svg
            className="absolute left-8 top-0 w-2 h-full"
            viewBox="0 0 4 1000"
            preserveAspectRatio="none"
          >
            <path
              ref={snakeRef}
              d="M2,50 Q2,200 2,200 T2,400 T2,600 T2,800 T2,950"
              stroke="url(#gradient)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
            </defs>
          </svg>

          {/* Steps */}
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) stepsRef.current[index] = el;
                }}
                className="flex items-center gap-8"
              >
                {/* Step Number & Icon */}
                <div className="flex-shrink-0 relative z-10">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-lg`}
                  >
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-foreground text-background rounded-full flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-50 dark:bg-neutral-800 p-6 rounded-2xl shadow-sm">
                  <h3 className="text-xl md:text-2xl font-oswald font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-foreground/80 mb-6">
            Ready to start your project?
          </p>
          <button className="bg-foreground text-background px-8 py-4 rounded-full font-oswald text-lg uppercase hover:opacity-90 transition-opacity duration-300">
            Let's Begin
          </button>
        </div>
      </div>
    </section>
  );
}
