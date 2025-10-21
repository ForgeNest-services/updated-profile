"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleAnimation from "../ui/TitleAnimation";
import TextAnimation from "../ui/TextAnimation";

gsap.registerPlugin(ScrollTrigger);

const teamData = [
  {
    name: "Alex Chen",
    role: "Founder & CEO",
    expertise: "Strategic Vision, Leadership",
    description:
      "Passionate about transforming ideas into reality through innovative technology solutions.",
    avatar: "AC",
  },
  {
    name: "Sarah Johnson",
    role: "Lead Designer",
    expertise: "UI/UX Design, Brand Strategy",
    description:
      "Creative visionary who brings beautiful, functional designs to life across all platforms.",
    avatar: "SJ",
  },
  {
    name: "Michael Rodriguez",
    role: "Senior Developer",
    expertise: "Full-Stack Development, Architecture",
    description:
      "Technical expert who builds scalable, robust applications with cutting-edge technologies.",
    avatar: "MR",
  },
  {
    name: "Emily Watson",
    role: "Project Manager",
    expertise: "Agile Management, Client Relations",
    description:
      "Ensures smooth project delivery and exceptional client experiences through meticulous planning.",
    avatar: "EW",
  },
  {
    name: "David Kim",
    role: "DevOps Engineer",
    expertise: "Cloud Infrastructure, Automation",
    description:
      "Optimizes deployment pipelines and maintains robust, scalable infrastructure solutions.",
    avatar: "DK",
  },
  {
    name: "Lisa Thompson",
    role: "Marketing Strategist",
    expertise: "Digital Marketing, Growth",
    description:
      "Drives brand awareness and growth through data-driven marketing strategies and campaigns.",
    avatar: "LT",
  },
];

export default function AboutUsTeam() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const validCards = cardsRef.current.filter((el) => el !== null);
      if (validCards.length > 0) {
        gsap.fromTo(
          validCards,
          { y: 100, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
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
      className="relative bg-background text-foreground py-20 md:py-32"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, currentColor 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, currentColor 2px, transparent 2px)`,
            backgroundSize: "100px 100px",
            color: "#181832",
          }}
        />
      </div>

      <div className="relative w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <TitleAnimation className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-oswald font-normal text-foreground tracking-tighter leading-tight">
            Meet Our Team
          </TitleAnimation>
          <div className="h-1 w-20 sm:w-24 md:w-28 lg:w-32 bg-foreground mx-auto rounded-full mt-6" />
          <TextAnimation
            className="max-w-3xl mx-auto text-base md:text-lg text-foreground/80 leading-relaxed mt-8"
            animationType="fadeUp"
            delay={0.2}
          >
            The passionate individuals behind Forgenest's success. Each team
            member brings unique expertise and dedication to delivering
            exceptional results.
          </TextAnimation>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {teamData.map((member, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group relative bg-background border border-foreground/10 rounded-2xl p-6 hover:border-foreground/20 transition-all duration-300 hover:shadow-lg"
            >
              {/* Avatar */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-foreground to-foreground/80 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {member.avatar}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm text-foreground/70">{member.role}</p>
                </div>
              </div>

              {/* Expertise */}
              <div className="mb-4">
                <span className="text-xs font-medium text-foreground/60 uppercase tracking-wider">
                  Expertise
                </span>
                <p className="text-sm text-foreground/80 mt-1">
                  {member.expertise}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm text-foreground/70 leading-relaxed">
                {member.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              6+
            </div>
            <div className="text-sm text-foreground/60 uppercase tracking-wider">
              Team Members
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              5+
            </div>
            <div className="text-sm text-foreground/60 uppercase tracking-wider">
              Years Experience
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              15+
            </div>
            <div className="text-sm text-foreground/60 uppercase tracking-wider">
              Countries Served
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              24/7
            </div>
            <div className="text-sm text-foreground/60 uppercase tracking-wider">
              Support Available
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
