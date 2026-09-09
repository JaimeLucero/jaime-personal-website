'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import ThemeToggle from './theme-toggle';
import { CONTACT_EMAIL } from '../src/contact/project-brief-mailto';
import { HOME_SECTION_ID, NAVIGATION_ITEMS } from '../src/navigation/navigation-items';
import { scrollToSection } from '../src/navigation/scroll-to-section';

const PORTRAIT_SIZE_IN_PIXELS = 128;
const SHEET_REVISION = '2026.09';
// A section becomes active once its top scrolls past this fraction of the viewport height.
const ACTIVATION_LINE_VIEWPORT_FRACTION = 0.4;

type SidebarLink = {
  label: string;
  href: string;
};

const SIDEBAR_LINKS: SidebarLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jaime-emanuel-lucero-6b5689249/' },
  { label: 'GitHub', href: 'https://github.com/JaimeLucero' },
  { label: 'Upwork', href: 'https://www.upwork.com/freelancers/~0161bbada9c01d4e37?mp_source=share' },
  { label: 'Resume', href: '/resume.pdf' },
];

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

function SidebarCell(props: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex flex-col gap-1 px-4 py-3 ${props.className ?? ''}`}>
      <span className="type-label text-[10px]">{props.label}</span>
      <span className="text-sm font-medium leading-snug text-ink">{props.children}</span>
    </div>
  );
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
    <header className="sticky top-0 z-20 -mx-8 bg-paper/95 px-8 backdrop-blur lg:mx-0 lg:h-screen lg:overflow-y-auto lg:bg-transparent lg:px-0 lg:py-10 lg:backdrop-blur-none">
      <div className="flex items-center justify-between gap-4 border-b border-rule py-3 lg:hidden">
        <button type="button" onClick={() => handleNavigate(HOME_SECTION_ID)} className="text-left">
          <span className="font-display text-sm font-bold uppercase tracking-[0.06em] text-ink [font-stretch:110%]">
            Jaime Emanuel Lucero
          </span>
          <span className="type-label mt-0.5 block text-[10px]">Full-stack AI engineer</span>
        </button>
        <div className="flex items-center gap-2">
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

      <div
        data-testid="title-block"
        className={`${isMenuOpen ? 'grid' : 'hidden'} grid-cols-2 gap-px border-x border-b border-rule bg-rule text-ink lg:grid lg:border`}>
        <div className="col-span-2 hidden items-center gap-4 bg-surface px-4 py-4 lg:flex">
          <Image
            src="/pfp.svg"
            alt="Portrait of Jaime Emanuel Lucero"
            width={PORTRAIT_SIZE_IN_PIXELS}
            height={PORTRAIT_SIZE_IN_PIXELS}
            priority
            className="h-16 w-16 shrink-0 border border-rule object-cover"
          />
          <button type="button" onClick={() => handleNavigate(HOME_SECTION_ID)} className="text-left">
            <span className="type-label text-[10px]">Name</span>
            <span className="block font-display text-xl font-bold leading-tight text-ink [font-stretch:108%]">
              Jaime Emanuel Lucero
            </span>
            <span className="type-small block">Full-stack AI engineer</span>
          </button>
        </div>

        <SidebarCell label="Location" className="bg-surface">
          Davao City, Philippines
        </SidebarCell>
        <SidebarCell label="Status" className="bg-surface">
          <span className="inline-flex items-center gap-2">
            <span aria-hidden="true" className="h-2 w-2 bg-accent" />
            Available for projects
          </span>
        </SidebarCell>

        <nav aria-label="Site" className="col-span-2 bg-surface px-4 py-3">
          <p className="type-label text-[10px]">Index</p>
          <ul aria-label="Main navigation" className="mt-2">
            {NAVIGATION_ITEMS.map((navigationItem, index) => {
              const isActive = navigationItem.id === activeSectionId;
              return (
                <li key={navigationItem.id}>
                  <button
                    type="button"
                    onClick={() => handleNavigate(navigationItem.id)}
                    aria-current={isActive ? 'true' : undefined}
                    className={`type-label flex w-full items-center gap-3 py-1.5 text-left text-[13px] transition-colors hover:text-ink ${isActive ? 'text-ink' : ''}`}>
                    <span aria-hidden="true" className={`h-2 w-2 shrink-0 border ${isActive ? 'border-accent bg-accent' : 'border-rule'}`} />
                    <span aria-hidden="true" className="tabular-nums opacity-60">{String(index + 1).padStart(2, '0')}</span>
                    {navigationItem.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <SidebarCell label="Contact" className="col-span-2 bg-surface">
          <a href={`mailto:${CONTACT_EMAIL}`} className="break-all underline-offset-4 hover:text-accent hover:underline">
            {CONTACT_EMAIL}
          </a>
        </SidebarCell>
        <SidebarCell label="Links" className="col-span-2 bg-surface">
          <span className="flex flex-wrap gap-x-4 gap-y-1">
            {SIDEBAR_LINKS.map((sidebarLink) => (
              <a
                key={sidebarLink.label}
                href={sidebarLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:text-accent hover:underline">
                {sidebarLink.label}
              </a>
            ))}
          </span>
        </SidebarCell>
        <SidebarCell label="Revision" className="bg-surface">
          {SHEET_REVISION}
        </SidebarCell>
        <div className="hidden items-center justify-between bg-surface px-4 py-3 lg:flex">
          <span className="type-label text-[10px]">Theme</span>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
