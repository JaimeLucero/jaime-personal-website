type SectionTone = 'light' | 'dark';

const TITLE_COLOR_BY_TONE: Record<SectionTone, string> = {
  light: 'text-ink',
  dark: 'text-paper',
};

const LEDE_COLOR_BY_TONE: Record<SectionTone, string> = {
  light: 'text-muted',
  dark: 'text-paper/70',
};

const EYEBROW_COLOR_BY_TONE: Record<SectionTone, string> = {
  light: 'text-accent',
  dark: 'text-accent-soft',
};

export default function SectionHeader(props: { eyebrow: string; title: string; lede?: string; tone?: SectionTone }) {
  const tone = props.tone ?? 'light';

  return (
    <div className="mb-10">
      <p className={`font-mono text-xs uppercase tracking-[0.18em] ${EYEBROW_COLOR_BY_TONE[tone]}`}>{props.eyebrow}</p>
      <h2 className={`display-condensed mt-3 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl ${TITLE_COLOR_BY_TONE[tone]}`}>
        {props.title}
      </h2>
      {props.lede && <p className={`mt-4 max-w-xl text-base leading-relaxed ${LEDE_COLOR_BY_TONE[tone]}`}>{props.lede}</p>}
    </div>
  );
}
