export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-rule pb-8 pt-10">
      <p aria-hidden="true" className="display-condensed select-none font-display text-[clamp(2.75rem,9vw,7rem)] font-extrabold leading-none tracking-tight text-rule">
        Jaime Lucero
      </p>
      <p className="mt-6 font-mono text-xs uppercase tracking-[0.12em] text-muted">
        © 2026 Jaime Emanuel Lucero. Built with Next.js, deployed on Vercel.
      </p>
    </footer>
  );
}
