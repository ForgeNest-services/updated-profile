"use client";
import { useState, useRef, useEffect, useTransition } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Send, CheckCircle } from "lucide-react";
import { subscribeAction } from "@/server/newsletter";
import { toast } from "sonner";

gsap.registerPlugin(ScrollTrigger);

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, startTransition] = useTransition();

  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const action = async (formData: FormData) => {
    startTransition(async () => {
      try {
        await subscribeAction(formData);
        setIsSubmitted(true);
        setEmail("");
        toast.success("Subscribed successfully");
        setTimeout(() => setIsSubmitted(false), 5000);
      } catch (e: any) {
        toast.error(e?.message || "Subscription failed");
      }
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-background text-foreground py-20 md:py-32 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-foreground/5 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={contentRef}
          className="bg-foreground text-white rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 border-2 border-white rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 border-2 border-white rounded-full translate-y-1/2 -translate-x-1/2" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full">
              <Mail className="w-8 h-8 md:w-10 md:h-10" />
            </div>

            {/* Title */}
            <h2 className="text-2xl text-center md:text-4xl lg:text-6xl font-oswald font-normal text-background tracking-tighter leading-tight">
              Stay In The Loop
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-white/80">
              Subscribe to our newsletter and get the latest updates on
              projects, insights, and exclusive content delivered straight to
              your inbox.
            </p>

            {/* Form or Success Message */}
            {!isSubmitted ? (
              <form
                action={action}
                className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
              >
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-6 py-4 rounded-full bg-white/10 border-2 border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/60 transition-all duration-300 backdrop-blur-sm"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group px-8 py-4 bg-white text-foreground rounded-full font-oswald text-sm md:text-base uppercase font-semibold hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="w-5 h-5 border-2 border-foreground/30 border-t-foreground rounded-full animate-spin" />
                  ) : (
                    <>
                      Subscribe
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-4 max-w-md mx-auto">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="font-medium text-lg">
                  Thanks for subscribing!
                </span>
              </div>
            )}

            {/* Privacy note */}
            <p className="text-xs md:text-sm text-white/50 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
