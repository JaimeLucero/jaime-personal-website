type SkillGroup = {
  name: string;
  skills: string[];
};

const SKILL_GROUPS: SkillGroup[] = [
  { name: 'Languages', skills: ['Python', 'TypeScript', 'Dart'] },
  { name: 'AI', skills: ['LangChain', 'OpenAI API', 'Claude API', 'TensorFlow'] },
  { name: 'Frameworks', skills: ['Next.js', 'React', 'FastAPI', 'Flutter', 'Laravel', 'Tailwind'] },
  { name: 'Infrastructure', skills: ['Supabase', 'Docker', 'Vercel', 'Git', 'GitHub', 'Postman'] },
];

export default function SkillsList() {
  return (
    <dl data-testid="skills-grid" className="grid gap-6 sm:grid-cols-2">
      {SKILL_GROUPS.map((skillGroup) => (
        <div key={skillGroup.name}>
          <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">{skillGroup.name}</dt>
          <dd className="mt-2 flex flex-wrap gap-2">
            {skillGroup.skills.map((skill) => (
              <span key={skill} className="rounded-sm border border-rule bg-surface px-2.5 py-1 text-sm text-ink">
                {skill}
              </span>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  );
}
