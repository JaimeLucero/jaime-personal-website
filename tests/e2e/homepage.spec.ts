import { test, expect, type Page } from '@playwright/test';

const HERO_HEADLINE = 'I build AI agents and automations that ship to production.';
const HERO_METRIC_VALUES = ['15+', '80%', '1,000+', '99.9%'];
const NAVIGATION_LABELS = ['Services', 'Case Studies', 'Experience', 'FAQ', 'Contact'];
const CASE_STUDY_COUNT = 2;
const MORE_WORK_PROJECT_COUNT = 4;
const FAQ_COUNT = 4;
const SCROLL_SETTLE_TOLERANCE_IN_PIXELS = 110;

async function expectSectionAtTopOfViewport(page: Page, sectionId: string) {
  await expect
    .poll(async () => {
      const boundingBox = await page.locator(`#${sectionId}`).boundingBox();
      return boundingBox ? Math.abs(boundingBox.y) : Number.POSITIVE_INFINITY;
    })
    .toBeLessThan(SCROLL_SETTLE_TOLERANCE_IN_PIXELS);
}

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('hero states the offer and shows resume-backed metrics', async ({ page }) => {
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(HERO_HEADLINE);

  const metrics = page.getByTestId('hero-metrics');
  for (const metricValue of HERO_METRIC_VALUES) {
    await expect(metrics.getByText(metricValue, { exact: true })).toBeVisible();
  }
});

test('primary hero button scrolls to the contact section', async ({ page }) => {
  await page.getByRole('button', { name: 'Email Me About Your Project' }).click();
  await expectSectionAtTopOfViewport(page, 'contact');
  await expect(page.getByTestId('contact-form')).toBeVisible();
});

test('secondary hero button scrolls to case studies', async ({ page }) => {
  await page.getByRole('button', { name: 'See Case Studies' }).click();
  await expectSectionAtTopOfViewport(page, 'projects');
});

test('resume link points to a downloadable PDF', async ({ page }) => {
  const resumeLink = page.getByRole('link', { name: 'View Resume' });
  await expect(resumeLink).toHaveAttribute('href', '/resume.pdf');
  await expect(resumeLink).toHaveAttribute('target', '_blank');

  const resumeResponse = await page.request.get('/resume.pdf');
  expect(resumeResponse.ok()).toBe(true);
  expect(resumeResponse.headers()['content-type']).toContain('application/pdf');
});

test('case studies lead with ApplAI and link out to live projects', async ({ page }) => {
  const caseStudyCards = page.getByTestId('case-study-card');
  await expect(caseStudyCards).toHaveCount(CASE_STUDY_COUNT);

  const firstCaseStudy = caseStudyCards.first();
  await expect(firstCaseStudy.getByRole('heading', { level: 3 })).toHaveText('ApplAI');
  await expect(firstCaseStudy.getByText('75% less job-search time for applicants')).toBeVisible();

  const projectLink = firstCaseStudy.getByRole('link', { name: 'View project' });
  await expect(projectLink).toHaveAttribute('href', 'https://applai-1tpb.vercel.app/');
  await expect(projectLink).toHaveAttribute('target', '_blank');
  await expect(projectLink).toHaveAttribute('rel', /noopener/);
});

test('remaining projects render in the more-work grid', async ({ page }) => {
  const moreWorkGrid = page.getByTestId('more-work-grid');
  await expect(moreWorkGrid.getByRole('heading', { level: 3 })).toHaveCount(MORE_WORK_PROJECT_COUNT);
});

test('services, experience, and faq sections render their content', async ({ page }) => {
  await expect(page.getByTestId('services-grid').getByRole('heading', { level: 3 })).toHaveCount(4);
  await expect(page.getByTestId('benefits-list').getByRole('listitem')).toHaveCount(3);
  await expect(page.getByTestId('experience-strip').getByText('Inventiv')).toBeVisible();
  await expect(page.getByTestId('experience-strip').getByText('Tutorials Dojo')).toBeVisible();
  await expect(page.getByTestId('faq-list').getByRole('heading', { level: 3 })).toHaveCount(FAQ_COUNT);
});

test('contact form requires every field before it can submit', async ({ page }) => {
  const contactForm = page.getByTestId('contact-form');
  await contactForm.scrollIntoViewIfNeeded();

  await contactForm.getByRole('button', { name: 'Send Project Brief' }).click();
  await expect(contactForm.locator('input[name="senderName"]')).toBeFocused();
  expect(await contactForm.evaluate((form) => (form as HTMLFormElement).checkValidity())).toBe(false);

  await contactForm.locator('input[name="senderName"]').fill('Test Client');
  await contactForm.locator('input[name="senderEmail"]').fill('client@example.com');
  await contactForm.locator('textarea[name="projectDescription"]').fill('Automate our invoice intake.');
  expect(await contactForm.evaluate((form) => (form as HTMLFormElement).checkValidity())).toBe(true);
});

test('profile links open external profiles in a new tab', async ({ page }) => {
  const profileLinks = page.getByTestId('profile-links').getByRole('link');
  await expect(profileLinks).toHaveCount(4);

  await expect(profileLinks.filter({ hasText: 'Email' })).toHaveAttribute('href', 'mailto:jaimeemanuellucero@gmail.com');
  await expect(profileLinks.filter({ hasText: 'LinkedIn' })).toHaveAttribute('target', '_blank');
  await expect(profileLinks.filter({ hasText: 'GitHub' })).toHaveAttribute('href', 'https://github.com/JaimeLucero');
  await expect(profileLinks.filter({ hasText: 'Upwork' })).toHaveAttribute('href', /upwork\.com/);
});

test('navigation lists every section and scrolls to the selected one', async ({ page, isMobile }) => {
  if (isMobile) {
    await page.getByRole('button', { name: 'Toggle navigation menu' }).click();
  }

  const navigation = page.getByRole('list', { name: 'Main navigation' });
  await expect(navigation.getByRole('button')).toHaveText(NAVIGATION_LABELS);

  await navigation.getByRole('button', { name: 'FAQ' }).click();
  await expectSectionAtTopOfViewport(page, 'faq');

  if (isMobile) {
    await expect(navigation).toBeHidden();
  }
});

test('page loads without console errors', async ({ page }) => {
  const consoleErrors: string[] = [];
  page.on('console', (consoleMessage) => {
    if (consoleMessage.type() === 'error') consoleErrors.push(consoleMessage.text());
  });

  await page.reload();
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  expect(consoleErrors).toEqual([]);
});

test('sidebar marks the section under the viewport as current', async ({ page, isMobile }) => {
  test.skip(isMobile, 'Section navigation is collapsed behind the menu on mobile');
  const navigation = page.getByRole('list', { name: 'Main navigation' });

  await expect(navigation.locator('[aria-current="true"]')).toHaveCount(0);

  await navigation.getByRole('button', { name: 'Case Studies' }).click();
  await expect(navigation.getByRole('button', { name: 'Case Studies' })).toHaveAttribute('aria-current', 'true');
  await expect(navigation.locator('[aria-current="true"]')).toHaveCount(1);

  await page.evaluate(() => window.scrollTo({ top: 0 }));
  await expect(navigation.locator('[aria-current="true"]')).toHaveCount(0);
});
