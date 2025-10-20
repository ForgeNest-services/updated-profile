"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ChevronDown } from "lucide-react";
import { useLottie } from "lottie-react";
import heroWalkAnimation from "@/lib/animations/hero.json";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { avatars } from "@/lib/constants/avatars";
import { SpinningText } from "@/components/ui/spinning-text";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleWordsRef = useRef<HTMLSpanElement[]>([]);
  const subtitleBoxRef = useRef<HTMLDivElement>(null);
  const subtitleTextRef = useRef<HTMLParagraphElement>(null);
  const lottieRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const circlesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Filter out null refs with null checks
      const validTitleWords =
        titleWordsRef.current?.filter((el) => el !== null) || [];
      const validCircles =
        circlesRef.current?.filter((el) => el !== null) || [];

      if (validTitleWords.length === 0) return;

      // Set initial states
      gsap.set(validTitleWords, {
        rotateX: 90,
        opacity: 0,
        transformOrigin: "bottom center",
        transformPerspective: 1000,
      });

      if (subtitleBoxRef.current) {
        gsap.set(subtitleBoxRef.current, {
          scaleX: 0,
          transformOrigin: "left center",
        });
      }

      if (subtitleTextRef.current) {
        gsap.set(subtitleTextRef.current, {
          opacity: 0,
          y: 20,
        });
      }

      if (lottieRef.current) {
        gsap.set(lottieRef.current, {
          scale: 0.5,
          opacity: 0,
          rotate: -10,
        });
      }

      if (scrollIndicatorRef.current) {
        gsap.set(scrollIndicatorRef.current, {
          y: 50,
          opacity: 0,
        });
      }

      if (validCircles.length > 0) {
        gsap.set(validCircles, {
          scale: 0,
          opacity: 0,
        });
      }

      // Create timeline
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      // Animate title words standing up from sleep
      tl.to(validTitleWords, {
        rotateX: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: "back.out(1.5)",
      });

      // Subtitle box expands
      if (subtitleBoxRef.current) {
        tl.to(
          subtitleBoxRef.current,
          {
            scaleX: 1,
            duration: 0.8,
            ease: "power2.inOut",
          },
          "-=0.6"
        );
      }

      // Subtitle text fades in
      if (subtitleTextRef.current) {
        tl.to(
          subtitleTextRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.4"
        );
      }

      // Lottie animation
      if (lottieRef.current) {
        tl.to(
          lottieRef.current,
          {
            scale: 1,
            opacity: 1,
            rotate: 0,
            duration: 1,
            ease: "back.out(1.2)",
          },
          "-=1"
        );
      }

      // Circles pop in
      if (validCircles.length > 0) {
        tl.to(
          validCircles,
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(2)",
          },
          "-=0.8"
        );
      }

      // Scroll indicator
      if (scrollIndicatorRef.current) {
        tl.to(
          scrollIndicatorRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
          },
          "-=0.4"
        );

        // Scroll indicator bounce loop
        gsap.to(scrollIndicatorRef.current, {
          y: 10,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: 2,
        });
      }

      // Floating circles
      validCircles.forEach((circle, index) => {
        gsap.to(circle, {
          y: Math.random() * 15 - 7.5,
          x: Math.random() * 15 - 7.5,
          duration: 2.5 + Math.random() * 1.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.15,
        });
      });

      // Animate logo scatter circles
      const validLogoCircles =
        circlesRef.current?.filter((el) => el !== null) || [];
      if (validLogoCircles.length > 0) {
        validLogoCircles.forEach((circle, index) => {
          gsap.to(circle, {
            x: `${(Math.random() - 0.5) * 100}%`,
            y: `${(Math.random() - 0.5) * 100}%`,
            scale: Math.random() * 0.5 + 0.5,
            duration: 3 + Math.random() * 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.1,
          });
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const options = {
    animationData: heroWalkAnimation,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid meet",
    },
    style: {
      width: "80%",
      height: "80%",
    },
  };

  const { View } = useLottie(options);
  // Decorative circles data
  const circles = [
    { size: "w-12 h-12 md:w-16 md:h-16", position: "top-10 left-5 md:left-10" },
    {
      size: "w-10 h-10 md:w-12 md:h-12",
      position: "top-20 right-10 md:right-20",
    },
    {
      size: "w-16 h-16 md:w-20 md:h-20",
      position: "bottom-20 left-10 md:left-20",
    },
    {
      size: "w-14 h-14 md:w-16 md:h-16",
      position: "bottom-32 right-5 md:right-16",
    },
  ];

  const titleWords = ["We Build", "What You", "Imagine."];

  return (
    <section
      ref={heroRef}
      className="relative bg-background overflow-hidden flex items-center justify-center py-28"
    >
      {/* Decorative floating circles */}
      {circles.map((circle, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) circlesRef.current[index] = el;
          }}
          className={`absolute ${circle.size} ${circle.position} rounded-full border-2 border-foreground/20 pointer-events-none`}
        />
      ))}

      <div className="bg-[#f8f8f8] border-2 border-foreground/30 relative max-w-screen-2xl mx-auto px-4 md:px-12 lg:px-20 py-4 lg:py-12 rounded-3xl shadow-2xl flex flex-col-reverse md:flex-row gap-y-8 md:gap-x-8 lg:gap-x-12 justify-start item-start ">
        <div className="max-w-lg space-y-6">
          {/* Animated Title */}
          <h1 className="text-2xl text-center lg:text-start md:text-4xl lg:text-6xl font-oswald font-normal text-foreground tracking-tighter leading-tight">
            {titleWords.map((word, index) => (
              <span
                key={index}
                ref={(el) => {
                  if (el) titleWordsRef.current[index] = el;
                }}
                className="inline-block"
                style={{ transformStyle: "preserve-3d" }}
              >
                {word}
                {index < titleWords.length - 1 && (
                  <span className="inline-block w-2" />
                )}
              </span>
            ))}
          </h1>

          {/* Animated Subtitle Box */}
          <div
            ref={subtitleBoxRef}
            className="relative bg-foreground text-white py-6 md:py-10 px-6 md:px-10 overflow-hidden"
          >
            {/* Fading border right */}
            <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-transparent via-white to-transparent opacity-50" />
            <p
              ref={subtitleTextRef}
              className="text-sm md:text-base lg:text-lg font-oswald font-light text-justify"
            >
              A space where ideas are nurtured, designed, and brought to life.
              We blend technology, creativity, and strategy to forge digital
              experiences that inspire growth and imagination.
            </p>
          </div>
          <div className="relative">
            <div className="*:data-[slot=avatar]:ring-background flex justify-center items-center md:justify-start pt-10 -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar-image]:grayscale-0">
              {avatars.map((a, index) => (
                <Avatar key={index}>
                  <AvatarImage src={a.imageUrl} alt={a.profileUrl} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <div className="hidden lg:block absolute -bottom-25 left-10">
              <SpinningText>Forgenest Services Pvt. Ltd.</SpinningText>
            </div>
          </div>
        </div>

        {/* Logo Animation Placeholder */}
        <div ref={lottieRef} className="flex items-center justify-center">
          <div className="relative w-full  flex items-center justify-center">
            {/* <video src="/video/logo.mp4" autoPlay loop muted playsInline /> */}
            {View}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
      >
        <span className="font-oswald text-xs md:text-sm uppercase tracking-wider text-foreground/60">
          Scroll to Explore
        </span>
        <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-foreground/60" />
      </div>
    </section>
  );
}
