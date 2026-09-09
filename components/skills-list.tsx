import Image from 'next/image';

const SKILL_ICON_SIZE_IN_PIXELS = 16;

type Skill = {
  name: string;
  iconPath?: string;
};

type SkillGroup = {
  name: string;
  skills: Skill[];
};

const SKILL_GROUPS: SkillGroup[] = [
  {
    name: 'Languages',
    skills: [
      { name: 'Python', iconPath: '/python.svg' },
      { name: 'TypeScript', iconPath: '/typescript.svg' },
      { name: 'Dart' },
    ],
  },
  {
    name: 'AI',
    skills: [
      { name: 'LangChain', iconPath: '/langchain.svg' },
      { name: 'OpenAI API', iconPath: '/openai.svg' },
      { name: 'Claude API' },
      { name: 'TensorFlow' },
    ],
  },
  {
    name: 'Frameworks',
    skills: [
      { name: 'Next.js', iconPath: '/next.svg' },
      { name: 'React' },
      { name: 'FastAPI', iconPath: '/fastapi.svg' },
      { name: 'Flutter' },
      { name: 'Laravel' },
      { name: 'Tailwind' },
    ],
  },
  {
    name: 'Infrastructure',
    skills: [
      { name: 'Supabase', iconPath: '/supabase.svg' },
      { name: 'Docker' },
      { name: 'Vercel' },
      { name: 'Git', iconPath: '/git.svg' },
      { name: 'GitHub', iconPath: '/github.svg' },
      { name: 'Postman' },
    ],
  },
];

export default function SkillsList() {
  return (
    <dl data-testid="skills-grid" className="grid gap-6 sm:grid-cols-2">
      {SKILL_GROUPS.map((skillGroup) => (
        <div key={skillGroup.name}>
          <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">{skillGroup.name}</dt>
          <dd className="mt-2 flex flex-wrap gap-2">
            {skillGroup.skills.map((skill) => (
              <span
                key={skill.name}
                className="inline-flex items-center gap-2 rounded-sm border border-rule bg-surface px-2.5 py-1 text-sm text-ink">
                {skill.iconPath && (
                  <Image src={skill.iconPath} alt="" width={SKILL_ICON_SIZE_IN_PIXELS} height={SKILL_ICON_SIZE_IN_PIXELS} className="h-4 w-4 object-contain" />
                )}
                {skill.name}
              </span>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  );
}
