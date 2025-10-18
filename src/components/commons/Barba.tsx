'use client';

import { useEffect } from 'react';
import { initBarba } from './barba-config';

export default function BarbaWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initBarba();
  }, []);

  return (
    <div data-barba="wrapper">
      <div data-barba="container">
        {children}
      </div>
    </div>
  );
}