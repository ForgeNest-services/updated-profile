import gsap from 'gsap';

export const initBarba = () => {
  if (typeof window === 'undefined') return;
  
  import('@barba/core').then((barba) => {
    barba.default.init({
    transitions: [
      {
        name: 'default-transition',
        leave(data) {
          return gsap.to(data.current.container, {
            opacity: 0,
            duration: 0.5,
            ease: 'power2.inOut',
          });
        },
        enter(data) {
          return gsap.from(data.next.container, {
            opacity: 0,
            duration: 0.5,
            ease: 'power2.inOut',
          });
        },
      },
    ],
    });
  });
};