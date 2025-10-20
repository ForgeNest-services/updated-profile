"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight, Lightbulb, Code, Target } from "lucide-react";
import Scene3D from "../ui/Scene3D";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const statsRef = useRef<HTMLDivElement[]>([]);

  const [stats, setStats] = useState([
    { number: 0, target: 50, label: "Projects Delivered" },
    { number: 0, target: 15, label: "Happy Clients" },
    { number: 0, target: 5, label: "Years Experience" },
  ]);

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          setScrollProgress(self.progress);
        },
      });

      const validCards = cardsRef.current.filter((el) => el !== null);
      if (validCards.length > 0) {
        gsap.fromTo(
          validCards,
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 70%",
              end: "top 30%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      const validStats = statsRef.current.filter((el) => el !== null);
      if (validStats.length > 0) {
        ScrollTrigger.create({
          trigger: validStats[0],
          start: "top 80%",
          onEnter: () => {
            stats.forEach((stat, index) => {
              const obj = { value: 0 };
              gsap.to(obj, {
                value: stat.target,
                duration: 2,
                ease: "power2.out",
                onUpdate: () => {
                  setStats((prev) => {
                    const newStats = [...prev];
                    newStats[index] = {
                      ...newStats[index],
                      number: Math.floor(obj.value),
                    };
                    return newStats;
                  });
                },
              });
            });
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Strategic Vision",
      description:
        "We transform your ideas into comprehensive digital strategies that drive growth and innovation.",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Expert Development",
      description:
        "Cutting-edge web and mobile solutions built with modern technologies and best practices.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Result-Driven",
      description:
        "Every project is crafted with precision, focusing on measurable outcomes and business impact.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-background text-foreground overflow-hidden w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4"
    >
      {/* Sticky Title - Left Side */}
      <div className="flex justify-start items-start flex-col">
        <h2 className="font-oswald text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-none tracking-tight">
          OUR VISION
        </h2>
        <div className="mt-2 lg:mt-6 w-20 lg:w-40 h-1 bg-foreground" />
      </div>
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-16 items-center">
          {/* 3D Building Background - Full Height Canvas */}
          <div
            className="hidden md:block lg:col-span-1 pointer-events-none opacity-40 z-0"
            style={{ height: "1600px" }}
          >
            <Scene3D scrollProgress={scrollProgress} />
          </div>
          {/* Scrolling Content - Right Side (2 columns) */}
          <div
            ref={contentRef}
            className="lg:col-span-2 space-y-16 md:space-y-24 text-justify"
          >
            {/* Introduction */}
            <div className="space-y-4">
              <p className="text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed">
                Forgenest is where innovation meets execution. We are a
                collective of designers, developers, and strategists dedicated
                to building digital experiences that inspire growth and
                transformation.
              </p>
            </div>

            {/* Who We Are */}
            <div className="space-y-6">
              <h3 className="font-oswald text-3xl md:text-4xl lg:text-5xl font-bold uppercase">
                Who We Are
              </h3>
              <p className="text-base md:text-lg lg:text-xl text-foreground/80 leading-relaxed">
                Our nest nurtures ideas from conception to reality. We blend
                technology, creativity, and strategy to forge digital
                experiences that inspire growth and imagination.
              </p>
            </div>

            {/* What We Do */}
            <div className="space-y-8">
              <h3 className="font-oswald text-3xl md:text-4xl lg:text-5xl font-bold uppercase">
                What We Do
              </h3>
              <div className="space-y-8">
                {services.map((service, index) => (
                  <div
                    key={index}
                    ref={(el) => {
                      if (el) cardsRef.current[index] = el;
                    }}
                    className="space-y-3"
                  >
                    <h4 className="font-oswald text-xl md:text-2xl lg:text-3xl font-semibold">
                      {service.title}
                    </h4>
                    <p className="text-foreground/70 text-base md:text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 py-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    if (el) statsRef.current[index] = el;
                  }}
                  className="space-y-2"
                >
                  <div className="font-oswald text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                    {stat.number}+
                  </div>
                  <div className="font-oswald text-xs md:text-sm text-foreground/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Our Approach */}
            <div className="space-y-6">
              <h3 className="font-oswald text-3xl md:text-4xl lg:text-5xl font-bold uppercase">
                Our Approach
              </h3>
              <p className="text-base md:text-lg lg:text-xl text-foreground/80 leading-relaxed">
                We believe in the power of collaboration and iteration. Every
                project begins with understanding your vision, followed by
                strategic planning, meticulous execution, and continuous
                refinement. We don't just build products—we forge lasting
                partnerships.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 bg-foreground text-background px-6 md:px-8 py-3 md:py-4 rounded-full font-oswald text-sm md:text-base uppercase hover:opacity-90 transition-opacity duration-300 group mt-4"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
    </section>
  );
}
