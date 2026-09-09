'use client';
import { CONTACT_SECTION_ID, HOME_SECTION_ID, PROJECTS_SECTION_ID } from '../src/navigation/navigation-items';
import { scrollToSection } from '../src/navigation/scroll-to-section';

type HeroMetric = {
  value: string;
  label: string;
};

const HERO_METRICS: HeroMetric[] = [
  { value: '15+', label: 'AI features shipped' },
  { value: '80%', label: 'Less manual processing' },
  { value: '1,000+', label: 'Users supported' },
  { value: '99.9%', label: 'Uptime' },
];

const HERO_HEADLINE = 'I build AI agents and automations that ship to production.';
const HERO_SUBHEADLINE =
  'Full-stack AI engineer turning ideas into working products: LLM agents, automation pipelines, and Next.js apps users rely on.';

export default function HeroIntro() {
  return (
    <section id={HOME_SECTION_ID} className="pt-12 lg:pt-0">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Available for projects</p>
      <h1 className="display-condensed mt-4 max-w-2xl font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-ink sm:text-5xl lg:text-6xl">
        {HERO_HEADLINE}
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{HERO_SUBHEADLINE}</p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="button"
          onClick={() => scrollToSection(CONTACT_SECTION_ID)}
          className="inline-flex items-center justify-center rounded bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-accent-strong">
          Email Me About Your Project
        </button>
        <button
          type="button"
          onClick={() => scrollToSection(PROJECTS_SECTION_ID)}
          className="inline-flex items-center justify-center rounded border border-ink px-6 py-3 font-medium text-ink transition-colors hover:bg-ink hover:text-paper">
          See Case Studies
        </button>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-2 py-3 font-mono text-xs uppercase tracking-[0.18em] text-muted underline-offset-4 hover:text-ink hover:underline">
          View Resume
        </a>
      </div>

      <dl
        data-testid="hero-metrics"
        className="mt-14 grid grid-cols-2 gap-px border-y border-rule bg-rule sm:grid-cols-4">
        {HERO_METRICS.map((metric) => (
          <div key={metric.label} className="bg-paper py-5 pr-4 [&:nth-child(even)]:pl-5 sm:[&:nth-child(n+2)]:pl-5">
            <dd className="display-condensed font-display text-3xl font-bold leading-none text-ink">{metric.value}</dd>
            <dt className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{metric.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
