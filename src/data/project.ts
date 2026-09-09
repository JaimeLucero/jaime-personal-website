export type Project = {
  id: string;
  title: string;
  description: string;
  link?: string;
  thumbnail?: string;
  isFeatured?: boolean;
  problem?: string;
  outcomes?: string[];
};

export function isCaseStudy(project: Project): boolean {
  return Boolean(project.isFeatured && project.problem && project.outcomes?.length);
}
