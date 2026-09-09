type FaqEntry = {
  question: string;
  answer: string;
};

const FAQ_ENTRIES: FaqEntry[] = [
  {
    question: 'Can one engineer handle the whole project?',
    answer:
      'Yes. I build features end to end: database, backend, AI integration, frontend, and deployment. You get one point of contact for the whole build.',
  },
  {
    question: 'Will the AI work in production or only in a demo?',
    answer:
      'The systems I maintain run at 99.9% uptime for 1,000+ users. I deploy on infrastructure you own and hand over the code and documentation.',
  },
  {
    question: 'Are you available for contract work or full-time roles?',
    answer: 'Both. I take freelance projects through Upwork or direct contract, and I am open to full-time roles.',
  },
  {
    question: 'How much does a project cost?',
    answer:
      'Projects are quoted individually. Send a short description of what you need and I will come back with a scope and a price.',
  },
];

export default function FaqList() {
  return (
    <dl data-testid="faq-list" className="divide-y divide-rule border-y border-rule">
      {FAQ_ENTRIES.map((entry) => (
        <div key={entry.question} className="grid gap-2 py-6 sm:grid-cols-5 sm:gap-8">
          <dt className="sm:col-span-2">
            <h3 className="font-display text-lg font-bold leading-tight text-ink">{entry.question}</h3>
          </dt>
          <dd className="text-base leading-relaxed text-muted sm:col-span-3">{entry.answer}</dd>
        </div>
      ))}
    </dl>
  );
}
