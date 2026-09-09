import Image from 'next/image';
import { CONTACT_EMAIL } from '../src/contact/project-brief-mailto';

const PORTRAIT_SIZE_IN_PIXELS = 96;
const SHEET_REVISION = '2026.09';

type TitleBlockLink = {
  label: string;
  href: string;
};

const TITLE_BLOCK_LINKS: TitleBlockLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jaime-emanuel-lucero-6b5689249/' },
  { label: 'GitHub', href: 'https://github.com/JaimeLucero' },
  { label: 'Upwork', href: 'https://www.upwork.com/freelancers/~0161bbada9c01d4e37?mp_source=share' },
  { label: 'Resume', href: '/resume.pdf' },
];

function TitleBlockCell(props: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex flex-col gap-1 px-4 py-3 ${props.className ?? ''}`}>
      <span className="type-label text-[10px]">{props.label}</span>
      <span className="text-sm font-medium leading-snug text-ink">{props.children}</span>
    </div>
  );
}

export default function TitleBlock() {
  return (
    <div data-testid="title-block" className="grid grid-cols-2 gap-px border border-rule bg-rule text-ink">
      <div className="col-span-2 flex items-center gap-4 bg-surface px-4 py-4">
        <Image
          src="/pfp.svg"
          alt="Portrait of Jaime Emanuel Lucero"
          width={PORTRAIT_SIZE_IN_PIXELS}
          height={PORTRAIT_SIZE_IN_PIXELS}
          priority
          className="h-16 w-16 shrink-0 rounded-sm border border-rule object-cover"
        />
        <div>
          <span className="type-label text-[10px]">Name</span>
          <p className="font-display text-xl font-bold leading-tight text-ink [font-stretch:108%]">Jaime Emanuel Lucero</p>
          <p className="type-small">Full-stack AI engineer</p>
        </div>
      </div>
      <TitleBlockCell label="Location" className="bg-surface">
        Davao City, Philippines
      </TitleBlockCell>
      <TitleBlockCell label="Status" className="bg-surface">
        <span className="inline-flex items-center gap-2">
          <span aria-hidden="true" className="h-2 w-2 bg-accent" />
          Available for projects
        </span>
      </TitleBlockCell>
      <TitleBlockCell label="Contact" className="col-span-2 bg-surface">
        <a href={`mailto:${CONTACT_EMAIL}`} className="underline-offset-4 hover:text-accent hover:underline">
          {CONTACT_EMAIL}
        </a>
      </TitleBlockCell>
      <TitleBlockCell label="Links" className="bg-surface">
        <span className="flex flex-wrap gap-x-3 gap-y-1">
          {TITLE_BLOCK_LINKS.map((titleBlockLink) => (
            <a
              key={titleBlockLink.label}
              href={titleBlockLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 hover:text-accent hover:underline">
              {titleBlockLink.label}
            </a>
          ))}
        </span>
      </TitleBlockCell>
      <TitleBlockCell label="Revision" className="bg-surface">
        {SHEET_REVISION}
      </TitleBlockCell>
    </div>
  );
}
