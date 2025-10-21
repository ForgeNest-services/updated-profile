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
import TitleAnimation from "../ui/TitleAnimation";
import TextAnimation from "../ui/TextAnimation";

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
          <TitleAnimation className="main-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-oswald font-normal text-foreground tracking-tighter leading-tight text-center">
            Our Expertise
          </TitleAnimation>
          <div className="decorative-line h-1 w-20 sm:w-24 md:w-28 lg:w-32 bg-foreground mx-auto rounded-full" />
          <TextAnimation className="sub-heading max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto text-neutral-800 text-sm sm:text-base md:text-lg lg:text-xl text-center px-4">
            Delivering excellence across multiple domains with cutting-edge
            technology and innovative solutions
          </TextAnimation>
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
                <div className="group relative bg-background rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border-2 border-foreground border-opacity-20 hover:border-opacity-40 transition-all duration-500 h-[380px] sm:h-[400px] md:h-[420px] flex flex-col">
                  {/* Glowing effect on hover */}
                  <div className="absolute inset-0 rounded-3xl bg-foreground opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-xl" />

                  {/* Card content */}
                  <div className="relative flex-1 flex flex-col">
                    {/* Title with underline */}
                    <div className="mb-4 sm:mb-6">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-normal mb-2 sm:mb-3 text-foreground transition-all duration-300">
                        {item.title}
                      </h3>
                      <div className="h-1 w-12 sm:w-16 bg-foreground rounded-full group-hover:w-16 sm:group-hover:w-24 transition-all duration-300" />
                    </div>

                    {/* Description */}
                    <p className="text-foreground opacity-70 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 flex-1">
                      {item.description}
                    </p>

                    {/* Tech stack with modern pills */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {item.icons.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="relative px-2 sm:px-3 md:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium text-foreground rounded-full border border-foreground border-opacity-30 group-hover:border-opacity-50 transition-all duration-300 overflow-hidden"
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
        <div className="mt-16 sm:mt-20 md:mt-24 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-16">
          <div className="text-center">
            <TextAnimation className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-1 sm:mb-2">
              50+
            </TextAnimation>
            <TextAnimation className="text-foreground opacity-60 text-xs sm:text-sm uppercase tracking-wider">
              Projects Delivered
            </TextAnimation>
          </div>
          <div className="hidden sm:block h-12 sm:h-16 w-px bg-foreground opacity-20" />
          <div className="text-center">
            <TextAnimation className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-1 sm:mb-2">
              98%
            </TextAnimation>
            <TextAnimation className="text-foreground opacity-60 text-xs sm:text-sm uppercase tracking-wider">
              Client Satisfaction
            </TextAnimation>
          </div>
          <div className="hidden sm:block h-12 sm:h-16 w-px bg-foreground opacity-20" />
          <div className="text-center">
            <TextAnimation className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-1 sm:mb-2">
              24/7
            </TextAnimation>
            <TextAnimation className="text-foreground opacity-60 text-xs sm:text-sm uppercase tracking-wider">
              Support Available
            </TextAnimation>
          </div>
        </div>
      </div>

      <style>{`
        .expertise-swiper {
          padding: 20px 10px;
        }

        @media (min-width: 640px) {
          .expertise-swiper {
            padding: 30px 15px;
          }
        }

        @media (min-width: 1024px) {
          .expertise-swiper {
            padding: 40px 20px;
          }
        }

        .expertise-swiper .swiper-slide {
          width: 280px;
          max-width: 90vw;
        }

        @media (min-width: 480px) {
          .expertise-swiper .swiper-slide {
            width: 320px;
          }
        }

        @media (min-width: 640px) {
          .expertise-swiper .swiper-slide {
            width: 350px;
          }
        }

        @media (min-width: 768px) {
          .expertise-swiper .swiper-slide {
            width: 380px;
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
