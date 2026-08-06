import { test, expect } from '@playwright/test';

test('Exercise 3: Complete a Registration Form', async ({ page }) => {
  await page.goto('/module-2/exercise-3');

  // Fill text fields
  await page.locator('#firstName').fill('John');
  await page.locator('#lastName').fill('Doe');

  // Select dropdown option
  await page.locator('#country').selectOption('pl'); // Poland

  // Check checkboxes
  await page.locator('#newsletter').check();
  await page.locator('#terms').check();

  // Submit form
  await page.locator('#register-btn').click();

  // Verify success message
  const successMsg = page.locator('#success-message');
  await expect(successMsg).toBeVisible();
  await expect(successMsg).toContainText('Thank you for registering, John!');
});
