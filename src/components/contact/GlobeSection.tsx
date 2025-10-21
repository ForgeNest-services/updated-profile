import React from "react";
import { Globe } from "@/components/ui/globe";

export default function GlobeSection() {
  return (
    <div className="relative w-full max-w-[800px] h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px] overflow-hidden">
      <Globe className="top-[-15%] md:top-[-20%]" />
    </div>
  );
}
