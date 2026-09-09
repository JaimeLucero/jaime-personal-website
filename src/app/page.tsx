import SiteSidebar from '../../components/site-sidebar';
import HeroIntro from '../../components/hero-intro';
import ProblemAndBenefits from '../../components/problem-and-benefits';
import SectionHeader from '../../components/section-header';
import ServicesList from '../../components/services-list';
import CaseStudyRow from '../../components/case-study-row';
import ProjectRow from '../../components/project-row';
import ExperienceList from '../../components/experience-list';
import SkillsList from '../../components/skills-list';
import FaqList from '../../components/faq-list';
import ContactSection from '../../components/contact-section';
import SiteFooter from '../../components/site-footer';
import Reveal from '../../components/reveal';
import projectsData from '../data/projects.json';
import { isCaseStudy, type Project } from '../data/project';
import {
  CONTACT_SECTION_ID,
  FAQ_SECTION_ID,
  PROJECTS_SECTION_ID,
  SERVICES_SECTION_ID,
  EXPERIENCE_SECTION_ID,
} from '../navigation/navigation-items';

const SECTION_CLASS_NAME = 'scroll-mt-20 pt-24 lg:scroll-mt-6';

export default function Page() {
  const projects: Project[] = projectsData;
  const caseStudies = projects.filter(isCaseStudy);
  const otherProjects = projects.filter((project) => !isCaseStudy(project));

  return (
    <div className="mx-auto max-w-site px-6 lg:px-12">
      <div className="lg:grid lg:grid-cols-12 lg:gap-16">
        <SiteSidebar />

        <main className="lg:col-span-7 lg:py-24">
          <HeroIntro />

          <section id={SERVICES_SECTION_ID} className={SECTION_CLASS_NAME}>
            <Reveal>
              <ProblemAndBenefits />
            </Reveal>
            <Reveal className="mt-20">
              <SectionHeader eyebrow="Services" title="How I can help" />
              <ServicesList />
            </Reveal>
          </section>

          <section id={PROJECTS_SECTION_ID} className={SECTION_CLASS_NAME}>
            <Reveal>
              <SectionHeader
                eyebrow="Case studies"
                title="Shipped work, with the result it produced"
                lede="Each entry shows the problem it solved and what changed once it was live."
              />
            </Reveal>
            <div className="space-y-6">
              {caseStudies.map((caseStudy) => (
                <Reveal key={caseStudy.id}>
                  <CaseStudyRow caseStudy={caseStudy} />
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-16">
              <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-accent">More work</h3>
              <ul data-testid="more-work-grid" className="mt-4 border-b border-rule">
                {otherProjects.map((project) => (
                  <ProjectRow key={project.id} project={project} />
                ))}
              </ul>
            </Reveal>
          </section>

          <section id={EXPERIENCE_SECTION_ID} className={SECTION_CLASS_NAME}>
            <Reveal>
              <SectionHeader eyebrow="Experience" title="Where the numbers come from" />
              <ExperienceList />
            </Reveal>
            <Reveal className="mt-12">
              <p className="mb-6 font-mono text-xs uppercase tracking-[0.14em] text-accent">Technical skills</p>
              <SkillsList />
            </Reveal>
          </section>

          <section id={FAQ_SECTION_ID} className={SECTION_CLASS_NAME}>
            <Reveal>
              <SectionHeader eyebrow="FAQ" title="Common questions" />
              <FaqList />
            </Reveal>
          </section>

          <section id={CONTACT_SECTION_ID} className={SECTION_CLASS_NAME}>
            <Reveal>
              <div className="rounded-xl border border-rule bg-panel p-7 shadow-[0_32px_64px_-32px_rgb(var(--color-ink)/0.5)] sm:p-10 lg:p-12">
                <SectionHeader
                  tone="dark"
                  eyebrow="Contact"
                  title="Have a process to automate or an AI feature to ship?"
                  lede="Send a short description of what you need and I will come back with a scope and a price."
                />
                <ContactSection />
              </div>
            </Reveal>
          </section>

          <SiteFooter />
        </main>
      </div>
    </div>
  );
}
