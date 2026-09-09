type Specification = {
  value: string;
  label: string;
};

const SPECIFICATIONS: Specification[] = [
  { value: '15+', label: 'AI features shipped' },
  { value: '80%', label: 'Less manual processing' },
  { value: '1,000+', label: 'Users supported' },
  { value: '99.9%', label: 'Uptime' },
];

export default function SpecificationTable() {
  return (
    <div className="border border-rule bg-surface">
      <p className="type-label border-b border-rule px-4 py-2 text-[10px]">Specification</p>
      <dl data-testid="hero-metrics" className="divide-y divide-rule">
        {SPECIFICATIONS.map((specification) => (
          <div key={specification.label} className="flex items-baseline justify-between gap-4 px-4 py-3">
            <dt className="type-label">{specification.label}</dt>
            <dd className="type-metric text-[26px]">{specification.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
