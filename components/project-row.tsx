import Image from 'next/image';
import type { Project } from '../src/data/project';

const THUMBNAIL_SIZE_IN_PIXELS = 40;

export default function ProjectRow(props: { project: Project }) {
  const { project } = props;

  return (
    <li className="group border-t border-rule">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="grid gap-3 py-5 sm:grid-cols-5 sm:gap-8">
        <div className="flex items-center gap-3 sm:col-span-2">
          {project.thumbnail && (
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded border border-rule bg-white">
              <Image
                src={project.thumbnail}
                alt=""
                width={THUMBNAIL_SIZE_IN_PIXELS}
                height={THUMBNAIL_SIZE_IN_PIXELS}
                className="h-8 w-8 object-contain"
              />
            </span>
          )}
          <h3 className="flex items-baseline gap-2 font-display text-lg font-bold leading-tight text-ink">
            {project.title}
            <span aria-hidden="true" className="font-mono text-xs text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              ↗
            </span>
          </h3>
        </div>
        <p className="text-base leading-relaxed text-muted sm:col-span-3">{project.description}</p>
      </a>
    </li>
  );
}
