"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface TextAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  trigger?: string;
  start?: string;
  animationType?: "fadeUp" | "fadeIn" | "slideIn" | "scaleIn";
}

export default function TextAnimation({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  trigger = "top 80%",
  start = "top 80%",
  animationType = "fadeUp",
}: TextAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current) return;

      // Set initial states based on animation type
      const initialStates = {
        fadeUp: { y: 20, opacity: 0 },
        fadeIn: { opacity: 0 },
        slideIn: { x: -30, opacity: 0 },
        scaleIn: { scale: 0.8, opacity: 0 },
      };

      gsap.set(containerRef.current, initialStates[animationType]);

      // Create animation timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: trigger,
          toggleActions: "play none none none",
        },
        defaults: { ease: "power3.out" },
        delay: delay,
      });

      // Animate based on type
      const animateStates = {
        fadeUp: { y: 0, opacity: 1, duration: duration },
        fadeIn: { opacity: 1, duration: duration },
        slideIn: { x: 0, opacity: 1, duration: duration },
        scaleIn: { scale: 1, opacity: 1, duration: duration },
      };

      tl.to(containerRef.current, animateStates[animationType]);
    }, containerRef);

    return () => ctx.revert();
  }, [delay, duration, trigger, start, animationType]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
