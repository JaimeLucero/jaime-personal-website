'use client';
import { useEffect, useRef, useState, type ReactNode } from 'react';

const REVEAL_THRESHOLD = 0.15;

export default function Reveal(props: { children: ReactNode; className?: string }) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: REVEAL_THRESHOLD }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={elementRef} className={`reveal ${isVisible ? 'is-visible' : ''} ${props.className ?? ''}`}>
      {props.children}
    </div>
  );
}
