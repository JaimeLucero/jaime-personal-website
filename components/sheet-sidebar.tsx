'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import ThemeToggle from './theme-toggle';
import { CONTACT_EMAIL } from '../src/contact/project-brief-mailto';
import { HOME_SECTION_ID, NAVIGATION_ITEMS } from '../src/navigation/navigation-items';
import { scrollToSection } from '../src/navigation/scroll-to-section';

const PORTRAIT_SIZE_IN_PIXELS = 128;
// A section becomes active once its top scrolls past this fraction of the viewport height.
const ACTIVATION_LINE_VIEWPORT_FRACTION = 0.4;

type SidebarLink = {
  label: string;
  href: string;
};

const SIDEBAR_LINKS: SidebarLink[] = [
  { label: 'Email', href: `mailto:${CONTACT_EMAIL}` },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jaime-emanuel-lucero-6b5689249/' },
  { label: 'GitHub', href: 'https://github.com/JaimeLucero' },
  { label: 'Upwork', href: 'https://www.upwork.com/freelancers/~0161bbada9c01d4e37?mp_source=share' },
  { label: 'Resume', href: '/resume.pdf' },
];

const SIDEBAR_BIO =
  'Davao City, Philippines. I build LLM agents, automation pipelines, and production web apps for startups and agencies.';

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

export default function SheetSidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSectionId = useActiveSectionId();

  const handleNavigate = (sectionId: string) => {
    setIsMenuOpen(false);
    // Let the collapsed menu re-layout first, otherwise the scroll target is measured under the open panel.
    requestAnimationFrame(() => scrollToSection(sectionId));
  };

  return (
    <header className="sticky top-0 z-20 -mx-8 bg-paper/95 px-8 backdrop-blur lg:mx-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:bg-transparent lg:px-0 lg:py-14 lg:backdrop-blur-none">
      <div className="flex items-center justify-between gap-4 border-b border-rule py-3 lg:block lg:border-0 lg:py-0">
        <button
          type="button"
          onClick={() => handleNavigate(HOME_SECTION_ID)}
          className="flex items-center gap-3 text-left lg:block">
          <Image
            src="/pfp.svg"
            alt="Portrait of Jaime Emanuel Lucero"
            width={PORTRAIT_SIZE_IN_PIXELS}
            height={PORTRAIT_SIZE_IN_PIXELS}
            priority
            className="h-10 w-10 shrink-0 object-cover lg:mb-7 lg:h-24 lg:w-24"
          />
          <span className="block">
            <span className="block font-display text-base font-bold leading-tight text-ink [font-stretch:110%] lg:text-[34px]">
              Jaime Emanuel Lucero
            </span>
            <span className="type-label mt-0.5 block text-[10px] lg:mt-3 lg:text-xs">Full-stack AI engineer</span>
          </span>
        </button>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            className="flex h-10 w-10 items-center justify-center border border-rule text-ink">
            <span aria-hidden="true" className="block h-0.5 w-5 bg-ink shadow-[0_-6px_0_0_rgb(var(--color-ink)),0_6px_0_0_rgb(var(--color-ink))]" />
          </button>
        </div>
      </div>

      <p className="type-body hidden max-w-xs lg:mt-7 lg:block">{SIDEBAR_BIO}</p>

      <div className={`${isMenuOpen ? 'block' : 'hidden'} border-b border-rule pb-5 lg:block lg:border-0 lg:pb-0`}>
        <nav aria-label="Site" className="lg:mt-14">
          <ul aria-label="Main navigation" className="pt-3 lg:pt-0">
            {NAVIGATION_ITEMS.map((navigationItem, index) => {
              const isActive = navigationItem.id === activeSectionId;
              return (
                <li key={navigationItem.id}>
                  <button
                    type="button"
                    onClick={() => handleNavigate(navigationItem.id)}
                    aria-current={isActive ? 'true' : undefined}
                    className="group flex w-full items-center gap-4 py-2.5 text-left">
                    <span aria-hidden="true" className="type-label w-5 shrink-0 tabular-nums text-[11px] opacity-50">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`h-px transition-[width,background-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive ? "w-14 bg-accent" : "w-7 bg-rule group-hover:w-14 group-hover:bg-ink"}`}
                    />
                    <span className={`type-label text-[13px] transition-colors ${isActive ? 'text-accent' : 'group-hover:text-ink'}`}>
                      {navigationItem.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 lg:hidden">
          {SIDEBAR_LINKS.map((sidebarLink) => (
            <li key={sidebarLink.label}>
              <a
                href={sidebarLink.href}
                target={sidebarLink.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="type-label underline-offset-4 hover:text-ink hover:underline">
                {sidebarLink.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden flex-col gap-5 lg:flex">
        <ThemeToggle className="shrink-0" />
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {SIDEBAR_LINKS.map((sidebarLink) => (
            <li key={sidebarLink.label}>
              <a
                href={sidebarLink.href}
                target={sidebarLink.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="type-label underline-offset-4 hover:text-ink hover:underline">
                {sidebarLink.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
