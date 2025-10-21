"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { expertiseData } from "@/lib/constants/expertise";

gsap.registerPlugin(ScrollTrigger);

export default function Expertise() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const swiperContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      if (titleRef.current) {
        const heading = titleRef.current.querySelector(".main-heading");
        const subheading = titleRef.current.querySelector(".sub-heading");
        const line = titleRef.current.querySelector(".decorative-line");

        gsap.fromTo(
          heading,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );

        gsap.fromTo(
          line,
          { scaleX: 0, opacity: 0 },
          {
            scaleX: 1,
            opacity: 1,
            duration: 1,
            delay: 0.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );

        gsap.fromTo(
          subheading,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Swiper container animation
      if (swiperContainerRef.current) {
        gsap.fromTo(
          swiperContainerRef.current,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            delay: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: swiperContainerRef.current,
              start: "top 85%",
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
      className="relative bg-background text-foreground py-20 md:py-32 overflow-hidden"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(currentColor 1px, transparent 1px),
                             linear-gradient(90deg, currentColor 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            color: "#181832",
            maskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="text-center space-y-4">
          <h2 className="main-heading text-2xl md:text-4xl lg:text-6xl font-oswald font-normal text-foreground tracking-tighter leading-tight text-center">
            Our Expertise
          </h2>
          <div className="decorative-line h-1 w-32 bg-foreground mx-auto mb-8 rounded-full" />
          <p className="sub-heading max-w-3xl pl-4 mx-auto mt-4 text-neutral-800 text-base md:text-lg text-start">
            Delivering excellence across multiple domains with cutting-edge
            technology and innovative solutions
          </p>
        </div>

        {/* Swiper Carousel */}
        <div ref={swiperContainerRef}>
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="expertise-swiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: true,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 25,
                centeredSlides: true,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
                centeredSlides: true,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
                centeredSlides: true,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 50,
                centeredSlides: true,
              },
            }}
          >
            {expertiseData.map((item, index) => (
              <SwiperSlide key={index} className="">
                <div className="group relative bg-background rounded-3xl p-8 border-2 border-foreground border-opacity-20 hover:border-opacity-40 transition-all duration-500 h-[420px] flex flex-col">
                  {/* Glowing effect on hover */}
                  <div className="absolute inset-0 rounded-3xl bg-foreground opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-xl" />

                  {/* Card content */}
                  <div className="relative flex-1 flex flex-col">
                    {/* Title with underline */}
                    <div className="mb-6">
                      <h3 className="text-3xl font-normal mb-3 text-foreground transition-all duration-300">
                        {item.title}
                      </h3>
                      <div className="h-1 w-16 bg-foreground rounded-full group-hover:w-24 transition-all duration-300" />
                    </div>

                    {/* Description */}
                    <p className="text-foreground opacity-70 text-base leading-relaxed mb-8 flex-1">
                      {item.description}
                    </p>

                    {/* Tech stack with modern pills */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {item.icons.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="relative px-4 py-2 text-sm font-medium text-foreground rounded-full border border-foreground border-opacity-30 group-hover:border-opacity-50 transition-all duration-300 overflow-hidden"
                        >
                          <span className="relative z-10">{tech}</span>
                          <span className="absolute inset-0 bg-foreground opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-foreground to-transparent opacity-10 skew-x-12" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom stats or CTA section */}
        <div className="mt-24 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="text-center">
            <div className="text-5xl font-bold text-foreground mb-2">50+</div>
            <div className="text-foreground opacity-60 text-sm uppercase tracking-wider">
              Projects Delivered
            </div>
          </div>
          <div className="hidden md:block h-16 w-px bg-foreground opacity-20" />
          <div className="text-center">
            <div className="text-5xl font-bold text-foreground mb-2">98%</div>
            <div className="text-foreground opacity-60 text-sm uppercase tracking-wider">
              Client Satisfaction
            </div>
          </div>
          <div className="hidden md:block h-16 w-px bg-foreground opacity-20" />
          <div className="text-center">
            <div className="text-5xl font-bold text-foreground mb-2">24/7</div>
            <div className="text-foreground opacity-60 text-sm uppercase tracking-wider">
              Support Available
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .expertise-swiper {
          padding: 40px 20px;
        }

        .expertise-swiper .swiper-slide {
          width: 380px;
          max-width: 90vw;
        }

        @media (max-width: 640px) {
          .expertise-swiper .swiper-slide {
            width: 320px;
            max-width: 85vw;
          }
        }

        @media (min-width: 640px) and (max-width: 768px) {
          .expertise-swiper .swiper-slide {
            width: 350px;
          }
        }

        .expertise-swiper .swiper-pagination-bullet {
          background: rgba(24, 24, 50, 0.3);
          width: 10px;
          height: 10px;
        }

        .expertise-swiper .swiper-pagination-bullet-active {
          background: #181832;
          width: 30px;
          border-radius: 5px;
        }

        .expertise-swiper .swiper-slide-shadow-left,
        .expertise-swiper .swiper-slide-shadow-right {
          display: none !important;
        }

      `}</style>
    </section>
  );
}
