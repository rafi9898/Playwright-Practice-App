import { test, expect } from '@playwright/test';

test('Exercise 29: Test Failed API Responses', async ({ page }) => {
  // Start on the UI page
  await page.goto('/module-6/exercise-29');

  // Intercept to ensure a consistent 500 error (even though the API is hardcoded to fail, 
  // mocking it makes the test deterministic regardless of backend changes)
  await page.route('/api/error', async route => {
    await route.fulfill({
      status: 500,
      contentType: 'application/json',
      body: JSON.stringify({ message: 'Critical Database Failure (Mocked)' })
    });
  });

  // Click the fetch button
  await page.locator('#fetch-error-btn').click();

  // Verify the application properly handled the 500 status and displayed the error
  const errorContainer = page.locator('#error-message-container');
  await expect(errorContainer).toBeVisible();
  await expect(errorContainer.locator('#error-text')).toHaveText('Critical Database Failure (Mocked)');
});
