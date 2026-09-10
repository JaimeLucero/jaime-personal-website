import { test, expect, type Page } from '@playwright/test';

const ANIMATED_SELECTORS = [
  'h1',
  '#home p.type-lede',
  '#home figure',
  '#home [data-testid=hero-metrics]',
];

async function readOpacities(page: Page): Promise<number[]> {
  return page.evaluate(
    (selectors) => selectors.map((selector) => Number(getComputedStyle(document.querySelector(selector)!).opacity)),
    ANIMATED_SELECTORS
  );
}

test('every animated element of the hero settles fully visible', async ({ page }) => {
  await page.goto('/');
  await expect.poll(async () => Math.min(...(await readOpacities(page)))).toBe(1);
  for (const selector of ANIMATED_SELECTORS) {
    await expect(page.locator(selector).first()).toBeVisible();
  }
});

test('the schematic draws all three stages and both wires', async ({ page, isMobile }) => {
  test.skip(isMobile, 'Below the sm breakpoint the schematic is replaced by a stacked list');
  await page.goto('/');
  const schematic = page.locator('#home svg[role=img]');
  await expect(schematic.locator('.pipeline-stage')).toHaveCount(3);
  await expect(schematic.locator('.pipeline-wire')).toHaveCount(2);

  await expect
    .poll(async () =>
      page.evaluate(() =>
        [...document.querySelectorAll('#home svg[role=img] .pipeline-stage, #home svg[role=img] .pipeline-wire')].every(
          (element) => Number(getComputedStyle(element).opacity) === 1
        )
      )
    )
    .toBe(true);
});

test.describe('with reduced motion', () => {
  test.use({ reducedMotion: 'reduce' });

  test('hero content is visible without waiting on an animation', async ({ page }) => {
    await page.goto('/');
    expect(await readOpacities(page)).toEqual(ANIMATED_SELECTORS.map(() => 1));
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });
});

const REVEALED_SECTION_SELECTORS = [
  '[data-testid=benefits-list]',
  '[data-testid=services-grid]',
  '[data-testid=case-study-card]',
  '[data-testid=more-work-grid]',
  '[data-testid=experience-strip]',
  '[data-testid=skills-grid]',
  '[data-testid=faq-list]',
  '[data-testid=contact-form]',
];

test('every revealed block is fully visible once scrolled to', async ({ page }) => {
  await page.goto('/');

  for (const selector of REVEALED_SECTION_SELECTORS) {
    const block = page.locator(selector).first();
    await block.scrollIntoViewIfNeeded();
    await expect(block).toBeVisible();
    await expect
      .poll(async () =>
        block.evaluate((element) => {
          let node: HTMLElement | null = element as HTMLElement;
          while (node) {
            if (Number(getComputedStyle(node).opacity) < 1) return false;
            node = node.parentElement;
          }
          return true;
        })
      )
      .toBe(true);
  }
});

test('nothing is left stranded invisible after a full scroll to the footer', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' }));

  await expect
    .poll(async () =>
      page.evaluate(
        () => [...document.querySelectorAll('.reveal-armed')].filter((element) => !element.classList.contains('reveal-in')).length
      )
    )
    .toBe(0);
});
