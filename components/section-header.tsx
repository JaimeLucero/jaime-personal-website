type SectionTone = 'light' | 'dark';

const TITLE_COLOR_BY_TONE: Record<SectionTone, string> = {
  light: 'text-ink',
  dark: 'text-panel-ink',
};

const LEDE_COLOR_BY_TONE: Record<SectionTone, string> = {
  light: 'text-muted',
  dark: 'text-panel-ink/70',
};

const RULE_COLOR_BY_TONE: Record<SectionTone, string> = {
  light: 'border-rule',
  dark: 'border-panel-rule/20',
};

export default function SectionHeader(props: { eyebrow: string; title: string; lede?: string; tone?: SectionTone }) {
  const tone = props.tone ?? 'light';

  return (
    <div className="mb-10">
      <div className={`flex items-center gap-3 border-t ${RULE_COLOR_BY_TONE[tone]} pt-3`}>
        <span aria-hidden="true" className="h-2 w-2 bg-accent" />
        <p className="type-eyebrow">{props.eyebrow}</p>
      </div>
      <h2 className={`type-section mt-4 ${TITLE_COLOR_BY_TONE[tone]}`}>{props.title}</h2>
      {props.lede && <p className={`type-lede mt-4 max-w-2xl ${LEDE_COLOR_BY_TONE[tone]}`}>{props.lede}</p>}
    </div>
  );
}
