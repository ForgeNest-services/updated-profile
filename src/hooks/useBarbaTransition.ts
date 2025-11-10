import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Custom hook to handle GSAP ScrollTrigger cleanup and refresh on Barba transitions
 * Use this in components that have scroll-triggered animations
 */
export const useBarbaTransition = () => {
  useEffect(() => {
    const handleBarbaAfter = () => {
      // Kill and refresh all ScrollTriggers after Barba transition
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ScrollTrigger.refresh();
    };

    window.addEventListener("barba:after", handleBarbaAfter);

    return () => {
      window.removeEventListener("barba:after", handleBarbaAfter);
    };
  }, []);
};
