'use client';
import { useWindowSize } from '../src/hooks/windowContextProvider';

type ExperienceEntry = {
  organization: string;
  role: string;
  period: string;
};

const EXPERIENCE_ENTRIES: ExperienceEntry[] = [
  { organization: 'Inventiv', role: 'Full-stack Developer', period: 'Jan 2026 to present' },
  { organization: 'Tutorials Dojo', role: 'IT Intern', period: 'Oct 2025 to Jan 2026' },
  {
    organization: 'University of Southeastern Philippines',
    role: "BS Computer Science, Data Science major, Dean's List",
    period: 'Class of 2026',
  },
  { organization: 'Computer Science Society', role: 'External Vice President', period: 'Aug 2024 to May 2025' },
];

export default function ExperienceStrip() {
  const isMobile = useWindowSize();

  return (
    <div
      data-testid="experience-strip"
      style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
        gap: isMobile ? '16px' : '24px',
      }}>
      {EXPERIENCE_ENTRIES.map((entry, index) => (
        <div
          key={entry.organization}
          className={`reveal-up reveal-delay-${(index % 4) + 1}`}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            padding: isMobile ? '20px' : '24px 28px',
            background: 'linear-gradient(135deg, rgba(52, 168, 83, 0.06), rgba(74, 124, 63, 0.03))',
            border: '1.5px solid rgba(52, 168, 83, 0.2)',
            borderRadius: '14px',
          }}>
          <span style={{ fontSize: isMobile ? '16px' : '18px', fontWeight: '700', color: '#F0F0F0' }}>
            {entry.organization}
          </span>
          <span style={{ fontSize: '14px', color: '#C8D1BC', lineHeight: '1.6' }}>{entry.role}</span>
          <span style={{ fontSize: '12px', color: '#6AAE5B', fontWeight: '600', letterSpacing: '0.5px' }}>
            {entry.period}
          </span>
        </div>
      ))}
    </div>
  );
}
