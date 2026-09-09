'use client';
import PipelineDiagram from './pipeline-diagram';
import SpecificationTable from './specification-table';
import { CONTACT_SECTION_ID, HOME_SECTION_ID, PROJECTS_SECTION_ID } from '../src/navigation/navigation-items';
import { scrollToSection } from '../src/navigation/scroll-to-section';

const HERO_HEADLINE_LEAD = 'I build AI agents and automations that ';
const HERO_HEADLINE_PAYOFF = 'ship to production.';
const HERO_SUBHEADLINE =
  'Full-stack AI engineer turning ideas into working products: LLM agents, automation pipelines, and Next.js apps users rely on.';

export default function HeroIntro() {
  return (
    <section id={HOME_SECTION_ID} className="hero-viewport">
      <div>
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="h-2 w-2 bg-accent" />
          <p className="type-eyebrow">Sheet 01. Overview</p>
        </div>

        <h1 className="type-display mt-5">
          {HERO_HEADLINE_LEAD}
          <span className="text-accent">{HERO_HEADLINE_PAYOFF}</span>
        </h1>
        <p className="type-lede mt-6 max-w-2xl">{HERO_SUBHEADLINE}</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={() => scrollToSection(CONTACT_SECTION_ID)}
            className="inline-flex items-center justify-center bg-accent px-6 py-3 font-medium text-paper transition-colors hover:bg-accent-strong">
            Email Me About Your Project
          </button>
          <button
            type="button"
            onClick={() => scrollToSection(PROJECTS_SECTION_ID)}
            className="inline-flex items-center justify-center border border-ink px-6 py-3 font-medium text-ink transition-colors hover:bg-ink hover:text-paper">
            See Case Studies
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="type-label inline-flex items-center justify-center px-2 py-3 underline-offset-4 hover:text-ink hover:underline">
            View Resume
          </a>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-5 xl:gap-10">
        <div className="xl:col-span-3">
          <PipelineDiagram />
        </div>
        <div className="xl:col-span-2">
          <SpecificationTable />
        </div>
      </div>
    </section>
  );
}
