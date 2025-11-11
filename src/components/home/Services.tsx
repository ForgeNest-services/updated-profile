"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import TitleAnimation from "../ui/TitleAnimation";
import TextAnimation from "../ui/TextAnimation";
import OptimizedVideo from "../ui/OptimizedVideo";
import { services } from "@/data/services";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      servicesRef.current.forEach((service, index) => {
        if (!service) return;

        const isEven = index % 2 === 0;
        const video = service.querySelector("video");
        const content = service.querySelector(".service-content");

        // Animate video
        gsap.fromTo(
          video,
          {
            x: isEven ? -100 : 100,
            opacity: 0,
            scale: 0.9,
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: service,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );

        // Animate content
        gsap.fromTo(
          content,
          {
            x: isEven ? 100 : -100,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: service,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-background text-foreground overflow-hidden w-full"
    >
      {/* Header */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start items-start flex-col mb-12 md:mb-16">
          <TitleAnimation
            as="h2"
            className="text-2xl text-center lg:text-start md:text-4xl lg:text-6xl font-oswald font-normal text-foreground tracking-tighter leading-tight"
          >
            What We Build
          </TitleAnimation>
          <div className="mt-2 lg:mt-6 w-20 lg:w-40 h-1 bg-foreground" />
        </div>

        <TextAnimation
          className="max-w-3xl text-sm md:text-lg text-foreground leading-relaxed"
          animationType="fadeUp"
          delay={0.1}
        >
          We specialize in creating digital solutions that solve real problems.
          Whether you need a custom web application or a modern marketing
          website, we deliver results that matter for your business.
        </TextAnimation>
      </div>

      {/* Services */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 md:space-y-40">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={service.id}
              ref={(el) => {
                if (el) servicesRef.current[index] = el;
              }}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                !isEven ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Media Section */}
              <div className={`relative ${!isEven ? "lg:col-start-2" : ""}`}>
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-foreground/5">
                  <OptimizedVideo
                    src={service.mediaUrl}
                    poster={`/images/poster-${service.id}.jpg`}
                    className="w-full h-full object-cover"
                    alt={service.title}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent pointer-events-none" />
                </div>

                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-foreground/10 rounded-full -z-10" />
              </div>

              {/* Content Section */}
              <div
                className={`service-content space-y-6 ${
                  !isEven ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
              >
                <div>
                  <span className="inline-block px-4 py-1 text-sm font-medium bg-foreground/10 text-foreground rounded-full mb-4">
                    0{service.id}
                  </span>
                  <h2 className="font-oswald text-2xl md:text-4xl lg:text-5xl font-normal mb-4 tracking-tighter leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-sm md:text-lg text-foreground/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-foreground/80"
                    >
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-foreground flex items-center justify-center">
                        <Check className="w-3 h-3 text-background" />
                      </div>
                      <span className="text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-oswald text-sm uppercase hover:opacity-90 transition-opacity duration-300 group mt-4"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
