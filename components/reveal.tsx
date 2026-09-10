'use client';
import { useEffect, useRef, type ReactNode } from 'react';

const STAGGER_STEP_IN_SECONDS = 0.08;
// A block sitting this far down the viewport at load is treated as off-screen and gets armed.
const ALREADY_IN_VIEW_FRACTION = 0.92;

type RevealProps = {
  children: ReactNode;
  className?: string;
  staggerIndex?: number;
};

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/*
  Reveals its children once, when they scroll into view.

  The markup renders visible and is only hidden after mount, so a reader without
  JavaScript, with reduced motion, or with the block already on screen sees the
  content immediately rather than a blank space waiting on an observer.
*/
export default function Reveal({ children, className, staggerIndex = 0 }: RevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') return;
    if (container.getBoundingClientRect().top < window.innerHeight * ALREADY_IN_VIEW_FRACTION) return;

    container.classList.add('reveal-armed');
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        container.classList.add('reveal-in');
        observer.disconnect();
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={staggerIndex ? { animationDelay: `${staggerIndex * STAGGER_STEP_IN_SECONDS}s` } : undefined}>
      {children}
    </div>
  );
}
