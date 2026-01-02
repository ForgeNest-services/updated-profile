"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { servicesData } from "@/lib/constants/services";
import { servicesFAQs } from "@/lib/constants/faqs";
import OptimizedVideo from "@/components/ui/OptimizedVideo";
import FAQ from "@/components/home/FAQ";
import Breadcrumb from "@/components/ui/Breadcrumb";
import TitleAnimation from "../ui/TitleAnimation";
import TextAnimation from "../ui/TextAnimation";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesPageClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          }
        );
      }

      // Services scroll animations
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

      // CTA animation
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { y: 80, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-background text-foreground">
      {/* Breadcrumb */}
      {/* <Breadcrumb
        items={[
          { label: "Home", url: "/" },
          { label: "Our Services", url: "/our-services", current: true },
        ]}
      /> */}

      {/* Hero Section */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start items-start flex-col">
          <TitleAnimation
            as="h1"
            className="text-2xl text-center lg:text-start md:text-4xl lg:text-6xl font-oswald font-normal text-foreground tracking-tighter leading-tight"
          >
            Our Services
          </TitleAnimation>
          <div className="mt-2 lg:mt-6 w-20 lg:w-40 h-1 bg-foreground" />
          <TextAnimation className="mt-4 text-neutral-800 text-base md:text-lg text-start">
            We deliver the best services you need to get yourself started.
          </TextAnimation>
        </div>
      </div>

      {/* Services Sections */}
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 md:space-y-40 py-20">
        {servicesData.map((service, index) => {
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
              {/* Video Section */}
              <div className={`relative ${!isEven ? "lg:col-start-2" : ""}`}>
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-foreground/5">
                  <OptimizedVideo
                    src={service.mediaUrl}
                    poster={`/images/poster-${service.id}.jpg`}
                    className="w-full h-full object-cover"
                    alt={service.title}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent pointer-events-none" />
                </div>

                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-foreground/20 rounded-full -z-10" />
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
                  <h2 className="font-oswald text-2xl md:text-4xl lg:text-6xl font-normal mb-4 tracking-tighter leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-sm md:text-xl text-foreground/70 leading-relaxed">
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
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-foreground flex items-center justify-center">
                        <Check className="w-4 h-4 text-background" />
                      </div>
                      <span className="text-sm md:text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* FAQ Section */}
      <FAQ
        items={servicesFAQs}
        title="Frequently Asked Questions"
        description="Get answers to common questions about our services and process"
      />

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={ctaRef}
            className="relative bg-foreground text-white rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 border-2 border-white rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-72 h-72 border-2 border-white rounded-full translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="font-oswald text-2xl md:text-4xl lg:text-6xl font-normal mb-6 tracking-tighter leading-tight">
                Ready to bring your vision to life?
              </h2>
              <p className="text-sm md:text-xl text-white/80 mb-8">
                Let's collaborate and create something extraordinary together.
                Our team is ready to turn your ideas into reality.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-3 bg-white text-foreground px-6 md:px-8 py-3 md:py-4 rounded-full font-oswald text-sm md:text-base uppercase hover:bg-white/90 transition-all duration-300 group"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
