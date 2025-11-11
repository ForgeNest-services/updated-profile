"use client";
import TitleAnimation from "../ui/TitleAnimation";
import TextAnimation from "../ui/TextAnimation";
import { Check } from "lucide-react";

interface WhatWeDo {
  title: string;
  description: string;
  benefits: string[];
}

interface WhatWeSectionProps {
  whatWeDo: WhatWeDo;
}

export default function WhatWeDo({ whatWeDo }: WhatWeSectionProps) {
  return (
    <section className="py-20 md:py-32 bg-foreground/5 text-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-oswald font-normal text-foreground tracking-tighter leading-tight mb-4">
            {whatWeDo.title}
          </h2>
          <div className="w-20 h-1 bg-foreground mb-8" />
          <TextAnimation
            className="text-foreground/70 text-base md:text-lg leading-relaxed"
            animationType="fadeUp"
            delay={0.1}
          >
            {whatWeDo.description}
          </TextAnimation>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {whatWeDo.benefits.map((benefit, index) => (
            <TextAnimation
              key={index}
              className="flex items-start gap-4 p-6 rounded-xl bg-background border border-foreground/10 hover:border-foreground/30 transition-colors duration-300"
              animationType="fadeUp"
              delay={0.05 * (index + 1)}
            >
              <Check className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
              <span className="text-sm md:text-base text-foreground/80">
                {benefit}
              </span>
            </TextAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
