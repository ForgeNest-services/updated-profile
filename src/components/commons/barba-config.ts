import gsap from 'gsap';

export const initBarba = () => {
  if (typeof window === 'undefined') return;
  
  import('@barba/core').then((barba) => {
    barba.default.init({
      transitions: [
        {
          name: 'default-transition',
          leave(data) {
            if (!data.current?.container) {
              return Promise.resolve();
            }
            
            return gsap.to(data.current.container, {
              opacity: 0,
              duration: 0.5,
              ease: 'power2.inOut',
            });
          },
          enter(data) {
            if (!data.next?.container) {
              return Promise.resolve();
            }
            
            return gsap.from(data.next.container, {
              opacity: 0,
              duration: 0.5,
              ease: 'power2.inOut',
            });
          },
        },
      ],
    });
  }).catch((error) => {
    console.warn('Failed to initialize Barba:', error);
  });
};