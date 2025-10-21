"use client";

import { useEffect } from "react";
import { initBarba } from "./barba-config";

interface BarbaWrapperProps {
  children: React.ReactNode;
  namespace?: string;
}

export default function BarbaWrapper({
  children,
  namespace = "home",
}: BarbaWrapperProps) {
  useEffect(() => {
    // Delay initialization to ensure DOM is ready
    const timer = setTimeout(() => {
      initBarba();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div data-barba="wrapper">
      <div data-barba="container" data-barba-namespace={namespace}>
        {children}
      </div>
    </div>
  );
}
