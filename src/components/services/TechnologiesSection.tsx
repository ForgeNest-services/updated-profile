"use client";
import { IconCloud } from "@/components/ui/icon-cloud";

interface Technology {
  slug: string;
  name: string;
}

interface TechnologiesSectionProps {
  technologies?: Technology[];
}

export default function TechnologiesSection({
  technologies,
}: TechnologiesSectionProps) {
  if (!technologies || technologies.length === 0) {
    return null;
  }

  // Generate image URLs from slugs
  const images = technologies.map(
    (tech) => `https://cdn.simpleicons.org/${tech.slug}`
  );

  return (
    <section className="py-20 md:py-32 bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left - Description */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-oswald font-normal text-foreground tracking-tighter leading-tight mb-4">
                Built With Best Tech
              </h2>
              <div className="w-20 h-1 bg-foreground" />
            </div>

            <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
              We leverage cutting-edge technologies and modern frameworks to
              build scalable, performant, and maintainable solutions. Our
              carefully selected tech stack ensures reliability, security, and
              long-term success for your project.
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-foreground/80">
                <span className="text-foreground flex-shrink-0 mt-1">✓</span>
                <span>Latest frameworks and libraries</span>
              </li>
              <li className="flex items-start gap-3 text-foreground/80">
                <span className="text-foreground flex-shrink-0 mt-1">✓</span>
                <span>Enterprise-grade tools and platforms</span>
              </li>
              <li className="flex items-start gap-3 text-foreground/80">
                <span className="text-foreground flex-shrink-0 mt-1">✓</span>
                <span>Community-driven and well-supported</span>
              </li>
            </ul>
          </div>

          {/* Right - Icons Cloud */}
          <div className="flex justify-center">
            <div className="w-full max-w-md overflow-hidden">
              <IconCloud images={images} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
