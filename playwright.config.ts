import { defineConfig, devices } from '@playwright/test';

const DEV_SERVER_URL = 'http://localhost:3000';
const DEV_SERVER_STARTUP_TIMEOUT_IN_MILLISECONDS = 120_000;
const MOBILE_VIEWPORT_WIDTH_IN_PIXELS = 390;

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL: DEV_SERVER_URL,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'desktop-chromium',
      use: { ...devices['Desktop Chrome'], viewport: { width: 1280, height: 800 } },
    },
    {
      name: 'mobile-chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: MOBILE_VIEWPORT_WIDTH_IN_PIXELS, height: 844 },
        isMobile: true,
        hasTouch: true,
      },
    },
  ],
  webServer: {
    command: 'npm run dev',
    url: DEV_SERVER_URL,
    reuseExistingServer: !process.env.CI,
    timeout: DEV_SERVER_STARTUP_TIMEOUT_IN_MILLISECONDS,
  },
});
