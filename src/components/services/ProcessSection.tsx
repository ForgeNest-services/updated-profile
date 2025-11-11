"use client";
import { ProcessStep } from "@/data/services";
import TitleAnimation from "../ui/TitleAnimation";
import TextAnimation from "../ui/TextAnimation";
import * as LucideIcons from "lucide-react";

interface ProcessSectionProps {
  steps: ProcessStep[];
}

export default function ProcessSection({ steps }: ProcessSectionProps) {
  return (
    <section className="py-20 md:py-32 bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-oswald font-normal text-foreground tracking-tighter leading-tight mb-4">
          Our Process
        </h2>
        <div className="w-20 h-1 bg-foreground mb-12 md:mb-16" />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-foreground via-foreground/50 to-transparent transform -translate-x-1/2" />

          <div className="space-y-16 md:space-y-20">
            {steps.map((step, index) => {
              const IconComponent = step.iconName
                ? (LucideIcons[step.iconName as keyof typeof LucideIcons] as any)
                : null;

              return (
                <div
                  key={step.number}
                  className={`grid md:grid-cols-2 gap-8 md:gap-12 items-stretch ${
                    index % 2 === 1 ? "md:grid-flow-dense" : ""
                  }`}
                >
                  {/* Content Section */}
                  <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                    <div className="relative pl-20 md:pl-0">
                      {/* Mobile circle - visible on small screens */}
                      <div className="md:hidden absolute -left-10 top-0 w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center flex-shrink-0">
                        <span className="font-oswald font-bold text-xl">
                          {step.number}
                        </span>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-oswald font-normal text-foreground tracking-tight mb-2">
                            {step.title}
                          </h3>
                          <TextAnimation
                            className="text-foreground/70 text-sm md:text-base leading-relaxed"
                            animationType="fadeUp"
                            delay={0.1}
                          >
                            {step.description}
                          </TextAnimation>
                        </div>

                        {step.details && step.details.length > 0 && (
                          <ul className="space-y-2 pt-4">
                            {step.details.map((detail, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-3 text-foreground/60 text-sm"
                              >
                                <span className="text-foreground/40 font-oswald flex-shrink-0 mt-1 text-lg">
                                  ✓
                                </span>
                                <span className="pt-0.5">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Visual Element Section - Icon Box */}
                  <div
                    className={`hidden md:flex relative ${
                      index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""
                    }`}
                  >
                    <div className="w-full flex flex-col items-center justify-center gap-6">
                      {/* Step circle centered on timeline */}
                      <div className="relative h-32 w-full flex items-center justify-center">
                        {/* Circle with number */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-foreground text-background flex items-center justify-center flex-shrink-0 z-10 shadow-lg">
                          <span className="font-oswald font-bold text-2xl">
                            {step.number}
                          </span>
                        </div>
                      </div>

                      {/* Icon Card below circle */}
                      {IconComponent && (
                        <div className="w-full max-w-xs p-8 rounded-2xl bg-gradient-to-br from-foreground/5 to-foreground/10 border border-foreground/10 flex flex-col items-center justify-center gap-4 hover:border-foreground/30 transition-colors duration-300">
                          <IconComponent className="w-12 h-12 text-foreground" />
                          <p className="text-sm font-medium text-foreground/70 text-center">
                            {step.title}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
