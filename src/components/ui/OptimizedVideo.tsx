"use client";
import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

interface OptimizedVideoProps {
  src: string;
  poster?: string;
  className?: string;
  alt?: string;
}

export default function OptimizedVideo({
  src,
  poster,
  className = "w-full h-full object-cover",
  alt = "Service video",
}: OptimizedVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, we can stop observing
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.25, // Trigger when 25% visible
        rootMargin: "50px", // Start loading 50px before visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-hidden group">
      {/* Play Button Overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 z-10 group-hover:bg-black/30 transition-colors duration-300">
          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300">
            <Play className="w-6 h-6 text-black fill-black ml-1" />
          </div>
        </div>
      )}

      {/* Poster Image */}
      {poster && !isLoaded && (
        <img src={poster} alt={alt} className={className} loading="lazy" />
      )}

      {/* Video Element - Only renders when visible */}
      {isVisible && (
        <video
          ref={videoRef}
          preload="metadata"
          autoPlay
          loop
          muted
          playsInline
          controlsList="nodownload"
          className={className}
          poster={poster}
          onLoadedMetadata={() => setIsLoaded(true)}
          onCanPlay={() => setIsLoaded(true)}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Loading State */}
      {isVisible && !isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900/10">
          <div className="w-8 h-8 border-3 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}
