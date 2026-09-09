export const CONTACT_EMAIL = 'jaimeemanuellucero@gmail.com';

export type ProjectBrief = {
  senderName: string;
  senderEmail: string;
  projectDescription: string;
};

export function buildProjectBriefMailtoUrl(brief: ProjectBrief): string {
  const subject = `Project inquiry from ${brief.senderName}`;
  const body = [`Name: ${brief.senderName}`, `Email: ${brief.senderEmail}`, '', brief.projectDescription].join('\n');
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
