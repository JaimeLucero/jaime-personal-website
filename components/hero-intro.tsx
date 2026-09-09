'use client';
import PipelineDiagram from './pipeline-diagram';
import AnimatedNumber from './animated-number';
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

const HERO_HEADLINE_LEAD = 'I build AI agents and automations that ';
const HERO_HEADLINE_PAYOFF = 'ship to production.';
const HERO_SUBHEADLINE =
  'Full-stack AI engineer turning ideas into working products: LLM agents, automation pipelines, and Next.js apps users rely on.';

export default function HeroIntro() {
  return (
    <section id={HOME_SECTION_ID} className="pt-12 lg:pt-0">
      <p className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.18em] text-accent">
        <span aria-hidden="true" className="status-dot relative block h-2 w-2 rounded-full bg-accent" />
        Available for projects
      </p>
      <h1 className="display-condensed mt-4 max-w-2xl font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-ink sm:text-5xl lg:text-6xl">
        {HERO_HEADLINE_LEAD}
        <span className="text-accent">{HERO_HEADLINE_PAYOFF}</span>
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{HERO_SUBHEADLINE}</p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="button"
          onClick={() => scrollToSection(CONTACT_SECTION_ID)}
          className="inline-flex items-center justify-center rounded bg-accent px-6 py-3 font-medium text-white shadow-[0_8px_24px_-8px_rgba(42,63,224,0.6)] transition-all hover:-translate-y-0.5 hover:bg-accent-strong">
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

      <div className="mt-12">
        <PipelineDiagram />
      </div>

      <dl
        data-testid="hero-metrics"
        className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded border border-rule bg-rule sm:grid-cols-4">
        {HERO_METRICS.map((metric) => (
          <div key={metric.label} className="bg-surface px-5 py-5">
            <dd className="display-condensed font-display text-3xl font-bold leading-none text-ink">
              <AnimatedNumber value={metric.value} />
            </dd>
            <dt className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{metric.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
