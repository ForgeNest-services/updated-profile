"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { expertiseData } from "@/lib/constants/expertise";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

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
      className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 md:py-40 overflow-hidden"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="mb-20 text-center">
          <h2 className="main-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            Our Expertise
          </h2>
          <div className="decorative-line h-1 w-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-8 rounded-full" />
          <p className="sub-heading max-w-3xl mx-auto text-slate-300 text-lg md:text-xl leading-relaxed">
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
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
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
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            {expertiseData.map((item, index) => (
              <SwiperSlide key={index} className="pb-16">
                <div className="group relative bg-gradient-to-br from-foreground-800 to-foreground-900 rounded-3xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-500 h-[420px] flex flex-col">
                  {/* Glowing effect on hover */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-foreground-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                  {/* Card content */}
                  <div className="relative flex-1 flex flex-col">
                    {/* Number badge */}
                    {/* <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/50 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div> */}

                    {/* Title with gradient underline */}
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                        {item.title}
                      </h3>
                      <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:w-24 transition-all duration-300" />
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 text-base leading-relaxed mb-8 flex-1">
                      {item.description}
                    </p>

                    {/* Tech stack with modern pills */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {item.icons.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="relative px-4 py-2 text-sm font-medium text-slate-300 rounded-full border border-slate-600 group-hover:border-blue-500/50 group-hover:text-white transition-all duration-300 overflow-hidden"
                        >
                          <span className="relative z-10">{tech}</span>
                          <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom stats or CTA section */}
        <div className="mt-24 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="text-center">
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              50+
            </div>
            <div className="text-slate-400 text-sm uppercase tracking-wider">
              Projects Delivered
            </div>
          </div>
          <div className="hidden md:block h-16 w-px bg-gradient-to-b from-transparent via-slate-600 to-transparent" />
          <div className="text-center">
            <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              98%
            </div>
            <div className="text-slate-400 text-sm uppercase tracking-wider">
              Client Satisfaction
            </div>
          </div>
          <div className="hidden md:block h-16 w-px bg-gradient-to-b from-transparent via-slate-600 to-transparent" />
          <div className="text-center">
            <div className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <div className="text-slate-400 text-sm uppercase tracking-wider">
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

        .expertise-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5);
          width: 10px;
          height: 10px;
        }

        .expertise-swiper .swiper-pagination-bullet-active {
          background: linear-gradient(to right, #3b82f6, #a855f7);
          width: 30px;
          border-radius: 5px;
        }

        .swiper-slide-shadow-left,
        .swiper-slide-shadow-right {
          background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), transparent);
        }
      `}</style>
    </section>
  );
}
