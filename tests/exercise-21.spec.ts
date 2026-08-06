import { test, expect } from '@playwright/test';

test('Exercise 21: Manage Multiple Browser Tabs', async ({ page, context }) => {
  await page.goto('/module-5/exercise-21');

  // Start waiting for new page before clicking
  const pagePromise = context.waitForEvent('page');
  
  // Click the link that opens in a new tab (target="_blank")
  await page.getByTestId('new-tab-link').click();
  
  const newPage = await pagePromise;
  await newPage.waitForLoadState();

  // Verify we are on the new page
  await expect(newPage).toHaveTitle(/Playwright/); // Note: external site, title may vary.
  
  // We can close the new page and go back to original
  await newPage.close();
  
  // Original page is still intact
  await expect(page.getByTestId('new-tab-link')).toBeVisible();
});
