"use client";
import TitleAnimation from "../ui/TitleAnimation";
import TextAnimation from "../ui/TextAnimation";
import { Check } from "lucide-react";

interface CaseStudy {
  title: string;
  description: string;
  results: string[];
}

interface CaseStudiesSectionProps {
  caseStudies?: CaseStudy[];
}

export default function CaseStudiesSection({
  caseStudies,
}: CaseStudiesSectionProps) {
  if (!caseStudies || caseStudies.length === 0) {
    return null;
  }

  return (
    <section className="py-20 md:py-32 bg-foreground/5 text-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-oswald font-normal text-foreground tracking-tighter leading-tight mb-4">
          Case Studies
        </h2>
        <div className="w-20 h-1 bg-foreground mb-12 md:mb-16" />

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {caseStudies.map((caseStudy, index) => (
            <TextAnimation
              key={index}
              className="p-8 rounded-2xl bg-background border border-foreground/10 hover:border-foreground/20 transition-colors duration-300"
              animationType="fadeUp"
              delay={0.1 * (index + 1)}
            >
              {/* Title */}
              <h3 className="text-xl md:text-2xl font-oswald font-normal text-foreground mb-3 tracking-tight">
                {caseStudy.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-foreground/70 leading-relaxed mb-6">
                {caseStudy.description}
              </p>

              {/* Results */}
              <div className="space-y-3">
                <p className="text-sm font-medium text-foreground/60 uppercase tracking-wide">
                  Key Results
                </p>
                {caseStudy.results.map((result, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 text-sm md:text-base text-foreground/80"
                  >
                    <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                    <span>{result}</span>
                  </div>
                ))}
              </div>
            </TextAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
