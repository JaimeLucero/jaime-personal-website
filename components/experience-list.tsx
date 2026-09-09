type ExperienceEntry = {
  period: string;
  organization: string;
  role: string;
  highlights: string[];
};

const EXPERIENCE_ENTRIES: ExperienceEntry[] = [
  {
    period: 'Jan 2026 to present',
    organization: 'Inventiv',
    role: 'Full-stack Developer',
    highlights: [
      '15+ AI-driven features across web and mobile, improving decision-making speed by 40%',
      'End-to-end automation pipelines for B2B systems, cutting manual processing time by up to 80%',
      'High-availability full-stack systems supporting 1,000+ users at 99.9% uptime',
    ],
  },
  {
    period: 'Oct 2025 to Jan 2026',
    organization: 'Tutorials Dojo',
    role: 'IT Intern',
    highlights: [
      'Developed and deployed the AWS Mock Exams mobile app to the Google Play Store',
      'Authored monthly technical articles and hands-on GCP lab guides',
    ],
  },
  {
    period: 'Class of 2026',
    organization: 'University of Southeastern Philippines',
    role: "BS Computer Science, Data Science major, Dean's List",
    highlights: ['Coursework in data science, big data, machine learning, and computer networks'],
  },
  {
    period: 'Aug 2024 to May 2025',
    organization: 'Computer Science Society',
    role: 'External Vice President',
    highlights: ['Managed partner-organization communications and industry events for members'],
  },
];

export default function ExperienceList() {
  return (
    <ol data-testid="experience-strip" className="relative border-l-2 border-rule">
      {EXPERIENCE_ENTRIES.map((entry, index) => (
        <li key={entry.organization} className="relative grid gap-2 py-6 pl-8 sm:grid-cols-5 sm:gap-8">
          <span
            aria-hidden="true"
            className={`absolute -left-[7px] top-8 h-3 w-3 rounded-full border-2 border-paper ${index === 0 ? 'bg-accent ring-4 ring-accent-soft' : 'bg-rule'}`}
          />
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted sm:col-span-2 sm:pt-1">{entry.period}</p>
          <div className="sm:col-span-3">
            <h3 className="font-display text-lg font-bold leading-tight text-ink">
              {entry.organization}
              <span className="block text-sm font-medium text-muted">{entry.role}</span>
            </h3>
            <ul className="mt-3 space-y-1.5">
              {entry.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-base leading-relaxed text-muted">
                  <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 shrink-0 bg-rule" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}
