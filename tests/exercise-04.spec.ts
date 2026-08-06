import { test, expect } from '@playwright/test';

test('Exercise 4: Work with Dynamic Elements', async ({ page }) => {
  await page.goto('/module-2/exercise-4');

  // The button appears after 3 seconds, Playwright will automatically wait for it (up to default timeout).
  const dynamicBtn = page.getByTestId('dynamic-button');
  
  // Wait for it and click
  await dynamicBtn.click();

  // Assert the success message
  const message = page.locator('#dynamic-message');
  await expect(message).toBeVisible();
  await expect(message).toHaveText('Dynamic button clicked!');
});
