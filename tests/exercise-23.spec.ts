import { test, expect } from '@playwright/test';

test('Exercise 23: Work with Iframes', async ({ page }) => {
  await page.goto('/module-5/exercise-23');

  // Locate the iframe
  const frameLocator = page.frameLocator('#exercise-iframe');

  // Interact with elements inside the iframe
  const iframeInput = frameLocator.locator('#iframe-input');
  await iframeInput.fill('Hello from Playwright!');
  
  await frameLocator.locator('#iframe-btn').click();

  // Verify action inside iframe
  await expect(frameLocator.locator('#iframe-result')).toHaveText('Action received: Hello from Playwright!');
});
