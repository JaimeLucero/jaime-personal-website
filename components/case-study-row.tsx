import Image from 'next/image';
import type { CaseStudy } from '../src/data/project';

const THUMBNAIL_SIZE_IN_PIXELS = 160;

export default function CaseStudyRow(props: { caseStudy: CaseStudy }) {
  const { caseStudy } = props;

  return (
    <article
      data-testid="case-study-card"
      className="group grid gap-6 rounded-lg border border-rule bg-surface p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_48px_-24px_rgba(42,63,224,0.35)] sm:grid-cols-5 sm:gap-8 sm:p-8">
      <div className="sm:col-span-2">
        {caseStudy.thumbnail && (
          <div className="diagram-grid mb-5 flex aspect-[4/3] items-center justify-center overflow-hidden rounded border border-rule bg-paper">
            <Image
              src={caseStudy.thumbnail}
              alt={`${caseStudy.title} screenshot`}
              width={THUMBNAIL_SIZE_IN_PIXELS}
              height={THUMBNAIL_SIZE_IN_PIXELS}
              className="h-3/4 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </div>
        )}
        <p className="display-condensed font-display text-5xl font-extrabold leading-none tracking-tight text-accent sm:text-6xl">
          {caseStudy.headlineResult.value}
        </p>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{caseStudy.headlineResult.label}</p>
      </div>

      <div className="sm:col-span-3">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="display-condensed font-display text-2xl font-bold leading-tight text-ink">{caseStudy.title}</h3>
          {caseStudy.link && (
            <a
              href={caseStudy.link}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 font-mono text-[11px] uppercase tracking-[0.16em] text-muted underline-offset-4 hover:text-ink hover:underline">
              View project <span aria-hidden="true" className="inline-block transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
            </a>
          )}
        </div>

        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">Problem</p>
        <p className="mt-1 text-sm leading-relaxed text-muted">{caseStudy.problem}</p>

        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">Result</p>
        <ul className="mt-1 space-y-1.5">
          {caseStudy.outcomes.map((outcome) => (
            <li key={outcome} className="flex gap-3 text-sm leading-relaxed text-ink">
              <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 shrink-0 bg-accent" />
              <span>{outcome}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
