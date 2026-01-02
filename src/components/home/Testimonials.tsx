"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star } from "lucide-react";
import Image from "next/image";
import TitleAnimation from "../ui/TitleAnimation";

import "swiper/css";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  const testimonials = [
    {
      name: "Niraj Chaudhary",
      role: "Founder, Indrayani Enterprises & Trade Concern",
      message:
        "Forgenest transformed our outdated website into a modern lead-generating machine. The team's attention to detail is unmatched.",
      image: "/images/testimonials/niraj.png",
    },
    {
      name: "Nava Raj Bhatta",
      role: "Expert Vedic Astrologer, Bhattaguru",
      message:
        "Incredible service! They understood our vision perfectly and delivered a custom application that streamlined our entire workflow.",
      image: "/images/testimonials/navaraj.jpg",
    },
    {
      name: "Ram Silwal",
      role: "Manager, Mata Indrayani S&C Cooperative Ltd.",
      message:
        "Professional, timely, and creative. Working with Forgenest felt like having an in-house tech team. Highly recommended.",
      image: "/images/testimonials/ram.png",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (sectionRef.current) {
        gsap.fromTo(
          sectionRef.current.querySelectorAll(".testimonial-card"),
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
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
      className="relative bg-background text-foreground "
    >
      <div className="relative w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-center items-center flex-col mb-12 md:mb-16">
          <TitleAnimation
            as="h2"
            className="text-2xl text-center md:text-4xl lg:text-6xl font-oswald font-normal text-foreground tracking-tighter leading-tight"
          >
            Client Success Stories
          </TitleAnimation>
          <div className="mt-2 lg:mt-6 w-20 lg:w-40 h-1 bg-foreground" />
        </div>

        {/* Testimonials Slider - Desktop */}
        <div className="hidden md:block">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            className="testimonials-swiper pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-card bg-white border border-foreground/10 rounded-2xl p-6 md:p-8 h-full flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#dd4f43] text-[#dd4f43]"
                      />
                    ))}
                  </div>

                  {/* Message */}
                  <p className="text-sm md:text-base text-foreground/80 italic leading-relaxed mb-6 flex-grow">
                    &ldquo;{testimonial.message}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-foreground/10 flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          // Fallback to placeholder if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.src =
                            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23ddd'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='40' fill='%23999'%3E" +
                            testimonial.name.charAt(0) +
                            "%3C/text%3E%3C/svg%3E";
                        }}
                      />
                    </div>
                    <div>
                      <div className="font-oswald font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-foreground/60">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Testimonials Grid - Mobile */}
        <div className="md:hidden grid grid-cols-1 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card bg-white border border-foreground/10 rounded-2xl p-6 shadow-sm"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#dd4f43] text-[#dd4f43]"
                  />
                ))}
              </div>

              {/* Message */}
              <p className="text-sm text-foreground/80 italic leading-relaxed mb-6">
                &ldquo;{testimonial.message}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-foreground/10 flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23ddd'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='40' fill='%23999'%3E" +
                        testimonial.name.charAt(0) +
                        "%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <div>
                  <div className="font-oswald font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-foreground/60">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .testimonials-swiper .swiper-pagination {
          bottom: 0 !important;
        }
        .testimonials-swiper .swiper-pagination-bullet {
          background: #181832;
          opacity: 0.3;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          background: #dd4f43;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
