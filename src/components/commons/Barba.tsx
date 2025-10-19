'use client';

import { useEffect } from 'react';
import { initBarba } from './barba-config';

export default function BarbaWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Delay initialization to ensure DOM is ready
    const timer = setTimeout(() => {
      initBarba();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div data-barba="wrapper">
      <div data-barba="container" data-barba-namespace="home">
        {children}
      </div>
    </div>
  );
}