export type HeadlineResult = {
  value: string;
  label: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  link?: string;
  thumbnail?: string;
  isFeatured?: boolean;
  headlineResult?: HeadlineResult;
  problem?: string;
  outcomes?: string[];
};

export type CaseStudy = Project & {
  headlineResult: HeadlineResult;
  problem: string;
  outcomes: string[];
};

export function isCaseStudy(project: Project): project is CaseStudy {
  return Boolean(project.isFeatured && project.headlineResult && project.problem && project.outcomes?.length);
}
