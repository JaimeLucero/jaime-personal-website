'use client';
import { useWindowSize } from '../src/hooks/windowContextProvider';

type FaqEntry = {
  question: string;
  answer: string;
};

const FAQ_ENTRIES: FaqEntry[] = [
  {
    question: 'Can one engineer handle the whole project?',
    answer:
      'Yes. At Inventiv I build features end to end: database, backend, AI integration, frontend, and deployment. You get one point of contact for the whole build.',
  },
  {
    question: 'Will the AI work in production or only in a demo?',
    answer:
      'The systems I maintain at Inventiv run at 99.9% uptime for 1,000+ users. I deploy on infrastructure you own and hand over the code and documentation.',
  },
  {
    question: 'Are you available for contract work or full-time roles?',
    answer:
      'Both. I take freelance projects through Upwork or direct contract, and I am open to full-time roles.',
  },
  {
    question: 'How much does a project cost?',
    answer:
      'Projects are quoted individually. Send a short description of what you need and I will come back with a scope and a price.',
  },
];

export default function FaqSection() {
  const isMobile = useWindowSize();

  return (
    <div data-testid="faq-list" style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '16px' : '20px', maxWidth: '800px', margin: '0 auto' }}>
      {FAQ_ENTRIES.map((entry, index) => (
        <div
          key={entry.question}
          className={`reveal-up reveal-delay-${(index % 4) + 1}`}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            padding: isMobile ? '24px 20px' : '28px 32px',
            background: 'linear-gradient(135deg, rgba(52, 168, 83, 0.06), rgba(74, 124, 63, 0.03))',
            border: '1.5px solid rgba(52, 168, 83, 0.2)',
            borderRadius: '14px',
          }}>
          <h3 style={{ fontSize: isMobile ? '17px' : '19px', fontWeight: '700', color: '#F0F0F0', margin: 0, lineHeight: '1.4' }}>
            {entry.question}
          </h3>
          <p style={{ fontSize: isMobile ? '14px' : '15px', color: '#B4BFAC', margin: 0, lineHeight: '1.8' }}>
            {entry.answer}
          </p>
        </div>
      ))}
    </div>
  );
}
