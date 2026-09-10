import type { ReactNode } from 'react';
import { Layers, Gauge, ShieldCheck } from 'lucide-react';
import Reveal from './reveal';

const BENEFIT_ICON_SIZE_IN_PIXELS = 20;

type Benefit = {
  icon: ReactNode;
  title: string;
  detail: string;
};

const BENEFITS: Benefit[] = [
  {
    icon: <Layers size={BENEFIT_ICON_SIZE_IN_PIXELS} strokeWidth={1.75} />,
    title: 'One engineer, whole stack',
    detail: 'Frontend, backend, AI layer, database, and deployment from one person. Fewer handoffs, faster iteration.',
  },
  {
    icon: <Gauge size={BENEFIT_ICON_SIZE_IN_PIXELS} strokeWidth={1.75} />,
    title: 'Measured results',
    detail: 'My automation pipelines cut manual processing by up to 80% and sped up decision-making by 40%.',
  },
  {
    icon: <ShieldCheck size={BENEFIT_ICON_SIZE_IN_PIXELS} strokeWidth={1.75} />,
    title: 'Built to stay up',
    detail: 'Full-stack systems serving 1,000+ users at 99.9% uptime, designed for high-concurrency automation tasks.',
  },
];

export default function ProblemAndBenefits() {
  return (
    <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
      <div className="lg:col-span-2">
        <p className="type-eyebrow">The problem</p>
        <p className="type-card-title mt-3">
          A process eating hours of manual work every week, or an AI feature your competitors already shipped.
        </p>
        <p className="type-body mt-4">
          Hiring a full team is slow and expensive. A demo that only works on stage does not help either. You need
          someone who can scope it, build it, and keep it running.
        </p>
      </div>
      <ul data-testid="benefits-list" className="divide-y divide-rule border-y border-rule lg:col-span-3">
        {BENEFITS.map((benefit, index) => (
          <li key={benefit.title}>
            <Reveal staggerIndex={index} className="flex gap-4 py-5">
            <span aria-hidden="true" className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center bg-accent-soft text-accent">
              {benefit.icon}
            </span>
            <div>
              <h3 className="type-item-title">{benefit.title}</h3>
              <p className="type-body mt-1">{benefit.detail}</p>
            </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  );
}
