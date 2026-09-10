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

/*
  Spacing lives in the margin, not the padding, so a jump from the index lands
  on the section's first line of content rather than on top of its whitespace.
*/
const SECTION_CLASS_NAME = 'mt-32 scroll-mt-6 sm:mt-40 lg:mt-48 lg:scroll-mt-10';
const DETAIL_LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

export default function Page() {
  const projects: Project[] = projectsData;
  const caseStudies = projects.filter(isCaseStudy);
  const otherProjects = projects.filter((project) => !isCaseStudy(project));

  return (
    <>
      <SheetFrame />

      <div className="mx-auto max-w-site px-8 lg:px-14">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <div className="lg:col-span-4">
            <SheetSidebar />
          </div>

          <main className="lg:col-span-8 lg:pb-10">
            <HeroIntro />

            <div className="mt-32 sm:mt-40 lg:mt-48">
              <ProblemAndBenefits />
            </div>

            <section id={SERVICES_SECTION_ID} className={SECTION_CLASS_NAME}>
              <Reveal>
                <SectionHeader eyebrow="Services" title="How I can help" />
              </Reveal>
              <ServicesList />
            </section>

            <section id={PROJECTS_SECTION_ID} className={SECTION_CLASS_NAME}>
              <Reveal>
                <SectionHeader
                  eyebrow="Case studies"
                  title="Shipped work, with the result it produced"
                  lede="Each detail shows the problem it solved and what changed once it was live."
                />
              </Reveal>
              <div className="border-b border-rule">
                {caseStudies.map((caseStudy, index) => (
                  <Reveal key={caseStudy.id}>
                    <CaseStudyRow caseStudy={caseStudy} detailLetter={DETAIL_LETTERS[index]} />
                  </Reveal>
                ))}
              </div>

              <Reveal>
                <h3 className="type-eyebrow mt-16">More work</h3>
              </Reveal>
              <ul data-testid="more-work-grid" className="mt-4 border-b border-rule">
                {otherProjects.map((project, index) => (
                  <Reveal key={project.id} staggerIndex={index}>
                    <ProjectRow project={project} />
                  </Reveal>
                ))}
              </ul>
            </section>

            <section id={EXPERIENCE_SECTION_ID} className={SECTION_CLASS_NAME}>
              <Reveal>
                <SectionHeader eyebrow="Experience" title="Where the numbers come from" />
              </Reveal>
              <ExperienceList />
              <div className="mt-12">
                <Reveal>
                  <p className="type-eyebrow mb-6">Technical skills</p>
                </Reveal>
                <SkillsList />
              </div>
            </section>

            <section id={FAQ_SECTION_ID} className={SECTION_CLASS_NAME}>
              <Reveal>
                <SectionHeader eyebrow="FAQ" title="Common questions" />
              </Reveal>
              <FaqList />
            </section>

            <section id={CONTACT_SECTION_ID} className={SECTION_CLASS_NAME}>
              <Reveal className="border border-rule bg-panel p-7 sm:p-10">
                <SectionHeader
                  tone="dark"
                  eyebrow="Contact"
                  title="Have a process to automate or an AI feature to ship?"
                  lede="Send a short description of what you need and I will come back with a scope and a price."
                />
                <ContactSection />
              </Reveal>
            </section>

            <SiteFooter />
          </main>
        </div>
      </div>
    </>
  );
}
