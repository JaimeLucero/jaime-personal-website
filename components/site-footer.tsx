import TitleBlock from './title-block';

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-rule pb-10 pt-10">
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="type-label">Sheet end</p>
          <p className="type-small mt-2">© 2026 Jaime Emanuel Lucero. Built with Next.js, deployed on Vercel.</p>
        </div>
        <div className="lg:col-span-5">
          <TitleBlock />
        </div>
      </div>
    </footer>
  );
}
