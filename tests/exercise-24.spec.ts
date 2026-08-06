import { test, expect } from '@playwright/test';

test('Exercise 24: Navigation and History', async ({ page }) => {
  await page.goto('/module-5/exercise-24');

  // Navigate to subpage
  await page.getByTestId('nav-subpage-link').click();
  
  // Verify URL and content on subpage
  await expect(page).toHaveURL(/\/module-5\/exercise-24\/subpage/);
  await expect(page.locator('h3')).toHaveText('Welcome to the Subpage');

  // Go back using browser history
  await page.goBack();
  await expect(page).toHaveURL(/\/module-5\/exercise-24/);
  await expect(page.locator('h2')).toContainText('Exercise 24');

  // Go forward
  await page.goForward();
  await expect(page).toHaveURL(/\/module-5\/exercise-24\/subpage/);
});
