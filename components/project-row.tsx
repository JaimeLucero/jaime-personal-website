import type { Project } from '../src/data/project';

export default function ProjectRow(props: { project: Project }) {
  const { project } = props;

  return (
    <li className="group border-t border-rule py-5">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="grid gap-2 sm:grid-cols-5 sm:gap-8">
        <h3 className="flex items-baseline gap-2 font-display text-lg font-bold leading-tight text-ink sm:col-span-2">
          {project.title}
          <span aria-hidden="true" className="font-mono text-xs text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
            ↗
          </span>
        </h3>
        <p className="text-sm leading-relaxed text-muted sm:col-span-3">{project.description}</p>
      </a>
    </li>
  );
}
