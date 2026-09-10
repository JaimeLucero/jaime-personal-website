import type { ReactNode } from 'react';
import { Bot, Workflow, AppWindow, Server } from 'lucide-react';
import Reveal from './reveal';

const SERVICE_ICON_SIZE_IN_PIXELS = 22;

type Service = {
  icon: ReactNode;
  title: string;
  description: string;
  stack: string;
};

const SERVICES: Service[] = [
  {
    icon: <Bot size={SERVICE_ICON_SIZE_IN_PIXELS} strokeWidth={1.75} />,
    title: 'AI agents & chatbots',
    description:
      'One LLM-powered feature integrated into your product: agents, chatbots, RAG search, or document extraction.',
    stack: 'Python · LangChain · OpenAI and Claude APIs',
  },
  {
    icon: <Workflow size={SERVICE_ICON_SIZE_IN_PIXELS} strokeWidth={1.75} />,
    title: 'Automation pipelines',
    description:
      'Replace a manual process with web scraping, data pipelines, and API integrations. The same kind of B2B pipelines that cut manual processing by up to 80%.',
    stack: 'Python · FastAPI · Docker',
  },
  {
    icon: <AppWindow size={SERVICE_ICON_SIZE_IN_PIXELS} strokeWidth={1.75} />,
    title: 'Full-stack applications',
    description: 'Production web and mobile apps with AI embedded where it adds real value.',
    stack: 'Next.js · React · Supabase · Flutter',
  },
  {
    icon: <Server size={SERVICE_ICON_SIZE_IN_PIXELS} strokeWidth={1.75} />,
    title: 'API & backend services',
    description: 'REST and streaming APIs, database design, and Supabase integration.',
    stack: 'FastAPI · Node.js · Postgres',
  },
];

export default function ServicesList() {
  return (
    <ul data-testid="services-grid" className="grid gap-px border border-rule bg-rule sm:grid-cols-2">
      {SERVICES.map((service, index) => (
        <li key={service.title} className="bg-surface">
          <Reveal
            staggerIndex={index}
            className="group flex h-full gap-4 p-6 transition-colors hover:bg-accent-soft/40">
          <span
            aria-hidden="true"
            className="flex h-11 w-11 shrink-0 items-center justify-center bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-paper">
            {service.icon}
          </span>
          <div>
            <h3 className="type-card-title">{service.title}</h3>
            <p className="type-body mt-2">{service.description}</p>
            <p className="type-label mt-3">{service.stack}</p>
          </div>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
