"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleAnimation from "../ui/TitleAnimation";
import TextAnimation from "../ui/TextAnimation";
import { Lightbulb, Target, Users, Zap, Shield, Heart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const valuesData = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions that set our clients apart from the competition.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "Every project receives our full attention to detail, ensuring the highest quality standards and exceptional results that exceed expectations.",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We believe in the power of teamwork and work closely with our clients as partners, fostering open communication and shared success.",
    color: "from-green-400 to-green-600",
  },
  {
    icon: Zap,
    title: "Agility",
    description:
      "Our flexible approach allows us to adapt quickly to changing requirements and deliver solutions efficiently without compromising quality.",
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: Shield,
    title: "Reliability",
    description:
      "We build trust through consistent delivery, transparent communication, and dependable support that our clients can count on.",
    color: "from-red-400 to-red-600",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "Our genuine enthusiasm for what we do drives us to go above and beyond, creating meaningful impact through our work.",
    color: "from-pink-400 to-pink-600",
  },
];

export default function AboutUsValues() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const validCards = cardsRef.current.filter((el) => el !== null);
      if (validCards.length > 0) {
        gsap.fromTo(
          validCards,
          { y: 80, opacity: 0, rotateX: 15 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
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
            Our Values
          </TitleAnimation>
          <div className="h-1 w-20 sm:w-24 md:w-28 lg:w-32 bg-foreground mx-auto rounded-full mt-6" />
          <TextAnimation
            className="max-w-3xl mx-auto text-base md:text-lg text-foreground/80 leading-relaxed mt-8"
            animationType="fadeUp"
            delay={0.2}
          >
            The principles that guide everything we do. These core values shape
            our culture, drive our decisions, and define our commitment to
            excellence.
          </TextAnimation>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {valuesData.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="group relative bg-background border border-foreground/10 rounded-2xl p-6 md:p-8 hover:border-foreground/20 transition-all duration-300 hover:shadow-lg"
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {value.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 md:mt-20 text-center">
          <TextAnimation
            className="text-lg md:text-xl text-foreground mb-8"
            animationType="fadeUp"
            delay={0.2}
          >
            Ready to work with a team that shares your values?
          </TextAnimation>
          <TextAnimation
            className="inline-block"
            animationType="scaleIn"
            delay={0.4}
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-full font-oswald text-base uppercase hover:opacity-90 transition-opacity duration-300"
            >
              Get In Touch
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
              >
                <path
                  d="M4.16667 10H15.8333M15.8333 10L10.8333 5M15.8333 10L10.8333 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </TextAnimation>
        </div>
      </div>
    </section>
  );
}
