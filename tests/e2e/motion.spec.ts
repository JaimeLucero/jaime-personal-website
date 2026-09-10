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
