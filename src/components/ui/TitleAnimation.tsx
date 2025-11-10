"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface TitleAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  trigger?: string;
  start?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div";
}

export default function TitleAnimation({
  children,
  className = "",
  delay = 0,
  stagger = 0.15,
  duration = 1.2,
  trigger = "top 80%",
  start = "top 80%",
  as = "div",
}: TitleAnimationProps) {
  const containerRef = useRef<HTMLHeadingElement | HTMLDivElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const validWords = wordsRef.current?.filter((el) => el !== null) || [];

      if (validWords.length === 0) return;

      // Set initial states
      gsap.set(validWords, {
        rotateX: 90,
        opacity: 0,
        transformOrigin: "bottom center",
        transformPerspective: 1000,
      });

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

      // Animate title words standing up from sleep
      tl.to(validWords, {
        rotateX: 0,
        opacity: 1,
        duration: duration,
        stagger: stagger,
        ease: "back.out(1.5)",
      });
    }, containerRef);

    return () => ctx.revert();
  }, [delay, stagger, duration, trigger, start]);

  // Split text into words for animation
  const splitTextIntoWords = (text: string) => {
    return text.split(" ").map((word, index) => (
      <span
        key={index}
        ref={(el) => {
          if (el) wordsRef.current[index] = el;
        }}
        className="inline-block"
        style={{ transformStyle: "preserve-3d" }}
      >
        {word}
        {index < text.split(" ").length - 1 && (
          <span className="inline-block w-2" />
        )}
      </span>
    ));
  };

  // Handle different children types
  const renderContent = () => {
    if (typeof children === "string") {
      return splitTextIntoWords(children);
    }

    if (React.isValidElement(children) && (children as React.ReactElement).type === "span") {
      // If it's already a span with text, split it
      const text = (children as any).props?.children as unknown;
      if (typeof text === "string") {
        return splitTextIntoWords(text);
      }
    }

    // For complex JSX, wrap each word
    return React.Children.map(children, (child, index) => {
      if (typeof child === "string") {
        return splitTextIntoWords(child);
      }
      return (
        <span
          key={index}
          ref={(el) => {
            if (el) wordsRef.current[index] = el;
          }}
          className="inline-block"
          style={{ transformStyle: "preserve-3d" }}
        >
          {child}
        </span>
      );
    });
  };

  // Map heading level to element
  const HeadingElement = as as keyof JSX.IntrinsicElements;
  const HeadingTag = as === "div" ? "div" : (as as keyof React.JSX.IntrinsicElements);

  return React.createElement(
    HeadingTag,
    {
      ref: containerRef,
      className: className,
    },
    renderContent()
  );
}
