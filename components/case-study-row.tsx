import Image from 'next/image';
import DrawingFrame from './drawing-frame';
import type { CaseStudy } from '../src/data/project';

const THUMBNAIL_SIZE_IN_PIXELS = 200;

export default function CaseStudyRow(props: { caseStudy: CaseStudy; detailLetter: string }) {
  const { caseStudy } = props;

  return (
    <article data-testid="case-study-card" className="grid gap-6 border-t border-rule py-10 sm:grid-cols-12 sm:gap-8">
      <div className="sm:col-span-5">
        {caseStudy.thumbnail && (
          <DrawingFrame caption={`Detail ${props.detailLetter}. ${caseStudy.title}`}>
            <div className="flex aspect-[4/3] items-center justify-center">
              <Image
                src={caseStudy.thumbnail}
                alt={`${caseStudy.title} screenshot`}
                width={THUMBNAIL_SIZE_IN_PIXELS}
                height={THUMBNAIL_SIZE_IN_PIXELS}
                className="h-3/4 w-auto object-contain"
              />
            </div>
          </DrawingFrame>
        )}
        <p className="type-figure mt-6">{caseStudy.headlineResult.value}</p>
        <p className="type-label mt-2">{caseStudy.headlineResult.label}</p>
      </div>

      <div className="sm:col-span-7">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="type-card-title">{caseStudy.title}</h3>
          {caseStudy.link && (
            <a
              href={caseStudy.link}
              target="_blank"
              rel="noopener noreferrer"
              className="type-label shrink-0 underline-offset-4 hover:text-ink hover:underline">
              View project <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>

        <p className="type-eyebrow mt-5">Problem</p>
        <p className="type-body mt-1">{caseStudy.problem}</p>

        <p className="type-eyebrow mt-5">Result</p>
        <ul className="mt-1 space-y-1.5">
          {caseStudy.outcomes.map((outcome) => (
            <li key={outcome} className="type-body flex gap-3 text-ink">
              <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 shrink-0 bg-accent" />
              <span>{outcome}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
