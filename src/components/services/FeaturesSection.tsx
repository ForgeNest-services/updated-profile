"use client";
import { ServiceFeature } from "@/data/services";
import TitleAnimation from "../ui/TitleAnimation";
import TextAnimation from "../ui/TextAnimation";
import * as LucideIcons from "lucide-react";

interface FeaturesSectionProps {
  features: ServiceFeature[];
}

export default function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <section className="py-20 md:py-32 bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-oswald font-normal text-foreground tracking-tighter leading-tight mb-4">
          Key Features
        </h2>
        <div className="w-20 h-1 bg-foreground mb-12 md:mb-16" />

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.iconName
              ? (LucideIcons[feature.iconName as keyof typeof LucideIcons] as any)
              : null;

            return (
              <TextAnimation
                key={index}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-foreground/5 to-foreground/10 border border-foreground/10 hover:border-foreground/30 transition-all duration-300"
                animationType="fadeUp"
                delay={0.05 * (index + 1)}
              >
                {/* Icon */}
                {IconComponent && (
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-foreground" />
                  </div>
                )}

                {/* Title */}
                <h3 className="text-lg md:text-xl font-oswald font-normal text-foreground mb-3 tracking-tight">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative line on hover */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-foreground group-hover:w-1/2 transition-all duration-300 rounded-full" />
              </TextAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}
