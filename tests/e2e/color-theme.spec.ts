import { test, expect } from '@playwright/test';

const DARK_CLASS_NAME = 'dark';

test('site opens in dark mode by default', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('html')).toHaveClass(new RegExp(`\\b${DARK_CLASS_NAME}\\b`));
  await expect(page.getByTestId('theme-toggle').locator('visible=true')).toHaveAttribute('aria-label', 'Switch to light mode');
});

test('theme toggle switches to light mode and remembers it after reload', async ({ page }) => {
  await page.goto('/');
  const themeToggle = page.getByTestId('theme-toggle').locator('visible=true');

  await themeToggle.click();
  await expect(page.locator('html')).not.toHaveClass(new RegExp(`\\b${DARK_CLASS_NAME}\\b`));
  await expect(themeToggle).toHaveAttribute('aria-label', 'Switch to dark mode');

  await page.reload();
  await expect(page.locator('html')).not.toHaveClass(new RegExp(`\\b${DARK_CLASS_NAME}\\b`));

  await page.getByTestId('theme-toggle').locator('visible=true').click();
  await expect(page.locator('html')).toHaveClass(new RegExp(`\\b${DARK_CLASS_NAME}\\b`));
});
