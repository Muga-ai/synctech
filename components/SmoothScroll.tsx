// components/SmoothScroll.tsx
'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,                  // overall animation time
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // classic smooth easing
      lerp: 0.09,                     // damping factor (lower = more inertia/smooth)
      orientation: 'vertical',        // 'vertical' or 'horizontal'
      gestureOrientation: 'vertical',
      smoothWheel: true,              // smooth mouse wheel/trackpad scrolling (recommended)
      syncTouch: true,                // sync touch events for better mobile feel (replaces old smoothTouch)
      touchMultiplier: 2,             // speed adjustment for touch
      autoRaf: true,                  // auto handle requestAnimationFrame
      infinite: false,                // no loop
    });

    // Optional: listen to scroll events if needed later
    // lenis.on('scroll', (e) => console.log(e));

    // RAF loop (autoRaf: true usually handles this, but explicit is safe)
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle resize (good practice)
    const onResize = () => lenis.resize();
    window.addEventListener('resize', onResize);

    return () => {
      lenis.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return null;
}