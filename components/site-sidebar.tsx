'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { HOME_SECTION_ID, NAVIGATION_ITEMS } from '../src/navigation/navigation-items';
import { scrollToSection } from '../src/navigation/scroll-to-section';
import { CONTACT_EMAIL } from '../src/contact/project-brief-mailto';

const SECTION_ACTIVATION_THRESHOLD = 0.35;

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

function useActiveSectionId(): string {
  const [activeSectionId, setActiveSectionId] = useState<string>('');

  useEffect(() => {
    const sections = NAVIGATION_ITEMS.map((navigationItem) => document.getElementById(navigationItem.id)).filter(
      (section): section is HTMLElement => section !== null
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) setActiveSectionId(visibleEntry.target.id);
      },
      { threshold: SECTION_ACTIVATION_THRESHOLD, rootMargin: '-10% 0px -40% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return activeSectionId;
}

export default function SiteSidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSectionId = useActiveSectionId();

  const handleNavigate = (sectionId: string) => {
    setIsMenuOpen(false);
    // Let the collapsed menu re-layout first, otherwise the scroll target is measured under the open panel.
    requestAnimationFrame(() => scrollToSection(sectionId));
  };

  return (
    <header className="sticky top-0 z-20 -mx-6 bg-paper/95 px-6 backdrop-blur lg:col-span-5 lg:mx-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:bg-transparent lg:px-0 lg:py-24 lg:backdrop-blur-none">
      <div className="flex items-center justify-between border-b border-rule py-4 lg:block lg:border-0 lg:py-0">
        <button
          type="button"
          onClick={() => handleNavigate(HOME_SECTION_ID)}
          className="flex items-center gap-3 text-left lg:block">
          <Image
            src="/pfp.svg"
            alt="Portrait of Jaime Emanuel Lucero"
            width={96}
            height={96}
            priority
            className="h-11 w-11 shrink-0 rounded-full border border-rule bg-surface object-cover lg:mb-6 lg:h-24 lg:w-24"
          />
          <span className="block">
            <span className="block font-display text-2xl font-bold tracking-tight text-ink lg:text-4xl">
              Jaime Emanuel Lucero
            </span>
            <span className="mt-1 block font-mono text-xs uppercase tracking-[0.18em] text-muted lg:mt-3 lg:text-sm">
              Full-stack AI engineer
            </span>
          </span>
        </button>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded border border-rule text-ink lg:hidden">
          <span aria-hidden="true" className="block h-0.5 w-5 bg-ink shadow-[0_-6px_0_0_#0E1420,0_6px_0_0_#0E1420]" />
        </button>
      </div>

      <p className="hidden max-w-xs text-base leading-relaxed text-muted lg:mt-6 lg:block">
        Davao City, Philippines. I build LLM agents, automation pipelines, and production web apps for startups and
        agencies.
      </p>

      <nav aria-label="Site" className={`${isMenuOpen ? 'block' : 'hidden'} border-b border-rule pb-4 lg:mt-12 lg:block lg:border-0 lg:pb-0`}>
        <ul aria-label="Main navigation" className="flex flex-col gap-1 pt-2 lg:gap-3 lg:pt-0">
          {NAVIGATION_ITEMS.map((navigationItem) => {
            const isActive = navigationItem.id === activeSectionId;
            return (
              <li key={navigationItem.id}>
                <button
                  type="button"
                  onClick={() => handleNavigate(navigationItem.id)}
                  className="group flex w-full items-center gap-4 py-2 text-left font-mono text-xs uppercase tracking-[0.18em]">
                  <span
                    aria-hidden="true"
                    className={`h-px bg-ink transition-all ${isActive ? 'w-14 bg-accent' : 'w-6 bg-rule group-hover:w-14 group-hover:bg-ink'}`}
                  />
                  <span className={isActive ? 'text-accent' : 'text-muted group-hover:text-ink'}>{navigationItem.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <ul className="hidden flex-wrap gap-x-6 gap-y-2 lg:flex">
        {SIDEBAR_LINKS.map((sidebarLink) => (
          <li key={sidebarLink.label}>
            <a
              href={sidebarLink.href}
              target={sidebarLink.href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-[0.18em] text-muted underline-offset-4 hover:text-ink hover:underline">
              {sidebarLink.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
