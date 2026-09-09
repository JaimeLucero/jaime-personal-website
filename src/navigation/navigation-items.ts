export type NavigationItem = {
  id: string;
  label: string;
};

export const HOME_SECTION_ID = 'home';
export const SERVICES_SECTION_ID = 'services';
export const PROJECTS_SECTION_ID = 'projects';
export const SKILLS_SECTION_ID = 'skills';
export const FAQ_SECTION_ID = 'faq';
export const CONTACT_SECTION_ID = 'contact';

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { id: HOME_SECTION_ID, label: 'Home' },
  { id: SERVICES_SECTION_ID, label: 'Services' },
  { id: PROJECTS_SECTION_ID, label: 'Case Studies' },
  { id: SKILLS_SECTION_ID, label: 'Skills' },
  { id: FAQ_SECTION_ID, label: 'FAQ' },
  { id: CONTACT_SECTION_ID, label: 'Contact' },
];
