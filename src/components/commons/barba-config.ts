import gsap from "gsap";

export const initBarba = () => {
  if (typeof window === "undefined") return;

  import("@barba/core")
    .then((barba) => {
      barba.default.init({
        transitions: [
          {
            name: "default-transition",
            leave(data) {
              if (!data.current?.container) {
                return Promise.resolve();
              }

              return gsap
                .timeline()
                .to(data.current.container, {
                  opacity: 0,
                  y: -50,
                  duration: 0.6,
                  ease: "power2.inOut",
                })
                .to(
                  data.current.container,
                  {
                    scale: 0.95,
                    duration: 0.3,
                    ease: "power2.inOut",
                  },
                  0
                );
            },
            enter(data) {
              if (!data.next?.container) {
                return Promise.resolve();
              }

              // Set initial state
              gsap.set(data.next.container, {
                opacity: 0,
                y: 50,
                scale: 1.05,
              });

              return gsap.timeline().to(data.next.container, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: "power3.out",
              });
            },
          },
          {
            name: "home-transition",
            from: "home",
            to: "about",
            leave(data) {
              return gsap.timeline().to(data.current.container, {
                opacity: 0,
                rotationY: 15,
                duration: 0.6,
                ease: "power2.inOut",
              });
            },
            enter(data) {
              gsap.set(data.next.container, {
                opacity: 0,
                rotationY: -15,
              });

              return gsap.timeline().to(data.next.container, {
                opacity: 1,
                rotationY: 0,
                duration: 0.8,
                ease: "power3.out",
              });
            },
          },
          {
            name: "about-transition",
            from: "about",
            to: "home",
            leave(data) {
              return gsap.timeline().to(data.current.container, {
                opacity: 0,
                rotationY: -15,
                duration: 0.6,
                ease: "power2.inOut",
              });
            },
            enter(data) {
              gsap.set(data.next.container, {
                opacity: 0,
                rotationY: 15,
              });

              return gsap.timeline().to(data.next.container, {
                opacity: 1,
                rotationY: 0,
                duration: 0.8,
                ease: "power3.out",
              });
            },
          },
        ],
        views: [
          {
            namespace: "home",
            beforeEnter() {
              // Reset scroll position for home page
              window.scrollTo(0, 0);
            },
          },
          {
            namespace: "about",
            beforeEnter() {
              // Reset scroll position for about page
              window.scrollTo(0, 0);
            },
          },
        ],
      });
    })
    .catch((error) => {
      console.warn("Failed to initialize Barba:", error);
    });
};
