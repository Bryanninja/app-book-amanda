'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(container.current, {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: 'power3.out',
    });
  }, { scope: container });

  return (
    <div ref={container} className="will-change-transform">
      {children}
    </div>
  );
}
