import SheetFrame from '../../components/sheet-frame';
import SheetSidebar from '../../components/sheet-sidebar';
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
import projectsData from '../data/projects.json';
import { isCaseStudy, type Project } from '../data/project';
import {
  CONTACT_SECTION_ID,
  FAQ_SECTION_ID,
  PROJECTS_SECTION_ID,
  SERVICES_SECTION_ID,
  EXPERIENCE_SECTION_ID,
} from '../navigation/navigation-items';

const SECTION_CLASS_NAME = 'scroll-mt-24 pt-32 sm:pt-40 lg:pt-48 lg:scroll-mt-10';
const DETAIL_LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

export default function Page() {
  const projects: Project[] = projectsData;
  const caseStudies = projects.filter(isCaseStudy);
  const otherProjects = projects.filter((project) => !isCaseStudy(project));

  return (
    <>
      <SheetFrame />

      <div className="mx-auto max-w-site px-8 lg:px-14">
        <div className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-12 xl:gap-16">
          <div className="lg:col-span-4">
            <SheetSidebar />
          </div>

          <main className="lg:col-span-8 lg:py-10">
            <HeroIntro />

            <section id={SERVICES_SECTION_ID} className={SECTION_CLASS_NAME}>
              <ProblemAndBenefits />
              <div className="mt-32 sm:mt-40">
                <SectionHeader eyebrow="Services" title="How I can help" />
                <ServicesList />
              </div>
            </section>

            <section id={PROJECTS_SECTION_ID} className={SECTION_CLASS_NAME}>
              <SectionHeader
                eyebrow="Case studies"
                title="Shipped work, with the result it produced"
                lede="Each detail shows the problem it solved and what changed once it was live."
              />
              <div className="border-b border-rule">
                {caseStudies.map((caseStudy, index) => (
                  <CaseStudyRow key={caseStudy.id} caseStudy={caseStudy} detailLetter={DETAIL_LETTERS[index]} />
                ))}
              </div>

              <h3 className="type-eyebrow mt-16">More work</h3>
              <ul data-testid="more-work-grid" className="mt-4 border-b border-rule">
                {otherProjects.map((project) => (
                  <ProjectRow key={project.id} project={project} />
                ))}
              </ul>
            </section>

            <section id={EXPERIENCE_SECTION_ID} className={SECTION_CLASS_NAME}>
              <SectionHeader eyebrow="Experience" title="Where the numbers come from" />
              <ExperienceList />
              <div className="mt-12">
                <p className="type-eyebrow mb-6">Technical skills</p>
                <SkillsList />
              </div>
            </section>

            <section id={FAQ_SECTION_ID} className={SECTION_CLASS_NAME}>
              <SectionHeader eyebrow="FAQ" title="Common questions" />
              <FaqList />
            </section>

            <section id={CONTACT_SECTION_ID} className={SECTION_CLASS_NAME}>
              <div className="border border-rule bg-panel p-7 sm:p-10">
                <SectionHeader
                  tone="dark"
                  eyebrow="Contact"
                  title="Have a process to automate or an AI feature to ship?"
                  lede="Send a short description of what you need and I will come back with a scope and a price."
                />
                <ContactSection />
              </div>
            </section>

            <SiteFooter />
          </main>
        </div>
      </div>
    </>
  );
}
