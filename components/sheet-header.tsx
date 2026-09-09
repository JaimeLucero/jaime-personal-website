'use client';
import { useEffect, useState } from 'react';
import ThemeToggle from './theme-toggle';
import { HOME_SECTION_ID, NAVIGATION_ITEMS } from '../src/navigation/navigation-items';
import { scrollToSection } from '../src/navigation/scroll-to-section';

// A section becomes active once its top scrolls past this fraction of the viewport height.
const ACTIVATION_LINE_VIEWPORT_FRACTION = 0.4;

function findActiveSectionId(sections: HTMLElement[], activationLineY: number): string {
  let activeSectionId = '';
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= activationLineY) activeSectionId = section.id;
  }
  return activeSectionId;
}

function useActiveSectionId(): string {
  const [activeSectionId, setActiveSectionId] = useState<string>('');

  useEffect(() => {
    const sections = NAVIGATION_ITEMS.map((navigationItem) => document.getElementById(navigationItem.id)).filter(
      (section): section is HTMLElement => section !== null
    );
    let animationFrameId = 0;

    const updateActiveSection = () => {
      animationFrameId = 0;
      const activationLineY = window.innerHeight * ACTIVATION_LINE_VIEWPORT_FRACTION;
      setActiveSectionId(findActiveSectionId(sections, activationLineY));
    };

    const scheduleUpdate = () => {
      if (animationFrameId === 0) animationFrameId = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return activeSectionId;
}

export default function SheetHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSectionId = useActiveSectionId();

  const handleNavigate = (sectionId: string) => {
    setIsMenuOpen(false);
    // Let the collapsed menu re-layout first, otherwise the scroll target is measured under the open panel.
    requestAnimationFrame(() => scrollToSection(sectionId));
  };

  return (
    <header className="sticky top-0 z-20 border-b border-rule bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-site items-center justify-between gap-6 px-8 pb-3 pt-6 lg:px-14">
        <button type="button" onClick={() => handleNavigate(HOME_SECTION_ID)} className="flex items-baseline gap-3 text-left">
          <span className="font-display text-sm font-bold uppercase tracking-[0.06em] text-ink [font-stretch:110%] sm:text-base">
            Jaime Emanuel Lucero
          </span>
          <span className="type-label hidden sm:inline">Full-stack AI engineer</span>
        </button>

        <div className="flex items-center gap-2">
          <nav aria-label="Site" className={`${isMenuOpen ? 'block' : 'hidden'} absolute inset-x-0 top-full border-b border-rule bg-paper px-6 pb-4 lg:static lg:block lg:border-0 lg:bg-transparent lg:p-0`}>
            <ul aria-label="Main navigation" className="flex flex-col pt-2 lg:flex-row lg:items-center lg:gap-1 lg:pt-0">
              {NAVIGATION_ITEMS.map((navigationItem) => {
                const isActive = navigationItem.id === activeSectionId;
                return (
                  <li key={navigationItem.id}>
                    <button
                      type="button"
                      onClick={() => handleNavigate(navigationItem.id)}
                      aria-current={isActive ? 'true' : undefined}
                      className={`type-label flex w-full items-center gap-2 px-3 py-2 text-left text-[13px] transition-colors hover:text-ink ${isActive ? 'text-ink' : ''}`}>
                      <span aria-hidden="true" className={`h-2 w-2 border ${isActive ? 'border-accent bg-accent' : 'border-rule'}`} />
                      {navigationItem.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded border border-rule text-ink lg:hidden">
            <span aria-hidden="true" className="block h-0.5 w-5 bg-ink shadow-[0_-6px_0_0_rgb(var(--color-ink)),0_6px_0_0_rgb(var(--color-ink))]" />
          </button>
        </div>
      </div>
    </header>
  );
}
