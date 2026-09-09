type Service = {
  title: string;
  description: string;
  stack: string;
};

const SERVICES: Service[] = [
  {
    title: 'AI agents & chatbots',
    description:
      'One LLM-powered feature integrated into your product: agents, chatbots, RAG search, or document extraction.',
    stack: 'Python · LangChain · OpenAI and Claude APIs',
  },
  {
    title: 'Automation pipelines',
    description:
      'Replace a manual process with web scraping, data pipelines, and API integrations. The same kind of B2B pipelines that cut manual processing by up to 80% at Inventiv.',
    stack: 'Python · FastAPI · Docker',
  },
  {
    title: 'Full-stack applications',
    description: 'Production web and mobile apps with AI embedded where it adds real value.',
    stack: 'Next.js · React · Supabase · Flutter',
  },
  {
    title: 'API & backend services',
    description: 'REST and streaming APIs, database design, and Supabase integration.',
    stack: 'FastAPI · Node.js · Postgres',
  },
];

export default function ServicesList() {
  return (
    <ul data-testid="services-grid" className="divide-y divide-rule border-y border-rule">
      {SERVICES.map((service) => (
        <li key={service.title} className="grid gap-3 py-6 sm:grid-cols-5 sm:gap-8">
          <h3 className="display-condensed font-display text-xl font-bold leading-tight text-ink sm:col-span-2">
            {service.title}
          </h3>
          <div className="sm:col-span-3">
            <p className="text-sm leading-relaxed text-muted">{service.description}</p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-ink">{service.stack}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
