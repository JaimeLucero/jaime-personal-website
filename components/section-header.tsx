export default function SectionHeader(props: { eyebrow: string; title: string; lede?: string }) {
  return (
    <div className="mb-10">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">{props.eyebrow}</p>
      <h2 className="display-condensed mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
        {props.title}
      </h2>
      {props.lede && <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">{props.lede}</p>}
    </div>
  );
}
