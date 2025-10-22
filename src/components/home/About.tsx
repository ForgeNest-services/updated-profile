"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight, Lightbulb, Code, Target } from "lucide-react";
import Scene3D from "../ui/Scene3D";
import ErrorBoundary from "../ui/ErrorBoundary";
import TitleAnimation from "../ui/TitleAnimation";
import TextAnimation from "../ui/TextAnimation";

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

  return (
    <section
      ref={sectionRef}
      className="bg-background text-foreground overflow-hidden w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4"
    >
      {/* Sticky Title - Left Side */}
      <div className="flex justify-start items-start flex-col">
        <TitleAnimation className="text-2xl text-center lg:text-start md:text-4xl lg:text-6xl font-oswald font-normal text-foreground tracking-tighter leading-tight">
          OUR VISION
        </TitleAnimation>
        <div className="mt-2 lg:mt-6 w-20 lg:w-40 h-1 bg-foreground" />
      </div>
      <div className="grid lg:grid-cols-3 gap-8 lg:gap-16 items-start">
        {/* 3D Building Background - Full Height Canvas */}
        <div className="hidden md:block lg:col-span-1 opacity-50">
          <ErrorBoundary>
            <Scene3D scrollProgress={scrollProgress} modelHeight={128} />
          </ErrorBoundary>
        </div>
        {/* Scrolling Content - Right Side (2 columns) */}
        <div
          ref={contentRef}
          className="lg:col-span-2 space-y-6 md:space-y-10 text-justify pt-0 lg:pt-20"
        >
          {/* Introduction */}
          <div className="space-y-4">
            <TextAnimation
              className="text-sm md:text-xl text-foreground leading-relaxed w-full"
              animationType="fadeUp"
              delay={0.2}
            >
              Forgenest is where innovation meets execution. We are a collective
              of designers, developers, and strategists dedicated to building
              digital experiences that inspire growth and transformation. Our
              approach is rooted in curiosity and guided by craftsmanship—every
              interface, interaction, and pixel is intentional. We partner
              closely with founders and teams to uncover the real problem behind
              the brief and shape product experiences that feel simple, human,
              and inevitable. From the first workshop to the final launch, we
              align business goals with design clarity and engineering
              discipline so that ideas not only come to life but endure in the
              market.
            </TextAnimation>
          </div>
          <div className="space-y-6">
            <TextAnimation
              className="text-sm md:text-xl text-foreground leading-relaxed w-full"
              animationType="fadeUp"
              delay={0.3}
            >
              Our nest nurtures ideas from conception to reality. We blend
              technology, creativity, and strategy to forge digital experiences
              that inspire growth and imagination. Prototyping early and often
              allows us to learn fast and build with confidence, while
              structured discovery reduces risk and uncovers opportunities for
              differentiation. We believe that performance is a feature,
              accessibility is table stakes, and delightful details are what
              transform a good product into a loved product. Whether we are
              crafting a brand system, a design language, or a complex
              full‑stack application, we prioritize clarity, maintainability,
              and long‑term scalability.
            </TextAnimation>
          </div>

          {/* Our Approach */}
          <div className="space-y-6">
            <TextAnimation
              className="text-sm md:text-xl text-foreground leading-relaxed w-full"
              animationType="fadeUp"
              delay={0.4}
            >
              We believe in the power of collaboration and iteration. Every
              project begins with understanding your vision, followed by
              strategic planning, meticulous execution, and continuous
              refinement. We don't just build products—we forge lasting
              partnerships. Our multi‑disciplinary teams operate as an extension
              of yours, sharing context, constraints, and accountability. After
              launch, we measure impact, ship improvements, and evolve the
              roadmap with real user insights. This cycle—discover, design,
              develop, validate—helps us deliver outcomes that move the needle
              for your customers and your business, not just outputs on a
              timeline.
            </TextAnimation>
            <Link
              href="/about-us"
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
